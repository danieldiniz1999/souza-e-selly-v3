export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accent: string;
  items: {
    title: string;
    description: string;
    benefit: string;
  }[];
  urgencyWarning: string;
  typicalCases: string[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "previdenciario",
    title: "Direito Previdenciário",
    subtitle: "Conquiste o benefício que o INSS dificultou ou negou",
    description: "Você trabalhou a vida inteira e não pode ficar refém da burocracia do INSS. Cuidamos do seu processo desde o pedido administrativo até a ação judicial, garantindo o melhor valor possível e o pagamento de todos os retroativos.",
    iconName: "ShieldCheck",
    accent: "from-gold-500/20 to-gold-700/10",
    urgencyWarning: "Atenção: Cada mês que você demora para recorrer de uma negativa do INSS pode significar dinheiro perdido que a lei concede a você.",
    typicalCases: [
      "Aposentadoria por Idade e Tempo de Contribuição",
      "Aposentadoria Especial (insalubridade e periculosidade)",
      "Aposentadoria Rural e Segurado Especial",
      "BPC / LOAS (Idoso e Pessoa com Deficiência / Autismo)",
      "Auxílio-Doença e Aposentadoria por Incapacidade",
      "Pensão por Morte e Auxílio-Reclusão",
      "Revisão da Vida Toda e Revisão de Valor de Benefício",
      "Planejamento Previdenciário para antecipar a aposentadoria"
    ],
    items: [
      {
        title: "Reversão de Negativa do INSS",
        description: "Análise imediata do motivo do indeferimento com ação rápida na Justiça Federal.",
        benefit: "Recupere o benefício com retroativos desde o dia da primeira entrada."
      },
      {
        title: "BPC / LOAS Humanizado",
        description: "Comprovação detalhada de renda e laudos médicos para pessoas com deficiência ou maiores de 65 anos.",
        benefit: "Renda mensal garantida sem necessidade de ter contribuído previamente."
      },
      {
        title: "Aposentadoria Rural & Interior",
        description: "Organização probatória completa para agricultores, pescadores e trabalhadores do campo cearense.",
        benefit: "Reconhecimento pleno do tempo trabalhado na lavoura com apoio presencial."
      }
    ]
  },
  {
    id: "trabalhista",
    title: "Direito do Trabalho",
    subtitle: "Defesa combativa contra abusos e injustiças no ambiente de trabalho",
    description: "O trabalhador não deve abrir mão daquilo que conquistou com suor. Atuamos com firmeza para reaver verbas não pagas, combater assédio moral e garantir estabilidade ou indenização devida.",
    iconName: "Briefcase",
    accent: "from-amber-500/20 to-yellow-700/10",
    urgencyWarning: "Prazo Fatal: Pela lei trabalhista, você tem até 2 anos após sair do emprego para pleitear seus direitos dos últimos 5 anos.",
    typicalCases: [
      "Rescisão Indireta (demissão forçada por descumprimento do patrão)",
      "Verbas Rescisórias Incompletas ou Não Pagas",
      "Horas Extras, Banco de Horas e Adicional Noturno",
      "Adicional de Insalubridade e Periculosidade",
      "Acidente de Trabalho e Doenças Ocupacionais (LER/Burnout)",
      "Reconhecimento de Vínculo de Emprego (Carteira sem Assinar)",
      "Assédio Moral, Constrangimento e Dano Moral",
      "Estabilidade de Gestante e Membro de CIPA"
    ],
    items: [
      {
        title: "Rescisão com Todos os Direitos",
        description: "Cálculo exato de aviso prévio, FGTS + 40%, férias e 13º salário não quitados.",
        benefit: "Garantia de que nenhum centavo trabalhado ficará retido pela empresa."
      },
      {
        title: "Acidente de Trabalho & Indenização",
        description: "Ação vigorosa para pensão vitalícia, despesas médicas e reparação moral.",
        benefit: "Segurança financeira para o trabalhador e sua família após o ocorrido."
      },
      {
        title: "Trabalho Sem Carteira Assinada",
        description: "Comprovação testemunhal e documental de vínculo empregatício fraudado.",
        benefit: "Recolhimento integral do FGTS retroativo e tempo para sua aposentadoria."
      }
    ]
  },
  {
    id: "civel",
    title: "Direito Cível & Família",
    subtitle: "Proteção patrimonial, contratos seguros e soluções familiares harmoniosas",
    description: "Conflitos civis exigem técnica apurada aliada a sensibilidade e agilidade. Defendemos seus interesses patrimoniais e familiares com foco em soluções eficientes, justas e seguras.",
    iconName: "Scale",
    accent: "from-gold-600/20 to-stone-800/10",
    urgencyWarning: "Não assine acordos precipitados nem aceite prejuízos sem uma avaliação jurídica especializada prévia.",
    typicalCases: [
      "Inventário Judicial e Extrajudicial (em cartório)",
      "Divórcio, Partilha de Bens e Pensão Alimentícia",
      "Guarda de Filhos e Regulamentação de Convivência",
      "Ações de Indenização por Danos Morais e Materiais",
      "Cobranças Indevidas e Inscrição Irregular no SPC/Serasa",
      "Direito do Consumidor contra Bancos e Concessionárias",
      "Elaboração e Revisão de Contratos de Compra e Venda",
      "Regularização de Imóveis e Usucapião"
    ],
    items: [
      {
        title: "Inventário & Planejamento Sucessório",
        description: "Partilha de bens ágil para preservar o patrimônio familiar sem atritos desnecessários.",
        benefit: "Redução de custos tributários e liberação rápida dos bens da família."
      },
      {
        title: "Direito de Família & Alimentos",
        description: "Fixação e revisão de pensão alimentícia com respeito e prioridade absoluta aos filhos.",
        benefit: "Tratamento humanizado em momentos delicados da vida familiar."
      },
      {
        title: "Indenizações & Relações de Consumo",
        description: "Combate a abusos de bancos, companhias aéreas e fornecedores.",
        benefit: "Reparação financeira integral pelo prejuízo ou desgaste injusto sofrido."
      }
    ]
  }
];
