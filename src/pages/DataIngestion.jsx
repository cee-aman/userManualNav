import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import clsx from 'clsx';
import HomeIcon from '@mui/icons-material/Home';

const DataIngestion = () => {
    const homeHandler = () => {
        window.location.href = "/";
      }
    
      function HomepageHeader() {
        const { siteConfig } = useDocusaurusContext();
        return (
          <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div style={{ position: 'relative', bottom: '130px', left: '5px' }} onClick={homeHandler}>
              <HomeIcon />
            </div>
            <div className="container">
              <h1 className="hero__title">Nav Drishti</h1>
              <h2 className="hero__title">Data Ingestion Module</h2>
              <p className="hero__subtitle">User Manual for data ingestion</p>
            </div>
          </header>
        );
      }

  return (
    <div>
      <HomepageHeader/>
      <div className={styles.dataIngestion}>
      <p style={{fontSize: "24px"}}><strong>There are 3 types of data that can be ingested through the CSVs:</strong></p>
      <ul>
        <li> Form Vessel data</li>
        <li> AIS Vessel data</li>
        <li> Custom Area data</li>
      </ul>
      <p>This shown below is the src folder structure of NavDrishti which can be reached by typing the below command into the terminal,</p>
      <p><strong>cd /home/deepdarshak/NavDrishti/src</strong></p>
      <img src="../../static/img/dataIngestion/ig1.png" alt="Image" style={{ width: '50%', height: 'auto' }} />

       <div>
        <h4 style={{fontSize: "24px", marginTop: "30px"}}>Form Vessel data</h4>
            <ul>
                <li> In the NavDrishti/src folder as shown above, there is a folder named ‘csv_form_data’.On opening the folder, you will see something like below,</li>
                <img src="../../static/img/dataIngestion/ig2.png" alt="Image" style={{ width: '50%', height: 'auto', margin: "20px 0" }} />
                <li>Now all the CSVs of form data to be added are to be added to this particular folder. On startup of the application the folder is checked for new csv files and adds them and once processed, gets moved to the ‘processed_form_data’ folder.</li>
                <li>It is highly advised that a different day’s entries are added as separate csv files to avoid any data discrepancies.</li>
                <li>The format of the csv file to be added is given below,</li>
                <p><strong>name,mmsi,imo,country,latitude,longitude,cog,sog,ship_type,timestamp_updated,class_type,remarks_text,source,hide_or_show
                "PFC Dewayne T Williams",,,"US",-7.26666666666667,72.4,,,"Warship","2024-01-01 11:47:00",,,"OSINT",TRUE
                "Lewis and Clark",,,"US",-7.26666666666667,72.45,,,"Warship","2024-01-01 11:25:00",,,"OSINT",TRUE</strong></p>
            </ul>
       </div>

       <div>
        <h4 style={{fontSize: "24px", marginTop: "30px"}}>AIS Vessel data</h4>
            <ul>
                <li>To upload the ais tracks data to the database, copy the ais tracks data csv file inside the folder named "ais_data".  We can navigate to this path by typing into the terminal the below command</li>
                <p><strong>cd home/deepdarshak/NavDrishti/src/db_gui/db_gui/navdrishti/ais_tracks_data/ais_data</strong></p>
                <li>Multiple csv files can be copied simultaneously inside the "ais_data" folder to upload to the database.</li>
                <li>It’s important to note that once the data is uploaded to database, the csv files copied inside the "ais_data" folder will be removed automatically once the data is added, so keep a copy of the csv files outside the folder as well so that you don’t lose the ais tracks’ csv files data</li>
                <li>The format of the csv file to be added is given below:</li>
                <p><strong> trackname	latitude	longitude	course	speed	height_depth	mmsi_no	imo	cargo_type	length	width	name	to_timestamp
                GLOBAL ANDES	-18.81373	39.39167	207.1	14.5	0	355026000	9633032		183		Panama	2023-11-25 00:37:00+05:30
                </strong></p>
            </ul>
       </div>

       <div>
        <h4 style={{fontSize: "24px", marginTop: "30px"}}>Custom Area data</h4>
            <ul>
                <li>In the NavDrishti/src folder as shown above, there is a folder named ‘csv_custarea_data’.On opening the folder, you will see something like below,</li>
                <img src="../../static/img/dataIngestion/ig3.png" alt="Image" style={{ width: '50%', height: 'auto', margin: "20px 0" }} />
                <li>Now all the CSVs of custom area data to be added are to be added to this particular folder. On startup of the application, the folder is checked for new csv files and adds them and once processed, gets moved to the ‘processed_cust_area_data’ folder.</li>
                <li>Each new custom area to be added needs to have its own dedicated csv file with the name of the csv file being the name of the custom area it entails. In each csv file, the first point’s latitude and longitude are also to be added as the last point with the same latitude and longitude so that it becomes a closed polygon.</li>
                <li>The format of the csv file to be added is given below,</li>
                <p><strong>id,lat,long 
                <br></br>a,30, 120
                <br></br>b,30, 30
                <br></br>c,-30, 30
                <br></br>d,-30, 120
                <br></br>e,30, 120
                </strong></p>
            </ul>
       </div>

      </div>
    </div>
  )
}

export default DataIngestion
