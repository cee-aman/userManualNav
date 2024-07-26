import React from 'react'
import HomepageHeader from '../components/Header'

function OtrGui() {
  return (
    <div>
    <HomepageHeader/>
    <div style={{marginTop:"10px"}}>
    <img src="../../static/img/otrguiimage.png" alt="Image" style={{ width: '100%', height: 'auto' }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px' }}>
  <div style={{ margin: '20px', padding: '20px', border: '2px solid #333', borderRadius: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', width: '1200px' }}>
    <h2 style={{ marginBottom: '20px', color: '#333', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
      OTR GUI - Operational Training Record Interface
    </h2>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Introduction to OTR</h3>
      <p style={{ fontSize: '16px' }}>
        After filling out the entry in the OTR Form, users can seamlessly visualize the OTR data on the map. This feature allows users to get a comprehensive view of all ongoing and completed OTRs, enhancing situational awareness and operational efficiency.
      </p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>OTR Button</h3>
      <p style={{ fontSize: '16px' }}>
        Located at the top right corner of the interface, the green OTR button is your gateway to viewing all active OTRs on the map. Simply click this button to instantly visualize the active operational training records.
      </p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>OTR Ships</h3>
      <p style={{ fontSize: '16px' }}>
        OTR ships are represented by blue symbols on the map. If multiple ships are located in the same area, a count number will be displayed instead. Clicking on this count will allow users to see a detailed list of all the ships at that location.
      </p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>OTR Ship Details</h3>
      <p style={{ fontSize: '16px' }}>
        Clicking on any OTR ship symbol will open a side panel displaying comprehensive details about the OTR, including Ship Name, Ship Country, Port Name, Port Country, Date From, Date To, and more. This ensures users have all the necessary information at their fingertips.
      </p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: '#666', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>OTR Details Navigation</h3>
      <p style={{ fontSize: '16px' }}>
        Users can directly navigate to the detailed OTR view by clicking on the side panel. For a step-by-step guide on how to use this feature, please refer to the demonstration video below.
      </p>
    </div>
  </div>
</div>


  <div style={{marginTop:"10px"}}>
  <img src="../../static/img/otrsidepanel.png" alt="Image" style={{ width: '100%', height: 'auto' }} />
  </div>




  <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px' , flexDirection:"column", alignItems: 'center'}}>
<h2>OTR Notifications</h2>
<div style={{display: 'flex', justifyContent:"space-evenly"}}>

<div style={{marginTop:"10px"}}>
<img src="../../static/img/notification.png" alt="Image" style={{ width: '90%', height: 'auto' }} />
</div>
<div style={{border: "2px solid lightgray", height: "500px", width: "500px", padding: "20px", boxSizing: "border-box"}}>
  <h2 style={{color: "black"}}>Notification Center</h2>
  <p>Welcome to the Notification Center! Here, you will receive important updates about OTRs (Operational Training Records) that are about to begin or have ended. Please review and acknowledge the notifications to stay updated.</p>
  <p>Example of notification is on left side.</p>

  <ul>
    <li>Upcoming OTR: [OTR Details]</li>
    <li>Ended OTR: [OTR Details]</li>
    <li>Click on the notifications to acknowledge them.</li>

  </ul>

</div>



</div>


</div>










  <div style={{marginLeft:"20px"}}>
<h1>Demonstration</h1>
</div>

<div style={{marginLeft:"30px"}}>
<video src='/static/img/otrguivideo.mp4'  width="800" height="400" controls />
</div>
<div style={{ marginTop: "20px", textAlign: "center", fontSize: "16px", color: "#666" }}>
  Thank you for using the Track Injection Module. Your inputs are crucial for enhancing maritime tracking capabilities. Please review your entries carefully before submitting.
</div>
    </div>
  )
}

export default OtrGui