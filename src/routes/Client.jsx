import React from 'react'
import {  Button, Flex } from 'antd';

const Client = () => {
  return (

    <div className="client">
        <h1>Aqui estará todos os clientes cadastrados da pag principal</h1>

        <Flex gap="small" wrap="wrap" style={{ position: 'relative', top: '20px', textAlign: 'center', }}>
            <Button type="primary">Mostrar clientes!</Button>
          </Flex>
    </div>

    )
}

export default Client