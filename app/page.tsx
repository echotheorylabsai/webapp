import { ContactSection } from '../components/ContactSection';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { LocalFocus } from '../components/LocalFocus';
import { ServicesOverview } from '../components/ServicesOverview';
import { ValueProposition } from '../components/ValueProposition';

export default function Home() {
  return (
    <main className="from-background-secondary via-background-primary to-background-secondary min-h-screen bg-gradient-to-b">
      <Header />
      <Hero />
      <ServicesOverview />
      <ValueProposition />
      <LocalFocus />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
