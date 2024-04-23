import React from 'react'
import { Button, Flex } from 'antd';

const Devedor = () => {
  return (
    <div className="devedor">
      <div className="client" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Aqui estarão os clientes com pagamento pendente!!</h1>

        <Flex gap="small" wrap="wrap" style={{ marginTop: '20px' }}>
            <Button type="primary">Mostrar pendências!</Button>
        </Flex>
    </div>
    </div>
  )
}

export default Devedor