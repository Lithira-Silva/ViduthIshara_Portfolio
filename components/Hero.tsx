"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileDown, ArrowRight, Brain, Trophy, GraduationCap, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { 
    icon: GraduationCap, 
    text: "MSc Data Science & Analytics",
    label: "Advanced Degree",
    color: "gold"
  },
  { 
    icon: Trophy, 
    text: "AI-powered sports analytics projects (published research)",
    label: "Research Impact",
    color: "red"
  },
  { 
    icon: Brain, 
    text: "Computer vision + LLM engineering + end-to-end ML pipelines",
    label: "Technical Expertise",
    color: "gold"
  },
  { 
    icon: Code2, 
    text: "Python • PyTorch • TensorFlow • OpenCV • Azure",
    label: "Tech Stack",
    color: "red"
  },
];

const jobTitles = [
  "Data Scientist",
  "AI Engineer",
  "Computer Vision Specialist"
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12 py-20 md:py-24 pt-28 md:pt-32">
      {/* Clean Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gold/5 rounded-full blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 bg-red-primary/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left Content - Premium Typography & Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 md:space-y-7"
          >
            {/* Name - Premium Typography */}
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-heading font-black tracking-tighter leading-[0.9]">
                  <span className="text-foreground">
                    VIDUTH{" "}
                  </span>
                  <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                    ISHARA
                  </span>
                </h1>
              </motion.div>
              
              {/* Animated Job Title */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-heading font-bold text-foreground/80 tracking-tight leading-tight">
                  <div className="inline-block overflow-hidden relative min-w-[280px] sm:min-w-[360px] md:min-w-[450px] h-[1.3em]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentTitleIndex}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ 
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="absolute left-0 top-0 whitespace-nowrap text-foreground/90"
                      >
                        {jobTitles[currentTitleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </h2>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative pl-6 border-l-2 border-gold/40"
            >
              <p className="text-base sm:text-lg md:text-xl font-body text-foreground/80 leading-relaxed max-w-2xl">
                Architecting intelligent systems through <span className="text-gold font-semibold">computer vision</span>, <span className="text-gold font-semibold">deep learning</span>, and <span className="text-gold font-semibold">production-ready AI solutions</span>.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid sm:grid-cols-2 gap-4 pt-2"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent border border-white/10 group-hover:border-gold/40 transition-all duration-500 backdrop-blur-md shadow-lg">
                    <div className="flex items-start gap-2.5">
                      {/* Icon Container */}
                      <div className={`shrink-0 p-2.5 rounded-xl ${stat.color === 'gold' ? 'bg-gold/10 border-gold/25' : 'bg-red-primary/10 border-red-primary/25'} border group-hover:scale-105 transition-all duration-300`}>
                        <stat.icon className={`w-5 h-5 ${stat.color === 'gold' ? 'text-gold' : 'text-red-primary'}`} strokeWidth={2.5} />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1 space-y-1.5">
                        <div className={`text-xs font-heading font-bold ${stat.color === 'gold' ? 'text-gold/70' : 'text-red-primary/70'} uppercase tracking-wider`}>
                          {stat.label}
                        </div>
                        <p className="text-sm font-body text-foreground/75 leading-relaxed">
                          {stat.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="pt-4"
            >
              <Link href="/allprojects?from=hero">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-light to-red-dark rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />
                  <div className="relative px-8 py-4 bg-gradient-to-r from-red-light via-red-primary to-red-dark text-white font-heading font-bold text-base rounded-2xl overflow-hidden shadow-xl">
                    <span className="relative z-10 flex items-center gap-2.5">
                      View All Projects
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    {/* Left to Right Shine Animation */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Portfolio Owner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex lg:items-center lg:justify-center"
          >
            <div className="relative">
              {/* Subtle Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 to-gold/10 rounded-3xl blur-3xl opacity-40" />
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="relative w-[420px] h-[420px] xl:w-[460px] xl:h-[460px] p-[2px] rounded-3xl bg-gradient-to-br from-gold via-gold-light to-gold shadow-2xl"
              >
                <div className="w-full h-full rounded-[calc(1.5rem-2px)] overflow-hidden bg-background/30 backdrop-blur-sm">
                  <Image
                    src="/images/profile.jpg.jpg"
                    alt="Viduth Ishara - Data Scientist & AI Engineer"
                    width={460}
                    height={460}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gold/50 font-heading font-semibold uppercase tracking-[0.2em]">Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2 backdrop-blur-sm bg-gold/5 shadow-lg"
          >
            <motion.div
              animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
