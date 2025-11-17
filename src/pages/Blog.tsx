// src/pages/Blog.tsx
import { useNavigate } from "react-router-dom";
import "./Blog.css";

// Import thumbnails for cards
import headshotThumb from "../assets/blog-images/headshot.png";
import landscapeThumb from "../assets/blog-images/landscape1.jpg";
import portraitThumb from "../assets/blog-images/portrait.jpg";

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: "headshot",
      title: "How I Edited My Professional Headshot",
      image: headshotThumb,
      date: "15 Nov 2025",
      category: "Photography",
      excerpt:
        "A breakdown of how I transformed a raw portrait into a clean professional headshot using Photoshop.",
    },
    {
      id: "aesthetic",
      title: "Aesthetic Landscape Photography",
      image: landscapeThumb,
      date: "16 Nov 2025",
      category: "Landscape",
      excerpt:
        "Two aesthetic landscape shots exploring natural lighting, symmetry, and atmosphere.",
    },
    {
      id: "photography",
      title: "My Passion for Photography",
      image: portraitThumb,
      date: "16 Nov 2025",
      category: "Personal Journey",
      excerpt:
        "Why photography inspires me, featuring a portrait and a sunset captured at UL.",
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blogs</h1>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div
            className="blog-card"
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <img src={blog.image} alt={blog.title} className="blog-card-img" />

            <div className="blog-card-content">
              <p className="blog-category">{blog.category}</p>
              <h2>{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <p className="blog-date">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;