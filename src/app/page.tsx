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
        <section>
          <h1>
            Har du noen gang irritert deg over en app eller en nettside som var
            vanskelig å bruke?
          </h1>
          <p>
            Det har skjedd med meg flere ganger. Som UX-designer bidrar jeg
            blant annet til å gjøre slike opplevelser bedre, og siden 2007 har
            jeg jobbet med nettopp det. På denne nettsiden deler jeg tre ting:{" "}
            <Link href="#work">arbeidet mitt</Link>,{" "}
            <Link href="#work">litt om meg selv</Link> og{" "}
            <Link href="#work">CV.</Link>{" "}
          </p>
        </section>

        <hr />

        <section>
          <h2>Jobberfaring</h2>

          <ol className={styles.experienceList}>
            <li>
              <div
                className={`${styles.roundedFull} ${styles.currentTime}`}
              ></div>
              <time>I dag ({new Date().toLocaleDateString()})</time>
              <h3 className={styles.experienceTitle}>
                UX researcher, Lyse Tele.
              </h3>
              <p>
                Har nettopp levert innsikt fra et 12 måneders research oppdrag.
                Arbeidet mitt skal hjelpe kundeserviceteamet å bytte ut eldre
                programvare med trygghet om at den nye løsningen dekker
                brukernes behov, samtidig som den støtter grunnleggende
                forretningsprosesser.
              </p>
            </li>
            <li>
              <div className={styles.roundedFull}></div>
              <time>2023 - May 2025</time>
              <h3>Staff Product Designer at </h3>
            </li>
          </ol>
        </section>

        <section className={styles.bodyContent}>
          <div>
            <h2>
              <span className="brushy-style">01.</span> Arbeid
            </h2>
          </div>

          <div className={styles.threeColumns}>
            <div>
              <h3>Som UX konsulent i Okse</h3>
              <ul>
                <li>
                  03/2025 <br /> Hjalp en telkomkunde med å bytte software 6mnd
                  fortere en plannlagt etter grundig UX research.
                </li>
                <li>
                  Hjalp en telkomkunde med å bytte software 6mnd fortere en
                  plannlagt etter grundig UX research.
                </li>
                <li>
                  Hjalp en telkomkunde med å bytte software 6mnd fortere en
                  plannlagt etter grundig UX research.
                </li>
              </ul>
            </div>

            <div>
              <h3>
                En liste av nettsider jeg har kodet selv, altså gode gamle
                koding, ikke vibe-coding. 😉
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

            <div>
              <h3>Ting jeg har laget for gøy hjemme i fritiden.</h3>
              <ul className={styles.wpThemes}>
                <li>
                  <p>
                    En webapp for å finne oppskrifter basert på ingredienser.{" "}
                    <br />
                    <a
                      href="https://mk-mealfinder.netlify.app/"
                      target="_Blank"
                    >
                      Live site <RiArrowRightUpLine />
                    </a>
                    <a
                      href="https://github.com/martinkariuki7/mealfinder"
                      target="_Blank"
                      className={styles.ml3}
                    >
                      Repo <RiArrowRightUpLine />
                    </a>
                  </p>

                  <div className={styles.externalLinks}></div>
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
          </div>
        </section>
        <hr />
        <section className={styles.bodyContent}>
          <div>
            <h2>
              <span className="brushy-style">02.</span> Litt om meg
            </h2>
            <p>
              {" "}
              Jeg har jobbet i bransjen siden 2007. Når jeg sitte alene og
              reflektere tilbake, så er jeg er mest stolt av min evne til å
              jobbe med andre folk, at de får tillit til meg, og gir meg mer
              ansvar. Det er det som betyr mest for meg.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
