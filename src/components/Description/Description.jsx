import { FiCoffee } from 'react-icons/fi';
import css from './Description.module.css';

export const Description = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>
        <FiCoffee /> Sip Happens Café
      </h1>
      <p className={css.description}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
    </div>
  );
};
