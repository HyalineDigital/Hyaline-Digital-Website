"use client";

import { Mail } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function AboutPage() {
  return (
    <section className="pt-[178px] pb-12 px-4 md:px-8 lg:px-12 relative min-h-screen" style={{ '--border-color': 'rgba(0, 0, 0, 0.15)' } as React.CSSProperties}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight" style={{ color: '#121212' }}>
              <span>About</span>
              <span> Us</span>
            </h1>
          </div>
        </ScrollAnimation>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="glass-card rounded-2xl p-8 md:p-12 bg-white" style={{ background: '#ffffff' }}>
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#121212' }}>
              Hyaline Digital is a leading mobile app development company specializing in creating innovative, scalable, and user-centric mobile applications. With years of experience in the industry, we transform ideas into exceptional digital experiences that drive business growth and user engagement.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#121212' }}>
              Our team of skilled developers and designers work collaboratively to deliver cutting-edge solutions across iOS, Android, and cross-platform technologies. We pride ourselves on staying ahead of industry trends and leveraging the latest tools and frameworks to build apps that stand out in today&apos;s competitive market.
            </p>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#121212' }}>
              From concept to launch, we guide our clients through every stage of the app development lifecycle, ensuring quality, performance, and user satisfaction at every step. Our commitment to excellence has helped numerous businesses achieve their mobile app goals and reach millions of users worldwide.
            </p>
            </div>
          </ScrollAnimation>

          {/* Contact CTA */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center bg-white" style={{ background: '#ffffff' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#121212' }}>
              Get in Touch With Us
            </h3>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <a
                href="mailto:admin@clearcloset.app"
                className="relative inline-flex items-center gap-4 text-base font-medium px-5 py-2.5 rounded-full border border-gray-300/30 bg-white/80 hover:bg-white hover:border-gray-400/50 transition-all"
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
              </a>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

