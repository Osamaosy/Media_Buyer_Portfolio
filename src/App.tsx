import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Results />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;