"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu } from "lucide-react";

const nodes = [
  { id: 1, icon: <Github size={20} />, label: "GitHub", x: -140, y: -80, color: "#333" },
  { id: 2, icon: <Linkedin size={20} />, label: "LinkedIn", x: 140, y: -80, color: "#0077b5" },
  { id: 3, icon: <Mail size={20} />, label: "Email", x: -140, y: 80, color: "#ea4335" },
  { id: 4, icon: <ExternalLink size={20} />, label: "Blog", x: 140, y: 80, color: "#f59e0b" },
  { id: 5, icon: <Code2 size={18} />, label: "Java", x: 0, y: -130, color: "#e11d48" },
  { id: 6, icon: <Cpu size={18} />, label: "Cloud", x: 0, y: 130, color: "#3b82f6" },
];

const NetworkMesh = () => {
  return (
    <div className="relative w-full max-w-2xl h-[450px] flex items-center justify-center overflow-hidden bg-slate-50/50 dark:bg-transparent rounded-3xl">
      
      {/* SVG para as linhas de conexão */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {nodes.map((node) => (
          <g key={`line-${node.id}`}>
            {/* Linha estática de fundo */}
            <line
              x1="50%" y1="50%"
              x2={`calc(50% + ${node.x}px)`} y2={`calc(50% + ${node.y}px)`}
              stroke="currentColor"
              className="text-slate-200 dark:text-slate-800"
              strokeWidth="1"
            />
            {/* Partícula pulsante viajando na linha */}
            <motion.circle
              r="2"
              fill={node.color}
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath: `path('M ${300} ${225} L ${300 + node.x} ${225 + node.y}')`,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Nó Central (VOCÊ) */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-2xl"
      >
        <div className="text-white font-bold text-xl tracking-tighter">Dev</div>
        {/* Glow animado no centro */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-purple-500 -z-10 blur-xl"
        />
      </motion.div>

      {/* Nós Periféricos */}
      {nodes.map((node) => (
        <motion.a
          key={node.id}
          href="#" // Adicione seus links reais aqui
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: node.x, y: node.y }}
          whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          className="absolute z-20 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-1 group transition-colors hover:border-purple-500"
        >
          <div style={{ color: node.color }}>{node.icon}</div>
          <span className="text-[10px] font-bold font-mono text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white uppercase tracking-tighter">
            {node.label}
          </span>
        </motion.a>
      ))}

      {/* Grid de fundo decorativo */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
    </div>
  );
};

export default NetworkMesh;