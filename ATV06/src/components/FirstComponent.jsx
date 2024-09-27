import React, { useState } from 'react';

const FirstComponent = () => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem(`Olá ${nome} de matrícula ${matricula}.`);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input 
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <br/>
          <label>Sua Matricula:
            <input 
              type="number"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
            />
          </label>
          <br/>
          <button type="submit">Enviar</button>
        </form>
        
        {mensagem && <p>{mensagem}</p>}
      </div>
    </>
  );
}

export default FirstComponent;
