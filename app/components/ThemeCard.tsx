"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const themes = ["light", "dark", "winter", "luxury", "night", "synthwave", "caramellatte"]; // Available themes:

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = Cookies.get("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    Cookies.set("theme", newTheme, { expires: 365 }); // Save theme in cookies
  };

  return (
    <div className="p-4">
      <select
        className="select select-bordered w-full max-w-xs"
        value={theme}
        onChange={(e) => changeTheme(e.target.value)}
      >
        {themes.map((themeOption) => (
          <option key={themeOption} value={themeOption}>
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
