import React from "react";
import { SiLinkedin, SiGithub, SiCodepen, SiDribbble } from "react-icons/si";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerBranding}>
        <span>© WMK — UX designer.</span>
      </div>
      <nav className={styles.footerNav}>
        <ul>
          <li>
            <a
              href="https://no.linkedin.com/in/william-martin-kariuki-74ab9713"
              target="_Blank"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/martinkariuki7" target="_Blank">
              <SiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/martinkariuki7-the-looper"
              target="_Blank"
            >
              <SiCodepen />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/martinkariuki7" target="_Blank">
              <SiDribbble />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
