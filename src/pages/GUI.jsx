import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import clsx from 'clsx';
import HomeIcon from '@mui/icons-material/Home';

const GUI = () => {
    const homeHandler = () => {
        window.location.href = "/";
      }
    
      function HomepageHeader() {
        const { siteConfig } = useDocusaurusContext();
        return (
          <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div style={{ position: 'relative', bottom: '130px', left: '5px', cursor: "pointer" }} onClick={homeHandler}>
              <HomeIcon />
            </div>
            <div className="container">
              <h1 className="hero__title">Nav Drishti</h1>
              <h2 className="hero__title">GUI</h2>
              <p className="hero__subtitle">User Manual for handling GUI</p>
            </div>
          </header>
        );
      }
  return (
    <div>
      <HomepageHeader/>
      <div className={styles.guiWrapper}>
        <div className={styles.guiSection}>
            <img src="../../static/img/gui/gui.png" alt="Image" style={{ width: '70%', height: 'auto' }} />
            <ol className={styles.olDecor}>
                <li className={styles.liDecor}>Clock and Sign-in Bar</li>
                <li className={styles.liDecor}>Selection Task Bar</li>
                <li className={styles.liDecor}>Status Bar</li>
                <li className={styles.liDecor}>Vertical Task Bar</li>
                <li className={styles.liDecor}>Range and Zoom Control</li>
                <li className={styles.liDecor}>Horizontal Information Bar</li>
                <li className={styles.liDecor}>Mini Map</li>
                <li className={styles.liDecor}>Drawing Tool Bar</li>
                <li className={styles.liDecor}>Layers</li>
            </ol>
        </div>
        <div className={styles.btnGrp}>
          <div className={styles.guirow}>
            <button className={styles.btnGrpBtn}>Clock and Sign-in Bar</button>
            <button className={styles.btnGrpBtn}>Selection Task Bar</button>
            <button className={styles.btnGrpBtn}>Status Bar</button>
            <button className={styles.btnGrpBtn}>Vertical Task Bar</button>
          </div>
          <div className={styles.guirow}>
            <button className={styles.btnGrpBtn}>Range and Zoom Control</button>
            <button className={styles.btnGrpBtn}>Horizontal Information Bar</button>
            <button className={styles.btnGrpBtn}>Mini Map</button>
            <button className={styles.btnGrpBtn}>Drawing Tool Bar</button>
            <button className={styles.btnGrpBtn}>Layers</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GUI
