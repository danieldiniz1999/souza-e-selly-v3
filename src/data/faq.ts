export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-interior",
    category: "Atendimento no Interior",
    question: "Moro no interior do Ceará. Como funciona o atendimento se não puder ir a Fortaleza?",
    answer: "Esse é o maior diferencial do nosso escritório! Além do atendimento 100% digital e seguro via WhatsApp e videochamadas, as Dras. Samara Selly e Mariana Souza realizam visitas e viagens periódicas pelo interior do Ceará para ouvir clientes, recolher documentos e prestar suporte presencial a quem tem dificuldade de locomoção. A distância jamais será um obstáculo para você ter justiça."
  },
  {
    id: "faq-inss-negado",
    category: "Previdenciário",
    question: "Meu benefício do INSS foi negado ou cancelado. Ainda há esperança de reverter?",
    answer: "Sim, absolutamente! A grande maioria das negativas do INSS acontece por falha na análise burocrática do próprio órgão ou documentação incompleta. Na Justiça Federal, o juiz avalia seu direito com peritos imparciais e provas mais amplas. Quando revertemos a decisão, você recebe todos os meses atrasados desde a data em que fez o pedido original no INSS."
  },
  {
    id: "faq-honorarios",
    category: "Honorários & Contratação",
    question: "Como funciona a contratação e o pagamento dos honorários advocatícios?",
    answer: "Trabalhamos com total clareza e transparência, em estrita observância ao Código de Ética e à Tabela de Honorários da OAB/CE. Na grande maioria das ações previdenciárias e trabalhistas, adotamos o modelo de êxito: você só paga honorários contratuais quando o seu benefício ou indenização for efetivamente liberado e pago."
  },
  {
    id: "faq-horario",
    category: "Atendimento",
    question: "Qual é o horário de atendimento do escritório?",
    answer: "Nosso atendimento oficial ocorre de segunda a sexta-feira, das 09:00 às 17:00. Caso nos envie uma mensagem fora desse horário pelo WhatsApp, sua demanda é registrada de forma prioritária e entra na fila de retorno imediato assim que a equipe inicia o expediente às 09:00."
  },
  {
    id: "faq-documentos",
    category: "Primeiros Passos",
    question: "Quais documentos preciso ter em mãos para a análise inicial?",
    answer: "Para a primeira análise, você não precisa se preocupar com complexidade. Apenas: RG/CPF, comprovante de residência atualizado, carteira de trabalho (se tiver) e a carta de indeferimento do INSS ou o termo de rescisão da empresa. Caso falte algum documento, nós orientamos exatamente como obtê-lo."
  },
  {
    id: "faq-prazo-trabalhista",
    category: "Trabalhista",
    question: "Fui demitido ou sofri acidente de trabalho. Quanto tempo tenho para agir?",
    answer: "Pela legislação brasileira, você possui um prazo decadencial de até 2 anos a contar da data de demissão para ingressar com a reclamatória trabalhista. Contudo, quanto mais cedo você agir, mais fácil será reunir testemunhas e preservar registros essenciais para o ganho de causa."
  },
  {
    id: "faq-visita-fortaleza",
    category: "Localização",
    question: "Posso ser atendido presencialmente no escritório em Fortaleza?",
    answer: "Com certeza! Nossa sede fica na Av. Jovita Feitosa, nº 3072, Bairro Parquelândia, Fortaleza - Ceará. Contamos com recepção acolhedora, estacionamento e sala reservada para reuniões particulares. Basta agendar um horário com nossa equipe."
  }
];
