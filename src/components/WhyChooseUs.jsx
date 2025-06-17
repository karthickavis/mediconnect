
import { FaUserMd, FaClock, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <FaUserMd size={28} className="text-blue-600" />,
      title: 'Expert Doctors',
      desc: 'Our specialists have 10+ years of experience in their respective fields.'
    },
    {
      icon: <FaClock size={28} className="text-blue-600" />,
      title: '24/7 Availability',
      desc: 'Book or consult with doctors anytime, even during emergencies.'
    },
    {
      icon: <FaMobileAlt size={28} className="text-blue-600" />,
      title: 'Easy to Use',
      desc: 'Smooth mobile and web interface for quick bookings and consultations.'
    },
    {
      icon: <FaShieldAlt size={28} className="text-blue-600" />,
      title: 'Secure & Private',
      desc: 'Your data is protected with end-to-end encryption and privacy control.'
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
