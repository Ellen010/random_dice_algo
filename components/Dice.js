import styles from '../styles/Dice.module.css';
import { useState } from 'react';

function Dice(props) {

  const [number, setNumber] = useState(props.number);
  const [nbClicks, setNbClicks] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNumber);
    setNbClicks(nbClicks + 1);
  };

  return (
    <div>
      <img className={styles.dice} src={`${number}.png`} alt={number} onClick={() => handleClick()} />
      <span className={styles.counter}>{nbClicks}</span>
    </div>
  );
}

export default Dice;
