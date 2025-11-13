'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getResultLevel } from '@/lib/quiz-data';
import { Suspense } from 'react';

// Componente que faz o redirecionamento real
function RedirectResultadoInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const paid = searchParams.get('paid');

    // Se o usuário não tiver pago, redireciona pro checkout da Kiwify
    if (!paid || paid !== 'true') {
      router.replace('https://pay.kiwify.com.br/igYyAIS');
      return;
    }

    const storedScore = localStorage.getItem('quizScore');

    // Se não tiver pontuação salva, volta pro início
    if (!storedScore) {
      router.replace('/');
      return;
    }

    const score = parseInt(storedScore);
    const level = getResultLevel(score);

    // Redireciona direto pro resultado correto
    router.replace(`/resultado/${level}`);
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-gray-400 text-lg">Carregando resultado...</p>
    </div>
  );
}

// Componente principal com Suspense
export default function RedirectResultado() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400 text-lg">Carregando resultado...</p>
      </div>
    }>
      <RedirectResultadoInner />
    </Suspense>
  );
}
