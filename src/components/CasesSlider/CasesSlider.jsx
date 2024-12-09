import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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
  const [isOpen, setIsOpen] = useState(false); // Состояние для управления отображением попапа

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

  const openPopup = () => {
    setIsOpen(true); // Открытие попапа
  };

  const closePopup = () => {
    setIsOpen(false); // Закрытие попапа
  };

  return (
    <section className={styles.CasesSlider}>
      <div ref={projectRef} className={styles.CasesSlider__container} onMouseMove={handleMouseMove}>
        <div ref={cursorRef} className={`${styles.CasesSlider__cursor} ${cursorHidden ? styles.hidden : ''}`}></div>

        {/* Основной слайдер */}
        <Swiper
          className={styles.CasesSlider__swiper}
          ref={swiperRef}
          modules={[Navigation]}
          speed={1000}
          keyboard={{ enabled: true }}
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
                <div
                  className={`${styles.CasesSlider__half} ${styles.CasesSlider__half_left}`}
                  onClick={() => handleSlide('prev')}
                ></div>
                <div
                  className={`${styles.CasesSlider__half} ${styles.CasesSlider__half_right}`}
                  onClick={() => handleSlide('next')}
                ></div>
                <button
                  className={styles.CasesSlider__circle}
                  onClick={openPopup} // Открытие попапа при клике на кнопку
                  onMouseEnter={() => setCursorHidden(true)}
                  onMouseLeave={() => setCursorHidden(false)}
                >
                  <div>На весь экран</div>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.CasesSlider__pagination}></div>

        {/* Оверлей и попап слайдер */}
        {isOpen && (
          <div className={styles.CasesSlider__overlay} onClick={closePopup}>
            <div className={styles.CasesSlider__popup}>
              <Swiper
                className={styles.CasesSlider__popupSwiper}
                ref={swiperRef}
                modules={[Navigation]}
                speed={1000}
                keyboard={{ enabled: true }}
                loop={true}
              >
                {items.map((item) => (
                  <SwiperSlide className={styles.CasesSlider__popupSlide} key={item.id}>
                    <div className={styles.CasesSlider__popupWrapper}>
                      <div className={styles.CasesSlider__popupBackground}>
                        <img loading="lazy" src={item.picture} alt={item.title} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className={styles.CasesSlider__closeButton} onClick={closePopup}>
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CasesSlider;
