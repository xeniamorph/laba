import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesSlider.module.scss';

import picture_1 from '../../assets/images/case-1-1.jpg';
import picture_2 from '../../assets/images/case-1-2.jpg';
import picture_3 from '../../assets/images/case-1-3.jpg';
import picture_4 from '../../assets/images/case-1-4.jpg';
import picture_5 from '../../assets/images/case-1-5.jpg';

const items = [
  {
    id: 1,
    picture: picture_1,
    title: 'Проект такой то',
  },
  {
    id: 2,
    picture: picture_2,
    title: 'Проект такой то',
  },
  {
    id: 3,
    picture: picture_3,
    title: 'Проект такой то',
  },
  {
    id: 4,
    picture: picture_4,
    title: 'Проект такой то',
  },
  {
    id: 5,
    picture: picture_5,
    title: 'Проект такой то',
  },
];

function CasesSlider() {
  const projectRef = useRef(null);
  const cursorRef = useRef(null);
  const swiperRef = useRef(null);

  const [cursorHidden, setCursorHidden] = useState(false);

  const handleSlide = (direction) => {
    if (direction === 'prev') {
      swiperRef.current.swiper.slidePrev();
    } else if (direction === 'next') {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleMouseMove = (e) => {
    const projectRect = projectRef.current.getBoundingClientRect();
    const x = e.clientX - projectRect.left;
    const y = e.clientY - projectRect.top;
    cursorRef.current.style.left = `${x}px`;
    cursorRef.current.style.top = `${y}px`;
  };

  const [isActive, setIsActive] = useState(false);

  const scrollToSection = () => {
    if (projectRef.current) {
      const projectRect = projectRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY + projectRect.top - (window.innerHeight / 2 - projectRect.height / 2);

      // Прокрутка с плавным поведением
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    const header = document.getElementById('main-tool-bar');

    if (isActive) {
      header.style.display = 'none';
      header.style.transform = 'translate(0%, -100%)';
      header.style.transition = '0';
    } else {
      header.style.display = 'block';
      header.style.transform = 'translate(0%, -100%)';
      header.style.transition = '0';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  return (
    <section className={`${styles.CasesSlider} ${isActive ? styles.active : ''}`}>
      <div ref={projectRef} className={styles.CasesSlider__container} onMouseMove={handleMouseMove}>
        <div ref={cursorRef} className={`${styles.CasesSlider__cursor} ${cursorHidden ? styles.hidden : ''}`}></div>

        <Swiper
          className={styles.CasesSlider__swiper}
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          speed={1000}
          keyboard={{ enabled: true }}
          pagination={{
            el: `.${styles.CasesSlider__pagination}`,
            clickable: true,
            bulletClass: styles.CasesSlider__bullet,
            bulletActiveClass: styles.CasesSlider__bullet_active,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          breakpoints={{
            320: {
              spaceBetween: 16,
              slidesPerView: 1,
              loop: true,
            },
            1024: {
              spaceBetween: 32,
              slidesPerView: 1,
              loop: true,
            },
            1920: {
              spaceBetween: 40,
              slidesPerView: 1,
              loop: true,
            },
            2560: {
              spaceBetween: 52,
              slidesPerView: 1,
              loop: true,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide className={styles.CasesSlider__slide} key={item.id}>
              <div className={styles.CasesSlider__wrapper}>
                <div className={styles.CasesSlider__background}>
                  <img loading="lazy" src={item.picture} alt={item.title} />
                </div>
                <div className={`${styles.CasesSlider__half} ${styles.CasesSlider__half_left}`} onClick={() => handleSlide('prev')}></div>
                <div className={`${styles.CasesSlider__half} ${styles.CasesSlider__half_right}`} onClick={() => handleSlide('next')}></div>
                <button
                  className={styles.CasesSlider__circle}
                  onMouseEnter={() => setCursorHidden(true)}
                  onMouseLeave={() => setCursorHidden(false)}
                  onClick={() => {
                    setIsActive(!isActive);
                    scrollToSection();
                  }}
                >
                  <div>{isActive ? 'Вернуться' : 'На весь экран'}</div>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.CasesSlider__pagination}></div>
      </div>
    </section>
  );
}

export default CasesSlider;
