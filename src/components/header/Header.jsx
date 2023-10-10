import ScrollingText from '../scrollingtext/ScrollingText';
import styles from './header.module.scss';

// eslint-disable-next-line react/prop-types
const Header = () => {
  return (
    <header className={styles.header}>
      <ScrollingText title='developing rich web experiences & applications for your users' />
    </header>
  );
};

export default Header;
