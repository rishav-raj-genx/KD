import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Network from './components/Network';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary overflow-x-hidden w-full">
      <CustomCursor />
      <Header />
      <main className="w-full mx-auto max-w-[100vw] overflow-hidden">
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Network />
      </main>
      <Footer />
    </div>
  );
}

export default App;
