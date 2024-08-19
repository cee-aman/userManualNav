import React from 'react';
import HomepageHeader from '../components/Header';

function ETA() {
  return (
    <div>
      <HomepageHeader/>
      
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#e6f7ff', padding: '30px' }}>
        <div style={{ 
          margin: '20px', 
          padding: '30px', 
          border: '2px solid #007acc', 
          borderRadius: '15px', 
          backgroundColor: 'white', 
          fontFamily: 'Arial, sans-serif', 
          width: '1000px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ 
            marginBottom: '25px', 
            color: 'gray', 
            textAlign: 'center', 
            fontSize: '28px', 
            fontWeight: 'bold', 
            textTransform: 'uppercase'
          }}>
            ETA Navigator
          </h2>
          <p style={{ 
            marginBottom: '20px', 
            color: 'gray', 
            fontSize: '18px', 
            lineHeight: '1.6', 
            textAlign: 'justify'
          }}>
            The <strong>ETA Navigator</strong> is a powerful tool designed to calculate the estimated time of arrival (ETA) for vessels. It dynamically updates the ETA as the vessel's Speed Over Ground (SOG) changes, providing real-time data to ensure accurate tracking. As users interact with the map, the ETA Navigator adjusts accordingly, offering a seamless and intuitive experience.
          </p>
          <p style={{ 
            marginBottom: '20px', 
            color: '#333', 
            fontSize: '18px', 
            lineHeight: '1.6', 
            textAlign: 'justify'
          }}>
            In situations where SOG data is unavailable, the system smartly adapts by displaying a clear indicator. This ensures that the user is always informed, maintaining the clarity and reliability of the ETA Navigator's output. The design prioritizes user-friendliness, offering a sleek interface with critical information at a glance.
          </p>
          <p style={{ 
            marginBottom: '20px', 
            color: '#333', 
            fontSize: '18px', 
            lineHeight: '1.6', 
            textAlign: 'justify'
          }}>
            Key Features:
          </p>
          <ul style={{ 
            color: '#333', 
            fontSize: '18px', 
            lineHeight: '1.6', 
            paddingLeft: '20px' 
          }}>
            <li style={{ marginBottom: '10px' }}>
              Real-time dynamic updates based on vessel's Speed Over Ground (SOG).
            </li>
            <li style={{ marginBottom: '10px' }}>
              Adaptive indicator when SOG data is unavailable.
            </li>
            <li style={{ marginBottom: '10px' }}>
              User-friendly interface with intuitive design.
            </li>
          </ul>
          <p style={{ 
            color: '#333', 
            fontSize: '18px', 
            lineHeight: '1.6', 
            textAlign: 'justify'
          }}>
            The ETA Navigator is an essential component for those who need precise and reliable ETA calculations. Whether you're monitoring a fleet of vessels or tracking a single ship, this tool provides the information you need in a clear and concise manner.
          </p>
        </div>
        
      </div>
      
  <div style={{marginLeft:"20px"}}>
  <h1>Demonstration</h1>
  </div>
  
  <div style={{marginLeft:"30px"}}>
  <video src='/static/img/etanav.mp4'  width="800" height="400" controls />
  </div>


  <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#e6f7ff', padding: '30px' }}>
  <div style={{ 
    margin: '20px', 
    padding: '30px', 
    border: '2px solid #007acc', 
    borderRadius: '15px', 
    backgroundColor: 'white', 
    fontFamily: 'Arial, sans-serif', 
    width: '1000px', 
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  }}>
    <h2 style={{ 
      marginBottom: '25px', 
      color: 'gray', 
      textAlign: 'center', 
      fontSize: '28px', 
      fontWeight: 'bold', 
      textTransform: 'uppercase'
    }}>
      Real-Time Bearing Range
    </h2>
    <p style={{ 
      marginBottom: '20px', 
      color: '#333', 
      fontSize: '18px', 
      lineHeight: '1.6', 
      textAlign: 'justify'
    }}>
      The <strong>Real-Time Bearing Range</strong> feature allows users to place a marker on the map and receive real-time updates on bearing and range as the marker is moved. This dynamic system calculates and displays critical navigation data on-the-fly, ensuring that your compass in the data-driven sea is always accurate and up-to-date.
    </p>
    <p style={{ 
      marginBottom: '20px', 
      color: '#333', 
      fontSize: '18px', 
      lineHeight: '1.6', 
      textAlign: 'justify'
    }}>
      Whether you're adjusting a course or monitoring a specific point of interest, the Real-Time Bearing Range feature provides instant feedback, helping you navigate with confidence. The interface is designed for ease of use, allowing you to make informed decisions quickly and accurately.
    </p>
    <ul style={{ 
      color: '#333', 
      fontSize: '18px', 
      lineHeight: '1.6', 
      paddingLeft: '20px' 
    }}>
      <li style={{ marginBottom: '10px' }}>
        Real-time updates on bearing and range as the marker moves.
      </li>
      <li style={{ marginBottom: '10px' }}>
        On-the-fly calculation of critical navigation data.
      </li>
      <li style={{ marginBottom: '10px' }}>
        User-friendly interface with quick access to essential information.
      </li>
    </ul>
    <p style={{ 
      color: '#333', 
      fontSize: '18px', 
      lineHeight: '1.6', 
      textAlign: 'justify'
    }}>
      The Real-Time Bearing Range feature is a must-have for anyone needing precise and immediate navigation information. It's your reliable tool for staying on course and making data-driven decisions in real-time.
    </p>
  </div>
</div>

<div style={{marginLeft:"20px"}}>
<h1>Demonstration</h1>
</div>

<div style={{marginLeft:"30px"}}>
<video src='/static/img/bearingrange.mp4'  width="800" height="400" controls />
</div>

  
  <div style={{ marginTop: "20px", textAlign: "center", fontSize: "16px", color: "#666" }}>
    Thank you for using the Track Injection Module. Your inputs are crucial for enhancing maritime tracking capabilities. Please review your entries carefully before submitting.
  </div>
    </div>
  );
}

export default ETA;
