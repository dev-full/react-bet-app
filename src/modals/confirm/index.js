import React from 'react';

import './styles.css';

const modal = (props) => {
    return (
        <div>
            <div className="overlay" style={{
                display: props.show ? 'block' : 'none',
            }}>
            </div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    display: props.show ? 'block' : 'none',
                }}>
                <div className="modal-header">
                    <img src={require('../../assets/images/warning.svg')}></img>
                    <h3>CONFIRM</h3>
                    <span className="close-modal-btn" onClick={props.close}>X</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default modal;
