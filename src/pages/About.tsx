import React from "react";
import "./About.css";
import {
  FaBehance,
  FaDribbble,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section className="about-section">
      {/* ========== HERO SECTION ========== */}
      <div className="about-header">
        <h1 className="about-heading">About Me</h1>
        <p className="about-subtext">
          Get to know more about me, my background, and the skills I’ve built along the way.
        </p>
      </div>

      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          {/* ✅ Fixed image path for GitHub Pages */}
          <img
            src={`${import.meta.env.BASE_URL}about/aboutimg.jpg`}
            alt="Profile"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="about-content">
          <h1 className="about-title">ABOUT ME</h1>
          <h3 className="about-subtitle">PRANIT MAHAMUNI — DESIGNER</h3>
          <p className="about-text">
            I’m a passionate designer who loves blending creativity and functionality 
            to craft meaningful visual experiences. My work spans UI/UX design, illustration, 
            and motion graphics — all driven by a desire to bring stories to life through design. 
            Every project I take on is an opportunity to push creative boundaries and craft something 
            truly impactful.
          </p>

          {/* Buttons */}
          <div className="about-buttons">
            {/* ✅ Fixed resume and portfolio paths */}
            <a
              href={`${import.meta.env.BASE_URL}resume/Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn"
            >
              View Resume
            </a>
            <a
              href={`${import.meta.env.BASE_URL}portfolio/Final Portfolio.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn outline"
            >
              View Portfolio
            </a>
          </div>

          {/* Social Icons */}
          <div className="about-socials">
            <a href="#"><FaBehance /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* ========== INFO SECTION (EDUCATION, SKILLS, ETC.) ========== */}
      <div className="about-details">
        <div className="about-grid">

          {/* Education */}
          <div className="about-card">
            <h3>Education</h3>
            <p><strong>2025 – 2026</strong><br />Msc. in Interaction & Experience Design<br />University of Limerick, Ireland</p>
            <p><strong>2022 – 2025</strong><br />Bachelor in Business Administration<br />Suryadatta College of Management, India</p>
          </div>

          {/* Technical Skills */}
          <div className="about-card">
            <h3>Technical Skills</h3>
            <div className="skill-icons">
              {/* ✅ Fixed all logo paths */}
              <img src={`${import.meta.env.BASE_URL}logos/figma.jpeg`} alt="Figma" />
              <img src={`${import.meta.env.BASE_URL}logos/premier.png`} alt="Premiere Pro" />
              <img src={`${import.meta.env.BASE_URL}logos/aftereffects.png`} alt="After Effects" />
              <img src={`${import.meta.env.BASE_URL}logos/illustrator.png`} alt="Illustrator" />
              <img src={`${import.meta.env.BASE_URL}logos/indesign.png`} alt="InDesign" />
              <img src={`${import.meta.env.BASE_URL}logos/photoshop.png`} alt="Photoshop" />
              <img src={`${import.meta.env.BASE_URL}logos/coreldraw.jpeg`} alt="Corel Draw" />
              <img src={`${import.meta.env.BASE_URL}logos/canva.jpeg`} alt="Canva" />
              <img src={`${import.meta.env.BASE_URL}logos/krita.png`} alt="Krita" />
              <img src={`${import.meta.env.BASE_URL}logos/Maya.png`} alt="Maya" />
            </div>
          </div>

          {/* Soft Skills */}
          <div className="about-card">
            <h3>Soft Skills</h3>
            <ul>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
            </ul>
          </div>

          {/* Skill Set */}
          <div className="about-card">
            <h3>Skill Set</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Wireframing & Prototyping</li>
              <li>Graphic Design</li>
              <li>Branding</li>
              <li>Motion Graphics</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="about-card">
            <h3>Interests</h3>
            <p>Design Trends | Technology | Gaming | Hiking | Cycling</p>
          </div>

          {/* Languages */}
          <div className="about-card">
            <h3>Languages</h3>
            <p>English (Professional) | Marathi | Hindi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;