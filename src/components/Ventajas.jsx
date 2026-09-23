import { ADVANTAGES } from '../data/advantages'
import Reveal from './Reveal'

export default function Ventajas() {
  return (
    <section id="ventajas" className="relative py-14 sm:py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
            Beneficios
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-white">
            ¿Por qué trabajar con <span className="text-gold-gradient">Hedijis?</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {ADVANTAGES.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 60}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 hover:border-emerald-DEFAULT/40 hover:shadow-emerald transition-all duration-300">
                  <div className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold-gradient text-ink-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
