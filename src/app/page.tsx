import Image from "next/image";
import Header from "./components/header/header";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>UX designer & Javascript Develper</h1>
            <p>I am a UX designer and Javascript developer.</p>
            <Link href="/contact"> View selected work</Link>
          </div>
        </section>
        <section className={styles.featuredWork}>
          <h2>Featured work</h2>
          <div className={styles.workCategory}>
            <div>
              <h3>React</h3>
              <ul>
                <li>React 1</li>
                <li>React 2</li>
                <li>React 3</li>
                <li>React 4</li>
              </ul>
            </div>
          </div>
          <div className={styles.workCategory}>
            <div>
              <h3>UX design</h3>
              <ul>
                <li>UX 1</li>
                <li>UX 2</li>
                <li>UX 3</li>
                <li>UX 4</li>
              </ul>
            </div>
          </div>
          <div className={styles.workCategory}>
            <div>
              <h3>Vanilla JS</h3>
              <ul>
                <li>JS 1</li>
                <li>JS 2</li>
                <li>JS 3</li>
                <li>JS 4</li>
              </ul>
            </div>
          </div>
          <div className={styles.workCategory}>
            <div>
              <h3>WordPress</h3>
              <ul>
                <li>WP 1</li>
                <li>WP 2</li>
                <li>WP 3</li>
                <li>WP 4</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
