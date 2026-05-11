import { useEffect, useRef, useState } from "react";

export default function PublicationAccordion({ publication }) {

  const [open, setOpen] = useState(false);

  const contentRef = useRef(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {

    if (!contentRef.current) return;

    if (open) {

      setHeight(contentRef.current.scrollHeight);

    } else {

      setHeight(0);

    }

  }, [open]);

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

        card-base
        overflow-hidden
      "
    >

      {/* HEADER */}

      <button
        type="button"

        aria-expanded={open}

        onClick={() => setOpen(!open)}

        className="
          relative
          z-10

          w-full

          flex
          items-center
          justify-between

          gap-4

          px-5
          py-4

          text-left

          hover:bg-slate-900/20

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

              font-medium

              text-slate-100

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

          <span
            className="
              text-sm
              text-muted
            "
          >
            {publication.year}
          </span>

          {/* ICON */}

          <div
            className={`
              text-muted

              transition-transform
              duration-500

              ease-[cubic-bezier(0.22,1,0.36,1)]

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
          relative
          z-0

          overflow-hidden

          transition-all
          duration-500

          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >

        <div
          ref={contentRef}

          className={`
            border-t
            border-slate-800

            px-5
            py-5

            transition-all
            duration-500

            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
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

                  text-muted

                  mb-2
                "
              >
                Conference
              </p>

              <p className="text-sm text-slate-300">
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

                  text-muted

                  mb-2
                "
              >
                Location
              </p>

              <p className="text-sm text-slate-300">
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

                  text-muted

                  mb-2
                "
              >
                DOI
              </p>

              <p
                className="
                  text-sm
                  text-slate-300
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
                    className="button-secondary text-sm"
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
                    className="button-secondary text-sm"
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
                    className="button-secondary text-sm"
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