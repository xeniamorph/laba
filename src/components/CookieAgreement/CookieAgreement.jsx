import styles from './CookieAgreement.module.scss';

function CookieAgreement() {
  const handleMouseMove = (e) => {
    const { currentTarget: element } = e;
    const x = e.pageX - element.offsetLeft;
    const y = e.pageY - element.offsetTop;

    element.style.setProperty('--x5', `${x}px`);
    element.style.setProperty('--y5', `${y}px`);
  };

  return (
    <section className={styles.CookieAgreement__company}>
      <div className={styles.CookieAgreement__text}>OOO «Media» использует файлы cookie и инструменты аналитики на сайте</div>
      <div onMouseMove={handleMouseMove} className={styles.CookieAgreement__button}>
        <span>Понятно</span>
      </div>
    </section>
  );
}

export default CookieAgreement;
