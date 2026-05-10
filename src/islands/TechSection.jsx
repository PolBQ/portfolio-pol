import { useState } from "react";

import TechNeuralMap
from "./TechNeuralMap";

const technologies = [
  {
    name: "AI",
    category: "ai",
    libs: "Python, TensorFlow, OpenCV",
  },

  {
    name: "Embedded",
    category: "embedded",
    libs: "ESP32, STM32, FreeRTOS",
  },

  {
    name: "IoT",
    category: "iot",
    libs: "LoRa, MQTT, Sensors",
  },

  {
    name: "Backend",
    category: "backend",
    libs: "Docker, Linux, Nginx",
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

      <div className="flex flex-wrap gap-3">

        {technologies.map((tech) => (

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

              ${
                activeCategory === tech.category

                  ? `
                    bg-[#d9dde4]
                    border-[#111827]
                    text-[#111827]

                    scale-105
                    shadow-sm
                  `

                  : `
                    bg-[#cfd4dc]

                    border-[#1f2937]

                    text-[#1f2937]

                    hover:bg-[#d9dde4]
                    hover:scale-105
                  `
              }
            `}
          >
            {tech.name}

            {/* TOOLTIP */}

            <div
              className="
                pointer-events-none

                absolute
                left-1/2
                top-full

                z-20

                mt-2

                min-w-[180px]

                -translate-x-1/2

                rounded-lg

                border
                border-slate-300

                bg-white

                px-3
                py-2

                text-xs
                text-slate-600

                opacity-0

                transition-opacity
                duration-200

                group-hover:opacity-100
              "
            >
              {tech.libs}
            </div>

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