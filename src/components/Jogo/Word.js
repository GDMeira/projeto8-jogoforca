import './Word.css';

export default function Word({choosedWord, choosedLetters}) {
    const arrayWord = [...choosedWord];

    return (
        arrayWord.map((letter, i) => {
            const visual = choosedLetters.includes(letter) ? letter : '_';
            <span key={i} >{visual}</span>
        })
    )
}