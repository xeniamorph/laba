import { useEffect, useRef, useState } from 'react';
import styles from './ProjectsTile4.module.scss';

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

function ProjectsTile4() {
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dishoveredIndex, setDishoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Устанавливаем индекс при наведении мыши
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null); // Убираем активный индекс
    setDishoveredIndex(index); // Запоминаем индекс при уходе мыши
  };

  // Функция сброса и перезапуска анимации перелистывания
  const resetAnimation = () => {
    if (animationRef.current) {
      if (window.innerWidth <= 1280) {
        // Удаление и повторное добавление класса анимации для перезапуска
        animationRef.current.classList.remove(styles.animate);
        setTimeout(() => {
          animationRef.current.classList.add(styles.animate);
        }, 50);
      } else {
        animationRef.current.classList.remove(styles.animate);
      }
    }
  };

  useEffect(() => {
    resetAnimation();

    window.addEventListener('resize', resetAnimation);

    let timer;
    if (window.innerWidth <= 1280) {
      timer = setInterval(resetAnimation, 14200);
    }

    return () => {
      window.removeEventListener('resize', resetAnimation);

      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <section className={styles.ProjectsTile4}>
      <div className={styles.ProjectsTile4__container}>
        <div className={`${styles.ProjectsTile4__layer} ${styles.ProjectsTile4__layer_bot}`}>
          <div ref={animationRef} className={`${styles.ProjectsTile4__items} ${styles.animate}`}>
            {items.map(({ id, picture, src, title }) => (
              <div className={styles.ProjectsTile4__item} style={{ backgroundImage: `url(${picture})` }} key={id}>
                <a className={`${styles.ProjectsTile4__link} ${styles.ProjectsTile4__link_bot}`} href={src}>
                  <div className={styles.ProjectsTile4__text}>
                    <div className={styles.ProjectsTile4__num}>{String(id).padStart(2, '0')}</div>
                    <div className={styles.ProjectsTile4__title} dangerouslySetInnerHTML={{ __html: title }}></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${styles.ProjectsTile4__images} ${
            hoveredIndex !== null ? `${styles[`active${hoveredIndex + 1}`]}` : dishoveredIndex !== null ? `${styles[`disactive${dishoveredIndex + 1}`]}` : ''
          }`}
        >
          {items.map(({ id }, index) => (
            <div className={styles.ProjectsTile4__image} key={id}></div>
          ))}
        </div>

        <div className={`${styles.ProjectsTile4__layer} ${styles.ProjectsTile4__layer_top}`}>
          <div className={`${styles.ProjectsTile4__items}`}>
            {items.map(({ id, src, title }, index) => (
              <div
                className={styles.ProjectsTile4__item}
                key={id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)} // изменяем этот обработчик
              >
                <a className={styles.ProjectsTile4__link} href={src}>
                  <div className={styles.ProjectsTile4__text}>
                    <div className={styles.ProjectsTile4__num}>{String(id).padStart(2, '0')}</div>
                    <div className={styles.ProjectsTile4__title} dangerouslySetInnerHTML={{ __html: title }}></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsTile4;
