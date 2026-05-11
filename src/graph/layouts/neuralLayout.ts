type Category =
  | "ai"
  | "embedded"
  | "telecom"
  | "webinfra"
  | "data"
  | "robotics"
  | "electronics";

type Position = {
  x: number;
  y: number;
};

type NeuralNode = {
  id: string;
  category: string;
  [key: string]: any;
};

// =====================================================
// RESPONSIVE CATEGORY CENTERS
// =====================================================

function getCategoryCenters() {

  const viewportWidth =
    typeof window !== "undefined"
      ? window.innerWidth
      : 1440;

  const isMobile =
    viewportWidth < 640;

  const isTablet =
    viewportWidth < 1024;

  // =====================================================
  // RESPONSIVE HORIZONTAL SPREAD
  // =====================================================

  const horizontalSpread = isMobile

    ? Math.max(
        90,
        viewportWidth * 0.14
      )

    : isTablet

      ? Math.max(
          170,
          viewportWidth * 0.16
        )

      : Math.max(
          260,
          Math.min(
            viewportWidth * 0.18,
            520
          )
        );

  // =====================================================
  // RESPONSIVE VERTICAL LEVELS
  // =====================================================

  const topY =
    isMobile
      ? -60
      : -140;

  const midY =
    isMobile
      ? 70
      : 120;

  const lowerY =
    isMobile
      ? 220
      : 320;

  const bottomY =
    isMobile
      ? 340
      : 520;

  return {

    ai: {
      x: -horizontalSpread,
      y: topY,
    },

    embedded: {
      x: horizontalSpread,
      y: topY + 10,
    },

    telecom: {
      x: -horizontalSpread * 0.72,
      y: midY,
    },

    webinfra: {
      x: horizontalSpread * 0.72,
      y: midY,
    },

    data: {
      x: 0,
      y: lowerY,
    },

    robotics: {
      x: -horizontalSpread * 1.02,
      y: bottomY,
    },

    electronics: {
      x: horizontalSpread * 1.02,
      y: bottomY,
    },
  };
}
// =====================================================
// DISTANCE
// =====================================================

function distance(
  a: Position,
  b: Position,
) {

  return Math.sqrt(
    Math.pow(a.x - b.x, 2) +
    Math.pow(a.y - b.y, 2)
  );
}

// =====================================================
// SEEDED RANDOM
// =====================================================

function seededRandom(
  seed: number,
) {

  let value =
    seed % 2147483647;

  if (value <= 0) {

    value += 2147483646;
  }

  return () => {

    value =
      (value * 16807) %
      2147483647;

    return (
      (value - 1) /
      2147483646
    );
  };
}

// =====================================================
// STRING TO SEED
// =====================================================

function stringToSeed(
  value: string,
) {

  return value
    .split("")
    .reduce(
      (acc, char) =>
        acc + char.charCodeAt(0),
      0
    );
}

// =====================================================
// MAIN LAYOUT
// =====================================================
const GLOBAL_LAYOUT_SEED = 262;
export function generateNeuralLayout(
  nodes: NeuralNode[],
) {

  const centers =
    getCategoryCenters();

  const viewportWidth =
    typeof window !== "undefined"
      ? window.innerWidth
      : 1440;

  const isMobile =
    viewportWidth < 640;

  const groupedNodes:
    Record<string, NeuralNode[]> = {};

  const usedPositions:
    Position[] = [];

  // =====================================================
  // GROUP BY CATEGORY
  // =====================================================

  nodes.forEach((node) => {

    if (!groupedNodes[node.category]) {

      groupedNodes[node.category] = [];
    }

    groupedNodes[node.category].push(node);
  });

  const result: NeuralNode[] = [];

  // =====================================================
  // CATEGORY GENERATION
  // =====================================================

  Object.entries(groupedNodes).forEach(
    ([categoryKey, categoryNodes]) => {

      const category =
        categoryKey as Category;

      const center =
        centers[category] || {
          x: 0,
          y: 0,
        };

      // =================================================
      // ROOT NODE
      // =================================================

      const rootNode =
        categoryNodes.find(
          (node) =>
            node.id === category
        );

      if (rootNode) {

        usedPositions.push({
          x: center.x,
          y: center.y,
        });

        result.push({

          ...rootNode,

          position: {
            x: center.x,
            y: center.y,
          },
        });
      }

      // =================================================
      // STABLE SKILL ORDER
      // =================================================

      const skillNodes =

        categoryNodes

          .filter(
            (node) =>
              node.id !== category
          )

          .sort((a, b) =>
            a.id.localeCompare(b.id)
          );

      const totalSkills =
        skillNodes.length;

      // =================================================
      // RECTANGLE COUNT
      // =================================================

      const rectangleCount =
        Math.max(
          3,
          Math.ceil(totalSkills / 4)
        );

      let skillIndex = 0;

      // =================================================
      // NESTED RECTANGLES
      // =================================================

      for (
        let rectIndex = 0;
        rectIndex < rectangleCount;
        rectIndex++
      ) {

        // ===============================================
        // PROGRESSIVE RECTANGLES
        // ===============================================

      const viewportWidth =
        typeof window !== "undefined"
          ? window.innerWidth
          : 1440;

      const isMobile =
        viewportWidth < 640;

      const rectWidth = isMobile

        ? 90 + rectIndex * 60

        : 120 + rectIndex * 110;

      const rectHeight = isMobile

        ? 60 + rectIndex * 40

        : 80 + rectIndex * 60;

        // ===============================================
        // SKILLS PER RECTANGLE
        // ===============================================

        const skillsPerRectangle =
          Math.min(
            totalSkills - skillIndex,
            2 + rectIndex
          );

        for (
          let i = 0;
          i < skillsPerRectangle;
          i++
        ) {

          const skill =
            skillNodes[skillIndex];

          if (!skill) {
            break;
          }

          // =============================================
          // SEEDED RANDOM
          // =============================================

          const seed =
            stringToSeed(skill.id) + GLOBAL_LAYOUT_SEED;

          const random =
            seededRandom(seed);

          let attempts = 0;

          let validPosition =
            false;

          let finalPosition = {
            x: center.x,
            y: center.y,
          };

          // =============================================
          // POSITION SEARCH
          // =============================================

          while (
            !validPosition &&
            attempts < 120
          ) {

            const x =
              center.x +
              (random() - 0.5) *
              rectWidth;

            const y =
              center.y +
              (random() - 0.5) *
              rectHeight;

            const candidate = {
              x,
              y,
            };

            // ===========================================
            // OVERLAP CONTROL
            // ===========================================

            const tooClose =
              usedPositions.some(
                (pos) => {

                  return (
                    distance(
                      pos,
                      candidate
                    ) < 
                    (isMobile ? 40 : 60)
                  );
                }
              );

            if (!tooClose) {

              validPosition =
                true;

              finalPosition =
                candidate;

              usedPositions.push(
                candidate
              );
            }

            attempts++;
          }

          // =============================================
          // SAFE FALLBACK
          // =============================================

          if (!validPosition) {

            finalPosition = {

              x:
                center.x +
                (random() - 0.5) *
                rectWidth *
                0.6,

              y:
                center.y +
                (random() - 0.5) *
                rectHeight *
                0.6,
            };
          }

          result.push({

            ...skill,

            position:
              finalPosition,
          });

          skillIndex++;
        }
      }
    }
  );

  return result;
}