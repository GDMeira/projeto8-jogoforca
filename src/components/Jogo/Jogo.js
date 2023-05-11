import { useState } from 'react';
import './Jogo.css';
import Word from './Word';
import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';

export default function Jogo({mayIPlay, setMayIPlay, choosedLetters, mistakesNum}) {
    const [forca, setForca] = useState(forca0);
    const [choosedWord, setChoosedWord] = useState('');

    return (
        <>
            <img src={forca} alt='forca' className='forca' />
            <div className="rigth">
                <button disabled={mayIPlay} className='chooseWord' >Escolher Palavra</button>
                <Word choosedWord={choosedWord} choosedLetters={choosedLetters} />
            </div>
        </>
    )
}