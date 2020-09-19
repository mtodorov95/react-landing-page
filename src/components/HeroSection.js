import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function HeroSection() {
  return (
    <div className="heroSection">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className="heroSection__buttons">
        <Button
          className="button"
          buttonStyle="button__outline"
          size="button__large"
        >
          Get Started
        </Button>
        <Button
          className="button"
          buttonStyle="button__primary"
          size="button__large"
        >
          Watch trailer
          <PlayCircleFilledIcon className="heroSection_playIcon" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
