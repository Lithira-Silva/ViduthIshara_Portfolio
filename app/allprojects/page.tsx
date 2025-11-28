"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Plus, Minus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

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
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const fromSection = searchParams.get('from') || 'hero';

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
          <Link href={fromSection === 'projects' ? '/#projects' : '/#hero'}>
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
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              layout
              className="group relative"
            >
              {/* Card */}
              <motion.div
                layout
                className={`
                relative rounded-2xl overflow-hidden
                bg-gradient-to-br ${project.gradient}
                backdrop-blur-xl border-2 ${project.borderColor}
                transition-all duration-500
                hover:shadow-gold-glow
                ${expandedProject === index ? 'row-span-2' : ''}
              `}
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  {/* Project Number Overlay */}
                  <div className="absolute top-4 right-4 text-3xl font-heading font-bold text-gold/20 group-hover:text-gold/30 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 space-y-6">
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

                  {/* Endorsement Section - Only for SpinVision */}
                  {project.endorsement && (
                    <div className="pt-4 mt-4 border-t border-gold/15">
                      <button
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                        className="w-full flex items-center justify-between gap-3 text-left group/endorsement"
                      >
                        <span className="text-gold font-bold text-xs uppercase tracking-widest">
                          {project.endorsement.title}
                        </span>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover/endorsement:bg-gold/20 transition-colors">
                          {expandedProject === index ? (
                            <Minus className="w-3.5 h-3.5 text-gold" />
                          ) : (
                            <Plus className="w-3.5 h-3.5 text-gold" />
                          )}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {expandedProject === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <blockquote className="text-foreground/80 italic text-sm leading-relaxed border-l-2 border-gold/50 pl-4 mt-3">
                              "{project.endorsement.quote}"
                            </blockquote>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
