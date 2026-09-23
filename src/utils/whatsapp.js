import { WHATSAPP_NUMBER } from '../constants'

export function buildWhatsAppMessage(form) {
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

export function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
