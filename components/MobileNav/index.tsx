import { FC, useState, useEffect } from 'react';
import s from './mobilenav.module.scss';
import { MobileNavControls } from './MobileNavControls';
import { MobileNavOverlay } from './MobileNavOverlay';
import { IHandleSetPhase } from '@/utils/MoviePhases';

export interface MobileNavOverlayProps {
  handleClick: IHandleSetPhase;
}
export const MobileNav: FC<MobileNavOverlayProps> = ({ handleClick }) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  useEffect(() => {
    if (isToggle) {
      document.body.style.overflow = 'hidden';
    }
    if (!isToggle) {
      document.body.style.overflow = 'unset';
    }
  }, [isToggle]);

  const toggleOverlay = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className={s.mobileNav}>
      <MobileNavControls toggleOverlay={toggleOverlay} isToggle={isToggle} />
      <MobileNavOverlay handleClick={handleClick} isToggle={isToggle} />
    </div>
  );
};
