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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
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