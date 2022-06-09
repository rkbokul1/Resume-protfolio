import './App.css';
import About from './Components/Pages/About';
import Banner from './Components/Pages/Banner';
import ContactUs from './Components/Pages/ContactUs';
import Footer from './Components/Pages/Footer';
import Navbar from './Components/Pages/Navbar';
import Project from './Components/Pages/Project';
import Services from './Components/Pages/Services';

function App() {
  return (
    <div>
      
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <Project/>
      <ContactUs/>
      <Footer/>
      

    </div>
  );
}

export default App;
