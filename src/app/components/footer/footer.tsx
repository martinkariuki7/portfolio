import React from "react";
import { SiLinkedin, SiGithub, SiCodepen, SiDribbble } from "react-icons/si";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerBranding}>
        <span>© WMK - UX designer.</span>
      </div>
      <nav className={styles.footerNav}>
        <ul>
          <li>
            <a
              href="https://no.linkedin.com/in/william-martin-kariuki-74ab9713"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Martin Kariuki's LinkedIn profile"
            >
              <SiLinkedin aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/martinkariuki7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Martin Kariuki's GitHub profile"
            >
              <SiGithub aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/martinkariuki7-the-looper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Martin Kariuki's CodePen profile"
            >
              <SiCodepen aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/martinkariuki7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Martin Kariuki's Dribbble profile"
            >
              <SiDribbble aria-hidden="true" focusable="false" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
