import React from 'react'
import HomepageHeader from '../components/Header'
import styles from './index.module.css'

const RangeZoomControl = () => {
  return (
    <div>
      <HomepageHeader />
      <div className={styles.statusWrapper}>
        <h2 className={styles.paddingleft}>Range and Zoom control</h2>
        <div className={styles.paddingleft}>
        The Zoom Bar offers intuitive controls for adjusting the view:
          <ul>
            <li><strong>Plus (+) Button:</strong> Click to zoom in and get a closer view of the map.</li>
            <li><strong>Minus (-) Button:</strong> Click to zoom out and see a broader area.</li>
            <li><strong>Home Button:</strong> Click to instantly reset the view to the IOR (Indian Ocean Region), providing a convenient way to return to the default map focus.</li>
          </ul>
          <img src="../../static/img/gui/rangeZoom.png" alt="Image" style={{ width: 'auto', height: '300px' }} />
        </div>
      </div>
    </div>
  )
}

export default RangeZoomControl
