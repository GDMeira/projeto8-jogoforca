import './Letra.css';
import { useState } from 'react';

export default function Letra({mayIPlay, setChoosedLetters, setMistakesNum, letter, choosedWord}) {
    const [isClickable, setIsClickable] = useState(true);
    const arrayWord = [...choosedWord];

    function clickLetter(letter) {
        setIsClickable(false);
        setChoosedLetters(a => [...a, letter]);
        if (!arrayWord.includes(letter)) {
            setMistakesNum(n => n + 1);
        } 
    }
    // if (!mayIPlay) {
    //     setIsClickable(true);
    // }

    return <button className='Letra' disabled={!(mayIPlay && isClickable)} onClick={() => clickLetter(letter)} >{letter}</button>

}