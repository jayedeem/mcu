import { FC } from 'react';
import s from './mobilenav.module.scss';
import { navLinks } from './navlink';
import { IHandleSetPhase } from '@/utils/MoviePhases';

export interface MobilenavOverlayProps {
  isToggle: boolean;
  onClick: IHandleSetPhase;
}

export const MobilenavOverlay: FC<MobilenavOverlayProps> = ({ onClick, isToggle }) => {
  return (
    <div className={isToggle ? s.mobileNav__overlay : s.mobileNav__overlayHidden}>
      <ul className={s.mobileNav__overlay_list}>
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.link} onClick={() => onClick(navLink.phase)}>
              {navLink.link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
