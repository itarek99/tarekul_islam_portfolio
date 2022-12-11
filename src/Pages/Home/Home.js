import Footer from '../../Navigation/Footer';
import Navbar from '../../Navigation/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Projects from './Components/Projects';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
