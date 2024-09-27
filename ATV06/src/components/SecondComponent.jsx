import React, { useState, useEffect } from 'react';

function Propt(props) {
  return (
    <li onClick={() => props.onSelect(props.id)} style={{ cursor: 'pointer' }}>
      {props.nome}
    </li>
  );
}

const SecondComponent = () => {
  const [selectedList, setSelectedList] = useState(''); // Inicialmente vazio

  const [Filmes] = useState([
    { id: 1, nome: 'Duna 2', frase: 'Uma jornada épica no deserto.' },
    { id: 2, nome: 'Star Wars', frase: 'A galáxia muito, muito distante.' },
    { id: 3, nome: 'Matrix', frase: 'A realidade é uma simulação.' },
    { id: 4, nome: 'Interstellar', frase: 'A busca por novos mundos.' },
    { id: 5, nome: 'Senhor dos Anéis', frase: 'A jornada do anel.' },
  ]);

  const [Paises] = useState([
    { id: 1, nome: 'Nova Zelândia', frase: 'Cenários de tirar o fôlego.' },
    { id: 2, nome: 'Chile', frase: 'Montanhas e desertos incríveis.' },
    { id: 3, nome: 'Irlanda', frase: 'Campos verdes e castelos antigos.' },
    { id: 4, nome: 'Inglaterra', frase: 'História e modernidade se encontram.' },
    { id: 5, nome: 'Japão', frase: 'Tradição e tecnologia.' },
  ]);

  const [Lutas] = useState([
    { id: 1, nome: 'MMA', frase: 'O octógono mais famoso do mundo.' },
    { id: 2, nome: 'Boxe', frase: 'O esporte dos reis.' },
    { id: 3, nome: 'Jiu-Jitsu', frase: 'A arte suave.' },
    { id: 4, nome: 'Kung Fu', frase: 'A arte marcial chinesa.' },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (id, type) => {
    const item = type.find((item) => item.id === id);
    setSelectedItem(item ? item.frase : null);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('ul')) {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const getSelectedArray = () => {
    switch (selectedList) {
      case 'Filmes':
        return Filmes;
      case 'Paises':
        return Paises;
      case 'Lutas':
        return Lutas;
      default:
        return [];
    }
  };

  return (
    <>
      <div>
        <h1>Escolha uma categoria:</h1>
        <select onChange={(e) => setSelectedList(e.target.value)} value={selectedList}>
          <option value="">Selecione uma categoria</option> {/* Categoria padrão */}
          <option value="Filmes">Filmes</option>
          <option value="Paises">Países</option>
          <option value="Lutas">Lutas</option>
        </select>
      </div>
      <br />
      {selectedList && ( // Renderiza a lista apenas quando uma categoria é selecionada
        <div>
          <h1>Lista de {selectedList}</h1>
          <ul>
            {getSelectedArray().map((item) => (
              <Propt
                key={item.id}
                nome={selectedItem === item.frase ? item.frase : item.nome}
                onSelect={(id) => handleSelect(id, getSelectedArray())}
                id={item.id}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SecondComponent;
