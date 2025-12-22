"use client";

import { Github, XCircle } from 'lucide-react';
import { DashboardDemo, TodoDemo, AuthDemo } from './demo';

const DemoModal = ({ activeDemo, closeDemo, repositorioUrl, demoUrl }: any) => {
  if (!activeDemo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl h-[600px] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${activeDemo.color}`}></div>
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">{activeDemo.title} <span className="text-xs font-normal text-slate-500 ml-2 uppercase border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">Demo Mode</span></h3>
          </div>
          <button onClick={closeDemo} className="text-slate-400 hover:text-red-500 transition-colors">
            <XCircle className="w-8 h-8" />
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-1/3 p-6 bg-slate-50 dark:bg-[#0b1121] border-r border-slate-100 dark:border-slate-800 hidden md:block overflow-y-auto">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Sobre o Projeto</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{activeDemo.description}</p>
            
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tecnologias</h4>
            <ul className="space-y-2 mb-6">
              {activeDemo.tech.map((t: any, index: number) => (
              <li 
                key={t.name || index} 
                className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> 
                {typeof t === 'object' ? t.name : t}
              </li>
            ))}
            </ul>

            <a href={repositorioUrl} target='_blank' className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
              <Github className="w-4 h-4" /> Ver Repositório
            </a>
          </div>

          <div className="flex-1 p-8 bg-slate-100 dark:bg-black/20 flex items-center justify-center relative">
             <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
             <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 z-10">
                <div className="h-8 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                
                <div className="h-80 relative overflow-hidden">
                  <iframe src={demoUrl} className="w-full h-full zoom-30"></iframe>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;