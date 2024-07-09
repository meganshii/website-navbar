
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AboutUs from './components/Aboutus/AboutUs';
import TrustedPartners from './components/Trustedpartners/TrustedPartners';

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [heading, setHeading] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [show, setShow] = useState(true);
  const handleMouseLeave = () => {
    setHoveredItem(null);
    setHeading(null);
    setIsVisible(true);
  };
  return (
    <BrowserRouter
    onMouseEnter={handleMouseLeave}
    >
      <Navbar hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} heading={heading} setHeading={setHeading} isVisible={isVisible} setIsVisible={setIsVisible} />
      <TrustedPartners/>
    </BrowserRouter>
  )
}

export default App
