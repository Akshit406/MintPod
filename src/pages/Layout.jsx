import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
    <img src='/bgImg2.jpg' className='fixed contain contrast-150 opacity-[2%] w-full h-full -z-10'/>
    <div className="min-h-screen flex flex-col z-50">
      <Header />
      <main className="flex-grow">
        <Outlet />{children}
      </main>
      <Footer />
    </div>
  </>
  );
};

export default Layout;