import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'
import Herosection from './Components/HeroSection'
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {


return (
  <>
    <div className='w-screen min-h-screen '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
    <Contact/>
  </>
)
}

export default App
