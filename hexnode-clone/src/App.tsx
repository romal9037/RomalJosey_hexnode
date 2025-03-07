
import './App.css'
import Navbar from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import WhyHexanode from './pages/WhyHexanode';
import Features from './pages/Features';
import LandingPage from './pages/LandingPage';
import Platforms from './pages/Platforms';



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
      
    </div>
    </>
  )
}

export default App
