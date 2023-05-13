import './App.css';
import Jogo from '../Jogo/Jogo.js';
import Letras from '../Letras/Letras.js';
import { useState } from 'react';

function App() {
  const [mayIPlay, setMayIPlay] = useState(false);
  const [choosedLetters, setChoosedLetters] = useState([]);
  const [mistakesNum, setMistakesNum] = useState(0);
  const [choosedWord, setChoosedWord] = useState('');

  return (
    <div className='App'>
      <Jogo mayIPlay={mayIPlay} setMayIPlay={setMayIPlay} 
      choosedLetters={choosedLetters} mistakesNum={mistakesNum} 
      choosedWord={choosedWord} setChoosedWord={setChoosedWord}/>
      <Letras mayIPlay={mayIPlay} setChoosedLetters={setChoosedLetters} 
      setMistakesNum={setMistakesNum} choosedWord={choosedWord} />
    </div>
  );
}

export default App;
