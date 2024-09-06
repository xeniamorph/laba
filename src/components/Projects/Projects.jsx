import { useState, useEffect, useRef } from 'react';
import styles from './Projects.module.scss';
import { motion } from 'framer-motion';

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
    id: 1,
  },
  {
    video: video_2,
    src: '#',
    title: 'WEB',
    id: 2,
  },
  {
    video: video_3,
    src: '#',
    title: 'MOBILE/ desktop',
    id: 3,
  },
  {
    video: video_4,
    src: '#',
    title: 'ВИДЕО',
    id: 4,
  },
  {
    video: video_5,
    src: '#',
    title: 'VR / AR',
    id: 5,
  },
];

function Projects() {
  const [isTablet] = useState(window.innerWidth < 1280);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const size = isHovered ? (screenWidth < 1600 ? 80 : 200) : 0;
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  // Отслеживание позиции курсора
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;
      setMousePosition({ x, y });
    }
  };

  // Проверка, видим ли пользователю блок
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 1024);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Устанавливаем видимость в зависимости от состояния видимости элемента
      },
      {
        threshold: 0.5, // Настраиваем порог видимости
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  // Проигрывание или остановка видео по нажатию на play
  const handlePlayClick = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className={styles.Projects}>
      {isMobile && (
        <div className={styles.Projects__container}>
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
                renderBullet: (index, className) => `<span class="${className}"></span>`,
              }}
              breakpoints={{
                320: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                  loop: true,
                },
              }}>
              {items.map((item, index) => (
                <SwiperSlide className={styles.Projects__slide} key={item.id + '-slide'}>
                  <a href={item.src}>
                    <div className={styles.Projects__header} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div className={styles.Projects__video}>
                      <button
                        className={styles.Projects__play}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePlayClick(index);
                        }}></button>
                      <video preload="auto" ref={(el) => (videoRefs.current[index] = el)} loop muted>
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.Projects__pagination}></div>
        </div>
      )}
      {!isMobile && (
        <div className={`${styles.Projects__container} ${isVisible ? styles.animate : ''}`} ref={containerRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.div
            className={styles.Projects__mask}
            style={{
              maskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
              maskSize: `${size}px`,
              WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}>
            <div className={`${styles.Projects__items} ${styles.Projects__items_mask}`}>
              {items.map((item) => (
                <div className={styles.Projects__item} key={item.id + '-mask'}>
                  <div className={styles.Projects__title} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <div className={styles.Projects__preview}></div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className={`${styles.Projects__items}  ${styles.Projects__items_origin}`}>
            {items.map((item, index) => (
              <div className={styles.Projects__item} key={item.id}>
                <div className={styles.Projects__title} dangerouslySetInnerHTML={{ __html: item.title }} />
                <div className={styles.Projects__preview}>
                  <button
                    className={styles.Projects__play}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePlayClick(index);
                    }}></button>
                  <video preload="auto" ref={(el) => (videoRefs.current[index] = el)} autoPlay={!isTablet} loop muted>
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
