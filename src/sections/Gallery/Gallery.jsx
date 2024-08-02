import styles from './Gallery.module.scss';

import video_1 from '../../assets/videos/gallery-1.mp4';
import video_2 from '../../assets/videos/gallery-2.mp4';
import video_3 from '../../assets/videos/gallery-3.mp4';
import video_4 from '../../assets/videos/gallery-4.mp4';
import video_5 from '../../assets/videos/gallery-5.mp4';
import video_6 from '../../assets/videos/gallery-6.mp4';

const items = [
  {
    video: video_1,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация',
    autoplay: true,
  },
  {
    video: video_2,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация',
  },
  {
    video: video_3,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    autoplay: true,
  },
  {
    video: video_4,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
  },
  {
    video: video_5,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    autoplay: true,
  },
  {
    video: video_6,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
  },
];

function Gallery() {
  const handleMouseEnter = (video) => {
    if (!video.autoplay) {
      video.play();
    }
  };

  const handleMouseLeave = (video) => {
    if (!video.autoplay) {
      video.pause();
    }
  };

  return (
    <section className={styles.Gallery}>
      <ul className={styles.Gallery__items}>
        {items.map((element, index) => (
          <li key={index} className={styles.Gallery__item}>
            <a href={element.src} onMouseEnter={(e) => handleMouseEnter(e.currentTarget.querySelector('video'))} onMouseLeave={(e) => handleMouseLeave(e.currentTarget.querySelector('video'))}>
              <video autoPlay={element.autoplay} loop muted>
                <source src={element.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2>
                <span>{element.title} </span> <span>| {element.desc}</span>
              </h2>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
