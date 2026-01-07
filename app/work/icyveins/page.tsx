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

export default function IcyVeinsPage() {
  const project = projects.find((p) => p.id === "icyveins") || projects[0];
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
      <section className="pt-32 pb-12 md:pt-28 md:pb-16 px-9 md:px-8 lg:px-12 relative min-h-screen">
        <div className="max-w-[1500px] mx-auto">
          {/* Back Button */}
          <ScrollAnimation direction="right" delay={0.1}>
            <Link
              href="/#work"
              className="relative inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-300/10 bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/15 hover:border-2 transition-all mb-8"
            >
              <GlowingEffect
                disabled={false}
                proximity={50}
                spread={30}
                blur={0}
                borderWidth={3}
                movementDuration={1.5}
              />
              <ArrowLeft className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Back to Work</span>
            </Link>
          </ScrollAnimation>

          {/* Header Image */}
          <ScrollAnimation direction="up" delay={0.15}>
            <div 
              className="mb-8 w-full cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(["/images/portfolio/icy-port-header.png"], 0)}
            >
              <Image
                src="/images/portfolio/icy-port-header.png"
                alt="Icy Veins Header"
                width={1500}
                height={1000}
                className="w-full h-auto rounded-[5px]"
                priority
              />
            </div>
          </ScrollAnimation>

          {/* Project Header */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mb-10">
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
                <span className="text-white">{project.title}</span>
              </motion.h1>
              {/* Release Date */}
              {project.timeline && (() => {
                const yearMatch = project.timeline.match(/\b(20\d{2})\b/g);
                const year = yearMatch ? yearMatch[yearMatch.length - 1] : null;
                return year ? (
                  <div className="mb-6">
                    <span className="text-gray-400 font-medium text-sm block mb-2">Release Date</span>
                    <p className="text-gray-300 text-lg font-light">{year}</p>
                  </div>
                ) : null;
              })()}
            </div>
          </ScrollAnimation>

          {/* The Hook (Executive Summary) */}
          <ScrollAnimation direction="up" delay={0.3}>
            <div className="mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Overview</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                    As the Lead UX & Product Designer for Enthusiast Gaming, I directed the design strategy and product execution for a diverse portfolio of high-traffic gaming properties, including Tabstats, Typeracer, MathGames, Addicting Games, and Icy Veins. My responsibilities extended well beyond visual aesthetics; I was tasked with modernizing legacy architectures, integrating complex cross-platform user flows, and identifying new monetization verticals for a network of web properties serving over 4 million daily active users.
                  </p>
                  <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                    The culmination of my tenure was spearheaded by the comprehensive digital transformation of Icy Veins. I led the initiative to bring the platform into the modern era, reconciling over a decade of technical debt to transform a text-heavy legacy database into a high-performance, multi-title content engine serving 7 million Monthly Active Users (MAU).
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>


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


