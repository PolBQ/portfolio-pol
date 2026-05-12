import { motion } from "framer-motion";

import { categories }
from "../data/categories";

export default function TechnologyNode({
  data,
}: any) {

  // =====================================================
  // MOBILE DETECTION
  // =====================================================

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 640;

  // =====================================================
  // CATEGORY COLOR
  // =====================================================

  const color =
    categories[
      data.category as keyof typeof categories
    ]?.color || "#64748b";

  // =====================================================
  // STATES
  // =====================================================

  const isActive =
    data.activeCategory ===
    data.category;

  const isDimmed =
    data.activeCategory &&
    !isActive;

  // =====================================================
  // CATEGORY ROOT NODES
  // =====================================================

  const isCategoryNode =

    data.label === "AI" ||
    data.label === "Embedded" ||
    data.label === "IoT" ||
    data.label === "Backend";

  // =====================================================
  // ANIMATION
  // =====================================================

  const animation = {

    scale: isActive
      ? 1.03
      : 1,
  };

  // =====================================================
  // COMPONENT
  // =====================================================

  return (

    <motion.div

      animate={animation}

      transition={{

        duration: 0.2,

        ease: "easeOut",
      }}

      whileHover={

        isMobile

          ? {}

          : {

              y: -1,
            }
      }

      className={`
        flex
        items-center
        justify-center

        rounded-full

        border

        transition-all
        duration-200

        select-none

        ${
          isDimmed
            ? "opacity-35"
            : "opacity-100"
        }

        ${
          isCategoryNode

            ? isActive

              ? `
                px-7
                py-3

                text-[14px]
                sm:text-[15px]

                font-semibold

                tracking-[0.12em]
              `

              : `
                px-5
                py-2.5

                text-[12px]
                sm:text-[13px]

                font-medium

                tracking-[0.10em]
              `

            : isActive

              ? `
                px-5
                py-2.5

                text-[12px]
                sm:text-[13px]

                font-medium

                tracking-[0.06em]
              `

              : `
                px-3.5
                py-1.5

                text-[10px]
                sm:text-[11px]

                font-medium

                tracking-[0.03em]
              `
        }

        ${
          isActive

            ? `
              bg-cyan-50
              text-slate-900
            `

            : `
              bg-slate-100
              text-slate-700
            `
        }
      `}

      style={{

        zIndex:
          isActive
            ? 10
            : 1,

        borderColor:

          isActive
            ? color
            : `${color}55`,

        boxShadow:

          isActive

            ? `0 1px 3px ${color}22`
            : "0 1px 2px rgba(15,23,42,0.04)",
      }}
    >

      {data.label}

    </motion.div>
  );
}