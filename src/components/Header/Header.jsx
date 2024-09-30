import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState('/');
  const location = useLocation();

  // Хук для установки активной вкладки
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab') || location.pathname;
    setActiveTab(savedTab);
  }, [location.pathname]);

  // Хук для блокировки/разблокировки скролла страницы
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isActive]);

  const toggleActiveClass = () => setIsActive((prev) => !prev);

  const handleTabClick = (path) => {
    if (path !== activeTab) {
      setActiveTab(path);
      localStorage.setItem('activeTab', path);
    }
    setIsActive(false);
  };

  return (
    <header className={`${styles.Header} ${isActive ? styles.active : ''}`}>
      <div className={styles.Header__top}>
        <Link to="/" className={styles.Header__desc} onClick={() => handleTabClick('/')}>
          digital agency
        </Link>
        <Link to="/" className={styles.Header__mg} onClick={() => handleTabClick('/')}>
          <svg width="57" height="20" viewBox="0 0 57 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.12162 19.7553H0.632812V0.231445H8.96187L15.5584 12.4266L22.2614 0.231445H30.4768V19.7553H25.0164V5.84166L17.3761 19.7553H13.6909L6.12162 5.84166V19.7553Z" fill="#1D2E43" />
            <path
              d="M50.5238 7.2709V7.22035C50.5238 6.31781 50.2682 5.70408 49.7569 5.37194C49.2457 5.03981 48.0883 4.87374 46.2847 4.87374H42.9971C41.0657 4.87374 39.8302 5.11923 39.2906 5.61022C38.7509 6.1012 38.474 7.13371 38.474 8.71497V11.4298C38.474 12.8378 38.7793 13.8053 39.39 14.3252C40.0006 14.845 41.2078 15.1122 43.0113 15.1122H46.2776C47.8966 15.1122 49.0185 14.9534 49.6291 14.6501C50.2398 14.3396 50.5451 13.8053 50.5451 13.0472C50.5451 12.9389 50.5309 12.7656 50.4954 12.5201C50.4954 12.4912 50.4954 12.4696 50.4954 12.4551H43.8563V8.50558H56.3676V14.9173C56.3676 16.7512 55.7215 18.0581 54.4363 18.8307C53.151 19.6033 50.9072 19.9932 47.7191 19.9932H41.4421C39.5178 19.9932 38.0906 19.8849 37.1746 19.6682C36.2586 19.4516 35.4775 19.0762 34.8385 18.5563C34.0929 17.9354 33.5533 17.17 33.2124 16.2675C32.8716 15.3649 32.7012 14.2169 32.7012 12.8378V7.51639C32.7012 4.72211 33.326 2.7654 34.5829 1.66068C35.8397 0.555967 38.1119 0 41.4137 0H47.7191C49.7569 0 51.2552 0.0938643 52.2209 0.288814C53.1866 0.483764 53.9534 0.801459 54.5073 1.25634C55.0895 1.72566 55.5156 2.36106 55.7925 3.16251C56.0694 3.96397 56.2114 4.96761 56.2114 6.1734C56.2114 6.46222 56.2114 6.68605 56.2043 6.84489C56.1972 7.00374 56.1972 7.14815 56.183 7.27812H50.5238V7.2709Z"
              fill="#1D2E43"
            />
          </svg>
        </Link>
        <button className={styles.Header__toggle} onClick={toggleActiveClass}>
          <div></div>
        </button>
      </div>
      <div className={styles.Header__inner}>
        <nav>
          <ul>
            <li>
              <Link className={activeTab === '/' ? styles.active : ''} to="/" onClick={() => handleTabClick('/')}>
                Главная
              </Link>
            </li>
            <li>
              <Link className={activeTab === '/portfolio' ? styles.active : ''} to="/portfolio" onClick={() => handleTabClick('/portfolio')}>
                Портфолио
              </Link>
            </li>
            <li>
              <Link className={activeTab === '/contact' ? styles.active : ''} to="/contact" onClick={() => handleTabClick('/contact')}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <ul className={styles.Header__links}>
          {/* <li>
            <a href="#">Реквизиты</a>
          </li> */}
          <li>
            <a href="#">Презентация</a>
          </li>
        </ul>
        <div className={styles.Header__contacts}>
          <a className={styles.Header__mail} href="mailto:mail@marksgroup.ru">
            mail@marksgroup.ru
          </a>
          <a href="tel:+74951201226" className={styles.Header__tel}>
            +7 (495) 120-12-26
          </a>
          <a href="https://yandex.ru/profile/1116551737" target="_black">
            г. Москва ул. 3-я Ямского Поля д. 20 с1
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
