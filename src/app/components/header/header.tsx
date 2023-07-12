import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteBranding}>
        <span>William M. Kariuki</span>
      </div>
      <nav className={styles.siteNav}>
        <ul>
          <li>Work</li>
          <li>About me</li>
          <li>Download CV</li>
        </ul>
      </nav>
    </header>
  );
}
