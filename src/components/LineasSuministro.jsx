import { ArrowRight } from 'lucide-react'
import { SUPPLY_LINES } from '../data/supplyLines'
import Reveal from './Reveal'

export default function LineasSuministro() {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center pt-24 pb-14 sm:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
            Catálogo
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-white">
            Nuestras principales <span className="text-gold-gradient">líneas de suministro</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SUPPLY_LINES.map((line, index) => {
            const Icon = line.icon
            return (
              <Reveal key={line.title} delay={index * 60}>
                <article className="group relative h-full rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur p-5 sm:p-6 transition-all duration-300 hover:border-gold-400/40 hover:shadow-gold hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-emerald-gradient shadow-emerald mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg text-white mb-1.5">{line.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{line.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Cotizar esta línea
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
