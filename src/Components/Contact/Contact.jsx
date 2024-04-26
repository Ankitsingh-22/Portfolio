import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <>
      <footer id="contact" className={styles.container}>
        <div className={styles.sec}>
          <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <span className={styles.icons}>
                <MdMarkEmailUnread />
              </span>
              <a href="mailto:ankitmailme1@gmail.com">ankitmailme1@gmail.com</a>
            </li>
            <li className={styles.link}>
              <span className={styles.icons}>
                <FaLinkedin />
              </span>
              <a href="https://www.linkedin.com/in/ankit-singh22/">linkedin.com/ankit-singh22</a>
            </li>
            <li className={styles.link}>
              <span className={styles.icons}>
                <FaGithub />
              </span>
              <a href="https://github.com/Ankitsingh-22">github.com/Ankitsingh-22</a>
            </li>
          </ul>

        </div>
        <div className={styles.tmark}>
          <p className={styles.text}>@2024 Ankit-Singh. All Rights Reserved</p>
          <p className={styles.text}>PRIVACY POLICY , TERMS & CONDITIONS</p>
        </div>
      </footer>
    </>
  );
};
