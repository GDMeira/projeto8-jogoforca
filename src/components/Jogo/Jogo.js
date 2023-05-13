import './Jogo.css';
import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import palavras from '../../palavras';

export default function Jogo({ mayIPlay, setMayIPlay, choosedLetters, mistakesNum, choosedWord, setChoosedWord, visualWord, setVisualWord }) {
    const forca = [forca0, forca1, forca2, forca3, forca4, forca5];

    function startGame() {
        setMayIPlay(true);
        const word = palavras.sort(() => Math.random() - 0.5).pop();
        setChoosedWord(word);
        setVisualWord([...word].map(() => '_'));
    }

    return (
        <div className='Jogo'>
            <img src={forca[mistakesNum]} alt='forca' className='forca' />
            <div className="right">
                <button disabled={mayIPlay} className='chooseWord' onClick={startGame}>Escolher Palavra</button>
                <div className="Word">
                    {visualWord.map((letter, i) => <span key={i} >{letter}</span>)}
                </div>
            </div>
        </div>
    )
}