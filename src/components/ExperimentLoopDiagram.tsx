"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Inputs", sub: "Market research, product signals, competitor analysis", x: 50, y: 40 },
  { label: "Test", sub: "Scoped experiment with clear hypothesis", x: 200, y: 40 },
  { label: "Signal", sub: "Measure activation, conversion, engagement", x: 350, y: 40 },
  { label: "Decide", sub: "Automated reporting surfaces insights", x: 500, y: 40 },
  { label: "Scale / Stop", sub: "Double down or kill and move on", x: 650, y: 40 },
];

export default function ExperimentLoopDiagram() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[750px] mx-auto">
        <svg
          viewBox="0 0 750 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Connection lines */}
          {nodes.slice(0, -1).map((node, i) => (
            <motion.line
              key={`line-${i}`}
              x1={node.x + 45}
              y1={node.y}
              x2={nodes[i + 1].x - 5}
              y2={nodes[i + 1].y}
              stroke="rgba(99, 102, 241, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
            />
          ))}

          {/* Loop-back arrow from last to first */}
          <motion.path
            d={`M ${nodes[4].x + 30} ${nodes[4].y + 15} 
                C ${nodes[4].x + 60} ${nodes[4].y + 70}, 
                  ${nodes[0].x - 30} ${nodes[0].y + 70}, 
                  ${nodes[0].x} ${nodes[0].y + 15}`}
            stroke="rgba(45, 212, 191, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g
              key={node.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              {/* Node circle */}
              <circle
                cx={node.x + 20}
                cy={node.y}
                r="18"
                fill="rgba(99, 102, 241, 0.08)"
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="1"
              />
              {/* Label */}
              <text
                x={node.x + 20}
                y={node.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white text-[9px] font-semibold"
              >
                {node.label}
              </text>
              {/* Sub label */}
              <text
                x={node.x + 20}
                y={node.y - 28}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-500 text-[6px]"
              >
                {node.sub.length > 30
                  ? node.sub.substring(0, 30) + "..."
                  : node.sub}
              </text>
            </motion.g>
          ))}

          {/* Loop label */}
          <motion.text
            x="375"
            y="105"
            textAnchor="middle"
            className="fill-mint-neon text-[7px] font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            continuous loop
          </motion.text>
        </svg>
      </div>
    </div>
  );
}
