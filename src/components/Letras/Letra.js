import './Letra.css';
import { useState } from 'react';

export default function Letra({mayIPlay, setMayIPlay, choosedLetters, setChoosedLetters, setMistakesNum, letter, choosedWord, setVisualWord, setEndGame, mistakesNum}) {
    const [isClickable, setIsClickable] = useState(true);
    const arrayWord = [...choosedWord];

    function clickLetter(letter) {
        setIsClickable(false);
        const newChoosedLetters = [...choosedLetters, letter];
        setChoosedLetters(newChoosedLetters);

        if (!arrayWord.includes(letter)) {
            const newMistakesNum = mistakesNum + 1;
            setMistakesNum(newMistakesNum);

            if (newMistakesNum === 6) {
                setEndGame('lose');
                setMayIPlay(false);
                setVisualWord(arrayWord);
            }
        } else {
            const newVisualWord = arrayWord.map(l => newChoosedLetters.includes(l) ? l : '_');
            setVisualWord(newVisualWord);

            if (newVisualWord.join() === arrayWord.join()) {
                setEndGame('win');
                setMayIPlay(false);
            }
        }
    }

    return <button className='Letra' disabled={!(mayIPlay && isClickable)} onClick={() => clickLetter(letter)} >{letter}</button>

}