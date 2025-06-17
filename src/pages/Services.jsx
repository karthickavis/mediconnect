import React from 'react';
import { FaStethoscope, FaHeartbeat, FaUserMd, FaFlask } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'General Consultation',
    icon: <FaUserMd />,
    desc: 'Comprehensive health checkups and consultations to ensure your well-being.',
  },
  {
    title: 'Cardiology',
    icon: <FaHeartbeat />,
    desc: 'Expert heart care including ECG, echo, and specialist diagnosis.',
  },
  {
    title: 'Orthopedics',
    icon: <FaStethoscope />,
    desc: 'Bone, joint, and muscle treatments using modern techniques.',
  },
  {
    title: 'Lab Diagnostics',
    icon: <FaFlask />,
    desc: 'Reliable lab testing and diagnostics with fast results.',
  },
];

export default function Service() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-20 bg-white min-h-screen">
      
      {/* Hero Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-3">Our Medical Services</h1>
        <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
          We provide top-notch healthcare tailored to your needs. Your health is our top priority.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl text-center shadow hover:shadow-lg transition duration-300"
          >
            {/* Icon centered */}
            <div className="flex items-center justify-center text-4xl mb-3 text-blue-600">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="bg-blue-50 rounded-xl p-8 mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Why Choose Us?</h2>
        <ul className="grid gap-4 text-gray-700 list-disc list-inside sm:grid-cols-2 text-sm sm:text-base">
          <li>Experienced and certified doctors</li>
          <li>State-of-the-art medical equipment</li>
          <li>Clean, hygienic, and welcoming environment</li>
          <li>Fast appointment scheduling with minimal wait</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Need professional help?</h3>
        <Link
          to="/booking"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}

