"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";
import styles from "./header.module.css";

export default function Header() {
  const [isToggled, setToggle] = useState(true);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setToggle(!isToggled);
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Dark/Light mode effect
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteBranding}>
        <h1>WMK — UX designer.</h1>
      </div>

      <Classic duration={750} toggled={isToggled} toggle={toggleTheme} />
    </header>
  );
}
