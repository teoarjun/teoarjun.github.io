import FadeIn from './FadeIn'
import { testimonials } from '../data/portfolio'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <p className="section-label">Testimonials</p>
          <h2 className="section-heading mb-4">
            What colleagues
            <span className="text-gradient"> say.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mb-16 max-w-xl">
            Feedback from engineering managers, leads, and teammates across different organisations.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="card card-hover flex flex-col h-full">
                {/* Quote mark */}
                <div className="text-4xl font-black text-emerald-500/30 leading-none mb-4 select-none">
                  "
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {t.name}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Social proof band */}
        <FadeIn delay={0.4}>
          <div className="mt-12 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-wrap justify-around gap-6">
            {[
              { label: 'Turing', sub: 'World Top 1%' },
              { label: 'Toptal', sub: 'World Top 3%' },
              { label: 'Uplers', sub: 'India Top 3.5%' },
              { label: 'Deque', sub: 'EotQ × 3' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.label}</p>
                <p className="text-xs text-emerald-500 font-semibold mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
