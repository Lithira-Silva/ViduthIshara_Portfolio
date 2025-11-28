"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Boxes, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Aviation Claims Management System",
    company: "Aviation Insurance",
    description: "Enterprise-grade Power Platform solution automating claims processing with secure approval workflows and Azure SQL integration.",
    technologies: ["Power Apps", "Dataverse", "Azure SQL", "Power Automate"],
    results: [
      { metric: "30%", label: "Faster Processing", icon: TrendingUp },
      { metric: "100%", label: "Secure Workflows", icon: Shield },
    ],
    gradient: "from-gold/10 to-gold/5",
  },
  {
    title: "Master Data Governance System",
    company: "Aviation Insurance",
    description: "Intelligent MDM platform with fuzzy logic deduplication engine, ensuring data quality and centralized governance across enterprise systems.",
    technologies: ["Fuzzy Logic", "MDM", "Data Quality", "Azure"],
    results: [
      { metric: "40%", label: "Duplicates Removed", icon: CheckCircle2 },
      { metric: "Centralized", label: "Data Governance", icon: Boxes },
    ],
    gradient: "from-red-primary/10 to-red-primary/5",
  },
  {
    title: "Retail Forecasting Platform",
    company: "Retail Industry",
    description: "End-to-end ML forecasting solution with automated ETL pipelines, predictive models, and interactive Power BI dashboards for business intelligence.",
    technologies: ["ML Models", "ETL", "Power BI", "Cloud Integration"],
    results: [
      { metric: "Automated", label: "Data Pipeline", icon: TrendingUp },
      { metric: "Real-time", label: "Forecasting", icon: CheckCircle2 },
    ],
    gradient: "from-gold/10 to-red-primary/5",
  },
];

export default function EnterpriseCases() {
  return (
    <section className="relative py-140 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

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
            Enterprise Solutions
          </span>
          <h2 className="text-h1 font-heading font-bold mt-4 mb-6">
            Business Impact
          </h2>
          <div className="h-[2px] w-24 bg-gradient-gold" />
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`
                p-8 md:p-10 rounded-2xl
                bg-gradient-to-br ${study.gradient}
                border-2 border-gold/20 hover:border-gold/60
                hover:shadow-gold-glow
                transition-all duration-500
              `}>
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-gold/60 uppercase tracking-wider">
                          {study.company}
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-gold transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-white/5 border border-gold/20 text-xs font-medium text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
                      Key Results
                    </h4>
                    {study.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/10"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <result.icon className="w-5 h-5 text-gold" />
                          <span className="text-2xl font-heading font-bold text-gold">
                            {result.metric}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/60">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
