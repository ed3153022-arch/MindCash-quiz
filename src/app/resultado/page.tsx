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
    const level = getResultLevel(score); // retorna: baixa / media / alta

    // 🔥 Correção completa (convertendo níveis para diretórios)
    if (level === 'baixa') {
      router.replace('/resultado/baixa');
      return;
    }

    if (level === 'media') {
      router.replace('/resultado/medio');
      return;
    }

    if (level === 'alta') {
      router.replace('/resultado/alto');
      return;
    }

    // fallback de segurança
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-gray-400 text-lg">Carregando resultado...</p>
    </div>
  );
}
