import React from 'react'
import styles from './index.module.css';
import HomepageHeader from '../components/Header';


const SelectionTaskBar = () => {
  return (
    <div>
      <HomepageHeader />
      <h1 className={styles.drawingtoolbarH2}>Selection Task Bar</h1>
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
        <div style={{margin: "60px 0"}}>
          <h2>Demonstration</h2>
          <video src="../../static/videos/home.mp4" width="800" height="400" controls />
        </div>
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
        <div style={{margin: "60px 0"}}>
          <h2>Demonstration</h2>
          <video src="../../static/videos/analysis.mp4" width="800" height="400" controls />
        </div>
      </div>

      <div className={styles.selectionBar}>
        <h4>Query Based Search</h4>
        Query-Based Search feature designed to find exactly what is needed with precision and ease. Here’s how it works:
        <ul>
          <li>
            <strong>What</strong>
            <ul>
              <li>
                <strong>Category Selection:</strong> Start by choosing a category from three options: Country, Ship Type, or Source.
              </li>
              <li>
                <strong>Specific Criteria:</strong> Once a category is selected, from the second field select options specific to your chosen category. For example:
                <ul>
                  <li>If you choose <strong>Country</strong>, you'll see a list of countries to select from.</li>
                  <li>If you choose <strong>Ship Type</strong>, you'll be presented with different types of ships.</li>
                  <li>If you choose <strong>Source</strong>, various sources of information or shipping data will be available.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Where</strong>
            <ul>
              <li>
                <strong>Manual Coordinates Entry:</strong> You can manually enter the coordinates (latitude and longitude) to specify the exact location where you want to search for ships.
              </li>
              <li>
                <strong>Custom Areas:</strong> Alternatively, select from the custom areas on the GUI.
              </li>
            </ul>
          </li>
          <li>
            <strong>When</strong>
            <ul>
              <li>
                <strong>Date Selection:</strong> Define the time period for your search. You can choose from several options:
                <ul>
                  <li><strong>Month:</strong> Select a specific month.</li>
                  <li><strong>Year:</strong> Choose a particular year.</li>
                  <li><strong>Single Date:</strong> Pick a single date.</li>
                  <li><strong>Date Range:</strong> Specify a range of dates to narrow down your search to a specific period.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <img src="../../static/img/gui/qbs.png" alt="Image" style={{ width: '80%', height: 'auto' }} />
        <div style={{margin: "60px 0"}}>
          <h2>Demonstration</h2>
          <video src="../../static/videos/qbs.mp4" width="800" height="400" controls />
        </div>
      </div>

      
      <div className={styles.selectionBar}>
        <h4>OTR</h4>
        OTR Analysis feature is designed for analyzing OTR ships. This feature allows to customize analysis based on various criteria. Here’s how it works:
        <ul>
          <li>
            <strong>Country</strong>
            <ul>
              <li>
                <strong>Multiple Country Selection:</strong> Users can select multiple countries from the country field to focus their analysis on specific regions.
              </li>
            </ul>
          </li>
          <li>
            <strong>Port</strong>
            <ul>
              <li>
                <strong>Port Options:</strong> In the port section, users are given two options:
                <ul>
                  <li><strong>Port Name:</strong> Select a specific port by its name.</li>
                  <li><strong>Port Country:</strong> Choose a country to analyze all ports within that country.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Duration</strong>
            <ul>
              <li>
                <strong>Date Range Selection:</strong> Users can define the analysis period by selecting a range of dates. This helps in narrowing down the data to a specific timeframe.
              </li>
            </ul>
          </li>
          <li>
            <strong>Map Visualization:</strong> The results generated from the analysis can also be plotted on a map for better visualization and insights.
          </li>
        </ul>

        <img src="../../static/img/gui/otrAnalysis.png" alt="Image" style={{ width: '80%', height: 'auto' }} />
        <div style={{margin: "60px 0"}}>
          <h2>Demonstration</h2>
          <video src="../../static/videos/otrAnalysis.mp4" width="800" height="400" controls />
        </div>
      </div>

      <div className={styles.selectionBar}>
        <h4>Search Tool</h4>
        <ul>
          <li>Allows to search for ships based on name, mmsi or imo.</li>
        </ul>
        <img src="../../static/img/gui/search.png" alt="Image" style={{ width: '80%', height: 'auto' }} />
        <div style={{margin: "60px 0"}}>
          <h2>Demonstration</h2>
          <video src="../../static/videos/search.mp4" width="800" height="400" controls />
        </div>
      </div>
    </div>
  )
}

export default SelectionTaskBar
