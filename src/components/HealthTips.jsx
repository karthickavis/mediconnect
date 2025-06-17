

export default function HealthTips() {
  const tips = [
    {
      title: '5 Habits for a Healthy Heart',
      desc: 'Eat more veggies, stay active, and reduce stress to keep your heart happy.',
      image: 'https://s3images.coroflot.com/user_files/individual_files/646032_trg45o5so_xctphppesolziyd.jpg',
    },
    {
      title: 'How to Boost Immunity Naturally',
      desc: 'Simple things like drinking water, good sleep, and Vitamin C can make a big difference.',
      image: 'https://www.sheknows.com/wp-content/uploads/2018/05/shutterstock_1669439701-e1583948783833.jpg',
    },
    {
      title: 'Posture Tips for Desk Workers',
      desc: 'Avoid back pain with these 3 simple posture tips while working long hours.',
      image: 'https://www.saberhealth.com/uploaded/blog/images/Posture.jpg',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Health Tips</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={tip.image} alt={tip.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">{tip.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{tip.desc}</p>
              <button className="text-blue-600 font-semibold hover:underline">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
