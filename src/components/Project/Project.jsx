import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Project.module.scss';

import picture_1 from '../../assets/images/project-1.jpg';
import picture_2 from '../../assets/images/project-2.jpg';
import picture_3 from '../../assets/images/project-3.jpg';
import picture_4 from '../../assets/images/project-4.jpg';
import picture_5 from '../../assets/images/project-5.jpg';

const items = [
  {
    id: 1,
    picture: picture_1,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 2,
    picture: picture_2,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 3,
    picture: picture_3,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 4,
    picture: picture_4,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 5,
    picture: picture_5,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
];

function Project() {
  const swiperRef = useRef(null);

  const handleSlide = (direction) => {
    if (direction === 'prev') {
      swiperRef.current.swiper.slidePrev();
    } else if (direction === 'next') {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className={styles.Project}>
      <div className={styles.Project__swiper}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          speed={1000}
          keyboard={{ enabled: true }}
          breakpoints={{
            320: {
              spaceBetween: 0,
              slidesPerView: 1,
              loop: true,
            },
          }}>
          {items.map((item) => (
            <SwiperSlide className={styles.Project__slide} key={item.id}>
              <div className={styles.Project__container}>
                <div className={styles.Project__background}>
                  <img src={item.picture} alt={item.title} />
                </div>
                <div className={`${styles.Project__half} ${styles.Project__half_left}`} onClick={() => handleSlide('prev')}></div>
                <div className={`${styles.Project__half} ${styles.Project__half_right}`} onClick={() => handleSlide('next')}></div>
                <div className={styles.Project__text}>
                  <div className={styles.Project__title}>{item.title}</div>
                  <div className={styles.Project__desc}>{item.desc}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Project;
