import { useEffect } from "react";

const Stack = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply the class
          entry.target.classList.add("translate-y-[100%]");
        }
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="relative max-w-[1260px] mx-auto mt-10">
        <div className="space-y-10">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className={`card transition-transform duration-500 ease-in-out transform ${
                index === 0 ? "translate-y-0" : `translate-y-[${index * 20}px]`
              }`}
            >
              <div
                className={`relative p-10 rounded-2xl shadow-lg ${
                  index % 2 === 0 ? "bg-card-1" : "bg-card-2"
                }`}
              >
                <h1 className="text-2xl font-bold text-white">
                  Card {index + 1}
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
