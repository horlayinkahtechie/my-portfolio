import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1600891965050-7c9c3e68f2d0?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center text-white h-[50vh] flex items-center justify-center">
        <div className="bg-black/60 p-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            About Savory Bites
          </h1>
          <p className="text-center text-lg mt-4">Where taste meets comfort</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Savory Bites, we believe food should not only taste amazing — it
            should feel like home. Our journey began in 2020 with one simple
            goal: to provide an effortless and enjoyable dining experience,
            whether you’re dining in or ordering from home.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c30?auto=format&fit=crop&w=800&q=80"
                alt="Chef cooking"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                What Makes Us Special?
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Fresh, locally sourced ingredients</li>
                <li>Seamless online ordering system</li>
                <li>Real-time reservation with availability checks</li>
                <li>Dedicated customer service</li>
                <li>Personalized dining experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To connect people through delicious meals and memorable moments,
            blending modern technology with the warmth of traditional
            hospitality.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Ready to dine with us?</h2>
        <a
          href="/reservation"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition"
        >
          Make a Reservation
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        &copy; {new Date().getFullYear()} Savory Bites. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
