"use client";

import React from "react";
import { Coffee, GitBranch, Database, Cloud, Settings, Code, Zap, Globe } from "lucide-react"; // Importe os ícones que desejar
import { motion } from "framer-motion"; // Para as animações flutuantes
// Se não tiver framer-motion, instale: npm install framer-motion

const stackItems = [
  { icon: Coffee, name: "Java", color: "text-red-500", delay: 0.2 },
  { icon: GitBranch, name: "Spring Boot", color: "text-green-500", delay: 0.4 },
  { icon: Database, name: "PostgreSQL", color: "text-blue-500", delay: 0.6 },
  { icon: Cloud, name: "AWS", color: "text-orange-500", delay: 0.8 },
  { icon: Code, name: "TypeScript", color: "text-blue-400", delay: 1.0 },
  { icon: Globe, name: "Next.js", color: "text-slate-700 dark:text-slate-300", delay: 1.2 },
  { icon: Zap, name: "REST APIs", color: "text-yellow-500", delay: 1.4 },
];

// Configuração para a animação de flutuação
const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -5, 0], // Pequeno movimento para cima e para baixo
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const StackCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-lg h-[400px] flex items-center justify-center p-6 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl shadow-xl backdrop-blur-md border border-white/10 overflow-hidden group"
    >
      {/* Background radial gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

      {/* Título Central */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Minha Stack</h2>
        <p className="text-white/80 text-lg">Tecnologias que uso e amo.</p>
      </div>

      {/* Itens da Stack Flutuantes */}
      {stackItems.map((item, index) => (
        <motion.div
          key={item.name}
          className={`absolute p-3 rounded-full bg-white/10 border border-white/20 shadow-md ${item.color}`}
          initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 360 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, (index % 2 === 0 ? -15 : 15), 0], // Movimento de flutuação individual
            x: [0, (index % 3 === 0 ? -10 : 10), 0],
            rotate: item.delay % 2 === 0 ? [0, 5, 0] : [0, -5, 0], // Leve rotação
            transition: {
              delay: item.delay,
              duration: 4 + Math.random() * 2, // Duração variável para desincronizar
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${15 + Math.random() * 70}%`,
            // Garante que os ícones fiquem dentro do card
            transform: 'translate(-50%, -50%)', 
          }}
        >
          <item.icon size={24} />
          <span className="sr-only">{item.name}</span> {/* Acessibilidade */}
        </motion.div>
      ))}
      
      {/* Detalhe de "Deploy" ou "Produção" no canto */}
      <motion.div
        className="absolute bottom-4 right-4 text-xs text-white/70 flex items-center gap-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Settings size={14} />
        Production Ready
      </motion.div>
    </motion.div>
  );
};

export default StackCard;