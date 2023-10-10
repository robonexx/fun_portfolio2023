import styles from './scrollingText.module.scss';

// eslint-disable-next-line react/prop-types
const ScrollingText = ({ title }) => {
  return (
    <div className={styles.text_wrapper}>
      <p className={styles.text}>{title}</p>
      <p className={styles.text}>{title}</p>
    </div>
  );
};

export default ScrollingText;
