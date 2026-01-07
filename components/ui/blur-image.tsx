"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt?: string;
  height?: number | string;
  width?: number | string;
  className?: string;
}

export function BlurImage({
  src,
  alt = "Background of a beautiful view",
  height,
  width,
  className,
  ...rest
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ height, width }}
    >
      <Image
        src={src}
        alt={alt}
        fill={!height || !width}
        width={height && width ? (typeof width === "number" ? width : undefined) : undefined}
        height={height && width ? (typeof height === "number" ? height : undefined) : undefined}
        className={cn(
          "object-cover transition-all duration-300",
          isLoading ? "blur-sm scale-110" : "blur-0 scale-100"
        )}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  );
}

