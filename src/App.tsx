import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Languages from './sections/Languages';
import WhyItWorks from './sections/WhyItWorks';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg-primary">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Languages />
      <WhyItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;