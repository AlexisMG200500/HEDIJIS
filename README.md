# HEDIJIS Comercializadora

Sitio web corporativo (Single-Page Application) para **HEDIJIS Comercializadora** — proveedor integral de suministros operativos para empresas: tarimas y embalaje, limpieza y cafetería, sellos de seguridad, papelería y oficina, seguridad industrial, y herramientas especiales.

> "Más que comercializar, impulsamos tu mundo."

## Stack

- [React 18](https://react.dev/) (componentes funcionales + Hooks)
- [Vite](https://vitejs.dev/) como bundler y dev server
- [Tailwind CSS](https://tailwindcss.com/) para estilos utilitarios
- [Lucide React](https://lucide.dev/) para iconografía
- [thinking-orbs](https://github.com/Jakubantalik/thinking-orbs) para el orbe animado del Hero y el indicador del formulario
- Google Fonts: `Cinzel` / `Playfair Display` (titulares) + `Plus Jakarta Sans` (texto)

## Estructura

```
├── public/
│   └── logo-hedijis.jpg          # Logotipo oficial de la marca
├── src/
│   ├── components/
│   │   ├── NavBar.jsx              # Navbar fijo full-width + menú móvil
│   │   ├── Hero.jsx                 # Hero con orbe animado (thinking-orbs)
│   │   ├── PropuestaValor.jsx
│   │   ├── LineasSuministro.jsx     # Grid de las 6 categorías del catálogo
│   │   ├── Ventajas.jsx
│   │   ├── CotizacionForm.jsx       # Formulario validado → WhatsApp
│   │   ├── Footer.jsx
│   │   ├── WhatsAppFloatingButton.jsx
│   │   └── Reveal.jsx               # Wrapper de animación scroll-reveal
│   ├── data/
│   │   ├── supplyLines.js           # Contenido de las líneas de suministro
│   │   └── advantages.js            # Contenido de ventajas competitivas
│   ├── hooks/
│   │   └── useReveal.js             # Hook de IntersectionObserver
│   ├── utils/
│   │   └── whatsapp.js              # Construcción de mensajes y enlaces wa.me
│   ├── constants.js                 # Contacto, navegación, insignias
│   ├── App.jsx                      # Orquesta las secciones
│   ├── main.jsx                      # Punto de entrada de React
│   └── index.css                     # Estilos base + utilidades Tailwind
├── index.html
├── tailwind.config.js               # Paleta dorado/verde esmeralda y tipografías de marca
└── vite.config.js
```

## Navegación por secciones (sin scroll largo)

El sitio **no** es un scroll continuo de todas las secciones apiladas. `App.jsx` mantiene un estado
`activeSection` y renderiza una sola sección a la vez (`Hero`, `PropuestaValor`,
`LineasSuministro`, `Ventajas` o `CotizacionForm`); el navbar y el footer disparan el cambio de
vista con `onNavigate(key)`. Cada sección ocupa prácticamente la altura de la pantalla y hace una
transición de entrada (`animate-section-in` en `index.css`) al activarse. El único scroll que
queda es el natural del contenido de cada vista (p. ej. el formulario de cotización).

## Animaciones

- El **Hero** incluye un orbe animado (`ThinkingOrb`, estado `weaving`, tono dorado) como acento premium.
- El botón de envío del formulario de cotización muestra un orbe (`state="solving"`) mientras prepara el mensaje de WhatsApp.
- Cada sección hace un fade + slide-in al activarse (`animate-section-in`), y los elementos internos usan `Reveal` (`IntersectionObserver`) para una entrada escalonada.

## Secciones del sitio

1. **Navbar fijo** (full-width) con logo, navegación por secciones y CTA directo a Cotización.
2. **Inicio (Hero)** con propuesta de valor e insignias de confianza.
3. **Propuesta de Valor** dirigida a equipos de Compras/Abastecimiento.
4. **Líneas de Suministro** — grid con las 6 categorías del catálogo.
5. **Ventajas Competitivas** ("¿Por qué trabajar con Hedijis?").
6. **Cotización interactiva** — formulario validado que arma y envía el requerimiento por WhatsApp.
7. **Footer** (siempre visible al final de cada vista) con contacto y navegación, más el botón flotante de WhatsApp.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build de producción

```bash
npm run build     # genera /dist
npm run preview    # sirve /dist localmente para verificar
```

## Contacto de la marca

- 📞 442 392 9035
- ✉️ hedijis.ventas@outlook.com
- 📍 Querétaro, México
