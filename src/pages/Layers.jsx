import React from 'react'
import styles from './index.module.css';
import HomepageHeader from '../components/Header'

const Layers = () => {
  return (
    <div>
      <div>
        <HomepageHeader />
        <h2 className={styles.drawingtoolbarH2}>Drawing Tool Bar</h2>
        <div className={styles.paddingleft}>
          <ul>
            <li>On the top right corner of the chart area above the drawing tool bar, there is a symbol for layers. The software has a provision of overlaying critical environmental information pertinent to the chart area.</li>
            <li>This overlay can be single or multiple depending on the parameters that the user can choose to view on the chart.  </li>
            <li>Click on the layers symbol.</li>
            <li>Drop-down Menu with following options appear: -  </li>
            <img src="../../static/img/gui/layers.png" alt="Image" style={{ width: "10%", height: 'auto' }} />
            <li>Tick the relevant option. On selection, the overlay would be applied to the chart area accordingly. </li>
            <li>The relevant colour code scale for the concerned overlay would be indicated in the left of the chart area for reference and analysis. </li> 
            <li>More than one layer also can be selected at one time.</li>
            <li>To remove the layer, simply uncheck the box on the menu indicated above.</li> 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Layers
