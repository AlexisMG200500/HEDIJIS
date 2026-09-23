import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import PropuestaValor from './components/PropuestaValor'
import LineasSuministro from './components/LineasSuministro'
import Ventajas from './components/Ventajas'
import CotizacionForm from './components/CotizacionForm'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'

const SECTIONS = {
  inicio: Hero,
  propuesta: PropuestaValor,
  lineas: LineasSuministro,
  ventajas: Ventajas,
  cotizacion: CotizacionForm,
}

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  const ActiveSection = SECTIONS[activeSection] ?? Hero

  return (
    <div className="min-h-screen bg-ink-950 text-gray-100 font-sans antialiased">
      <NavBar activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        <div key={activeSection} className="animate-section-in">
          {activeSection === 'inicio' ? (
            <ActiveSection onNavigate={setActiveSection} />
          ) : (
            <ActiveSection />
          )}
        </div>
      </main>
      <Footer onNavigate={setActiveSection} />
      <WhatsAppFloatingButton />
    </div>
  )
}
