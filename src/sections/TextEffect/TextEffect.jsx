import { useEffect, useRef } from 'react';
import styles from './TextEffect.module.scss';

import icon1 from '../../assets/images/text-effect-1.svg';
import icon2 from '../../assets/images/text-effect-2.svg';

const TextEffect = () => {
  const heroRef = useRef(null);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    if (heroRef.current) {
      heroRef.current.style.setProperty('--x', `${x}%`);
      heroRef.current.style.setProperty('--y', `${y}%`);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className={styles.TextEffect}>
      <div className={styles.TextEffect__wrapper}>
        <div className={styles.TextEffect__layer}>
          <div className={styles.TextEffect__text}>
            <div>Вдохновляющие</div>
            <div>проекты для</div>
            <div>амбициозных</div>
            <div>заказчиков</div>
          </div>
        </div>

        <div className={`${styles.TextEffect__layer} ${styles.TextEffect__layer_secondary}`} ref={heroRef} aria-hidden="true">
          <div className={styles.TextEffect__text}>
            <div>Вдохновляющие</div>
            <div>проекты для</div>
            <div>амбициозных</div>
            <div>заказчиков</div>
          </div>
        </div>
      </div>
      <div className={styles.TextEffect__icons}>
        <div className={`${styles.TextEffect__icon} `}>
          <img src={icon1} alt="Icon 1" />
        </div>
        <div className={`${styles.TextEffect__icon} `}>
          <img src={icon2} alt="Icon 2" />
        </div>
      </div>
    </div>
  );
};

export default TextEffect;
