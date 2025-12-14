'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getResultLevel } from '@/lib/quiz-data';

export default function RedirectResultado() {
  const router = useRouter();

  useEffect(() => {
    // Recupera a pontuação salva
    const storedScore = localStorage.getItem('quizScore');

    // Se não tiver pontuação salva, volta pro início
    if (!storedScore) {
      router.replace('/');
      return;
    }

    const score = parseInt(storedScore);
    const level = getResultLevel(score);

    // Redireciona para o resultado correto
    router.replace(`/resultado/${level}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-gray-400 text-lg">Carregando resultado...</p>
    </div>
  );
}
