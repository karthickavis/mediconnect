
import { FaStethoscope, FaFlask, FaBriefcaseMedical, FaAmbulance } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaStethoscope size={28} className="text-blue-600" />,
      title: 'Online Consultation',
      desc: 'Talk to top doctors anytime from your phone or computer.'
    },
    {
      icon: <FaFlask size={28} className="text-blue-600" />,
      title: 'Lab Tests',
      desc: 'Book tests and receive reports from certified labs at home.'
    },
    {
      icon: <FaBriefcaseMedical size={28} className="text-blue-600" />,
      title: 'Specialist Booking',
      desc: 'Find and book appointments with top specialists in minutes.'
    },
    {
      icon: <FaAmbulance size={28} className="text-blue-600" />,
      title: 'Emergency Services',
      desc: 'Quick support for emergency situations 24/7 across locations.'
    }
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
