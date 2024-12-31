"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "k0QlUtEUits";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const controls = useAnimation();

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById("video-section");
      if (!videoSection) return;

      const rect = videoSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Animation variants
  const animationVariants = {
    hidden: { opacity: 10, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      id="video-section"
      className={`relative h-[400px] w-full flex items-center justify-center bg-cover bg-center ${
        isPlaying ? "bg-black" : ""
      }`}
      style={!isPlaying ? { backgroundImage: `url(${thumbnailUrl})` } : {}}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      {!isPlaying ? (
        <Overlay onPlay={() => setIsPlaying(true)} />
      ) : (
        <VideoPlayer videoId={videoId} />
      )}
    </motion.div>
  );
}

// Overlay with thumbnail and play button
function Overlay({ onPlay }: { onPlay: () => void }) {
  return (
    <>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col items-center text-white">
        <h1 className="font-bold text-2xl">
          We’re the Best Organic Farm in the World
        </h1>
        <button
          onClick={onPlay}
          className="mt-5 flex items-center justify-center w-16 h-16 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100"
        >
          <span className="text-2xl">▶</span>
        </button>
      </div>
    </>
  );
}

// Embedded YouTube video player
function VideoPlayer({ videoId }: { videoId: string }) {
  return (
    <iframe
      className="absolute inset-0 w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
