"use client";
import React from 'react';

const Terminal = () => {
  return (
    <div className="relative w-full max-w-md bg-white dark:bg-[#1e1e1e] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
      
      {/* Barra de Título */}
      <div className="bg-slate-100 dark:bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-black/20">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-red-600 transition-colors shadow-sm"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-yellow-600 transition-colors shadow-sm"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-green-600 transition-colors shadow-sm"></div>
        <div className="flex-1 text-center text-xs font-sans text-slate-500 dark:text-slate-400 opacity-60 font-medium">
            developer.js — 1.4 kB
        </div>
      </div>

      {/* Conteúdo do Código com Cores Dinâmicas */}
      <div className="p-6 overflow-x-auto bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
        <pre className="text-xs sm:text-sm font-mono leading-relaxed text-slate-800 dark:text-[#d4d4d4]">
          <code>
            <span className="text-purple-600 dark:text-[#c586c0]">class</span> <span className="text-emerald-600 dark:text-[#4ec9b0]">Developer</span> <span className="text-slate-500 dark:text-[#ffd700]">{`{`}</span>{'\n'}
            <span className="text-slate-400 dark:text-[#d4d4d4]">  </span><span className="text-blue-600 dark:text-[#569cd6]">constructor</span><span className="text-slate-500 dark:text-[#ffd700]">() {`{`}</span>{'\n'}
            <span className="text-slate-400 dark:text-[#d4d4d4]">    </span><span className="text-blue-600 dark:text-[#569cd6]">this</span><span className="text-sky-600 dark:text-[#9cdcfe]">.name</span> <span className="text-slate-600 dark:text-[#d4d4d4]">=</span> <span className="text-orange-600 dark:text-[#ce9178]">"Felipe De Paula"</span><span className="text-slate-600 dark:text-[#d4d4d4]">;</span>{'\n'}
            <span className="text-slate-400 dark:text-[#d4d4d4]">    </span><span className="text-blue-600 dark:text-[#569cd6]">this</span><span className="text-sky-600 dark:text-[#9cdcfe]">.role</span> <span className="text-slate-600 dark:text-[#d4d4d4]">=</span> <span className="text-orange-600 dark:text-[#ce9178]">"Full Stack"</span><span className="text-slate-600 dark:text-[#d4d4d4]">;</span>{'\n'}
            <span className="text-slate-500 dark:text-[#ffd700]">  {`}`}</span>{'\n\n'}
            <span className="text-slate-400 dark:text-[#d4d4d4]">  </span><span className="text-yellow-600 dark:text-[#dcdcaa]">solveProblem</span><span className="text-slate-500 dark:text-[#ffd700]">(</span><span className="text-sky-600 dark:text-[#9cdcfe]">coffee</span><span className="text-slate-500 dark:text-[#ffd700]">) {`{`}</span>{'\n'}
            <span className="text-slate-400 dark:text-[#d4d4d4]">    </span><span className="text-purple-600 dark:text-[#c586c0]">if</span> <span className="text-slate-500 dark:text-[#ffd700]">(</span><span className="text-sky-600 dark:text-[#9cdcfe]">coffee</span><span className="text-slate-600 dark:text-[#d4d4d4]">.</span><span className="text-yellow-600 dark:text-[#dcdcaa]">isEmpty</span><span className="text-slate-500 dark:text-[#ffd700]">()) {`{`}</span>{'\n'}
            <span className="text-slate-400 dark:text-[#d4d4d4]">      </span><span className="text-purple-600 dark:text-[#c586c0]">return</span> <span className="text-blue-600 dark:text-[#569cd6]">this</span><span className="text-slate-600 dark:text-[#d4d4d4]">.</span><span className="text-yellow-600 dark:text-[#dcdcaa]">refill</span><span className="text-slate-500 dark:text-[#ffd700]">()</span><span className="text-slate-600 dark:text-[#d4d4d4]">;</span>{'\n'}
            <span className="text-slate-500 dark:text-[#ffd700]">    {`}`}</span>{'\n'}
            <span className="text-slate-400 dark:text-[#d4d4d4]">    </span><span className="text-purple-600 dark:text-[#c586c0]">return</span> <span className="text-orange-600 dark:text-[#ce9178]">"Solution deployed!"</span><span className="text-slate-600 dark:text-[#d4d4d4]">;</span>{'\n'}
            <span className="text-slate-500 dark:text-[#ffd700]">  {`}`}</span>{'\n'}
            <span className="text-slate-500 dark:text-[#ffd700]">{`}`}</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;