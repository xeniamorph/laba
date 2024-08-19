import { useState, useEffect, useRef } from 'react';
import styles from './Сompetencies.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import video_1 from '../../assets/videos/gallery-1.mp4';
import video_2 from '../../assets/videos/gallery-2.mp4';
import video_3 from '../../assets/videos/gallery-3.mp4';
import video_4 from '../../assets/videos/gallery-4.mp4';
import video_5 from '../../assets/videos/gallery-6.mp4';

const items = [
  {
    video: video_1,
    src: '#',
    title: '3D ВИЗУАЛИЗАЦ&shy;ИИ',
  },
  {
    video: video_2,
    src: '#',
    title: 'WEB',
  },
  {
    video: video_2,
    src: '#',
    title: 'MOBILE/ desktop',
  },
  {
    video: video_4,
    src: '#',
    title: 'ВИДЕО',
  },
  {
    video: video_5,
    src: '#',
    title: 'VR / AR',
  },
];

function Сompetencies() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    const cursor = document.querySelector('.custom-cursor');
    const links = document.querySelectorAll('a, .Сompetencies__header, .Сompetencies__title');

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        link.classList.add('invert');
      });
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        link.classList.remove('invert');
      });
    });

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePlayClick = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className={styles.Сompetencies}>
      <div className="custom-cursor"></div>
      {/* Слайдер на мобилке */}
      {isMobile && (
        <div className={styles.Сompetencies__swiper}>
          <Swiper
            modules={[Pagination]}
            speed={1000}
            keyboard={{ enabled: true }}
            pagination={{
              el: `.${styles.Сompetencies__pagination}`,
              clickable: true,
              bulletClass: styles.Сompetencies__bullet,
              bulletActiveClass: styles.Сompetencies__bullet_active,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            breakpoints={{
              320: {
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
              },
            }}>
            {items.map((item, index) => (
              <SwiperSlide className={styles.Сompetencies__slide} key={index}>
                <a href={item.src}>
                  <div className={styles.Сompetencies__header} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <div className={styles.Сompetencies__video}>
                    <button
                      className={styles.Сompetencies__play}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePlayClick(index);
                      }}></button>
                    <video ref={(el) => (videoRefs.current[index] = el)} loop muted>
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.Сompetencies__pagination}></div>
        </div>
      )}

      {/* Плитка */}
      {!isMobile && (
        <div className={styles.Сompetencies__items}>
          {items.map((item, index) => (
            <div className={styles.Сompetencies__item} key={index}>
              <div className={styles.Сompetencies__title} dangerouslySetInnerHTML={{ __html: item.title }} />
              <div className={styles.Сompetencies__preview}>
                <button
                  className={styles.Сompetencies__play}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePlayClick(index);
                  }}></button>
                <video ref={(el) => (videoRefs.current[index] = el)} loop muted>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Сompetencies;
