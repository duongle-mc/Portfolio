import React from "react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2025 Le Khai Duong. Designed with 💜 and lots of ☕</p>
        <div className="footer-links">
          <a href="/" onClick={() => scrollToSection("home")}>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
