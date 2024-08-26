import styles from './Partners.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import logo_1 from '../../assets/images/partners-1.png';
import logo_2 from '../../assets/images/partners-2.png';
import logo_3 from '../../assets/images/partners-3.png';
import logo_4 from '../../assets/images/partners-4.png';

const items = [
  { logo: logo_1, title: 'Партнер 1' },
  { logo: logo_2, title: 'Партнер 2' },
  { logo: logo_3, title: 'Партнер 3' },
  { logo: logo_4, title: 'Партнер 4' },
  { logo: logo_3, title: 'Партнер 5' },
  { logo: logo_2, title: 'Партнер 6' },
  { logo: logo_2, title: 'Партнер 7' },
  { logo: logo_4, title: 'Партнер 8' },
  { logo: logo_4, title: 'Партнер 9' },
  { logo: logo_3, title: 'Партнер 10' },
  { logo: logo_2, title: 'Партнер 11' },
  { logo: logo_1, title: 'Партнер 12' },
];

const splitItems = [
  [...items.slice(0, 4), ...items.slice(0, 4), ...items.slice(0, 4), ...items.slice(0, 4), ...items.slice(0, 4)],
  [...items.slice(4, 8), ...items.slice(4, 8), ...items.slice(4, 8), ...items.slice(4, 8), ...items.slice(4, 8)],
  [...items.slice(8, 12), ...items.slice(8, 12), ...items.slice(8, 12), ...items.slice(8, 12), ...items.slice(8, 12)],
];

function Partners() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className={styles.Partners} ref={ref}>
      {isMobile ? (
        <div>
          <Swiper
            className={styles.Partners__swiper}
            modules={[Pagination]}
            speed={1000}
            keyboard={{ enabled: true }}
            pagination={{
              el: `.${styles.Partners__pagination}`,
              clickable: true,
              bulletClass: styles.Partners__bullet,
              bulletActiveClass: styles.Partners__bullet_active,
              renderBullet: (index, className) => `<span class="${className}"></span>`,
            }}
            breakpoints={{
              320: { spaceBetween: 32, slidesPerView: 1, loop: true },
              768: { spaceBetween: 32, slidesPerView: 2, loop: true },
              1024: { spaceBetween: 32, slidesPerView: 4, loop: true },
            }}>
            {items.map((item, index) => (
              <SwiperSlide className={styles.Partners__slide} key={index}>
                <div className={styles.Partners__img}>
                  <img src={item.logo} loading="lazy" alt={item.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.Partners__pagination}></div>
        </div>
      ) : (
        <ul className={`${styles.Partners__rows} ${isVisible ? styles.visible : ''}`}>
          {splitItems.map((rowItems, rowIndex) => (
            <li className={styles.Partners__row} key={rowIndex}>
              <div className={`${styles.Partners__track} ${isVisible ? styles.animate : ''}`}>
                {rowItems.map((item, index) => (
                  <div key={index} className={styles.Partners__item}>
                    <div className={styles.Partners__picture}>
                      <img src={item.logo} loading="lazy" alt={item.title} />
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Partners;
