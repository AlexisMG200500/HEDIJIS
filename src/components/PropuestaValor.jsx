import Reveal from './Reveal'

export default function PropuestaValor() {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center pt-24 pb-14 sm:pb-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="left">
            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
              Propuesta de Valor
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-white leading-tight">
              Un proveedor integral para tus{' '}
              <span className="text-gold-gradient">necesidades operativas recurrentes</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              En Hedijis Comercializadora apoyamos a las empresas en el abastecimiento de insumos y
              soluciones de uso recurrente, con atención directa, flexibilidad y enfoque en
              continuidad operativa. Simplificamos la compra de diferentes categorías mediante un
              solo punto de contacto, cuidando costo, calidad y tiempos de respuesta.
            </p>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="rounded-2xl border border-gold-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-6 sm:p-8 shadow-gold">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase mb-3">
                En una frase
              </p>
              <p className="font-display text-lg sm:text-xl text-white leading-snug">
                "Un proveedor integral para necesidades operativas recurrentes, con soluciones
                adaptadas a los requerimientos de cada cliente."
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-xl text-emerald-400">6</p>
                  <p className="text-xs text-gray-400 mt-1">Líneas de suministro</p>
                </div>
                <div>
                  <p className="font-display text-xl text-emerald-400">1</p>
                  <p className="text-xs text-gray-400 mt-1">Punto de contacto</p>
                </div>
                <div>
                  <p className="font-display text-xl text-emerald-400">100%</p>
                  <p className="text-xs text-gray-400 mt-1">Atención directa</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
