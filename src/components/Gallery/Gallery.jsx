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
    autoplay: true,
    long: false,
  },
  {
    id: 2,
    video: video_2,
    src: '#',
    title: 'Проект Signature',
    desc: 'ЗD визуализация',
    long: false,
  },
  {
    id: 3,
    video: video_3,
    src: '#',
    title: 'Проект Вуаля длинное название',
    desc: 'ЗD визуализация видео продакшн VR',
    autoplay: true,
    long: true,
  },
  {
    id: 4,
    video: video_4,
    src: '#',
    title: 'Проект Вуаля длинное название',
    desc: 'ЗD визуализация',
    long: true,
  },
  {
    id: 5,
    video: video_5,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация',
    autoplay: true,
    long: false,
  },
  {
    id: 6,
    video: video_6,
    src: '#',
    title: 'Проект Вуаля',
    desc: 'ЗD визуализация видео продакшн VR',
    long: false,
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
        {items.map((element) => (
          <li key={element.id} className={`${styles.Gallery__item} ${element.long ? styles.long : styles.short}`}>
            <a href={element.src} onMouseEnter={(e) => handleMouseEnter(e.currentTarget.querySelector('video'))} onMouseLeave={(e) => handleMouseLeave(e.currentTarget.querySelector('video'))}>
              <video autoPlay={element.autoplay} loop muted>
                <source src={element.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2>
                <span>{element.title}</span>
                <span>{element.desc}</span>
              </h2>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
