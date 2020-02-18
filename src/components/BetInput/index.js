import React, { useState } from 'react';

import './styles.css';

const BetInput = props => {
  const [betMount, setBetMount] = useState(0.04885313);

  const handleChange = e => {
    setBetMount(e.target.value);
  };

  return (
    <div className="bet-container">
      <div className="bet-input">
        <span className="bet-input-text">BET AMOUNT</span>
        <div className="bet-input-container">
          <img
            className="bet-input-icon"
            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/16/Bitcoin-BTC-icon.png"
            alt="BTC"
          />
          <input
            className="bet-input-ctrl"
            type="text"
            value={betMount}
            onChange={handleChange}
            maxLength={10}
          />
        </div>
      </div>
      <div className="bet-input-actions">
        <button className="bet-input-action">1/2</button>
        <button className="bet-input-action">x2</button>
      </div>
    </div>
  );
};

export default BetInput;
