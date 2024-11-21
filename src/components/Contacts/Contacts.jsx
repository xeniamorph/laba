import styles from './Contacts.module.scss';
import map from '../../assets/images/contacts.png';
export default function Contacts() {
  return (
    <section className={`${styles.Contacts} `}>
      <div className={styles.Contacts__content}>
        <div className={styles.Contacts__text}>
          <h1 className={styles.Contacts__title}>Контакты</h1>
          <a className={styles.Contacts__mail} href="mailto:mail@marksgroup.ru">
            mail@marksgroup.ru
          </a>
          <a href="tel:+74951201226" className={styles.Contacts__tel}>
            +7 (495) 120-12-26
          </a>
          <a href="https://yandex.ru/profile/1116551737" target="_black" className={styles.Contacts__address}>
            г. Москва ул. 3-я Ямского Поля д. 20 с1
          </a>
        </div>
        <a href="tel:+74951201226" className={styles.Contacts__call}>
          <span>Связаться</span>
        </a>
      </div>
      <div className={styles.Contacts__map}>
        <img loading="lazy" src={map}></img>
      </div>
    </section>
  );
}
