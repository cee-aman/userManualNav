import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import clsx from 'clsx';
import HomeIcon from '@mui/icons-material/Home';

const SatelliteDataIngestion = () => {
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
              <h2 className="hero__title">Satellite Data Ingestion Module</h2>
              <p className="hero__subtitle">User Manual for Satellite data ingestion</p>
            </div>
          </header>
        );
      }

  return (
    <div>
      <HomepageHeader/>
      <div style={{margin: "50px", fontSize: "18px"}}>
      <p>This shown below is the src folder structure of NavDrishti which can be reached by typing the below command into the terminal,</p>
        <p><strong>cd /home/deepdarshak/NavDrishti/src</strong></p>
        <img src="../../static/img/dataIngestion/ig1.png" alt="Image" style={{ width: '50%', height: 'auto' }} />
        <li>NavDrishti supports 2 types of formats for the raster images, i.e., .tif and .jp2 images. Both of these are to be added to the application differently.</li>
        <p style={{marginTop: "30px"}}><strong>For .tif files</strong></p>
        <li>These .tif images can be directly added to the ‘geo_images’ sub folder in the above shown src folder.</li> 
        <li>After adding, the images will be automatically added to the database on startup of application.</li>
        <p  style={{marginTop: "30px"}}><strong>For .jp2 files</strong></p>
        <li>These .jp2 images need to be first converted to .tif images before they can be added to the GUI.</li>
        <li>For this, in the above src folder, head to the ’jp2_automation’ folder. The folder structure is shown below,</li>
        <img src="../../static/img/dataIngestion/ig4.png" alt="Image" style={{ width: '50%', height: 'auto', marginTop: "20px" }} />
        <li>The .jp2 images can be directly added to this folder and once the images to be converted are added, right click on the folder and choose ‘Open in Terminal’</li>
        <li>Once the terminal opens up we type in ‘sh converter.sh’ as shown below,</li>
        <div style={{display: 'flex', flexDirection: "column"}}>
          <img src="../../static/img/dataIngestion/ig5.png" alt="Image" style={{ width: '50%', height: 'auto', marginTop: "20px"}} />
          <img src="../../static/img/dataIngestion/ig6.png" alt="Image" style={{ width: '50%', height: 'auto', margin: "20px 0" }} />
        </div>
        <li>Once the command is run, as seen in the above picture, each file gets converted to .tif images and the converted images are then automatically moved to the ‘geo_images’ folder as seen in the ‘For .tif’ section.</li>
        <li>The original .jp2 images are moved to a subfolder called ‘jp2_files’ in the same ‘jp2_automation’ folder.</li>
        
      </div>
    </div>
  )
}

export default SatelliteDataIngestion
