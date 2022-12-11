import { Outlet } from 'react-router-dom';
import Footer from '../Navigation/Footer';
import Navbar from '../Navigation/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Main;
