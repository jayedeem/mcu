import { FC } from 'react';
import s from './mobilenav.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface MobileNavControlsProps {
  toggleOverlay: () => void;
  isToggle: boolean;
}

export const MobileNavControls: FC<MobileNavControlsProps> = ({ toggleOverlay, isToggle }) => {
  return (
    <div className={s.mobileNav__hamburger} onClick={() => toggleOverlay()}>
      {isToggle ? <AiOutlineCloseCircle /> : <GiHamburgerMenu />}
    </div>
  );
};
