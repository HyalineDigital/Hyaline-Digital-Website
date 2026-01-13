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

export default function MirraMatchPage() {
  const project = projects.find((p) => p.id === "mirramatch") || projects[0];
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
                  src="/images/mirramatch/mirra-match-icon.png"
                  alt="MirraMatch Icon"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              
              {/* Title and Release Date */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <motion.h1 
                    className="text-[1.7rem] sm:text-[2.125rem] md:text-[2.55rem] lg:text-[3.4rem] font-semibold leading-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2
                    }}
                  >
                    <span style={{ color: '#121212' }}>MirraMatch</span>
                  </motion.h1>
                  {/* Privacy Policy Button */}
                  <Link
                    href="/work/mirramatch/privacy-policy"
                    className="relative inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/15 transition-all"
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
                    <span className="relative z-10">Privacy Policy</span>
                  </Link>
                </div>
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
                  Stop searching for the "perfect man"—generate them.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed mt-4" style={{ color: '#121212' }}>
                  MirraMatch is an AI-powered partner generator designed to create photorealistic images that look like they were taken right next to you. We don't just put a face in a photo; we analyze your specific style, lighting, and "vibe" to create a partner that truly complements you.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed mt-4" style={{ color: '#121212' }}>
                  Whether you're joining the viral "generate a man next to me" trend or just curious to see your "perfect match" based on your aesthetic, MirraMatch delivers results so realistic they'll have your followers doing a double-take.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* How It Works */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-black mb-6" style={{ color: '#121212' }}>How It Works</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#121212' }}>1. Upload a Selfie</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                    Snap a photo or pick one from your library.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#121212' }}>2. AI Analysis</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                    Our engine scans your style markers—like fashion subculture, tattoos, piercings, and lighting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#121212' }}>3. Meet Your Match</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                    Watch as the AI generates a photorealistic partner who fits your world seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Key Features */}
          <ScrollAnimation direction="up" delay={0.5}>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-black mb-6" style={{ color: '#121212' }}>Key Features</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#121212' }}>Photorealistic Accuracy</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                    No "uncanny valley" here. Our engine ensures lighting, shadows, and all aspects match your original photo perfectly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#121212' }}>Customizable Vibes (Premium)</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                    Tailor your match's age, build, ethnicity, and style.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#121212' }}>Deep Backstories (Premium)</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                    Every match comes with a unique, AI-generated personality, backstory, and a zodiac sign.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#121212' }}>Style-Sync Technology</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                    Our AI recognizes your aesthetic and generates a partner with matching style markers (like tattoos or specific fashion subcultures).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#121212' }}>Seamless Sharing</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                    Save your favorites to your personal gallery and share them instantly to TikTok, Instagram, or Snapchat.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* MirraMatch Images */}
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "/images/mirramatch/Identify Your Vibe.jpg",
                "/images/mirramatch/Discover Your Perfect Match.jpg",
                "/images/mirramatch/Customize Your Match.jpg",
                "/images/mirramatch/Explore His Backstory.jpg",
              ].map((image, index) => {
                const allImages = [
                  "/images/mirramatch/Identify Your Vibe.jpg",
                  "/images/mirramatch/Discover Your Perfect Match.jpg",
                  "/images/mirramatch/Customize Your Match.jpg",
                  "/images/mirramatch/Explore His Backstory.jpg",
                ];
                return (
                  <ScrollAnimation
                    key={index}
                    direction="up"
                    delay={0.6 + index * 0.1}
                  >
                    <div 
                      className="relative w-full rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ height: '900px' }}
                      onClick={() => openLightbox(allImages, index)}
                    >
                      <Image
                        src={image}
                        alt={`MirraMatch - Image ${index + 1}`}
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

