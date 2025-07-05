import React, { useState, useEffect } from "react";
import "./DarkMode.css";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <div className="dark-mode-container">
      <div className="dark-mode-wrapper">
        <input
          id="darkmode-toggle"
          type="checkbox"
          className="dark_mode_input"
          checked={dark}
          onChange={() => setDark((prev) => !prev)}
        />
        <label htmlFor="darkmode-toggle" className="dark_mode_label">
          <span className="ball" />
        </label>
      </div>
    </div>
  );
}
