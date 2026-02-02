import React from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import Header from "./components/header/header";
import styles from "./page.module.css";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <p className="lead">
            Har du noen gang irritert deg over en app eller en nettside som var
            vanskelig å bruke?
          </p>
          <p>
            Det har skjedd med meg flere ganger. Som UX-designer bidrar jeg
            blant annet til å gjøre slike opplevelser bedre, og siden 2007 har
            jeg jobbet med nettopp det. På denne nettsiden deler jeg tre ting:
            arbeidet mitt, <Link href="#about">litt om meg selv</Link> og{" "}
            <Link href="cv.pdf" target="_Blank">
              CV.
            </Link>
          </p>
        </section>

        <section id="#work">
          <h2>Jobberfaring</h2>
          <p>
            Jeg er ansatt som UX konsulent i{" "}
            <a href="https://okse.no/" target="_Blank" area-hidden="true">
              Okse.
            </a>{" "}
            Her er de siste prosjektene jeg har jobbet med på oppdrag for
            kunder.
          </p>
          <ol className={styles.experienceList}>
            <li>
              <div
                className={`${styles.roundedFull} ${styles.currentTime}`}
              ></div>
              <time>I dag ({new Date().toLocaleDateString()})</time>
              <h3 className={styles.experienceTitle}>Uten oppdrag</h3>
              <p className={styles.fullOpacity}>
                Har ikke oppdrag akkurat nå, så bruker tiden på kompetanseheving
                og tester bruk av KI i produktutvikling.{" "}
                <a href="mailto:martin.kariuki@okse.no">
                  Ta kontakt for samarbeid
                </a>
              </p>
            </li>
            <li>
              <div className={styles.roundedFull}></div>
              <time>Aug 2025 - des 2025</time>
              <h3>Senior UX designer - Altibox privat</h3>
            </li>
            <li>
              <div className={styles.roundedFull}></div>
              <time>Okt 2024 - aug 2025</time>
              <h3>Senior UX researcher - Lyse kundeservice </h3>
            </li>
            <li>
              <div className={styles.roundedFull}></div>
              <time>Mars 2024 - okt 2024</time>
              <h3>Design lead - Altibox selvbetjening </h3>
            </li>
          </ol>
          <p>
            <Link href="cv.pdf" target="_Blank">
              Last ned full CV ↗
            </Link>
          </p>
        </section>

        <section>
          <div>
            <h2>Web utvikling</h2>
          </div>

          <div className={styles.threeColumns}>
            <p>
              Noen av nettsidene jeg har kodet selv da jeg jobbet som utvikler
              en stund siden. Her må jeg presisere at jeg mener &quot;gode gamle
              koding&quot;, og ikke vibe coding. 😉
            </p>
            <ul className={styles.websites}>
              <li>
                <a
                  href="https://basegruppen.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Base{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.safari.africa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari Africa{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.solintegra.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solintegra{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://designhotellet.no/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Design Hotellet{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://fjogstad-hus.no"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fjogstad hus{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.hhkarosseri.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hellestø karosseri{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aktivhage.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aktiv Hage{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://sirdaleiendom.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sirdal Eiendom{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://jatun.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jåtun{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://ensign.no/prosjekter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ensign{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="https://osterhusarena.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Østerhus Arena{" "}
                  <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Andre greier jeg har laget for gøy.</h2>
          <ul className={styles.openSourceList}>
            <li>
              <img src="task.gif" role="presentation" />
              <div>
                <h3>En litt annerledes habit-tracker </h3>
                <div>
                  <a
                    href="https://3ting.no/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site{" "}
                    <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <img src="food.gif" role="presentation" />
              <div>
                <h3>Web-app som hjelper meg å finne oppskrifter.</h3>

                <div>
                  <a
                    href="https://mk-mealfinder.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site{" "}
                    <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                  </a>
                  <a
                    href="https://github.com/martinkariuki7/mealfinder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ml3}
                  >
                    Repo{" "}
                    <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <img src="photo.gif" role="presentation" />
              <div>
                <h3>
                  Prøvde å lage et bedre bildebibliotek etter dårlig skolefoto
                  opplevelse.
                </h3>

                <div>
                  <a
                    href="https://mk-react-photostudio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site{" "}
                    <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                  </a>
                  <a
                    href="https://github.com/martinkariuki7/react-photostudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ml3}
                  >
                    Repo{" "}
                    <RiArrowRightUpLine aria-hidden="true" focusable="false" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section id="about" className={styles.bodyContent}>
          <div>
            <h2>Litt om meg</h2>
            <p>
              {" "}
              Jeg har jobbet i bransjen siden 2007. Når jeg sitte alene og
              reflektere tilbake, så er jeg mest stolt av min evne til å jobbe
              med andre folk, at de får tillit til meg, og gir meg mer ansvar.
              Det er det som betyr mest for meg.
            </p>
            <p>
              Jeg er vokst opp i Kenya, bo nå på Bryne sammen med kone og 2
              gutter. Blir det litt stille i en samtale, begynner jeg av en
              eller annen grunn å snakke om geitekjøtt. Ja! Du leste riktig.
              Veldig rart, jeg vet! Jeg er glad i fotball, både å diskutere og å
              spille, og favorittlaget mitt er Arsenal. Next season it&#39;s
              ours!! 🏆{" "}
            </p>
          </div>
        </section>

        <section className={styles.bodyContent}>
          <div>
            <h2>Takk for oppmerksomhet</h2>
            <p>
              Kult at du klarte å scrolle så langt! 👊 Håper du fant noe
              interessant. Lurer du på noe, er det bare å{" "}
              <a href="mailto:martinkariuki7@gmail.com">sende meg en e-post.</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
