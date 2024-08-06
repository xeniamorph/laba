import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import video from '../../assets/videos/intro-cover.mp4';
import styles from './Service.module.scss';

const Number = ({ n }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Запуск анимации, когда элемент становится видимым
    threshold: 0.1, // Условие видимости (10% элемента должно быть видно)
  });

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div ref={ref}>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const Service = () => {
  return (
    <section className={styles.Service}>
      <div>
        <div className={styles.Service__counting}>
          <div className={styles.Service__countingItem}>
            <div>
              + <Number n={130} />
            </div>
            <span>Создано рилсов и&nbsp;видео роликов</span>
          </div>
          <div className={styles.Service__countingItem}>
            <div>
              + <Number n={85} />
            </div>
            <span>Серверов в&nbsp;собственном дата-центре для&nbsp;просчета компьютерной графики</span>
          </div>
          <div className={styles.Service__countingItem}>
            <div>
              + <Number n={1000} />
            </div>
            <span>3д&nbsp;моделей</span>
          </div>
          <div className={styles.Service__countingItem}>
            <div>
              + <Number n={7} />
            </div>
            <span>Лет на&nbsp;рынке 3D&nbsp;графики</span>
          </div>
        </div>
        <div className={styles.Service__video}>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Service;
