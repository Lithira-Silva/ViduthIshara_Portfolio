"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-lg"
          >
            <span className="text-foreground">VIDUTH</span>
            <span className="text-gold"> ISHARA</span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/50 text-sm"
          >
            © {new Date().getFullYear()} Viduth Ishara. All rights reserved.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold/60 text-sm font-medium"
          >
            Building AI Solutions for Tomorrow
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
