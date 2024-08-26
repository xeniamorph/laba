import { useState } from 'react';
import styles from './Header.module.scss';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`${styles.Header} ${isActive ? styles.active : ''}`}>
      <div className={styles.Header__top}>
        <a href="#" className={styles.Header__desc}>
          digital agency
        </a>
        <a href="#" className={styles.Header__mr}>
          <svg
            width="55"
            height="16"
            viewBox="0 0 55 16"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.71733 15.8944H0V0H7.16138L12.8286 9.92735L18.5919 0H25.6572V15.8944H20.9612V4.56872L14.3975 15.8944H11.2277L4.71733 4.56872V15.8944Z"
              fill="#27292F"
            />
            <path
              d="M50.2827 0.105559L55 0.10556V16L47.8386 16L42.1714 6.07265L36.4081 16H29.3428L29.3428 0.105557L34.0388 0.105558V11.4313L40.6025 0.105558L43.7723 0.105559L50.2827 11.4313V0.105559Z"
              fill="#27292F"
            />
          </svg>
        </a>
        <button className={styles.Header__toggle} onClick={toggleActiveClass}>
          <div></div>
        </button>
      </div>
      <div className={styles.Header__inner}>
        <nav>
          <ul>
            <li>
              <a className={styles.active} href="#">
                Главная
              </a>
            </li>
            <li>
              <a href="#">Портфолио</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
        <ul className={styles.Header__links}>
          <li>
            <a href="#">Реквизиты</a>
          </li>
          <li>
            <a href="#">Презентация</a>
          </li>
        </ul>
        <div className={styles.Header__contacts}>
          <a className={styles.Header__mail} href="#">
            mail@marksgroup.ru
          </a>
          <a className={styles.Header__tel} href="#">
            тел. +7 (495) 120-12-26
          </a>
          <a href="#">г. Москва ул. 3-я Ямского Поля д. 20 с1</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
