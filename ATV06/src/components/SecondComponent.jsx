import React from 'react'

function Propt(props) {
    return <li>{props.nome} - {props.frase}</li>
}

// function Pais(props) {
//     return <li> {props.nome} </li>
// }

const SecondComponent = () => {
    const Movies = [
        { id: 1, nome: 'Duna 2', frase: 'Uma jornada épica no deserto.' },
        { id: 2, nome: 'Star Wars', frase: 'A galáxia muito, muito distante.' },
        { id: 3, nome: 'Matrix', frase: 'A realidade é uma simulação.' },
        { id: 4, nome: 'Interstellar', frase: 'A busca por novos mundos.' },
    ];

    const Paises = [
        { id: 1, nome: 'Nova Zelândia', frase: 'Cenários de tirar o fôlego.' },
        { id: 2, nome: 'Chile', frase: 'Montanhas e desertos incríveis.' },
        { id: 3, nome: 'Irlanda', frase: 'Campos verdes e castelos antigos.' },
        { id: 4, nome: 'Inglaterra', frase: 'História e modernidade se encontram.' },
    ];

  return (
    <>
        <div>
            <h1>Qual Filmes eu tenho na minha estante ???</h1>
            <ul>
                {Movies.map((movie) => <Propt key={movie.id} nome={movie.nome} frase={movie.frase}/> )}
            </ul>
        </div>
        <br/>
        <div>
            <h1>Para onde quero ir ???</h1>
            <ul>
                {Paises.map((pais) => <Propt key={pais.id} nome={pais.nome} frase={pais.frase}/> )}
            </ul>
        </div>
    </>
  );
};

export default SecondComponent