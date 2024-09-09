import styles from './Contacts.module.scss';
import map from '../../assets/images/contacts.png';

function Contacts() {
  return (
    <section className={`${styles.Contacts} `}>
      <div className={styles.Contacts__content}>
        <div className={styles.Contacts__text}>
          <h1 className={styles.Contacts__title}>Контакты</h1>
          <a href="mailto:mail@marksgroup.ru" className={styles.Contacts__mail}>
            mail@marksgroup.ru
          </a>
          <a href="tel:+74951201226" className={styles.Contacts__tel}>
            тел. +7 (495) 120-12-26
          </a>
          <a href="https://yandex.uz/maps/-/CDspnHKG" className={styles.Contacts__address}>
            г. Москва ул. 3-я Ямского Поля д. 20 с1
          </a>
        </div>
        <a href="#" className={styles.Contacts__call}>
          <span>Связаться</span>
        </a>
      </div>
      <div className={styles.Contacts__map}>
        <img src={map}></img>
      </div>
    </section>
  );
}

export default Contacts;
