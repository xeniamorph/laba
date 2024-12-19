import styles from './CasesItems.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';

function CasesItems({ type }) {
  const handleMouseEnter = (video) => {
    video.play();
  };

  const handleMouseLeave = (video) => {
    video.pause();
  };

  // Фильтруем проекты по типу, если тип передан
  const filteredProjects = type ? projects.filter((item) => item.type === type) : projects;

  return (
    <section className={styles.CasesItems}>
      <ul className={styles.CasesItems__items}>
        {filteredProjects.slice(0, 3).map((item, index) => {
          // Обрезаем до 3 элементов
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

export default CasesItems;
