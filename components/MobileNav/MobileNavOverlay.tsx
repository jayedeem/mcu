import { FC } from 'react'
import s from './mobilenav.module.scss';
import { navLinks } from './navlink';

export interface MobilenavOverlayProps {
    isToggle: boolean;
}

export const MobilenavOverlay: FC<MobilenavOverlayProps> = ({ isToggle }) => {
    return (
        <div className={isToggle ? s.mobileNav__overlay : s.mobileNav__overlayHidden}>
            <ul className={s.mobileNav__overlay_list}>
                {
                    navLinks.map(navlink => {
                        return (
                            <li key={navlink.link}>{navlink.link}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};