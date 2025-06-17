
import { Link } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Service';
import Testimonials from '../components/Testimonals';
import HealthTips from '../components/HealthTips';
import FAQ from '../components/FAQSection';
import Newsletter from '../components/NewsLetter';

import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <>
   <div className="grid md:grid-cols-2 gap-12 items-center px-4 sm:px-6 md:px-20 py-16">
  
  {/* 🖼️ Image Section with Stylish Border */}
  <div className="order-1 md:order-2 flex justify-center">
    <div className="relative p-2 rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-xl">
      <img
        src="https://static.vecteezy.com/system/resources/previews/024/585/326/original/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png"
        alt="Healthcare Doctor"
        loading="lazy"
        className="rounded-lg w-full max-w-sm sm:max-w-md md:max-w-full object-contain h-auto lg:h-[85vh] border-4 border-white"
      />
    </div>
  </div>

  {/* ✍️ Content Section */}
  <div className="order-2 md:order-1 text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-6">
      Your Trusted Healthcare Partner
    </h2>
    <p className="text-gray-600 text-lg mb-6">
      We provide expert medical care and easy online appointments. Book a consultation with certified professionals now.
    </p>
    <Link to="/booking">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
        Book Appointment
      </button>
    </Link>
  </div>
</div>


    <WhyChooseUs/>
    <Services/>
    <Testimonials/>
    <HealthTips/>
    <FAQ/>
    <Newsletter/>
   
    <ScrollToTop/>
    </>
  );
}
