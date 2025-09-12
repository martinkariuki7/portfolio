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
              <h3 className={styles.experienceTitle}>
                UX researcher, Lyse Tele.
              </h3>
              <p>
                Har nettopp levert innsikt fra et ~ 12 måneders research
                oppdrag. Arbeidet mitt skal hjelpe kundeserviceteamet å bytte ut
                eldre programvare med trygghet om at den nye løsningen dekker
                brukernes behov, samtidig som den støtter grunnleggende
                forretningsprosesser.
              </p>
            </li>
            <li>
              <div className={styles.roundedFull}></div>
              <time>20/10/2024 - 13/10/2025</time>
              <h3>UX researcher - Lyse Tele. </h3>
            </li>

            <li>
              <div className={styles.roundedFull}></div>
              <time>04/04/2025 - 10/09/2025</time>
              <h3>UX designer - Altibox kundeutvikling </h3>
            </li>

            <li>
              <div className={styles.roundedFull}></div>
              <time>20/03/2024 - 20/10/2024</time>
              <h3>Design lead - Altibox selvbetjening </h3>
            </li>
          </ol>
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
                <a href="https://basegruppen.no/" target="_Blank">
                  Base <RiArrowRightUpLine />
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
                <a href="https://designhotellet.no/en/" target="_Blank">
                  Design Hotellet <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://fjogstad-hus.no" target="_Blank">
                  Fjogstad hus <RiArrowRightUpLine />
                </a>
              </li>

              <li>
                <a href="https://www.hhkarosseri.no/" target="_Blank">
                  Hellestø karosseri
                  <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://www.aktivhage.no/" target="_Blank">
                  Aktiv Hage <RiArrowRightUpLine />
                </a>
              </li>

              <li>
                <a href="https://sirdaleiendom.no/" target="_Blank">
                  Sirdal Eiendom <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://jatun.no/" target="_Blank">
                  Jåtun <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://ensign.no/prosjekter/" target="_Blank">
                  Ensign <RiArrowRightUpLine />
                </a>
              </li>
              <li>
                <a href="https://osterhusarena.no/" target="_Blank">
                  Østerhus Arena <RiArrowRightUpLine />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Open source greier jeg har laget for gøy.</h2>
          <ul className={styles.openSourceList}>
            <li>
              <img src="task.gif" role="presentation" />
              <div>
                <h3>Todo-liste uten innlogging, lagrer i localStorage.</h3>
                <div>
                  <a
                    href="https://mk-todolist.netlify.app/"
                    target="_Blank"
                    className={styles.ml3}
                  >
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
              </div>
            </li>
            <li>
              <img src="food.gif" role="presentation" />
              <div>
                <h3>Web-app som hjelper meg å finne oppskrifter.</h3>

                <div>
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
                    target="_Blank"
                  >
                    Live site <RiArrowRightUpLine />
                  </a>
                  <a
                    href="https://github.com/martinkariuki7/react-photostudio/"
                    target="_Blank"
                    className={styles.ml3}
                  >
                    Repo <RiArrowRightUpLine />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section id="about" className={styles.bodyContent}>
          <div>
            <h2>On a personal note</h2>
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
              Veldig rart, jeg vet! Jobber med saken. Jeg er glad i fotball,
              både å diskutere og å spille, og favorittlaget mitt er Arsenal.
              Next season it&#39;s ours!! 🏆{" "}
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
