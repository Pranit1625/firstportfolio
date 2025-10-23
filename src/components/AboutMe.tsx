import { useNavigate } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate("/contact"); // 👈 make sure you have a route for this
  };

  return (
    <section className="about-me-section rounded-t-[3rem]" id="about">
      <div className="about-me-container">
        {/* Profile Image */}
        <div className="about-me-image">
          <div className="about-me-image-inner">
            <img src="/Aboutme.png" alt="Profile" />
          </div>
        </div>

        {/* Text Section */}
        <div className="about-me-text">
          <h3>About Me</h3>
          <h1>
            Who is <span>Pranit?</span>
          </h1>
          <p>
            I craft pixel-perfect visuals and interactive front-end experiences — blending
            design thinking with practical implementation. I enjoy working across branding,
            UI/UX and motion to tell stories that stick.
          </p>

          {/* Stats Section */}
          <div className="about-me-stats">
            <div>
              <h2>20+</h2>
              <p>Projects</p>
            </div>
            <div>
              <h2>7</h2>
              <p>Tools mastered</p>
            </div>
            <div>
              <h2>2+</h2>
              <p>Years experience</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="about-me-buttons">
            <button className="connect-btn" onClick={handleConnect}>
              Let’s connect
            </button>
            <a href="/resume.pdf" download className="cv-btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;