import { useState } from "react";

import TechNeuralMap
from "./TechNeuralMap";

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
  ] = useState(null);

  return (

    <section>

      {/* CATEGORY BUTTONS */}

      <div
        className="
          flex
          flex-wrap

          gap-3

          mb-2
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
              py-2

              rounded-[18px]

              border

              text-[11px]
              font-medium

              tracking-[0.08em]

              transition-all
              duration-300

              select-none

              hover:scale-105

              ${
                activeCategory === tech.category

                  ? `
                    bg-[#e5e7eb]

                    border-cyan-400

                    text-[#111827]

                    shadow-[0_0_18px_rgba(34,211,238,0.25)]
                  `

                  : `
                    bg-[#cfd4dc]

                    border-[#1f2937]

                    text-[#1f2937]

                    hover:bg-[#d9dde4]
                  `
              }
            `}
          >
            {tech.name}

          </button>

        ))}

      </div>

      {/* NEURAL MAP */}

      <TechNeuralMap
        activeCategory={activeCategory}
      />

    </section>
  );
}