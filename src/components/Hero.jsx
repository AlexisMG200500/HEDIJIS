import { ThinkingOrb } from 'thinking-orbs'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { TRUST_BADGES } from '../constants'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-12 bg-noise"
    >
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-DEFAULT/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4 flex justify-center">
          <div
            className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gold-400/5 ring-1 ring-gold-400/20 shadow-gold"
            aria-hidden="true"
          >
            <ThinkingOrb state="weaving" size={64} color="#D4AF37" theme="dark" speed={0.7} />
          </div>
        </div>

        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-DEFAULT/30 bg-emerald-DEFAULT/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 mb-5">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Suministro y soluciones para empresas
        </p>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-white">
          <span className="text-gold-gradient">Conexiones que generan valor</span>
          <span className="block mt-2 text-xl sm:text-2xl md:text-3xl text-gray-200 font-sans font-semibold">
            Suministro y soluciones para empresas
          </span>
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed">
          Más que comercializar, impulsamos tu mundo. Simplificamos el abastecimiento integral de
          insumos operativos con un solo punto de contacto, cuidando costo, calidad y tiempos de
          respuesta.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cotizacion"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-8 py-3.5 text-sm sm:text-base font-semibold text-ink-950 shadow-gold hover:brightness-110 hover:shadow-[0_0_60px_-8px_rgba(212,175,55,0.7)] transition-all duration-300"
          >
            Solicitar Catálogo / Cotización
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#lineas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur px-8 py-3.5 text-sm sm:text-base font-semibold text-gray-100 hover:border-emerald-DEFAULT/50 hover:text-emerald-300 hover:shadow-emerald transition-all duration-300"
          >
            Conocer Líneas de Suministro
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-gray-300"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
