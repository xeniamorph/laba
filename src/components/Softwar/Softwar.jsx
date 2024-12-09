import styles from './Softwar.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import logo_3dsmax from '../../assets/images/softwar-3dsmax.svg';
import logo_figma from '../../assets/images/softwar-figma.svg';
import logo_blender from '../../assets/images/softwar-blender.svg';
import logo_react from '../../assets/images/softwar-react.svg';
import logo_redux from '../../assets/images/softwar-redux.svg';
import logo_unreal from '../../assets/images/softwar-unreal.svg';
import logo_after_effect from '../../assets/images/softwar-after-effect.svg';

const items = [
  { logo: logo_after_effect, title: 'Adobe After Effect' },
  { logo: logo_3dsmax, title: '3Ds Max' },
  { logo: logo_figma, title: 'Figma' },
  { logo: logo_blender, title: 'Blender' },
  { logo: logo_react, title: 'React' },
  { logo: logo_redux, title: 'Redux' },
  { logo: logo_unreal, title: 'Unreal Engine' },
];

function Softwar() {
  return (
    <section className={styles.Softwar}>
      <div className={styles.Softwar__container}>
        <Swiper
          className={styles.Softwar__swiper}
          modules={[Pagination, Autoplay]}
          speed={1000}
          keyboard={{ enabled: true }}
          pagination={{
            el: `.${styles.Softwar__pagination}`,
            clickable: true,
            bulletClass: styles.Softwar__bullet,
            bulletActiveClass: styles.Softwar__bullet_active,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          breakpoints={{
            280: { spaceBetween: 16, slidesPerView: 1, loop: true },
            700: { spaceBetween: 16, slidesPerView: 2, loop: true },
            1024: { spaceBetween: 30, slidesPerView: 3, loop: true },
            1600: { spaceBetween: 32, slidesPerView: 3, loop: true },
            2560: { spaceBetween: 42, slidesPerView: 3, loop: true },
          }}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
        >
          {items.map((item, index) => (
            <SwiperSlide className={styles.Softwar__slide} key={index}>
              <div className={styles.Softwar__img}>
                <img src={item.logo} loading="lazy" alt={item.title} />
              </div>
              <div className={styles.Softwar__title}>{item.title} </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.Softwar__pagination}></div>
      </div>
    </section>
  );
}

export default Softwar;
