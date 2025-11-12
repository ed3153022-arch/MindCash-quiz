'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { resultData } from '@/lib/quiz-data';

export default function ResultadoAltaPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const savedScore = localStorage.getItem('quizScore');
    if (savedScore) {
      setScore(parseInt(savedScore));
    }
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const result = resultData.alta;

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-2xl font-bold text-[#D4AF37] mb-4">MindCash</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-8"></div>
          
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
                {result.title}
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">{result.subtitle}</p>
            {score && (
              <div className="inline-block bg-[#D4AF37]/20 border border-[#D4AF37] rounded-full px-6 py-2">
                <span className="text-[#D4AF37] font-bold">Sua Pontuação: {score} pontos</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Description */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">📊 Seu Diagnóstico</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Strengths */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">💪 Seus Pontos Fortes</h3>
            <ul className="space-y-4">
              {result.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Blocks */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">🚧 Oportunidades de Crescimento</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {result.blocks.map((block, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-yellow-500/20 border border-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                <span className="text-gray-300">{block}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-2xl p-8 border border-[#D4AF37]/30 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">🎯 Plano de Ação - Próximos 7 Dias</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {result.actions.map((action, index) => (
              <div key={index} className="bg-black/30 rounded-xl p-6 border border-gray-800">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-black font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/">
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-105">
              Fazer Novo Teste
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
