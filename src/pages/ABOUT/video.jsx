import React, { useRef, useState } from "react";
import VideoBg from "../../assets/images/video.mp4";

export default function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative pb-16 -mt-10 px-[240px]">
      <div
        className="flex justify-center max-w-[1000px] mx-auto relative cursor-pointer"
        onClick={togglePlayPause}
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={VideoBg}
          className="w-full h-screen object-cover rounded-xl shadow-lg"
          muted
        />

        {/* Overlay (only when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 rounded-xl transition"></div>
        )}

        {/* Play button (only when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-20 h-16 bg-red-700 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white transition">
              <div className="w-0 h-0 border-l-[28px] border-[#ffffff] border-y-[16px] border-y-transparent"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
