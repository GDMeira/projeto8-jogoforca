export default function Word({choosedWord, choosedLetters}) {
    const arrayWord = [...choosedWord];

    return (
        arrayWord.map(letter => (
            choosedLetters.includes(letter) ? <span>{letter}</span> : <span>_</span>))
    )
}