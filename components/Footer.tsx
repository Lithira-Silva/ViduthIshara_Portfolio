"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, BookOpen, ArrowUp, Heart, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/RMVISHARA",
    color: "hover:text-white"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/viduth-ishara/",
    color: "hover:text-[#0077B5]"
  },
  { 
    icon: BookOpen, 
    label: "ResearchGate", 
    href: "https://www.researchgate.net/profile/Viduth-Ishara?ev=hdr_xprf",
    color: "hover:text-[#00CCBB]"
  },
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:viduthishara@gmail.com",
    color: "hover:text-gold"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black/40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-primary/5 rounded-full blur-[120px]" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Divider */}
        <div className="relative py-2">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 py-4"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/#hero" className="inline-block group">
              <div className="font-heading font-black text-lg mb-2 tracking-tight">
                <span className="text-foreground group-hover:text-gold transition-colors duration-300">VIDUTH</span>
                <span className="text-gold"> ISHARA</span>
              </div>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed mb-3 max-w-xs">
              Data Scientist & AI Engineer specializing in Computer Vision, Deep Learning, and Enterprise Automation.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold/70">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-medium">Building AI Solutions for Tomorrow</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-foreground font-heading font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-gold rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-foreground/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-foreground font-heading font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-gold rounded-full" />
              Get In Touch
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:viduthishara@gmail.com"
                  className="group flex items-start gap-3 text-foreground/60 hover:text-gold transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm break-all">viduthishara@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-foreground/60">
                <Code2 className="w-4 h-4 mt-0.5 shrink-0 text-gold/50" />
                <span className="text-sm">Available for AI/ML projects & collaborations</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-foreground font-heading font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-gold rounded-full" />
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`group relative p-2.5 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-gold/30 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 hover:border-gold/40 text-gold transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative py-8"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-foreground/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Viduth Ishara. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-xs text-foreground/40">
              <Link href="/#hero" className="hover:text-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/#hero" className="hover:text-gold transition-colors duration-300">
                Terms of Service
              </Link>
            </div>

            <p className="text-foreground/40 text-sm flex items-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-red-primary fill-red-primary animate-pulse" /> using Next.js
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
