'use client';

import React, { useState } from 'react';
import { CheckCircle, Lock } from 'lucide-react';

export const DashboardDemo = () => (
  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg h-full flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <h4 className="font-bold text-slate-700 dark:text-slate-200">Vendas Hoje</h4>
      <span className="text-green-500 font-mono">+12.5%</span>
    </div>
    <div className="flex items-end gap-2 h-32 mb-4">
      {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
        <div key={i} className="flex-1 bg-indigo-500 hover:bg-indigo-400 transition-all rounded-t-sm relative group" style={{ height: `${h}%` }}>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{h}</span>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4 mt-auto">
      <div className="bg-white dark:bg-slate-700 p-3 rounded shadow-sm">
        <p className="text-xs text-slate-500 dark:text-slate-400">Receita</p>
        <p className="text-lg font-bold text-slate-800 dark:text-white">R$ 12.450</p>
      </div>
      <div className="bg-white dark:bg-slate-700 p-3 rounded shadow-sm">
        <p className="text-xs text-slate-500 dark:text-slate-400">Pedidos</p>
        <p className="text-lg font-bold text-slate-800 dark:text-white">143</p>
      </div>
    </div>
  </div>
);

export const TodoDemo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Revisar código", done: true },
    { id: 2, text: "Deploy em produção", done: false }
  ]);
  const [newInput, setNewInput] = useState("");

  const addTask = () => {
    if (!newInput) return;
    setTasks([...tasks, { id: Date.now(), text: newInput, done: false }]);
    setNewInput("");
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg h-full flex flex-col">
      <div className="flex gap-2 mb-4">
        <input 
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          placeholder="Nova tarefa..."
          className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded border-none focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 dark:text-white text-sm"
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask} className="bg-indigo-600 text-white px-3 py-2 rounded text-sm hover:bg-indigo-700">+</button>
      </div>
      <ul className="space-y-2 overflow-y-auto flex-1">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-700/50 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <button 
              onClick={() => setTasks(tasks.map(t => t.id === task.id ? {...t, done: !t.done} : t))}
              className={`w-5 h-5 rounded border flex items-center justify-center ${task.done ? 'bg-green-500 border-green-500' : 'border-slate-400'}`}
            >
              {task.done && <CheckCircle className="w-3 h-3 text-white" />}
            </button>
            <span className={`text-sm ${task.done ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-200'}`}>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AuthDemo = () => {
  const [status, setStatus] = useState("idle");

  const handleLogin = (e: any) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="flex items-center justify-center h-full bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
      {status === "success" ? (
        <div className="text-center animate-bounce">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-slate-800 dark:text-white">Acesso Permitido</h3>
          <p className="text-sm text-slate-500">Token JWT gerado com sucesso.</p>
          <button onClick={() => setStatus("idle")} className="mt-4 text-sm text-indigo-600 hover:underline">Sair</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="w-full max-w-xs space-y-3">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Lock className="w-6 h-6" />
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Login Seguro</p>
          </div>
          <input type="email" value="demo@user.com" readOnly className="w-full px-3 py-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-sm text-slate-500" />
          <input type="password" value="********" readOnly className="w-full px-3 py-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-sm text-slate-500" />
          <button 
            disabled={status === "loading"}
            className="w-full py-2 bg-indigo-600 text-white rounded text-sm font-medium hover:bg-indigo-700 transition-colors disabled:opacity-70 flex justify-center"
          >
            {status === "loading" ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/> : "Entrar"}
          </button>
        </form>
      )}
    </div>
  );
};