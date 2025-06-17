
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h4 className="text-xl font-bold mb-3">MediConnect +</h4>
          <p className="text-sm text-gray-300">
            Your trusted partner for healthcare bookings, tips, and consultations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#faq" className="hover:underline">FAQs</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h5 className="font-semibold mb-3">Follow Us</h5>
          <div className="flex gap-4 text-white">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-10">© {new Date().getFullYear()} MediConnect. All rights reserved.</p>
    </footer>
  );
}
