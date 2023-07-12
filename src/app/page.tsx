import React from "react";
import Link from "next/link";
import { RiArrowRightDownLine } from "react-icons/ri";
import Header from "./components/header/header";
import styles from "./page.module.css";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <h1>UX designer & Javascript Develper</h1>
          <div className={styles.heroContent}>
            <p>
              I am an experienced developer with a strong foundation in UX
              design. Throughout my career, I have successfully built numerous
              WordPress websites and smaller web applications. I recently
              decided to specialize in Javascript development focusing on React
              and Next.js.
            </p>

            <Link className={styles.buttonDown} href="#contact">
              See my work
              <RiArrowRightDownLine className={styles.ml3} />
            </Link>
          </div>
        </section>
        <section id="contact" className={styles.featuredWork}>
          <h2>Featured work</h2>
          <div className={styles.workCategory}>
            <h3>React</h3>
            <ul>
              <li>
                <p>A replica of the English premier league application</p>
                <div className={styles.externalLinks}>
                  <a href="https://mk-epl.netlify.app/">Live site</a> |{" "}
                  <a href="https://mk-epl.netlify.app/">Repo</a>
                </div>
              </li>
              <li>React 2</li>
              <li>React 3</li>
              <li>React 4</li>
            </ul>
          </div>
          <div className={styles.workCategory}>
            <h3>UX design</h3>
            <ul>
              <li>UX 1</li>
              <li>UX 2</li>
              <li>UX 3</li>
              <li>UX 4</li>
            </ul>
          </div>
          <div className={styles.workCategory}>
            <h3>Vanilla JS</h3>
            <ul>
              <li>JS 1</li>
              <li>JS 2</li>
              <li>JS 3</li>
              <li>JS 4</li>
            </ul>
          </div>
          <div className={styles.workCategory}>
            <h3>WordPress</h3>
            <ul>
              <li>WP 1</li>
              <li>WP 2</li>
              <li>WP 3</li>
              <li>WP 4</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
