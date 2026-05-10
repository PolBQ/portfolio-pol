export function generateNeuralLayout(
  nodes: any[],
) {

  const positions: Record<string, any> = {

    // AI

    ai: {
      x: -180,
      y: -20,
    },

    python: {
      x: -260,
      y: 40,
    },

    tensorflow: {
      x: -140,
      y: 70,
    },

    opencv: {
      x: -210,
      y: 120,
    },

    // EMBEDDED

    embedded: {
      x: 180,
      y: -10,
    },

    esp32: {
      x: 120,
      y: 60,
    },

    stm32: {
      x: 240,
      y: 80,
    },

    // IOT

    iot: {
      x: -100,
      y: 170,
    },

    lora: {
      x: -170,
      y: 240,
    },

    mqtt: {
      x: -40,
      y: 250,
    },

    // BACKEND

    backend: {
      x: 170,
      y: 170,
    },

    docker: {
      x: 100,
      y: 250,
    },

    linux: {
      x: 190,
      y: 260,
    },

    nginx: {
      x: 280,
      y: 240,
    },
  };

  return nodes.map((node) => ({
    ...node,

    position:
      positions[node.id] || {
        x: 0,
        y: 0,
      },
  }));
}