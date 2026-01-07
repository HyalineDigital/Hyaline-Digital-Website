"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Mail } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="bg-dark-primary">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        {/* Background Shader - Full width */}
        <div 
          className="absolute top-0 h-full z-0"
          style={{
            left: '0',
            right: '0',
            width: '100vw',
            marginLeft: 'calc((100% - 100vw) / 2)',
            marginRight: 'calc((100% - 100vw) / 2)',
            borderRadius: '10px',
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          >
            <source src="/videos/bokeh_gradient_shape_stack_remix_remix.webm" type="video/webm" />
          </video>
        </div>
        
        {/* Content Container */}
        <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 relative flex-1 flex items-center justify-center z-20">
          {/* Content */}
          <div className="text-center relative">
            <motion.h1 
              className="text-[1.7rem] sm:text-[2.125rem] md:text-[2.55rem] lg:text-[3.4rem] mb-3 leading-tight px-2 sm:px-0"
              style={{ fontFamily: "'Google Sans Flex', sans-serif", fontWeight: 800 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
              }}
            >
              <motion.span 
                className="inline-block"
                style={{ color: '#121212' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hyaline
              </motion.span>
              {" "}
              <motion.span 
                className="inline-block"
                style={{ color: '#121212' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Digital
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-[1.0625rem] md:text-[1.275rem] lg:text-[1.59375rem] font-light mb-3 px-2 sm:px-0"
              style={{ color: '#121212' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5
              }}
            >
              Mobile App Development Company
            </motion.p>
            <motion.div 
              className="text-sm sm:text-[0.95625rem] md:text-[1.0625rem] leading-relaxed font-light text-center px-4 sm:px-6"
              style={{ color: '#121212' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1],
                delay: 2.2
              }}
            >
              {/* Mobile: Static text on two lines */}
              <div className="flex flex-col items-center justify-center md:hidden">
                <span style={{ color: '#121212' }}>Building innovative mobile applications</span>
                <span className="mt-1" style={{ color: '#121212' }}>that transform ideas into exceptional user experiences.</span>
              </div>
              
              {/* Desktop: Rotating text */}
              <div className="hidden md:flex flex-row items-center justify-center gap-0 sm:inline-flex flex-wrap sm:flex-nowrap max-w-full">
                <span className="whitespace-nowrap" style={{ color: '#121212' }}>Building</span>
                <span className="inline-block min-w-[55px] md:min-w-[64px] text-center sm:ml-1 max-w-[calc(100%-2rem)] sm:max-w-none overflow-visible">
                  <FlipWords
                    words={[
                      "innovative mobile applications",
                      "scalable iOS apps",
                      "powerful Android apps",
                      "cross-platform solutions",
                      "cutting-edge mobile experiences",
                    ]}
                    duration={3000}
                    className="px-0"
                  />
                </span>
                <span className="text-center sm:text-left whitespace-normal" style={{ color: '#121212' }}> that transform ideas into exceptional user experiences.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Apps Section */}
      <section id="apps" className="pt-12 pb-12 md:pt-16 md:pb-16 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-[1500px] mx-auto">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.25rem] font-black mb-[10px] leading-tight" style={{ color: '#121212' }}>
                <span>Featured</span>
                <span> Apps</span>
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto font-light" style={{ color: '#121212' }}>
                A curated selection of our mobile applications
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <Carousel
              items={(() => {
                const featuredProjects = projects.filter((p) => p.featured);
                const firstProject = featuredProjects[0];
                
                if (!firstProject) return [];
                
                return [
                  <Card
                    key={firstProject.id}
                    card={{
                      src: firstProject.homepageImage || firstProject.image,
                      title: firstProject.title,
                      category: firstProject.category,
                      content: firstProject.description ? <p>{firstProject.description}</p> : null,
                      id: firstProject.id,
                    }}
                    index={0}
                    layout={false}
                  />
                ];
              })()}
              initialScroll={0}
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-[1500px] mx-auto">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.25rem] font-black mb-[10px] leading-tight" style={{ color: '#121212' }}>
                Get in Touch With Us
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <button
                onClick={() => {
                  window.location.href = 'mailto:admin@clearcloset.app';
                }}
                className="relative inline-flex items-center gap-4 text-base font-medium px-5 py-2.5 rounded-full border border-gray-300/30 bg-white/80 hover:bg-white hover:border-gray-400/50 transition-all cursor-pointer"
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
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Contact Us</span>
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}

