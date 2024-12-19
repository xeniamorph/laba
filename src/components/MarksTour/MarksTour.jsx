import { useState } from 'react';
import styles from './MarksTour.module.scss';

function MarksTour() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(true); // Устанавливаем состояние active в true
  };

  return (
    <section className={`${styles.MarksTour} ${isActive ? styles.active : ''}`}>
      <div className={styles.MarksTour__container}>
        <button className={styles.MarksTour__button} onClick={handleButtonClick}>
          Начать взаимодействие
        </button>
        <iframe className={styles.MarksTour__iframe} src="https://marks-tour.ru/" sandbox="allow-same-origin allow-scripts" frameBorder="0" allowFullScreen loading="lazy"></iframe>
      </div>
    </section>
  );
}

export default MarksTour;
