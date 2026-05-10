import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

import TechnologyNode
from "../graph/nodes/TechnologyNode";

import NeuralEdge
from "../graph/edges/NeuralEdge";

import {
  buildNodes,
  buildEdges,
} from "../graph/engine/buildGraph";

const nodeTypes = {
  technology: TechnologyNode,
};

const edgeTypes = {
  neural: NeuralEdge,
};

export default function TechNeuralMap({
  activeCategory,
}) {

  const [zoomLevel, setZoomLevel] =
    useState(0.55);

  const [paddingLevel, setPaddingLevel] =
    useState(0.1);

  useEffect(() => {

    const updateResponsiveLayout = () => {

      // MOBILE

      if (window.innerWidth < 640) {

        setZoomLevel(0.42);
        setPaddingLevel(0.8);

      // TABLET

      } else if (window.innerWidth < 1024) {

        setZoomLevel(0.52);
        setPaddingLevel(0.02);

      // DESKTOP

      } else {

        setZoomLevel(0.62);
        setPaddingLevel(0.015);
      }
    };

    updateResponsiveLayout();

    window.addEventListener(
      "resize",
      updateResponsiveLayout
    );

    return () => {

      window.removeEventListener(
        "resize",
        updateResponsiveLayout
      );
    };

  }, []);

  const nodes = useMemo(() => {

    return buildNodes().map((node) => ({
      ...node,

      data: {
        ...node.data,
        activeCategory,
      },
    }));

  }, [activeCategory]);

  const edges = useMemo(
    () => buildEdges(),
    []
  );

  return (
    <section
      className="
        relative

        w-full

        h-[260px]
        sm:h-[340px]
        lg:h-[420px]

        overflow-hidden
        rounded-3xl

        bg-transparent
        mb-[-190px]
      "
    >

      {/* AMBIENT LIGHT */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.025),transparent_60%)]

          pointer-events-none
        "
      />

      {/* TECHNICAL GRID */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.06]

          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]

          bg-[size:60px_60px]

          pointer-events-none
        "
      />

      {/* FLOW SYSTEM */}

      <ReactFlow
        style={{
          transform: "translateY(-50px)",
        }}

        nodes={nodes}
        edges={edges}

        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}

        fitView

        fitViewOptions={{
          padding: paddingLevel,
          duration: 0,
        }}

        minZoom={zoomLevel}
        maxZoom={zoomLevel}

        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}

        panOnDrag={false}
        panOnScroll={false}

        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}

        preventScrolling={false}

        proOptions={{
          hideAttribution: true,
        }}
      />

    </section>
  );
}