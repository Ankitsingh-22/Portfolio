import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ankit Singh</h1>
        <p className={styles.description}>
          I'm a Front-end developer proficient in HTML, CSS, JavaScript, React. 
          Reach out if you'd like to learn more!
        </p>
        <a href="ankitmailme1@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="https://i.postimg.cc/htywHs0g/profile-web.jpg"
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
