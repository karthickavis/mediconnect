

export default function About() {
  return (
    <section className="pt-20 pb-10 px-4 sm:px-6 md:px-20 bg-white min-h-screen">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700">Our Medical Journey</h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg max-w-2xl mx-auto">
          A story of dedication, compassion, and growth in the world of healthcare.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image 1 */}
        <div className="w-full">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20230521/pngtree-an-animated-male-doctor-image_2692481.jpg"
            alt="Clinic Beginning"
            className="rounded-xl shadow-lg w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
          />
        </div>

        {/* Story Part */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">
            From a Small Clinic to a Trusted Name
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
            Our journey began in 2015 with a small clinic and a big dream — to make compassionate and quality healthcare available to all. With a dedicated team and a growing community of patients, we soon expanded into a multi-specialty center.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
            Over the years, we’ve embraced innovation, integrated modern medical technologies, and assembled a team of experts across cardiology, orthopedics, dermatology, and more.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Today, we’re proud to have impacted over 10,000 lives with timely treatments and heartfelt care — and we continue to grow, driven by the smiles of our patients.
          </p>
        </div>

        {/* Story Part 2 */}
        <div className="w-full order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">
            Building Trust Every Step of the Way
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
            Our values are rooted in empathy, ethics, and excellence. We believe that every patient is unique and deserves personalized care. Our journey has been shaped by continuous learning, adapting to the latest in medicine, and listening to our community.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The road hasn’t always been easy, but our mission keeps us moving — to deliver healing with heart and science combined.
          </p>
        </div>

        {/* Image 2 (Fixed height issue on mobile) */}
        <div className="w-full order-1 md:order-2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/676/792/original/medical-concept-with-doctor-and-patients-in-flat-cartoon-at-hospital-hall.jpg"
            alt="Growth and Expansion"
            className="rounded-xl shadow-lg w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

