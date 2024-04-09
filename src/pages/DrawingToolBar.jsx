import React from 'react'
import styles from './index.module.css';
import HomepageHeader from '../components/Header'

const DrawingToolBar = () => {
  return (
    <div>
      <HomepageHeader />
      <h2 className={styles.drawingtoolbarH2}>Drawing Tool Bar</h2>
      <div className={styles.drawingtoolbar}> 
        <div>
          <p>The Drawing Tool Bar is located on the right side of the MapArea below the Layers option.</p>
          <ul>
            <li><strong>Rectangle:</strong>
              <ul>
                <li>Click on the icon to activate selection.</li>
                <li>A cancel tag appears in the tool bar for use when required.</li>
                <li>Place cursor at the desired location on the chart area and click. The top left corner of the rectangle would be indicated as a point.</li>
                <li>Move the cursor to the opposite corner (right bottom corner of the intended area) and click to form the Rectangle.</li>
              </ul>
            </li>
            <li><strong>Polygon:</strong>
              <ul>
                <li>Click on the icon to activate selection.</li>
                <li>A tag appears in the tool bar to Finish, Remove Last Vertex, or Cancel for use when required.</li>
                <li>Place cursor at the desired location on the chart area and click. A vertex is indicated on the point selected. Move the cursor to the next vertex as desired and click.</li>
                <li>Continue the process till you reach the last vertex desired of the polygon and double click. Use the Tag options mentioned above to cancel, remove last vertex or to finish the operation.</li>
              </ul>
            </li>
            <li><strong>Circle:</strong>
              <ul>
                <li>Click on the icon to activate selection.</li>
                <li>A tag appears in the tool bar to Cancel for use when required.</li>
                <li>Place cursor at the desired location on the map area and click. A vertex is indicated on the point selected which is the centre of the circle.</li>
                <li>Move the cursor to the next position to mark the radius as desired and click. A circular area is formed on the Map.</li>
                <li>Use the Tag options mentioned above to cancel the operation.</li>
              </ul>
            </li>
            <li><strong>Text Box:</strong>
              <ul>
                <li>Click on the icon to activate selection.</li>
                <li>A tag appears in the tool bar to Cancel for use when required.</li>
                <li>Place cursor at the desired location on the map area and double click. A Text Box appears.</li>
                <li>Fill in the details as desired to mark any vessel and then double click.</li>
                <li>Use the Tag options mentioned above to cancel the operation.</li>
              </ul>
            </li>
          </ul>
        </div>
        <img src="../../static/img/gui/drawingtoolbar.png" alt="Image" style={{ width: '5%', height: '50%' }} />
      </div>
      <img src="../../static/img/gui/drawings.png" alt="Image" className={styles.paddingleft} style={{ width: '70%', height: 'auto' }} />

    </div>
  )
}

export default DrawingToolBar
