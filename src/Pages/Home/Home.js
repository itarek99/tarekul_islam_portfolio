import Navbar from '../../Navigation/Navbar';
import About from './Components/About';
import Blog from './Components/Blog';
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
      <Blog />
    </>
  );
};
export default Home;
