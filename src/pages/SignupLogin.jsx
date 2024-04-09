import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import clsx from 'clsx';
import HomeIcon from '@mui/icons-material/Home';

const SignupLogin = () => {
    const homeHandler = () => {
        window.location.href = "/";
      }
    
      function HomepageHeader() {
        const { siteConfig } = useDocusaurusContext();
        return (
          <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div style={{ position: 'relative', bottom: '130px', left: '5px', cursor: "pointer" }} onClick={homeHandler}>
              <HomeIcon />
            </div>
            <div className="container">
              <h1 className="hero__title">Nav Drishti</h1>
              <h2 className="hero__title">Sign up / Login</h2>
              <p className="hero__subtitle">User Manual for Sign up / Login</p>
            </div>
          </header>
        );
      }

  return (
    <div>
      <HomepageHeader/>
      <div className={styles.signupLogin}>
      <img src="../../static/img/gui/loginpage.png" alt="Image" style={{ width: '30%', height: '30%' }} />
      <ul className={styles.ulDecor}>
        <li className={styles.liDecorSignup}> Enter the username and password details and click on <b>Sign in</b> button.  </li>
        <li className={styles.liDecorSignup}>The web page opens up with the default setting of the application.  </li>
        <li className={styles.liDecorSignup}>There is a provision for resetting the password using <b>Forgot Password</b> option. </li>
        <li className={styles.liDecorSignup}> After successful login, the user will be directed to the <b>Home Page</b>. From here the user can choose the option as per their requirement.</li>
      </ul>
      <img src="../../static/img/gui/homepage.png" alt="Image" style={{ width: '75%', height: 'auto', marginTop: "30px" }} />
      </div>
    </div>
  )
}

export default SignupLogin
