'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ResultadoPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-2xl font-bold text-[#D4AF37] mb-2">MindCash</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-8"></div>
          <h2 className="text-4xl font-bold mb-4">
            📊 Resultados do Quiz
          </h2>
        </div>

        {/* Main Content */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">
              Acesse seu resultado específico
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              Para ver seu resultado detalhado, acesse uma das opções abaixo baseada no seu nível de inteligência financeira.
            </p>
          </div>

          {/* Result Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/resultado/baixa">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-400 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-xl font-semibold mb-2 text-red-400">Nível Baixo</h4>
                <p className="text-gray-400 text-sm">Início da jornada financeira</p>
              </div>
            </Link>

            <Link href="/resultado/medio">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold mb-2 text-yellow-400">Nível Médio</h4>
                <p className="text-gray-400 text-sm">Base sólida estabelecida</p>
              </div>
            </Link>

            <Link href="/resultado/alta">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-xl font-semibold mb-2 text-green-400">Nível Alto</h4>
                <p className="text-gray-400 text-sm">Mentalidade desenvolvida</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <Link href="/">
            <button className="text-[#D4AF37] hover:text-[#FFD700] transition-colors">
              ← Voltar ao início
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}