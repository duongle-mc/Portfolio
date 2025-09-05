import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection("home")}>
          <div>Le Khai Duong</div>
          <div className="middle-name"></div>
          <div className="below-name">Ready to Innovate</div>
        </div>
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <div
              key={id}
              className="nav-item"
              onClick={() => scrollToSection(id)}
            >
              <span className={activeSection === id ? "active" : ""}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
            </div>
          ))}
        </div>
        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
