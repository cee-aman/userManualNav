import React from 'react';
import HomepageHeader from '../components/Header';
import styles from './index.module.css';


const ClockSigninBar = () => {
  return (
    <div>
      <HomepageHeader />
      <div className= {styles.sectionClock}>
      <div className={styles.sectionClockHead}>
        <h1>Clock and Sign-in Bar</h1>
        <img src="../../static/img/gui/clock.png" alt="Image" style={{ width: '40%', height: 'auto' }} />
      </div>
        <ul className={styles.paddingleft}>
          <li className={styles.sectionClockli}>
            This provides the time information pertinent to the data.
          </li>
          
          <li className={styles.sectionClockli}>
            Click on User icon on the right side of the bar.
          </li>
          
          <li className={styles.sectionClockli}>
            It provides the following drop-down options (for user):
            <ul>
              <li>Change Password</li>
              <li>Log Out</li>
            </ul>
          </li>
          
          <li className={styles.sectionClockli}>
            It provides the following drop-down options (for admin):
            <ul>
              <li>User Details</li>
              <li>User Rights</li>
              <li>Change Password</li>
              <li>Log Out</li>
            </ul>
          </li>
          
          <li className={styles.sectionClockli}>
            Clicking on the <b>User Details</b> in the drop down provides information on:
            <ul>
              <li>User name: First Name; Last Name</li>
              <li>Email id</li>
              <li>Role</li>
              <li>Status</li>
            </ul>
          </li>
        </ul>
       <div className={styles.imagesWrapper}>
        <div className={styles.images}>
            <h4>User Details</h4>
            <img src="../../static/img/gui/userdetails.png" alt="Image" style={{ width: '80%', height: 'auto' }} />
          </div>
          <div className={styles.images}>
            <h4>User Rights</h4>
            <img src="../../static/img/gui/userrights.png" alt="Image" style={{ width: '80%', height: 'auto' }} />
          </div>
          <div className={styles.images}>
            <h4>Change Password</h4>
            <img src="../../static/img/gui/changepass.png" alt="Image" style={{ width: '25%', height: 'auto' }} />
          </div>
       </div>
      </div>
    </div>
  );
}

export default ClockSigninBar;
