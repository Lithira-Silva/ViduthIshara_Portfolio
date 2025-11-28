"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles, Brain, Trophy, GraduationCap, Code2 } from "lucide-react";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Premium Background System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Gradients with Enhanced Glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Mesh Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-primary/5 via-transparent to-transparent opacity-40" />
        
        {/* Noise Texture for Depth */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          {/* Left Content - Premium Typography & Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 md:space-y-7"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/15 via-gold/10 to-gold/5 border border-gold/30 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                  <span className="text-gold font-heading font-bold tracking-widest text-xs uppercase">
                    Portfolio 2025
                  </span>
                </div>
              </div>
            </motion.div>
            
            {/* Name - Ultra-Premium Typography */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-heading font-black tracking-tighter leading-[0.9]">
                  <span className="block bg-gradient-to-br from-foreground via-foreground/95 to-foreground/80 bg-clip-text text-transparent drop-shadow-2xl">
                    VIDUTH
                  </span>
                  <span className="block mt-1 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent" style={{
                    textShadow: '0 0 80px rgba(212,175,55,0.3)'
                  }}>
                    ISHARA
                  </span>
                </h1>
              </motion.div>
              
              {/* Title with Premium Styling */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2.5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-10 bg-gradient-gold rounded-full shadow-gold-glow" />
                  <div className="h-[2px] w-5 bg-gradient-red rounded-full shadow-red-glow" />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-heading font-semibold text-foreground/90 tracking-tight leading-tight">
                  Data Scientist <span className="text-gold">•</span> AI Engineer <span className="text-gold">•</span> Computer Vision Specialist
                </h2>
              </motion.div>
            </div>

            {/* Subtitle - Enhanced Readability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="relative pl-4 border-l-2 border-gold/40"
            >
              <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-gold via-gold/50 to-transparent" />
              <p className="text-sm sm:text-base md:text-lg font-body text-foreground/75 leading-relaxed font-light max-w-2xl">
                I build applied AI systems — <span className="text-gold font-semibold">computer vision</span>, 
                <span className="text-gold font-semibold"> deep learning</span> and 
                <span className="text-gold font-semibold"> intelligent automation</span>.
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
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative"
                >
                  {/* Glow Effect on Hover */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color === 'gold' ? 'from-gold/20 to-gold/5' : 'from-red-primary/20 to-red-primary/5'} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
                  
                  <div className="relative p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.01] border border-gold/20 group-hover:border-gold/40 transition-all duration-500 backdrop-blur-sm shadow-2xl">
                    <div className="flex items-start gap-2.5">
                      {/* Icon Container */}
                      <div className={`shrink-0 p-2 rounded-xl ${stat.color === 'gold' ? 'bg-gold/10 border-gold/30' : 'bg-red-primary/10 border-red-primary/30'} border group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                        <stat.icon className={`w-4 h-4 ${stat.color === 'gold' ? 'text-gold' : 'text-red-primary'}`} />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1 space-y-1">
                        <div className={`text-xs font-heading font-bold ${stat.color === 'gold' ? 'text-gold/70' : 'text-red-primary/70'} uppercase tracking-wider`}>
                          {stat.label}
                        </div>
                        <p className="text-xs font-body text-foreground/85 leading-snug">
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
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-light via-red-primary to-red-dark rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
                <div className="relative px-7 py-3 bg-gradient-red text-white font-heading font-bold rounded-xl overflow-hidden shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                    View AI Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-light to-red-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                </div>
              </motion.button>

              {/* Secondary CTA - Enhanced */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold via-gold-light to-gold rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative px-7 py-3 bg-background/80 border-2 border-gold text-gold font-heading font-bold rounded-xl backdrop-blur-sm hover:bg-gold/5 transition-all duration-300 shadow-xl">
                  <span className="flex items-center justify-center gap-2 text-sm">
                    Download CV
                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
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
            <div className="relative aspect-square max-w-[380px] xl:max-w-[420px] mx-auto">
              {/* Neural Network Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Rotating Ring System */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  {/* Multi-Layer Rings with Enhanced Styling */}
                  <div className="absolute inset-0 rounded-full border-2 border-gold/25 shadow-[0_0_40px_rgba(212,175,55,0.15)]" />
                  <div className="absolute inset-10 rounded-full border border-gold/30" />
                  <div className="absolute inset-20 rounded-full border border-gold/35" />
                  <div className="absolute inset-28 rounded-full border border-gold/40" />
                  
                  {/* Enhanced Orbital Nodes - 12 Points */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * (Math.PI / 180);
                    const radius = 230;
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
                        <div className="w-3.5 h-3.5 bg-gold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
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
                    const radius = 90;
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
                        <div className="w-2.5 h-2.5 bg-red-primary rounded-full shadow-[0_0_15px_rgba(198,40,40,0.8)]" />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Enhanced Pulsing Center Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-56 h-56 bg-gold rounded-full blur-3xl"
                />

                {/* Premium Center Core */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(212, 175, 55, 0.4), 0 0 80px rgba(212, 175, 55, 0.2)",
                      "0 0 60px rgba(212, 175, 55, 0.6), 0 0 120px rgba(212, 175, 55, 0.3)",
                      "0 0 40px rgba(212, 175, 55, 0.4), 0 0 80px rgba(212, 175, 55, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="relative z-10 w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-gradient-to-br from-gold via-gold-light to-gold-dark flex items-center justify-center border-4 border-background/50 shadow-2xl"
                >
                  <Brain className="w-10 h-10 xl:w-12 xl:h-12 text-background drop-shadow-lg" />
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
