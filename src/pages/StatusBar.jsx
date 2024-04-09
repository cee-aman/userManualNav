import React from 'react'
import styles from './index.module.css';
import HomepageHeader from '../components/Header'

const StatusBar = () => {
  return (
    <div>
      <HomepageHeader />
      <div className={styles.statusWrapper}>
        <h2 className={styles.paddingleft}>Status Bar</h2>
        <div className={styles.paddingleft}>
          <ul>
            <li>Displays the count of ships categorized into various groups, such as "Fishing Vessels", "Merchant", and "Warship", etc.</li>
            <li>This visual summary allows users to quickly grasp the distribution of ships across different categories at a glance.</li>
            <li>Upon clicking on a specific category in the status bar, the application responds by either showing or hiding the corresponding ships on the map.</li>
          </ul>
          <img src="../../static/img/gui/statusbar.png" alt="Image" style={{ width: '90%', height: 'auto' }} />
        </div>
      </div>
    </div>
  )
}

export default StatusBar
