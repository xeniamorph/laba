import styles from './ServiceIntro.module.scss';
import picture_1 from '../../assets/images/service-intro-1.jpg';

function ServiceIntro() {
  return (
    <section className={`${styles.ServiceIntro}`}>
      <div className={styles.ServiceIntro__header}>
        <a href="#" className={styles.ServiceIntro__return}>
          Смотреть все кейсы
        </a>
        <div className={styles.ServiceIntro__info}>
          <div className={styles.ServiceIntro__name}>
            <div className={styles.ServiceIntro__title}>MARKS-TOUR</div>
            <div className={styles.ServiceIntro__subtitle}>Панорама 360° с WEB интерфейсом, VR</div>
          </div>
          <ul className={styles.ServiceIntro__tags}>
            <li>Панорама 360° </li>
            <li>VR</li>
            <li>WEB интерфейс</li>
            <li>UX/UI</li>
            <li>UX/UI</li>
          </ul>
        </div>
      </div>
      <div className={styles.ServiceIntro__body}>
        <div className={styles.ServiceIntro__picture}>
          <img src={picture_1} loading="lazy"></img>
        </div>
        <a href="#" className={styles.ServiceIntro__button}>
          Перейти на сайт
        </a>
      </div>
      <div className={styles.ServiceIntro__footer}>
        <div className={styles.ServiceIntro__col}>
          <div className={styles.ServiceIntro__topic}>Клиент</div>
          <div className={styles.ServiceIntro__desc}>MARKS GROUP</div>
        </div>
        <div className={styles.ServiceIntro__col}>
          <div className={styles.ServiceIntro__topic}>Платформа</div>
          <div className={styles.ServiceIntro__desc}>WEB / DESKTOP</div>
        </div>
        <div className={styles.ServiceIntro__col}>
          <div className={styles.ServiceIntro__topic}>Команда</div>
          <div className={styles.ServiceIntro__desc}>
            Разработчик VR,
            <br /> UX/UI дизайнер, Frontend Разработчик
          </div>
        </div>
        <div className={styles.ServiceIntro__col}>
          <div className={styles.ServiceIntro__topic}>Что сделано</div>
          <div className={styles.ServiceIntro__desc}>Панорама 360, VR приложение</div>
        </div>
      </div>
    </section>
  );
}

export default ServiceIntro;
