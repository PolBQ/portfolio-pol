import {
  BaseEdge,
  getBezierPath,
} from "reactflow";

export default function NeuralEdge(props: any) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      {/* BASE LINE */}

      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "#0f172a",
          strokeWidth: 3,
        }}
      />

      {/* GLOW LINE */}

      <BaseEdge
        id={`${id}-glow`}
        path={edgePath}
        style={{
          stroke: "#38bdf8",
          strokeWidth: 1.5,
          filter: "drop-shadow(0 0 10px #38bdf8)",
        }}
      />

      {/* ANIMATED SIGNAL */}

      <circle r="4" fill="#67e8f9">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path={edgePath}
        />
      </circle>
    </>
  );
}