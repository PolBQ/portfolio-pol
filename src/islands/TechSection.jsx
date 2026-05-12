import {
  useEffect,
  useState,
} from "react";

import MobileSkillsSection from "./MobileSkillsSection.jsx";
import TechNeuralMap from "./TechNeuralMap";

const categories = [

  {
    name: "AI",
    category: "ai",

    libs:
      "TensorFlow, Keras, OpenCV, CNN",
  },

  {
    name: "Embedded",
    category: "embedded",

    libs:
      "ESP32, STM32, FreeRTOS, SPI",
  },

  {
    name: "Telecom",
    category: "telecom",

    libs:
      "LoRa, MQTT, RF, GPS",
  },

  {
    name: "Web",
    category: "webinfra",

    libs:
      "Docker, Linux, Astro, React",
  },

  {
    name: "Data",
    category: "data",

    libs:
      "Pandas, NumPy, EDA",
  },

  {
    name: "Robotics",
    category: "robotics",

    libs:
      "PLC, PID, HMI",
  },

  {
    name: "Electronics",
    category: "electronics",

    libs:
      "PCB, ORCAD, Analog Design",
  },
];

export default function TechSection() {

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("ai");

  const [
    isMobile,
    setIsMobile,
  ] = useState(false);

  // =====================================================
  // RESPONSIVE
  // =====================================================

  useEffect(() => {

    const handleResize = () => {

      setIsMobile(
        window.innerWidth < 640
      );
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );
    };

  }, []);

  return (

    <section>

      {/* CATEGORY BUTTONS */}

      <div
        className="
          flex
          flex-wrap

          gap-3

          mb-4
        "
      >

        {categories.map((tech) => (

          <button
            key={tech.category}

            onClick={() =>
              setActiveCategory(

                activeCategory === tech.category
                  ? null
                  : tech.category
              )
            }

            className={`
              relative

              px-5
              py-2.5

              rounded-full

              border

              text-[11px]
              font-medium

              tracking-[0.08em]

              transition-all
              duration-200

              select-none

              active:scale-[0.98]

              ${
                activeCategory === tech.category

                  ? `
                    border-cyan-400

                    bg-cyan-50

                    text-slate-900
                  `

                  : `
                    border-slate-300

                    bg-slate-100

                    text-slate-700

                    hover:border-cyan-300
                    hover:bg-slate-50
                  `
              }
            `}
          >

            {tech.name}

          </button>

        ))}

      </div>

      {/* SKILLS */}

      {
        isMobile

          ? (

            <MobileSkillsSection
              activeCategory={activeCategory}
            />
          )

          : (

            <TechNeuralMap
              activeCategory={activeCategory}
            />
          )
      }

    </section>
  );
}