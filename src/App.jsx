import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar'
import Herosection from './Components/HeroSection'
function App() {


  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>

    </>
 
     

  )
}

export default App
