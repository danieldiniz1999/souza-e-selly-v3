export interface Lawyer {
  id: string;
  name: string;
  title: string;
  oab: string;
  experience: string;
  postGraduations: string[];
  bio: string;
  quote: string;
  specialties: string[];
  imageUrl: string;
}

export const LAWYERS: Lawyer[] = [
  {
    id: "dra-samara-selly",
    name: "Dra. Samara Selly",
    title: "Sócia Fundadora & Especialista Previdenciária e Trabalhista",
    oab: "OAB/CE",
    experience: "8 anos de atuação combativa",
    postGraduations: [
      "Pós-graduada em Direito Previdenciário",
      "Pós-graduada em Direito do Trabalho",
      "Pós-graduada em Processo do Trabalho"
    ],
    bio: "Advogada apaixonada pela defesa da dignidade da pessoa humana. Ao longo de 8 anos, especializou-se em desatar nós burocráticos do INSS e combater abusos nas relações trabalhistas. Conhecida por sua empatia incondicional, percorre municípios do interior do Ceará para levar orientação jurídica de alto nível a quem mais precisa.",
    quote: "O direito não socorre aos que dormem, mas nossa missão é garantir que você jamais fique desamparado perante o Estado ou grandes corporações.",
    specialties: [
      "Aposentadorias Especiais e Rurais",
      "BPC / LOAS e Benefícios por Incapacidade",
      "Rescisões Trabalhistas e Danos Morais",
      "Reconhecimento de Vínculo e Acidentes de Trabalho"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dra-maria-souza",
    name: "Dra. Maria Souza",
    title: "Sócia Fundadora & Especialista Previdenciária e Tributária",
    oab: "OAB/CE",
    experience: "8 anos de advocacia estratégica",
    postGraduations: [
      "Pós-graduada em Direito Previdenciário",
      "Pós-graduada em Direito Tributário"
    ],
    bio: "Estrategista jurídica focada em soluções ágeis e sustentáveis. Alia o rigor analítico do Direito Tributário com a sensibilidade humanizada do Direito Previdenciário e Cível. Atua ativamente no planejamento financeiro-previdenciário de famílias e na estruturação de teses vitoriosas perante a Justiça Estadual e Federal.",
    quote: "Advocacia séria não vende promessas mágicas: entrega estratégia técnica apurada, transparência absoluta e presença real ao lado do cliente.",
    specialties: [
      "Planejamento Previdenciário Estratégico",
      "Revisões de Benefícios e Pensões",
      "Direito Cível, Família e Sucessões",
      "Contratos, Indenizações e Cobranças Indevidas"
    ],
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80"
  }
];
