import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Languages from './sections/Languages';
import WhyItWorks from './sections/WhyItWorks';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import ResetPassword from './components/ResetPassword';
import ConfirmEmail from './components/ConfirmEmail';

// Componente da página principal
const HomePage = () => (
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

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rota isolada para reset de senha - apenas acessível via token do email */}
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* Rota isolada para confirmação de email - redirecionamento do app */}
        <Route path="/confirm-email" element={<ConfirmEmail />} />
      </Routes>
    </Router>
  );
}

export default App;