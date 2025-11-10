'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
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

        {/* Main Content */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            🚧 Página de Checkout
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Esta é uma página placeholder para o checkout. Aqui você integrará 
            seu sistema de pagamento preferido (Stripe, PayPal, etc.).
          </p>

          <div className="bg-black/30 rounded-xl p-6 border border-gray-800 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">
              Para testar o resultado:
            </h3>
            <p className="text-gray-300 mb-6">
              Como esta é uma demonstração, você pode acessar diretamente 
              as páginas de resultado baseadas na sua pontuação:
            </p>
            
            <div className="space-y-4">
              <Link href="/resultado/baixa">
                <button className="w-full bg-red-500/20 border border-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-500/30 transition-all duration-300">
                  Resultado: Inteligência Baixa (0-20 pontos)
                </button>
              </Link>
              
              <Link href="/resultado/media">
                <button className="w-full bg-yellow-500/20 border border-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-500/30 transition-all duration-300">
                  Resultado: Inteligência Média (21-35 pontos)
                </button>
              </Link>
              
              <Link href="/resultado/alta">
                <button className="w-full bg-green-500/20 border border-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-500/30 transition-all duration-300">
                  Resultado: Inteligência Alta (36-50 pontos)
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link href="/">
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-105">
            Voltar ao Início
          </button>
        </Link>
      </div>
    </div>
  );
}