// src/pages/BlogPost.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./BlogPost.css";

// Professional Headshot Images
import headshot from "../assets/blog-images/headshot.png";
import editingScreenshot1 from "../assets/blog-images/editingScreenshot1.png";
import editingScreenshot2 from "../assets/blog-images/editingScreenshot2.png";
import editingScreenshot3 from "../assets/blog-images/editingScreenshot3.png";
import editingScreenshot4 from "../assets/blog-images/editingScreenshot4.png";

// Aesthetic Blog
import landscape1 from "../assets/blog-images/landscape1.jpg";
import landscape2 from "../assets/blog-images/landscape2.jpg";

// Passion Blog
import portrait from "../assets/blog-images/portrait.jpg";
import sunsetUL from "../assets/blog-images/sunsetUL.jpg";

type BlogId = "headshot" | "aesthetic" | "photography";

interface BlogEntry {
  title: string;
  date: string;
  paragraphs: string[];
  images: { src: string; caption: string }[];
}

const BLOGS: Record<BlogId, BlogEntry> = {
  headshot: {
    title: "Professional Headshot – Editing Breakdown",
    date: "15 November 2025",
    paragraphs: [
      "This professional headshot was captured to create a clean, confident and modern look suitable for my portfolio, resume and LinkedIn.",
      "The editing process focused on maintaining natural skin texture while improving lighting, contrast and color balance for a polished final result.",
      "Below are all the Camera Raw and Photoshop adjustments used, including Dodge, Burn and Healing Brush for fine retouching.",
    ],
    images: [
      {
        src: headshot,
        caption:
          "Final professional business headshot with controlled lighting and polished skin tones.",
      },
      {
        src: editingScreenshot1,
        caption:
          "Basic Panel adjustments: Exposure -0.35, Contrast +6, Highlights +5, Shadows -11, Whites -100, Blacks +22, Texture -20, Vibrance +11.",
      },
      {
        src: editingScreenshot2,
        caption:
          "Color Grading adjustments: Midtones, Shadows and Highlights refined for balanced skin tones. Blending set to 100, Balance -27.",
      },
      {
        src: editingScreenshot3,
        caption:
          "Brightness/Contrast layer applied: Brightness -5, Contrast -21. Helps soften harsh tonal transitions.",
      },
      {
        src: editingScreenshot4,
        caption:
          "Exposure layer: Exposure -0.39 to fine-tune highlights and bring uniform lighting across the portrait.",
      },
    ],
  },

  aesthetic: {
    title: "Aesthetic Landscape Photography",
    date: "16 November 2025",
    paragraphs: [
      "These two aesthetic landscape shots explore calm tones, depth and atmospheric lighting.",
      "I aimed for natural color grading with subtle contrast to preserve the peaceful mood.",
    ],
    images: [
      { src: landscape1, caption: "Aesthetic Landscape 1 — balanced composition with warm tones." },
      { src: landscape2, caption: "Aesthetic Landscape 2 — captured during golden hour for soft mood." },
    ],
  },

  photography: {
    title: "My Passion: Photography",
    date: "16 November 2025",
    paragraphs: [
      "Photography is my main creative passion. I love capturing expressions, emotions and the beauty of natural light.",
      "The portrait image shows my interest in character-based photos, while the sunset at UL captures mood and timing.",
    ],
    images: [
      { src: portrait, caption: "Portrait photograph expressing interest in people and storytelling." },
      { src: sunsetUL, caption: "Sunset at UL campus — captured for its warm atmosphere and timing." },
    ],
  },
};

const BlogPost = () => {
  const params = useParams();
  const id = params.id as BlogId | undefined;

  const blog = id ? BLOGS[id] : undefined;
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  if (!blog) return <div className="not-found">Blog not found.</div>;

  return (
    <div className="blogpost-container">
      <h1 className="blogpost-title">{blog.title}</h1>
      <p className="blogpost-date">{blog.date}</p>

      {/* Image Grid */}
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

      {/* Text */}
      <div className="blogpost-text">
        {blog.paragraphs.map((para, index) => (
          <p className="blogpost-content" key={index}>
            {para}
          </p>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenSrc && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenSrc(null)}>
          <img src={fullscreenSrc} className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

export default BlogPost;
