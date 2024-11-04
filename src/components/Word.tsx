// import React from 'react';

interface WordProps {
  word: string;
  guessedLetters: string[];
}

const Word: React.FC<WordProps> = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split('').map((letter, index) => ( // Divise le mot en lettres et les affiche.
        <span key={index} style={{ margin: '0 5px' }}>
          {guessedLetters.includes(letter) ? letter : '_'} 
        </span> // Affiche la lettre si devinée, sinon un underscore.
      ))}
    </div>
  );
};

export default Word;