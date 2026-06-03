import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Search, 
  Sparkles, 
  Mail, 
  Heart, 
  Terminal, 
  Zap, 
  MousePointerClick,
  Check
} from 'lucide-react';

import { 
  AppleButton, 
  LogoMark, 
  AppleLogo, 
  SectionEyebrow 
} from './components/Primitives';
import InboxMockup from './components/InboxMockup';
import { 
  FEATURE_CHIPS, 
  TRIAGE_CATEGORIES, 
  LOGO_NAMES, 
  TESTIMONIALS 
} from './types';

export default function App() {
  const [yearly, setYearly] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Custom inline style for shiny headline gradient
  const headlineGradientStyle: React.CSSProperties = {
    backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    filter: 'url(#c3-noise)',
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white selection:bg-brand/30 selection:text-white">
      
      {/* 2. Global Background Video (fixed, behind everything) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover pointer-events-none opacity-80"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" 
        />
      </div>

      {/* 2. Fixed Vertical Guide lines (margins of 36rem/72rem container) */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      {/* 3. Global SVG Noise Filters (Root filter for the shiny headline) */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="c3-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Main Content Container wrapper with relative indices */}
      <div className="relative z-10 font-sans">
        
        {/* Section 1 — Navbar */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"
          id="global-navbar"
        >
          {/* Left: Just the abstract curve logo */}
          <div 
            className="cursor-pointer text-white hover:opacity-85 transition-opacity" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="navbar-logo"
          >
            <LogoMark className="w-8 h-8 text-white filter drop-shadow" />
          </div>

          {/* Center Links (hidden on mobile) */}
          <div className="hidden md:flex gap-8 items-center" id="navbar-center-links">
            {['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers'].map((link, i) => (
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                key={link}
                id={`navlink-${link.toLowerCase()}`}
                onClick={() => link === 'Pricing' ? scrollToSection('pricing-anchor') : null}
                className="text-white/70 text-sm font-medium hover:text-white transition-colors cursor-pointer"
              >
                {link}
              </motion.span>
            ))}
          </div>

          {/* Right Desktop */}
          <div className="hidden md:block" id="navbar-right-desktop">
            <AppleButton />
          </div>

          {/* Mobile Right: Menu button */}
          <div className="md:hidden" id="navbar-mobile-toggle">
            <button 
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>

        {/* Mobile Navigation Drawer Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-6 right-6 p-6 rounded-2xl bg-[#0e1014]/95 border border-white/15 backdrop-blur-xl z-50 flex flex-col gap-4 shadow-2xl md:hidden"
              id="mobile-navigation-overlay"
            >
              <div className="flex justify-between items-center mb-2">
                <LogoMark className="w-7 h-7 text-white" />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-3 font-medium text-white/80">
                {['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers'].map((link) => (
                  <div
                    key={link}
                    id={`mobile-navlink-${link.toLowerCase()}`}
                    className="p-2.5 rounded-lg hover:bg-white/5 hover:text-white cursor-pointer text-sm transition-all"
                    onClick={() => {
                      if (link === 'Pricing') {
                        scrollToSection('pricing-anchor');
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                  >
                    {link}
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-white/5">
                <AppleButton full label="Download Aura" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section 2 — Hero */}
        <section className="pt-16 md:pt-28 pb-20 text-center flex flex-col items-center px-6 relative" id="hero-section">
          {/* Shiny floating aura glow at center backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-brand/10 blur-[130px] -z-10 pointer-events-none" />

          {/* Animated Headline Line 1 & Line 2 */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1.05] flex flex-col select-none"
            id="hero-headline"
          >
            <span>Your email.</span>
            <span className="animate-shiny" style={headlineGradientStyle}>
              Revitalized
            </span>
          </motion.h1>

          {/* Animated Description Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="mt-8 text-white/60 max-w-md text-sm md:text-base leading-[1.6] select-text font-normal px-2"
            id="hero-paragraph"
          >
            Aura is the premier inbox platform for the current era. It leverages powerful AI to organize, prioritize, and refine your messages into total clarity.
          </motion.p>

          {/* Animated Apple Button Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="mt-8 flex flex-col items-center gap-3"
            id="hero-cta-wrapper"
          >
            <AppleButton />
            <span className="text-[11px] font-mono tracking-wider uppercase text-white/40">
              Download for Intel / Apple Silicon
            </span>
          </motion.div>
        </section>

        {/* Section 3 — macOS Menu Bar Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10 relative z-10 w-full select-none"
          id="macos-menu-bar-strip"
        >
          <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-[11px] font-medium text-white/70">
            {/* Left elements */}
            <div className="flex items-center gap-4 sm:gap-6">
              <AppleLogo className="w-3.5 h-3.5 text-white/90 fill-white" />
              <span className="font-bold text-white">Aura</span>
              {['File', 'Edit', 'View', 'Go', 'Window', 'Help'].map((menu, i) => (
                <span 
                  key={menu} 
                  className={`cursor-pointer hover:text-white transition-colors ${
                    i > 2 ? 'hidden sm:inline-block' : 'inline-block'
                  } ${i > 4 ? 'hidden md:inline-block' : 'inline-block'}`}
                >
                  {menu}
                </span>
              ))}
            </div>

            {/* Right details */}
            <div className="flex items-center gap-3">
              <Search className="w-3.5 h-3.5 text-white/40" />
              <span className="font-mono text-white/60">Wed May 6 1:09 PM</span>
            </div>
          </div>
        </motion.div>

        {/* Section 4 — Inbox Mockup */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: 'easeOut' }}
          id="inbox-section"
        >
          <InboxMockup />
        </motion.section>

        {/* Section 5 — Feature Triage */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-start" id="feature-triage-section">
          {/* Left Column Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col select-none"
            id="triage-left-content"
          >
            <SectionEyebrow label="Triage" tag="AI-native" />
            
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-white">
              Clear your inbox <br />
              <span className="text-white/45">in a single pass.</span>
            </h2>

            <p className="mt-6 text-white/60 text-sm md:text-base leading-[1.6] max-w-md select-text">
              Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what moves your day forward — the rest handles itself.
            </p>

            {/* Chips Row */}
            <div className="mt-8 flex flex-wrap gap-2.5" id="triage-chips-row">
              {FEATURE_CHIPS.map((chip) => (
                <span 
                  key={chip.id}
                  id={`triage-chip-${chip.id}`}
                  className="text-xs text-white/70 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.08]"
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column Grid of triaged categories */}
          <div className="w-full flex flex-col gap-4" id="triage-right-preview">
            <div className="liquid-glass rounded-2xl p-5 select-none hover:shadow-2xl hover:shadow-black/30 transition-all duration-500">
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="text-xs font-semibold text-white/40 uppercase tracking-widest font-mono">Real-time Feed</span>
                <span className="text-xs text-white/90 bg-brand/10 border border-brand/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  Today · 42 messages triaged
                </span>
              </div>

              {/* Sub-cards */}
              <div className="flex flex-col gap-3">
                {TRIAGE_CATEGORIES.map((cat, i) => (
                  <div 
                    key={cat.id}
                    id={`triage-subcard-${cat.id}`}
                    className="liquid-glass rounded-xl p-3 flex flex-col gap-2 hover:bg-white/[0.035] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-white group-hover:text-cyan-300 transition-colors">{cat.title}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/40 font-mono">
                        {cat.count} items
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-0.5">
                      {cat.items.map((item, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] text-white/60 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded-md truncate max-w-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — LogoCloud */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20 select-none" id="logocloud-section">
          {/* Centered kicker */}
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold font-mono">
              Trusted by the world&apos;s most thoughtful teams
            </span>
          </div>

          {/* Grid of Logos */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6" id="logocloud-grid">
            {LOGO_NAMES.map((logo, idx) => (
              <motion.div
                key={logo}
                id={`logo-cloud-${logo.toLowerCase()}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-all text-center py-3 bg-white/[0.015] hover:bg-white/[0.04] border border-white/5 rounded-xl cursor-pointer"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 7 — Testimonials */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10" id="testimonials-section">
          <div className="mb-14 text-center select-none">
            <SectionEyebrow label="Perspective" tag="Loved worldwide" />
            <h2 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight text-white/90">
              Engineered for the daily run.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6" id="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <figure 
                key={t.id}
                id={`testimonial-${t.id}`}
                className="liquid-glass rounded-2xl p-6 hover:shadow-xl hover:shadow-black/20 hover:scale-[1.01] transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative">
                  {/* Decorative faint quotes */}
                  <span className="absolute -top-3 -left-2 text-6xl text-white/[0.03] select-none font-serif font-bold">&quot;</span>
                  <blockquote className="text-sm text-white/80 leading-[1.6] relative z-10 font-normal">
                    {t.quote}
                  </blockquote>
                </div>
                
                <figcaption className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-1 select-none">
                  <div className="text-sm font-semibold text-white/95">{t.author}</div>
                  <div className="text-[10px] text-white/50 leading-none">{t.role}</div>
                  <div className="text-[10px] text-white font-bold tracking-wide mt-1 uppercase text-brand">
                    {t.company}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Section 8 — Pricing */}
        <span id="pricing-anchor" className="block h-0 -mt-20 pt-20" /> {/* Anchor tag for scrolling */}
        <section className="c3-pricing-section select-none" id="pricing-section">
          
          {/* Internal definitions of pricing filter (overlay blend) */}
          <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
            <defs>
              <filter id="c3-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
                <feComponentTransfer><feFuncA type="linear" slope="0.075" /></feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" result="noise" />
                <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
              </filter>
            </defs>
          </svg>

          {/* Watermark Section header banner */}
          <div className="c3-watermark-container pointer-events-none">
            <div className="c3-watermark-main select-none leading-none">
              <span className="c3-watermark-line-1">Your email.</span>
              <span className="c3-watermark-line-2">Revitalized</span>
            </div>
          </div>

          {/* Toggle pill */}
          <div className="c3-toggle-wrap" id="pricing-toggle-wrap">
            <span className="text-xs md:text-sm font-semibold text-white/50">Yearly billing</span>
            <button 
              id="btn-pricing-mode-toggle"
              aria-label="Toggle yearly billing"
              onClick={() => setYearly(!yearly)}
              className={`c3-toggle ${yearly ? 'active' : ''}`}
            >
              <div className="c3-toggle-knob" />
            </button>
          </div>

          {/* Pricing Grid */}
          <div className="c3-grid" id="pricing-grid">
            
            {/* Free Tiers */}
            <div className="c3-card" id="pricing-plan-free">
              <span className="c3-tier-small">Free</span>
              <span className="c3-tier-large">Free</span>
              <p className="c3-desc">For creators taking their first steps with Forma.</p>
              
              <ul className="c3-list" id="features-free-list">
                {[
                  'Up to 3 projects in the cloud',
                  'Image export up to 1080p',
                  'Basic editing tools',
                  'Free templates and icons',
                  'Access via web and mobile app',
                ].map((f, i) => (
                  <li key={i}>
                    <span className="c3-check">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button 
                id="btn-choose-free"
                onClick={() => alert('Starting Free Plan Setup')}
                className="c3-btn"
              >
                Choose Plan
              </button>
            </div>

            {/* Standard Tier */}
            <div className="c3-card" id="pricing-plan-standard">
              <span className="c3-tier-small">Standard</span>
              <span className="c3-tier-large">
                {yearly ? '₹7,999/y' : '₹799/m'}
              </span>
              <p className="c3-desc">For freelancers and small teams who need more freedom and flexibility.</p>
              
              <ul className="c3-list" id="features-standard-list">
                {[
                  'Up to 50 projects in the cloud',
                  'Export up to 4K',
                  'Advanced editing toolkit',
                  'Team collaboration (up to 5 members)',
                  'Access to premium template library',
                ].map((f, i) => (
                  <li key={i}>
                    <span className="c3-check">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button 
                id="btn-choose-standard"
                onClick={() => alert(`Starting Standard Plan Subscription (${yearly ? 'Yearly' : 'Monthly'})`)}
                className="c3-btn"
              >
                Choose Plan
              </button>
            </div>

            {/* Pro Tier */}
            <div className="c3-card c3-card-pro" id="pricing-plan-pro">
              {/* Highlight badge for Pro */}
              <div className="absolute top-4 right-5 text-[9px] uppercase tracking-wider bg-brand border border-white/20 text-white font-bold px-2.5 py-1 rounded-full">
                Most Popular
              </div>

              <span className="c3-tier-small">Pro</span>
              <span className="c3-tier-large">
                {yearly ? '₹15,999/y' : '₹1,599/m'}
              </span>
              <p className="c3-desc">For studios, agencies, and professional creators working with brands.</p>
              
              <ul className="c3-list" id="features-pro-list">
                {[
                  'Unlimited projects',
                  'Export up to 8K + animations',
                  'AI-powered content generation tools',
                  'Unlimited team members',
                  'Brand customization',
                ].map((f, i) => (
                  <li key={i}>
                    <span className="c3-check">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button 
                id="btn-choose-pro"
                onClick={() => alert(`Starting Pro Plan Subscription (${yearly ? 'Yearly' : 'Monthly'})`)}
                className="c3-btn"
              >
                Choose Plan
              </button>
            </div>

          </div>
        </section>

        {/* Section 9 — Final CTA */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32" id="cta-section">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center hover:scale-[1.005] duration-500 transition-transform shadow-2xl"
            id="cta-backdrop-glow"
          >
            {/* Custom Radial glow overlay (at opacity 0.3) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30 z-0"
              style={{
                background: 'radial-gradient(1000px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white select-none">
                Close the tabs. <br />
                <span className="text-white/45">Open your day.</span>
              </h2>

              <p className="mt-6 text-white/60 max-w-md mx-auto text-sm md:text-base leading-[1.6]">
                Join thousands of builders, founders, and operators who treat email like a tool — not an obligation.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto" id="cta-buttons">
                <AppleButton label="Download Aura" />
                <button 
                  id="btn-talk-to-sales"
                  className="rounded-full border border-white/15 text-white font-medium text-sm px-6 py-3 hover:bg-white/5 active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                >
                  <span>Talk to sales</span>
                  <ChevronRight className="w-4 h-4 text-white/80" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Humble and minimal footer (as per anti-ai-slop metrics: clean and direct) */}
        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4" id="global-footer">
          <div className="flex items-center gap-2">
            <LogoMark className="w-5 h-5 text-white/60" />
            <span className="font-semibold text-white/60 font-mono">Aura Technologies, Inc.</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} Aura. All rights reserved. Created in the Google Cloud platform.</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
