
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Jenifer',
      feedback: 'The consultation was smooth and the doctor was very professional. Highly recommend!',
      image: 'https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-295.jpg?w=2000',
      rating: 5
    },
    {
      name: 'John',
      feedback: 'Booking appointments is super easy. I got lab results within a day!',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      rating: 4
    },
    {
      name: 'Isla',
      feedback: 'Quick service during an emergency. Thank you for being reliable and fast.',
      image: 'https://randomuser.me/api/portraits/women/55.jpg',
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">What Our Patients Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold mb-2">{review.name}</h4>
            <p className="text-gray-600 text-sm mb-3">"{review.feedback}"</p>
            <div className="flex justify-center">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
