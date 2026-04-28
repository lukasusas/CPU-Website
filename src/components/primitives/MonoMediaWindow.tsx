import Image from "next/image";
import type { CSSProperties } from "react";

type MonoMediaWindowProps = {
  src: string;
  alt: string;
  aspect?: "4/3" | "3/2" | "16/10" | "1/1";
  priority?: boolean;
  className?: string;
};

export function MonoMediaWindow({
  src,
  alt,
  aspect = "4/3",
  priority = false,
  className
}: MonoMediaWindowProps) {
  return (
    <div className={`mono-media-window${className ? ` ${className}` : ""}`} style={{ "--aspect": aspect } as CSSProperties}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 900px) 100vw, 50vw"
        priority={priority}
        loading={priority ? "eager" : undefined}
      />
    </div>
  );
}
