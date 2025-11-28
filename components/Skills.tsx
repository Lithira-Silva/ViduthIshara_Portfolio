"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Code2, 
  Wrench,
  Cpu,
  Eye,
  Network,
  BarChart3,
  Database,
  Cloud,
  Boxes
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Deep Learning (CNN, DNN)", icon: Cpu },
      { name: "Pose Estimation", icon: Eye },
      { name: "Computer Vision", icon: Eye },
      { name: "Temporal Modelling", icon: Network },
      { name: "Feature Engineering", icon: BarChart3 },
      { name: "Model Evaluation", icon: BarChart3 },
      { name: "Data Augmentation", icon: Boxes },
      { name: "ML Pipelines", icon: Network },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", icon: Code2 },
      { name: "PyTorch", icon: Brain },
      { name: "TensorFlow", icon: Brain },
      { name: "OpenCV", icon: Eye },
      { name: "NumPy", icon: Database },
      { name: "Pandas", icon: Database },
      { name: "Git", icon: Boxes },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Azure", icon: Cloud },
      { name: "Power Platform", icon: Boxes },
      { name: "SQL", icon: Database },
      { name: "Jupyter", icon: Code2 },
      { name: "VS Code", icon: Code2 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative py-140 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-gold font-medium tracking-wider text-sm uppercase">
            Technical Expertise
          </span>
          <h2 className="text-h1 font-heading font-bold mt-4 mb-6">
            Skills & Technologies
          </h2>
          <div className="h-[2px] w-24 bg-gradient-gold mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-gold/20 hover:border-gold/60 hover:shadow-gold-glow transition-all duration-500">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gold/10 border border-gold/30 group-hover:bg-gold/20 transition-colors">
                    <category.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/5 transition-all group/skill"
                    >
                      <skill.icon className="w-4 h-4 text-gold/60 group-hover/skill:text-gold transition-colors" />
                      <span className="text-sm text-foreground/80 group-hover/skill:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
