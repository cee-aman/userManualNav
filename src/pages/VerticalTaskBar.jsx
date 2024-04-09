import React from 'react'
import styles from './index.module.css';
import HomepageHeader from '../components/Header'

const VerticalTaskBar = () => {
  return (
    <div>
    <HomepageHeader />
    <div className={styles.statusWrapper}>
      <h2 className={styles.paddingleft}>Vertical Task Bar</h2>
      <div className={styles.verticalbar}>
        The Vertical Task Bar has the following selections as icons with buttons:
        <div className={styles.icons}>
        <img src="../../static/img/gui/verticalbar.png" alt="Image" style={{ width: '3%', height: '3%' }} />
        <ul className={styles.verticalicons}>
          <li>Data Loader</li>
          <li>Ship Details</li>
          <li>Display Options</li>
          <li>Layers</li>
          <li>Route Manager</li>
        </ul>
        </div>
        <div className={styles.dataloader}>
          <h4>Data Loader</h4>
          <ul>
            <li>The Data Loader feature organizes ship data by year, month, and date, displaying the total count of ships for each period. </li>
            <li>Users can select a specific year, month, or date to view detailed ship data on the map. </li>
            <li>This feature enhances data exploration and analysis by providing a clear, hierarchical structure.</li>
          </ul>
          <img src="../../static/img/gui/dataloader.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
        </div>
        <div className={styles.dataloader}>
          <h4>Ship Details</h4>
          <ul>
            <li>Place the cursor on a vessel in the chart area and click to select.</li>
            <li>On selecting the ship, click on ‘Ship Details’ option. This will indicate the details about the ship.</li>
            <li>If rights are provided then the user can:</li>
            <ul>
              <li>Delete the particular vessel</li>
              <li>Edit the following details for the selected vessel:</li>
              <ul>
                <li>Latitude</li>
                <li>Longitude</li>
                <li>SOG</li>
                <li>COG</li>
              </ul>
            </ul>
          </ul>

         <div className={styles.imgwrapper}>
          <img src="../../static/img/gui/shipdetails.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
          <img src="../../static/img/gui/shipdetails2.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
         </div>
        </div>
        <div className={styles.dataloader}>
          <h4>Display Options</h4>
          Click on Display Options icon. The drop-down menu is as shown: - 
          <ul>
            <li>Color:</li>
            <ul>
              <li>The colour for the vessels displayed on the map are dependent on the selection made in the display options.</li>
              <li>The default setting is with Ship Type as the selection in the drop-down menu under colour indicated in figure below.</li>
              <li>The button ‘Show Legend’ provides a legend for the type of ship and the colour that is associated with the same.</li>
            </ul>
          </ul>
          <img src="../../static/img/gui/colorlegend.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
          <ul>
            <li>Shape:</li>
            <ul>
              <li>The shape for the vessels displayed on the map are dependent on the selection made in the display options.</li>
              <li>The default setting is with Ship Type as the selection in the drop-down menu under shape indicated in figure below.</li>
              <li>The button ‘Show Legend’ provides a legend for the type of ship and the shape that is associated with the same.</li>
            </ul>
          </ul>
          <img src="../../static/img/gui/shapelegend.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
        </div>
        <div className={styles.dataloader}>
          <h4>Icon Text Info</h4>
          <ul>
            <li>The Customizable Ship Details feature of our application allows users to tailor the information displayed next to each ship on the map, ensuring that only the most relevant details are shown when the number of visible ships is below a certain threshold. </li>
            <li>This feature is particularly useful in scenarios where the map is not crowded with ships, enabling users to focus on the most important details without being overwhelmed by unnecessary information.</li>
          </ul>
          <img src="../../static/img/gui/icontextinfo.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
        </div>
        <div className={styles.dataloader}>
          <h4>Tooltip Info</h4>
          <ul>
            <li>The Customizable Tooltip feature in our application allows users to tailor the information displayed in tooltips when hovering over ships on the map. </li>
            <li>By simply checking or unchecking boxes, users can decide which details they wish to see, such as ship name, mmsi, SOG, COG, etc. </li>
          </ul>
          <img src="../../static/img/gui/tooltipinfo.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
        </div>
        <div className={styles.dataloader}>
          <h4>Speed vector, stationary vector, routes and coordinates</h4>
          <ul>
            <li>Speed Vector Mode: By activating this mode, a vector is attached to each ship, indicating its direction and speed. This visual representation helps users quickly identify which ships are in motion.</li>
            <li>Stationary Vector Mode: Switching to this mode attaches a circle to each ship, signifying that the ship is stationary. This feature is useful for users who need to distinguish between moving and non-moving vessels at a glance.</li>
            <li>Additionally, the application includes a feature to show or hide all routes created by the user. This functionality allows users to easily manage and view their custom routes.</li>
            <li>Furthermore, the application allows users to customize the display of coordinates on the GUI. Users can switch between two formats: "dd.mm.ss" and "dd.dd.dd", providing flexibility in how geographical coordinates are presented.</li>
          </ul>
          <img src="../../static/img/gui/others.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
        </div>
        <div className={styles.dataloader}>
          <h4>Route Manager</h4>
          <ul>
            <li>The Route Manager feature of our application is a tool designed to facilitate the creation, customization, and management of routes on the map. </li>
            <li>This feature offers two primary functionalities: Create Route and Edit Route, each catering to different user needs and preferences.</li>
          </ul>
          <img src="../../static/img/gui/routemanager.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
          <h3>Create Route</h3>
          <ul>
            <li>This option enables users to define new routes on the map. </li>
            <li>Users can select the source and destination points from a dropdown menu, providing flexibility in choosing starting and ending points for their routes. </li>
            <li>Additionally, the feature allows users to add waypoints between the source and destination. </li>
            <li>These waypoints can be either manually entered into an input box or selected directly on the map, offering a convenient way to plan complex routes.</li>
            <li>Users also have the ability to customize the appearance of their routes by adjusting the color, opacity, and line type (either solid or dashed).</li>
          </ul>
          <h3>Edit Route</h3>
          <ul>
            <li>This functionality presents a comprehensive overview of all routes created by the user. </li>
            <li>It allows for the selection of any previously created route, enabling users to edit its waypoints, color, line type, and other attributes. </li>
            <li>This feature is particularly useful for users who need to update their routes based on changing conditions or preferences.</li>
            <li>Additionally, depending on the user's rights, they can also delete routes that are no longer needed. </li>
            <li>Moreover, users have the option to toggle the visibility of their routes on the map. This means that users can choose to display or hide any route they have created.</li>
          </ul>
          <div className={styles.imgwrapper}>
          <img src="../../static/img/gui/routeeditor.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
          <img src="../../static/img/gui/routeeditor2.png" alt="Image" style={{ width: '20%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default VerticalTaskBar
