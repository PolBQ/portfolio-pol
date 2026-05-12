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

      <Splide

        className="pb-0"

        options={{

          type: "slide",

          rewind: true,

          focus: "center",

          perPage: 1.2,

          perMove: 1,

          gap: "1rem",

          padding: "8%",

          speed: 600,

          pagination: false,

          arrows: true,

          drag: true,

          snap: true,

          trimSpace: false,

          breakpoints: {

            1024: {

              perPage: 1.05,

              padding: "4%",
            },

            640: {

              perPage: 1,

              padding: "1rem",

              gap: "0.8rem",
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

                  rounded-[28px]

                  border
                  border-slate-300

                  bg-slate-100

                  shadow-sm

                  min-h-[220px]
                  sm:min-h-[240px]
                  lg:min-h-[260px]

                  transition-all
                  duration-300

                  hover:border-cyan-300
                  hover:-translate-y-[2px]
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
                      from-slate-900/55
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
                      duration-500

                      group-hover:scale-[1.02]
                    "
                  />

                </div>

                {/* CONTENT */}

                <div
                  className="
                    flex
                    flex-col
                    justify-between

                    gap-4

                    px-5
                    py-5
                  "
                >

                  {/* TEXT */}

                  <div>

                    <h3
                      className="
                        text-lg
                        lg:text-[24px]

                        font-semibold

                        tracking-[-0.03em]

                        text-slate-900
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        max-w-[95%]

                        text-[14px]
                        lg:text-[15px]

                        leading-relaxed

                        text-slate-600
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
                              border-cyan-200

                              bg-cyan-50

                              px-3
                              py-1

                              text-[11px]
                              font-medium

                              tracking-wide

                              text-slate-700
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

          opacity: 0.45;

          transition:
            opacity 0.35s ease,
            transform 0.35s ease;
        }

        .splide__slide.is-active {

          opacity: 1;
        }

        .splide__arrow {

          background:
            #f8fafc;

          border:
            1px solid #cbd5e1;

          width: 42px;
          height: 42px;

          opacity: 1;

          transition:
            all 0.2s ease;

          box-shadow:
            0 1px 2px rgba(15,23,42,0.06);
        }

        .splide__arrow:hover {

          border-color:
            #67e8f9;

          background:
            #ecfeff;
        }

        .splide__arrow svg {
          fill: #0f172a;
        }

      `}</style>

    </section>
  );
}