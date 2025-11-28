"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    year: "2024",
    title: "SpinVision – Deep Learning Analysis of Spin Bowling",
    type: "MSc Thesis",
    description: "Comprehensive research on applying deep learning to cricket spin bowling biomechanics using pose estimation and CNN architectures.",
    link: "#",
  },
  {
    year: "2024",
    title: "Wicket Keeper Technique Analysis with Pose Estimation",
    type: "Research Paper",
    description: "Novel approach to analyzing wicket-keeping techniques using temporal modelling and pose landmarks for automated coaching.",
    link: "#",
  },
];

export default function Publications() {
  return (
    <section className="relative py-140 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-red-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-gold font-medium tracking-wider text-sm uppercase">
            Research & Publications
          </span>
          <h2 className="text-h1 font-heading font-bold mt-4 mb-6">
            Academic Contributions
          </h2>
          <div className="h-[2px] w-24 bg-gradient-gold mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/0 via-gold to-gold/0 hidden md:block" />

          <div className="space-y-12">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[26px] top-6 w-5 h-5 rounded-full bg-gold border-4 border-background shadow-gold-glow hidden md:block" />

                {/* Content Card */}
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-gold/20 hover:border-gold/60 hover:shadow-gold-glow transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="w-5 h-5 text-gold" />
                        <span className="text-sm text-gold font-medium">{pub.type}</span>
                        <span className="text-sm text-foreground/40">•</span>
                        <span className="text-sm text-foreground/60">{pub.year}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold group-hover:text-gold transition-colors">
                        {pub.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {pub.description}
                  </p>

                  <a
                    href={pub.link}
                    className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:gap-3 transition-all"
                  >
                    View on ResearchGate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
