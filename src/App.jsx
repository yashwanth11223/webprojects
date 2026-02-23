import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const sections = ["home", "about", "services", "contact"];

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Background change
      setScrolled(currentScroll > 50);

      // Hide on scroll down
      if (currentScroll > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScroll);

      // Active section detection
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          visible ? "show" : "hide"
        }`}
      >
        <div className="logo">MySite</div>

        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                
                className={active === section ? "active" : ""}
              >
                {section.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    
    </>
  );
}

export default App;
