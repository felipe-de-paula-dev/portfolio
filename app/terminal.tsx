"use client";

import React, { useState, useEffect } from "react";

// Configuração dos Snippets em JAVA
const files = [
  {
    name: "PortfolioApp.java",
    lang: "java",
    code: `public class PortfolioApp {
    public static void main(String[] args) {
        var dev = new Developer("Felipe De Paula");
        
        System.out.println("Initializing core systems...");
        dev.loadSkills(Skills.FULL_STACK);
        
        if (dev.isReady()) {
            System.out.println("🚀 Deploy started successfully!");
        }
    }
}`,
  }
];

// Syntax Highlighter ajustado para Java e Spring Boot
const Highlight = ({ code }: { code: string }) => {
  // Regex melhorada para separar pontuação sem quebrar palavras
  const tokens = code.split(/(\s+|[(){}[\];:@.]|["'])/g).filter(t => t !== "");

  // Estado para controlar se estamos dentro de uma string
  let inString = false;

  return (
    <>
      {tokens.map((token, i) => {
        // Lógica de Strings (aspas duplas)
        if (token === '"') {
            inString = !inString;
            return <span key={i} className="text-orange-600 dark:text-[#ce9178] transition-colors duration-300">"</span>;
        }
        if (inString) {
            return <span key={i} className="text-orange-600 dark:text-[#ce9178] transition-colors duration-300">{token}</span>;
        }

        let color = "text-slate-700 dark:text-slate-300 transition-colors duration-300"; // Default

        // Palavras-chave do Java
        if (["public", "private", "protected", "class", "static", "void", "return", "if", "new", "import", "package", "var", "boolean", "double"].includes(token)) 
            color = "text-purple-600 dark:text-[#c586c0]";
        
        // Classes e Tipos (Começam com Maiúscula geralmente)
        else if (/^[A-Z]/.test(token) && token.length > 1) 
            color = "text-emerald-600 dark:text-[#4ec9b0]"; // Ex: Developer, String, System, ResponseEntity
        
        // Anotações (Spring/JPA) - O token anterior foi um @
        else if (tokens[i-1] === "@") 
            color = "text-yellow-600 dark:text-[#dcdcaa]"; 
        
        // O símbolo @
        else if (token === "@")
            color = "text-yellow-600 dark:text-[#dcdcaa]";

        // Métodos e Funções (geralmente seguidos de parenteses ou ponto)
        else if (["main", "println", "loadSkills", "isReady", "getLatest", "ok", "header", "body", "findHighImpact"].includes(token)) 
            color = "text-yellow-600 dark:text-[#dcdcaa]"; // Amarelo clássico VS Code para métodos

        // Comentários
        else if (token.startsWith("//")) 
            color = "text-slate-400 dark:text-[#6a9955]";
        
        // Constantes (Tudo maiúsculo)
        else if (/^[A-Z_]+$/.test(token) && token.length > 1)
             color = "text-blue-500 dark:text-[#569cd6]";

        return <span key={i} className={`${color} transition-colors duration-300`}>{token}</span>;
      })}
    </>
  );
};

const Terminal = () => {
  const [activeFile, setActiveFile] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    let index = 0;
    const fullCode = files[activeFile].code;
    setDisplayedCode("");

    const interval = setInterval(() => {
      index++;
      setDisplayedCode(fullCode.substring(0, index));
      if (index >= fullCode.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [activeFile]);

  return (
    <div className="relative group w-full max-w-lg hidden md:flex">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative w-full bg-white dark:bg-[#1e1e1e] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transform transition-all duration-300 hover:scale-[1.01]">
        
        {/* Header da Janela */}
        <div className="bg-slate-100 dark:bg-[#252526] flex items-center border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="px-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>

          {/* Abas */}
          <div className="flex overflow-x-auto scrollbar-hide">
            {files.map((file, index) => (
              <button
                key={file.name}
                onClick={() => setActiveFile(index)}
                className={`px-4 py-2.5 text-xs font-mono border-r border-slate-200 dark:border-slate-800 transition-all duration-300
                  ${activeFile === index 
                    ? "bg-white dark:bg-[#1e1e1e] text-slate-800 dark:text-slate-200 border-t-2 border-t-purple-500" 
                    : "bg-slate-50 dark:bg-[#2d2d2d] text-slate-500 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-[#2a2a2a]"}`}
              >
                {file.name}
              </button>
            ))}
          </div>
        </div>

        {/* Área de Código */}
        <div className="p-6 min-h-[300px] bg-white dark:bg-[#1e1e1e] overflow-hidden relative transition-colors duration-300">
          <pre className="text-[12.5px] font-mono leading-relaxed overflow-x-auto custom-scrollbar">
            <code>
              <Highlight code={displayedCode} />
              <span className={`inline-block w-2 h-5 ml-1 align-middle bg-purple-500 ${isTyping ? 'animate-pulse' : 'animate-bounce'}`}></span>
            </code>
          </pre>
          
          {!isTyping && (
             <div className="absolute bottom-4 right-4 text-[10px] text-slate-400 opacity-50 select-none">
                Spring Boot • JPA • Lombok
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;