import { MessageCircle } from 'lucide-react'
import { waLink } from '../utils/whatsapp'

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={waLink('Hola, me gustaría solicitar información y cotización de suministros con HEDIJIS Comercializadora.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-gradient text-white shadow-emerald hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
