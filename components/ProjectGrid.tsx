"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Apple, Smartphone } from "lucide-react";

interface ProjectGridProps {
  featuredOnly?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Format timeline to use 3-letter months
function formatTimeline(timeline?: string): string {
  if (!timeline) return "";
  
  const monthMap: { [key: string]: string } = {
    "January": "Jan",
    "February": "Feb",
    "March": "Mar",
    "April": "Apr",
    "May": "May",
    "June": "Jun",
    "July": "Jul",
    "August": "Aug",
    "September": "Sep",
    "October": "Oct",
    "November": "Nov",
    "December": "Dec",
  };

  let formatted = timeline;
  Object.keys(monthMap).forEach((fullMonth) => {
    const regex = new RegExp(fullMonth, "gi");
    formatted = formatted.replace(regex, monthMap[fullMonth]);
  });
  
  return formatted;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={itemVariants}
      className="project-card glass-card rounded-2xl group relative w-full"
      style={{ border: '1px solid rgba(18, 18, 18, 0.2)' }}
    >
      <GlowingEffect
        disabled={false}
        proximity={50}
        spread={30}
        blur={0}
        borderWidth={3}
        movementDuration={1.5}
      />
      <Link href={`/work/${project.id}`} className="block relative z-10">
        <div className="relative h-[200px] overflow-hidden rounded-t-2xl">
          <Image
            src={project.homepageImage || project.image}
            alt={project.title}
            fill
            className="project-image absolute inset-0 w-full h-full object-cover rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <h3 className="text-base sm:text-[1.05rem] md:text-[1.3125rem] font-medium mb-4 sm:mb-5 leading-tight break-words" style={{ color: '#121212' }}>
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100/50" style={{ color: '#121212' }}>
              <Apple className="w-3.5 h-3.5" />
              <span className="text-xs sm:text-sm font-medium">Apple iOS</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100/50" style={{ color: '#121212' }}>
              <Smartphone className="w-3.5 h-3.5" />
              <span className="text-xs sm:text-sm font-medium">Android</span>
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed font-light line-clamp-3 break-words">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectGrid({ featuredOnly = false }: ProjectGridProps) {
  const displayProjects = featuredOnly
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-5 w-full"
    >
      {displayProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}

