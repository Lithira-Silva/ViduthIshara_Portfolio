"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="relative py-140 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-16 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold/40 shadow-gold-glow"
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-12 p-4 rounded-full bg-gold border-4 border-background shadow-gold-glow">
            <Quote className="w-6 h-6 text-background" />
          </div>

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl font-heading leading-relaxed text-foreground mb-8 italic">
            "Viduth developed an ambitious deep learning system for real-time pose estimation and spin bowling 
            analysis... exceptionally capable, self-motivated, and technically strong."
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-gold" />
            <div>
              <div className="font-heading font-bold text-gold text-lg">
                Dr. Yongchao Huang
              </div>
              <div className="text-foreground/60 text-sm">
                Visiting Lecturer in Computer Science, University of Westminster
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-gold rounded-full blur-2xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
