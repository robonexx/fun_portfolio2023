import ScrollingText from '../scrollingtext/ScrollingText';
import { motion } from 'framer-motion';
import styles from './header.module.scss';

// eslint-disable-next-line react/prop-types
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className={styles.header}
    >
      <ScrollingText title='developing rich web experiences & applications for your users' />
    </motion.header>
  );
};

export default Header;
