"use client";

import Image from "next/image";

export default function Logo({
  currentIndex,
  totalWords,
}: {
  currentIndex: number;
  totalWords: number;
}) {
  const opacity = totalWords === 0 ? 0 : currentIndex / totalWords;
  return (
    <Image
      src="/logo.png"
      alt="BASE logo"
      width={200}
      height={200}
      style={{ opacity }}
    />
  );
}
