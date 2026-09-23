import { PackageCheck, SprayCan, ShieldCheck, FileText, HardHat, Wrench } from 'lucide-react'

export const SUPPLY_LINES = [
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

export const CATEGORY_OPTIONS = SUPPLY_LINES.map((line) => line.title)
