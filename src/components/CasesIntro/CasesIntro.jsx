import styles from './CasesIntro.module.scss';
import picture_1 from '../../assets/images/service-intro-1.jpg';

function CasesIntro() {
  return (
    <section className={`${styles.CasesIntro}`}>
      <div className={styles.CasesIntro__header}>
        <a href="#" className={styles.CasesIntro__return}>
          Смотреть все кейсы
        </a>
        <div className={styles.CasesIntro__info}>
          <div className={styles.CasesIntro__name}>
            <div className={styles.CasesIntro__title}>MARKS-TOUR</div>
            <div className={styles.CasesIntro__subtitle}>Панорама 360° с WEB интерфейсом, VR</div>
          </div>
          <ul className={styles.CasesIntro__tags}>
            <li>Панорама 360° </li>
            <li>VR</li>
            <li>WEB интерфейс</li>
            <li>UX/UI</li>
            <li>UX/UI</li>
          </ul>
        </div>
      </div>
      <div className={styles.CasesIntro__body}>
        <div className={styles.CasesIntro__picture}>
          <img src={picture_1} loading="lazy"></img>
        </div>
        <a href="#" className={styles.CasesIntro__button}>
          Перейти на сайт
        </a>
      </div>
      <div className={styles.CasesIntro__footer}>
        <div className={styles.CasesIntro__col}>
          <div className={styles.CasesIntro__topic}>Клиент</div>
          <div className={styles.CasesIntro__desc}>MARKS GROUP</div>
        </div>
        <div className={styles.CasesIntro__col}>
          <div className={styles.CasesIntro__topic}>Платформа</div>
          <div className={styles.CasesIntro__desc}>WEB / DESKTOP</div>
        </div>
        <div className={styles.CasesIntro__col}>
          <div className={styles.CasesIntro__topic}>Команда</div>
          <div className={styles.CasesIntro__desc}>
            Разработчик VR,
            <br /> UX/UI дизайнер, Frontend Разработчик
          </div>
        </div>
        <div className={styles.CasesIntro__col}>
          <div className={styles.CasesIntro__topic}>Что сделано</div>
          <div className={styles.CasesIntro__desc}>Панорама 360, VR приложение</div>
        </div>
      </div>
    </section>
  );
}

export default CasesIntro;
