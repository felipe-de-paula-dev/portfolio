"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Layout, ArrowRight } from "lucide-react";

const ArchitectureVisual = () => {
  return (
    <div className="relative w-full max-w-xl h-[350px] flex items-center justify-around bg-slate-50 dark:bg-[#0f172a]/50 rounded-3xl border border-slate-200 dark:border-white/10 p-8 overflow-hidden shadow-2xl">
      
      {/* Linha de Conexão Animada */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 120 175 L 480 175"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Camada 1: Frontend */}
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="z-10 flex flex-col items-center gap-3 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700"
      >
        <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-xl">
          <Layout className="text-purple-600 dark:text-purple-400" size={32} />
        </div>
        <span className="text-xs font-bold font-mono dark:text-slate-300">FRONTEND</span>
      </motion.div>

      {/* Camada 2: Backend (O Coração - Java) */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="z-10 flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl scale-110"
      >
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
          <Server className="text-white" size={40} />
        </div>
        <span className="text-xs font-bold font-mono text-white">SPRING API</span>
        {/* Pequenas "bolhas" de processamento */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
      </motion.div>

      {/* Camada 3: Database */}
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="z-10 flex flex-col items-center gap-3 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700"
      >
        <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-xl">
          <Database className="text-blue-600 dark:text-blue-400" size={32} />
        </div>
        <span className="text-xs font-bold font-mono dark:text-slate-300">POSTGRES</span>
      </motion.div>

      {/* Texto de fundo decorativo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
        High Availability Architecture
      </div>
    </div>
  );
};

export default ArchitectureVisual;