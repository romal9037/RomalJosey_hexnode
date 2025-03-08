
import './App.css'
import Navbar from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import WhyHexanode from './pages/WhyHexanode';
import Features from './pages/Features';
import LandingPage from './pages/LandingPage';
import Platforms from './pages/Platforms';
import Carousel from './Components/Carousel';
import BrandRunner from './Components/BrandRunner';
import Footer from './Components/Footer';



function App() {

  return (
    <>
      <Navbar /> 
      <LandingPage />   
      <WhyHexanode />
      <Features />
      <Platforms /> 
      <Carousel /> 
      <BrandRunner />  
      <Footer />
   
    </>
  )
}

export default App
