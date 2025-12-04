"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";
import styles from "./header.module.css";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isToggled, setToggle] = useState(true);

  //Load theme from localStorage on first mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
      setToggle(savedTheme === "dark");
    }
  }, []);

  //Apply theme + store in localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setToggle(!isToggled);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteBranding}>
        <h1>WMK — UX designer.</h1>
      </div>

      <Classic duration={750} toggled={isToggled} toggle={toggleTheme} />
    </header>
  );
}
