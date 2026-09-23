import { useCallback, useState } from 'react'
import { ThinkingOrb } from 'thinking-orbs'
import { Send } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../constants'
import { CATEGORY_OPTIONS } from '../data/supplyLines'
import { buildWhatsAppMessage } from '../utils/whatsapp'
import Reveal from './Reveal'

const INITIAL_FORM = {
  empresa: '',
  encargado: '',
  correo: '',
  telefono: '',
  categorias: [],
  mensaje: '',
}

export default function CotizacionForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }, [])

  const toggleCategoria = useCallback((categoria) => {
    setForm((prev) => {
      const exists = prev.categorias.includes(categoria)
      return {
        ...prev,
        categorias: exists
          ? prev.categorias.filter((c) => c !== categoria)
          : [...prev.categorias, categoria],
      }
    })
  }, [])

  const validate = () => {
    const nextErrors = {}
    if (!form.empresa.trim()) nextErrors.empresa = 'Ingresa el nombre de tu empresa.'
    if (!form.encargado.trim()) nextErrors.encargado = 'Ingresa el nombre del encargado de compras.'
    if (!form.correo.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      nextErrors.correo = 'Ingresa un correo corporativo válido.'
    }
    if (!form.telefono.trim() || form.telefono.replace(/\D/g, '').length < 10) {
      nextErrors.telefono = 'Ingresa un teléfono o WhatsApp válido (10 dígitos).'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('sending')
    const message = buildWhatsAppMessage(form)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
      setStatus('sent')
    }, 600)
  }

  return (
    <section className="relative pt-24 pb-14 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-emerald-DEFAULT/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
            Cotización
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-white">
            Cuéntanos tu <span className="text-gold-gradient">requerimiento</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Completa el formulario y te contactaremos directamente vía WhatsApp con una propuesta
            alineada a tu operación.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur-xl p-6 sm:p-8 shadow-gold"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  value={form.empresa}
                  onChange={(e) => handleChange('empresa', e.target.value)}
                  aria-invalid={Boolean(errors.empresa)}
                  aria-describedby={errors.empresa ? 'empresa-error' : undefined}
                  className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-gold-400/60 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition"
                  placeholder="Razón social"
                />
                {errors.empresa && (
                  <p id="empresa-error" className="mt-1.5 text-xs text-red-400">
                    {errors.empresa}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="encargado" className="block text-sm font-medium text-gray-300 mb-2">
                  Encargado de Compras
                </label>
                <input
                  id="encargado"
                  type="text"
                  value={form.encargado}
                  onChange={(e) => handleChange('encargado', e.target.value)}
                  aria-invalid={Boolean(errors.encargado)}
                  aria-describedby={errors.encargado ? 'encargado-error' : undefined}
                  className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-gold-400/60 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition"
                  placeholder="Nombre completo"
                />
                {errors.encargado && (
                  <p id="encargado-error" className="mt-1.5 text-xs text-red-400">
                    {errors.encargado}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo corporativo
                </label>
                <input
                  id="correo"
                  type="email"
                  value={form.correo}
                  onChange={(e) => handleChange('correo', e.target.value)}
                  aria-invalid={Boolean(errors.correo)}
                  aria-describedby={errors.correo ? 'correo-error' : undefined}
                  className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-gold-400/60 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition"
                  placeholder="compras@empresa.com"
                />
                {errors.correo && (
                  <p id="correo-error" className="mt-1.5 text-xs text-red-400">
                    {errors.correo}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={(e) => handleChange('telefono', e.target.value)}
                  aria-invalid={Boolean(errors.telefono)}
                  aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                  className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-gold-400/60 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition"
                  placeholder="442 000 0000"
                />
                {errors.telefono && (
                  <p id="telefono-error" className="mt-1.5 text-xs text-red-400">
                    {errors.telefono}
                  </p>
                )}
              </div>
            </div>

            <fieldset className="mt-5">
              <legend className="block text-sm font-medium text-gray-300 mb-3">
                Categorías que necesitas cotizar
              </legend>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {CATEGORY_OPTIONS.map((categoria) => {
                  const checked = form.categorias.includes(categoria)
                  return (
                    <label
                      key={categoria}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 text-sm cursor-pointer transition-all duration-300 ${
                        checked
                          ? 'border-emerald-DEFAULT/60 bg-emerald-DEFAULT/10 text-emerald-200 shadow-emerald'
                          : 'border-white/10 bg-ink-950/40 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCategoria(categoria)}
                        className="h-4 w-4 rounded border-white/20 bg-transparent text-emerald-500 focus:ring-emerald-400/40"
                      />
                      {categoria}
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <div className="mt-5">
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                Descripción del requerimiento
              </label>
              <textarea
                id="mensaje"
                rows={3}
                value={form.mensaje}
                onChange={(e) => handleChange('mensaje', e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-gold-400/60 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition resize-none"
                placeholder="Cuéntanos qué insumos necesitas, volumen aproximado y frecuencia de compra."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-8 py-3.5 text-sm sm:text-base font-semibold text-ink-950 shadow-gold hover:brightness-110 hover:shadow-[0_0_60px_-8px_rgba(212,175,55,0.7)] transition-all duration-300 disabled:opacity-70 disabled:cursor-wait"
            >
              {status === 'sending' ? (
                <>
                  <ThinkingOrb state="solving" size={20} theme="light" />
                  Preparando tu mensaje...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" aria-hidden="true" />
                  Enviar requerimiento por WhatsApp
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className="mt-4 text-center text-sm text-emerald-300" role="status">
                ¡Gracias! Se abrió WhatsApp con tu requerimiento listo para enviar.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
