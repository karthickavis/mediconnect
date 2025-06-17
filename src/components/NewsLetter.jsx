

export default function Newsletter() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Stay Updated</h2>
      <p className="text-gray-600 mb-6 text-sm">Subscribe to get health tips and appointment offers directly in your inbox.</p>
      <form className="max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full flex-1 p-3 border rounded-xl shadow-sm focus:outline-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
