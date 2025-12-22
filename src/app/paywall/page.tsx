'use client';

import { useState, useEffect } from 'react';

export default function PaywallPage() {
  const [isVisible, setIsVisible] = useState(false);

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

        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-2">
            Seu diagnóstico está pronto ✅
          </h2>
          <p className="text-xl text-gray-300">
            Mas o acesso está bloqueado.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8">
          <h3 className="text-2xl font-semibold mb-6">
            🔒 Desbloqueie seu Diagnóstico{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
             de Controle Financeiro – MindCash
            </span>
          </h3>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Você acabou de responder perguntas que revelam como você pensa, decide
            e reage quando o dinheiro entra na sua vida.
            Seu diagnóstico mostra se hoje você está no controle
            ou apenas repetindo padrões que limitam seus resultados financeiros
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">Diagnóstico de Controle</span>
              </div>
              <p className="text-gray-400 text-sm">
                Veja se suas decisões financeiras são conscientes ou automáticas
              </p>
            </div>

            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">Padrões de Comportamento</span>
              </div>
              <p className="text-gray-400 text-sm">
                Identifique os hábitos invisíveis que estão guiando seus resultados
              </p>
            </div>

            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">Pontos de Força</span>
              </div>
              <p className="text-gray-400 text-sm">
                Descubra onde você já toma boas decisões e pode avançar mais rápido
              </p>
            </div>

            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">Direção Prática</span>
              </div>
              <p className="text-gray-400 text-sm">
                Saiba exatamente o que ajustar para assumir o controle do seu dinheiro
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a href="https://pay.kiwify.com.br/DoUvUCD" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-xl px-12 py-4 rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-105 mb-6">
            Ver meu diagnóstico agora
          </button>
        </a>

        {/* Additional Info */}
        <p className="text-gray-500 text-sm">
          🔒 Acesso seguro • Relatório personalizado • Resultados imediatos
        </p>
      </div>
    </div>
  );
}
