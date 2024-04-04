import React from 'react'
import styles from './index.module.css';
import HomepageHeader from '../components/Header'

const HorizontalInfoBar = () => {
  return (
    <div>
      <HomepageHeader />
      <div className={styles.statusWrapper}></div>
        <h2 className={styles.paddingleft}>Horizontal Information Bar</h2>
        <div className={styles.infobar}>
          <ol>
            <li className={styles.olli}><strong>Latitude and Longitude of Mouse Position:</strong> As the user moves the mouse over the map, the information bar updates to display the latitude and longitude of the cursor's position. This feature is beneficial for users who need precise geographical coordinates for their analysis or planning.</li>
            <li className={styles.olli}><strong>Current Zoom Level:</strong> Displays the current zoom level of the map, allowing users to quickly understand the scale at which they are viewing the maritime landscape.</li>
            <li className={styles.olli}><strong>Center of the Map:</strong> Displays the latitude and longitude of the map's center, providing users with a reference point for understanding the map's orientation and the relative position of ships within the visible area.</li>
            <li className={styles.olli}><strong>Bounds:</strong> Shows the geographical boundaries of the visible area on the map, helping users to identify the specific region they are currently focusing on.</li>
            <li className={styles.olli}><strong>Visible Ships Count:</strong> Indicates the number of ships currently visible on the map at the current zoom level and within the specified bounds.</li>
          </ol>
          <img src="../../static/img/gui/infobar.png" alt="Image" style={{ width: '100%', height: 'auto' }} />
        </div>
    </div>
  )
}

export default HorizontalInfoBar
