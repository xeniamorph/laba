import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Project.module.scss';

import picture_1 from '../../assets/images/project-1.jpg';
import picture_2 from '../../assets/images/project-2.jpg';
import picture_3 from '../../assets/images/project-3.jpg';
import picture_4 from '../../assets/images/project-4.jpg';
import picture_5 from '../../assets/images/project-4.jpg';

const items = [
  {
    id: 1,
    picture: picture_1,
    src: '#',
    title: 'Проект такой то',
    text: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 2,
    picture: picture_2,
    src: '#',
    title: 'Проект такой то',
    text: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 3,
    picture: picture_3,
    src: '#',
    title: 'Проект такой то',
    text: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 4,
    picture: picture_4,
    src: '#',
    title: 'Проект такой то',
    text: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 5,
    picture: picture_5,
    src: '#',
    title: 'Проект такой то',
    text: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
];

function Project() {
  return (
    <section className={`${styles.Project} `}>
      <div className={styles.Projects__swiper}>
        <Swiper
          modules={[Navigation]}
          speed={1000}
          keyboard={{ enabled: true }}
          pagination={{
            el: `.${styles.Projects__pagination}`,
            clickable: true,
            bulletClass: styles.Projects__bullet,
            bulletActiveClass: styles.Projects__bullet_active,
            renderBullet: (className) => `<span class="${className}"></span>`,
          }}
          breakpoints={{
            320: {
              spaceBetween: 0,
              slidesPerView: 1,
              loop: true,
            },
          }}>
          {items.map((item) => (
            <SwiperSlide className={styles.Projects__slide} key={item.id}>
              <div className={styles.Projects__text}>
                <div className={styles.Projects__background}>
                  <img src={item.picture} />
                </div>
                <div className={styles.Projects__title}>{item.title}</div>
                <div className={styles.Projects__title}>{item.text}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Project;
