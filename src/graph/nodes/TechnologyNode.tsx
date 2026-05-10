import { categories } from "../data/categories";

export default function TechnologyNode({ data }: any) {
  const color = categories[data.category as keyof typeof categories]?.color || "#38bdf8";

  return (
    <div
      className="
        px-5
        py-3

        rounded-2xl

        border

        bg-slate-950/80
        backdrop-blur-md

        text-slate-100
        text-sm
        font-medium

        transition-all
        duration-300

        hover:scale-105
      "
      style={{
        borderColor: `${color}55`,
        boxShadow: `0 0 30px ${color}33`,
      }}
    >
      {data.label}
    </div>
  );
}