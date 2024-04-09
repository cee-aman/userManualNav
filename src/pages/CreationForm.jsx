import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';



function CreationForm() {

  const homeHandler = () => {
    window.location.href = "/";

  }
  function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div style={{position:'relative', bottom:'130px', left:"5px"}} onClick={homeHandler} >
      <HomeIcon  /> 

      </div>

        <div className="container">

        <h1 className="hero__title">Nav Drishti</h1>
          <h2 className="hero__title">Track Injection Module</h2>
          <p className="hero__subtitle">User Manual for Creation Form</p>
         
        </div>
      </header>
    );
  }

  return (
    <div>
    <HomepageHeader/>
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f0f0f0', padding: '20px' }}>
    <div >
    <div style={{marginTop:"10px"}}>
<img src="../../static/img/creationformIMage.png" alt="Image" style={{ width: '100%', height: 'auto' }} />
</div>
        <div style={{ margin: '20px', padding: '20px', border: '2px solid #333', borderRadius: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: '20px', color: '#333', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                Welcome to the Track Creation Phase
            </h2>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Platform Type:</h3>
                <p style={{ fontSize: '16px' }}>Specify the type of platform associated with the track, such as warship, merchant, fishing, special vessel, hydrography, unknown, or research.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Identity Particulars:</h3>
                <p style={{ fontSize: '16px' }}>Provide unique identifiers or names related to the platform, helping distinguish it from others.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Positional Details:</h3>
                <p style={{ fontSize: '16px' }}>Enter latitude and longitude coordinates, indicating the precise location of the platform at specific times. You can manually provide lat-long in degree-minute-second format, use bearing and range to get lat-long, or click on the map to select the location.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>COG (Course Over Ground):</h3>
                <p style={{ fontSize: '16px' }}>Specify the direction in which the platform is moving, measured in degrees clockwise from true north.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>SOG (Speed Over Ground):</h3>
                <p style={{ fontSize: '16px' }}>Enter the speed at which the platform is traveling, usually in knots.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Timestamp:</h3>
                <p style={{ fontSize: '16px' }}>Provide the date and time when the positional details were recorded, crucial for tracking the platform's movement over time.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Source of Information:</h3>
                <p style={{ fontSize: '16px' }}>Specify the origin of the data, whether it's from a satellite, radar, or manual entry.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Remarks:</h3>
                <p style={{ fontSize: '16px' }}>Add additional notes or details about the track, providing context or insights.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Files:</h3>
                <p style={{ fontSize: '16px' }}>Upload files such as screenshots, PDFs, or any other relevant documents.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Approval Process:</h3>
                <p style={{ fontSize: '16px' }}>Once the form is submitted in the creation phase, it will be sent for approval. Only those who are given rights can approve the submission.</p>
            </div>
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '20px', fontSize: '18px', color: '#555' }}>
                Each detail entered by the user adds a layer of richness and context to the track, shaping its narrative and significance.
            </p>
        </div>
    </div>
   
</div>
<div style={{marginLeft:"20px"}}>
<h1>Demonstration</h1>
</div>

<div style={{marginLeft:"30px"}}>
<video src='/static/img/create.mp4'  width="800" height="400" controls />
</div>
<div style={{ marginTop: "20px", textAlign: "center", fontSize: "16px", color: "#666" }}>
  Thank you for using the Track Injection Module. Your inputs are crucial for enhancing maritime tracking capabilities. Please review your entries carefully before submitting.
</div>
    </div>
  )
}

export default CreationForm