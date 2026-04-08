
import hoverBg from "../../assets/image/hoverBg.png";
import icon1 from "../../assets/image/discussion.png";
import icon1White from "../../assets/image/discussion-white.png";
import icon2 from "../../assets/image/planning.png"
import icon2White from "../../assets/image/planningWhite.png"
import icon3 from "../../assets/image/execute.png"
import icon3White from "../../assets/image/executeWhite.png"
import icon4 from "../../assets/image/package-box.png"
import icon4White from "../../assets/image/package-White.png"
import { GoArrowRight } from "react-icons/go";

const cards = [
  {
    title: "Consultation",
    description:
      "We start by understanding your needs and goals to tailor our services accordingly.",
    icon: icon1,
    iconWhite: icon1White,
  },
  {
    title: "Planning",
    description:
      "We create a detailed plan and timeline to ensure the project stays on track.",
    icon: icon2,
    iconWhite: icon2White,
  },
  {
    title: "Execution",
    description:
      "Our team executes the plan with precision and keeps you updated throughout.",
    icon: icon3,
    iconWhite: icon3White,
  },
  {
    title: "Deliver",
    description:
      "Our team executes the plan with precision and keeps you updated throughout.",
    icon: icon4,
    iconWhite: icon4White,
  },
];

const HowWeWork = () => {
  return (
    <div className="pt-16 lg:pt-28 w-9/12 mx-auto">
      <div className="text-center mb-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold">How We Work</h1>
        <p className="text-neutral mt-4 md:w-80 lg:w-xl">
          This growth led us to create "Web Briks LLC." Now, we offer additional
          services, including virtual assistance and web design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative w-full h-full rounded-2xl overflow-hidden bg-base-100 transition-all duration-300"
          >
            {/* Background Image appears only on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${hoverBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Card content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6">
              {/* Icon swap */}
              <img
                className="w-12 transition duration-300 group-hover:hidden"
                src={card.icon}
                alt="icon"
              />
              <img
                className="w-12 transition duration-300 hidden group-hover:block"
                src={card.iconWhite}
                alt="icon white"
              />

              <div className="space-y-2 mt-4">
                <h2 className="text-2xl font-medium text-primary transition-colors duration-300 group-hover:text-white">
                  {card.title}
                </h2>
                <p className="text-neutral transition-colors duration-300 group-hover:text-white">
                  {card.description}
                </p>
              </div>

              <button className="mt-4 bg-transparent flex items-center gap-2 text-primary transition-colors duration-300 group-hover:text-white">
                Explore More <GoArrowRight className="rotate-[-30deg]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;