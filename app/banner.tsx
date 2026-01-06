import { Circle, Coffee } from "lucide-react";
import Terminal from "./terminal";
import { scrollToSection } from "./utils/utils";
import StackCard from "./stackCard";
import ArchitectureVisual from "./ArchitectureVisual";
import NetworkMesh from "./NetworkMesh";

export default function Banner() {
    return (
        <section id="resumo" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
            {/* Efeitos de Fundo mais sutis */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>

            <div className="flex-1 space-y-8 ml-4 text-center lg:text-left">
                {/* Status Badge - Mais limpo */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Disponível para Projetos
                </div>

                {/* Título com Tipografia Refinada */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Criando soluções <br/>
                    <span className="text-indigo-600 dark:text-indigo-400">digitais robustas</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Especialista em transformar requisitos complexos em software <span className="text-slate-900 dark:text-slate-200 font-medium">limpo, escalável e centrado no usuário.</span>
                </p>

                {/* CTAs com Hierarquia Clara */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                    <button 
                        onClick={() => scrollToSection('projetos')} 
                        className="group relative px-8 py-4 bg-slate-900 dark:bg-indigo-600 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20"
                    >
                        Ver Portfólio
                    </button>
                    
                    <button 
                        onClick={() => scrollToSection('contato')} 
                        className="px-8 py-4 bg-transparent text-slate-600 dark:text-slate-300 font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                    >
                        Contato
                    </button>
                </div>
            </div>
            <NetworkMesh />
        </section>
    )
}