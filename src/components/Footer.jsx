import { Phone, Mail, MapPin } from 'lucide-react'
import { NAV_LINKS, PHONE_DISPLAY, EMAIL, WHATSAPP_NUMBER } from '../constants'

export default function Footer({ onNavigate }) {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900/80 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/logo-hedijis.jpg"
                alt="Logotipo HEDIJIS Comercializadora"
                className="h-9 w-9 rounded-full object-cover ring-1 ring-gold-400/40"
              />
              <span className="font-serifAccent text-lg text-gold-gradient">HEDIJIS</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Más que comercializar, impulsamos tu mundo. Conexiones que generan valor para tu
              cadena de abastecimiento.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
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
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.key)}
                    className="hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Hedijis Comercializadora. Todos los derechos reservados.
          </p>
          <p>Información confidencial de uso comercial — atención personalizada garantizada.</p>
        </div>
      </div>
    </footer>
  )
}
