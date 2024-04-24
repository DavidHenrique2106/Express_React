import React from 'react';
import { Modal, Button } from 'antd';

const ClientModal = ({ visible, onCancel, onSubmit }) => {
  return (
    <Modal
    style={{textAlign: 'center'}}
      title="Forma de Pagamento"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <div>
        <Button style={{position: 'relative', right: '15px', top: '10px'}} onClick={() => onSubmit('A prazo')}>A prazo</Button>
        <Button style={{position:"relative", left: '15px', top: '10px'}} onClick={() => onSubmit('A vista')}>A vista</Button>
      </div>
    </Modal>
  );
};

export default ClientModal;
