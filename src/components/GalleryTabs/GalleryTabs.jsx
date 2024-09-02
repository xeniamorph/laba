import { useState } from 'react';
import styles from './GalleryTabs.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import video_1 from '../../assets/videos/gallery-1.mp4';
import video_2 from '../../assets/videos/gallery-2.mp4';
import video_3 from '../../assets/videos/gallery-3.mp4';
import video_4 from '../../assets/videos/gallery-4.mp4';
import video_5 from '../../assets/videos/gallery-5.mp4';
import video_6 from '../../assets/videos/gallery-6.mp4';
import video_7 from '../../assets/videos/gallery-7.mp4';
import video_8 from '../../assets/videos/gallery-8.mp4';
import video_9 from '../../assets/videos/gallery-9.mp4';
import video_10 from '../../assets/videos/gallery-10.mp4';
import video_11 from '../../assets/videos/gallery-11.mp4';
import video_12 from '../../assets/videos/gallery-12.mp4';

const items = [
  {
    id: 1,
    video: video_1,
    src: '#',
    title: 'Проект ТЕСТ 3D',
    desc: 'ЗD визуализация',
    type: '3d',
  },
  {
    id: 2,
    video: video_2,
    src: '#',
    title: 'Проект Signature',
    desc: 'ЗD визуализация',
    type: 'web',
  },
  {
    id: 3,
    video: video_3,
    src: '#',
    title: 'Проект Вуаля длинное название',
    desc: 'ЗD визуализация видео продакшн VR',
    type: '3d',
  },
  {
    id: 4,
    video: video_4,
    src: '#',
    title: 'Проект Вуаля длинное название',
    desc: 'ЗD визуализация',
    type: '3d',
  },
  {
    id: 5,
    video: video_5,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация',
    type: 'web',
  },
  {
    id: 6,
    video: video_6,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: '3d',
  },
  {
    id: 7,
    video: video_7,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: 'video',
  },
  {
    id: 8,
    video: video_8,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: 'video',
  },
  {
    id: 9,
    video: video_9,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: 'video',
  },
  {
    id: 10,
    video: video_10,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: 'web',
  },
  {
    id: 11,
    video: video_11,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: 'web',
  },
  {
    id: 12,
    video: video_12,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: 'video',
  },
];

const typesfilters = [
  {
    id: 1,
    title: 'Все',
    type: 'all',
  },
  {
    id: 2,
    title: '3D визуализация',
    type: '3d',
  },
  {
    id: 3,
    title: 'Web',
    type: 'web',
  },
  {
    id: 4,
    title: 'Видео продакшн',
    type: 'video',
  },
];

function GalleryTabs() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Функции остановки или воспроизведения видео
  const handleMouseEnter = (video) => {
    video.play();
  };

  const handleMouseLeave = (video) => {
    video.pause();
  };

  // Функция смены фильтра
  const handleFilterChange = (type) => {
    setActiveFilter(type);
  };

  // Функция определения координат курсора для передачи в CSS
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty('--x4', `${x}px`);
    e.currentTarget.style.setProperty('--y4', `${y}px`);
  };

  // Применение фильтрации
  const filteredItems = activeFilter === 'all' ? items : items.filter((item) => item.type === activeFilter);

  return (
    <section className={styles.GalleryTabs}>
      <div className={styles.GalleryTabs__header}>
        <h1 className={styles.GalleryTabs__title}>ПОРТФОЛИО</h1>
        <div className={styles.GalleryTabs__links}>
          <a className={styles.GalleryTabs__mail} href="#">
            mail@marksgroup.ru
          </a>
          <a className={styles.GalleryTabs__tel} href="#">
            тел. +7 (495) 120-12-26
          </a>
        </div>
      </div>
      <nav className={styles.GalleryTabs__filters}>
        <ul>
          {typesfilters.map((element) => {
            return (
              <li key={element.id}>
                <button onMouseMove={handleMouseMove} className={activeFilter === `${element.type}` ? styles.active : ''} onClick={() => handleFilterChange(`${element.type}`)}>
                  <span>{element.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <TransitionGroup component="ul" className={styles.GalleryTabs__items}>
        {filteredItems.map((element, index) => {
          const uniqueKey = `${element.id}-${activeFilter}`;
          const totalLength = element.title.length + element.desc.length;
          const hoverAnimateClass = totalLength > 34 ? styles.long : styles.short;

          const videoProps =
            index % 2 === 1
              ? { autoPlay: true }
              : {
                  onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                  onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                };

          return (
            <CSSTransition
              key={uniqueKey}
              timeout={1000}
              classNames={{
                enter: styles.itemEnter, //Класс, применяемый при начале появления элемента.
                enterActive: styles.itemEnterActive, // Класс для активной фазы появления (анимации).
                exit: styles.itemExit, // Класс, применяемый при начале исчезновения элемента.
                exitActive: styles.itemExitActive, // Класс для активной фазы исчезновения (анимации).
              }}>
              <li className={`${styles.GalleryTabs__item} ${hoverAnimateClass}`}>
                <a href={element.src}>
                  <video {...videoProps} preload="auto" loop muted>
                    <source src={element.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <h2>
                    <span>{element.title}</span>
                    <span>{element.desc}</span>
                  </h2>
                </a>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
}

export default GalleryTabs;
