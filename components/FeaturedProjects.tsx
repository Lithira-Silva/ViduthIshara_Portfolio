"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Eye, Cpu, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "SpinVision",
    subtitle: "Deep Learning Analysis of Spin Bowling Technique",
    description: "AI-powered system analysing left-arm spin bowling using deep learning pose estimation and biomechanical feature extraction. Published MSc dissertation providing objective, real-time feedback on posture, alignment, and release mechanics.",
    tags: ["Computer Vision", "Pose Estimation", "Deep Neural Networks", "Sports Analytics"],
    metrics: [
      { label: "Custom Dataset Creation", icon: Eye },
      { label: "CNN Classification Model", icon: Cpu },
      { label: "Real-time Inference", icon: TrendingUp },
    ],
    gradient: "from-gold/20 to-gold/5",
    borderColor: "border-gold/30 hover:border-gold",
  },
  {
    title: "Wicket Keeper Coach",
    subtitle: "AI Analysis of Wicket-Keeping Technique",
    description: "Deep learning system evaluating wicket-keeping technique using pose estimation and action classification. Published research paper demonstrating temporal modelling and CNN-based technique scoring.",
    tags: ["Pose Estimation", "CNN Classification", "Temporal Modelling"],
    metrics: [
      { label: "Pose Landmarks Extraction", icon: Eye },
      { label: "Action Recognition", icon: Cpu },
      { label: "Technique Scoring", icon: TrendingUp },
    ],
    gradient: "from-red-primary/20 to-red-primary/5",
    borderColor: "border-red-primary/30 hover:border-red-primary",
  },
  {
    title: "Retail Forecasting Platform",
    subtitle: "ML-Powered Demand Forecasting",
    description: "End-to-end ML forecasting platform automating ETL, running predictive models for every SKU/location, and delivering real-time insights. Achieved 35% improvement in forecast accuracy and significant stockout reduction.",
    tags: ["Time Series", "ML Engineering", "ETL Automation", "Cloud Integration"],
    metrics: [
      { label: "Automated ETL Pipelines", icon: Cpu },
      { label: "35% Accuracy Boost", icon: TrendingUp },
      { label: "Real-time Dashboards", icon: Eye },
    ],
    gradient: "from-gold/20 to-red-primary/10",
    borderColor: "border-gold/30 hover:border-gold",
  },
  {
    title: "Claims Management System",
    subtitle: "Aviation Insurance Platform",
    description: "High-throughput claims management application unifying the full lifecycle with secure workflows, API integrations, and audit trails. Reduced processing time by 30% while improving compliance.",
    tags: ["System Architecture", "Automation", "Data Engineering", "Secure Workflows"],
    metrics: [
      { label: "Automated Workflows", icon: Cpu },
      { label: "30% Faster Processing", icon: TrendingUp },
      { label: "Full Auditability", icon: Eye },
    ],
    gradient: "from-gold/15 to-gold/5",
    borderColor: "border-gold/30 hover:border-gold",
  },
  {
    title: "Master Data Governance",
    subtitle: "Aviation Insurance MDM",
    description: "MDM framework unifying customer and policy data with intelligent deduplication using fuzzy matching. Eliminated 40% of duplicate records and strengthened cross-department data integrity.",
    tags: ["Data Governance", "Deduplication", "Data Quality", "MDM Architecture"],
    metrics: [
      { label: "Fuzzy Matching Engine", icon: Cpu },
      { label: "40% Duplicates Removed", icon: TrendingUp },
      { label: "Centralized Governance", icon: Eye },
    ],
    gradient: "from-red-primary/15 to-red-primary/5",
    borderColor: "border-red-primary/30 hover:border-red-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function FeaturedProjects() {
  return (
    <section className="relative py-140 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-gold font-medium tracking-wider text-sm uppercase">
            Featured Work
          </span>
          <h2 className="text-h1 font-heading font-bold mt-4 mb-6">
            AI Projects
          </h2>
          <div className="h-[2px] w-24 bg-gradient-gold" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`
                relative h-full p-8 rounded-2xl
                bg-gradient-to-br ${project.gradient}
                backdrop-blur-xl border-2 ${project.borderColor}
                transition-all duration-500
                hover:shadow-gold-glow
              `}>
                {/* Project Number */}
                <div className="absolute top-6 right-6 text-6xl font-heading font-bold text-gold/10 group-hover:text-gold/20 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gold font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <metric.icon className="w-4 h-4 text-gold" />
                        <span className="text-xs text-foreground/60 uppercase tracking-wide">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/5 border border-gold/20 text-xs text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Link */}
                  <button className="flex items-center gap-2 text-gold font-medium text-sm group/link pt-4">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
