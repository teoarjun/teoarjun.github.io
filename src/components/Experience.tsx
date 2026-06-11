import { useState } from 'react'
import FadeIn from './FadeIn'
import { experience } from '../data/portfolio'
import { ChevronDown, ChevronUp, MapPin, Award } from 'lucide-react'

export default function Experience() {
  const [expanded, setExpanded] = useState<number>(0)

  return (
    <section id="experience" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <p className="section-label">Experience</p>
          <h2 className="section-heading mb-4">
            10+ years of
            <span className="text-gradient"> shipping products.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mb-16 max-w-xl">
            From founding a startup to leading engineering at companies trusted by Apple and the FBI.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />

          <div className="space-y-4">
            {experience.map((job, i) => (
              <FadeIn key={job.company} delay={i * 0.07}>
                <div className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 sm:left-[18px] top-5 w-3 h-3 rounded-full hidden md:flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full border-2 ${job.current ? 'bg-emerald-500 border-emerald-500' : 'bg-zinc-950 border-zinc-600'}`} />
                    {job.current && (
                      <span className="absolute w-5 h-5 rounded-full bg-emerald-500/30 animate-ping" />
                    )}
                  </div>

                  <div
                    className={`card card-hover cursor-pointer ${expanded === i ? 'border-emerald-500/30' : ''}`}
                    onClick={() => setExpanded(expanded === i ? -1 : i)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                            {job.company}
                          </h3>
                          {job.current && (
                            <span className="metric-badge">Current</span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-emerald-500">
                          {job.role}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                          <span className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                            {job.period}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-500">
                            <MapPin size={11} />
                            {job.location}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-600 mt-1.5 italic">
                          {job.companyDesc}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {job.highlight && (
                          <span className="hidden sm:flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                            <Award size={11} />
                            {job.highlight}
                          </span>
                        )}
                        <button className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400">
                          {expanded === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* Expanded content */}
                    {expanded === i && (
                      <div className="mt-5 pt-5 border-t border-zinc-100 dark:border-zinc-800">
                        <ul className="space-y-3 mb-5">
                          {job.achievements.map((item, j) => (
                            <li key={j} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {job.tech.map(t => (
                            <span key={t} className="tech-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
