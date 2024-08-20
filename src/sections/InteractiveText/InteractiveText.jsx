import { useEffect, useRef } from 'react';
import styles from './InteractiveText.module.scss';

function InteractiveText() {
  const cursorRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      if (cursor) {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }

        animationFrameId.current = requestAnimationFrame(() => {
          cursor.style.left = e.pageX + 'px';
          cursor.style.top = e.pageY + 'px';
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <section className={styles.InteractiveText}>
      <div className={styles.InteractiveText__main}>Вдохновляющие проекты для амбициозных заказчиков</div>
      <div ref={cursorRef} className={styles.InteractiveText__circle}></div>
    </section>
  );
}

export default InteractiveText;
