import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  console.log("가", isDark);
  return (
    <footer className={`footer ${isDark ? "dark-mode" : ""}`}>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
      <br />
      Copyright 2026. All right Reserved
    </footer>
  );
}

export default Footer;
