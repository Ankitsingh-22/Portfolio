import React from "react";
import { FaReact } from "react-icons/fa";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" alt="react-Logo" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Self thought front-end developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.logo} src="https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/347803911_251220180787081_3536313822079161094_n.png?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JVzSMmXe9_wAb49KjTE&_nc_ht=scontent.fccu20-1.fna&oh=00_AfCO--hglO2bUBDBK3yJKA5HdEuS5z6eQfsck24SVCW1uQ&oe=66303513" alt="clg-logo" />
            <div className={styles.aboutItemText}>
              <h3>Diploma In Computer Science Engineering</h3>
              <p>
                Sarala Birla University, Ranchi. <br />
                (2020-2023)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.logo} src="https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/400786879_746798777465286_6137831823845973388_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PkuRlSvAdJUQ7kNvgFvoBMg&_nc_ht=scontent.fccu20-1.fna&oh=00_AfCw7-HDLQEMTsMi-q_fKBtMcFyNq0_D49HN8PcM4b3-Ag&oe=662FCE9F" alt="school-logo" />
            <div className={styles.aboutItemText}>
              <h3>X (WBSE) | School	</h3>
              <p>
                Prom High School, Howrah. <br />
                (2020)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
