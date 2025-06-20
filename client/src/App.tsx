import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import CampusGallery from './components/CampusGallery';
import Facilities from './components/Facilities';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import News from './components/News';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
// import AdmissionBanner from './components/AdmissionBanner';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <AdmissionBanner /> */}
      <About />
      <Programs />
      <CampusGallery />
      <Facilities />
      <Admissions />
      <Faculty />
      <News />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default App;