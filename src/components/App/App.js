import './App.css';
import Jogo from '../Jogo/Jogo.js';
import Letras from '../Letras/Letras.js';
import { useState } from 'react';

function App() {
  const [mayIPlay, setMayIPlay] = useState(false);
  const [choosedLetters, setChoosedLetters] = useState([]);
  const [mistakesNum, setMistakesNum] = useState(0);
  const [choosedWord, setChoosedWord] = useState('');
  const [visualWord, setVisualWord] = useState([]);
  const [endGame, setEndGame] = useState('');

  return (
    <div className='App'>
      <Jogo mayIPlay={mayIPlay} setMayIPlay={setMayIPlay} 
      mistakesNum={mistakesNum} setChoosedWord={setChoosedWord}
      visualWord={visualWord} setVisualWord={setVisualWord} endGame={endGame}
      setEndGame={setEndGame} setMistakesNum={setMistakesNum} 
      setChoosedLetters={setChoosedLetters} />
      <Letras key={endGame} mayIPlay={mayIPlay} choosedLetters={choosedLetters} 
      setChoosedLetters={setChoosedLetters} 
      setMistakesNum={setMistakesNum} choosedWord={choosedWord} setVisualWord={setVisualWord} 
      setEndGame={setEndGame} mistakesNum={mistakesNum} setMayIPlay={setMayIPlay} />
    </div>
  );
}

export default App;
