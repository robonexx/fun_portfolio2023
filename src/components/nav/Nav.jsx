import { useCallback } from 'react';
import NavItem from './NavItem';
import { navData } from '../../assets/constants/NavData';
// styles
import styles from './nav.module.scss';

// eslint-disable-next-line react/prop-types
export default function Nav({ active, setActive }) {

  const closeMobileMenu = useCallback(() => {
    setActive(false);
  }, [setActive]);

  return (
    <>
      <nav className={`${styles.nav} ${styles.open}${active ? styles.open : ''}`}>
        <ul className={`${styles.menu} ${active ? styles.open : ''}`}>
          {navData.map(({ title, path, id, img, i }) => (
            <NavItem
              key={id}
              title={title}
              path={path}
              id={id}
              i={i}
              img={img}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </ul>
      </nav>
    </>
  );
}
