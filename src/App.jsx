import './App.css';
// Change this line to use HashRouter instead of BrowserRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects'

function App() {
  return (
    // The Router component is now HashRouter
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;