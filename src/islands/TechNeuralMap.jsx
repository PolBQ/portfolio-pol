import React from "react";
import TechnologyNode from "../graph/nodes/TechnologyNode";
import CoreNode from "../graph/nodes/CoreNode";
import NeuralEdge from "../graph/edges/NeuralEdge";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

import {
  buildNodes,
  buildEdges,
} from "../graph/engine/buildGraph";

const nodes = buildNodes();
const edges = buildEdges();
const nodeTypes = {
  technology: TechnologyNode,
  core: CoreNode,
};
const edgeTypes = {
  neural: NeuralEdge,
};
export default function TechNeuralMap() {
  return (
    <section
      className="
        relative
        w-full
        h-[750px]
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#020617]"
    >
      <div
        className="
          absolute
          inset-0

          opacity-20

          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]

          bg-[size:60px_60px]

          pointer-events-none
        "
      />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background
          gap={32}
          size={1}
          color="#1e293b"
        />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </section>
  );
}