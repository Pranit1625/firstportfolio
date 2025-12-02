// src/pages/BlogPost.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./BlogPost.css";

// ---------- Photography assignment blogs ----------

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

// ---------- Stik-ie Tape video blog images ----------
import stikieBtsProps from "../assets/blog-images/stikie_bts_props.jpeg";
import stikieBtsCameraRoom from "../assets/blog-images/stikie_bts_camera_room.jpeg";
import stikieBtsVfx from "../assets/blog-images/stikie_bts_vfx.jpg";
import stikieBtsOutdoor from "../assets/blog-images/stikie_bts_outdoor.jpeg";
import stikieTeam from "../assets/blog-images/stikie_team.jpg";

type BlogId = "headshot" | "aesthetic" | "photography" | "stikie";

interface BlogEntry {
  title: string;
  date: string;
  paragraphs: string[];
  images: { src: string; caption: string }[];
  videoUrl?: string; // optional – only used for the Stik-ie Tape blog
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
          "Basic panel adjustments in Camera Raw: exposure, contrast, highlights, shadows, whites, blacks, texture and vibrance balanced for a clean look.",
      },
      {
        src: editingScreenshot2,
        caption:
          "Colour grading for midtones, shadows and highlights to achieve natural but vibrant skin tones.",
      },
      {
        src: editingScreenshot3,
        caption:
          "Brightness / Contrast layer applied to soften harsh tonal transitions and fine-tune overall contrast.",
      },
      {
        src: editingScreenshot4,
        caption:
          "Exposure adjustment layer to control highlights and keep the lighting consistent across the portrait.",
      },
    ],
  },

  aesthetic: {
    title: "Aesthetic Landscape Photography",
    date: "16 November 2025",
    paragraphs: [
      "These two aesthetic landscape shots explore calm tones, depth and atmospheric lighting.",
      "I aimed for natural colour grading with subtle contrast to preserve the peaceful mood and softness of the scene.",
    ],
    images: [
      {
        src: landscape1,
        caption:
          "Aesthetic Landscape 1 — balanced composition with warm tones and a gentle sense of depth.",
      },
      {
        src: landscape2,
        caption:
          "Aesthetic Landscape 2 — captured during golden hour to emphasise soft light and relaxed atmosphere.",
      },
    ],
  },

  photography: {
    title: "My Passion: Photography",
    date: "16 November 2025",
    paragraphs: [
      "Photography is my main creative passion. I love capturing expressions, emotions and the beauty of natural light.",
      "The portrait image shows my interest in character-based photos, while the sunset at UL captures mood, timing and everyday atmosphere.",
    ],
    images: [
      {
        src: portrait,
        caption:
          "Portrait photograph expressing my interest in people, storytelling and controlled lighting.",
      },
      {
        src: sunsetUL,
        caption:
          "Sunset at UL campus — captured for its warm atmosphere, timing and layered silhouettes.",
      },
    ],
  },

  stikie: {
    title: "Behind the Scenes of Our “Stik-ie Tape” Advertisement",
    date: "30 November 2025",
    // New HD YouTube embed URL
    videoUrl: "https://www.youtube.com/embed/ig9jZU4F1Nw",
    paragraphs: [
      "For this video production assignment, our group of three created a 1 minute 24 second advertisement for Stik-ie Tape. We wanted a light-hearted but visually strong concept that proved we understood planning, filming and post-production. The whole idea revolves around a blackhole drawn on a simple sheet of paper, held in place by tape, which secretly acts as a portal.",
      "In the story, the main character discovers that anything placed on this drawn blackhole drops through instantly. She starts by experimenting with smaller objects, then places the page on the fridge door to grab a 7UP bottle, and later sticks it onto the TV screen to reach the scene she sees on display. In the big moment she tries to fully step into the TV world—but because it’s held with weak, unreliable tape, the paper falls off and she ends up stuck inside the television. The closing message is clear: the problem wasn’t the magic, it was the tape. Cheap tape isn’t strong enough to hold a universe—Stik-ie Tape is presented as the reliable alternative.",
      "Our roles were clearly defined while still overlapping in creative decisions. Srushti performed as the main actor and also managed props on set. Manthan directed the shoot and operated the camera, planning framing, angles and movements. My role, as Pranit Mahamuni, was to take ownership of SFX and visual effects, handle the full post-production workflow, and write this blog to document the project on my portfolio website.",
      "All three of us worked together on the practical side too: preparing the blackhole props, cutting circular sheets and testing marker thickness, so the design would read clearly on camera and be easy to key out later in compositing. We shot indoors for the fridge and TV scenes, where we could control lighting, and outdoors for a wider establishing shot that gives the story a more cinematic sense of space.",
      "In post-production I focused on building a consistent visual style across every shot. I handled colour correction and exposure balancing so that footage from different locations still felt like one world, applied stabilisation where needed, refined the pacing with smooth transitions, and added sound effects and music to enhance the comedy. I also used slow-motion in selected moments for emphasis and overlaid text where it helped communicate the idea quickly.",
      "The blackhole portal effect itself was created in Adobe After Effects. I used masking, feathering and blending modes to integrate the graphic into the live-action footage, and tracked the movement of the paper in each shot so the portal stayed locked in place. Getting this right was crucial, because the whole concept depends on the portal feeling believable and physically attached to the page.",
      "Finally, I synced the audio tightly to every action and made sure the exported file stayed under the 25MB limit required for submission. Seeing the finished ad play back in high definition after all the late-night compositing sessions was really rewarding.",
      "Overall, this project helped us combine imaginative storytelling with technical production skills. For me personally, it was a chance to show what I can do as a VFX-focused editor—from designing a visual concept and preparing props, to compositing effects and polishing the final cut. It’s exactly the kind of work I want potential employers to see when they visit my portfolio.",
    ],
    images: [
      {
        src: stikieBtsVfx,
        caption:
          "BTS 1 – My editing workspace (me, Pranit Mahamuni) while compositing the blackhole in After Effects and syncing cuts to music and sound effects.",
      },
      {
        src: stikieBtsProps,
        caption:
          "BTS 2 – All three of us preparing the blackhole props on the floor, cutting circular sheets and testing marker thickness.",
      },
      {
        src: stikieBtsCameraRoom,
        caption:
          "BTS 3 – Indoor camera setup with Manthan adjusting the tripod while we plan how the blackhole will interact with real objects.",
      },
      {
        src: stikieBtsOutdoor,
        caption:
          "BTS 4 – Outdoor scene where Manthan directs Shrushti during the field shot to give the story a wider, cinematic moment.",
      },
      {
        src: stikieTeam,
        caption:
          "BTS 5 – Final team photo: Manthan (Director & Editor), Shrushti (Actor) and me, Pranit (SFX & VFX Editor, Blog Writer).",
      },
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

      {/* Optional YouTube video embed for Stik-ie Tape blog */}
      {blog.videoUrl && (
        <div className="blogpost-video-section">
          <h2 className="blogpost-subheading">Advertisement Video</h2>
          <div className="blogpost-video-wrapper">
            <iframe
              src={blog.videoUrl}
              title={blog.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

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