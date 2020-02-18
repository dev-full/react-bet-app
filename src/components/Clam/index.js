import React, { useState } from 'react';
import './styles.css';
import ConfirmModal from '../..//modals/confirm';

const Clam = () => {
    const [showModal, setModalVisible] = useState(false);
    const onBetConfirm = () => {
      setModalVisible(true);
    }
    const onCloseConfirm = () => {
      setModalVisible(false);
    }
    
    return (
      <div class="bet-scontainer">
        <img
          className="clam-top"
          src={require('../..//assets/images/ClamTop.png')}
          alt="Top"
          onClick={onBetConfirm}
        />
        <img
          className="clam-bottom"
          src={require('../../assets/images/ClamBottom.png')}
          alt="Lower"
        />
        <ConfirmModal className="modal" show={showModal} close={onCloseConfirm}/>
      </div>
    );
};

export default Clam;