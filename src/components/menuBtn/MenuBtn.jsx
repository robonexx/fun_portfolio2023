import styles from './MenuBtn.module.scss';

// eslint-disable-next-line react/prop-types
const MenuBtn = ({ active, setActive }) => {
  const onClickHandler = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <div className={styles.hamburger_wrapper} onClick={onClickHandler}>
      <div
        className={`${styles.hamburger} ${active ? styles.active : ''}`}
        id='hamburger'
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MenuBtn;
