import './Jogo.css';
import Word from './Word';
import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import palavras from '../../palavras';

export default function Jogo({mayIPlay, setMayIPlay, choosedLetters, mistakesNum, choosedWord, setChoosedWord}) {
    const forca = [forca0, forca1, forca2, forca3, forca4, forca5];

    function startGame() {
        setMayIPlay(true);
        setChoosedWord(palavras.sort( () => Math.random() - 0.5 ).pop());
    }

    return (
        <div className='Jogo'>
            <img src={forca[mistakesNum]} alt='forca' className='forca' />
            <div className="right">
                <button disabled={mayIPlay} className='chooseWord' onClick={startGame}>Escolher Palavra</button>
                <Word choosedWord={choosedWord} choosedLetters={choosedLetters} />
            </div>
        </div>
    )
}