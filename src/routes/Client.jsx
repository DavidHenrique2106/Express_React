import React from 'react'
import { Button, Flex } from 'antd';

const Client = () => {
  return (
    <div className="client" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Aqui estarão todos os clientes cadastrados da página principal</h1>

        <Flex gap="small" wrap="wrap" style={{ marginTop: '20px' }}>
            <Button type="primary">Mostrar clientes!</Button>
        </Flex>
    </div>
  )
}

export default Client
