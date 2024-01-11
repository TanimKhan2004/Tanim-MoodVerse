import React from "react";
import "./Home.css";

export default function Home() {
  const textWithLineBreaks = `
    Embark on a journey of emotional self-discovery.
    Discover a dynamic space where your emotions guide you towards engaging, purposeful activities that enhance your well-being.
  `;

  return (
    <div className="home-container">
      <h1 className="heading">MOODVERSE</h1>
      {textWithLineBreaks.split('.').map((sentence, index) => (
        <p key={index}>{sentence.trim()}</p>
      ))}
    </div>
  );
}