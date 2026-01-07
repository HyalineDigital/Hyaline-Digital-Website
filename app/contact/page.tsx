"use client";

import { Mail } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function ContactPage() {
  return (
    <section className="h-screen flex relative" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      {/* Background Shader - Full width, behind borders */}
      <div 
        className="absolute top-0 h-full z-0"
        style={{
          left: '0',
          right: '0',
          width: '100vw',
          marginLeft: 'calc((100% - 100vw) / 2)',
          marginRight: 'calc((100% - 100vw) / 2)'
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
      
      {/* Content Container - Centered */}
      <div className="max-w-4xl mx-auto w-full px-4 md:px-8 lg:px-12 relative flex-1 flex items-center justify-center z-20">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center" style={{ borderColor: 'rgba(255, 255, 255, 0.25)' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#121212' }}>
              Get in Touch With Us
            </h2>
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
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

