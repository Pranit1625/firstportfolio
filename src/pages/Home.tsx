// src/pages/Home.tsx
import HeroSection from "../components/HeroSection";
import LogoLoop from "../components/LogoLoop";
import MyServices from "../components/MyWorkSection";
import AboutMe from "../components/AboutMe";

const creativeTools = [
  { src: `${import.meta.env.BASE_URL}logos/photoshop.png`, alt: "Photoshop" },
  { src: `${import.meta.env.BASE_URL}logos/illustrator.png`, alt: "Illustrator" },
  { src: `${import.meta.env.BASE_URL}logos/indesign.png`, alt: "InDesign" },
  { src: `${import.meta.env.BASE_URL}logos/premier.png`, alt: "Premiere Pro" },
  { src: `${import.meta.env.BASE_URL}logos/aftereffects.png`, alt: "After Effects" },
  { src: `${import.meta.env.BASE_URL}logos/Maya.png`, alt: "Maya" },
  { src: `${import.meta.env.BASE_URL}logos/krita.png`, alt: "Krita" },
  { src: `${import.meta.env.BASE_URL}logos/flipaclip.png`, alt: "FlipaClip" },
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