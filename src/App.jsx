
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

// import ScrollToTop from './components/ScrollToTop';

function App() {
 

  return (
    <>

<Navbar/>
 <AppRoutes />
 <Footer/>
  <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App
