import React, { useState, useEffect } from 'react';

function Propt(props) {
  return (
    <li onClick={() => props.onSelect(props.id)} style={{ cursor: 'pointer' }}>
      {props.nome}
    </li>
  );
}

const SecondComponent = () => {
  const [Movies, setMovies] = useState([
    { id: 1, nome: 'Duna 2', frase: 'Uma jornada épica no deserto.' },
    { id: 2, nome: 'Star Wars', frase: 'A galáxia muito, muito distante.' },
    { id: 3, nome: 'Matrix', frase: 'A realidade é uma simulação.' },
    { id: 4, nome: 'Interstellar', frase: 'A busca por novos mundos.' },
    { id: 5, nome: 'Senhor dos Anéis', frase: 'A jornada do anel.' },
  ]);

  const [Paises, setPaises] = useState([
    { id: 1, nome: 'Nova Zelândia', frase: 'Cenários de tirar o fôlego.' },
    { id: 2, nome: 'Chile', frase: 'Montanhas e desertos incríveis.' },
    { id: 3, nome: 'Irlanda', frase: 'Campos verdes e castelos antigos.' },
    { id: 4, nome: 'Inglaterra', frase: 'História e modernidade se encontram.' },
    { id: 5, nome: 'Japão', frase: 'Tradição e tecnologia.' },
  ]);

  const [Lutas, setLutas] = useState([
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

  // Função para lidar com cliques fora dos itens da lista
  const handleClickOutside = (e) => {
    if (!e.target.closest('ul')) {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    // Adiciona o listener de clique ao documento
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Remove o listener ao desmontar o componente
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Qual Filmes eu tenho na minha estante ???</h1>
        <ul>
          {Movies.map((movie) => (
            <Propt key={movie.id} nome={selectedItem === movie.frase ? movie.frase : movie.nome} onSelect={(id) => handleSelect(id, Movies)} id={movie.id} />
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h1>Para onde quero ir ???</h1>
        <ul>
          {Paises.map((pais) => (
            <Propt key={pais.id} nome={selectedItem === pais.frase ? pais.frase : pais.nome} onSelect={(id) => handleSelect(id, Paises)} id={pais.id} />
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h1>Qual luta eu pratico ???</h1>
        <ul>
          {Lutas.map((luta) => (
            <Propt key={luta.id} nome={selectedItem === luta.frase ? luta.frase : luta.nome} onSelect={(id) => handleSelect(id, Lutas)} id={luta.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SecondComponent;