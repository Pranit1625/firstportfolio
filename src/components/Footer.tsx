import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate("/contact");
  };

  return (
    <footer className="footer-section">
      {/* Background Big Text */}
      <h1 className="footer-bg-text">LET’S WORK TOGETHER</h1>

      <div className="footer-content">
        {/* Left Contact */}
        <div className="footer-contact">
          <p className="footer-title">Contact</p>
          <a href="mailto:hello@pranitdesigns.com">hello@pranitdesigns.com</a>
          <a href="tel:+911234567890">+91 12345 67890</a>
        </div>

        {/* Center CTA */}
        <div className="footer-center">
          <p>Got a project? Want to collaborate?</p>
          <button onClick={handleProjectClick}>Discuss your project →</button>
        </div>

        {/* Right Info */}
        <div className="footer-location">
          <div>
            <p className="footer-title">India</p>
            <p>Pune, Maharashtra</p>
          </div>
          <div>
            <p className="footer-title">Worldwide</p>
            <p>Available for remote work 🌍</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Pranit Studio. All rights reserved.</p>
        <p>Terms & Conditions</p>
        <div className="footer-icons">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
