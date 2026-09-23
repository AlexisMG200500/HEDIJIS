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
│   │   ├── NavBar.jsx              # Navbar flotante + menú móvil
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

## Animaciones

- El **Hero** incluye un orbe animado (`ThinkingOrb`, estado `weaving`, tono dorado) como acento premium.
- El botón de envío del formulario de cotización muestra un orbe (`state="solving"`) mientras prepara el mensaje de WhatsApp.
- Cada sección usa `Reveal` (basado en `IntersectionObserver`) para animar su entrada al hacer scroll (fade + slide sutil).
- Las secciones se diseñaron con espaciado compacto para minimizar el scroll total de la página.

## Secciones del sitio

1. **Navbar flotante** con logo, navegación y CTA directo a WhatsApp.
2. **Hero** con propuesta de valor e insignias de confianza.
3. **Propuesta de Valor** dirigida a equipos de Compras/Abastecimiento.
4. **Líneas de Suministro** — grid con las 6 categorías del catálogo.
5. **Ventajas Competitivas** ("¿Por qué trabajar con Hedijis?").
6. **Cotización interactiva** — formulario validado que arma y envía el requerimiento por WhatsApp.
7. **Footer** con contacto (teléfono, correo, ubicación) y botón flotante de WhatsApp.

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
