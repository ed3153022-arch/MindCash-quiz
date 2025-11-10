'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#D4AF37] mb-2">MindCash</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto"></div>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Qual é o seu{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
            Nível de Inteligência Financeira?
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Descubra como sua mentalidade financeira impacta seus resultados e 
          receba um diagnóstico personalizado sobre seus hábitos com dinheiro.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <div className="text-[#D4AF37] text-2xl mb-3">🧠</div>
            <h3 className="font-semibold mb-2">Análise Mental</h3>
            <p className="text-gray-400 text-sm">Avaliação profunda da sua mentalidade financeira</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <div className="text-[#D4AF37] text-2xl mb-3">📊</div>
            <h3 className="font-semibold mb-2">Diagnóstico Preciso</h3>
            <p className="text-gray-400 text-sm">Relatório detalhado com seu perfil financeiro</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <div className="text-[#D4AF37] text-2xl mb-3">🎯</div>
            <h3 className="font-semibold mb-2">Plano de Ação</h3>
            <p className="text-gray-400 text-sm">Estratégias personalizadas para evoluir</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/quiz">
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-xl px-12 py-4 rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-105">
            Iniciar Teste
          </button>
        </Link>

        {/* Additional Info */}
        <p className="text-gray-500 text-sm mt-6">
          ⏱️ Tempo estimado: 6-8 minutos • 30 perguntas estratégicas
        </p>
      </div>
    </div>
  );
}