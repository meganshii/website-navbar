
import './App.css'
import React,{useRef} from 'react'
import BlobAnimation from './components/Blobanimation'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} style={{ width: '50%', height: '50vh', position: 'relative' }}>
      <BlobAnimation containerRef={containerRef} />
    </div>
  );
};

export default App;