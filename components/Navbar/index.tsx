import { navLinks } from '../MobileNav/navlink';
import styles from './navbar.module.scss';
import { IHandleSetPhase } from '@/utils/MoviePhases';

interface IProps {
  onClick: IHandleSetPhase;
}

export const NavBar: React.FC<IProps> = ({ onClick }): JSX.Element => {
  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar__container_wrapper}>
        <div className={styles.navbar__container_logo}>
          <h2>Marvel MCU APP</h2>
        </div>
        <div className={styles.navbar__container_menu}>
          <div className={styles.navbar__container_menu_items}>
            <ul>
              {navLinks.map((navLink) => {
                return (
                  <li key={navLink.link} onClick={() => onClick(navLink.phase)}>
                    {navLink.link}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
