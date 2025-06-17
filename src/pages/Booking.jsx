import  { useState } from 'react';
import toast from 'react-hot-toast';

const doctors = [
  { name: 'Dr. Priya Sharma', specialty: 'Cardiologist' },
  { name: 'Dr. Arun Mehta', specialty: 'Orthopedic' },
  { name: 'Dr. Kavitha Das', specialty: 'Dermatologist' },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export default function Booking() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [form, setForm] = useState({ name: '', date: '', doctor: '' });
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSlot || !form.name || !form.date || !form.doctor) {
      toast.error("Please fill all fields and select a time slot.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      ...form,
      time: selectedSlot,
    };

    const existing = JSON.parse(localStorage.getItem('appointments')) || [];
    const updated = [...existing, newBooking];
    localStorage.setItem('appointments', JSON.stringify(updated));

    toast.success("Appointment booked successfully!");
  // ✅ Show modal

    setForm({ name: '', date: '', doctor: '' });
    setSelectedSlot(null);
  };

  return (
    <section className="pt-20 px-4 sm:px-6 md:px-20 bg-white min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8">Book an Appointment</h1>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-50 p-5 sm:p-6 rounded-xl shadow mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="date"
            className="p-3 border rounded w-full"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <select
            className="p-3 border rounded w-full sm:col-span-2"
            value={form.doctor}
            onChange={(e) => setForm({ ...form, doctor: e.target.value })}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doc, i) => (
              <option key={i} value={doc.name}>
                {doc.name} ({doc.specialty})
              </option>
            ))}
          </select>
        </div>

        {/* Time Slot Picker */}
        <div className="mt-4 mb-6">
          <p className="font-semibold mb-2">Select Time Slot:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {timeSlots.map((slot, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setSelectedSlot(slot)}
                className={`p-2 rounded border transition ${
                  selectedSlot === slot
                    ? 'bg-blue-600 text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full"
        >
          Confirm Booking
        </button>
      </form>

     {/* Meet the Team Section */}
{/* Meet Our Doctors Section */}
{/* Meet Our Doctors Section */}
<section className="py-16 px-4 sm:px-6 md:px-20 bg-white">
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
    Meet Our Expert Doctors
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    {doctors.map((doc, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-blue-100 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
      >
        {/* <div className="flex justify-center mb-4">
          <img
            src={`https://source.unsplash.com/200x200/?doctor,portrait,${index}`}
            alt={doc.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div> */}
        <div className="text-center">
          <h4 className="text-xl font-bold text-blue-800 mb-1">{doc.name}</h4>
          <p className="text-sm text-gray-600 mb-2">{doc.specialty}</p>
          <p className="text-gray-500 text-sm leading-5">
            With over 10 years of experience, {doc.name.split(' ')[1]} is known for compassionate care and deep expertise in {doc.specialty}.
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


      
    </section>
  );
}
