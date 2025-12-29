'use client';

import {  useState } from 'react';
import { Mail, ExternalLink, Play, CheckCircle, BarChart, Lock, Terminal as TerminalIcon, Circle, Coffee, Layout } from 'lucide-react';
import Navbar from './Navbar';
import Terminal from './terminal';
import DemoModal from './modal';
import { FaAngular, FaAws, FaDatabase, FaDocker, FaGit, FaGitAlt, FaGithub, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFastify, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiSpringboot, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { Github, Code2, Palette } from 'lucide-react';


const App = () => {
  const [activeDemo, setActiveDemo] = useState<any>(null);
  const [repositorioUrl, setRepositorioUrl] = useState<string>('');
  const [demoUrl, setDemoUrl] = useState<string>('');

 const skillCategories = [
  {
    title: "Backend Core",
    categoryIcon: <FaDatabase className="w-4 h-4 inline-block mr-2 text-purple-500 mb-0.5" />, // Ícone opcional no título
    items: [
      { name: "Java", icon: <FaJava color='#f89820'/> },
      { name: "Nest.js", icon: <SiNestjs color='#E0234E' /> },
      { name: "Express", icon: <SiExpress color='#696969'/> },
      { name: "Fastify", icon: <SiFastify color='#696969'/> },
      { name: "Spring Boot", icon: <SiSpringboot color='#6DB33F'/> },
      { name: "Node.js", icon: <FaNodeJs color='#339933' /> },
    ],
  },
  {
    title: "Frontend & UI",
    categoryIcon: <FaReact className="w-4 h-4 inline-block mr-2 text-blue-500 mb-0.5" />,
    items: [
      { name: "Angular", icon: <FaAngular color='#DD0031'/> },
      { name: "React.js", icon: <FaReact color='#1E90FF'/> },
      { name: "Next.js", icon: <SiNextdotjs color='#363636' /> },
      { name: "TypeScript", icon: <SiTypescript color='#1E90FF'/> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color='#1874CD' /> },
    ],
  },
  {
    title: "Dados & DevOps",
    categoryIcon: <FaDocker className="w-4 h-4 inline-block mr-2 text-blue-400 mb-0.5" />,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    ],
  },
];

  const projects = [
    {
      id: 1,
      title: "FindIt – Dashboard Administrativo",
      description: "Painel de controle robusto para gerenciamento de inventário, controle de status de itens e análise de dados para operações de achados e perdidos.",
      image: "findIt.png", 
      tech: [
        { name: "Node.js", icon: <FaNodeJs color='#339933' /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "TypeScript", icon: <SiTypescript color='#1E90FF'/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color='#1874CD' /> },
        { name: "React.js", icon: <FaReact color='#1E90FF'/> },
      ],
      links: {
        github: "https://github.com/felipe-de-paula-dev/findIt",
        live: "https://findit.felipedepauladev.site"
      },
      color: "from-red-500 to-purple-500" 
    },
    {
      id: 2,
      title: "FindIt – Portal do Usuário",
      description: "Interface intuitiva dedicada à busca e recuperação de itens perdidos, permitindo que usuários visualizem objetos encontrados em tempo real com filtros avançados.",
      image: "findItUsr.png", 
      tech: [
        { name: "Node.js", icon: <FaNodeJs color='#339933' /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "TypeScript", icon: <SiTypescript color='#1E90FF'/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color='#1874CD' /> },
        { name: "React.js", icon: <FaReact color='#1E90FF'/> },
      ],
      links: {
        github: "https://github.com/felipe-de-paula-dev/findIt",
        live: "https://findit-user.felipedepauladev.site"
      },
      color: "from-red-500 to-orange-500" 
    },
    {
      id: 3,
      title: "Sistema para Pequenos Comercios",
      description: "Sistema completo para gestão de pequenos comércios, incluindo controle de estoque, vendas e relatórios financeiros.",
      image: "mercado.png", 
      tech: [
        { name: "Spring Boot", icon: <SiSpringboot color='#6DB33F'/> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "TypeScript", icon: <SiTypescript color='#1E90FF'/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color='#1874CD' /> },
        { name: "Angular", icon: <FaAngular color='#DD0031'/> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      ],
      links: {
        github: "https://github.com/felipe-de-paula-dev/SistemaMercado",
        live: "https://mercado.felipedepauladev.site"
      },
      color: "from-blue-500 to-cyan-500" 
    },
  ];

  const openDemo = (project: any) => {
    setActiveDemo(project);
    setRepositorioUrl(project.links.github);
    setDemoUrl(project.links.live); 
  };
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
        <Navbar scrollToSection={scrollToSection} />

        {/* Hero Section */}
        <section id="resumo" className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex w-[190px] justify-center gap-2 items-center transition-colors animate-300 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-wide border border-indigo-100 dark:border-indigo-500/20">
              <Circle className='fill-green-400 text-green-400' size={12}/>
              Online & Coding
              <Coffee size={14} />
            </div> 
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Criando soluções <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r  from-indigo-500 to-purple-600">digitais robustas</span>.
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
        <section id="habilidades" className="py-20 bg-white dark:bg-[#131c31] border-y border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
              <p className="text-slate-500 dark:text-slate-400">As ferramentas que utilizo para construir o futuro.</p>
            </div>

            <div className="grid gap-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="relative">
              
              {/* Título da Categoria com Ícone Opcional */}
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8 text-center flex items-center justify-center">
                {category.categoryIcon}
                <span>{category.title}</span>
                {/* Linha decorativa sutil */}
                <div className="absolute mt-8 w-24 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-purple-500/30 dark:bg-purple-500/50 rounded-full"></div>
                </div>
              </h3>

              {/* Grid de Habilidades */}
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {category.items.map((skill, i) => (
                  <div 
                    key={i} 
                    // Classes principais do container da habilidade
                    // group: permite estilizar os filhos quando o pai recebe hover
                    className="group flex items-center gap-3 px-5 py-3 
                             bg-slate-50 dark:bg-[#131c31] 
                             border border-slate-200/60 dark:border-slate-700/60
                             rounded-xl cursor-default
                             transition-all duration-300 ease-in-out
                             hover:bg-white dark:hover:bg-[#1a233a]
                             hover:border-purple-500/30 dark:hover:border-purple-400/50
                             hover:shadow-lg hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10
                             hover:-translate-y-1"
                  >
                    {/* Ícone com animação e cor no hover */}
                    <span className="text-2xl text-slate-400 dark:text-slate-500 transition-all duration-300 
                                   group-hover:text-purple-600 dark:group-hover:text-purple-400 
                                   group-hover:scale-110 group-active:scale-95">
                      {skill.icon}
                    </span>
                    
                    {/* Nome da habilidade */}
                    <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300 
                                   group-hover:text-slate-900 dark:group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
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
            <a href="https://github.com/felipe-de-paula-dev" target='_blank' className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-1">
              Ver GitHub Completo <ExternalLink className="w-4 h-4"/>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`group p-[2px] rounded-2xl bg-gradient-to-br ${project.color} hover:shadow-2xl transition-all duration-300 flex flex-col h-full`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-[calc(1rem-2px)] p-2 flex flex-col h-full w-full">
                  <div className="h-48 rounded-xl relative overflow-hidden bg-slate-100 dark:bg-slate-900">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
                        <div className="relative z-10 opacity-50 group-hover:scale-110 transition-transform duration-500">
                          <Layout className="w-16 h-16 text-white" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`text-xl font-bold text-slate-900 dark:text-white transition-all duration-300 group-hover:bg-gradient-to-r ${project.color} group-hover:bg-clip-text group-hover:text-transparent`}>
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-600 dark:text-slate-300">
                          {t.icon}
                          {t.name}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => openDemo(project)} 
                      className={`w-full py-3 rounded-lg bg-gradient-to-r ${project.color} text-white font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-95`}
                    >
                      <Play className="w-4 h-4 fill-current" /> Ver Demo Online
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="py-24 bg-indigo-900 dark:bg-black text-white text-center relative overflow-hidden transition-colors animate-300">
          <div className="max-w-2xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-indigo-200 text-lg mb-10">Seja para um projeto freelance, uma vaga full-time ou apenas um bate papo.</p>
            <a href="mailto:feliped137@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white  rounded-full font-bold hover:bg-indigo-50 transition-all transform hover:scale-105 text-slate-900">
              <Mail className="w-5 h-5"/> Entrar em Contato 
            </a>
          </div>
        </section>

        <footer className="py-8 bg-slate-900 text-slate-500 text-center text-sm border-t border-slate-800">
          <p>© {new Date().getFullYear()} Desenvolvido por Felipe De Paula.</p>
        </footer>
      </div>

      <DemoModal activeDemo={activeDemo} closeDemo={closeDemo} repositorioUrl={repositorioUrl} demoUrl={demoUrl} />
    </div>
  );
};

export default App;