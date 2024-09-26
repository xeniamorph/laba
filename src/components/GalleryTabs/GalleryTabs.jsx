import { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother.min';

import styles from './GalleryTabs.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { itemsGalleryTabs } from '../../constants/itemsGalleryTabs';
import { typesfiltersGalerryTabs } from '../../constants/typesfiltersGalerryTabs';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.create({
  trigger: '.ScrollSmoother-wrapper',
  onUpdate: (self) => {
    console.log(self);
  },
});

export default function GalleryTabs() {
  const [activeFilter, setActiveFilter] = useState('all');

  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

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
  const filteredItems = activeFilter === 'all' ? itemsGalleryTabs : itemsGalleryTabs.filter((item) => item.type === activeFilter);

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
          {typesfiltersGalerryTabs.map((element) => {
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
