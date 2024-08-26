import PropTypes from 'prop-types';
import styles from './Ticker.module.scss';

const Ticker = ({ items, star }) => {
  return (
    <div className={`${styles.Ticker} ${star ? styles.Ticker__star : ''}`}>
      <ul className={styles.Ticker__text}>
        {items.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
      <ul className={styles.Ticker__text}>
        {items.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    </div>
  );
};

Ticker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  star: PropTypes.bool,
};

export default Ticker;
