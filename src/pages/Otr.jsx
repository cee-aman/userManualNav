import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import clsx from 'clsx';
import HomeIcon from '@mui/icons-material/Home';
import HomepageHeader from '../components/Header';

const Otr = () => {
    let x = 5;
console.log(x++);
console.log(++x);
console.log(x);
  

  return (
    <div>
      <HomepageHeader/>
      <div style={{marginTop:"10px"}}>
      <img src="../../static/img/OTRimage.png" alt="Image" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px' }}>
  <div style={{ margin: '20px', padding: '20px', border: '2px solid #333', borderRadius: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', width: '1200px' }}>
    <h2 style={{ marginBottom: '20px', color: '#333', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
      OTR Form - Operational Turnaround.
    </h2>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>1. Select a Platform Type:</h3>
      <p style={{ fontSize: '16px' }}>
        In this section, you are required to select the type of platform for the Operational Training Record. The dropdown menu provides a list of predefined platform types such as Warship, Merchant Vessel, Fishing Boat, and more. If the required platform type is not available in the dropdown, you can create a new platform type by entering the relevant details.
      </p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>2. Identity Particulars</h3>
      <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
        <li>Select the country of origin for the platform from the dropdown menu. This is a mandatory field.</li>
        <li>Based on the selected country, a filtered list of ship names will be displayed. Choose the ship name for which you want to enter the OTR details.</li>
        <li>Next, select the port country from the dropdown. This will filter the available ports in that country.</li>
        <li>Choose the specific port from the filtered list of ports. This ensures that the entry is accurate and specific to the operational area.</li>
      </ul>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>3. Date From</h3>
      <p style={{ fontSize: '16px' }}>
        This section captures the start date and time for the OTR. It's essential to provide accurate details to ensure precise tracking and record-keeping.
      </p>
      <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
        <li>Select the starting date from the date picker. The calendar allows you to pick the exact date the OTR begins.</li>
        <li>Select the start time from the time picker. Ensure that the time is correctly set to reflect the actual start time of the operation.</li>
        <li>Choose the appropriate timezone from the dropdown options. You can select from commonly used timezones like GMT or IST, or any other relevant timezone.</li>
      </ul>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>4. Date To</h3>
      <p style={{ fontSize: '16px' }}>
        This section captures the end date and time for the OTR. It's crucial to provide accurate details to ensure precise tracking and record-keeping.
      </p>
      <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
        <li>Select the ending date from the date picker. The calendar allows you to pick the exact date the OTR ends.</li>
        <li>Select the end time from the time picker. Ensure that the time is correctly set to reflect the actual end time of the operation.</li>
        <li>Choose the appropriate timezone from the dropdown options. You can select from commonly used timezones like GMT or IST, or any other relevant timezone.</li>
      </ul>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>5. Number of Days</h3>
      <p style={{ fontSize: '16px' }}>
        The number of days field will be automatically populated based on your selections in the 'Date From' and 'Date To' fields. This calculated value reflects the total duration of the OTR in days.
      </p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>6. Source of Information</h3>
      <p style={{ fontSize: '16px' }}>
        In this section, specify the origin of the data. The dropdown options include sources like Satellite, Radar, and Manual Entry. If the source is not listed, you can create a new entry for the source of information.
      </p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>7. Confirmatory Source of Information</h3>
      <p style={{ fontSize: '16px' }}>
        Optionally, you can specify a confirmatory source of information. This is useful for cross-verifying the data accuracy and reliability. Enter the details of the secondary source if available.
      </p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Remarks</h3>
      <p style={{ fontSize: '16px' }}>
        Use this section to add any additional notes or details about the track. This could include contextual information, operational insights, or any other relevant details that may be useful for future reference.
      </p>
    </div>
  </div>
</div>

      
      <div>
      
      
      
      </div>
      
  <div style={{marginLeft:"20px"}}>
  <h1>Demonstration</h1>
  </div>
  
  <div style={{marginLeft:"30px"}}>
  <video src='/static/img/OTRFORMVideo.mp4'  width="800" height="400" controls />
  </div>
  <div style={{ marginTop: "20px", textAlign: "center", fontSize: "16px", color: "#666" }}>
    Thank you for using the Track Injection Module. Your inputs are crucial for enhancing maritime tracking capabilities. Please review your entries carefully before submitting.
  </div>
    </div>
  )
}

export default Otr
