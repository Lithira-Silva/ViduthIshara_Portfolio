"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles, Brain, Trophy, GraduationCap } from "lucide-react";

const stats = [
  { icon: GraduationCap, text: "MSc Data Science & Analytics" },
  { icon: Trophy, text: "Published AI Sports Analytics Research" },
  { icon: Brain, text: "Computer Vision Specialist" },
  { icon: Sparkles, text: "Enterprise ML Engineering" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-gold font-medium tracking-wider text-sm uppercase">
                Portfolio 2025
              </span>
            </motion.div>
            
            <h1 className="text-hero font-heading font-bold bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              VIDUTH ISHARA
            </h1>
            
            <div className="space-y-2">
              <div className="h-[2px] w-20 bg-gradient-gold" />
              <h2 className="text-h3 font-medium text-foreground/90">
                Data Scientist • AI Engineer • Computer Vision Specialist
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-foreground/70 leading-relaxed max-w-xl"
          >
            I build real-world AI systems — <span className="text-gold font-medium">Computer Vision</span>, 
            <span className="text-gold font-medium"> Deep Learning</span>, 
            <span className="text-gold font-medium"> Sports Analytics</span> & 
            <span className="text-gold font-medium"> Enterprise Automation</span>.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.02] border border-gold/20 hover:border-gold/40 transition-colors"
              >
                <stat.icon className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm text-foreground/80 leading-tight">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-red text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-red-glow hover:scale-[1.02]">
              <span className="relative z-10 flex items-center gap-2">
                View AI Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-light to-red-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="group px-8 py-4 bg-transparent border-2 border-gold text-gold font-medium rounded-lg hover:bg-gold/10 hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02]">
              <span className="flex items-center gap-2">
                Download CV
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square">
            {/* Neural Network Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full"
              >
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gold/20" />
                {/* Middle Ring */}
                <div className="absolute inset-12 rounded-full border border-gold/30" />
                {/* Inner Ring */}
                <div className="absolute inset-24 rounded-full border border-gold/40" />
                
                {/* Nodes */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gold rounded-full shadow-gold-glow"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-200px)`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25,
                    }}
                  />
                ))}
              </motion.div>

              {/* Center Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute w-32 h-32 bg-gold rounded-full blur-3xl"
              />

              {/* Center Core */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-glow-lg">
                <Brain className="w-12 h-12 text-background" />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-gold/30 text-sm font-medium text-gold"
            >
              AI Vision
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-red-primary/30 text-sm font-medium text-red-primary"
            >
              Deep Learning
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
