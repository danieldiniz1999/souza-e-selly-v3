export interface Testimonial {
  id: string;
  name: string;
  city: string;
  state: string;
  area: string;
  caseSummary: string;
  comment: string;
  rating: number;
  date: string;
  avatarUrl: string;
  highlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dep-1",
    name: "Raimundo Nonato de Sousa",
    city: "Quixadá",
    state: "CE",
    area: "Direito Previdenciário (Aposentadoria Rural)",
    caseSummary: "Aposentadoria negada 2 vezes pelo INSS",
    comment: "Eu já tinha desistido após o INSS negar duas vezes. Moro no sertão de Quixadá e não tinha como ir a Fortaleza com frequência. A Dra. Samara e a Dra. Maria vieram pessoalmente até a região, recolheram meus comprovantes de agricultor e cuidaram de tudo. Em poucos meses saiu minha aposentadoria com todos os atrasados pagos. Elas não são só advogadas, são anjos na vida do trabalhador.",
    rating: 5,
    date: "Há 2 meses",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    highlight: "Atendimento no Sertão & Aposentadoria Concedida"
  },
  {
    id: "dep-2",
    name: "Francisca Maria Holanda",
    city: "Fortaleza",
    state: "CE",
    area: "Direito Previdenciário (BPC/LOAS)",
    caseSummary: "Benefício para filho autista com atraso de 18 meses",
    comment: "Fui ao escritório delas na Parquelândia desesperada com a situação do meu filho. O atendimento foi impecável do início ao fim. Elas me acolheram, explicaram sem termos difíceis e reverteram a negativa na Justiça Federal com tutela de urgência. Toda mãe atípica deveria ter advogadas dedicadas como elas.",
    rating: 5,
    date: "Há 1 mês",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    highlight: "Sede Parquelândia & Liminar Aprovada"
  },
  {
    id: "dep-3",
    name: "Antônio Carlos Bezerra",
    city: "Juazeiro do Norte",
    state: "CE",
    area: "Direito Trabalhista",
    caseSummary: "Acidente de trabalho sem suporte da empresa",
    comment: "Trabalhei 12 anos em uma indústria no Cariri e após um acidente fui abandonado pela empresa. Dra. Maria Souza me atendeu com atenção extrema, analisou todas as perícias e conquistamos nossa indenização justa e reintegração de benefícios. Elas têm palavra e não descansam enquanto não fazem valer a lei.",
    rating: 5,
    date: "Há 3 meses",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    highlight: "Região do Cariri & Indenização Justa"
  },
  {
    id: "dep-4",
    name: "Maria Gorete Silva",
    city: "Sobral",
    state: "CE",
    area: "Direito Previdenciário (Pensão por Morte)",
    caseSummary: "Pensão negada após falecimento do esposo provedor",
    comment: "Quando perdi meu esposo fiquei sem chão e sem renda. Em Sobral me indicaram o escritório Souza & Selly. A Dra. Samara entrou em contato imediato, colheu os depoimentos e comprovou a união estável. A pensão foi implantada e recebi todo o retroativo. Gratidão eterna pelo carinho e respeito.",
    rating: 5,
    date: "Há 4 meses",
    avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80",
    highlight: "Região Norte / Sobral & Segurança da Família"
  },
  {
    id: "dep-5",
    name: "Valdemar Albuquerque",
    city: "Crateús",
    state: "CE",
    area: "Direito Trabalhista e Cível",
    caseSummary: "Rescisão indireta por horas extras abusivas e dano moral",
    comment: "O que mais me impressionou foi a disposição das doutoras em entender a realidade de quem mora no interior. Em Crateús tínhamos pouca esperança contra uma grande rede comercial. Elas montaram uma tese sólida, foram combativas na audiência e ganhamos tudo o que era devido. Profissionalismo de padrão nacional.",
    rating: 5,
    date: "Há 5 meses",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    highlight: "Sertão dos Crateús & Direitos Garantidos"
  },
  {
    id: "dep-6",
    name: "Antônia Elenice Peixoto",
    city: "Iguatu",
    state: "CE",
    area: "Direito Previdenciário (Auxílio-Doença & Conversão)",
    caseSummary: "Perícia do INSS cancelou auxílio de portadora de doença crônica",
    comment: "Mesmo sem conseguir andar direito, o INSS cortou meu benefício em Iguatu. As advogadas não mediram esforços: agendaram perícia judicial com médico especialista e converteram meu auxílio em aposentadoria por incapacidade permanente. Se você tem dúvida sobre seu direito, fale com elas com os olhos fechados.",
    rating: 5,
    date: "Há 2 meses",
    avatarUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80",
    highlight: "Centro-Sul / Iguatu & Aposentadoria Definitiva"
  }
];
