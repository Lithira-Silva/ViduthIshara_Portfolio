"use client";

import { motion } from "framer-motion";
import { Award, Quote, Download } from "lucide-react";

export default function AcademicRecognition() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-red-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/10 via-gold/8 to-gold/10 border border-gold/30 shadow-[0_4px_16px_rgba(212,175,55,0.15)] mb-6 backdrop-blur-sm">
            <Award className="w-4 h-4 text-gold animate-pulse" />
            <span className="text-gold font-bold tracking-widest text-xs uppercase bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Recognition
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] mb-6">
            Academic Excellence
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-20 bg-gold rounded-full" />
            <div className="h-[2px] w-10 bg-gold/50 rounded-full" />
            <div className="h-[2px] w-5 bg-gold/30 rounded-full" />
          </div>
        </motion.div>

        {/* Recognition Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Main Card */}
            <div className="relative p-10 md:p-14 rounded-3xl bg-white/[0.03] backdrop-blur-xl border-2 border-gold/25 shadow-2xl overflow-hidden">
              {/* Top Quote Icon */}
              <Quote className="absolute top-8 left-8 w-12 h-12 text-gold/20 rotate-180" />
              <Quote className="absolute bottom-8 right-8 w-12 h-12 text-gold/20" />
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full" />
              
              <div className="relative space-y-8 px-4 md:px-8">
                {/* Quote */}
                <blockquote className="text-base sm:text-lg text-foreground/80 leading-[1.8] italic text-center">
                  &ldquo;Viduth developed an ambitious deep learning system for real-time pose estimation and spin bowling analysis... exceptionally capable, self-motivated, and technically strong.&rdquo;
                </blockquote>
                
                {/* Attribution */}
                <div className="pt-6 space-y-4">
                  <div>
                    <p className="font-bold text-gold text-base mb-2">Dr. Yongchao Huang</p>
                    <p className="text-sm text-foreground/60 leading-relaxed">Visiting Lecturer in Computer Science, University of Westminster</p>
                  </div>
                  
                  {/* Download Button */}
                  <a 
                    href="/pdf/Reference letter.pdf" 
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 hover:border-gold text-gold font-medium text-sm transition-all duration-300 hover:shadow-[0_4px_16px_rgba(212,175,55,0.2)] hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Reference Letter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
