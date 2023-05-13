import './Letra.css';
import { useState } from 'react';

export default function Letra({mayIPlay, choosedLetters, setChoosedLetters, setMistakesNum, letter, choosedWord, setVisualWord}) {
    const [isClickable, setIsClickable] = useState(true);
    const arrayWord = [...choosedWord];

    function clickLetter(letter) {
        setIsClickable(false);
        const newChoosedLetters = [...choosedLetters, letter];
        setChoosedLetters(newChoosedLetters);
        if (!arrayWord.includes(letter)) {
            setMistakesNum(n => n + 1);
        } else {
            setVisualWord(arrayWord.map(l => newChoosedLetters.includes(l) ? l : '_'));
        }
    }
    // if (!mayIPlay) {
    //     setIsClickable(true);
    // }

    return <button className='Letra' disabled={!(mayIPlay && isClickable)} onClick={() => clickLetter(letter)} >{letter}</button>

}