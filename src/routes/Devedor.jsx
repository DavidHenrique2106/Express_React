import React from 'react'
import { Button, Flex } from 'antd';

const Devedor = () => {
  return (
    <div className="devedor">
      <div className="client" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Aqui estraão todos os clintes que estão me devendo!</h1>

        <Flex gap="small" wrap="wrap" style={{ marginTop: '20px' }}>
            <Button type="primary">Mostrar clientes!</Button>
        </Flex>
    </div>
    </div>
  )
}

export default Devedor