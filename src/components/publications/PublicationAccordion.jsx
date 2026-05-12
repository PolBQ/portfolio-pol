import { useEffect, useRef, useState } from "react";

export default function PublicationAccordion({ publication }) {

  const [open, setOpen] = useState(false);

  const contentRef = useRef(null);

  const [height, setHeight] = useState(0);

  // =====================================================
  // HEIGHT CONTROL
  // =====================================================

  useEffect(() => {

    if (!contentRef.current) return;

    if (open) {

      setHeight(contentRef.current.scrollHeight);

    } else {

      setHeight(0);

    }

  }, [open]);

  // =====================================================
  // RESIZE
  // =====================================================

  useEffect(() => {

    const handleResize = () => {

      if (open && contentRef.current) {

        setHeight(contentRef.current.scrollHeight);

      }

    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [open]);

  return (

    <article
      className="
        relative

        overflow-hidden

        rounded-2xl

        border
        border-slate-300

        bg-slate-100

        shadow-sm

        transition-all
        duration-200
      "
    >

      {/* HEADER */}

      <button
        type="button"

        aria-expanded={open}

        onClick={() => setOpen(!open)}

        className="
          relative

          w-full

          flex
          items-center
          justify-between

          gap-4

          px-5
          py-4

          text-left

          hover:bg-slate-200/60

          transition-colors
          duration-200
        "
      >

        {/* TITLE */}

        <div className="min-w-0">

          <h3
            className="
              text-sm
              md:text-base

              font-semibold

              text-slate-900

              leading-snug
            "
          >
            {publication.title}
          </h3>

        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            items-center
            gap-4

            flex-shrink-0
          "
        >

          {/* YEAR */}

          <span
            className="
              text-sm
              text-slate-500
            "
          >
            {publication.year}
          </span>

          {/* ICON */}

          <div
            className={`
              text-slate-500

              transition-transform
              duration-300

              ${open ? "rotate-180" : ""}
            `}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>

          </div>

        </div>

      </button>

      {/* CONTENT */}

      <div
        style={{
          maxHeight: open ? `${height}px` : "0px",
          opacity: open ? 1 : 0,
        }}

        className="
          overflow-hidden

          transition-all
          duration-300
        "
      >

        <div
          ref={contentRef}

          className={`
            border-t
            border-slate-300

            px-5
            py-5

            transition-all
            duration-300

            ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1"
            }
          `}
        >

          <div className="space-y-5">

            {/* CONFERENCE */}

            <div>

              <p
                className="
                  text-xs
                  uppercase

                  tracking-[0.12em]

                  text-slate-500

                  mb-2
                "
              >
                Conference
              </p>

              <p
                className="
                  text-sm
                  text-slate-700
                "
              >
                {publication.conference}
              </p>

            </div>

            {/* LOCATION */}

            <div>

              <p
                className="
                  text-xs
                  uppercase

                  tracking-[0.12em]

                  text-slate-500

                  mb-2
                "
              >
                Location
              </p>

              <p
                className="
                  text-sm
                  text-slate-700
                "
              >
                {publication.location}
              </p>

            </div>

            {/* DOI */}

            <div>

              <p
                className="
                  text-xs
                  uppercase

                  tracking-[0.12em]

                  text-slate-500

                  mb-2
                "
              >
                DOI
              </p>

              <p
                className="
                  text-sm
                  text-slate-700

                  break-all
                "
              >
                {publication.doi}
              </p>

            </div>

            {/* LINKS */}

            <div
              className="
                flex
                flex-wrap

                gap-3

                pt-1
              "
            >

              {
                publication.links.ieee && (
                  <a
                    href={publication.links.ieee}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                      inline-flex
                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-slate-300

                      bg-slate-50

                      px-4
                      py-2

                      text-sm
                      font-medium

                      text-slate-700

                      transition-all
                      duration-200

                      hover:border-cyan-400
                      hover:bg-cyan-50
                      hover:text-slate-900
                    "
                  >
                    IEEE
                  </a>
                )
              }

              {
                publication.links.pdf && (
                  <a
                    href={publication.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                      inline-flex
                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-slate-300

                      bg-slate-50

                      px-4
                      py-2

                      text-sm
                      font-medium

                      text-slate-700

                      transition-all
                      duration-200

                      hover:border-cyan-400
                      hover:bg-cyan-50
                      hover:text-slate-900
                    "
                  >
                    PDF
                  </a>
                )
              }

              {
                publication.links.github && (
                  <a
                    href={publication.links.github}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                      inline-flex
                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-slate-300

                      bg-slate-50

                      px-4
                      py-2

                      text-sm
                      font-medium

                      text-slate-700

                      transition-all
                      duration-200

                      hover:border-cyan-400
                      hover:bg-cyan-50
                      hover:text-slate-900
                    "
                  >
                    GitHub
                  </a>
                )
              }

            </div>

          </div>

        </div>

      </div>

    </article>

  );

}