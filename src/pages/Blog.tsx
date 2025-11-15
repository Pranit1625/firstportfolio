// src/pages/Blog.tsx
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <p className="blog-subtitle">
        Welcome to my blog section — here I share my creative work, assignments, and design explorations.
      </p>

      {/* 📌 Blog Post Card */}
      <div className="blog-post-card">
        <h2 className="post-title">Assignment 3 – Photography & Identity</h2>
        <p className="post-date">16 November 2025</p>

        <p className="post-desc">
          For this assignment, we were asked to explore identity through photography by presenting three images:
          a formal headshot, an aesthetic portrait, and an image that reflects our passion.
          My passion is photography, so I chose to represent that visually.
        </p>

        <div className="image-section">
          <h3>📸 Image 1 – Formal Headshot</h3>
          <img src="/images/assignment/headshot.jpg" alt="Formal Headshot" />

          <h3>🎨 Image 2 – Aesthetic Portrait</h3>
          <img src="/images/assignment/aesthetic.jpg" alt="Aesthetic Shot" />

          <h3>🔥 Image 3 – Passion (Photography)</h3>
          <img src="/images/assignment/passion.jpg" alt="Passion Image" />
        </div>

        <div className="editing-section">
          <h3>🛠 Editing Process (Photoshop)</h3>
          <p className="edit-description">
            Here is a screenshot of the editing process in Photoshop, showing how I adjusted the colors, tones, and overall mood.
          </p>

          <img src="/images/assignment/photoshop-edit.jpg" alt="Photoshop Editing Screenshot" />
        </div>
      </div>
    </div>
  );
};

export default Blog;