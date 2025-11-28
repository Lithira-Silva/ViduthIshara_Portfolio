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
  Boxes,
  Sparkles,
  GitBranch,
  FileCode,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Deep Learning (CNN, DNN)", icon: Layers },
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
      { name: "Python", icon: FileCode },
      { name: "PyTorch", icon: Brain },
      { name: "TensorFlow", icon: Brain },
      { name: "OpenCV", icon: Eye },
      { name: "NumPy", icon: Database },
      { name: "Pandas", icon: Database },
      { name: "Git", icon: GitBranch },
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
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-red-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/10 via-gold/8 to-gold/10 border border-gold/30 shadow-[0_4px_16px_rgba(212,175,55,0.15)] mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span className="text-gold font-bold tracking-widest text-xs uppercase bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] mb-6">
            Skills & Technologies
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-20 bg-gold rounded-full" />
            <div className="h-[2px] w-10 bg-gold/50 rounded-full" />
            <div className="h-[2px] w-5 bg-gold/30 rounded-full" />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/50 border border-white/10 backdrop-blur-sm hover:border-gold/50 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)]">
                  {/* Category Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold via-gold-light to-gold mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
                    <CategoryIcon className="w-8 h-8 text-black" strokeWidth={2.5} />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-2xl font-heading font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          className="flex items-center gap-3.5 group/skill cursor-default"
                        >
                          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover/skill:from-gold/20 group-hover/skill:to-gold/10 group-hover/skill:border-gold/30 group-hover/skill:scale-110 transition-all duration-300 shadow-sm">
                            <SkillIcon className="w-4.5 h-4.5 text-gold group-hover/skill:text-gold-light transition-colors duration-300" strokeWidth={2} />
                          </div>
                          <span className="text-gray-300 font-medium group-hover/skill:text-white group-hover/skill:translate-x-1 transition-all duration-300">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:via-gold/5 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
