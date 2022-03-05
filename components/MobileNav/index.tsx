import { FC, useState, MouseEventHandler } from 'react';
import s from './mobilenav.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const MobilenavOverlay = ({ isToggle }: any) => {
  return (
    <div className={isToggle ? s.mobileNav__overlay : s.mobileNav__overlayHidden}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export const MobileNav: FC = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const toggleOverlay = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className={s.mobileNav}>
      <div className={s.mobileNav__hamburger}>
        {isToggle ? (
          <AiOutlineCloseCircle onClick={() => toggleOverlay()} />
        ) : (
          <GiHamburgerMenu onClick={() => toggleOverlay()} />
        )}
      </div>

      <>
        <MobilenavOverlay isToggle={isToggle} />
      </>
    </div>
  );
};
