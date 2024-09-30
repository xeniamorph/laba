import { useEffect, useState } from 'react';
import styles from './CookieAgreement.module.scss';

function CookieAgreement() {
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли уже согласие в localStorage
    const agreement = localStorage.getItem('cookieAgreement');
    if (agreement === 'true') {
      setIsAgreed(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    const { currentTarget: element } = e;
    const x = e.pageX - element.offsetLeft;
    const y = e.pageY - element.offsetTop;

    element.style.setProperty('--x5', `${x}px`);
    element.style.setProperty('--y5', `${y}px`);
  };

  const handleAgreement = () => {
    // Сохраняем согласие в localStorage
    localStorage.setItem('cookieAgreement', 'true');
    setIsAgreed(true);
  };

  if (isAgreed) {
    // Если согласие уже дано, не показываем компонент
    return null;
  }

  return (
    <section className={styles.CookieAgreement__company}>
      <div className={styles.CookieAgreement__text}>OOO «Media» использует файлы cookie и инструменты аналитики на сайте</div>
      <div onMouseMove={handleMouseMove} onClick={handleAgreement} className={styles.CookieAgreement__button}>
        <span>Понятно</span>
      </div>
    </section>
  );
}

export default CookieAgreement;
