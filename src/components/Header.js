import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../pages/index.module.css';
import clsx from 'clsx';
import HomeIcon from '@mui/icons-material/Home';
import NavBtnGrp from './NavBtnGrp';


const homeHandler = () => {
    window.location.href = "/";
  }

 export default function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div style={{ position: 'relative', bottom: '130px', left: '5px', cursor: "pointer" }} onClick={homeHandler}>
          <HomeIcon />
        </div>
        <div className={styles.container}>
          <h1 className="hero__title">Nav Drishti</h1>
          <h2 className="hero__title">GUI</h2>
          <p className="hero__subtitle">User Manual for handling GUI</p>
          <NavBtnGrp />
        </div>
        <img src="../../static/img/gui/gui2.png" alt="Image" className={styles.topRightImage} />
      </header>
    );
  }