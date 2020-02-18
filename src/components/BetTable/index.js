import React from 'react';
import { Subscription } from 'react-apollo';
import { gql } from 'apollo-boost';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import moment from 'moment';

import './styles.css';

const BETS_ADDED_SUBSCRIPTION = gql`
  subscription betAdded {
    betAdded {
      time
      bet
      payout
      profit
    }
  }
`;

function betFormatter(cell, row) {
  return `<img width="11px" height="11px" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/16/Bitcoin-BTC-icon.png" alt="BTC"/> ${cell}`;
}

function profitFormatter(cell, row) {
  if (Number(cell) > 0)
    return `<img width="11px" height="11px" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/16/Bitcoin-BTC-icon.png" alt="BTC"/> <font color='#73FC7F'><b>+${cell}<b><font>`;
  else
    return `<img width="11px" height="11px" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/16/Bitcoin-BTC-icon.png" alt="BTC"/> <font color='#FD7979'><b>${cell}<b><font>`;
}

const BetTable = () => {
  const data = [];

  return (
    <Subscription subscription={BETS_ADDED_SUBSCRIPTION} shouldResubscribe>
      {({ data: bets, loading, error }) => {
        if (loading) return <span style={{ color: 'white' }}>Loading...</span>;
        if (
          error ||
          bets === undefined ||
          bets.betAdded === null ||
          bets.betAdded.length === 0
        )
          return <span style={{ color: 'white' }}>Error</span>;
        if (data.length >= 10) data.shift();
        data.push({
          ...bets.betAdded,
          time: moment(new Date(bets.betAdded.time).toLocaleString()).format("DD.mm.YY hh:MM:ss"),
          bet: bets.betAdded.bet / 1000,
          multiplier: 'x' + bets.betAdded.payout / 4,
          profit: bets.betAdded.profit / 1000,
        });
        if (data.length < 10)
          return <span style={{ color: 'white' }}>Loading({data.length} / 10)...</span>;
        return (
          <BootstrapTable data={data}>
            <TableHeaderColumn
              width="35%"
              dataField="time"
              isKey
              thStyle={{ whiteSpace: 'nowrap' }}
            >
              TIME
            </TableHeaderColumn>
            <TableHeaderColumn
              width="25%"
              dataField="bet"
              thStyle={{ whiteSpace: 'nowrap' }}
              dataFormat={ betFormatter }
            >
              BET
            </TableHeaderColumn>
            <TableHeaderColumn
              width="20%"
              dataField="multiplier"
              thStyle={{ whiteSpace: 'nowrap' }}
              class="hidden-xs"
            >
              MULTIPLIER
            </TableHeaderColumn>
            <TableHeaderColumn
              width="20%"
              dataField="profit"
              thStyle={{ whiteSpace: 'nowrap' }}
              dataFormat={ profitFormatter }
              class="hidden-xs"
            >
              PROFIT
            </TableHeaderColumn>
          </BootstrapTable>
        );
      }}
    </Subscription>
  );
};

export default BetTable;
