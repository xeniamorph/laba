import styles from './Intro.module.scss';
import introCover from '../../assets/images/intro-cover.jpg';
import CircleText from '../CircleText/CircleText';

function Intro() {
  return (
    <section className={`${styles.Intro} `}>
      <div className={styles.Intro__company}>
        <span>LABA</span>
        <span>digital agency&nbsp;.</span>
      </div>
      <div className={styles.Intro__cover}>
        <div className={styles.Intro__img}>
          <img src={introCover} alt="Intro Cover" />
        </div>

        <CircleText />
      </div>
    </section>
  );
}

export default Intro;
