import NavBar from './components/NavBar'
import Hero from './components/Hero'
import PropuestaValor from './components/PropuestaValor'
import LineasSuministro from './components/LineasSuministro'
import Ventajas from './components/Ventajas'
import CotizacionForm from './components/CotizacionForm'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-gray-100 font-sans antialiased">
      <NavBar />
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
