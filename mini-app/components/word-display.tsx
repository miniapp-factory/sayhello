"use client";

import { useState } from "react";
import Logo from "./logo";

const sentence = "Hello Base, Mini App Factory created by OpenxAi";
const words = sentence.split(" ");

export default function WordDisplay() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => Math.min(prev + 1, words.length));
  };

  return (
    <div
      className="flex flex-col items-center gap-4"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="text-2xl font-semibold">
        {words.slice(0, index).join(" ")}
      </div>
      <Logo currentIndex={index} totalWords={words.length} />
    </div>
  );
}
