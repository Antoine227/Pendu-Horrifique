interface WordProps {
  word: string;
  guessedLetters: string[];
}

const Word: React.FC<WordProps> = ({ word, guessedLetters }) => {
  const letters = Array.from(word).map((letter, index) => ({
    id: `${word}-${letter}-${index}-${Math.random()}`,
    letter
  }));

  return (
    <div>
      {letters.map(({ id, letter }) => (
        <span key={id} style={{ margin: '0 5px' }}>
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default Word;