import React from 'react';
import { Modal } from 'antd';
import './thanks.css';
const Thanks = (props) => {
    const isModalOpen = props.status;
    return (
        <Modal open={isModalOpen} footer={null} closable={false} width={620}>
            <p className='words'>Thank you for purchasing our product!!!</p>

        </Modal>
    );
};
export default Thanks;