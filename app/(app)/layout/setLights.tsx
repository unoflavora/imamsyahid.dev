"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SetLight() {
  const [darkMode, enableDarkMode] = useState<boolean>();

  useEffect(() => {
    var html = document.getElementById("html");
    if (darkMode) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      enableDarkMode(true);
    }

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        enableDarkMode(colorScheme === "dark");
      });
  }, []);

  return (
    <button
      aria-label="switch lightning mode"
      onClick={() => {
        enableDarkMode(!darkMode);
      }}
      className="flex justify-center items-center"
    >
      {darkMode ? <SunIcon className="fill-white" /> : <MoonIcon />}
    </button>
  );
}
