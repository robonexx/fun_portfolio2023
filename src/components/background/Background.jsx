import styles from './background.module.scss';

export const Background = () => {
  return (
    <div className={styles.background}>
      <h2>Art By Rob</h2>
      <div className={styles.piece1}>
        <div className={styles.bgimg}></div>
      </div>
      <div className={styles.piece2}>
        <div className={styles.bgimg}></div>
      </div>
      <div className={styles.piece3}>
        <div className={styles.bgimg}></div>
      </div>
      <div className={styles.piece4}>
        <div className={styles.bgimg}></div>
      </div>
    </div>
  );
};
