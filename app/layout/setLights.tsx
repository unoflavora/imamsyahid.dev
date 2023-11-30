"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SetLight() {
  const [darkMode, enableDarkMode] = useState<boolean>(true);

  useEffect(() => {
    var html = document.getElementById("html");
    if (darkMode) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => {
        enableDarkMode(!darkMode);
      }}
      className="flex justify-center items-center"
    >
      {darkMode ? <SunIcon className="fill-white" /> : <MoonIcon />}
    </button>
  );
}
