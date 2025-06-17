import  { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const [selected, setSelected] = useState(null);

  const data = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can easily book an appointment by clicking the "Book Appointment" button and choosing your doctor and time slot.',
    },
    {
      question: 'Is online consultation safe and effective?',
      answer: 'Yes, we use encrypted video calling and our doctors are certified professionals.',
    },
    {
      question: 'Can I reschedule or cancel my appointment?',
      answer: 'Absolutely. You can manage your bookings through your profile dashboard.',
    },
    {
      question: 'Do you provide emergency services?',
      answer: 'Yes, we have 24/7 emergency support. Call our helpline or click the emergency button.',
    },
  ];

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {data.map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow transition">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(i)}
            >
              <h4 className="text-lg font-semibold">{item.question}</h4>
              <span className="text-blue-600">
                {selected === i ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {selected === i && (
              <div className="mt-3 text-gray-600 text-sm">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
