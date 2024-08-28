import React, { useState } from 'react';
import styles from './GalleryTabs.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Для анимации элементов

import video_1 from '../../assets/videos/gallery-1.mp4';
import video_2 from '../../assets/videos/gallery-2.mp4';
import video_3 from '../../assets/videos/gallery-3.mp4';
import video_4 from '../../assets/videos/gallery-4.mp4';
import video_5 from '../../assets/videos/gallery-5.mp4';
import video_6 from '../../assets/videos/gallery-6.mp4';

const items = [
  {
    id: 1,
    video: video_1,
    src: '#',
    title: 'Проект Вуаля',
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
    type: 'web',
  },
  {
    id: 7,
    video: video_1,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: '',
  },
  {
    id: 8,
    video: video_2,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: 'video',
  },
  {
    id: 9,
    video: video_3,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    type: 'video',
  },
];

function GalleryTabs() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleMouseEnter = (video) => {
    video.play();
  };

  const handleMouseLeave = (video) => {
    video.pause();
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty('--x4', `${x}px`);
    e.currentTarget.style.setProperty('--y4', `${y}px`);
  };

  const handleFilterChange = (type) => {
    setActiveFilter(type);
  };

  const filteredItems = activeFilter === 'all' ? items : items.filter((item) => item.type === activeFilter);

  return (
    <section className={styles.GalleryTabs}>
      <h1 className={styles.GalleryTabs__title}>ПОРТФОЛИО</h1>
      <nav className={styles.GalleryTabs__filters}>
        <ul>
          <li>
            <button onMouseMove={handleMouseMove} className={activeFilter === 'all' ? styles.active : ''} onClick={() => handleFilterChange('all')}>
              <span>Все</span>
            </button>
          </li>
          <li>
            <button onMouseMove={handleMouseMove} className={activeFilter === '3d' ? styles.active : ''} onClick={() => handleFilterChange('3d')}>
              <span>3D визуализация</span>
            </button>
          </li>
          <li>
            <button onMouseMove={handleMouseMove} className={activeFilter === 'web' ? styles.active : ''} onClick={() => handleFilterChange('web')}>
              <span>Web</span>
            </button>
          </li>
          <li>
            <button onMouseMove={handleMouseMove} className={activeFilter === 'video' ? styles.active : ''} onClick={() => handleFilterChange('video')}>
              <span>Видео продакшн</span>
            </button>
          </li>
        </ul>
      </nav>
      <TransitionGroup component="ul" className={styles.GalleryTabs__items}>
        {filteredItems.map((element, index) => {
          const totalLength = element.title.length + element.desc.length;
          const noverAnimateClass = totalLength > 34 ? styles.long : styles.short;

          return (
            <CSSTransition
              key={element.id}
              timeout={1000}
              classNames={{
                enter: styles.itemEnter,
                enterActive: styles.itemEnterActive,
                exit: styles.itemExit,
                exitActive: styles.itemExitActive,
              }}>
              <li className={`${styles.GalleryTabs__item} ${noverAnimateClass}`}>
                <a href={element.src} onMouseEnter={(e) => handleMouseEnter(e.currentTarget.querySelector('video'))} onMouseLeave={(e) => handleMouseLeave(e.currentTarget.querySelector('video'))}>
                  <video autoPlay={index % 2 === 1} loop muted>
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
