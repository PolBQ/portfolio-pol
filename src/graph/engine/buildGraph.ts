import {
  technologies,
  relations,
} from "../data/technologies";

import { generateNeuralLayout }
from "../layouts/neuralLayout";

export function buildNodes() {
  const rawNodes = technologies.map((tech) => ({
    id: tech.id,

    data: {
      label: tech.label,
      category: tech.category,
    },

    type: "technology",
  }));

  return generateNeuralLayout(
    rawNodes,
    relations
  );
}

export function buildEdges() {
  return relations.map((relation) => ({
    id: relation.id,

    source: relation.source,
    target: relation.target,

    type: "neural",
  }));
}