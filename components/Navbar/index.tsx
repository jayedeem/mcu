import { NextComponentType } from 'next';
import styles from './navbar.module.scss';

export const NavBar = (): JSX.Element => {
    return (
        <div className={styles.navbar__container}>
            <div className={styles.navbar__container_wrapper}>
                <div className={styles.navbar__container_logo}>
                    <h2>Marvel MCU APP</h2>
                </div>
                <div className={styles.navbar__container_menu}>
                    <div className={styles.navbar__container_menu_items}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
