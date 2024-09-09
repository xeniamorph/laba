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
    video_5,
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
  const [dynamicSize, setDynamicSize] = useState(size);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  // Отслеживание позиции курсора
  const handleMouseMove = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    setMousePosition({ x, y });

    // Остлеживание близости к границам элементов
    let nearBorder = false;

    itemsRef.current.forEach((item) => {
      if (item) {
        const rect = item.getBoundingClientRect();
        const offset = 50;

        if (
          (e.clientX > rect.left - offset && e.clientX < rect.left + offset) ||
          (e.clientX > rect.right - offset && e.clientX < rect.right + offset) ||
          (e.clientY > rect.top - offset && e.clientY < rect.top + offset) ||
          (e.clientY > rect.bottom - offset && e.clientY < rect.bottom + offset)
        ) {
          nearBorder = true;
        }
      }
    });

    // Устанавливаем размер круга в зависимоти от близости к границам элементов
    if (nearBorder) {
      setDynamicSize(40);
    } else {
      setDynamicSize(size);
    }
  };

  useEffect(() => {
    // Отслеживание видимости блока 
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [size]);

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
            animate={{
              maskSize: `${dynamicSize}px`,
            }}
            transition={{
              maskSize: { duration: 0.01, ease: 'easeInOut' },
            }}
            style={{
              maskPosition: `${mousePosition.x - dynamicSize / 2}px ${mousePosition.y - dynamicSize / 2}px`,
              WebkitMaskPosition: `${mousePosition.x - dynamicSize / 2}px ${mousePosition.y - dynamicSize / 2}px`,
              WebkitMaskSize: `${dynamicSize}px`,
            }}>
            <div className={`${styles.Projects__items} ${styles.Projects__items_mask}`}>
              {items.map((item, index) => (
                <div className={styles.Projects__item} key={item.id + '-mask'} ref={(el) => (itemsRef.current[index] = el)}>
                  <div className={styles.Projects__title} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <div className={styles.Projects__preview}></div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className={`${styles.Projects__items}  ${styles.Projects__items_origin}`}>
            {items.map((item, index) => (
              <div className={styles.Projects__item} key={item.id} ref={(el) => (itemsRef.current[index] = el)}>
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
