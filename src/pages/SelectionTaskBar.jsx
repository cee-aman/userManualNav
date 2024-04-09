import React from 'react'
import styles from './index.module.css';
import HomepageHeader from '../components/Header';


const SelectionTaskBar = () => {
  return (
    <div>
      <HomepageHeader />
      <h2 className={styles.paddingleft}>Selection Task Bar</h2>
      <div className={styles.selectionWrapper}>
        Following are the options available in Selection Task Bar
        <ul>
          <li>Home</li>
          <li>Analysis</li>
          <li>Search Tool</li>
        </ul>
      </div>
      <div className={styles.selectionBar}>
        <h4>Home</h4>
        <ul>
          <li>Takes back to the home page from where the user can move to GUI or Data Feeder.</li>
        </ul>
        <img src="../../static/img/gui/homepage.png" alt="Image" style={{ width: '70%', height: 'auto' }} />
      </div>

      <div className={styles.selectionBar}>
        <h4>Analysis</h4>
        The Analysis screen provides for selecting: -  
        <ul>
          <li>Type of Chart – Bar Chart or Pie Chart</li>
          <li>Selection of Chart</li>
          <li>Exporting chart as - CSV, SVG, PNG</li>
        </ul>
        <img src="../../static/img/gui/barchart.png" alt="Image" style={{ width: '40%', height: 'auto' }} />
        <img src="../../static/img/gui/piechart.png" alt="Image" style={{ width: '40%', height: 'auto' }} />
        <img src="../../static/img/gui/linechart.png" alt="Image" style={{ width: '40%', height: 'auto' }} />
      </div>

      <div className={styles.selectionBar}>
        <h4>Search Tool</h4>
        <ul>
          <li>Allows to search for ships based on name, mmsi or imo.</li>
        </ul>
        <img src="../../static/img/gui/search.png" alt="Image" style={{ width: '80%', height: 'auto' }} />
      </div>
    </div>
  )
}

export default SelectionTaskBar
