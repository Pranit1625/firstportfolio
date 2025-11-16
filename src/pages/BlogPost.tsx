// src/pages/BlogPost.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./BlogPost.css";

// Import all images from assets
import headshot from "../assets/blog-images/headshot.png";
import editingScreenshot from "../assets/blog-images/editingScreenshot.png";
import landscape1 from "../assets/blog-images/landscape1.jpg";
import landscape2 from "../assets/blog-images/landscape2.jpg";
import portrait from "../assets/blog-images/portrait.jpg";
import sunsetUL from "../assets/blog-images/sunsetUL.jpg";

type BlogId = "headshot" | "aesthetic" | "photography";

interface BlogEntry {
  title: string;
  date: string;
  paragraphs: string[];
  images: { src: string; caption: string }[];
}

// All your 3 blogs here
const BLOGS: Record<BlogId, BlogEntry> = {
  headshot: {
    title: "Professional Headshot – Editing Breakdown",
    date: "15 November 2025",
    paragraphs: [
      "This professional headshot was captured with the goal of creating a clean, confident and modern look suitable for my portfolio and professional platforms.",
      "In Adobe Photoshop, I focused on enhancing the lighting, skin texture and overall clarity, while keeping the result natural and true to how I look.",
      "Tools used include the Dodge Tool, Healing Brush and Camera Raw adjustments to refine the facial structure, balance the exposure and remove minor distractions.",
    ],
    images: [
      {
        src: headshot,
        caption: "Formal business headshot taken with controlled lighting and post-processing. The headshot conveys a clean, professional look for academic and corporate use.",
      },
      {
        src: editingScreenshot,
        caption:
          "Photoshop editing settings showing exposure, contrast and local adjustments used.",
      },
    ],
  },

  aesthetic: {
    title: "Aesthetic Landscape Photography",
    date: "16 November 2025",
    paragraphs: [
      "These two landscape photos reflect my interest in capturing calm, atmospheric scenes with simple but strong compositions.",
      "My main focus was on natural light, depth and how the colors worked together to create a peaceful aesthetic.",
      "In editing, I used subtle contrast and vibrance adjustments to enhance the mood without over-saturating the image.",
    ],
    images: [
      {
        src: landscape1,
        caption: "Aesthetic landscape shot 1, focusing on depth and leading lines.",
      },
      {
        src: landscape2,
        caption: "Aesthetic landscape shot 2, with balanced sky and foreground.",
      },
    ],
  },

  photography: {
    title: "My Passion: Photography",
    date: "16 November 2025",
    paragraphs: [
      "Photography is my main creative passion. It allows me to freeze real moments and turn them into visual stories.",
      "The portrait image represents how I enjoy working with people, expressions and light to create character-focused images.",
      "The sunset photo was captured at the University of Limerick. It represents how I love observing light, timing and atmosphere in daily life.",
    ],
    images: [
      {
        src: portrait,
        caption: "Portrait photograph representing my interest in people and expression.",
      },
      {
        src: sunsetUL,
        caption: "Sunset at UL campus, capturing warm tones and mood.",
      },
    ],
  },
};

const BlogPost = () => {
  const params = useParams();
  const id = params.id as BlogId | undefined;

  const blog = id ? BLOGS[id] : undefined;
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  if (!blog) {
    return <div className="not-found">Blog not found.</div>;
  }

  return (
    <div className="blogpost-container">
      <h1 className="blogpost-title">{blog.title}</h1>
      <p className="blogpost-date">{blog.date}</p>

      {/* IMAGES (in medium boxes, clickable) */}
      <div className="blogpost-image-grid">
        {blog.images.map((img, index) => (
          <div className="blogpost-image-wrapper" key={index}>
            <img
              src={img.src}
              alt={img.caption}
              className="blogpost-thumb"
              onClick={() => setFullscreenSrc(img.src)}
            />
            <p className="blogpost-image-caption">{img.caption}</p>
          </div>
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="blogpost-text">
        {blog.paragraphs.map((para, index) => (
          <p className="blogpost-content" key={index}>
            {para}
          </p>
        ))}
      </div>

      {/* FULLSCREEN OVERLAY */}
      {fullscreenSrc && (
        <div
          className="fullscreen-overlay"
          onClick={() => setFullscreenSrc(null)}
        >
          <img src={fullscreenSrc} className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

export default BlogPost;