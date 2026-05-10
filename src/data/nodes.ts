export const initialNodes = [
  {
    id: "core",
    position: { x: 0, y: 0 },
    data: { label: "POL" },
    type: "default",
  },

  {
    id: "ai",
    position: { x: 250, y: 0 },
    data: { label: "AI" },
    type: "default",
  },
];

export const initialEdges = [
  {
    id: "e1",
    source: "core",
    target: "ai",
    animated: true,
  },
];