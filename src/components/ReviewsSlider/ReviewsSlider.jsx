import './ReviewsSlider.scss'; // Подключаем обычный SCSS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import picture_1 from '../../assets/images/reviews-slider-1.svg';
import picture_2 from '../../assets/images/reviews-slider-2.jpg';

const items = [
  {
    title: 'Отзыв клиента',
    text: 'Создать 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Потугин<br> менеджер проекта MARKS GROUP',
    picture: [
      { logo: picture_1, title: 'Манагер' },
      { logo: picture_2, title: 'Клиент' },
      { logo: picture_1, title: 'Манагер' },
      { logo: picture_2, title: 'Клиент' },
      { logo: picture_1, title: 'Манагер' },
    ],
  },
  {
    title: 'Отзыв клиента 2',
    text: 'Создать 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: picture_1, title: 'Ололо' },
      { logo: picture_2, title: 'Алала' },
    ],
  },
  {
    title: 'Отзыв клиента 3',
    text: 'Создать 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: picture_1, title: 'Тырым пырым' },
      { logo: picture_2, title: 'Пхпхппх' },
    ],
  },
  {
    title: 'Отзыв клиента 4',
    text: 'Создать 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: picture_1, title: 'Тырым пырым' },
      { logo: picture_2, title: 'Пхпхппх' },
    ],
  },
  {
    title: 'Отзыв клиента 5',
    text: 'Создать 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: picture_1, title: 'Тырым пырым' },
      { logo: picture_2, title: 'Пхпхппх' },
    ],
  },
];

function ReviewsSlider() {
  return (
    <section className="ReviewsSlider">
      <div className="ReviewsSlider__container">
        <Swiper
          className={'ReviewsSlider__swiper'}
          modules={[Pagination, Autoplay]}
          speed={1000}
          centeredSlides={true}
          keyboard={{ enabled: true }}
          slideActiveClass={'ReviewsSlider__slide_active'}
          pagination={{
            el: `.ReviewsSlider__pagination`,
            clickable: true,
            bulletClass: 'ReviewsSlider__bullet',
            bulletActiveClass: 'ReviewsSlider__bullet_active',
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          breakpoints={{
            280: { spaceBetween: 32, slidesPerView: 1.1, loop: true },
            1024: { spaceBetween: 32, slidesPerView: 1, loop: true },
            1280: { spaceBetween: 100, slidesPerView: 1, loop: true },
            2560: { spaceBetween: 52, slidesPerView: 1, loop: true },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide className="ReviewsSlider__slide" key={index}>
              <div className="ReviewsSlider__box">
                <div className="ReviewsSlider__title" dangerouslySetInnerHTML={{ __html: item.title }}></div>
                <div className="ReviewsSlider__text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
                <div className="ReviewsSlider__footer">
                  <div className="ReviewsSlider__name" dangerouslySetInnerHTML={{ __html: item.name }}></div>
                  <div className="ReviewsSlider__pictures">
                    {item.picture.map((pic, picIndex) => (
                      <div className="ReviewsSlider__picture" key={picIndex}>
                        <img src={pic.logo} alt={pic.title} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ReviewsSlider__pagination"></div>
      </div>
    </section>
  );
}

export default ReviewsSlider;
