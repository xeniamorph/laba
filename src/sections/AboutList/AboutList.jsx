import { useEffect, useRef, useState } from 'react';
import styles from './AboutList.module.scss';

import video1 from '../../assets/videos/about-list-1.mp4';
import video2 from '../../assets/videos/about-list-2.mp4';
import video3 from '../../assets/videos/about-list-3.mp4';
import num1 from '../../assets/images/about-list-num-1.svg';
import num2 from '../../assets/images/about-list-num-2.svg';
import num3 from '../../assets/images/about-list-num-3.svg';

const items = [
  {
    title: 'Всегда в&nbsp;контакте с&nbsp;заказчиком',
    desc: 'Работаем по&nbsp;системе такой&nbsp;то&nbsp;2х недельными спринтами, предоставляем результаты работ и&nbsp;внимательно слушаем наших заказчиков',
    video: video1,
    num: num1,
  },
  {
    title: 'Ищем лучшие решения ваших задач',
    desc: 'Работаем по&nbsp;системе такой то&nbsp;2х&nbsp;недельными спринтами, предоставляем результаты работ и&nbsp;внимательно слушаем наших заказчиков',
    video: video2,
    num: num2,
  },
  {
    title: 'Верим<br>в&nbsp;договоренности',
    desc: 'Работаем по&nbsp;системе такой то&nbsp;2х&nbsp;недельными спринтами, предоставляем результаты работ и&nbsp;внимательно слушаем наших заказчиков',
    video: video3,
    num: num3,
  },
];

function AboutList() {
  const [animateIndices, setAnimateIndices] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setAnimateIndices((prev) => [...prev, parseInt(index)]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className={styles.AboutList}>
      <h2 className={styles.AboutList__title}>Как мы работаем?</h2>
      <hr />
      <ul className={styles.AboutList__items}>
        {items.map((el, index) => (
          <li className={`${styles.AboutList__item} ${animateIndices.includes(index) ? styles.animate : ''}`} key={index} data-index={index} ref={(el) => (refs.current[index] = el)}>
            <div className={styles.AboutList__text}>
              <div className={`${styles.AboutList__header} ${animateIndices.includes(index) ? styles.animate : ''}`}>
                <div className={styles.AboutList__num}>
                  <img src={el.num} alt="" />
                </div>
                <div className={styles.AboutList__subtitle} dangerouslySetInnerHTML={{ __html: el.title }} />
              </div>
              <div className={`${styles.AboutList__desc} ${animateIndices.includes(index) ? styles.animate : ''}`} dangerouslySetInnerHTML={{ __html: el.desc }} />
            </div>
            <div className={styles.AboutList__video}>
              <video autoPlay loop muted>
                <source src={el.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AboutList;
