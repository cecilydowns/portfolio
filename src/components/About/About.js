import React, { Component } from 'react';
import styles from './About.scss';
import profile from './cecily.jpg';
import resume from './resume.png';

class About extends Component {

  render() {
    return (
      <div className="content-container">
        <div className={styles.flexContainer}>

          <div className={styles.right}>
              <h2 className={styles.heading}>I’m a full stack web developer with a passion for creating beautiful and user-friendly web applications.</h2>
              
              <p className={styles.subhead}>Merging a decade of experience building web projects with an education in storytelling and communications, I excel at adapting to new technologies and finding creative solutions that help companies engage their users throughout the digital journey.</p>

          </div>

          <div className={styles.left}>
              <img src={profile} alt="Cecily" className={styles.profile} />
          </div>

        </div>

        <div className={styles.flexContainerBottom}>
            <div className={styles.skillsContainer}>
              <h3>Technical Skills</h3>
              <ul className={styles.skills}>
                <li><span className={styles.dot}></span>HTML5</li>
                <li><span className={styles.dot}></span>CSS3</li>
                <li><span className={styles.dot}></span>SASS</li>
                <li><span className={styles.dot}></span>JavaScript/ES6</li>
                <li><span className={styles.dot}></span>React</li>
                <li><span className={styles.dot}></span>Redux</li>
                <li><span className={styles.dot}></span>AJAX</li>
                <li><span className={styles.dot}></span>APIs</li>
                <li><span className={styles.dot}></span>Ruby on Rails</li>
              </ul>
            </div>

             <div className={styles.resumeContainer}>
              <h3>Resume</h3>
              <a href="http://static.cecilydowns.com/resume.pdf" target="_blank" rel="noopener noreferrer nofollow"><img src={resume} alt="Resume" className={styles.resume} /></a>
            </div>

          </div>
      </div>
    );
  }
}

export default About;
