import React, { useState } from 'react';
import { Card, Button, Flex } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import ClientModal from './components/ClientModal'; 


const App = () => {
  const [nome, setNome] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [insta, setInsta] = useState('');
  const [descri, setDescri] = useState('');
  const [valor, setValor] = useState('');
  const [datacompra, setDatacompra] = useState('');
  const [pagamento, setPagamento] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleEnviar = () => {
    if (!nome || !rg || !cpf || !nascimento || !email || !tel || !insta || !descri || !valor || !datacompra || !pagamento) {
      toast.error('Preencha todos os campos!');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleModalSubmit = (opcaoPagamento) => {
    console.log('Dados enviados para o console:', {
      nome,
      rg,
      cpf,
      nascimento,
      email,
      tel,
      insta,
      descri,
      valor,
      datacompra,
      pagamento: opcaoPagamento,
    });

    toast.success('Informações enviadas com sucesso!');

    setIsModalOpen(false);
    setNome('');
    setRg('');
    setCpf('');
    setNascimento('');
    setEmail('');
    setTel('');
    setInsta('');
    setDescri('');
    setValor('');
    setDatacompra('');
    setPagamento('');
  };

  return (
    <div>
      <ToastContainer />
      <div className="Navbar">
        <Navbar />
      </div>
      <h1 style={{ textAlign: 'center', color: 'gold' }}>Dyani Modas!!</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card
          title="Cadastro de Clientes"
          bordered={false}
          style={{ width: 300, border: '2px solid #000', top: '-85px' }}
        >
          <input type="text" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="number" placeholder='RG' value={rg} onChange={(e) => setRg(e.target.value)} />
          <input type="number" placeholder='CPF' value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <input type="date" placeholder='Nascimento' value={nascimento} onChange={(e) => setNascimento(e.target.value)} />
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="number" placeholder='Telefone' value={tel} onChange={(e) => setTel(e.target.value)} />
          <input type="text" placeholder='Instagram' value={insta} onChange={(e) => setInsta(e.target.value)} />
          <input type="text" placeholder='Descrição compra' value={descri} onChange={(e) => setDescri(e.target.value)} />
          <input type="number" placeholder='Valor da compra' value={valor} onChange={(e) => setValor(e.target.value)} />
          <input type="datetime-local" placeholder='Data da compra' value={datacompra} onChange={(e) => setDatacompra(e.target.value)} />
          <input type="text" placeholder='Pagamento' value={pagamento} onChange={(e) => setPagamento(e.target.value)} />
          <Flex gap="small" wrap="wrap" style={{ position: 'relative', top: '20px' }}>
            <Button type="primary" onClick={handleEnviar}>Enviar</Button>
          </Flex>
        </Card>
      </div>
      <ClientModal
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default App;
