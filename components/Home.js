import Dice from './Dice';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

function Home() {
  const [launched, setLaunched] = useState(false);

  const dices = [];
  if (launched) {
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      dices.push(<Dice key={i} number={randomNumber} />);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.triangleLeft}></div>
        <div className={styles.triangleLeftRed}></div>
        <div className={styles.triangleLeft}></div>
      </div>
      <div className={styles.middleSection}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.board}>
          {dices}
        </div>
        {!launched && <button className={styles.launchBtn} onClick={() => setLaunched(true)}>Launch</button>}
      </div>
      <div>
        <div className={styles.triangleRight}></div>
        <div className={styles.triangleRightRed}></div>
        <div className={styles.triangleRight}></div>
      </div>
    </div>
  );
}

export default Home;
