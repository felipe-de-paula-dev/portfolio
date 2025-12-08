'use client';

import React, { useEffect, useState } from 'react';
import { Mail, ExternalLink, Play, CheckCircle, BarChart, Lock, Terminal as TerminalIcon } from 'lucide-react';
import Navbar from './components/Navbar';
import Terminal from './components/terminal';
import DemoModal from './components/modal';

const App = () => {
  const [darkMode, setDarkMode] = useState(true); 
  const [activeDemo, setActiveDemo] = useState<any>(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skillCategories = [
    {
      title: "Linguagens",
      items: ["JavaScript", "Python", "Java", "TypeScript", "C#", "PHP", "Go"]
    },
    {
      title: "Frontend",
      items: ["React", "Vue.js", "Tailwind CSS", "Sass", "Redux", "Next.js"]
    },
    {
      title: "Backend & Cloud",
      items: ["Node.js", "Django", "Spring Boot", "PostgreSQL", "MongoDB", "Docker", "AWS"]
    }
  ];

  // Dados dos Projetos
  const projects = [
    {
      id: 1,
      title: "Dashboard Financeiro",
      description: "Painel de análise de dados com gráficos interativos e relatórios em tempo real.",
      tech: ["React", "Recharts", "Tailwind"],
      demoType: "dashboard",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Task Master App",
      description: "Gerenciador de tarefas produtivo com estado local e persistência de dados.",
      tech: ["React", "LocalStorage", "CSS Modules"],
      demoType: "todo",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Auth System API",
      description: "Sistema completo de autenticação e autorização com criptografia de ponta.",
      tech: ["Node.js", "JWT", "Express"],
      demoType: "auth",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Landing Page Startup",
      description: "Página institucional de alta conversão, responsiva e otimizada para SEO.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      demoType: "landing",
      color: "bg-orange-500"
    }
  ];

  const openDemo = (project: any) => setActiveDemo(project);
  const closeDemo = () => setActiveDemo(null);

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
  <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} scrollToSection={scrollToSection} />

        {/* Hero Section */}
        <section id="resumo" className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-wide border border-indigo-100 dark:border-indigo-500/20">
              Disponível para Projetos
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Criando soluções <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">digitais robustas</span>.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
              Especialista em transformar requisitos complexos em software limpo, escalável e centrado no usuário.
            </p>
            <div className="flex gap-4 pt-2">
              <button onClick={() => scrollToSection('projetos')} className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">Ver Portfólio</button>
              <button onClick={() => scrollToSection('contato')} className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Contato</button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center relative">
            <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <Terminal />
          </div>
        </section>

        {/* Tech Stack - CORRIGIDO */}
        <section id="habilidades" className="py-20 bg-white dark:bg-[#131c31] border-y border-slate-100 dark:border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
              <p className="text-slate-500 dark:text-slate-400">As ferramentas que utilizo para construir o futuro.</p>
            </div>

            <div className="grid gap-10">
              {/* Agora fazemos map direto no array de categorias, sem gambiarras de index */}
              {skillCategories.map((category, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 text-center">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {category.items.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 font-medium rounded-lg border border-blue-100 dark:border-blue-800/30 hover:scale-105 transition-transform cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="py-24 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Projetos Recentes</h2>
              <p className="text-slate-600 dark:text-slate-400">Clique em "Testar Demo" para interagir com o projeto.</p>
            </div>
            <a href="#" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-1">
              Ver GitHub Completo <ExternalLink className="w-4 h-4"/>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white dark:bg-slate-800 rounded-2xl p-1 border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className={`h-48 rounded-xl ${project.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center relative overflow-hidden`}>
                   <div className={`absolute w-32 h-32 rounded-full ${project.color} opacity-20 blur-2xl -top-10 -right-10`}></div>
                   <div className={`absolute w-24 h-24 rounded-full ${project.color} opacity-20 blur-xl bottom-0 left-0`}></div>
                   <button onClick={() => openDemo(project)} className="z-10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                     <Play className="w-4 h-4 fill-current" /> Testar Demo
                   </button>
                   <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-30 transition-opacity">
                      {project.demoType === 'dashboard' && <BarChart className={`w-16 h-16 ${project.color.replace('bg-', 'text-')}`} />}
                      {project.demoType === 'todo' && <CheckCircle className={`w-16 h-16 ${project.color.replace('bg-', 'text-')}`} />}
                      {project.demoType === 'auth' && <Lock className={`w-16 h-16 ${project.color.replace('bg-', 'text-')}`} />}
                      {project.demoType === 'landing' && <TerminalIcon className={`w-16 h-16 ${project.color.replace('bg-', 'text-')}`} />}
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded text-slate-600 dark:text-slate-400">{t}</span>
                    ))}
                  </div>
                  <button onClick={() => openDemo(project)} className="w-full py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Ver Detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="py-24 bg-indigo-900 dark:bg-black text-white text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-indigo-200 text-lg mb-10">Seja para um projeto freelance, uma vaga full-time ou apenas um café virtual.</p>
            <a href="mailto:email@exemplo.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-900 rounded-full font-bold hover:bg-indigo-50 transition-all transform hover:scale-105 text-slate-900">
              <Mail className="w-5 h-5"/> Entrar em Contato
            </a>
          </div>
        </section>

        <footer className="py-8 bg-slate-900 text-slate-500 text-center text-sm border-t border-slate-800">
          <p>© {new Date().getFullYear()} Desenvolvido com React & Tailwind.</p>
        </footer>
      </div>

      <DemoModal activeDemo={activeDemo} closeDemo={closeDemo} />
    </div>
  );
};

export default App;