"use client";

import { motion } from "framer-motion";
import { Award, Quote } from "lucide-react";

export default function AcademicRecognition() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Award className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-h2 font-heading font-bold">Academic Recognition</h2>
          <div className="h-[2px] w-24 bg-gradient-gold mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-10 md:p-12 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-gold/40" />
            
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed italic">
                My MSc project received strong praise from my supervisor, <span className="text-gold font-medium">Dr. Yongchao Huang</span>, 
                for its technical depth, real-time performance, and engineering quality.
              </p>
              
              <p className="text-foreground/70 leading-relaxed">
                His reference letter validates my strengths in <span className="text-gold">computer vision</span>, 
                <span className="text-gold"> deep learning</span>, 
                <span className="text-gold"> rapid learning</span>, and 
                <span className="text-gold"> software development</span>.
              </p>

              <div className="pt-6 border-t border-gold/20">
                <p className="text-foreground/60 text-sm mb-4">
                  <span className="font-medium text-gold">Supervisor Endorsement:</span> SpinVision Project
                </p>
                <blockquote className="text-foreground/80 italic border-l-2 border-gold pl-6">
                  "Dr. Huang commended the project for its innovation, real-time performance, and solid 
                  deep-learning approach. He highlighted my ability to handle advanced machine-learning 
                  topics and deliver production-quality systems."
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
