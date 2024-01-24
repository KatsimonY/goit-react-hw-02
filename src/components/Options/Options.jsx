import { FiSmile, FiMeh, FiFrown, FiRefreshCw } from 'react-icons/fi';
import css from './Options.module.css';

export const Options = ({ updateGood, updateNeutral, updateBad, totalFeedback, resetReviews }) => {
  return (
    <div className={css.box}>
      <button className={css.btn} onClick={updateGood}>
        Good <FiSmile />
      </button>
      <button className={css.btn} onClick={updateNeutral}>
        Neutral <FiMeh />
      </button>
      <button className={css.btn} onClick={updateBad}>
        Bad <FiFrown />
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={resetReviews}>
          Reset <FiRefreshCw />
        </button>
      )}
    </div>
  );
};
