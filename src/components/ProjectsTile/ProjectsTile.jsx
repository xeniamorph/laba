import styles from './ProjectsTile.module.scss';

import picture_1 from '../../assets/images/project-1.jpg';
import picture_2 from '../../assets/images/project-2.jpg';
import picture_3 from '../../assets/images/project-3.jpg';
import picture_4 from '../../assets/images/project-4.jpg';

const items = [
  {
    id: 1,
    picture: picture_1,
    src: '#',
    title: 'WEB приложения /Сайты',
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
    title: 'VR / AR /360° ПАНОРАМЫ',
  },
  {
    id: 4,
    picture: picture_4,
    src: '#',
    title: 'ВИЗУАЛИЗАЦИИ /АНИМАЦИИ',
  },
];

function ProjectsTile() {
  return (
    <section className={styles.ProjectsTile}>
      <div className={styles.ProjectsTile__items}>
        <div className={styles.ProjectsTile__item}>
          <a className={styles.ProjectsTile__link} href="">
            <div className={styles.ProjectsTile__picture}>
              <img src={picture_1} />
            </div>
            <div className={styles.ProjectsTile__text}>
              <div className={styles.ProjectsTile__num}>01</div>
              <div className={styles.ProjectsTile__title}>WEB приложения / Сайты</div>
            </div>
          </a>
        </div>
        <div className={styles.ProjectsTile__item}>
          <a className={styles.ProjectsTile__link} href="">
            <div className={styles.ProjectsTile__picture}>
              <img src={picture_1} />
            </div>
            <div className={styles.ProjectsTile__text}>
              <div className={styles.ProjectsTile__num}>01</div>
              <div className={styles.ProjectsTile__title}>WEB приложения / Сайты</div>
            </div>
          </a>
        </div>
        <div className={styles.ProjectsTile__item}>
          <a className={styles.ProjectsTile__link} href="">
            <div className={styles.ProjectsTile__picture}>
              <img src={picture_1} />
            </div>
            <div className={styles.ProjectsTile__text}>
              <div className={styles.ProjectsTile__num}>01</div>
              <div className={styles.ProjectsTile__title}>WEB приложения / Сайты</div>
            </div>
          </a>
        </div>
        <div className={styles.ProjectsTile__item}>
          <a className={styles.ProjectsTile__link} href="">
            <div className={styles.ProjectsTile__picture}>
              <img src={picture_1} />
            </div>
            <div className={styles.ProjectsTile__text}>
              <div className={styles.ProjectsTile__num}>01</div>
              <div className={styles.ProjectsTile__title}>WEB приложения / Сайты</div>
            </div>
          </a>
        </div>
        h
      </div>
    </section>
  );
}

export default ProjectsTile;
