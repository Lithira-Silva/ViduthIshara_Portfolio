"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { ProjectExtendedInfo } from "@/data/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  extendedInfo?: ProjectExtendedInfo;
}

export default function ProjectModal({ isOpen, onClose, title, subtitle, extendedInfo }: ProjectModalProps) {
  if (!extendedInfo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-gradient-to-br from-background via-background to-background/95 border-2 border-gold/30 rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-b border-gold/30 px-8 py-6 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-heading font-black text-foreground mb-2">
                      {title}
                    </h2>
                    <p className="text-gold font-medium text-sm">
                      {subtitle}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 p-2 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group"
                  >
                    <X className="w-5 h-5 text-foreground/60 group-hover:text-gold transition-colors" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-8 space-y-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                {/* Overview */}
                {extendedInfo.overview && (
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="h-1 w-8 bg-gold rounded-full" />
                      Overview
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {extendedInfo.overview}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                {extendedInfo.keyFeatures && extendedInfo.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="h-1 w-8 bg-gold rounded-full" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {extendedInfo.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {extendedInfo.techStack && extendedInfo.techStack.length > 0 && (
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="h-1 w-8 bg-gold rounded-full" />
                      Tech Stack
                    </h3>
                    <ul className="space-y-3">
                      {extendedInfo.techStack.map((tech, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Details */}
                {extendedInfo.technicalDetails && extendedInfo.technicalDetails.length > 0 && (
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="h-1 w-8 bg-gold rounded-full" />
                      Technical Details
                    </h3>
                    <ul className="space-y-3">
                      {extendedInfo.technicalDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Results */}
                {extendedInfo.results && extendedInfo.results.length > 0 && (
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="h-1 w-8 bg-gold rounded-full" />
                      Results
                    </h3>
                    <ul className="space-y-3">
                      {extendedInfo.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Impact */}
                {extendedInfo.impact && extendedInfo.impact.length > 0 && (
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="h-1 w-8 bg-gold rounded-full" />
                      Impact
                    </h3>
                    <ul className="space-y-3">
                      {extendedInfo.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {extendedInfo.challenges && extendedInfo.challenges.length > 0 && (
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="h-1 w-8 bg-gold rounded-full" />
                      Challenges & Solutions
                    </h3>
                    <ul className="space-y-3">
                      {extendedInfo.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent border-t border-gold/20 px-8 py-4 backdrop-blur-xl">
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 hover:border-gold text-gold font-bold rounded-xl transition-all duration-300 hover:shadow-gold-glow"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
