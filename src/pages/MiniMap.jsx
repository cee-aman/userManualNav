import React from 'react'
import styles from './index.module.css';
import HomepageHeader from '../components/Header'

const MiniMap = () => {
  return (
    <div>
    <HomepageHeader />
    <div className={styles.statusWrapper}>
      <h2 className={styles.paddingleft}>Mini Map</h2>
      <div className={styles.paddingleft}>
        <ul>
          <li> Small map to indicate portion of the map being displayed. </li>
        </ul>
        <img src="../../static/img/gui/minimap.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
      </div>
    </div>
  </div>
  )
}

export default MiniMap
