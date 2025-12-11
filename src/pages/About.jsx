import React from "react";
import HeroSection from "./ABOUT/herosection";
import Writeup from "./ABOUT/writeup";
import Vision from "./ABOUT/vision";
import Video from "./ABOUT/video";
import Key from "./ABOUT/key";
import Team from "./ABOUT/team";
import Team1 from "./ABOUT/team1";

export default function About() {
  return (
    <div>
      <div>
        <HeroSection />
        <Writeup />
        <Vision />
        <Video />
        <Key />
        <Team />
        <Team1 />
      </div>
    </div>
  );
}
