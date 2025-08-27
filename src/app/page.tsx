import React from "react";
import Link from "next/link";
import { RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri";
import Header from "./components/header/header";
import styles from "./page.module.css";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              William Martin Kariuki,<span className="brushy-style"> the</span>{" "}
              UX designer.
            </h1>
            <p>
              Jeg har jobbet i bransjen siden 2007, når jeg sitte alene og
              reflektere tilbake, så er jeg er mest stolt av min evne til å
              jobbe med andre folk, at de får tillit til meg, og gir meg mer
              ansvar. Det er det som betyr mest for meg.
            </p>
            <Link className={styles.buttonDown} href="#work">
              Se arbeidet mitt
              <RiArrowRightDownLine className={styles.ml3} />
            </Link>
          </div>
          <figure>
            <img src="martin.jpg" alt="William Martin Kariuki" />
          </figure>
        </section>
        <section id="work" className={styles.featuredWork}>
          <h2>Featured work</h2>
          <div className={styles.workCategory}>
            <h3>
              Solo <span>side projects</span>
            </h3>
            <ul>
              <li>
                <p>A replica of the English premier league application.</p>
                <div className={styles.externalLinks}>
                  <a href="https://mk-epl.netlify.app/" target="_Blank">
                    Live site <RiArrowRightUpLine />
                  </a>
                  <a
                    href="https://github.com/martinkariuki7/epl"
                    target="_Blank"
                    className={styles.ml3}
                  >
                    Repo <RiArrowRightUpLine />
                  </a>
                </div>
              </li>
              <li>
                <p>An imaginary photo studio.</p>
                <div className={styles.externalLinks}>
                  <a
                    href="https://mk-react-photostudio.netlify.app/"
                    target="_Blank"
                  >
                    Live site <RiArrowRightUpLine />
                  </a>
                  <a
                    href="https://github.com/martinkariuki7/react-photostudio"
                    target="_Blank"
                    className={styles.ml3}
                  >
                    Repo <RiArrowRightUpLine />
                  </a>
                </div>
              </li>
              <li>
                <p>My personal portfolio.</p>
                <div className={styles.externalLinks}>
                  This website :)
                  <a
                    href="https://github.com/martinkariuki7/portfolio"
                    target="_Blank"
                    className={styles.ml3}
                  >
                    Repo <RiArrowRightUpLine />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.workCategory}>
            <h3>
              Joint <span>side projects</span>
            </h3>
            <ul>
              <li>
                <p>MealFinder app.</p>
                <div className={styles.externalLinks}>
                  <a href="https://mk-mealfinder.netlify.app/" target="_Blank">
                    Live site <RiArrowRightUpLine />
                  </a>
                  <a
                    href="https://github.com/martinkariuki7/mealfinder"
                    target="_Blank"
                    className={styles.ml3}
                  >
                    Repo <RiArrowRightUpLine />
                  </a>
                </div>
              </li>

              <li>
                <p>A stylish & functional Todolist. </p>
                <div className={styles.externalLinks}>
                  <a href="https://mk-todolist.netlify.app/" target="_Blank">
                    Live site <RiArrowRightUpLine />
                  </a>
                  <a
                    href="https://github.com/martinkariuki7/todolist"
                    target="_Blank"
                    className={styles.ml3}
                  >
                    Repo <RiArrowRightUpLine />
                  </a>
                </div>
              </li>
              <li>
                <p>New website for Solintegra. </p>
                <div className={styles.externalLinks}>
                  <a href="https://www.solintegra.no/" target="_Blank">
                    Live site <RiArrowRightUpLine />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.workCategory}>
            <h3>
              Official <span>work</span>
            </h3>
            <ul className={styles.wpThemes}>
              <li>
                <a href="https://designhotellet.no/" target="_Blank">
                  Design Hotellet <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://fjogstad-hus.no" target="_Blank">
                  Fjogstad hus <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://www.safari.africa/" target="_Blank">
                  Safari Africa <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://www.solintegra.no/" target="_Blank">
                  Solintegra <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://www.hhkarosseri.no/" target="_Blank">
                  Hellestø karosseri as <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://www.aktivhage.no/" target="_Blank">
                  Aktiv Hage <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://kristoffers-hage.no/" target="_Blank">
                  Kristoffers Hage <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://sirdaleiendom.no/" target="_Blank">
                  Sirdal Eiendom <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://l91byvilla.no/" target="_Blank">
                  L91 Byvilla <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://daleveien77.no/" target="_Blank">
                  Daleveien 77 <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://jatunhoyden.no/" target="_Blank">
                  Jåtunhøyden <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://jatun.no/" target="_Blank">
                  Jåtun <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://ensign.no/" target="_Blank">
                  Ensign <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://vester-hagen.no/" target="_Blank">
                  Vesterhagen <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://osterhusarena.no/" target="_Blank">
                  Østerhus Arena <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://toshmukei.com/" target="_Blank">
                  Tosh Mukei portfolio <RiArrowRightUpLine />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
