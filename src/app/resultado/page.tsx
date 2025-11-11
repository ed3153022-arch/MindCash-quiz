'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getResultLevel } from '@/lib/quiz-data';

export default function RedirectResultado() {
  const router = useRouter();

  useEffect(() => {
    const storedScore = localStorage.getItem('quizScore');

    // Se não tiver pontuação, volta para o início
    if (!storedScore) {
      router.replace('/');
      return;
    }

    const score = parseInt(storedScore);
    const level = getResultLevel(score);

    // Envia direto para o resultado-final correto
    router.replace(`/resultado-final?level=${level}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-gray-400 text-lg">Carregando resultado...</p>
    </div>
  );
}
