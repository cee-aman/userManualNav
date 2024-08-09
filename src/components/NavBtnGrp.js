import React, { useEffect, useState } from 'react';
import styles from './HomepageFeatures.module.css';

const NavBtnGrp = () => {
 const buttons = [
    "ClockSigninBar",
    "SelectionTaskBar",
    "StatusBar",
    "VerticalTaskBar",
    "RangeZoomControl",
    "HorizontalInfoBar",
    "MiniMap",
    "DrawingToolBar",
 ];

 const [activeButton, setActiveButton] = useState(null);


 useEffect(() => {
    setActiveButton(window.location.pathname.substring(1))
 }, [])

 return (
    <div className={styles.btnGrp}>
      {buttons.map((buttonId, index) => (
        <a key={buttonId} className={styles.anchor} href={`/${buttonId}`}>
          <button
            className={`${styles.btnGrpBtn} ${activeButton === buttonId ? styles.active : ''}`}
          >
            {`${index+1}. ${buttonId.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}`}
          </button>
        </a>
      ))}
    </div>
 );
};

export default NavBtnGrp;
