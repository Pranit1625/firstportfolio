import React, { useState } from "react";
import "../pages/Projects.css";

interface Project {
  title: string;
  description: string;
  image: string;
  pdfLink?: string;
  videoLink?: string;
  videoType?: "local" | "youtube";
}

const projects: Project[] = [
  {
    title: "Sweet Earth",
    description:
      "Logo and post presentation using Adobe Illustrator and Photoshop.",
    image: `${import.meta.env.BASE_URL}Cardimages/Sweet earth logo.png`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/Sweet Earth Presentation.pdf`,
  },
  {
    title: "Mr. Rice Guy",
    description:
      "Authentic rice bowl app and website design using Figma and Adobe Illustrator.",
    image: `${import.meta.env.BASE_URL}Cardimages/iPhone in Hand Mockup.png`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/Mr. Rice Guy.pdf`,
  },
  {
    title: "Mind Heaven App",
    description:
      "A meditation app UI and logo design using Figma and Illustrator.",
    image: `${import.meta.env.BASE_URL}Cardimages/iPhone 13 & 14 - 4.jpg`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/Mind Heaven Logo and app design.pdf`,
  },
  {
    title: "Just Juice Website",
    description:
      "Just Juice website UI and logo design using Figma and Adobe Illustrator.",
    image: `${import.meta.env.BASE_URL}Cardimages/2.png`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/Just Juice website and logo design.pdf`,
  },
  {
    title: "InternMeets Website",
    description:
      "UI/UX internship project designing the home page of the Internmeets website using Figma.",
    image: `${import.meta.env.BASE_URL}Cardimages/Desktop - 1.png`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/Internmeet website design.pdf`,
  },
  {
    title: "Chittorgarh Travel Guide",
    description:
      "Graphic design internship project designing a historical travel magazine using Adobe InDesign.",
    image: `${import.meta.env.BASE_URL}Cardimages/Chittorgrah Fort Magazine cover image.jpg`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/Chittorgrah Fort Magazine.pdf`,
  },
  {
    title: "Gourmet Kitchen",
    description: "Restaurant menu design using Corel Draw.",
    image: `${import.meta.env.BASE_URL}Cardimages/Hotel Menu Project.png`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/5 Star Hotel Menu 2 pages.pdf`,
  },
  {
    title: "Spartan Fitness",
    description: "Logo and brochure design using Corel Draw.",
    image: `${import.meta.env.BASE_URL}Cardimages/Brochure logo.png`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/Sparta wear brochure.pdf`,
  },
  {
    title: "Ghost Steps: Invisible Energy Made Visible",
    description:
      "Interactive Media Storyboard (UN SDG 7) — an installation concept that visualises energy through footsteps using sensors, rules, and real-time visual feedback.",
    image: `${import.meta.env.BASE_URL}Cardimages/Ghost_Steps.png`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/Ghost_Steps_Storyboard.pdf`,
  },
  {
    title: "Crossing Signals: Interactive / Algorithmic Soundscape Performance",
    description:
      "A rule-based interactive soundscape using Shabda and Freesound, designed to transition from city noise to calm natural ambience.",
    image: `${import.meta.env.BASE_URL}Cardimages/Interactive_Soundscape_Cover.png`,
    pdfLink: `${import.meta.env.BASE_URL}pdfpresentation/Interactive_Algorithmic_Soundscape_Performance.pdf`,
    videoLink: "https://www.youtube.com/embed/7IdPbdgaKWI",
    videoType: "youtube",
  },
  {
    title: "Logo Animation",
    description: "Logo animation video using Adobe After Effects.",
    image: `${import.meta.env.BASE_URL}Cardimages/Logo Animation image.png`,
    videoLink: `${import.meta.env.BASE_URL}VideoProject/logo_animation.mp4`,
    videoType: "local",
  },
  {
    title: "Breaking Bad Promo",
    description:
      "Breaking Bad promo using 3D camera feature in Adobe After Effects.",
    image: `${import.meta.env.BASE_URL}Cardimages/3d Camera image.png`,
    videoLink: `${import.meta.env.BASE_URL}VideoProject/3d_camera_view.mp4`,
    videoType: "local",
  },
  {
    title: "Stop Motion Animation",
    description: "Basic stop motion animation using Adobe Premiere Pro.",
    image: `${import.meta.env.BASE_URL}Cardimages/Stop motion image.png`,
    videoLink: `${import.meta.env.BASE_URL}VideoProject/stop_motion_video.mp4`,
    videoType: "local",
  },
  {
    title: "Motion Poster",
    description:
      "Motion poster for an orange juice brand using Adobe After Effects and Illustrator.",
    image: `${import.meta.env.BASE_URL}Cardimages/Motion poster image.png`,
    videoLink: `${import.meta.env.BASE_URL}VideoProject/motion_poster_orange_juice.mp4`,
    videoType: "local",
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeMedia, setActiveMedia] = useState<"pdf" | "video">("pdf");

  const openProject = (project: Project) => {
    setSelectedProject(project);

    if (project.pdfLink) {
      setActiveMedia("pdf");
    } else if (project.videoLink) {
      setActiveMedia("video");
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveMedia("pdf");
  };

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>
          A collection of my design, interactive media, and creative technology
          projects. Click on any project to explore its presentation,
          documentation, or video showcase.
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
              <div className="project-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <button
                className="view-btn"
                onClick={() => openProject(project)}
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
            <p className="modal-description">{selectedProject.description}</p>

            {(selectedProject.pdfLink || selectedProject.videoLink) && (
              <div className="media-tabs">
                {selectedProject.pdfLink && (
                  <button
                    className={`media-tab ${
                      activeMedia === "pdf" ? "active" : ""
                    }`}
                    onClick={() => setActiveMedia("pdf")}
                  >
                    View PDF
                  </button>
                )}

                {selectedProject.videoLink && (
                  <button
                    className={`media-tab ${
                      activeMedia === "video" ? "active" : ""
                    }`}
                    onClick={() => setActiveMedia("video")}
                  >
                    Watch Video
                  </button>
                )}
              </div>
            )}

            <div className="media-wrapper">
              {activeMedia === "pdf" && selectedProject.pdfLink && (
                <iframe
                  src={selectedProject.pdfLink}
                  title={selectedProject.title}
                  className="project-media"
                />
              )}

              {activeMedia === "video" &&
                selectedProject.videoLink &&
                selectedProject.videoType === "youtube" && (
                  <iframe
                    src={selectedProject.videoLink}
                    title={`${selectedProject.title} video`}
                    className="project-media"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}

              {activeMedia === "video" &&
                selectedProject.videoLink &&
                selectedProject.videoType !== "youtube" && (
                  <video
                    src={selectedProject.videoLink}
                    controls
                    className="project-media"
                  />
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;