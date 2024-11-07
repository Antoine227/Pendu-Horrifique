import { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import Word from './Word';
import Keyboard from './Keyboard';

const words: string[] = [
  'tronconneuse',
  'hemorragie',
  'zombie',
  'eviscerer',
  'cauchemar',
  'fantome',
  'vampire',
  'loupgarou',
  'cimetiere',
  'malefice',
  'sorciere',
  'cadavre',
  'monstre',
  'possession',
  'exorcisme',
  'hantise',
  'crypte',
  'psychopathe',
  'mutilation',
  'massacre',
  'terreur',
  'sanglant',
  'horreur',
  'malediction',
  'demoniaque',
  'abomination',
  'necromancien',
  'guillotine',
  'cannibale',
  'mausolee'
];

const Game: FC = () => {
  const [word, setWord] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(6);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const initializeGame = useCallback(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setRemainingAttempts(6);
    setCurrentImage(0);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
      if (!word.includes(letter)) {
        setRemainingAttempts((prev) => prev - 1);
        setCurrentImage((prev) => prev + 1);
      }
    }
  };

  const isWinner = word.split('').every(letter => guessedLetters.includes(letter));
  const isGameOver = remainingAttempts === 0;

  useEffect(() => {
    if (isWinner) {
      setCurrentImage(0);
    }
  }, [isWinner]);

  return (
    <div className="game-container">
      <h1>Jeu du Pendu Horrifique</h1>
      <img 
        src={`/images/hangman-${currentImage}.png`} 
        alt={`Étape ${currentImage} du pendu`}
        className="hangman-image"
      />
      <div className="word">
        <Word word={word} guessedLetters={guessedLetters} />
      </div>
      <p className="attempts">Tentatives restantes : {remainingAttempts}</p>
      {isWinner && <p className="message">Félicitations ! Vous avez survécu !</p>}
      {isGameOver && <p className="message game-over">Game Over. Le mot était : {word}</p>}
      {!isWinner && !isGameOver && (
        <div className="keyboard">
          <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
        </div>
      )}
      {(isWinner || isGameOver) && (
        <button type='button' className="replay-button" onClick={initializeGame}>Rejouer</button>
      )}
    </div>
  );
};

export default Game;