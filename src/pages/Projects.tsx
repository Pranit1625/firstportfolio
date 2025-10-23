import React, { useState } from "react";
import "../pages/Projects.css";

interface Project {
  title: string;
  description: string;
  image: string;
  type: "pdf" | "video";
  link: string;
}

const projects: Project[] = [
  {
    title: "Sweet Earth",
    description: "Logo and post presentation using Adobe Illustrator and Photoshop.",
    image: "/Cardimages/Sweet earth logo.png",
    type: "pdf",
    link: "/pdfpresentation/Sweet Earth Presentation.pdf",
  },
  {
    title: "Mr. Rice Guy",
    description: " Authentic rice bowl app and website design using Figma and Adobe Illustrator.",
    image: "/Cardimages/iPhone in Hand Mockup.png",
    type: "pdf",
    link: "/pdfpresentation/Mr. Rice Guy.pdf",
  },
  {
    title: "Mind Heaven App",
    description: "A Meditation app ui and logo design using Figma and Illustrator.",
    image: "/Cardimages/iPhone 13 & 14 - 4.jpg",
    type: "pdf",
    link: "/pdfpresentation/Mind Heaven Logo and app design.pdf",
  },
  {
    title: "Just Juice Website",
    description: "Just Juice website UI and logo design using Figma and Adobe illustrator.",
    image: "/Cardimages/2.png",
    type: "pdf",
    link: "/pdfpresentation/Just Juice website and logo design.pdf",
  },
  {
    title: "InternMeets Website",
    description: "UI/UX Intership Project in which i designed the home page of Internmeets website using Figma. ",
    image: "/Cardimages/Desktop - 1.png",
    type: "pdf",
    link: "/pdfpresentation/Internmeet website design.pdf",
  },
  {
    title: "Chittorgarh Travel Guide",
    description: " Graphic Design Internship Project in which i designed the Historical travel magzine using Adobe Indesign.",
    image: "/Cardimages/Chittorgrah Fort Magazine cover image.jpg",
    type: "pdf",
    link: "/pdfpresentation/Chittorgrah Fort Magazine.pdf",
  },
  {
    title: "Gourmet Kitchen",
    description: "Restaurant Menu design using Corel Draw.",
    image: "/Cardimages/Hotel Menu Project.png",
    type: "pdf",
    link: "/pdfpresentation/5 Star Hotel Menu 2 pages.pdf",
  },
  {
    title: "Spartan Fitness",
    description: "Logo and Brochure design using Corel Draw.",
    image: "/Cardimages/Brochure logo.png",
    type: "pdf",
    link: "/pdfpresentation/Sparta wear brochure.pdf",
  },
  {
    title: "Logo Animation",
    description: "Logo Animation video using Adobe After Effects.",
    image: "/Cardimages/Logo Animation image.png",
    type: "video",
    link: "/VideoProject/Logo animation.mp4",
  },
  {
    title: "Breaking Bad promo",
    description: "Breaking Bad Promo using 3D camera feature of Adobe After Effects.",
    image: "/Cardimages/3d Camera image.png",
    type: "video",
    link: "/VideoProject/Logo animation.mp4",
  },
  {
    title: "Stop Motion Animation.",
    description: "Basic stop motion animation using Adobe premier pro.",
    image: "/Cardimages/Stop motion image.png",
    type: "video",
    link: "/VideoProject/Stop motion Video.mp4",
  },
  {
    title: "Motion Poster.",
    description: "Motion poster of Ornage Juice brand using Adobe After effects and illustrator.",
    image: "/Cardimages/Motion poster image.png",
    type: "video",
    link: "/VideoProject/Motion poster Orange Juice.mp4",
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>These are my Internship Projects and Personal Design Projects. Click on any project to explore its presentation or video showcase.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                className="view-btn"
                onClick={() => setSelectedProject(project)}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
            <h2>{selectedProject.title}</h2>
            {selectedProject.type === "pdf" ? (
              <iframe
                src={selectedProject.link}
                title={selectedProject.title}
                className="project-media"
              ></iframe>
            ) : (
              <video
                src={selectedProject.link}
                controls
                className="project-media"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;