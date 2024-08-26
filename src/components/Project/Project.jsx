import styles from './Project.module.scss';

import video_1 from '../../assets/videos/gallery-1.mp4';
import video_2 from '../../assets/videos/gallery-2.mp4';
import video_3 from '../../assets/videos/gallery-3.mp4';
import video_4 from '../../assets/videos/gallery-4.mp4';
import video_5 from '../../assets/videos/gallery-6.mp4';

const items = [
  {
    id: 1,
    picture: video_1,
    src: '#',
    title: 'Проект такой то',
    text: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 2,
    picture: video_1,
    src: '#',
    title: 'Проект такой то',
    text: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 3,
    picture: video_1,
    src: '#',
    title: 'Проект такой то',
    text: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 4,
    picture: video_1,
    src: '#',
    title: 'Проект такой то',
    text: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 5,
    picture: video_1,
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
          modules={[Pagination]}
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
          {items.map((item, index) => (
            <SwiperSlide className={styles.Projects__slide} key={item.id + '-slide'}></SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.Projects__pagination}></div>
      </div>
    </section>
  );
}

export default Project;
