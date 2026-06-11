import FadeIn from './FadeIn'
import { personalInfo, aboutDetailed } from '../data/portfolio'
import { MapPin, Mail, Github, Linkedin, GraduationCap } from 'lucide-react'

const quickStats = [
  { value: '10+', label: 'Years Engineering' },
  { value: '6', label: 'Companies & Roles' },
  { value: '2', label: 'Products Co-founded' },
  { value: '3', label: 'Global Talent Certifications' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <p className="section-label">About</p>
          <h2 className="section-heading mb-16">
            Engineering that drives
            <br />
            <span className="text-gradient">real business outcomes.</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: bio + contact */}
          <div>
            <FadeIn delay={0.1}>
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                {aboutDetailed.split('\n\n').map((para, i) => (
                  <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 text-base">
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors group"
                >
                  <Mail size={15} className="text-emerald-500 shrink-0" />
                  {personalInfo.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin size={15} className="text-emerald-500 shrink-0" />
                  {personalInfo.location}
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors"
                >
                  <Github size={15} className="text-emerald-500 shrink-0" />
                  github.com/teoarjun
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors"
                >
                  <Linkedin size={15} className="text-emerald-500 shrink-0" />
                  linkedin.com/in/arjun-teotia-51706982
                </a>
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <GraduationCap size={15} className="text-emerald-500 shrink-0" />
                  B.Tech — IET Lucknow, 2011–2015
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: stats + strengths */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map(stat => (
                  <div
                    key={stat.label}
                    className="card card-hover text-center"
                  >
                    <div className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="card">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4 uppercase tracking-widest text-xs">
                  Core Strengths
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Systems Thinker', desc: 'Architecture decisions that last — not quick fixes' },
                    { label: 'Entrepreneur Mindset', desc: 'Co-founded CodeKrypt; shipped two products from zero' },
                    { label: 'Full-Stack Range', desc: 'React to React Native to Node.js to AWS' },
                    { label: 'Team Builder', desc: 'Led squads of 4–6 engineers across startup & enterprise' },
                    { label: 'Global Experience', desc: 'Worked with teams in UK, USA, India, and Zambia' },
                  ].map(strength => (
                    <li key={strength.label} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          {strength.label}
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-500">
                          {' '}— {strength.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
