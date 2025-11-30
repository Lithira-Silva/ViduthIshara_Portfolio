"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookOpen, Send, Phone, User, MessageSquare, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_m40l48e';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_1iwmpa6';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'Exb_VlL4GMrTj0_Gk';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'viduthishara@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or email me directly.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
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
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] mb-6">
            Let&apos;s Build Something Amazing
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-20 bg-gold rounded-full" />
            <div className="h-[2px] w-10 bg-gold/50 rounded-full" />
            <div className="h-[2px] w-5 bg-gold/30 rounded-full" />
          </div>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Open to AI/ML opportunities in the UK. Let&apos;s discuss how I can contribute to your team.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-10 mb-16"
        >
          {/* Left: Contact Links */}
          <div className="space-y-6">
            <div className="space-y-4">
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
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="group block"
                >
                  <div className={`
                    p-5 rounded-2xl
                    bg-gradient-to-br ${link.gradient}
                    border border-gold/20 hover:border-gold/50
                    hover:shadow-[0_8px_32px_rgba(212,175,55,0.2)]
                    transition-all duration-500
                    backdrop-blur-sm
                  `}>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-gold/10 border border-gold/30 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300 shadow-[0_2px_12px_rgba(212,175,55,0.2)]">
                        <link.icon className="w-5 h-5 text-gold" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gold/70 uppercase tracking-widest font-bold mb-1">
                          {link.label}
                        </div>
                        <div className="text-sm text-foreground/90 truncate group-hover:text-foreground font-medium transition-colors">
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
            <form onSubmit={handleSubmit}>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-black/40 to-black/20 border border-gold/30 backdrop-blur-xl shadow-2xl">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gold/10 border border-gold/30">
                    <Send className="w-5 h-5 text-gold" />
                  </div>
                  Send a Message
                </h3>

                <div className="space-y-5">
                  {/* Name Field */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground/80 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50 group-focus-within:text-gold transition-colors" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-black/40 border border-gold/20 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all backdrop-blur-sm font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground/80 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50 group-focus-within:text-gold transition-colors" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-black/40 border border-gold/20 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all backdrop-blur-sm font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground/80 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50 group-focus-within:text-gold transition-colors" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-black/40 border border-gold/20 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all backdrop-blur-sm font-medium"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gold/20 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none backdrop-blur-sm font-medium"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full relative px-8 py-4 bg-gradient-to-r from-red-light via-red-primary to-red-dark text-white font-heading font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(198,40,40,0.4)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-primary to-red-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>

                  {/* Status Message */}
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 p-4 rounded-xl ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                          : 'bg-red-500/10 border border-red-500/30 text-red-400'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm font-medium">{statusMessage}</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
