import React, { useState } from 'react';
import { Code2, Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ toggleTheme, darkMode, scrollToSection }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#0f172a]/90 backdrop-blur-md shadow-sm dark:shadow-black/20 z-40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">DevPortfólio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('resumo')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('habilidades')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Stack</button>
            <button onClick={() => scrollToSection('projetos')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Projetos</button>
            <button onClick={() => scrollToSection('contato')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Contato</button>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Alternar Tema"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Sun className={`h-5 w-5 absolute inset-0 transition-all duration-500 ${darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              <Moon className={`h-5 w-5 absolute inset-0 transition-all duration-500 ${darkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 dark:text-slate-400">{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['resumo', 'habilidades', 'projetos', 'contato'].map(item => (
              <button key={item} onClick={() => { scrollToSection(item); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 capitalize">{item}</button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;