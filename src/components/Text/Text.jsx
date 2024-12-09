import styles from './Text.module.scss';

function Text() {
  return (
    <section className={styles.Text}>
      <div className={styles.Text__container}>
        <div className={styles.Text__title}>Задача</div>
        <div className={styles.Text__text}>
          Создать10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта
          <br></br>
          <br></br>Если есть второй абзац
        </div>
      </div>
    </section>
  );
}

export default Text;
