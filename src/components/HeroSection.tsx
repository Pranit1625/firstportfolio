// src/components/HeroSection.tsx
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            HI, I’M PRANIT.
            <br />
            <span className="creative">A CREATIVE ✹ DESIGNER</span>
            <br />
            BASED IN <span className="strike">INDIA</span>
          </h1>

          <div className="hero-tags">
            <span>GRAPHIC DESIGN</span>
            <span>UI/UX</span>
            <span>ANIMATION</span>
          </div>

          <div className="hero-buttons">
            <button className="btn-dark">Got a project?</button>
            <button className="btn-light">Let’s talk.</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={`${import.meta.env.BASE_URL}Profile image 2.png`} alt="Designer portrait" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;