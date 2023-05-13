import './Letras.css';
import Letra from './Letra';
import React from 'react';
import alfabeto from './alfabeto';

export default function Letras({setMayIPlay, mayIPlay, choosedLetters, setChoosedLetters, setMistakesNum, choosedWord, setVisualWord, setEndGame, mistakesNum}) {


    return (
        <div className='Letras'>
            {alfabeto.map(letter => <Letra key={letter} mayIPlay={mayIPlay} choosedLetters={choosedLetters}
            setChoosedLetters={setChoosedLetters} setMistakesNum={setMistakesNum} 
            letter={letter} choosedWord={choosedWord} setVisualWord={setVisualWord} 
            setEndGame={setEndGame} mistakesNum={mistakesNum} setMayIPlay={setMayIPlay}/>)}
        </div>
    )
}