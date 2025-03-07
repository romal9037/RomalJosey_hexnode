
import './App.css'
import Navbar from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
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
     <div>
      <Navbar />
      <div>
       <LandingPage />
      </div>
      <div>
      <WhyHexanode />
      </div>    
      <div>
      <Features />
    </div>
    <div>
      <Platforms />
    </div>
    <div>
      <Carousel />
    </div>
    <div>
      <BrandRunner />
    </div>
      <Footer />
    </div>
    </>
  )
}

export default App
