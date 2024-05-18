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
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/en/d/d7/Sarla_Birla_University_logo.png" alt="clg-logo" />
            <div className={styles.aboutItemText}>
              <h3>Diploma In Computer Science Engineering</h3>
              <p>
                Sarala Birla University, Ranchi. <br />
                (2020-2023)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.logo} src="https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/400786879_746798777465286_6137831823845973388_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PmRyvx0hU1wQ7kNvgEn9dxZ&_nc_ht=scontent.fccu20-1.fna&oh=00_AYB8tA9YkmE8mKJe7GwBVj9ZFetpfyKtElId4Vi0TzPZXg&oe=664EC9DF" alt="school-logo" />
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
