import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <a className={styles.Footer__mail} href="#">
        mail@marksgroup.ru
      </a>
      <div className={styles.Footer__container}>
        <div className={styles.Footer__contacts}>
          <div className={styles.Footer__contact}>
            Номер телефона: <a href="#">+7 (495) 120-12-26</a>
          </div>
          <div className={styles.Footer__contact}>
            Адрес: <a href="#">125124, г. Москва, 3-я улица Ямского поля, д.&nbsp;20, стр.&nbsp;1</a>
          </div>
        </div>
        <div className={styles.Footer__bottom}>
          <a href="#">Политика конфиденциальности</a>
          <div>&copy; LABA</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
