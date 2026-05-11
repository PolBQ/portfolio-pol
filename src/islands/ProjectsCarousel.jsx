import {
  Splide,
  SplideSlide,
} from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const projects = [

  {
    title:
      "LoRa Propagation AI",

    description:
      "AI-assisted propagation analysis for LoRa networks.",

    stack:
      "Python · TensorFlow · OpenCV",

    image:
      "/images/projects/lora-ai.webp",
  },

  {
    title:
      "Embedded Telemetry System",

    description:
      "ESP32 + LoRa telemetry and monitoring platform.",

    stack:
      "ESP32 · MQTT · FreeRTOS",

    image:
      "/images/projects/telemetry.webp",
  },

  {
    title:
      "Neural RF Analysis",

    description:
      "Signal classification and RF analytics.",

    stack:
      "CNN · RF · Pandas",

    image:
      "/images/projects/rf.webp",
  },
];

export default function ProjectsCarousel() {

  return (

    <section
      className="
        relative

        w-full

        overflow-hidden

        pt-2
        pb-0

        mt-[-30px]
        mb-[-140px]
      "
    >

      {/* AMBIENT LIGHT */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_65%)]
        "
      />

      {/* SECONDARY GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          h-[420px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/10

          blur-3xl
        "
      />

      <Splide

        className="pb-0"

        options={{

          type: "slide",

          rewind: true,

          focus: "center",

          perPage: 1.35,

          perMove: 1,

          gap: "1rem",

          padding: "10%",

          speed: 700,

          pagination: false,

          arrows: true,

          drag: "free",

          snap: true,

          flickPower: 120,

          flickMaxPages: 1,

          updateOnMove: true,

          trimSpace: false,

          omitEnd: true,

          breakpoints: {

            1280: {

              perPage: 1.15,

              padding: "6%",
            },

            1024: {

              perPage: 1.1,

              padding: "4%",
            },

            640: {

              perPage: 1,

              padding: "1rem",

              gap: "0.8rem",

              drag: true,
            },
          },
        }}
      >

        {
          projects.map((project) => (

            <SplideSlide
              key={project.title}
            >

              <article
                className="
                  group

                  overflow-hidden

                  rounded-[30px]

                  border
                  border-white/10

                  bg-[#0f172a]/70
                  backdrop-blur-xl

                  min-h-[220px]
                  sm:min-h-[240px]
                  lg:min-h-[260px]

                  transition-all
                  duration-700

                  hover:border-cyan-400/30
                  hover:-translate-y-1

                  hover:shadow-[0_20px_80px_rgba(34,211,238,0.14)]
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative

                    aspect-[16/7]
                    sm:aspect-[16/6]
                    lg:aspect-[16/4]

                    overflow-hidden
                  "
                >

                  {/* OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      z-10

                      bg-gradient-to-t
                      from-[#020617]/80
                      via-[#020617]/10
                      to-transparent
                    "
                  />

                  <img
                    src={project.image}

                    alt={project.title}

                    className="
                      h-full
                      w-full

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                  />

                </div>

                {/* CONTENT */}

                <div
                  className="
                    flex
                    flex-col
                    justify-between

                    gap-3

                    px-5
                    py-4
                  "
                >

                  {/* TEXT */}

                  <div>

                    <h3
                      className="
                        text-lg
                        lg:text-[26px]

                        font-semibold

                        tracking-[-0.03em]

                        text-white
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        max-w-[90%]

                        text-[14px]
                        lg:text-[15px]

                        leading-relaxed

                        text-slate-400
                      "
                    >
                      {project.description}
                    </p>

                  </div>

                  {/* STACK TAGS */}

                  <div
                    className="
                      flex
                      flex-wrap

                      gap-2
                    "
                  >

                    {
                      project.stack
                        .split(" · ")
                        .map((tech) => (

                          <span
                            key={tech}

                            className="
                              rounded-full

                              border
                              border-cyan-400/20

                              bg-cyan-400/10

                              px-3
                              py-1

                              text-[11px]
                              tracking-wide

                              text-cyan-200
                            "
                          >
                            {tech}
                          </span>
                        ))
                    }

                  </div>

                </div>

              </article>

            </SplideSlide>
          ))
        }

      </Splide>

      {/* SPLIDE STYLES */}

      <style jsx>{`

        .splide {
          overflow: visible;
        }

        .splide__track {
          overflow: visible;

          padding-bottom: 0 !important;

          cursor: grab;
        }

        .splide__track:active {
          cursor: grabbing;
        }

        .splide__list {
          align-items: stretch;
        }

        .splide__slide {

          opacity: 0.18;

          filter: blur(0.8px);

          transition:
            opacity 0.5s ease,
            filter 0.5s ease,
            transform 0.5s ease;

          transform-origin: center center;
        }

        .splide__slide.is-active {

          opacity: 1;

          filter: blur(0px);
        }

        .splide__arrow {

          background:
            rgba(15, 23, 42, 0.72);

          border:
            1px solid rgba(255,255,255,0.08);

          backdrop-filter: blur(12px);

          width: 42px;
          height: 42px;

          opacity: 1;

          transition:
            all 0.3s ease;
        }

        .splide__arrow:hover {

          background:
            rgba(34,211,238,0.16);

          border-color:
            rgba(34,211,238,0.3);
        }

        .splide__arrow svg {
          fill: white;
        }

      `}</style>

    </section>
  );
}