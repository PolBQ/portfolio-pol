import {
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink,
  forceCollide,
  forceX,
  forceY,
} from "d3-force";

const categoryPositions: Record<string, any> = {
  ai: { x: 350, y: -200 },

  embedded: { x: -350, y: 100 },

  iot: { x: 300, y: 250 },

  core: { x: 0, y: 0 },
};

export function generateNeuralLayout(
  nodes: any[],
  edges: any[]
) {
  const simulation = forceSimulation(nodes)

    .force(
      "charge",
      forceManyBody().strength(-350)
    )

    .force(
      "center",
      forceCenter(0, 0)
    )

    .force(
      "link",
      forceLink(edges)
        .id((d: any) => d.id)
        .distance(120)
    )

    .force(
      "collision",
      forceCollide(70)
    )

    // CATEGORY CLUSTERING

    .force(
      "x",
      forceX((node: any) =>
        categoryPositions[node.data.category]?.x || 0
      ).strength(0.08)
    )

    .force(
      "y",
      forceY((node: any) =>
        categoryPositions[node.data.category]?.y || 0
      ).strength(0.08)
    )

    .stop();

  for (let i = 0; i < 400; i++) {
    simulation.tick();
  }

  return nodes.map((node) => ({
    ...node,

    position: {
      x: node.x || 0,
      y: node.y || 0,
    },
  }));
}