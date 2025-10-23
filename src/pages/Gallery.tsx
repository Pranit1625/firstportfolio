import React, { useState } from "react";
import "./Gallery.css";

type GalleryItem = {
  id: number;
  src: string;
  title: string;
  type: "image" | "video";
};

const galleryItems: GalleryItem[] = [
  // 🎬 Animations
  { id: 1, src: "/Gallery/animation1.mp4", title: "Flipaclip Animation 1", type: "video" },
  { id: 2, src: "/Gallery/animation2.mp4", title: "Flipaclip Animation 2", type: "video" },
  { id: 3, src: "/Gallery/animation3.mp4", title: "Flipaclip Animation 3", type: "video" },
  { id: 4, src: "/Gallery/animation4.mp4", title: "Flipaclip Animation 4", type: "video" },
  { id: 5, src: "/Gallery/animation5.mp4", title: "Flipaclip Animation 5", type: "video" },

  // 🖼️ Images / Artworks
  { id: 6, src: "/Gallery/img1.jpg", title: "Eye Sketch", type: "image" },
  { id: 7, src: "/Gallery/img2.jpg", title: "Sleeping Baby Sketch", type: "image" },
  { id: 8, src: "/Gallery/img3.jpg", title: "Lord Rama Sketch", type: "image" },
  { id: 9, src: "/Gallery/img4.jpg", title: "Astronaut Doodle", type: "image" },
  { id: 10, src: "/Gallery/img5.jpg", title: "Detailed Eye Drawing", type: "image" },
  { id: 11, src: "/Gallery/img6.jpg", title: "Boy Portrait Sketch", type: "image" },
  { id: 12, src: "/Gallery/img7.jpg", title: "Girl Portrait Sketch", type: "image" },
  { id: 13, src: "/Gallery/img8.jpg", title: "Realistic Portrait", type: "image" },
  { id: 14, src: "/Gallery/img9.jpg", title: "Digital Artwork", type: "image" },
  { id: 15, src: "/Gallery/img10.jpg", title: "Mandala Design", type: "image" },
  { id: 16, src: "/Gallery/img11.jpg", title: "Cartoon Shinchan Poster", type: "image" },
  { id: 17, src: "/Gallery/img12.jpg", title: "Retro Cat Poster", type: "image" },
  { id: 18, src: "/Gallery/img13.jpg", title: "Knight Art Concept", type: "image" },
  { id: 19, src: "/Gallery/img14.jpg", title: "Cute Cat Photography", type: "image" },
  { id: 20, src: "/Gallery/img15.jpg", title: "Lord Shiva Illustration", type: "image" },
  { id: 21, src: "/Gallery/img16.jpg", title: "Feather Line Art", type: "image" },
  { id: 22, src: "/Gallery/img17.jpg", title: "Character Design 1", type: "image" },
  { id: 23, src: "/Gallery/img18.jpg", title: "Character Design 2", type: "image" },
  { id: 24, src: "/Gallery/img19.jpg", title: "Character Design 3", type: "image" },
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  const filteredItems =
    filter === "all" ? galleryItems : galleryItems.filter((item) => item.type === filter);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h1>My Gallery</h1>
        <p>
          A showcase of my creative journey — from Flipaclip animations to sketches and digital art.
        </p>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "image" ? "active" : ""}
            onClick={() => setFilter("image")}
          >
            Images
          </button>
          <button
            className={filter === "video" ? "active" : ""}
            onClick={() => setFilter("video")}
          >
            Videos
          </button>
        </div>
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => setSelectedItem(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.title} />
            ) : (
              <video src={item.src} muted autoPlay loop />
            )}
            <div className="overlay">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === "image" ? (
              <img src={selectedItem.src} alt={selectedItem.title} />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;