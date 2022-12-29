
import Events from './Pages/Events';
import Footer from './Pages/Footer';
import Hero from './Pages/Hero';
import Navbar from './Pages/Navbar';
import Newsletter from './Pages/Newsletter';
import Resources from './Pages/Resources';
import Team from './Pages/Team';

function App() {
  return (
    <div className=' bg-bg bg-fixed'>
    <Navbar/>
    <Hero/>
    <Events/>
    <Newsletter/>
    <Resources/>
    <Team/>
    <Footer/>
    </ div>
  );
}

export default App;
