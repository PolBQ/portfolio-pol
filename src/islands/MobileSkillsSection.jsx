import {
  technologies,
} from "../graph/data/technologies";

export default function MobileSkillsSection({
  activeCategory,
}) {

  // =====================================================
  // FILTER SKILLS
  // =====================================================

  const filteredSkills =

    activeCategory

      ? technologies.filter(
          (skill) =>

            skill.category ===
            activeCategory
        )

      : technologies;

  return (

    <section
      className="
        w-full

        py-4
        mb-[-80px]
      "
    >

      <div
        className="
          flex
          flex-wrap

          justify-center

          gap-3
        "
      >

        {
          filteredSkills.map((skill) => (

            <div
              key={skill.id}

              className={`
                rounded-full

                border

                px-4
                py-2

                text-[11px]
                font-medium
                tracking-[0.01em]

                transition-all
                duration-200

                active:scale-[0.98]

                ${
                  activeCategory &&
                  skill.category ===
                  activeCategory

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
              {skill.label}
            </div>
          ))
        }

      </div>

    </section>
  );
}