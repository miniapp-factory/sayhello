"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "./logo";

const sentence = "Hello Base, Mini App Factory created by OpenxAi";
const words = sentence.split(" ");

export default function WordDisplay() {
  const [index, setIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (showPrompt) {
      setShowPrompt(false);
      return;
    }
    setIndex((prev) => Math.min(prev + 1, words.length));
  };

  useEffect(() => {
    if (index === words.length) {
      setShowConfetti(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  }, [index]);

  const reset = () => {
    setIndex(0);
    setShowPrompt(true);
    setShowConfetti(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-4"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {showPrompt && (
        <div className="text-2xl font-semibold">Click Here</div>
      )}
      {!showPrompt && (
        <div className="text-2xl font-semibold">
          {words.slice(0, index).join(" ")}
        </div>
      )}
      <Logo currentIndex={index} totalWords={words.length} />
      {showConfetti && (
        <div className="mt-4 text-4xl">🎉🎉🎉</div>
      )}
      {showConfetti && (
        <button
          className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded"
          onClick={reset}
        >
          Repeat
        </button>
      )}
      <audio ref={audioRef} src="/applause.mp3" preload="auto" />
    </div>
  );
}
