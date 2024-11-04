// import React from 'react';

const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split(''); //Crée un tableau de toutes les lettres de l'alphabet.

interface KeyboardProps {
  onGuess: (letter: string) => void;
  guessedLetters: string[];
}

const Keyboard: React.FC<KeyboardProps> = ({ onGuess, guessedLetters }) => {
  return (
    <div>
      {alphabet.map((letter) => ( //Crée un bouton pour chaque lettre de l'alphabet.
        <button type='button'
          key={letter}
          onClick={() => onGuess(letter)} //Appelle la fonction onGuess quand un bouton est cliqué.
          disabled={guessedLetters.includes(letter)} // Désactive le bouton si la lettre a déjà été devinée.
          style={{ margin: '5px' }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;