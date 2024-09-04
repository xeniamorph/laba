import styles from './Intro.module.scss';
import video from '../../assets/videos/intro-cover.mp4';
import laba from '../../assets/images/header-laba.svg';

import CircleText from './CircleText/CircleText';

function Intro() {
  return (
    <section className={`${styles.Intro} `}>
      <div className={styles.Intro__company}>
        <div className={styles.Intro__laba}>
          <img src={laba}></img>
        </div>
        <span>digital agency&nbsp;.</span>
      </div>
      <div className={styles.Intro__cover}>
        <video preload="auto" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <CircleText />
      </div>
    </section>
  );
}

export default Intro;
