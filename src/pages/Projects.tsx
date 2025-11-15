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
    image: `${import.meta.env.BASE_URL}Cardimages/Sweet earth logo.png`,
    type: "pdf",
    link: `${import.meta.env.BASE_URL}pdfpresentation/Sweet Earth Presentation.pdf`,
  },
  {
    title: "Mr. Rice Guy",
    description: "Authentic rice bowl app and website design using Figma and Adobe Illustrator.",
    image: `${import.meta.env.BASE_URL}Cardimages/iPhone in Hand Mockup.png`,
    type: "pdf",
    link: `${import.meta.env.BASE_URL}pdfpresentation/Mr. Rice Guy.pdf`,
  },
  {
    title: "Mind Heaven App",
    description: "A Meditation app UI and logo design using Figma and Illustrator.",
    image: `${import.meta.env.BASE_URL}Cardimages/iPhone 13 & 14 - 4.jpg`,
    type: "pdf",
    link: `${import.meta.env.BASE_URL}pdfpresentation/Mind Heaven Logo and app design.pdf`,
  },
  {
    title: "Just Juice Website",
    description: "Just Juice website UI and logo design using Figma and Adobe Illustrator.",
    image: `${import.meta.env.BASE_URL}Cardimages/2.png`,
    type: "pdf",
    link: `${import.meta.env.BASE_URL}pdfpresentation/Just Juice website and logo design.pdf`,
  },
  {
    title: "InternMeets Website",
    description: "UI/UX Internship Project designing the home page of Internmeets website using Figma.",
    image: `${import.meta.env.BASE_URL}Cardimages/Desktop - 1.png`,
    type: "pdf",
    link: `${import.meta.env.BASE_URL}pdfpresentation/Internmeet website design.pdf`,
  },
  {
    title: "Chittorgarh Travel Guide",
    description: "Graphic Design Internship Project designing a historical travel magazine using Adobe InDesign.",
    image: `${import.meta.env.BASE_URL}Cardimages/Chittorgrah Fort Magazine cover image.jpg`,
    type: "pdf",
    link: `${import.meta.env.BASE_URL}pdfpresentation/Chittorgrah Fort Magazine.pdf`,
  },
  {
    title: "Gourmet Kitchen",
    description: "Restaurant menu design using Corel Draw.",
    image: `${import.meta.env.BASE_URL}Cardimages/Hotel Menu Project.png`,
    type: "pdf",
    link: `${import.meta.env.BASE_URL}pdfpresentation/5 Star Hotel Menu 2 pages.pdf`,
  },
  {
    title: "Spartan Fitness",
    description: "Logo and brochure design using Corel Draw.",
    image: `${import.meta.env.BASE_URL}Cardimages/Brochure logo.png`,
    type: "pdf",
    link: `${import.meta.env.BASE_URL}pdfpresentation/Sparta wear brochure.pdf`,
  },
  {
    title: "Logo Animation",
    description: "Logo animation video using Adobe After Effects.",
    image: `${import.meta.env.BASE_URL}Cardimages/Logo Animation image.png`,
    type: "video",
    link: `${import.meta.env.BASE_URL}VideoProject/Logo animation.mp4`,
  },
  {
    title: "Breaking Bad Promo",
    description: "Breaking Bad promo using 3D camera feature in Adobe After Effects.",
    image: `${import.meta.env.BASE_URL}Cardimages/3d Camera image.png`,
    type: "video",
    link: `${import.meta.env.BASE_URL}VideoProject/Logo animation.mp4`,
  },
  {
    title: "Stop Motion Animation",
    description: "Basic stop motion animation using Adobe Premiere Pro.",
    image: `${import.meta.env.BASE_URL}Cardimages/Stop motion image.png`,
    type: "video",
    link: `${import.meta.env.BASE_URL}VideoProject/Stop motion Video.mp4`,
  },
  {
    title: "Motion Poster",
    description: "Motion poster for an orange juice brand using Adobe After Effects and Illustrator.",
    image: `${import.meta.env.BASE_URL}Cardimages/Motion poster image.png`,
    type: "video",
    link: `${import.meta.env.BASE_URL}VideoProject/Motion poster Orange Juice.mp4`,
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>
          These are my Internship Projects and Personal Design Projects. Click on any project to explore its presentation or video showcase.
        </p>
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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