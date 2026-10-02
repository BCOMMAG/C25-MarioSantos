export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  role: string;
  tagline: string;
  slogan: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Advocacia Mario Santos",
  shortName: "Mario Santos Advocacia",
  lawyer: "Mario Santos",
  role: "Advogado Especialista em Direito Trabalhista e Previdenciário",
  tagline: "Defesa ágil, estratégica e humanizada dos seus direitos trabalhistas e previdenciários.",
  slogan: "Rigor técnico, soluções contemporâneas e compromisso ético inegociável na defesa do trabalhador e do segurado.",
  phone: "(41) 99572-9266",
  whatsapp: "5541995729266",
  whatsappNumber: "5541995729266",
  whatsappFormatted: "(41) 99572-9266",
  whatsappUrl:
    "https://wa.me/5541995729266?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Advocacia%20Mario%20Santos%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  instagramUrl: "https://www.instagram.com/advocaciamariosantos/",
  instagramHandle: "@advocaciamariosantos",
  linkedinUrl: "https://www.linkedin.com/in/advocaciamariosantos/",
  linkedinHandle: "advocaciamariosantos",
  address: "R. Mariano Torres, 573 - Centro, Curitiba - PR, 80060-120",
  addressShort: "R. Mariano Torres, 573 - Centro, Curitiba/PR",
  city: "Curitiba",
  state: "PR",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Mariano+Torres,+573+-+Centro,+Curitiba+-+PR,+80060-120",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=R.+Mariano+Torres,+573+-+Centro,+Curitiba+-+PR,+80060-120&output=embed",
  schedule: {
    weekdays: "Segunda a Sexta: 08:00 às 18:00",
    saturday: "Fechado",
    sunday: "Fechado",
  },
};

export interface LawyerProfile {
  name: string;
  role: string;
  graduation: string;
  bio: string[];
  careerHighlights: string[];
  personalNotes: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Mario Santos",
  role: "Advogado Titular • Especialista em Direito Trabalhista e Previdenciário",
  graduation: "Bacharelado em Direito pela Universidade Positivo (UP)",
  bio: [
    "Mario Santos dedica sua advocacia à defesa estratégica e humanizada de trabalhadores e segurados da Previdência Social, combinando sólido embasamento jurídico e visão contemporânea da prática forense.",
    "Formado em Direito pela Universidade Positivo (UP), desenvolve uma advocacia centrada na precisão probatória, auditoria de verbas rescisórias e combate às negativas abusivas de benefícios junto ao INSS e à Justiça do Trabalho e Federal.",
    "Com sede física estabelecida no Centro de Curitiba/PR e estrutura para atendimento consultivo online em todo o Brasil, proporciona um atendimento direto, claro e sem intermediários, sempre pautado pela ética e pelo Código de Ética e Disciplina da OAB.",
  ],
  careerHighlights: [
    "Bacharel em Direito pela conceituada Universidade Positivo (UP).",
    "Atuação focada exclusivamente no Direito do Trabalho e Direito Previdenciário.",
    "Sede física estratégica no Centro de Curitiba (R. Mariano Torres, 573) e Hub de Atendimento Digital.",
    "Conformidade ética irrestrita com o Provimento nº 205/2021 do Conselho Federal da OAB.",
  ],
  personalNotes: [
    "Comprometimento ético incondicional com a proteção da dignidade e dos direitos fundamentais do trabalhador.",
    "Clareza e transparência no diálogo com o cliente, explicando direitos e etapas processuais sem jargões inacessíveis.",
    "Rigor metodológico na conferência de cartões-ponto, holerites, extratos do CNIS e laudos médicos periciais.",
  ],
  differentials: [
    "Atendimento Direto com Advogado: suporte acessível e esclarecimentos pontuais via WhatsApp e presencial.",
    "Localização Privilegiada: sede estruturada no Centro de Curitiba/PR com fácil acesso e rotas facilitadas.",
    "Cálculos e Análises de Precisão: simulações minuciosas de rescisões, horas extras e aposentadorias pelas regras de transição.",
    "Atendimento Presencial e Online: acolhimento humano na sede física ou consultoria remota para todo o Brasil.",
  ],
};

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "trabalhista",
    title: "Direito do Trabalho (Trabalhador & CLT)",
    subtitle: "Defesa estratégica contra abusos corporativos, rescisões irregulares e horas extras impagas",
    shortDesc:
      "Defesa contundente de trabalhadores contra abusos corporativos, rescisões irregulares, horas extras não remuneradas e pejotização ilícita.",
    description:
      "Atuamos na defesa rigorosa dos direitos do trabalhador da iniciativa privada. Realizamos auditoria minuciosa de cartões-ponto, folhas de pagamento e contratos para identificar fraudes de pejotização, cobrança de horas suplementares, adicionais de insalubridade e periculosidade, rescisões indiretas e reparação por assédio moral.",
    iconName: "Briefcase",
    featured: true,
    highlightText: "Cálculos minuciosos e atuação técnica para assegurar todas as verbas e garantias devidas.",
    coverageList: [
      "Cobrança de Horas Extras, Intervalo Suprimido e Adicional Noturno",
      "Reconhecimento de Vínculo de Emprego (Fraude de PJ / Pejotização)",
      "Reversão de Justa Causa Abusiva e Ajuizamento de Rescisão Indireta",
      "Indenizações por Assédio Moral, Perseguições e Discriminações",
      "Acidentes de Trabalho, Doenças Ocupacionais (Burnout/LER) e Estabilidade",
      "Adicionais de Insalubridade e Periculosidade não pagos",
      "Auditoria de Verbas Rescisórias, Multa de 40% do FGTS e Seguro-Desemprego",
    ],
    casesSummary:
      "Examinamos detalhadamente contratos de trabalho, registros de ponto, holerites e comunicações corporativas para identificar infrações e ajuizar ações fundamentadas.",
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário (INSS & Benefícios)",
    subtitle: "Combate a negativas indevidas e conquista do benefício previdenciário com máxima celeridade",
    shortDesc:
      "Atuação estratégica para reverter indeferimentos do INSS na via judicial e concessão ágil de aposentadorias e benefícios por incapacidade.",
    description:
      "Atuamos perante o INSS e a Justiça Federal para reverter indeferimentos arbitrários. Estruturamos a documentação com perícia técnica independente para concessão ou restabelecimento de auxílio-doença, aposentadoria por invalidez, concessão de BPC/LOAS para idosos e PCDs e auxílio-acidente.",
    iconName: "Award",
    featured: true,
    highlightText: "Perícia judicial especializada para restabelecimento de renda e garantia de direitos do segurado.",
    coverageList: [
      "Concessão e Restabelecimento de Auxílio-Doença (Incapacidade Temporária)",
      "Conversão em Aposentadoria por Incapacidade Permanente (+25% de acompanhante)",
      "Concessão de BPC/LOAS para Idosos (65+) e Pessoas com Deficiência (PCD)",
      "Aposentadoria por Idade Urbana, Rural e Híbrida pós-Reforma",
      "Aposentadoria Especial com análise técnica de PPP e Laudo LTCAT",
      "Auxílio-Acidente mensal indenizatório para quem sofreu sequela laboral",
      "Pensão por Morte (União Estável e dependência) e Salário-Maternidade",
    ],
    casesSummary:
      "Atuamos perante a Justiça Federal com suporte pericial imparcial, cobrando todos os valores atrasados desde a data do primeiro requerimento administrativo.",
  },
  {
    id: "calculos-rescisorios",
    title: "Auditoria Rescisória & Acordos",
    subtitle: "Conferência minuciosa do TRCT para impedir renúncias financeiras e prejuízos no acerto",
    shortDesc:
      "Conferência rigorosa de termos de rescisão contratual (TRCT), salários retidos e cálculo real de haveres para prevenir prejuízos ao empregado.",
    description:
      "Examinamos todos os cálculos constantes no Termo de Rescisão de Contrato de Trabalho. Averiguamos se as médias de horas extras, adicionais, férias vencidas ou em dobro, 13º e depósitos de FGTS com 40% foram estritamente cumpridos antes de qualquer assinatura de quitação.",
    iconName: "Scale",
    featured: true,
    highlightText: "Simulação transparente do valor real a receber para impedir renúncias de direitos sob pressão.",
    coverageList: [
      "Auditoria Completa do Termo de Rescisão do Contrato de Trabalho (TRCT)",
      "Apuração de Férias Vencidas, Dobras Legais e 13º Salário Proporcional",
      "Falta de Depósito do FGTS e Pagamento Incorreto da Multa de 40%",
      "Desvio e Acúmulo de Funções sem Contraprestação Salarial",
      "Estabilidade Provisória da Gestante e Demissões Nulas",
      "Limbo Previdenciário (Conflito entre Alta do INSS e Recusa da Empresa)",
      "Assessoria Técnica em Propostas de Acordo Extrajudicial e Mediação",
    ],
    casesSummary:
      "Apoiamos o trabalhador com planilhas de liquidação exatas, esclarecendo o que a CLT determina antes de qualquer assinatura de quitação geral.",
  },
  {
    id: "planejamento",
    title: "Planejamento Previdenciário & CNIS",
    subtitle: "Simulação técnica pós-Reforma para antecipar a aposentadoria e obter o melhor valor de RMI",
    shortDesc:
      "Estudo consultivo detalhado pós-Reforma da Previdência para identificar o melhor momento e a maior Renda Mensal Inicial possível.",
    description:
      "Auditoria preventiva de todo o histórico de contribuições no CNIS. Comparamos as regras de transição vigentes, orientamos a correção de vínculos extemporâneos, averbação de tempo rural e especial para conquistar a maior renda mensal vitalícia.",
    iconName: "Calculator",
    featured: true,
    highlightText: "Mapeamento seguro das regras de transição para você não perder dinheiro na sua aposentadoria.",
    coverageList: [
      "Simulação Comparativa das Regras de Transição (Pedágios de 50% e 100%, Pontos e Idade)",
      "Correção de Pendências, Vínculos Extemporâneos e Indicadores no CNIS",
      "Averbação de Tempo de Atividade Rural na Juventude e Infância",
      "Conversão de Períodos Especiais Insalubres/Perigosos em Tempo Comum",
      "Reconhecimento de Períodos sem Registro ou Reconhecidos em Ação Trabalhista",
      "Defesa Técnica em Notificações de Pente-Fino e Suspensão de Benefícios",
      "Mandado de Segurança contra Demora Desproporcional na Resposta do INSS",
    ],
    casesSummary:
      "Identificamos inconsistências cadastrais omitidas pelo sistema automatizado do Meu INSS, assegurando a data e a renda mais vantajosas para sua segurança financeira.",
  },
];

export interface Review {
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  source: string;
  details?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Carina De Campos Rainha",
    rating: 5,
    timeAgo: "3 meses atrás",
    text: "Ótimo , Profissional , Atencioso e dedicado , Sempre tentando acalmar e tirando todas as dúvidas com muito Profissionalismo , me ajudou finalizando minha causa com Êxito, Grata...",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Luana Bindo",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Excelente atendimento, muito competente no serviço que solicitei. Recomendo.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Alexandre Adriano",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Um excelente profissional. Atencioso, objetivo, e determinado.",
    source: "Google Reviews",
    details: "5 avaliações",
  },
  {
    author: "Alysson dos Santos",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Ótimo atendimento, resolveu minha causa.",
    source: "Google Reviews",
    details: "8 avaliações • 1 foto",
  },
  {
    author: "Aline Cremoneze",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Excelente!! Sério e competente!!!",
    source: "Google Reviews",
    details: "11 avaliações • 1 foto",
  },
  {
    author: "Fábio Cruz",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Um excelente advogado! Muito competente no que faz, muito dedicado a sua profissão..",
    source: "Google Reviews",
    details: "3 avaliações",
  },
  {
    author: "henry marcos",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Excelente profissional!!!",
    source: "Google Reviews",
    details: "Local Guide • 12 avaliações • 1 foto",
  },
  {
    author: "Wellington Silva",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Ótimo advogado, sempre atencioso com minhas dúvidas.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "D&I Express",
    rating: 5,
    timeAgo: "4 semanas atrás",
    text: "Me chamo Diogo, fui muito bem atendido pela equipe do escritório, super recomendo o serviço dessa equipe que me ajudou na minha ação.",
    source: "Google Reviews",
    details: "Local Guide • 115 avaliações • 1 foto",
  },
  {
    author: "Sidineia Popenda Digner Sidy",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Atendimento sério, dedicado e de extrema confiança. Recomendo muito o trabalho do escritório!",
    source: "Google Reviews",
    details: "1 avaliação",
  },
];

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export const ARTICLES: EducationalArticle[] = [
  {
    id: "artigo-rescisao-direitos",
    number: "01",
    title: "Demissão Sem Justa Causa: Prazos e Direitos do Trabalhador",
    category: "Direito do Trabalho",
    readTime: "3 min de leitura",
    summary:
      "Conheça as verbas rescisórias devidas (aviso prévio, 13º proporcional, férias com 1/3 e FGTS com 40%) e o prazo improrrogável de 10 dias para o pagamento.",
    content: [
      "Na rescisão contratual imotivada promovida pelo empregador, o trabalhador faz jus ao recebimento do saldo salarial, aviso prévio indenizado ou trabalhado proporcional ao tempo de serviço, 13º salário proporcional, férias vencidas e proporcionais acrescidas do terço constitucional e guias para saque do saldo do FGTS com a multa rescisória de 40%, além da habilitação no seguro-desemprego.",
      "A legislação trabalhista estabelece o prazo de até 10 dias corridos contados a partir do término do contrato para que o empregador efetue o pagamento integral de todas as parcelas rescisórias e disponibilize os documentos rescisórios, sob pena de incidir a multa do artigo 477 da CLT no valor equivalente a um salário do empregado.",
      "A conferência detalhada dos demonstrativos e do TRCT por profissional qualificado permite averiguar inconsistências recorrentes, como deduções impróprias, reflexos de horas extras não computados ou base de cálculo inferior à devida.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com finalidade de orientação pública, em estrita observância ao Provimento 205/2021 da OAB.",
  },
  {
    id: "artigo-pj-vinculo",
    number: "02",
    title: "Contrato 'PJ' com Horário e Subordinação: Nulidade e Direitos",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary:
      "Saiba como a Justiça do Trabalho afasta a pejotização fraudulenta quando presentes os elementos fáticos da relação de emprego.",
    content: [
      "A prestação de serviços por meio de pessoa jurídica (pejotização) somente é juridicamente regular quando preservada a genuína autonomia e independência técnica do prestador. Quando há imposição de jornadas rígidas, fiscalização contínua de tarefas, subordinação hierárquica e pessoalidade, configura-se fraude aos preceitos da legislação protetiva do trabalho.",
      "Em matéria trabalhista vigora com força vinculante o princípio da primazia da realidade, segundo o qual a verdade dos fatos vividos no cotidiano prevalece sobre títulos contratuais formais assinados entre as partes.",
      "Reconhecido o liame de emprego, são devidas retroativamente todas as parcelas sonegadas durante o pacto, abrangendo depósitos de FGTS com acréscimo rescisório de 40%, férias acrescidas de 1/3, gratificações natalinas, horas suplementares e adicionais cabíveis.",
    ],
    oabDisclaimer:
      "Artigo informativo e de interesse social, elaborado nos termos do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-auxilio-doenca-negado",
    number: "03",
    title: "Benefício por Incapacidade Negado no INSS: Como Proceder na Justiça",
    category: "Direito Previdenciário",
    readTime: "3 min de leitura",
    summary:
      "Perícia administrativa sumária indeferiu o auxílio-doença? Entenda como a perícia médica judicial assegura avaliação técnica e imparcial.",
    content: [
      "O indeferimento de benefício por incapacidade temporária pelo INSS ocorre com grande frequência em avaliações periciais administrativas breves, muitas vezes desprovidas da devida atenção aos laudos e exames complementares do segurado.",
      "Diante da recusa administrativa, o segurado pode submeter a controvérsia ao Poder Judiciário Federal, oportunidade em que a higidez física e a aptidão profissional são examinadas por perito médico imparcial, nomeado pelo magistrado e dotado de especialidade técnica na patologia em questão.",
      "Com a constatação pericial da incapacidade laboral, pleiteia-se a imediata implantação do benefício previdenciário e o pagamento retroativo de todos os valores vencidos desde a cessação ou requerimento administrativo indevidamente negado.",
    ],
    oabDisclaimer:
      "Material didático elaborado em conformidade com as diretrizes do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-horas-extras-provas",
    number: "04",
    title: "Horas Extras e Intervalos: Como Comprovar a Jornada Real de Trabalho",
    category: "Direito do Trabalho",
    readTime: "3 min de leitura",
    summary:
      "Registros britânicos sem variação de minutos ou manipulação de horários? Conheça os meios de prova admitidos pelo Judiciário.",
    content: [
      "A sonegação de horas extras e a supressão parcial dos intervalos destinados a refeição e descanso permanecem entre as causas mais frequentes de litígios perante a Justiça do Trabalho. Práticas como o fechamento antecipado do ponto enquanto a prestação laboral persiste são amplamente reprimidas.",
      "Segundo a jurisprudência sumulada do Tribunal Superior do Trabalho (Súmula 338), controles de frequência com horários inflexíveis e uniformes ('britânicos') presumem-se inválidos, transferindo ao empregador a obrigação probatória da jornada cumprida.",
      "Registros eletrônicos de logins, mensagens corporativas enviadas fora do expediente, relatórios telemáticos e prova testemunhal idônea constituem arcabouço suficiente para demonstrar a sobrejornada e viabilizar a condenação com os adicionais legais.",
    ],
    oabDisclaimer:
      "Conteúdo com finalidade estritamente pedagógica e informativa, em cumprimento às normas éticas da OAB.",
  },
  {
    id: "artigo-planejamento-previdenciario",
    number: "05",
    title: "Planejamento Previdenciário: Por Que Simular Antes da Solicitação?",
    category: "Direito Previdenciário",
    readTime: "4 min de leitura",
    summary:
      "As múltiplas regras de transição da EC 103/2019 exigem cálculos minuciosos para evitar reduções permanentes na renda do segurado.",
    content: [
      "A Emenda Constitucional nº 103/2019 instituiu diversos critérios de transição com coeficientes de cálculo distintos, influenciando de forma decisiva o valor inicial da aposentadoria.",
      "Requerer o benefício de forma precipitada por intermédio dos simuladores automáticos do aplicativo Meu INSS pode acarretar renúncia involuntária a condições mais vantajosas. Em muitas situações, aguardar o preenchimento de outra regra de transição proporciona acréscimo financeiro definitivo na remuneração mensal.",
      "O planejamento previdenciário analisa o histórico contributivo integral, corrige inconsistências no CNIS, computa períodos de atividade especial ou rural e projeta o momento mais seguro para atingir a melhor renda.",
    ],
    oabDisclaimer:
      "Texto puramente informativo com finalidade de esclarecimento público, em cumprimento ao Provimento 205/2021 da OAB.",
  },
];

export const EDUCATIONAL_TOPICS = ARTICLES;

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Contato & Análise Inicial",
    subtitle: "Atendimento direto via WhatsApp ou presencial",
    description:
      "Você expõe a situação e envia a documentação de forma segura. Avaliamos contratos, cartões-ponto, recibos salariais ou extratos do INSS.",
  },
  {
    number: "02",
    title: "Auditoria & Cálculos Técnicos",
    subtitle: "Rigor documental e apuração exata de valores",
    description:
      "Elaboramos cálculos precisos das verbas rescisórias devidas, horas suplementares ou tempo contributivo para embasamento seguro da demanda.",
  },
  {
    number: "03",
    title: "Estratégia Processual ou Conciliação",
    subtitle: "Busca de solução célere e efetiva",
    description:
      "Definimos o caminho mais eficiente: interlocução conciliatória quando benéfica ou propositura de ação contundente perante a Justiça do Trabalho ou Federal.",
  },
  {
    number: "04",
    title: "Acompanhamento & Comunicação Clara",
    subtitle: "Previsibilidade e transparência permanente",
    description:
      "Você recebe atualizações periódicas sobre cada movimento processual, com esclarecimento direto de dúvidas até o desfecho satisfatório.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "trabalhista",
    label: "Direito do Trabalho",
    iconName: "Briefcase",
    items: [
      {
        id: "faq-trab-1",
        question: "Fui demitido da empresa. Qual o prazo legal para o acerto das verbas?",
        answer:
          "O empregador dispõe de até 10 dias corridos contados a partir da cessação do pacto laboral para efetuar a quitação integral de todas as verbas rescisórias devidas e entregar a respectiva documentação. O descumprimento do prazo atrai a incidência de multa prevista no artigo 477 da CLT.",
      },
      {
        id: "faq-trab-2",
        question: "Fui contratado como PJ, mas cumpria jornada e recebia ordens. Tenho direitos?",
        answer:
          "Sim. Havendo habitualidade, subordinação hierárquica, remuneração periódica e pessoalidade na prestação, a contratação via PJ é declarada fraudulenta pela Justiça do Trabalho, ensejando o reconhecimento do vínculo celetista com pagamento retroativo de FGTS, 40%, 13º salários, férias e demais direitos.",
      },
      {
        id: "faq-trab-3",
        question: "A empresa pode exigir a realização constante de horas extras?",
        answer:
          "A legislação trabalhista admite prorrogação máxima de 2 horas suplementares diárias mediante acordo ou norma coletiva. A imposição contínua sem remuneração com adicional mínimo de 50% é irregular e pode fundamentar o pedido de rescisão indireta do contrato.",
      },
      {
        id: "faq-trab-4",
        question: "Sofri acidente no ambiente de trabalho ou doença laboral. Há garantia de estabilidade?",
        answer:
          "Sim. O trabalhador que venha a sofrer acidente de trabalho ou desenvolver doença ocupacional com afastamento previdenciário superior a 15 dias goza de estabilidade provisória pelo prazo de 12 meses após a cessação do benefício acidentário.",
      },
    ],
  },
  {
    id: "previdenciario",
    label: "Direito Previdenciário",
    iconName: "Award",
    items: [
      {
        id: "faq-prev-1",
        question: "O INSS indeferiu meu pedido de auxílio-doença. O que fazer?",
        answer:
          "A negativa administrativa não impede o ajuizamento de ação perante a Justiça Federal. No âmbito judicial, a capacidade laboral é atestada por perito médico independente nomeado pelo juiz, viabilizando o restabelecimento do benefício com o recebimento de parcelas retroativas.",
      },
      {
        id: "faq-prev-2",
        question: "As informações do simulador automático do Meu INSS são exatas?",
        answer:
          "Não necessariamente. Os cálculos automatizados frequentemente ignoram atividades exercidas sob condições nocivas (tempo especial), atividades rurais desprovidas de homologação prévia ou vínculos com pendências de validação no extrato do CNIS.",
      },
      {
        id: "faq-prev-3",
        question: "Quais são os critérios essenciais para ter acesso ao BPC/LOAS?",
        answer:
          "Têm direito ao Benefício de Prestação Continuada (BPC/LOAS) pessoas com idade igual ou superior a 65 anos ou pessoas com deficiência de qualquer faixa etária em condição de vulnerabilidade e insuficiência de renda familiar, independentemente de prévia contribuição ao INSS.",
      },
      {
        id: "faq-prev-4",
        question: "De que maneira a atividade insalubre pode adiantar a aposentadoria?",
        answer:
          "Por intermédio do Perfil Profissiográfico Previdenciário (PPP), comprova-se a exposição a agentes nocivos à saúde. O tempo especial laborado antes da Reforma da Previdência pode ser convertido em tempo comum com fator multiplicador favorável, antecipando o direito ao benefício.",
      },
    ],
  },
  {
    id: "atendimento",
    label: "Atendimento & Honorários",
    iconName: "Clock",
    items: [
      {
        id: "faq-atend-1",
        question: "Como funciona o atendimento presencial e a distância?",
        answer:
          "Contamos com sede física estruturada no Centro de Curitiba/PR (R. Mariano Torres, 573) para acolhimento presencial, além de ferramentas de atendimento digital que possibilitam o envio seguro de documentos e esclarecimentos por WhatsApp ou videoconferência.",
      },
      {
        id: "faq-atend-2",
        question: "Como são estabelecidos os honorários contratuais?",
        answer:
          "Toda a remuneração de serviços é pactuada formalmente por escrito, com absoluta clareza de cláusulas e em fiel observância às tabelas e normas do Código de Ética e Disciplina da OAB. Em diversas ações trabalhistas e previdenciárias de cunho patrimonial, os honorários vinculam-se ao êxito final.",
      },
      {
        id: "faq-atend-3",
        question: "Existe risco de constar em restrições ao reivindicar direitos na Justiça?",
        answer:
          "A busca pela reparação de direitos violados constitui garantia constitucional de livre acesso à jurisdição. Não existem cadastros legítimos restritivos e o ordenamento jurídico proíbe e sanciona qualquer conduta discriminatória dessa natureza.",
      },
    ],
  },
];

export const FAQ_DATA = FAQ_CATEGORIES;