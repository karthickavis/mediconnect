import  { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

// Lazy-loaded components
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Appointment = lazy(() => import('../pages/Appointments'));
const Booking = lazy(() => import('../pages/Booking'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="text-center mt-20 text-xl">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

