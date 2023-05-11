import './App.css';
import Jogo from '../Jogo/Jogo.js';
import Letras from '../Letras/Letras.js';
import { useState } from 'react';

function App() {
  const [mayIPlay, setMayIPlay] = useState(false);
  const [choosedLetters, setChoosedLetters] = useState([]);
  const [mistakesNum, setMistakesNum] = useState(0);

  return (
    <>
      <Jogo mayIPlay={mayIPlay} setMayIPlay={setMayIPlay} 
      choosedLetters={choosedLetters} mistakesNum={mistakesNum} />
      <Letras mayIPlay={mayIPlay} setChoosedLetters={setChoosedLetters} 
      setMistakesNum={setMistakesNum} />
    </>
  );
}

export default App;
