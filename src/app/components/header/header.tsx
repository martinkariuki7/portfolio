"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";
import gsap from "gsap";
import SplitType from "split-type";
import styles from "./header.module.css";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isToggled, setToggle] = useState(false);
  const shortTextRef = useRef<HTMLHeadingElement>(null);
  const fullTextRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  //Load theme from localStorage or system preference on first mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    let currentTheme: "light" | "dark";
    if (savedTheme) {
      currentTheme = savedTheme;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      currentTheme = prefersDark.matches ? "dark" : "light";
    }

    setTheme(currentTheme);
    setToggle(currentTheme === "dark");
  }, []);

  //Apply theme + store in localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  //GSAP character-based hover animation for desktop only
  useEffect(() => {
    const shortText = shortTextRef.current;
    const fullText = fullTextRef.current;
    const container = containerRef.current;

    if (!shortText || !fullText || !container) return;

    const isDesktop = () => window.innerWidth >= 768;

    // Only initialize on desktop
    if (!isDesktop()) return;

    // Split both texts into words (treating each text as a "line")
    const shortSplit = new SplitType(shortText, { types: "words" });
    const fullSplit = new SplitType(fullText, { types: "words" });

    // Set initial states - full name rotated back and invisible
    gsap.set(fullSplit.words, {
      rotationX: -90,
      transformOrigin: "50% 50% -30px",
      opacity: 0
    });
    gsap.set(shortSplit.words, {
      rotationX: 0,
      transformOrigin: "50% 50% -30px",
      opacity: 1
    });

    const handleMouseEnter = () => {
      if (!isDesktop()) return;

      // Rotate short text out
      gsap.to(shortSplit.words, {
        rotationX: 90,
        opacity: 0,
        duration: 0.8,
        ease: "power3",
        stagger: 0.1
      });

      // Rotate full text in
      gsap.to(fullSplit.words, {
        rotationX: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3",
        stagger: 0.1
      });
    };

    const handleMouseLeave = () => {
      if (!isDesktop()) return;

      // Rotate full text out
      gsap.to(fullSplit.words, {
        rotationX: -90,
        opacity: 0,
        duration: 0.8,
        ease: "power3",
        stagger: 0.1
      });

      // Rotate short text in
      gsap.to(shortSplit.words, {
        rotationX: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3",
        stagger: 0.1
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      shortSplit.revert();
      fullSplit.revert();
    };
  }, []);

  const toggleTheme = () => {
    setToggle(!isToggled);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteBranding} ref={containerRef}>
        <h1 ref={shortTextRef} className={styles.shortText}>
          WMK.
        </h1>
        <h1 ref={fullTextRef} className={styles.fullText} aria-hidden="true">
          William Martin Kariuki
        </h1>
      </div>

      <Classic duration={750} toggled={isToggled} toggle={toggleTheme} />
    </header>
  );
}
