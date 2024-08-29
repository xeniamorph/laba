import styles from './Gallery.module.scss';

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
  },
  {
    id: 2,
    video: video_2,
    src: '#',
    title: 'Проект Signature',
    desc: 'ЗD визуализация',
  },
  {
    id: 3,
    video: video_3,
    src: '#',
    title: 'Проект Вуаля длинное название',
    desc: 'ЗD визуализация видео продакшн VR',
  },
  {
    id: 4,
    video: video_4,
    src: '#',
    title: 'Проект Вуаля длинное название',
    desc: 'ЗD визуализация',
  },
  {
    id: 5,
    video: video_5,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация',
  },
  {
    id: 6,
    video: video_6,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
  },
];

function Gallery() {
  // Функции остановки или воспроизведения видео
  const handleMouseEnter = (video) => {
    video.play();
  };

  const handleMouseLeave = (video) => {
    video.pause();
  };

  return (
    <section className={styles.Gallery}>
      <ul className={styles.Gallery__items}>
        {items.map((element, index) => {
          const totalLength = element.title.length + element.desc.length;
          const noverAnimateClass = totalLength > 34 ? styles.long : styles.short;

          const videoProps =
            index % 2 === 1
              ? { autoPlay: true }
              : {
                  onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                  onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                };

          return (
            <li key={element.id} className={`${styles.Gallery__item} ${noverAnimateClass}`}>
              <a href={element.src} onMouseEnter={(e) => handleMouseEnter(e.currentTarget.querySelector('video'))} onMouseLeave={(e) => handleMouseLeave(e.currentTarget.querySelector('video'))}>
                <video {...videoProps} loop muted>
                  <source src={element.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h2>
                  <span>{element.title}</span>
                  <span>{element.desc}</span>
                </h2>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Gallery;
