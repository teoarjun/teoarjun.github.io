import FadeIn from './FadeIn'
import { achievements, awards } from '../data/portfolio'

const metricColors: Record<string, string> = {
  emerald: 'text-emerald-500',
  blue: 'text-blue-500',
  purple: 'text-purple-500',
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <p className="section-label">Impact & Recognition</p>
          <h2 className="section-heading mb-4">
            Numbers that tell
            <span className="text-gradient"> the story.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mb-16 max-w-xl">
            Measurable outcomes across performance, scale, and business impact.
          </p>
        </FadeIn>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {achievements.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.05}>
              <div className="card card-hover text-center">
                <div className={`text-3xl sm:text-4xl font-black tracking-tight mb-1 ${metricColors[item.color]}`}>
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500">
                  {item.desc}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Awards */}
        <FadeIn delay={0.3}>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-600 mb-6">
            Awards & Certifications
          </h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, i) => (
            <FadeIn key={award.title} delay={0.35 + i * 0.06}>
              <div className="card card-hover flex items-start gap-4">
                <span className="text-2xl shrink-0">{award.icon}</span>
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {award.title}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
                    {award.subtitle}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Leadership callout */}
        <FadeIn delay={0.6}>
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 border border-emerald-500/15">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Leadership Philosophy
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  label: 'Ownership',
                  desc: 'I take full accountability for the systems I build — from architecture through production monitoring.',
                },
                {
                  label: 'Mentorship',
                  desc: 'Led teams of 4–6 engineers; focused on unblocking, upskilling, and creating psychological safety to ship.',
                },
                {
                  label: 'Outcome-driven',
                  desc: 'Engineering decisions are evaluated by business impact, not just technical elegance.',
                },
              ].map(item => (
                <div key={item.label}>
                  <div className="w-8 h-0.5 bg-emerald-500 mb-3" />
                  <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-2">
                    {item.label}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
