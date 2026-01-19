"use client";

import Image from "next/image";
import { useEightBit } from "./EightBitProvider";

interface HeadshotImageProps {
  src: string;
  eightBitSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function HeadshotImage({
  src,
  eightBitSrc,
  alt,
  className = "object-cover",
  priority = false,
}: HeadshotImageProps) {
  const { isEightBit } = useEightBit();

  return (
    <Image
      src={isEightBit ? eightBitSrc : src}
      alt={alt}
      fill
      className={`${className} transition-opacity duration-300`}
      priority={priority}
    />
  );
}
