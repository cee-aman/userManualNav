import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';


function HomepageFeatures() {

  const [selectedComponent, setSelectedComponent] = useState(null);
 
const handleFeatureClick = (componentName) => {
 console.log('handleFeatureClick called with:', componentName);
 setSelectedComponent(componentName);
 if (componentName === "Creation of Track") {
  window.location.href = "/CreationForm";
}
if (componentName === "Updation of Track") {
  window.location.href = "/UpdationForm";
}
if (componentName === "Approval of Track") {
  window.location.href = "/ApprovalForm";
}
if (componentName === "Database maintenance") {
  window.location.href = "/MaintainDatabase";
}
if (componentName === "GUI") {
  window.location.href = "/GUI";
}
if (componentName === "Sign up / Login") {

  window.location.href = "/SignupLogin";

} if (componentName === 'OTR') {

  window.location.href = "/Otr";
}
};

const FeatureList = [
  {
    title: 'Sign up / Login',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      User can create a tracks and dynamically visualize them.
      </>
    ),
  },
{
  title: 'Creation of Track',
  Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
  description: (
    <>
    User can create a tracks and dynamically visualize them.
    </>
  ),
},
{
  title: 'Updation of Track',
  Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
  description: (
    <>
      User can update the coordinates and other entries.
    </>
  ),
},
{
  title: 'Approval of Track',
  Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
  description: (
    <>
      Once the track is created , It will directly go for approval.
    </>
  ),
},  { title: 'Database maintenance',
Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
description: (
  <>
    User can do CRUD Operations for maintenance of tracks
  </>
),
},
{
  title: 'GUI',
  Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
  description: (
    <>
    User can create a tracks and dynamically visualize them.
    </>
  ),
},

{
  title: 'OTR',
  Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
  description: (
    <>
    Operational Turnaround
    </>
  ),
},
];

function Feature({Svg, title, description, onClick, selectedComponent}) {
return (
  <div className={clsx('col col--4')} onClick={onClick}>
    <div className="text--center">
      <Svg className={styles.featureSvg} alt={title} />
    </div>
    <div className="text--center padding-horiz--md">
      <h3>{title}</h3>
      <p>{description}</p>
      {selectedComponent === title && (
        <Link to="/CreationForm"></Link>
      )}
    </div>
  </div>
);
}

console.log(selectedComponent)

return (
  <section className={styles.features}>
    <div style={{cursor: "pointer"}} className="container">
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} onClick={() => handleFeatureClick(props.title)} />
        ))}
      </div>
      <div>
    
      </div>
    </div>
  </section>
);
}

export default HomepageFeatures


