export interface FaqItem {
  id: string;
  category: string;
  categoryKey: 'todos' | 'previdenciario' | 'trabalhista' | 'civel' | 'atendimento';
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-interior",
    category: "Atendimento no CE",
    categoryKey: "atendimento",
    question: "Moro no interior do Ceará. Como funciona o atendimento sem ir a Fortaleza?",
    answer: "Esse é o maior diferencial da Souza & Selly: além de atendimento 100% digital seguro por WhatsApp e chamadas de vídeo, a Dra. Samara e a Dra. Mariana viajam regularmente pelo interior do Ceará para visitar clientes, coletar documentos e prestar apoio presencial humanizado."
  },
  {
    id: "faq-inss-negado",
    category: "Previdenciário",
    categoryKey: "previdenciario",
    question: "Meu benefício do INSS foi negado ou cessado. Ainda é possível reverter?",
    answer: "Sim! A imensa maioria dos indeferimentos do INSS ocorre por falhas formais do sistema ou perícias apressadas. Na Justiça Federal, seu direito é avaliado com laudos imparciais. Ao reverter, você recebe todos os atrasados retroativos desde a data do primeiro pedido."
  },
  {
    id: "faq-bpc-loas",
    category: "Previdenciário",
    categoryKey: "previdenciario",
    question: "Quem tem direito ao BPC/LOAS? Preciso ter contribuído com o INSS?",
    answer: "Não precisa ter contribuído! O BPC/LOAS é um benefício de 1 salário mínimo mensal garantido a idosos a partir de 65 anos ou pessoas de qualquer idade com deficiência (incluindo autismo/TEA e doenças incapacitantes) em situação de vulnerabilidade familiar."
  },
  {
    id: "faq-rural",
    category: "Previdenciário",
    categoryKey: "previdenciario",
    question: "Trabalhei na agricultura/campo. Como comprovo aposentadoria rural?",
    answer: "Ajudamos você a reunir certidões civis com profissão de lavrador, declarações de sindicatos, notas de produtor, contratos de comodato ou parceria e prova testemunhal sólida, garantindo a aposentadoria por idade rural sem burocracia."
  },
  {
    id: "faq-honorarios",
    category: "Honorários",
    categoryKey: "atendimento",
    question: "Como funciona o pagamento dos honorários? Preciso pagar algo antes?",
    answer: "Atuamos com ética estrita da OAB/CE. Na grande maioria dos casos previdenciários e trabalhistas, adotamos o contrato no êxito: você só paga os honorários ao final, quando o seu benefício ou a sua indenização for deferida e liberada para recebimento."
  },
  {
    id: "faq-sem-carteira",
    category: "Trabalhista",
    categoryKey: "trabalhista",
    question: "Trabalhei sem carteira assinada. Posso cobrar direitos e FGTS atrasado?",
    answer: "Sim! Trabalhar sem carteira é uma fraude aos direitos do trabalhador. Na Justiça do Trabalho comprovamos o vínculo através de mensagens, testemunhas e comprovantes de pagamento para obrigar a empresa a assinar a carteira e pagar todo o FGTS + 40%, férias e 13º."
  },
  {
    id: "faq-acidente-trabalho",
    category: "Trabalhista",
    categoryKey: "trabalhista",
    question: "Sofri acidente de trabalho ou adquiri doença no serviço. Quais meus direitos?",
    answer: "Você tem direito à estabilidade provisória de 12 meses após a alta médica, indenização por danos morais e materiais da empresa, reembolso de despesas de tratamento e, em casos de redução permanente da capacidade, pensão mensal vitalícia."
  },
  {
    id: "faq-prazo-trabalhista",
    category: "Trabalhista",
    categoryKey: "trabalhista",
    question: "Fui demitido ou saí da empresa. Quanto tempo tenho para entrar com a ação?",
    answer: "O prazo máximo da lei é de 2 anos a contar da data de saída da empresa, podendo cobrar os últimos 5 anos de direitos trabalhistas. No entanto, quanto antes ingressar, mais fácil reunir testemunhas e documentos comprovatórios."
  },
  {
    id: "faq-inventario",
    category: "Cível & Família",
    categoryKey: "civel",
    question: "Como funciona o inventário de bens da família? É possível fazer rápido em cartório?",
    answer: "Se todos os herdeiros forem maiores, capazes e estiverem em acordo sobre a partilha, o inventário pode ser feito diretamente em cartório de notas (extrajudicial) em questão de semanas, reduzindo custos e liberando os bens da família com agilidade."
  },
  {
    id: "faq-pensao-alimentos",
    category: "Cível & Família",
    categoryKey: "civel",
    question: "Pensão alimentícia atrasada ou insuficiente. Como regularizar na Justiça?",
    answer: "Ingressamos com ação de fixação ou revisão de pensão, ou execução de alimentos com pedido de bloqueio ou prisão civil do devedor em caso de inadimplência, garantindo prioritariamente o sustento, dignidade e educação dos filhos."
  },
  {
    id: "faq-documentos",
    category: "Primeiros Passos",
    categoryKey: "atendimento",
    question: "Quais documentos preciso enviar para a primeira avaliação jurídica?",
    answer: "Para a triagem inicial, você só precisa de fotos do RG/CPF, comprovante de residência atual e os documentos básicos do caso (carteira de trabalho, laudos médicos ou carta de negativa do INSS). O que faltar, nós orientamos como emitir."
  },
  {
    id: "faq-horario-local",
    category: "Atendimento",
    categoryKey: "atendimento",
    question: "Qual o horário de atendimento e onde fica o escritório físico em Fortaleza?",
    answer: "Atendemos de segunda a sexta, das 09:00 às 17:00, com suporte contínuo no WhatsApp. Nossa sede fica na Av. Jovita Feitosa, nº 3072, Bairro Parquelândia, Fortaleza/CE (CEP 60455-410), com estrutura acolhedora para atendimento presencial agendado."
  }
];
