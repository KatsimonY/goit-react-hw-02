import css from './Feedback.module.css';

export const Feedback = ({ good, neutral, bad, total, rating }) => {
  return (
    <div className={css.box}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {rating}%</p>
    </div>
  );
};
