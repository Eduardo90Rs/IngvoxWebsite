import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Languages from './sections/Languages';
import WhyItWorks from './sections/WhyItWorks';
import Mission from './sections/Mission';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import ResetPassword from './components/ResetPassword';
import ConfirmEmail from './components/ConfirmEmail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DeleteAccount from './pages/DeleteAccount';

// Componente da página principal
const HomePage = () => (
  <div className="min-h-screen bg-brand-bg-primary">
    <Navbar />
    <Hero />
    <HowItWorks />
    <Languages />
    <WhyItWorks />
    <Mission />
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
        
        {/* Rota para Política de Privacidade */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        
        {/* Rota para Exclusão de Conta */}
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
    </Router>
  );
}

export default App;