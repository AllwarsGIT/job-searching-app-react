import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar.jsx';
import Footer from '../Components/Footer/Footer.jsx';

function MainLayout(){
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  );
}

export default MainLayout;