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
              <a className={styles.anchor} href="/ClockSigninBar"><button className={styles.btnGrpBtn}>Clock and Sign-in Bar</button></a>
              <a className={styles.anchor} href="/SelectionTaskBar"><button className={styles.btnGrpBtn}>Selection Task Bar</button></a>
              <a className={styles.anchor} href="/StatusBar"><button className={styles.btnGrpBtn}>Status Bar</button></a>
              <a className={styles.anchor} href="/VerticalTaskBar"><button className={styles.btnGrpBtn}>Vertical Task Bar</button></a>
              <a className={styles.anchor} href="/OtrGui"><button className={styles.btnGrpBtn}>OTR GUI</button></a>

            </div>
            <div className={styles.guirow}>
              <a className={styles.anchor} href="/RangeZoomControl"><button className={styles.btnGrpBtn}>Range and Zoom Control</button></a>
              <a className={styles.anchor} href="/HorizontalInfoBar"><button className={styles.btnGrpBtn}>Horizontal Information Bar</button></a>
              <a className={styles.anchor} href="/MiniMap"><button className={styles.btnGrpBtn}>Mini Map</button></a>
              <a className={styles.anchor} href="/DrawingToolBar"><button className={styles.btnGrpBtn}>Drawing Tool Bar</button></a>
              <a className={styles.anchor} href="/Layers"><button className={styles.btnGrpBtn}>Layers</button></a>

            </div>
          </div>
        </div>
      </div>
  )
}

export default GUI
