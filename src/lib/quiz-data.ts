export interface QuizQuestion {
  id: number;
  question: string;
  type?: 'multiple-choice' | 'slider' | 'drag-order' | 'image-choice' | 'multi-slider' | 'emotion-scale';
  options?: {
    text: string;
    points: number;
  }[];
  sliderConfig?: {
    min: number;
    max: number;
    step: number;
  };
  dragItems?: string[];
  images?: {
    src: string;
    alt: string;
    points: number;
    caption?: string;
  }[];
  multiSliders?: {
    label: string;
    min: number;
    max: number;
    step: number;
  }[];
  emotions?: {
    icon: string;
    label: string;
    points: number;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Como você se sente quando precisa falar sobre dinheiro?",
    type: 'multiple-choice',
    options: [
      { text: "Muito desconfortável, evito o assunto", points: 0 },
      { text: "Um pouco desconfortável, mas consigo conversar", points: 1 },
      { text: "Confortável, é um assunto como qualquer outro", points: 2 }
    ]
  },
  {
    id: 2,
    question: "Qual é sua relação com o planejamento financeiro?",
    type: 'multiple-choice',
    options: [
      { text: "Não faço planejamento, vivo o presente", points: 0 },
      { text: "Faço um planejamento básico mensal", points: 1 },
      { text: "Tenho planejamento detalhado de curto, médio e longo prazo", points: 2 }
    ]
  },
  {
    id: 3,
    question: "Como você reage quando vê uma promoção irresistível?",
    type: 'multiple-choice',
    options: [
      { text: "Compro imediatamente, não posso perder", points: 0 },
      { text: "Penso um pouco, mas geralmente compro", points: 1 },
      { text: "Analiso se realmente preciso e se cabe no orçamento", points: 2 }
    ]
  },
  {
    id: 4,
    question: "Qual sua principal fonte de educação financeira?",
    type: 'multiple-choice',
    options: [
      { text: "Não busco educação financeira", points: 0 },
      { text: "Redes sociais e conversas com amigos", points: 1 },
      { text: "Livros, cursos e fontes confiáveis", points: 2 }
    ]
  },
  {
    id: 5,
    question: "Como você lida com dívidas?",
    type: 'multiple-choice',
    options: [
      { text: "Pago o mínimo e deixo para depois", points: 0 },
      { text: "Tento quitar quando posso", points: 1 },
      { text: "Priorizo quitação e evito me endividar", points: 2 }
    ]
  },
  {
    id: 6,
    question: "Qual é sua estratégia para emergências financeiras?",
    type: 'multiple-choice',
    options: [
      { text: "Não tenho reserva, resolvo na hora", points: 0 },
      { text: "Tenho uma pequena quantia guardada", points: 1 },
      { text: "Mantenho reserva de 6-12 meses de gastos", points: 2 }
    ]
  },
  {
    id: 7,
    question: "Como você vê os investimentos?",
    type: 'multiple-choice',
    options: [
      { text: "Muito arriscado, prefiro poupança", points: 0 },
      { text: "Interessante, mas não sei por onde começar", points: 1 },
      { text: "Essencial para construir patrimônio", points: 2 }
    ]
  },
  {
    id: 8,
    question: "Qual sua atitude em relação ao dinheiro dos outros?",
    type: 'multiple-choice',
    options: [
      { text: "Sinto inveja quando vejo alguém bem financeiramente", points: 0 },
      { text: "Fico curioso sobre como conseguiram", points: 1 },
      { text: "Me inspiro e busco aprender com eles", points: 2 }
    ]
  },
  {
    id: 9,
    question: "Como você toma decisões financeiras importantes?",
    type: 'multiple-choice',
    options: [
      { text: "Por impulso ou emoção", points: 0 },
      { text: "Penso um pouco e decido", points: 1 },
      { text: "Analiso dados, pesquiso e planejo", points: 2 }
    ]
  },
  {
    id: 10,
    question: "Qual sua relação com o trabalho e renda?",
    type: 'multiple-choice',
    options: [
      { text: "Trabalho apenas pelo salário", points: 0 },
      { text: "Busco crescer na carreira", points: 1 },
      { text: "Desenvolvo múltiplas fontes de renda", points: 2 }
    ]
  },
  {
    id: 11,
    question: "Como você lida com gastos supérfluos?",
    type: 'multiple-choice',
    options: [
      { text: "Gasto sem pensar muito", points: 0 },
      { text: "Às vezes me controlo, às vezes não", points: 1 },
      { text: "Tenho disciplina e controle total", points: 2 }
    ]
  },
  {
    id: 12,
    question: "Qual sua visão sobre dinheiro e felicidade?",
    type: 'multiple-choice',
    options: [
      { text: "Dinheiro não traz felicidade", points: 0 },
      { text: "Dinheiro ajuda, mas não é tudo", points: 1 },
      { text: "Dinheiro é uma ferramenta para liberdade e realização", points: 2 }
    ]
  },
  {
    id: 13,
    question: "Como você se comporta em negociações?",
    type: 'multiple-choice',
    options: [
      { text: "Aceito o primeiro preço oferecido", points: 0 },
      { text: "Às vezes tento negociar", points: 1 },
      { text: "Sempre negocio e busco o melhor acordo", points: 2 }
    ]
  },
  {
    id: 14,
    question: "Qual sua atitude em relação a metas financeiras?",
    type: 'multiple-choice',
    options: [
      { text: "Não estabeleço metas específicas", points: 0 },
      { text: "Tenho algumas metas vagas", points: 1 },
      { text: "Defino metas claras, mensuráveis e com prazos", points: 2 }
    ]
  },
  {
    id: 15,
    question: "Como você lida com conselhos financeiros?",
    type: 'multiple-choice',
    options: [
      { text: "Raramente peço ou sigo conselhos", points: 0 },
      { text: "Ouço, mas nem sempre sigo", points: 1 },
      { text: "Busco ativamente mentores e especialistas", points: 2 }
    ]
  },
  {
    id: 16,
    question: "Qual sua relação com o controle financeiro?",
    type: 'multiple-choice',
    options: [
      { text: "Não controlo gastos nem receitas", points: 0 },
      { text: "Faço um controle básico mental", points: 1 },
      { text: "Registro tudo detalhadamente", points: 2 }
    ]
  },
  {
    id: 17,
    question: "Como você vê oportunidades de renda extra?",
    type: 'multiple-choice',
    options: [
      { text: "Não me interesso por renda extra", points: 0 },
      { text: "Penso nisso, mas não ajo", points: 1 },
      { text: "Sempre busco e aproveito oportunidades", points: 2 }
    ]
  },
  {
    id: 18,
    question: "Qual sua atitude em relação ao futuro financeiro?",
    type: 'multiple-choice',
    options: [
      { text: "Não penso muito no futuro", points: 0 },
      { text: "Me preocupo, mas não planejo", points: 1 },
      { text: "Planejo ativamente minha aposentadoria e futuro", points: 2 }
    ]
  },
  {
    id: 19,
    question: "Como você lida com pressão social para gastar?",
    type: 'multiple-choice',
    options: [
      { text: "Cedo facilmente à pressão", points: 0 },
      { text: "Às vezes resisto, às vezes cedo", points: 1 },
      { text: "Mantenho meus valores independente da pressão", points: 2 }
    ]
  },
  {
    id: 20,
    question: "Qual sua relação com o aprendizado financeiro?",
    type: 'multiple-choice',
    options: [
      { text: "Não tenho interesse em aprender", points: 0 },
      { text: "Aprendo ocasionalmente", points: 1 },
      { text: "Estudo constantemente sobre finanças", points: 2 }
    ]
  },
  {
    id: 21,
    question: "Como você se sente em relação ao seu conhecimento financeiro atual?",
    type: 'multiple-choice',
    options: [
      { text: "Sei muito pouco sobre finanças", points: 0 },
      { text: "Tenho conhecimento básico", points: 1 },
      { text: "Me considero bem informado financeiramente", points: 2 }
    ]
  },
  {
    id: 22,
    question: "Qual sua estratégia para aumentar sua renda?",
    type: 'multiple-choice',
    options: [
      { text: "Espero aumentos automáticos", points: 0 },
      { text: "Busco promoções no trabalho atual", points: 1 },
      { text: "Desenvolvo habilidades e múltiplas fontes", points: 2 }
    ]
  },
  {
    id: 23,
    question: "Como você lida com comparações financeiras?",
    type: 'multiple-choice',
    options: [
      { text: "Me sinto mal quando outros têm mais", points: 0 },
      { text: "Às vezes me comparo, mas não muito", points: 1 },
      { text: "Foco na minha própria jornada financeira", points: 2 }
    ]
  },
  {
    id: 24,
    question: "Qual sua atitude em relação a riscos financeiros?",
    type: 'multiple-choice',
    options: [
      { text: "Evito qualquer tipo de risco", points: 0 },
      { text: "Aceito riscos pequenos e calculados", points: 1 },
      { text: "Analiso e aceito riscos quando vale a pena", points: 2 }
    ]
  },
  {
    id: 25,
    question: "Como você vê a relação entre tempo e dinheiro?",
    type: 'multiple-choice',
    options: [
      { text: "Nunca pensei nessa relação", points: 0 },
      { text: "Entendo que tempo é dinheiro", points: 1 },
      { text: "Otimizo meu tempo para maximizar resultados financeiros", points: 2 }
    ]
  },
  // NOVAS 5 PERGUNTAS ADICIONADAS
  {
    id: 26,
    question: "Em uma escala de 0 a 100, qual é seu nível de confiança para tomar decisões financeiras importantes?",
    type: 'slider',
    sliderConfig: {
      min: 0,
      max: 100,
      step: 1
    }
  },
  {
    id: 27,
    question: "Ordene estas prioridades financeiras da mais importante (1º) para a menos importante (3º):",
    type: 'drag-order',
    dragItems: [
      "Construir uma reserva de emergência",
      "Investir para aposentadoria",
      "Quitar todas as dívidas"
    ]
  },
  {
    id: 28,
    question: "Qual dessas situações financeiras mais representa seu objetivo atual?",
    type: 'image-choice',
    images: [
      {
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
        alt: "Pessoa organizando documentos financeiros",
        caption: "Organizar minhas finanças",
        points: 0
      },
      {
        src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
        alt: "Gráficos de investimento crescendo",
        caption: "Fazer meu dinheiro crescer",
        points: 1
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        alt: "Pessoa relaxando em uma praia",
        caption: "Conquistar liberdade financeira",
        points: 2
      }
    ]
  },
  {
    id: 29,
    question: "Avalie sua situação atual em cada área financeira (0 = muito ruim, 100 = excelente):",
    type: 'multi-slider',
    multiSliders: [
      {
        label: "Controle de gastos",
        min: 0,
        max: 100,
        step: 1
      },
      {
        label: "Conhecimento sobre investimentos",
        min: 0,
        max: 100,
        step: 1
      },
      {
        label: "Disciplina para poupar",
        min: 0,
        max: 100,
        step: 1
      }
    ]
  },
  {
    id: 30,
    question: "Como você se sente quando pensa no seu futuro financeiro?",
    type: 'emotion-scale',
    emotions: [
      { icon: "😰", label: "Muito ansioso", points: 0 },
      { icon: "😟", label: "Preocupado", points: 0 },
      { icon: "😐", label: "Neutro", points: 1 },
      { icon: "😊", label: "Confiante", points: 2 },
      { icon: "🤩", label: "Muito otimista", points: 2 }
    ]
  }
];

export const getResultLevel = (score: number): 'baixa' | 'media' | 'alta' => {
  if (score <= 25) return 'baixa';
  if (score <= 45) return 'media';
  return 'alta';
};


export const resultData = {
  baixa: {
    title: "Inteligência Financeira Baixa",
    subtitle: "Você está no início da sua jornada financeira",
    description: "Seus resultados indicam que você ainda está desenvolvendo sua consciência financeira. Isso é completamente normal e o primeiro passo para a transformação é reconhecer onde você está.",
    strengths: [
      "Honestidade para reconhecer suas limitações",
      "Potencial de crescimento imenso",
      "Oportunidade de construir bases sólidas desde o início"
    ],
    blocks: [
      "Falta de planejamento financeiro estruturado",
      "Decisões baseadas em emoções ao invés de dados",
      "Ausência de educação financeira formal",
      "Dificuldade em controlar impulsos de consumo"
    ],
    actions: [
      "Comece a anotar todos os seus gastos por 7 dias",
      "Defina uma meta financeira simples para o próximo mês",
      "Leia 15 minutos por dia sobre educação financeira",
      "Crie o hábito de pensar 24h antes de compras não essenciais"
    ]
  },
  media: {
    title: "Inteligência Financeira Média",
    subtitle: "Você tem uma base sólida, mas pode evoluir muito mais",
    description: "Parabéns! Você já desenvolveu alguns hábitos financeiros positivos e tem consciência da importância do dinheiro. Agora é hora de refinar suas estratégias e acelerar seus resultados.",
    strengths: [
      "Consciência financeira desenvolvida",
      "Alguns hábitos positivos já estabelecidos",
      "Capacidade de planejamento básico",
      "Interesse em crescer financeiramente"
    ],
    blocks: [
      "Falta de consistência na aplicação dos conhecimentos",
      "Planejamento ainda superficial",
      "Dificuldade em resistir a algumas tentações",
      "Conhecimento limitado sobre investimentos"
    ],
    actions: [
      "Crie um orçamento detalhado e siga rigorosamente por 7 dias",
      "Estabeleça uma meta de economia específica para este mês",
      "Pesquise sobre uma nova modalidade de investimento",
      "Identifique e elimine um gasto desnecessário recorrente"
    ]
  },
  alta: {
    title: "Inteligência Financeira Alta",
    subtitle: "Você possui uma mentalidade financeira desenvolvida",
    description: "Excelente! Você demonstra uma compreensão avançada sobre finanças e possui hábitos que te colocam no caminho da prosperidade. Continue refinando suas estratégias para maximizar seus resultados.",
    strengths: [
      "Mentalidade financeira bem desenvolvida",
      "Disciplina e controle sobre gastos",
      "Visão de longo prazo estabelecida",
      "Busca constante por conhecimento e crescimento"
    ],
    blocks: [
      "Possível excesso de conservadorismo em alguns aspectos",
      "Oportunidade de diversificar ainda mais as estratégias",
      "Potencial para acelerar a construção de patrimônio"
    ],
    actions: [
      "Revise e otimize sua estratégia de investimentos atual",
      "Explore uma nova fonte de renda passiva",
      "Defina uma meta financeira desafiadora para os próximos 90 dias",
      "Compartilhe conhecimento financeiro com alguém próximo"
    ]
  }
};
