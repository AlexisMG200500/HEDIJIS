import { useState, useCallback } from 'react'
import {
  Menu,
  X,
  PackageCheck,
  ShieldCheck,
  HardHat,
  SprayCan,
  FileText,
  Wrench,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Handshake,
  Layers,
  BadgeCheck,
  Sparkles,
  ArrowRight,
  Send,
} from 'lucide-react'

const WHATSAPP_NUMBER = '524423929035'
const PHONE_DISPLAY = '442 392 9035'
const EMAIL = 'hedijis.ventas@outlook.com'

const NAV_LINKS = [
  { href: '#propuesta', label: 'Propuesta de Valor' },
  { href: '#lineas', label: 'Líneas de Suministro' },
  { href: '#ventajas', label: 'Beneficios' },
  { href: '#cotizacion', label: 'Cotización' },
]

const SUPPLY_LINES = [
  {
    icon: PackageCheck,
    title: 'Tarimas y Embalaje',
    description: 'Tarimas recicladas y soluciones para manejo, almacenamiento y embarque.',
  },
  {
    icon: SprayCan,
    title: 'Limpieza y Cafetería',
    description: 'Consumibles e insumos para áreas operativas, administrativas y de servicio.',
  },
  {
    icon: ShieldCheck,
    title: 'Sellos de Seguridad',
    description: 'Opciones para control, identificación y protección de mercancías y procesos.',
  },
  {
    icon: FileText,
    title: 'Papelería y Oficina',
    description: 'Material de oficina y consumibles de uso cotidiano.',
  },
  {
    icon: HardHat,
    title: 'Seguridad Industrial',
    description: 'Suministros para apoyar requerimientos de seguridad y operación.',
  },
  {
    icon: Wrench,
    title: 'Herramientas y Más',
    description: 'Búsqueda y suministro de artículos especiales conforme a especificación.',
  },
]

const ADVANTAGES = [
  {
    icon: Handshake,
    title: 'Atención directa',
    description: 'Seguimiento cercano a cada requerimiento, sin intermediarios ni procesos largos.',
  },
  {
    icon: Layers,
    title: 'Un solo proveedor',
    description: 'Concentración de distintas categorías de compra en un único punto de contacto.',
  },
  {
    icon: BadgeCheck,
    title: 'Calidad y cumplimiento',
    description: 'Alternativas competitivas con enfoque en calidad y cumplimiento operativo.',
  },
  {
    icon: Sparkles,
    title: 'Flexibilidad total',
    description: 'Soluciones para requerimientos recurrentes y necesidades especiales.',
  },
]

const TRUST_BADGES = ['Atención Directa', 'Continuidad Operativa', 'Enfoque en Costo y Calidad']

const CATEGORY_OPTIONS = SUPPLY_LINES.map((line) => line.title)

function buildWhatsAppMessage(form) {
  const categorias = form.categorias.length ? form.categorias.join(', ') : 'Sin especificar'
  const lines = [
    '📋 *Solicitud de Cotización — HEDIJIS Comercializadora*',
    '',
    `*Empresa:* ${form.empresa || '—'}`,
    `*Encargado de Compras:* ${form.encargado || '—'}`,
    `*Correo:* ${form.correo || '—'}`,
    `*Teléfono:* ${form.telefono || '—'}`,
    `*Categorías de interés:* ${categorias}`,
    `*Requerimiento:* ${form.mensaje || '—'}`,
  ]
  return lines.join('\n')
}

function NavBar({ mobileOpen, setMobileOpen }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/70 backdrop-blur-xl px-4 sm:px-6 py-3 shadow-lg shadow-black/40">
          <a href="#inicio" className="flex items-center gap-3 group" aria-label="HEDIJIS Comercializadora — Inicio">
            <img
              src="/logo-hedijis.jpg"
              alt="Logotipo HEDIJIS Comercializadora"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover ring-1 ring-gold-400/40 group-hover:ring-gold-400/70 transition"
            />
            <span className="font-serifAccent tracking-wide text-lg sm:text-xl leading-none">
              <span className="text-gold-gradient">HEDIJIS</span>
              <span className="block text-[10px] sm:text-xs font-sans font-medium tracking-[0.2em] text-emerald-400/90 mt-0.5">
                COMERCIALIZADORA
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold-200 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría solicitar información y cotización de suministros con HEDIJIS Comercializadora.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-gold hover:brightness-110 hover:shadow-[0_0_50px_-8px_rgba(212,175,55,0.65)] transition-all duration-300"
            >
              Cotizar Ahora
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-200 hover:text-gold-300 hover:bg-white/5 transition"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-2 rounded-2xl border border-white/10 bg-ink-900/95 backdrop-blur-xl shadow-xl shadow-black/50 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
            <nav className="flex flex-col p-4 gap-1" aria-label="Navegación móvil">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-200 hover:bg-white/5 hover:text-gold-200 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-5 py-3 text-sm font-semibold text-ink-950"
              >
                Cotizar Ahora
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32 bg-noise">
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-DEFAULT/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-DEFAULT/30 bg-emerald-DEFAULT/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 mb-6">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Suministro y soluciones para empresas
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-white">
          <span className="text-gold-gradient">Conexiones que generan valor</span>
          <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-gray-200 font-sans font-semibold">
            Suministro y soluciones para empresas
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
          Más que comercializar, impulsamos tu mundo. Simplificamos el abastecimiento integral de
          insumos operativos con un solo punto de contacto, cuidando costo, calidad y tiempos de
          respuesta.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cotizacion"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-8 py-4 text-sm sm:text-base font-semibold text-ink-950 shadow-gold hover:brightness-110 hover:shadow-[0_0_60px_-8px_rgba(212,175,55,0.7)] transition-all duration-300"
          >
            Solicitar Catálogo / Cotización
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#lineas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur px-8 py-4 text-sm sm:text-base font-semibold text-gray-100 hover:border-emerald-DEFAULT/50 hover:text-emerald-300 hover:shadow-emerald transition-all duration-300"
          >
            Conocer Líneas de Suministro
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm text-gray-300"
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

function PropuestaValor() {
  return (
    <section id="propuesta" className="relative py-20 sm:py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
              Propuesta de Valor
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight">
              Un proveedor integral para tus{' '}
              <span className="text-gold-gradient">necesidades operativas recurrentes</span>
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
              En Hedijis Comercializadora apoyamos a las empresas en el abastecimiento de insumos y
              soluciones de uso recurrente, con atención directa, flexibilidad y enfoque en
              continuidad operativa. Nuestro objetivo es simplificar la compra de diferentes
              categorías mediante un solo punto de contacto, cuidando costo, calidad y tiempos de
              respuesta.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Para los equipos de Compras y Abastecimiento, centralizar proveedores recurrentes
              reduce costos ocultos, tiempos muertos de administración y riesgos de
              desabastecimiento — todo bajo un mismo interlocutor de confianza.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-gold-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-8 sm:p-10 shadow-gold">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase mb-4">
                En una frase
              </p>
              <p className="font-display text-xl sm:text-2xl text-white leading-snug">
                "Un proveedor integral para necesidades operativas recurrentes, con soluciones
                adaptadas a los requerimientos de cada cliente."
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-2xl text-emerald-400">6</p>
                  <p className="text-xs text-gray-400 mt-1">Líneas de suministro</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-emerald-400">1</p>
                  <p className="text-xs text-gray-400 mt-1">Punto de contacto</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-emerald-400">100%</p>
                  <p className="text-xs text-gray-400 mt-1">Atención directa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LineasSuministro() {
  return (
    <section id="lineas" className="relative py-20 sm:py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
            Catálogo
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            Nuestras principales <span className="text-gold-gradient">líneas de suministro</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPLY_LINES.map((line) => {
            const Icon = line.icon
            return (
              <article
                key={line.title}
                className="group relative rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur p-6 sm:p-7 transition-all duration-300 hover:border-gold-400/40 hover:shadow-gold hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-gradient shadow-emerald mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-white mb-2">{line.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{line.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Cotizar esta línea
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Ventajas() {
  return (
    <section id="ventajas" className="relative py-20 sm:py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
            Beneficios
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            ¿Por qué trabajar con <span className="text-gold-gradient">Hedijis?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {ADVANTAGES.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 hover:border-emerald-DEFAULT/40 hover:shadow-emerald transition-all duration-300"
              >
                <div className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-full bg-gold-gradient text-ink-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CotizacionForm() {
  const initialForm = {
    empresa: '',
    encargado: '',
    correo: '',
    telefono: '',
    categorias: [],
    mensaje: '',
  }
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

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

    const message = buildWhatsAppMessage(form)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    setSubmitted(true)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="cotizacion" className="relative py-20 sm:py-28 border-t border-white/5">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-emerald-DEFAULT/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
            Cotización
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            Cuéntanos tu <span className="text-gold-gradient">requerimiento</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Completa el formulario y te contactaremos directamente vía WhatsApp con una propuesta
            alineada a tu operación.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur-xl p-6 sm:p-10 shadow-gold"
        >
          <div className="grid sm:grid-cols-2 gap-6">
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

          <fieldset className="mt-6">
            <legend className="block text-sm font-medium text-gray-300 mb-3">
              Categorías que necesitas cotizar
            </legend>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {CATEGORY_OPTIONS.map((categoria) => {
                const checked = form.categorias.includes(categoria)
                return (
                  <label
                    key={categoria}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm cursor-pointer transition-all duration-300 ${
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

          <div className="mt-6">
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
              Descripción del requerimiento
            </label>
            <textarea
              id="mensaje"
              rows={4}
              value={form.mensaje}
              onChange={(e) => handleChange('mensaje', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-gold-400/60 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition resize-none"
              placeholder="Cuéntanos qué insumos necesitas, volumen aproximado y frecuencia de compra."
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-8 py-4 text-sm sm:text-base font-semibold text-ink-950 shadow-gold hover:brightness-110 hover:shadow-[0_0_60px_-8px_rgba(212,175,55,0.7)] transition-all duration-300"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            Enviar requerimiento por WhatsApp
          </button>

          {submitted && (
            <p className="mt-4 text-center text-sm text-emerald-300" role="status">
              ¡Gracias! Se abrió WhatsApp con tu requerimiento listo para enviar.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900/80 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-hedijis.jpg"
                alt="Logotipo HEDIJIS Comercializadora"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-gold-400/40"
              />
              <span className="font-serifAccent text-lg text-gold-gradient">HEDIJIS</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Más que comercializar, impulsamos tu mundo. Conexiones que generan valor para tu
              cadena de abastecimiento.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 hover:text-gold-300 transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 hover:text-gold-300 transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                Querétaro, México
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Hedijis Comercializadora. Todos los derechos reservados.
          </p>
          <p>Información confidencial de uso comercial — atención personalizada garantizada.</p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría solicitar información y cotización de suministros con HEDIJIS Comercializadora.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-gradient text-white shadow-emerald hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-ink-950 text-gray-100 font-sans antialiased">
      <NavBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Hero />
        <PropuestaValor />
        <LineasSuministro />
        <Ventajas />
        <CotizacionForm />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}
