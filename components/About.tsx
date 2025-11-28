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
                I'm a <span className="text-gold font-medium">Data Scientist and AI Engineer</span> specialising 
                in applied computer vision, deep learning, and intelligent automation.
              </p>
              <p>
                My work spans <span className="text-gold font-medium">human-pose analysis</span>, 
                <span className="text-gold font-medium"> sports biomechanics</span>, 
                <span className="text-gold font-medium"> LLM engineering</span>, and building 
                production-ready systems for real operational use.
              </p>
              <p>
                I focus on solving real problems using machine learning and robust engineering — from 
                <span className="text-gold font-medium"> cricket technique analysis</span> to 
                <span className="text-gold font-medium"> enterprise-grade claims and MDM automation</span>.
              </p>
              <p>
                Currently based in the UK and open to <span className="text-gold font-medium">Data Scientist</span>, 
                <span className="text-gold font-medium"> AI Engineer</span>, and 
                <span className="text-gold font-medium"> Computer Vision Engineer</span> roles.
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
                <h3 className="text-xl font-heading font-bold mb-3">Professional Summary</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>MSc in Data Science & Analytics (University of Westminster)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Published research in pose estimation–based sports analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Built full ML pipelines with custom datasets, CNN models, and real-time inference</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Experience developing claims management and MDM systems for enterprise clients</span>
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
