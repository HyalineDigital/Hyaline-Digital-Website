"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BlurImage } from "./blur-image";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";
import Link from "next/link";

export type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  id?: string;
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative group cursor-pointer rounded-2xl overflow-hidden",
        layout ? "h-[400px] md:h-[500px]" : "h-[400px] md:h-[500px]"
      )}
      style={{
        zIndex: hovered ? 10 : 1,
        border: "1px solid rgba(18, 18, 18, 0.1)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlowingEffect
        disabled={false}
        proximity={50}
        spread={30}
        blur={0}
        borderWidth={3}
        movementDuration={1.5}
      />
      <Link href={card.id ? `/work/${card.id}` : "#"} className="block h-full w-full relative z-10">
        <motion.div 
          className="relative h-full w-full rounded-2xl overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <BlurImage
            src={card.src}
            alt={card.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const Carousel = ({
  items,
  initialScroll = 0,
}: {
  items: JSX.Element[];
  initialScroll?: number;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const checkScrollability = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    // Hide arrows if there's only one or two items (centered, no scrolling needed)
    if (items.length === 1 || items.length === 2) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  useEffect(() => {
    checkScrollability();
  }, [items.length]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);

    return () => {
      container.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  const isSingleItem = items.length === 1;
  const isTwoItems = items.length === 2;

  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        className={cn(
          "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4",
          (isSingleItem || isTwoItems) && "justify-center"
        )}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex-shrink-0",
              isSingleItem 
                ? "w-full max-w-[600px] md:max-w-[700px]" 
                : isTwoItems
                ? "w-[85%] md:w-[48%] lg:w-[45%]"
                : "w-[85%] md:w-[45%] lg:w-[35%]"
            )}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {!isSingleItem && !isTwoItems && canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {!isSingleItem && !isTwoItems && canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

