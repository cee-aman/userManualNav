import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import clsx from 'clsx';
import HomeIcon from '@mui/icons-material/Home';

function UpdationForm() {

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
          <p className="hero__subtitle">User Manual for Updation of Form</p>
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
            Update Form
          </h2>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>1. Select a Vessel:</h3>
            <p style={{ fontSize: '16px' }}>Choose a vessel by specifying its name, country, and type. The other two fields will be automatically populated based on your selection.</p>
            <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>2. Update Information:</h3>
            <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
              <li>Update latitude and longitude</li>
              <li>Update COG (Course Over Ground) and SOG (Speed Over Ground)</li>
              <li>Update timestamp</li>
              <li>Add or modify remarks</li>
              <li>Update source of information</li>
              <li>Upload or modify files</li>
            </ul>
            <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>3. Add Latitude and Longitude:</h3>
            <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
              <li>Manually enter latitude and longitude</li>
              <li>Select location on chart</li>
              <li>Use bearing range to determine latitude and longitude</li>
            </ul>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Additional Information:</h3>
            <p style={{ fontSize: '16px' }}>Add any additional information or notes that may be relevant for the update.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Approval Status:</h3>
            <p style={{ fontSize: '16px' }}>Specify the current approval status of the update, whether it's approved, pending, or rejected.</p>
          </div>
        </div>
      </div>
      <div style={{marginTop:"10px"}}>
<img src="../../static/img/Screenshot 2024-03-26 163657.png" alt="Image" style={{ width: '100%', height: 'auto' }} />
</div>
<div style={{ marginTop: "20px", textAlign: "center", fontSize: "16px", color: "#666" }}>
  Thank you for using the Track Injection Module. Your inputs are crucial for enhancing maritime tracking capabilities. Please review your entries carefully before submitting.
</div>
    </div>
  );
}

export default UpdationForm;
