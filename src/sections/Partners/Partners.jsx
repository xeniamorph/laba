import styles from './Partners.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import logo_1 from '../../assets/images/partners-1.png';
import logo_2 from '../../assets/images/partners-2.png';
import logo_3 from '../../assets/images/partners-3.png';
import logo_4 from '../../assets/images/partners-4.png';

const items = [
  {
    logo: logo_1,
    title: 'Партнер 1',
  },
  {
    logo: logo_2,
    title: 'Партнер 2',
  },
  {
    logo: logo_3,
    title: 'Партнер 3',
  },
  {
    logo: logo_4,
    title: 'Партнер 4',
  },
];

function Partners() {
  return (
    <section className={styles.Partners}>
      {/* <div className={`${styles.Partners__company} `}></div> */}

      <Swiper
        modules={[Pagination]}
        speed={1000}
        keyboard={{ enabled: true }}
        pagination={{
          el: `.${styles.Partners__pagination}`,
          clickable: true,
          bulletClass: styles.Partners__bullet,
          bulletActiveClass: styles.Partners__bullet_active,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        breakpoints={{
          320: {
            spaceBetween: 30,
            slidesPerView: 1,
            loop: true,
          },
          768: {
            spaceBetween: 32,
            slidesPerView: 2,
            loop: true,
          },
          1024: {
            spaceBetween: 32,
            slidesPerView: 4,
            loop: true,
          },
        }}>
        {items.map((item, index) => (
          <SwiperSlide className={styles.Partners__slide} key={index}>
            <div>
              <div className={styles.Partners__img}>
                <img src={item.logo} loading="lazy"></img>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.Partners__pagination}></div>
    </section>
  );
}

export default Partners;
