// src/components/LogoLoop.tsx
import React, { useEffect, useMemo, useRef } from "react";
import "./LogoLoop.css";

export type LogoItem = {
  src: string;
  alt?: string;
  href?: string;
};

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // pixels per second
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 60, // pixels/sec — increase for faster, decrease for slower
  direction = "left",
  logoHeight = 40,
  gap = 32,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = "#fff",
  ariaLabel = "Logo loop",
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // duplicate logos to allow seamless scroll
  const doubled = useMemo(() => [...logos, ...logos], [logos]);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    // compute total width of one sequence (half of doubled)
    const seqWidth = track.scrollWidth / 2 || 0;

    let pos = 0; // px
    let lastTime = performance.now();
    let raf = 0;
    let isPaused = false;

    // named handlers so removal works
    const handleMouseEnter = () => {
      if (pauseOnHover) isPaused = true;
    };
    const handleMouseLeave = () => {
      if (pauseOnHover) {
        isPaused = false;
        lastTime = performance.now();
      }
    };

    if (pauseOnHover) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    const animate = (time: number) => {
      if (!isPaused) {
        const dt = Math.max(0, time - lastTime) / 1000; // seconds
        lastTime = time;
        const distance = speed * dt; // pixels to move this frame

        pos += direction === "left" ? -distance : distance;

        // clamp/reset to keep value in manageable range
        if (seqWidth > 0) {
          // wrap when we've moved one sequence width
          if (Math.abs(pos) >= seqWidth) {
            // modulo but keep sign/direction
            pos = pos % seqWidth;
          }
        }

        // apply transform
        track.style.transform = `translate3d(${pos}px, 0, 0)`;
      } else {
        lastTime = time;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      if (pauseOnHover) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [speed, direction, pauseOnHover, logos]);

  // CSS custom properties applied inline for easy tuning
  const cssVars: React.CSSProperties = {
    ["--logoloop-gap" as any]: `${gap}px`,
    ["--logoloop-logoHeight" as any]: `${logoHeight}px`,
    ["--logoloop-fadeColor" as any]: fadeOutColor,
    ...style,
  };

  const rootClass = [
    "logoloop",
    fadeOut ? "logoloop--fade" : "",
    scaleOnHover ? "logoloop--scale-hover" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      className={rootClass}
      style={cssVars}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="logoloop__track" ref={trackRef}>
        <div className="logoloop__list">
          {doubled.map((logo, i) => (
            <div className="logoloop__item" key={i}>
              {logo.href ? (
                <a
                  className="logoloop__link"
                  href={logo.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={logo.src} alt={logo.alt ?? ""} draggable={false} />
                </a>
              ) : (
                <img src={logo.src} alt={logo.alt ?? ""} draggable={false} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoLoop;