import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Excursions from '../components/Excursions'
import About from '../components/About'
import Footer from '../components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Excursions />
      <About />
      <Footer />
    </div>
  )
}
export const metadata = {
  title: "Travel With Us | Affordable Car Rentals",
  description: "Book your next trip with Travel With Us. Fast, affordable, and reliable car rentals.",
}
export default App
