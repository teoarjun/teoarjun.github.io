import FadeIn from './FadeIn'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <p className="section-label">Skills</p>
          <h2 className="section-heading mb-4">
            The full stack — from
            <span className="text-gradient"> React to AWS.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mb-16 max-w-xl">
            10+ years across web, mobile, backend, and cloud. Primary stack is React / React Native + Node.js + TypeScript + AWS.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.05}>
              <div className="card card-hover h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-emerald-500 text-lg font-mono leading-none">{group.icon}</span>
                  <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Experience levels bar */}
        <FadeIn delay={0.3}>
          <div className="mt-12 card">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-6">
              Primary Stack — Experience Depth
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'React / React Native + TypeScript', years: '6+', pct: 92 },
                { label: 'Node.js + Express.js', years: '6+', pct: 90 },
                { label: 'PostgreSQL', years: '5+', pct: 82 },
                { label: 'AWS Services', years: '4+', pct: 75 },
                { label: 'MERN Stack', years: '5+', pct: 85 },
                { label: 'CI/CD + Testing', years: '4+', pct: 78 },
              ].map(skill => (
                <div key={skill.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{skill.label}</span>
                    <span className="text-xs font-mono text-emerald-500">{skill.years} yrs</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
