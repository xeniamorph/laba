import { useEffect, useRef, useState } from 'react';
import styles from './ProjectsTile.module.scss';

import picture_1 from '../../assets/images/project-tile-1.png';
import picture_2 from '../../assets/images/project-tile-2.png';
import picture_3 from '../../assets/images/project-tile-3.png';
import picture_4 from '../../assets/images/project-tile-4.png';

const items = [
  {
    id: 1,
    picture: picture_1,
    src: '#',
    title: 'WEB приложения / <br>Сайты',
  },
  {
    id: 2,
    picture: picture_2,
    src: '#',
    title: 'IOS / ANDROID / <br>PC',
  },
  {
    id: 3,
    picture: picture_3,
    src: '#',
    title: 'VR / AR / <br>360° ПАНОРАМЫ',
  },
  {
    id: 4,
    picture: picture_4,
    src: '#',
    title: 'ВИЗУАЛИЗАЦИИ / <br>АНИМАЦИИ',
  },
];

function ProjectsTile() {
  const animationRef = useRef(null);

  // Функция сброса и перезапуска анимации перелистывания
  const resetAnimation = () => {
    if (animationRef.current) {
      if (window.innerWidth <= 1439) {
        // Удаление и повторное добавление класса анимации для перезапуска
        animationRef.current.classList.remove(styles.animate);
        setTimeout(() => {
          animationRef.current.classList.add(styles.animate);
        }, 10);
      } else {
        animationRef.current.classList.remove(styles.animate);
      }
    }
  };

  useEffect(() => {
    resetAnimation();

    window.addEventListener('resize', resetAnimation);

    let timer;
    if (window.innerWidth <= 1439) {
      timer = setInterval(resetAnimation, 14200);
    }

    return () => {
      window.removeEventListener('resize', resetAnimation);

      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={styles.ProjectsTile}>
      <div className={styles.ProjectsTile__container}>
        <div className={`${styles.ProjectsTile__items} ${styles.animate}`} ref={animationRef}>
          {items.map(({ id, picture, src, title }, index) => (
            <div key={id} className={styles.ProjectsTile__item} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <div className={`${styles.ProjectsTile__picture} ${hoveredIndex !== null && hoveredIndex !== index ? styles.hide : ''}`}>
                <img src={picture} />
              </div>
              <a className={styles.ProjectsTile__link} href={src}>
                <div className={styles.ProjectsTile__text}>
                  <div className={styles.ProjectsTile__num}>{String(id).padStart(2, '0')}</div>
                  <div className={styles.ProjectsTile__title} dangerouslySetInnerHTML={{ __html: title }}></div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className={styles.ProjectsTile__images}>
          {items.map(({ id, picture }, index) => (
            <div key={id} className={`${styles.ProjectsTile__image} ${hoveredIndex === index ? styles.show : ''}`}>
              <img src={picture} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsTile;
