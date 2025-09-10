import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteBranding}>
        <span>WMK — UX designer.</span>
      </div>
      <nav className={styles.siteNav}>
        <ul>
          <li>
            <Link href="cv.pdf" target="_Blank">
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
