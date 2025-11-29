import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import WhyJoinUs from './components/WhyJoinUs';
import Testimonials from './components/Testimonials';
import GrowCollection from './components/GrowCollection';
import Articles from './components/Articles';
import AmazingEvents from './components/AmazingEvents';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <WhyJoinUs />
      <Testimonials />
      <GrowCollection />
      <Articles />
      <AmazingEvents />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

