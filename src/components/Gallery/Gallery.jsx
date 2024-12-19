import styles from './Gallery.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';

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
        {projects.slice(0, 6).map((item, index) => {
          const videoProps =
            index % 2 === 1
              ? { autoPlay: true }
              : {
                  onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                  onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                };

          return <GalleryItem videoSrc={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} key={item.id} />;
        })}
      </ul>
    </section>
  );
}

export default Gallery;
