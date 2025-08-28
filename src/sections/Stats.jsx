import { useState, useEffect } from "react";

const images = [
  "/images/office1.jpg",
  "/images/office2.jpg",
  "/images/office3.jpg",
  "/images/office4.jpg",
];

export default function Stats() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Stats side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Results You Can Trust
          </h2>
          <p className="text-slate-600 mb-10">
            Our experience and proven track record help businesses grow with
            measurable results. From local startups to international brands, we
            deliver strategies that work.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">5+</h3>
              <p className="text-slate-600">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">140+</h3>
              <p className="text-slate-600">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">95%</h3>
              <p className="text-slate-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">24/7</h3>
              <p className="text-slate-600">Support</p>
            </div>
          </div>
        </div>
        {/* Rotating Image side */}
        <div>
          <img
            src={images[currentIndex]}
            alt="Office workspace slideshow"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px] transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
