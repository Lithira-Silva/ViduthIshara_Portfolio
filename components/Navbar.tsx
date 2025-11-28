"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github, FileDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled 
          ? "bg-background/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
          : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-5">
        <div className="flex items-center justify-end gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group mr-auto"
          >
            <span className="font-heading font-bold text-2xl bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              PORTFOLIO
            </span>
            <div className="absolute -inset-2 bg-gold/10 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Nav Links */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-gold/[0.08] via-gold-light/[0.06] to-gold/[0.08] backdrop-blur-2xl rounded-full px-2 py-2 border border-gold/20 shadow-[0_4px_24px_rgba(212,175,55,0.15)]">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-5 py-2.5 transition-all duration-300 font-medium text-sm rounded-full group overflow-hidden ${
                      isActive ? 'text-gold' : 'text-foreground/70 hover:text-gold'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-gold/20 via-gold-light/15 to-gold/20 backdrop-blur-xl transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                    <div className={`absolute inset-0 border border-gold/30 rounded-full shadow-[inset_0_1px_1px_rgba(212,175,55,0.3)] transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                    {isActive && (
                      <div className="absolute inset-0 bg-gold/10 blur-md" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links & Resume */}
            <div className="flex items-center gap-2">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/viduth-ishara/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-2.5 bg-gradient-to-r from-gold/[0.08] to-gold-light/[0.05] backdrop-blur-2xl rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300 shadow-[0_4px_16px_rgba(212,175,55,0.1)] hover:shadow-[0_4px_24px_rgba(212,175,55,0.2)]"
              >
                <Linkedin className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                <div className="absolute inset-0 bg-gold/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/Lithira-Silva"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-2.5 bg-gradient-to-r from-gold/[0.08] to-gold-light/[0.05] backdrop-blur-2xl rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300 shadow-[0_4px_16px_rgba(212,175,55,0.1)] hover:shadow-[0_4px_24px_rgba(212,175,55,0.2)]"
              >
                <Github className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                <div className="absolute inset-0 bg-gold/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              {/* Resume Download */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-4 py-2.5 bg-gradient-to-r from-gold/20 via-gold-light/15 to-gold/20 backdrop-blur-2xl rounded-xl border border-gold/30 hover:border-gold/50 transition-all duration-300 shadow-[0_4px_16px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_24px_rgba(212,175,55,0.25)]"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm font-medium text-gold">
                  <FileDown className="w-4 h-4" />
                  Resume
                </span>
                <div className="absolute inset-0 bg-gold/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-3 text-gold hover:bg-gradient-to-r hover:from-gold/15 hover:to-gold-light/10 rounded-xl transition-all duration-300 border border-gold/20 backdrop-blur-2xl bg-gradient-to-r from-gold/[0.08] to-gold-light/[0.05] shadow-[0_4px_16px_rgba(212,175,55,0.1)]"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-4 pt-4 border-t border-white/[0.08]"
          >
            <div className="flex flex-col gap-3 bg-gradient-to-br from-gold/[0.08] via-gold-light/[0.05] to-gold/[0.08] backdrop-blur-2xl rounded-2xl p-3 border border-gold/20 shadow-[0_8px_32px_rgba(212,175,55,0.15)]">
              {/* Nav Links */}
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative transition-colors font-medium py-3 px-5 rounded-xl overflow-hidden group ${
                      isActive ? 'text-gold bg-gradient-to-r from-gold/20 to-gold-light/15' : 'text-foreground/70 hover:text-gold hover:bg-gradient-to-r hover:from-gold/15 hover:to-gold-light/10'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className={`absolute inset-0 border border-gold/30 rounded-xl shadow-[inset_0_1px_1px_rgba(212,175,55,0.2)] transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                  </motion.a>
                );
              })}

              {/* Divider */}
              <div className="h-px bg-gold/10 my-1" />

              {/* Social Links & Resume */}
              <div className="flex items-center gap-2 px-2">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/viduth-ishara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex-1 p-3 bg-gradient-to-r from-gold/[0.08] to-gold-light/[0.05] backdrop-blur-xl rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Linkedin className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                    <span className="text-xs font-medium text-gold/70 group-hover:text-gold transition-colors duration-300">LinkedIn</span>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/Lithira-Silva"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex-1 p-3 bg-gradient-to-r from-gold/[0.08] to-gold-light/[0.05] backdrop-blur-xl rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Github className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                    <span className="text-xs font-medium text-gold/70 group-hover:text-gold transition-colors duration-300">GitHub</span>
                  </div>
                </motion.a>
              </div>

              {/* Resume Download Button */}
              <motion.a
                href="/resume.pdf"
                download
                whileTap={{ scale: 0.95 }}
                className="group relative py-3 px-5 bg-gradient-to-r from-gold/20 via-gold-light/15 to-gold/20 backdrop-blur-xl rounded-xl border border-gold/30 hover:border-gold/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-medium text-gold">
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gold/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
