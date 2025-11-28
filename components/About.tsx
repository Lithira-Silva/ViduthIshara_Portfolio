"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-140 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="text-gold font-medium tracking-wider text-sm uppercase">
                About Me
              </span>
              <h2 className="text-h1 font-heading font-bold mt-4 mb-6">
                Building Intelligence<br />Into Reality
              </h2>
              <div className="h-[2px] w-24 bg-gradient-gold" />
            </div>

            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                I'm a <span className="text-gold font-medium">Data Scientist and AI Engineer</span> specializing 
                in Computer Vision, Deep Learning, and enterprise-scale ML systems.
              </p>
              <p>
                My expertise spans <span className="text-gold font-medium">pose estimation</span>, 
                <span className="text-gold font-medium"> action recognition</span>, and 
                <span className="text-gold font-medium"> temporal modelling</span> — applying cutting-edge 
                deep learning techniques to solve real-world challenges in sports analytics and beyond.
              </p>
              <p>
                With experience building <span className="text-gold font-medium">production ML pipelines</span> and 
                <span className="text-gold font-medium"> enterprise automation systems</span>, I bridge the gap 
                between research and deployment, delivering AI solutions that create measurable impact.
              </p>
              <p>
                Currently seeking opportunities with <span className="text-gold font-medium">UK-based AI teams</span> to 
                contribute to innovative projects at the intersection of computer vision and deep learning.
              </p>
            </div>
          </div>

          {/* Right - Vertical Divider & Stats */}
          <div className="relative">
            {/* Vertical Gold Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/0 via-gold to-gold/0 hidden lg:block" />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-16 space-y-8"
            >
              {/* Highlight Box */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30">
                <Sparkles className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Core Expertise</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Computer Vision & Pose Estimation Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Deep Learning Model Architecture & Training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Sports Analytics & Biomechanical Analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Enterprise ML Pipelines & Automation</span>
                  </li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-heading font-bold text-gold mb-2">5+</div>
                  <div className="text-sm text-foreground/60">AI Projects</div>
                </div>
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-heading font-bold text-gold mb-2">2</div>
                  <div className="text-sm text-foreground/60">Publications</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
