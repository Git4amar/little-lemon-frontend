import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;
