import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import clsx from 'clsx';
import HomeIcon from '@mui/icons-material/Home';

function MaintainDatabase() {

  const homeHandler = () => {
    window.location.href = "/";
  }

  function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div style={{ position: 'relative', bottom: '130px', left: '5px' }} onClick={homeHandler}>
          <HomeIcon />
        </div>
        <div className="container">
          <h1 className="hero__title">Nav Drishti</h1>
          <h2 className="hero__title">Track Injection Module</h2>
          <p className="hero__subtitle">User Manual for Maintaining Database</p>
        </div>
      </header>
    );
  }

  return (
    <div>
      <HomepageHeader/>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <div style={{ margin: '20px', padding: '20px', border: '2px solid #333', borderRadius: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', width: '1200px' }}>
          <h2 style={{ marginBottom: '20px', color: '#333', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
            Maintenance of Database
          </h2>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Sort Data:</h3>
            <p style={{ fontSize: '16px' }}>Users can sort the data based on country, name, type, source, and timestamp.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Approved Forms:</h3>
            <p style={{ fontSize: '16px' }}>All approved forms will be displayed in the maintenance database.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Additional Information:</h3>
            <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
              <li>Users can perform actions such as editing or deleting forms.</li>
              <li>Database maintenance ensures data integrity and availability.</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{marginTop:"10px"}}>
      <img src="../../static/img/Screenshot 2024-03-26 164600.png" alt="Image" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ marginTop: "20px", textAlign: "center", fontSize: "16px", color: "#666" }}>
        Thank you for using the Track Injection Module. Your inputs are crucial for enhancing maritime tracking capabilities. Please review your entries carefully before submitting.
      </div>
    </div>
  );
}

export default MaintainDatabase;
