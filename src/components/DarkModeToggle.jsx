import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
export default DarkModeToggle;