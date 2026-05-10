import { motion } from "framer-motion";

import { categories }
from "../data/categories";

export default function TechnologyNode({ data }: any) {

  const color =
    categories[
      data.category as keyof typeof categories
    ]?.color || "#64748b";

  const isActive =
    data.activeCategory === data.category;

  const isDimmed =
    data.activeCategory &&
    !isActive;

  const isCategoryNode =
    data.label === "AI" ||
    data.label === "Embedded" ||
    data.label === "IoT" ||
    data.label === "Backend";

  const floatDuration = 4;
  const floatOffset = 8;
  return (
    <motion.div

      animate={{
        y: isActive
          ? 0
          : [
              -floatOffset,
              floatOffset,
              -floatOffset,
            ],
      }}

      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      whileHover={{
        y: isActive ? 0 : -2,
      }}

      className={`
        flex
        items-center
        justify-center

        rounded-[18px]

        border

        shadow-sm

        transition-all
        duration-300

        select-none

        backdrop-blur-sm

        ${
          isDimmed
            ? "opacity-25"
            : "opacity-100"
        }

        ${
          isCategoryNode

            ? isActive

              ? `
                px-8
                py-4

                text-[15px]
                font-bold

                tracking-[0.14em]
              `

              : `
                px-6
                py-3

                text-[13px]
                font-semibold

                tracking-[0.12em]
              `

            : isActive

              ? `
                px-6
                py-3

                text-[13px]
                font-semibold

                tracking-[0.08em]
              `

              : `
                px-4
                py-2

                text-[11px]
                font-medium

                tracking-[0.04em]
              `
        }

        ${
          isActive

            ? `
              bg-[#e5e7eb]
              text-[#111827]
            `

            : `
              bg-[#cfd4dc]
              text-[#1f2937]
            `
        }
      `}

      style={{
        zIndex: isActive
          ? 20
          : 1,

        borderColor: isActive
          ? color
          : `${color}55`,

        boxShadow: isActive
          ? `0 0 18px ${color}44`
          : `0 0 4px ${color}22`,
      }}
    >
      {data.label}
    </motion.div>
  );
}