import Letra from './Letra.css';
import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
const alfabeto = ['a','b','c'];

export default function Letras({mayIPlay, setChoosedLetters, setMistakesNum}) {


    return (
        <>
            <h1>Letrinhas</h1>
            <IonIcon icon={logoIonic}></IonIcon>
            {alfabeto.map(letter => <Letra key={letter} mayIPlay={mayIPlay}
            setChoosedLetters={setChoosedLetters} setMistakesNum={setMistakesNum} />)}
        </>
    )
}