import FadeIn from './FadeIn'
import { projects } from '../data/portfolio'
import { Github, Zap } from 'lucide-react'

const typeColors: Record<string, string> = {
  'Enterprise SaaS': 'bg-blue-500/10 text-blue-500 dark:text-blue-400',
  'Mobile · IoT': 'bg-purple-500/10 text-purple-500 dark:text-purple-400',
  'Mobile · OTT': 'bg-orange-500/10 text-orange-500 dark:text-orange-400',
  'Mobile · Marketplace': 'bg-rose-500/10 text-rose-500 dark:text-rose-400',
  'Mobile · EdTech': 'bg-teal-500/10 text-teal-500 dark:text-teal-400',
  'Mobile · Consumer': 'bg-pink-500/10 text-pink-500 dark:text-pink-400',
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const other = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <p className="section-label">Projects</p>
          <h2 className="section-heading mb-4">
            Products built at
            <span className="text-gradient"> scale.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mb-16 max-w-xl">
            From enterprise accessibility tools to ride-hailing platforms — each project delivered measurable real-world impact.
          </p>
        </FadeIn>

        {/* Featured grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {featured.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.08}>
              <div className="card card-hover flex flex-col h-full group">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                        {project.name}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="text-zinc-400 hover:text-emerald-500 transition-colors"
                        >
                          <Github size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[project.type] ?? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'}`}
                    >
                      {project.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Impact metric */}
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                  <Zap size={13} className="text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {project.impact}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">·</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {project.metric}
                  </span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-5">
            {other.map((project, i) => (
              <FadeIn key={project.name} delay={0.32 + i * 0.06}>
                <div className="card card-hover flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
                        {project.name}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500">{project.tagline}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${typeColors[project.type] ?? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'}`}
                    >
                      {project.type}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 mb-3">
                    {project.description}
                  </p>
                  <div className="metric-badge self-start mb-3">{project.impact}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-tag">+{project.tech.length - 4} more</span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Open source note */}
        <FadeIn delay={0.5}>
          <div className="mt-8 flex items-center gap-3 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <Github size={16} className="text-emerald-500 shrink-0" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Open source contribution:{' '}
              <a
                href="https://github.com/teoarjun/react-native-lan-port-scanner"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-500 hover:text-emerald-400 transition-colors underline underline-offset-2"
              >
                react-native-lan-port-scanner
              </a>
              {' '}— patched to enable TCP hardware connectivity for the Blink2.0 EV charging app.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
