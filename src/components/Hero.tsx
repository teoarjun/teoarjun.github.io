import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { personalInfo, heroStats, credentialBadges } from '../data/portfolio'

const badgeColors: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20',
  orange: 'bg-orange-500/10 text-orange-500 dark:text-orange-400 border-orange-500/20',
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60 dark:opacity-100" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Credential badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {credentialBadges.map(badge => (
            <span
              key={badge.label}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeColors[badge.color]}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              {badge.label}
            </span>
          ))}
          {personalInfo.available && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to opportunities
            </span>
          )}
        </motion.div>

        {/* Name + title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4">
            <span className="text-zinc-900 dark:text-white">Arjun</span>
            <br />
            <span className="text-gradient">Teotia</span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-zinc-500 dark:text-zinc-400 mb-2 tracking-tight">
            {personalInfo.title} · {personalInfo.subtitle}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 font-medium">
            📍 {personalInfo.location}
          </p>
        </motion.div>

        {/* Value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
        >
          {personalInfo.subheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href={personalInfo.resumeUrl} download className="btn-primary">
            <Download size={15} />
            Download Resume
          </a>
          <a href="#contact" className="btn-primary">
            <Mail size={15} />
            Hire Me
            <ArrowRight size={14} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 pt-10 border-t border-zinc-200 dark:border-zinc-800/70 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {heroStats.map(stat => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-600 mb-3">
            Work trusted by
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['Apple', 'FBI', 'US Bank', 'L\'Oréal'].map(name => (
              <span key={name} className="text-sm font-bold text-zinc-400 dark:text-zinc-500 tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
