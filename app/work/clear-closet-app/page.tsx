"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { projects } from "@/data/projects";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

export default function ClearClosetAppPage() {
  const project = projects.find((p) => p.id === "clear-closet-app") || projects[0];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="bg-dark-primary">
      <section className="pt-[calc(2rem+40px)] pb-12 md:pt-[calc(7rem+40px)] md:pb-16 px-9 md:px-8 lg:px-12 relative min-h-screen">
        <div className="max-w-[1500px] mx-auto">
          {/* Back Button */}
          <ScrollAnimation direction="right" delay={0.1}>
            <Link
              href="/#work"
              className="relative inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/15 transition-all mb-8"
              style={{ color: '#121212', border: '1px solid #121212' }}
            >
              <GlowingEffect
                disabled={false}
                proximity={50}
                spread={30}
                blur={0}
                borderWidth={3}
                movementDuration={1.5}
              />
              <ArrowLeft className="w-5 h-5 relative z-10" style={{ color: '#121212' }} />
              <span className="relative z-10">Back to Apps</span>
            </Link>
          </ScrollAnimation>

          {/* Project Header */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mb-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Icon */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/clear-closet/clear-closet-icon.png"
                  alt="Clear Closet Icon"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              
              {/* Title and Release Date */}
              <div className="flex-1">
                <motion.h1 
                  className="text-[1.7rem] sm:text-[2.125rem] md:text-[2.55rem] lg:text-[3.4rem] font-semibold mb-4 leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2
                  }}
                >
                  <span style={{ color: '#121212' }}>Clear Closet</span>
                </motion.h1>
                {/* Release Date */}
                <div className="mb-6">
                  <span className="font-medium text-sm block mb-2" style={{ color: '#121212' }}>Release Date</span>
                  <p className="text-lg font-light" style={{ color: '#121212' }}>2026</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* The Hook (Executive Summary) */}
          <ScrollAnimation direction="up" delay={0.3}>
            <div className="mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-6" style={{ color: '#121212' }}>Overview</h2>
                <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  Clear Closet is a mobile app that digitizes and organizes your wardrobe using AI. Users scan clothing with the built-in camera or select photos from their gallery, and the app automatically identifies categories (jackets, shirts, pants), extracts color palettes, detects fabric textures and patterns, and analyzes style vibes (casual, formal, sporty). The app tracks wear frequency, calculates cost-per-wear, and provides visual indicators for neglected items that fade over time. It includes intelligent style matching, seasonal wardrobe management, weather-integrated outfit planning, and a calendar outfit tracker. Benefits for users include financial awareness through cost-per-wear tracking, wardrobe optimization by identifying unused items, and sustainability by encouraging better use of existing clothes.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed mt-4" style={{ color: '#121212' }}>
                  The app gamifies wardrobe management with login streaks, visual feedback on neglected items, and smart notifications. Users can search and filter by category, color, season, or style, plan outfits based on weather forecasts, and maintain a complete style history. The AI-powered tagging reduces manual entry, and the local-first approach ensures privacy and fast performance. The app helps users make smarter purchasing decisions, maximize wardrobe value, and build better fashion habits through data-driven insights and intuitive visual cues.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Clear Closet Images */}
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "/images/clear-closet/AI-Powered Style Matching.png",
                "/images/clear-closet/Calendar Outfit Planner.png",
                "/images/clear-closet/Master Your Cost-Per-Wear.png",
                "/images/clear-closet/Your Entire Closet, Digitized.png",
              ].map((image, index) => {
                const allImages = [
                  "/images/clear-closet/AI-Powered Style Matching.png",
                  "/images/clear-closet/Calendar Outfit Planner.png",
                  "/images/clear-closet/Master Your Cost-Per-Wear.png",
                  "/images/clear-closet/Your Entire Closet, Digitized.png",
                ];
                return (
                  <ScrollAnimation
                    key={index}
                    direction="up"
                    delay={0.4 + index * 0.1}
                  >
                    <div 
                      className="relative w-full rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ height: '900px' }}
                      onClick={() => openLightbox(allImages, index)}
                    >
                      <Image
                        src={image}
                        alt={`Clear Closet - Image ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>



        </div>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        alt={project.title}
      />
    </main>
  );
}

