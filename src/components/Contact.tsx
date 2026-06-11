import { useState } from 'react'
import React from 'react'
import FadeIn from './FadeIn'
import { personalInfo } from '../data/portfolio'
import { Mail, Linkedin, Github, Copy, Check, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('body') as HTMLTextAreaElement).value
    const subject = `Portfolio enquiry from ${name}`
    const body = `From: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading + copy */}
          <div>
            <FadeIn>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-heading mb-6">
                Let's build something
                <span className="text-gradient"> great.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-md">
                I'm open to senior engineering and technical leadership roles, remote freelance engagements, and interesting collaboration opportunities. If you're building something ambitious, let's talk.
              </p>
              <div className="space-y-4">
                {/* Email copy */}
                <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                  <Mail size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex-1">
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-500/30 transition-colors group"
                >
                  <Linkedin size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex-1">
                    linkedin.com/in/arjun-teotia-51706982
                  </span>
                  <ArrowRight size={14} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-500/30 transition-colors group"
                >
                  <Github size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex-1">
                    github.com/teoarjun
                  </span>
                  <ArrowRight size={14} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: quick contact form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="card">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-5">
                Send a message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-lg text-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-lg text-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="body"
                    rows={4}
                    placeholder="Tell me about the role or project..."
                    className="w-full px-4 py-2.5 rounded-lg text-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <Mail size={15} />
                  Send Message
                  <ArrowRight size={14} />
                </button>
              </div>

              <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-4 text-center">
                Opens your default email client. Or email directly at{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-emerald-500 hover:underline">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
