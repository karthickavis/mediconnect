import React, { useEffect, useState } from 'react';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(stored);
  }, []);

  return (
    <section className="pt-20 px-6 md:px-20 bg-white min-h-screen pb-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Your Appointments</h1>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments booked yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {appointments.map((appt) => (
            <div key={appt.id} className="bg-gray-50 p-5 rounded-xl shadow">
              <h4 className="text-lg font-bold text-blue-700">{appt.name}</h4>
              <p><strong>Doctor:</strong> {appt.doctor}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
