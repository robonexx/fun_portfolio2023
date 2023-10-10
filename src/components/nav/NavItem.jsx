import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './navItem.module.scss';

// eslint-disable-next-line react/prop-types
const NavItem = ({ title, path, id, i, closeMobileMenu }) => {
  return (
    <motion.li
      className={styles.nav_item}
      key={id}
      initial={{ opacity: 0, y: i % 2 === 0 ? -1000 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: i * 0.1 }}
      onClick={closeMobileMenu}
    >
      <Link to={path} className={styles.nav_link}>
        <div className={styles.btn}>
          <p>
            <span>{title}</span>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
          </p>
        </div>
      </Link>
    </motion.li>
  );
};

export default NavItem;
