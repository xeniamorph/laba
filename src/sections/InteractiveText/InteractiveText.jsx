import { useEffect } from 'react';
import styles from './InteractiveText.module.scss';

import textSVG from '../../assets/images/interactive-text.svg';
import icon1 from '../../assets/images/interactive-text-1.svg';
import icon2 from '../../assets/images/interactive-text-2.svg';

function InteractiveText() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = document.getElementById('circle');
      const halfCircleSize = circle.offsetWidth / 2;
      circle.style.left = `${e.clientX - halfCircleSize}px`;
      circle.style.top = `${e.clientY - halfCircleSize}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.InteractiveText}>
      <img src={textSVG} className={styles.InteractiveText__textSVG}></img>
      <div className={styles.InteractiveText__main}>
        <span>Вдохновляющие</span>
        <span>
          проекты для <img className={styles.InteractiveText__icon1} src={icon1}></img>
        </span>
        <span>
          <img src={icon2} className={styles.InteractiveText__icon2}></img>амбициозных
        </span>
        заказчиков
      </div>
      <div className={styles.InteractiveText__inner}>
        <span>Вдохновляющие</span>
        <span>
          проекты для <img className={styles.InteractiveText__icon1} src={icon1}></img>
        </span>
        <span>
          <img src={icon2} className={styles.InteractiveText__icon2}></img>амбициозных
        </span>
        заказчиков
      </div>
      <div id="circle" className={styles.InteractiveText__circle}></div>
    </section>
  );
}

export default InteractiveText;
