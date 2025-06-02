import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar'
import Herosection from './Components/HeroSection'

function App() {


  return (
    <div className='w-screen min-h-screen '>

      <Navbar />
     
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
 
    </div>
      
      

    
 
     

  )
}

export default App
