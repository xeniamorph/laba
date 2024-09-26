import PropTypes from 'prop-types';
import styles from './Ticker.module.scss';
import { tickerItems } from '../../constants/tickerItems';

const Ticker = ({star }) => {
  return (
    <div className={`${styles.Ticker} ${star ? styles.Ticker__star : ''}`}>
      <ul className={styles.Ticker__text}>
        {tickerItems.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
      <ul className={styles.Ticker__text}>
        {tickerItems.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    </div>
  );
};

Ticker.propTypes = {
  star: PropTypes.bool,
};

export default Ticker;
