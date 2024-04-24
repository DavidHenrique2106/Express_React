import React from 'react'
import {  Button, Flex } from 'antd';
import ClientModal from '../components/ClientModal';

const Client = () => {
  return (

    <div className="client">
        <h1>Aqui estará todos os clientes cadastrados da pag principal</h1>

        <Flex gap="small" wrap="wrap" style={{ position: 'relative', top: '20px', textAlign: 'center', }}>
            <Button type="primary">Mostrar clientes!</Button>
          </Flex>

          <div style={{position: 'relative', top: '50px'}} className="modal">
            <ClientModal/>
          </div>

    </div>

    )
}

export default Client