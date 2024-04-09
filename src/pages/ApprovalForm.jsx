import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import clsx from 'clsx';
import HomeIcon from '@mui/icons-material/Home';

function ApprovalForm() {

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
          <p className="hero__subtitle">User Manual for Approval and Deletion of Forms</p>
        </div>
      </header>
    );
  }

  return (
    <div>
      <HomepageHeader/>
      <div style={{marginTop:"10px"}}>
      <img src="../../static/img/approvalMainImage.png" alt="Image" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <div style={{ width: '100%' }}>
          <div style={{ margin: '20px', padding: '20px', border: '2px solid #333', borderRadius: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: '20px', color: '#333', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
              Approval Form
            </h2>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>1. Approval Process:</h3>
              <p style={{ fontSize: '16px' }}>After the user creates a form, it will not directly go to the update phase. An admin with credentials will review and approve or delete forms.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>2. Admin Actions:</h3>
              <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
                <li>Approve all forms</li>
                <li>Delete all forms</li>
                <li>Manually delete each vessel form</li>
              </ul>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Remarks:</h3>
              <p style={{ fontSize: '16px' }}>Add additional notes or details about the approval process, providing context or insights.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Approval Status:</h3>
              <p style={{ fontSize: '16px' }}>Specify the current approval status of the forms, whether they are approved, pending, or rejected.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft:"20px"}}>
      <h1>Demonstration</h1>
      </div>
      
      <div style={{marginLeft:"30px"}}>
      <video src='/static/img/approvaldemons.mp4'  width="800" height="400" controls />
      </div>
      
      <div style={{ marginTop: "20px", textAlign: "center", fontSize: "16px", color: "#666" }}>
        Thank you for using the Track Injection Module. Your inputs are crucial for enhancing maritime tracking capabilities. Please review your entries carefully before submitting.
      </div>
    </div>
  );
}

export default ApprovalForm;
