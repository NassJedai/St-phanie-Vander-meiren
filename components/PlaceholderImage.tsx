"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  gradient?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  fit?: "cover" | "contain";
};

/**
 * A smart image: renders an actual <Image> if the src exists,
 * otherwise an elegant gradient placeholder with a small caption
 * — so the site ships complete even before photo assets are added.
 */
export default function PlaceholderImage({
  src,
  alt,
  label,
  className = "",
  gradient = "linear-gradient(160deg, #1c2028 0%, #0a0a10 100%)",
  fill = true,
  priority,
  sizes,
  width,
  height,
  fit = "cover",
}: Props) {
  const [errored, setErrored] = useState(false);

  if (!errored) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          priority={priority}
          onError={() => setErrored(true)}
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden flex items-end justify-center pb-5 ${className}`}
      style={{ background: gradient }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 atmosphere-stars opacity-30" />
      <div className="relative z-10 px-6 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          {label ?? alt}
        </div>
      </div>
    </div>
  );
}
