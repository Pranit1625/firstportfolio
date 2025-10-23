import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./MyWorkSection.css"; // 👈 import CSS file

const MyWorkSection = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "App Design",
      img: "/logos/app-design.png",
    },
    {
      title: "Web Design",
      img: "/logos/web-design.png",
    },
    {
      title: "Graphic Design",
      img: "/logos/graphic-design.png",
    },
  ];

  return (
    <section className="mywork-section">
      <h2 className="section-title">
        My <span>Services</span>
      </h2>
      <p className="section-subtitle">
        I specialize in creating modern, responsive, and user-focused digital experiences. From crafting elegant designs to building fully functional websites, I help brands bring their ideas to life.
      </p>

      <div className="work-cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="work-card"
            onClick={() => navigate("/projects")}
          >
            <h3>{card.title}</h3>
            <img src={card.img} alt={card.title} />
            <button className="arrow-btn">
              <ArrowUpRight size={18} />
            </button>
          </div>
        ))}
      </div>

      <button className="see-all" onClick={() => navigate("/projects")}>
        See All <ArrowUpRight size={18} />
      </button>
    </section>
  );
};

export default MyWorkSection;