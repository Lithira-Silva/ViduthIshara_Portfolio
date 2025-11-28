"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Award, BookOpen, GraduationCap, Briefcase, Target } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-primary/8 rounded-full blur-[120px]" />
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[120px]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/10 via-gold/8 to-gold/10 border border-gold/30 shadow-[0_4px_16px_rgba(212,175,55,0.15)] mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-gold animate-pulse" />
                <span className="text-gold font-bold tracking-widest text-xs uppercase bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                  Who I Am
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] mb-6">
                About Me
              </h2>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[2px] w-20 bg-gold rounded-full" />
                <div className="h-[2px] w-10 bg-gold/50 rounded-full" />
                <div className="h-[2px] w-5 bg-gold/30 rounded-full" />
              </div>
            </motion.div>

            {/* Body Text with Premium Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-base sm:text-lg text-foreground/80 leading-[1.8]"
            >
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-gold first-letter:mr-1 first-letter:float-left first-letter:leading-[0.8]">
                I&apos;m a <span className="text-gold font-semibold">Data Scientist and AI Engineer</span> specialising 
                in applied computer vision, deep learning, and intelligent automation.
              </p>
              <p className="pl-4 border-l-2 border-gold/30">
                My work spans <span className="text-gold font-semibold">human-pose analysis</span>, 
                <span className="text-gold font-semibold"> sports biomechanics</span>, 
                <span className="text-gold font-semibold"> LLM engineering</span>, and building 
                production-ready systems for real operational use.
              </p>
              <p>
                I focus on solving real problems using machine learning and robust engineering from 
                <span className="text-gold font-semibold"> cricket technique analysis</span> to 
                <span className="text-gold font-semibold"> enterprise-grade claims and MDM automation</span>.
              </p>
              <p className="pl-4 border-l-2 border-gold/30">
                Currently based in the UK and open to <span className="text-gold font-semibold">Data Scientist</span>, 
                <span className="text-gold font-semibold"> AI Engineer</span>, and 
                <span className="text-gold font-semibold"> Computer Vision Engineer</span> roles.
              </p>
            </motion.div>

            {/* Quick Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border border-gold/20 hover:border-gold/40 transition-all duration-500"
              >
                <div className="absolute -inset-1 bg-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative">
                  <div className="text-4xl font-heading font-black text-transparent bg-gradient-to-br from-gold via-gold-light to-gold bg-clip-text mb-2">5+</div>
                  <div className="text-sm font-medium text-foreground/70">AI Projects</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-red-primary/10 via-red-primary/5 to-transparent border border-red-primary/20 hover:border-red-primary/40 transition-all duration-500"
              >
                <div className="absolute -inset-1 bg-red-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative">
                  <div className="text-4xl font-heading font-black text-transparent bg-gradient-to-br from-red-light via-red-primary to-red-dark bg-clip-text mb-2">2</div>
                  <div className="text-sm font-medium text-foreground/70">Publications</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Professional Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:sticky lg:top-24"
          >
            {/* Main Card */}
            <div className="relative group">
              {/* Subtle Glow Effect */}
              <div className="absolute -inset-0.5 bg-gold/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-700" />
              
              <div className="relative p-8 lg:p-10 rounded-3xl bg-white/[0.03] border border-gold/25 hover:border-gold/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold/20">
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/25">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Professional Summary</h3>
                </div>

                {/* List Items with Icons */}
                <ul className="space-y-4 mb-8">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300">
                      <span className="shrink-0 p-2 rounded-lg bg-gold/10 border border-gold/20 group-hover/item:bg-gold/20 transition-colors">
                        <GraduationCap className="w-4 h-4 text-gold" />
                      </span>
                      <span className="text-sm text-foreground/75 leading-relaxed">MSc in Data Science & Analytics (University of Westminster)</span>
                    </div>
                  </motion.li>
                  
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300">
                      <span className="shrink-0 p-2 rounded-lg bg-gold/10 border border-gold/20 group-hover/item:bg-gold/20 transition-colors">
                        <BookOpen className="w-4 h-4 text-gold" />
                      </span>
                      <span className="text-sm text-foreground/75 leading-relaxed">Published research in pose estimation–based sports analytics</span>
                    </div>
                  </motion.li>
                  
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300">
                      <span className="shrink-0 p-2 rounded-lg bg-gold/10 border border-gold/20 group-hover/item:bg-gold/20 transition-colors">
                        <Sparkles className="w-4 h-4 text-gold" />
                      </span>
                      <span className="text-sm text-foreground/75 leading-relaxed">Built full ML pipelines with custom datasets, CNN models, and real-time inference</span>
                    </div>
                  </motion.li>
                  
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300">
                      <span className="shrink-0 p-2 rounded-lg bg-gold/10 border border-gold/20 group-hover/item:bg-gold/20 transition-colors">
                        <Target className="w-4 h-4 text-gold" />
                      </span>
                      <span className="text-sm text-foreground/75 leading-relaxed">Passionate about ML interpretability, fairness in AI, and building ethical ML systems</span>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
