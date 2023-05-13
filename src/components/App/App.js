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

  return (
    <div className='App'>
      <Jogo mayIPlay={mayIPlay} setMayIPlay={setMayIPlay} 
      choosedLetters={choosedLetters} mistakesNum={mistakesNum} 
      choosedWord={choosedWord} setChoosedWord={setChoosedWord}
      visualWord={visualWord} setVisualWord={setVisualWord} />
      <Letras mayIPlay={mayIPlay} choosedLetters={choosedLetters} setChoosedLetters={setChoosedLetters} 
      setMistakesNum={setMistakesNum} choosedWord={choosedWord} setVisualWord={setVisualWord}/>
    </div>
  );
}

export default App;
