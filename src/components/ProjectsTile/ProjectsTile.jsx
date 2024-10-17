import styles from './ProjectsTile.module.scss';

import picture_1 from '../../assets/images/project-tile-1.jpg';
import picture_2 from '../../assets/images/project-tile-2.jpg';
import picture_3 from '../../assets/images/project-tile-3.jpg';
import picture_4 from '../../assets/images/project-tile-4.jpg';

const items = [
  {
    id: 1,
    picture: picture_1,
    src: '#',
    title: 'WEB приложения / Сайты',
  },
  {
    id: 2,
    picture: picture_2,
    src: '#',
    title: 'IOS / ANDROID / PC',
  },
  {
    id: 3,
    picture: picture_3,
    src: '#',
    title: 'VR / AR / 360° ПАНОРАМЫ',
  },
  {
    id: 4,
    picture: picture_4,
    src: '#',
    title: 'ВИЗУАЛИЗАЦИИ / АНИМАЦИИ',
  },
];

function ProjectsTile() {
  return (
    <section className={styles.ProjectsTile}>
      <div className={styles.ProjectsTile__items}>
        {items.map(({ id, picture, src, title }) => (
          <div key={id} className={styles.ProjectsTile__item}>
            <a className={styles.ProjectsTile__link} href={src}>
              <div className={styles.ProjectsTile__picture}>
                <img src={picture} alt={title} />
              </div>
              <div className={styles.ProjectsTile__text}>
                <div className={styles.ProjectsTile__num}>{String(id).padStart(2, '0')}</div>
                <div className={styles.ProjectsTile__title}>{title}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsTile;
