import './Letras.css';
import Letra from './Letra';
import React from 'react';
import alfabeto from './alfabeto';

export default function Letras({mayIPlay, setChoosedLetters, setMistakesNum, choosedWord}) {


    return (
        <div className='Letras'>
            {alfabeto.map(letter => <Letra key={letter} mayIPlay={mayIPlay}
            setChoosedLetters={setChoosedLetters} setMistakesNum={setMistakesNum} 
            letter={letter} choosedWord={choosedWord} />)}
        </div>
    )
}