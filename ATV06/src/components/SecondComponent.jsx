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
        { id: 5, nome: 'Senhor dos Anéis', frase: 'A jornada do anel.' },
    ];

    const Paises = [
        { id: 1, nome: 'Nova Zelândia', frase: 'Cenários de tirar o fôlego.' },
        { id: 2, nome: 'Chile', frase: 'Montanhas e desertos incríveis.' },
        { id: 3, nome: 'Irlanda', frase: 'Campos verdes e castelos antigos.' },
        { id: 4, nome: 'Inglaterra', frase: 'História e modernidade se encontram.' },
        { id: 5, nome: 'Japão', frase: 'Tradição e tecnologia.' },
    ];

    const Lutas = [
        { id: 1, nome: 'MMA', frase: 'O octógono mais famoso do mundo.' },
        { id: 2, nome: 'Boxe', frase: 'O esporte dos reis.' },
        { id: 3, nome: 'Jiu-Jitsu', frase: 'A arte suave.' },
        { id: 4, nome: 'Kung Fu', frase: 'A arte marcial chinesa.' },
    ]

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
        <br/>
        <div>
            <h1>Qual luta eu pratico ???</h1>
            <ul>
                {Lutas.map((luta) => <Propt key={luta.id} nome={luta.nome} frase={luta.frase}/> )}
            </ul>
        </div>
    </>
  );
};

export default SecondComponent