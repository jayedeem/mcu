import { FC, useState, useEffect } from 'react';
import s from './mobilenav.module.scss';
import { MobileNavControls } from './MobileNavControls';
import { MobilenavOverlay } from './MobileNavOverlay';

export const MobileNav: FC = () => {
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
      <MobilenavOverlay isToggle={isToggle} />
    </div>
  );
};
