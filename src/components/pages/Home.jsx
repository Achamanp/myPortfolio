import "../../App.css"; 

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Services from "../../components/Services";
import Expertise from "../../components/Expertise";
import Footer from "../../components/Footer";

function App() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Expertise />
      
      </>

  );
}

export default App;
