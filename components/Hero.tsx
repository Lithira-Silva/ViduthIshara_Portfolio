"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Sparkles, Brain, Trophy, GraduationCap, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12 py-12 md:py-16">
      {/* Premium Background System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Gradients with Enhanced Glow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gold/8 rounded-full blur-[100px]"
          style={{
            animation: 'pulse-slow 8s ease-in-out infinite'
          }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 bg-red-primary/8 rounded-full blur-[100px]"
          style={{
            animation: 'pulse-slow 8s ease-in-out infinite 2s'
          }}
        />
        
        {/* Subtle Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/3 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-primary/3 via-transparent to-transparent opacity-50" />
      </div>

      {/* Minimal Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left Content - Premium Typography & Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 md:space-y-7"
          >
            {/* Name - Ultra-Premium Typography */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-heading font-black tracking-tighter leading-[0.95]">
                  <span className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/85 bg-clip-text text-transparent" style={{
                    textShadow: '0 0 40px rgba(245,245,247,0.1)'
                  }}>
                    VIDUTH{" "}
                  </span>
                  <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent" style={{
                    textShadow: '0 0 60px rgba(212,175,55,0.2)'
                  }}>
                    ISHARA
                  </span>
                </h1>
              </motion.div>
              
              {/* Title with Premium Styling */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-heading font-semibold text-foreground/70 tracking-tight leading-tight">
                  <div className="inline-block overflow-hidden relative min-w-[320px] sm:min-w-[420px] md:min-w-[550px] h-[1.4em]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentTitleIndex}
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -60, opacity: 0 }}
                        transition={{ 
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70 bg-clip-text text-transparent"
                      >
                        {jobTitles[currentTitleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </h2>
              </motion.div>
            </div>

            {/* Subtitle - Enhanced Readability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="relative pl-5 border-l border-gold/30"
            >
              <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />
              <p className="text-sm sm:text-base md:text-lg font-body text-foreground/75 leading-relaxed font-light max-w-2xl">
                Architecting intelligent systems that see, learn, and automate — transforming raw data into <span className="text-gold/90 font-medium">production-ready AI solutions</span> through <span className="text-gold/90 font-medium">computer vision</span>, <span className="text-gold/90 font-medium">deep learning</span>, and <span className="text-gold/90 font-medium">advanced automation</span>.
              </p>
            </motion.div>

            {/* Premium Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="grid sm:grid-cols-2 gap-3"
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
                  {/* Subtle Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color === 'gold' ? 'from-gold/10 to-gold/5' : 'from-red-primary/10 to-red-primary/5'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700`} />
                  
                  <div className="relative p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/[0.08] group-hover:border-white/[0.15] transition-all duration-500 backdrop-blur-md shadow-xl">
                    <div className="flex items-start gap-2.5">
                      {/* Icon Container */}
                      <div className={`shrink-0 p-2 rounded-xl ${stat.color === 'gold' ? 'bg-gold/8 border-gold/20' : 'bg-red-primary/8 border-red-primary/20'} border group-hover:scale-110 transition-all duration-500`}>
                        <stat.icon className={`w-4 h-4 ${stat.color === 'gold' ? 'text-gold/80' : 'text-red-primary/80'}`} />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1 space-y-1">
                        <div className={`text-xs font-heading font-semibold ${stat.color === 'gold' ? 'text-gold/60' : 'text-red-primary/60'} uppercase tracking-wide`}>
                          {stat.label}
                        </div>
                        <p className="text-xs font-body text-foreground/70 leading-snug">
                          {stat.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2"
            >
              {/* Primary CTA - Enhanced */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-light via-red-primary to-red-dark rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700" />
                <div className="relative px-7 py-3.5 bg-gradient-red text-white font-heading font-semibold rounded-2xl overflow-hidden shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                    View AI Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-light to-red-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </div>
              </motion.button>

              {/* Secondary CTA - Enhanced */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-700" />
                <div className="relative px-7 py-3.5 bg-background/60 border border-gold/30 text-gold font-heading font-semibold rounded-2xl backdrop-blur-xl overflow-hidden transition-all duration-500 shadow-xl hover:border-gold/50">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                    Download CV
                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gold/15 to-transparent skew-x-12" />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Enhanced Neural Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-[420px] xl:max-w-[480px] mx-auto">
              {/* Neural Network Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Rotating Ring System */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  {/* Minimalist Rings */}
                  <div className="absolute inset-0 rounded-full border border-gold/15" />
                  <div className="absolute inset-12 rounded-full border border-gold/20" />
                  <div className="absolute inset-24 rounded-full border border-gold/25" />
                  
                  {/* Orbital Nodes */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * (Math.PI / 180);
                    const radius = 190;
                    return (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${radius}px)`,
                        }}
                        animate={{
                          scale: [1, 1.6, 1],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.25,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-2.5 h-2.5 bg-gold/90 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Counter-Rotating Inner System */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-36"
                >
                  {[...Array(6)].map((_, i) => {
                    const radius = 75;
                    return (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-${radius}px)`,
                        }}
                        animate={{
                          scale: [1, 1.4, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      >
                        <div className="w-2 h-2 bg-red-primary/80 rounded-full shadow-[0_0_12px_rgba(198,40,40,0.6)]" />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Subtle Center Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-48 h-48 bg-gold/20 rounded-full blur-3xl"
                />

                {/* Premium Center Core */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.15)",
                      "0 0 50px rgba(212, 175, 55, 0.5), 0 0 100px rgba(212, 175, 55, 0.25)",
                      "0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.15)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="relative z-10 w-28 h-28 xl:w-32 xl:h-32 rounded-full bg-gradient-to-br from-gold/90 via-gold-light/80 to-gold-dark/90 flex items-center justify-center border-2 border-background/30 shadow-2xl backdrop-blur-sm"
                >
                  <Brain className="w-12 h-12 xl:w-14 xl:h-14 text-background/90 drop-shadow-lg" />
                </motion.div>
              </div>
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
