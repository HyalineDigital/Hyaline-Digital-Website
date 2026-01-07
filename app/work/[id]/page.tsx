"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Get header image - use project.image or first image from project.images
  const headerImage = project.image || (project.images && project.images.length > 0 ? project.images[0] : null);
  // Filter out header image from images array to avoid duplication
  const displayImages = project.images?.filter(img => img !== headerImage) || [];
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Collect all images for lightbox navigation
  const allImages = headerImage 
    ? [headerImage, ...displayImages]
    : displayImages;

  return (
    <main className="bg-dark-primary">
      <section className="pt-32 pb-12 md:pt-28 md:pb-16 px-9 md:px-8 lg:px-12 relative min-h-screen">
        <div className="max-w-[1500px] mx-auto">
          {/* Back Button */}
          <ScrollAnimation direction="right" delay={0.1}>
            <Link
              href="/#apps"
              className="relative inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gray-300/10 bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/15 hover:border-2 transition-all mb-8"
              style={{ color: '#121212' }}
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
              <span className="relative z-10">Back to Apps</span>
            </Link>
          </ScrollAnimation>

          {/* Header Image */}
          {headerImage && (
            <ScrollAnimation direction="up" delay={0.15}>
              <div 
                className="mb-8 w-full cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox(allImages, 0)}
              >
                <Image
                  src={headerImage}
                  alt={`${project.title} Header`}
                  width={1500}
                  height={1000}
                  className="w-full h-auto rounded-[5px]"
                  priority
                />
              </div>
            </ScrollAnimation>
          )}

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
                <span style={{ color: '#121212' }}>{project.title}</span>
              </motion.h1>
              {/* Release Date */}
              {project.timeline && (() => {
                const yearMatch = project.timeline.match(/\b(20\d{2})\b/g);
                const year = yearMatch ? yearMatch[yearMatch.length - 1] : null;
                return year ? (
                  <div className="mb-6">
                    <span className="font-medium text-sm block mb-2" style={{ color: '#121212' }}>Release Date</span>
                    <p className="text-lg font-light" style={{ color: '#121212' }}>{year}</p>
                  </div>
                ) : null;
              })()}
            </div>
          </ScrollAnimation>

          {/* Overview */}
          {(project.description || project.role) && (
            <ScrollAnimation direction="up" delay={0.3}>
              <div className="mb-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black mb-6" style={{ color: '#121212' }}>Overview</h2>
                  <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                    {project.description || project.role}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          )}


          {/* Project Links */}
          {(project.links?.caseStudy || project.links?.repo || (project.links?.live && project.id !== "icyveins")) && (
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="mb-10">
                <div className="flex flex-wrap gap-4">
                  {project.links?.caseStudy && (
                    <a
                      href={project.links.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-2 text-base font-medium px-5 py-2.5 rounded-full border border-gray-300/10 bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/5 hover:border-2 transition-all"
                      style={{ color: '#121212' }}
                    >
                      <GlowingEffect
                        disabled={false}
                        proximity={50}
                        spread={30}
                        blur={0}
                        borderWidth={3}
                        movementDuration={1.5}
                      />
                      <span className="relative z-10">View Case Study</span>
                      <ExternalLink className="w-4 h-4 relative z-10" />
                    </a>
                  )}
                  {project.links?.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-2 text-base font-medium px-5 py-2.5 rounded-full border border-gray-300/10 bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/5 hover:border-2 transition-all"
                      style={{ color: '#121212' }}
                    >
                      <GlowingEffect
                        disabled={false}
                        proximity={50}
                        spread={30}
                        blur={0}
                        borderWidth={3}
                        movementDuration={1.5}
                      />
                      <span className="relative z-10">View Repository</span>
                      <ExternalLink className="w-4 h-4 relative z-10" />
                    </a>
                  )}
                  {project.links?.live && project.id !== "icyveins" && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-2 text-base font-medium px-5 py-2.5 rounded-full border border-gray-300/10 bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/5 hover:border-2 transition-all"
                      style={{ color: '#121212' }}
                    >
                      <GlowingEffect
                        disabled={false}
                        proximity={50}
                        spread={30}
                        blur={0}
                        borderWidth={3}
                        movementDuration={1.5}
                      />
                      <span className="relative z-10">View Live Site</span>
                      <ExternalLink className="w-4 h-4 relative z-10" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          )}

          {/* Additional Images */}
          {displayImages.length > 0 && project.id !== "icyveins" && project.id !== "tabstats-dashboard" && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayImages.map((image, index) => {
                  const imageIndexInAll = headerImage ? index + 1 : index;
                  return (
                    <ScrollAnimation
                      key={index}
                      direction="up"
                      delay={0.8 + index * 0.1}
                    >
                      <div 
                        className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(allImages, imageIndexInAll)}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </ScrollAnimation>
                  );
                })}
              </div>
            </div>
          )}

          {/* Image Lightbox */}
          <ImageLightbox
            images={lightboxImages}
            currentIndex={lightboxIndex}
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            alt={project.title}
          />
        </div>
      </section>
    </main>
  );
}
