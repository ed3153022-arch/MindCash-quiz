'use client';

import { useState, useEffect } from 'react';
import { getResultLevel, resultData } from '@/lib/quiz-data';
import Link from 'next/link';

export default function ResultadoFinalPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [resultLevel, setResultLevel] = useState<'baixa' | 'media' | 'alta'>('media');

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    // Get quiz score from localStorage
    const storedScore = localStorage.getItem('quizScore');
    if (storedScore) {
      const score = parseInt(storedScore);
      setQuizScore(score);
      setResultLevel(getResultLevel(score));
    }
  }, []);

  const result = resultData[resultLevel];

  const getScoreColor = (level: string) => {
    switch (level) {
      case 'baixa': return 'text-red-400';
      case 'media': return 'text-yellow-400';
      case 'alta': return 'text-green-400';
      default: return 'text-[#D4AF37]';
    }
  };

  const getScoreIcon = (level: string) => {
    switch (level) {
      case 'baixa': return '📈';
      case 'media': return '⚡';
      case 'alta': return '🏆';
      default: return '📊';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-2xl font-bold text-[#D4AF37] mb-2">MindCash</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-8"></div>
          <h2 className="text-4xl font-bold mb-4">
            {getScoreIcon(resultLevel)} Seu Relatório Mental MindCash
          </h2>
        </div>

        {/* Score Card */}
        {quizScore !== null && (
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Sua Pontuação Final</h3>
            <div className={`text-6xl font-bold mb-4 ${getScoreColor(resultLevel)}`}>
              {quizScore} pontos
            </div>
            <div className="text-2xl font-semibold text-[#D4AF37] mb-2">
              {result.title}
            </div>
            <div className="text-lg text-gray-300">
              {result.subtitle}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
            📋 Diagnóstico Completo
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            {result.description}
          </p>
        </div>

        {/* Strengths */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            ✅ Seus Pontos Fortes
          </h3>
          <div className="space-y-4">
            {result.strengths.map((strength, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-300">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Blocks */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-red-400">
            🚫 Bloqueios Mentais Identificados
          </h3>
          <div className="space-y-4">
            {result.blocks.map((block, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-black font-bold text-sm">!</span>
                </div>
                <p className="text-lg text-gray-300">{block}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
            🎯 Seu Plano de Ação - Próximos 30 Dias
          </h3>
          <div className="space-y-4">
            {result.actions.map((action, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-black font-bold">{index + 1}</span>
                </div>
                <p className="text-lg text-gray-300">{action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-2xl p-8 border border-[#D4AF37]/30 mb-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#D4AF37]">
            🚀 Acelere Sua Transformação Financeira
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Este relatório é apenas o primeiro passo. Quer acelerar ainda mais seus resultados?
          </p>
          <Link href="/mentoria">
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-lg px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-105">
              Conhecer Mentoria Personalizada
            </button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">
            Parabéns por completar sua avaliação de inteligência financeira!
          </p>
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