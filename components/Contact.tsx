"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookOpen, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "viduth.ishara@example.com",
    href: "mailto:viduth.ishara@example.com",
    gradient: "from-gold/20 to-gold/5",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/viduthishara",
    href: "https://github.com/viduthishara",
    gradient: "from-white/5 to-white/[0.02]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/viduthishara",
    href: "https://linkedin.com/in/viduthishara",
    gradient: "from-gold/10 to-gold/5",
  },
  {
    icon: BookOpen,
    label: "ResearchGate",
    value: "researchgate.net/profile/viduth-ishara",
    href: "https://researchgate.net/profile/viduth-ishara",
    gradient: "from-red-primary/10 to-red-primary/5",
  },
];

export default function Contact() {
  return (
    <section className="relative py-140 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-3xl" />

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
            Get In Touch
          </span>
          <h2 className="text-h1 font-heading font-bold mt-4 mb-6">
            Let's Build Something Amazing
          </h2>
          <div className="h-[2px] w-24 bg-gradient-gold mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Open to AI/ML opportunities in the UK. Let's discuss how I can contribute to your team.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className={`
                p-6 rounded-xl
                bg-gradient-to-br ${link.gradient}
                border border-gold/20 hover:border-gold/60
                hover:shadow-gold-glow
                transition-all duration-500
              `}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gold/10 border border-gold/30 group-hover:bg-gold/20 transition-colors">
                    <link.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gold/60 uppercase tracking-wider mb-1">
                      {link.label}
                    </div>
                    <div className="text-foreground/80 truncate group-hover:text-foreground transition-colors">
                      {link.value}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <button className="group relative px-12 py-5 bg-gradient-red text-white font-heading font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-red-glow hover:scale-[1.02]">
            <span className="relative z-10 flex items-center gap-3">
              Hire Me for AI/ML Projects
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-light to-red-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
