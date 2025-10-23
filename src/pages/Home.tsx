// src/pages/Home.tsx
import HeroSection from "../components/HeroSection";
import LogoLoop from "../components/LogoLoop";
import MyServices from "../components/MyWorkSection";
import AboutMe from "../components/AboutMe";

const creativeTools = [
  { src: "/logos/photoshop.png", alt: "Photoshop" },
  { src: "/logos/illustrator.png", alt: "Illustrator" },
  { src: "/logos/indesign.png", alt: "InDesign" },
  { src: "/logos/premier.png", alt: "Premiere Pro" },
  { src: "/logos/aftereffects.png", alt: "After Effects" },
  { src: "/logos/Maya.png", alt: "Maya" },
  { src: "/logos/krita.png", alt: "Krita" },
  { src: "/logos/flipaclip.png", alt: "FlipaClip" },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <section style={{ background: "#ffffffff", padding: "60px 0" }}>
  <LogoLoop
    logos={creativeTools}
    speed={50}
    logoHeight={70}
    gap={50}
    pauseOnHover={true}
  />
</section>

<MyServices /> 
<AboutMe />

    </>
  );
}