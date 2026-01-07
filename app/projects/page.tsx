"use client";

import ProjectGrid from "@/components/ProjectGrid";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-24 px-4 md:px-8 lg:px-12 relative min-h-screen">
      <div className="max-w-[1510px] mx-auto">
        {/* Section Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <h1 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.25rem] font-medium mb-6 leading-tight" style={{ color: '#121212' }}>
              <span>All</span>
              <span> Apps</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-light" style={{ color: '#121212' }}>
              A comprehensive collection of our mobile applications
            </p>
          </div>
        </ScrollAnimation>

        {/* Project Grid */}
        <ProjectGrid featuredOnly={false} />
      </div>
    </section>
  );
}

