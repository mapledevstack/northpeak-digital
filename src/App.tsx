import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Pricing from "./components/sections/Pricing"
import Services from "./components/sections/Services"
import Testimonials from "./components/sections/Testimonials"
import Footer from "./components/layout/Footer"
import Contact from "./components/sections/Contact"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
