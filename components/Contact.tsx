"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookOpen, Send, Phone, User, MessageSquare } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "viduthishara@gmail.com",
    href: "mailto:viduthishara@gmail.com",
    gradient: "from-gold/20 to-gold/5",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+44 7471 706044",
    href: "tel:+447471706044",
    gradient: "from-gold/15 to-gold/5",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/RMVISHARA",
    href: "https://github.com/RMVISHARA",
    gradient: "from-white/5 to-white/[0.02]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/viduth-ishara",
    href: "https://www.linkedin.com/in/viduth-ishara/",
    gradient: "from-gold/10 to-gold/5",
  },
  {
    icon: BookOpen,
    label: "ResearchGate",
    value: "researchgate.net/profile/Viduth-Ishara",
    href: "https://www.researchgate.net/profile/Viduth-Ishara?ev=hdr_xprf",
    gradient: "from-red-primary/10 to-red-primary/5",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open email client with pre-filled data
    const mailtoLink = `mailto:viduthishara@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          className="grid lg:grid-cols-2 gap-12 mb-12"
        >
          {/* Left: Contact Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-h3 font-heading font-bold mb-6">Get in Touch</h3>
              <p className="text-foreground/70 mb-8">
                Feel free to reach out through any of these channels or use the contact form.
              </p>
            </div>

            <div className="grid gap-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className={`
                    p-4 rounded-xl
                    bg-gradient-to-br ${link.gradient}
                    border border-gold/20 hover:border-gold/60
                    hover:shadow-gold-glow
                    transition-all duration-500
                  `}>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-gold/10 border border-gold/30 group-hover:bg-gold/20 transition-colors">
                        <link.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gold/60 uppercase tracking-wider mb-1">
                          {link.label}
                        </div>
                        <div className="text-sm text-foreground/80 truncate group-hover:text-foreground transition-colors">
                          {link.value}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gold/5 to-gold/[0.02] border border-gold/20">
                <h3 className="text-h3 font-heading font-bold mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-gold" />
                  Send a Message
                </h3>

                <div className="space-y-5">
                  {/* Name Field */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/40 group-focus-within:text-gold transition-colors" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-background/50 border border-gold/20 text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/40 group-focus-within:text-gold transition-colors" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-background/50 border border-gold/20 text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/40 group-focus-within:text-gold transition-colors" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-background/50 border border-gold/20 text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-gold/20 text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full relative px-8 py-4 bg-gradient-red text-white font-heading font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-red-glow hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-light to-red-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
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
