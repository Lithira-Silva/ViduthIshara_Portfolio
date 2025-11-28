"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AllProjectsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Background Elements */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-red-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/#projects">
            <button className="group inline-flex items-center gap-2 text-foreground/60 hover:text-gold transition-colors">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <span className="text-gold font-medium tracking-wider text-sm uppercase">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] mt-4 mb-6">
            All Projects
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            A comprehensive collection of AI-powered systems, machine learning platforms, and data engineering solutions.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="h-[2px] w-20 bg-gold rounded-full" />
            <div className="h-[2px] w-10 bg-gold/50 rounded-full" />
            <div className="h-[2px] w-5 bg-gold/30 rounded-full" />
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`
                relative h-full p-8 rounded-2xl
                bg-gradient-to-br ${project.gradient}
                backdrop-blur-xl border-2 ${project.borderColor}
                transition-all duration-500
                hover:shadow-gold-glow
              `}>
                {/* Project Number */}
                <div className="absolute top-6 right-6 text-6xl font-heading font-bold text-gold/10 group-hover:text-gold/20 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gold font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <metric.icon className="w-4 h-4 text-gold" />
                        <span className="text-xs text-foreground/60 uppercase tracking-wide">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/5 border border-gold/20 text-xs text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Link */}
                  <button className="flex items-center gap-2 text-gold font-medium text-sm group/link pt-4">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
