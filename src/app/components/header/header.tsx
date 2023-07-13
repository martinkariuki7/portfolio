import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteBranding}>
        <span>William M. Kariuki</span>
      </div>
      <nav className={styles.siteNav}>
        <ul>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/william-martin-kariuki-74ab9713/details/experience/"
              target="_Blank"
            >
              Job experience <RiArrowRightUpLine />
            </Link>
          </li>
          <li>
            <Link href="cv.pdf" target="_Blank">
              Download CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
