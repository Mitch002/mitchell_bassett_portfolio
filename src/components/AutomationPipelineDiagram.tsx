"use client";

import { motion } from "framer-motion";

const sources = ["Analytics", "Social", "Community", "Internal Tools"];
const outputs = ["Notion", "Slack", "Email", "Sheets"];

export default function AutomationPipelineDiagram() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[700px] mx-auto">
        <svg
          viewBox="0 0 700 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Sources column */}
          {sources.map((src, i) => (
            <motion.g
              key={src}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <rect
                x="20"
                y={20 + i * 35}
                width="100"
                height="26"
                rx="6"
                fill="rgba(99, 102, 241, 0.08)"
                stroke="rgba(99, 102, 241, 0.25)"
                strokeWidth="1"
              />
              <text
                x="70"
                y={33 + i * 35 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-300 text-[8px] font-medium"
              >
                {src}
              </text>
              {/* Line to orchestrator */}
              <motion.line
                x1="120"
                y1={33 + i * 35}
                x2="230"
                y2="73"
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              />
            </motion.g>
          ))}

          {/* n8n Orchestration box */}
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <rect
              x="230"
              y="50"
              width="105"
              height="46"
              rx="8"
              fill="rgba(99, 102, 241, 0.12)"
              stroke="rgba(99, 102, 241, 0.4)"
              strokeWidth="1.5"
            />
            <text
              x="282"
              y="68"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-indigo-electric text-[9px] font-bold"
            >
              n8n
            </text>
            <text
              x="282"
              y="82"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-400 text-[7px]"
            >
              Orchestration
            </text>
          </motion.g>

          {/* Arrow to Python */}
          <motion.line
            x1="335"
            y1="73"
            x2="390"
            y2="73"
            stroke="rgba(99, 102, 241, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
          />

          {/* Python transforms box */}
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <rect
              x="390"
              y="50"
              width="105"
              height="46"
              rx="8"
              fill="rgba(45, 212, 191, 0.08)"
              stroke="rgba(45, 212, 191, 0.3)"
              strokeWidth="1.5"
            />
            <text
              x="442"
              y="68"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-mint-neon text-[9px] font-bold"
            >
              Python
            </text>
            <text
              x="442"
              y="82"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-400 text-[7px]"
            >
              Transform + Enrich
            </text>
          </motion.g>

          {/* Outputs column */}
          {outputs.map((out, i) => (
            <motion.g
              key={out}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
            >
              {/* Line from Python */}
              <motion.line
                x1="495"
                y1="73"
                x2="570"
                y2={33 + i * 35}
                stroke="rgba(45, 212, 191, 0.2)"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              />
              <rect
                x="570"
                y={20 + i * 35}
                width="100"
                height="26"
                rx="6"
                fill="rgba(45, 212, 191, 0.06)"
                stroke="rgba(45, 212, 191, 0.2)"
                strokeWidth="1"
              />
              <text
                x="620"
                y={33 + i * 35 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-300 text-[8px] font-medium"
              >
                {out}
              </text>
            </motion.g>
          ))}

          {/* Column labels */}
          <text
            x="70"
            y="155"
            textAnchor="middle"
            className="fill-gray-600 text-[7px] font-mono uppercase"
          >
            Sources
          </text>
          <text
            x="362"
            y="155"
            textAnchor="middle"
            className="fill-gray-600 text-[7px] font-mono uppercase"
          >
            Processing
          </text>
          <text
            x="620"
            y="155"
            textAnchor="middle"
            className="fill-gray-600 text-[7px] font-mono uppercase"
          >
            Outputs
          </text>
        </svg>
      </div>
    </div>
  );
}
