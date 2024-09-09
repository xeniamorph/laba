import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import styles from './TextEffect.module.scss';

import icon1 from '../../assets/images/text-effect-1.svg';
import icon2 from '../../assets/images/text-effect-2.svg';

const TextEffect = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const onMouseMove = (e) => {
    if (!isVisible) return;

    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    if (heroRef.current) {
      heroRef.current.style.setProperty('--x', `${x}%`);
      heroRef.current.style.setProperty('--y', `${y}%`);
    }
  };

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(heroRef.current);

    const handleMouseMove = _.throttle(onMouseMove, 50);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.unobserve(heroRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  return (
    <div ref={heroRef} className={`${styles.TextEffect} ${isVisible ? styles.animate : ''}`}>
      <div className={styles.TextEffect__wrapper}>
        <div className={styles.TextEffect__layer}>
          <div className={styles.TextEffect__text}>
            <div>Вдохновляющие</div>
            <div>проекты для</div>
            <div>амбициозных</div>
            <div>заказчиков</div>
          </div>
        </div>

        <div className={`${styles.TextEffect__layer} ${styles.TextEffect__layer_secondary}`} aria-hidden="true">
          <div className={styles.TextEffect__text}>
            <div>Вдохновляющие</div>
            <div>проекты для</div>
            <div>амбициозных</div>
            <div>заказчиков</div>
          </div>
        </div>
      </div>
      <div className={styles.TextEffect__icons}>
        <div className={styles.TextEffect__icon}>
          <img src={icon1} alt="Icon 1" />
        </div>
        <div className={styles.TextEffect__icon}>
          <img src={icon2} alt="Icon 2" />
        </div>
      </div>
    </div>
  );
};

export default TextEffect;
