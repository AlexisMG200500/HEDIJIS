import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '../constants'
import { waLink } from '../utils/whatsapp'

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl shadow-lg shadow-black/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
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
            href={waLink('Hola, me gustaría solicitar información y cotización de suministros con HEDIJIS Comercializadora.')}
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
        <div className="lg:hidden border-t border-white/10 bg-ink-900/95 backdrop-blur-xl shadow-xl shadow-black/50 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
          <nav className="flex flex-col p-4 gap-1 max-w-7xl mx-auto" aria-label="Navegación móvil">
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
              href={waLink('Hola, me gustaría solicitar información y cotización de suministros con HEDIJIS Comercializadora.')}
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
    </header>
  )
}
