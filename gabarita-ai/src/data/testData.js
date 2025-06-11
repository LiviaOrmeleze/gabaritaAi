// Tipos de matérias do Ensino Médio
export const subjectInfo = {
    matematica: {
      name: "Matemática",
      icon: "📊",
      color: "primary",
      description: "Álgebra, geometria, funções e estatística",
    },
    portugues: {
      name: "Português/Literatura",
      icon: "📚",
      color: "success",
      description: "Gramática, interpretação de texto e literatura brasileira",
    },
    historia: {
      name: "História",
      icon: "📖",
      color: "warning",
      description: "História do Brasil e mundial",
    },
    geografia: {
      name: "Geografia",
      icon: "🗺️",
      color: "info",
      description: "Geografia física, humana e geopolítica",
    },
    fisica: {
      name: "Física",
      icon: "⚛️",
      color: "secondary",
      description: "Mecânica, termodinâmica, eletromagnetismo e física moderna",
    },
    quimica: {
      name: "Química",
      icon: "🧪",
      color: "danger",
      description: "Química orgânica, inorgânica e físico-química",
    },
    biologia: {
      name: "Biologia",
      icon: "🧬",
      color: "success",
      description: "Citologia, genética, evolução e ecologia",
    },
    filosofia: {
      name: "Filosofia",
      icon: "💡",
      color: "dark",
      description: "Ética, política, metafísica e epistemologia",
    },
    sociologia: {
      name: "Sociologia",
      icon: "👥",
      color: "warning",
      description: "Cultura, sociedade, trabalho e cidadania",
    },
    ingles: {
      name: "Inglês",
      icon: "🌍",
      color: "primary",
      description: "Gramática, vocabulário e interpretação de texto",
    },
    educacao_fisica: {
      name: "Educação Física",
      icon: "🏃",
      color: "info",
      description: "Esportes, saúde e práticas corporais",
    },
    artes: {
      name: "Artes",
      icon: "🎨",
      color: "secondary",
      description: "Artes visuais, música, dança e teatro",
    },
  }
  
  // Banco de questões para todas as matérias
  export const questions = [
    // Matemática
    {
      id: 1,
      question: "Qual é o valor de x na equação 2x + 5 = 15?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      difficulty: "easy",
      subject: "matematica",
    },
    {
      id: 2,
      question: "Qual é a área de um círculo com raio de 3 cm?",
      options: ["6π cm²", "9π cm²", "12π cm²", "18π cm²"],
      correctAnswer: 1,
      difficulty: "medium",
      subject: "matematica",
    },
    {
      id: 3,
      question: "Se log₁₀(x) = 2, qual é o valor de x?",
      options: ["20", "100", "200", "1000"],
      correctAnswer: 1,
      difficulty: "hard",
      subject: "matematica",
    },
  
    // Português
    {
      id: 4,
      question: "Qual é o plural de 'cidadão'?",
      options: ["cidadãos", "cidadões", "cidadães", "cidadans"],
      correctAnswer: 0,
      difficulty: "easy",
      subject: "portugues",
    },
    {
      id: 5,
      question: "Quem escreveu 'Dom Casmurro'?",
      options: ["José de Alencar", "Machado de Assis", "Clarice Lispector", "Guimarães Rosa"],
      correctAnswer: 1,
      difficulty: "medium",
      subject: "portugues",
    },
    {
      id: 6,
      question: "Qual figura de linguagem está presente em 'A vida é uma nuvem que voa'?",
      options: ["Metonímia", "Metáfora", "Hipérbole", "Pleonasmo"],
      correctAnswer: 1,
      difficulty: "hard",
      subject: "portugues",
    },
  
    // História
    {
      id: 7,
      question: "Em que ano foi proclamada a Independência do Brasil?",
      options: ["1808", "1822", "1889", "1500"],
      correctAnswer: 1,
      difficulty: "easy",
      subject: "historia",
    },
    {
      id: 8,
      question: "Qual foi o período da ditadura militar no Brasil?",
      options: ["1945-1964", "1964-1985", "1930-1945", "1985-2000"],
      correctAnswer: 1,
      difficulty: "medium",
      subject: "historia",
    },
    {
      id: 9,
      question: "Qual evento marcou o início da Primeira Guerra Mundial?",
      options: [
        "Bombardeio de Pearl Harbor",
        "Queda do Muro de Berlim",
        "Assassinato do arquiduque Francisco Ferdinando",
        "Revolução Russa",
      ],
      correctAnswer: 2,
      difficulty: "hard",
      subject: "historia",
    },
  
    // Geografia
    {
      id: 10,
      question: "Qual é a capital do Brasil?",
      options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      correctAnswer: 2,
      difficulty: "easy",
      subject: "geografia",
    },
    {
      id: 11,
      question: "Qual é o maior bioma brasileiro em extensão territorial?",
      options: ["Mata Atlântica", "Cerrado", "Amazônia", "Caatinga"],
      correctAnswer: 2,
      difficulty: "medium",
      subject: "geografia",
    },
    {
      id: 12,
      question: "O que são as placas tectônicas?",
      options: [
        "Formações rochosas superficiais",
        "Fragmentos da litosfera que flutuam sobre o manto",
        "Camadas da atmosfera",
        "Depósitos sedimentares marinhos",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      subject: "geografia",
    },
  
    // Física
    {
      id: 13,
      question: "Qual é a unidade de medida de força no Sistema Internacional?",
      options: ["Watt", "Joule", "Newton", "Pascal"],
      correctAnswer: 2,
      difficulty: "easy",
      subject: "fisica",
    },
    {
      id: 14,
      question: "O que afirma a Primeira Lei de Newton?",
      options: [
        "A força é igual à massa vezes aceleração",
        "A energia não pode ser criada nem destruída",
        "Um corpo em repouso tende a permanecer em repouso",
        "A toda ação corresponde uma reação de igual intensidade",
      ],
      correctAnswer: 2,
      difficulty: "medium",
      subject: "fisica",
    },
    {
      id: 15,
      question: "O que é o efeito fotoelétrico?",
      options: [
        "Emissão de luz por um corpo aquecido",
        "Emissão de elétrons por um material quando exposto à radiação eletromagnética",
        "Reflexão da luz em superfícies metálicas",
        "Produção de eletricidade através de células solares",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      subject: "fisica",
    },
  
    // Química
    {
      id: 16,
      question: "Qual é o símbolo químico do ouro?",
      options: ["O", "Ou", "Au", "Ag"],
      correctAnswer: 2,
      difficulty: "easy",
      subject: "quimica",
    },
    {
      id: 17,
      question: "O que é um isótopo?",
      options: [
        "Átomos com mesmo número de prótons e diferentes números de nêutrons",
        "Átomos com mesmo número de nêutrons e diferentes números de prótons",
        "Átomos com mesmo número de elétrons e diferentes números de prótons",
        "Moléculas com mesma fórmula química e diferentes estruturas",
      ],
      correctAnswer: 0,
      difficulty: "medium",
      subject: "quimica",
    },
    {
      id: 18,
      question: "O que é uma reação de oxirredução?",
      options: [
        "Reação que libera calor",
        "Reação que absorve calor",
        "Reação que envolve transferência de elétrons",
        "Reação que forma precipitados",
      ],
      correctAnswer: 2,
      difficulty: "hard",
      subject: "quimica",
    },
  
    // Biologia
    {
      id: 19,
      question: "Qual é a função principal da mitocôndria?",
      options: [
        "Digestão celular",
        "Produção de energia (ATP)",
        "Síntese de proteínas",
        "Armazenamento de informação genética",
      ],
      correctAnswer: 1,
      difficulty: "easy",
      subject: "biologia",
    },
    {
      id: 20,
      question: "O que é a meiose?",
      options: [
        "Divisão celular que forma células somáticas",
        "Divisão celular que forma gametas",
        "Processo de síntese de proteínas",
        "Processo de digestão celular",
      ],
      correctAnswer: 1,
      difficulty: "medium",
      subject: "biologia",
    },
    {
      id: 21,
      question: "O que é epigenética?",
      options: [
        "Estudo dos fósseis",
        "Estudo das mutações genéticas",
        "Estudo das alterações na expressão gênica sem alteração na sequência de DNA",
        "Estudo da evolução das espécies",
      ],
      correctAnswer: 2,
      difficulty: "hard",
      subject: "biologia",
    },
  
    // Filosofia
    {
      id: 22,
      question: "Quem foi Sócrates?",
      options: ["Um filósofo romano", "Um filósofo grego", "Um imperador grego", "Um matemático egípcio"],
      correctAnswer: 1,
      difficulty: "easy",
      subject: "filosofia",
    },
    {
      id: 23,
      question: "O que é o 'Mito da Caverna'?",
      options: [
        "Uma história mitológica grega",
        "Uma alegoria de Platão sobre conhecimento e realidade",
        "Um ritual religioso antigo",
        "Uma descoberta arqueológica",
      ],
      correctAnswer: 1,
      difficulty: "medium",
      subject: "filosofia",
    },
    {
      id: 24,
      question: "O que é o imperativo categórico de Kant?",
      options: ["Um princípio político", "Um princípio moral universal", "Uma lei científica", "Um método matemático"],
      correctAnswer: 1,
      difficulty: "hard",
      subject: "filosofia",
    },
  
    // Sociologia
    {
      id: 25,
      question: "Quem é considerado o pai da Sociologia?",
      options: ["Karl Marx", "Max Weber", "Auguste Comte", "Émile Durkheim"],
      correctAnswer: 2,
      difficulty: "easy",
      subject: "sociologia",
    },
    {
      id: 26,
      question: "O que é estratificação social?",
      options: [
        "Divisão da sociedade em camadas hierárquicas",
        "Processo de urbanização",
        "Formação de grupos étnicos",
        "Sistema político democrático",
      ],
      correctAnswer: 0,
      difficulty: "medium",
      subject: "sociologia",
    },
    {
      id: 27,
      question: "O que Marx entende por 'alienação'?",
      options: [
        "Distanciamento entre classes sociais",
        "Separação do trabalhador do produto de seu trabalho",
        "Isolamento social voluntário",
        "Processo de migração internacional",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      subject: "sociologia",
    },
  
    // Inglês
    {
      id: 28,
      question: "Como se diz 'Bom dia' em inglês?",
      options: ["Good afternoon", "Good evening", "Good morning", "Good night"],
      correctAnswer: 2,
      difficulty: "easy",
      subject: "ingles",
    },
    {
      id: 29,
      question: "Qual é o past simple do verbo 'to go'?",
      options: ["goed", "went", "gone", "going"],
      correctAnswer: 1,
      difficulty: "medium",
      subject: "ingles",
    },
    {
      id: 30,
      question: "O que significa a expressão idiomática 'to hit the nail on the head'?",
      options: [
        "Machucar-se acidentalmente",
        "Acertar precisamente",
        "Trabalhar na construção civil",
        "Ter uma ideia repentina",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      subject: "ingles",
    },
  
    // Educação Física
    {
      id: 31,
      question: "Qual esporte utiliza uma raquete e uma peteca?",
      options: ["Tênis", "Badminton", "Squash", "Ping-pong"],
      correctAnswer: 1,
      difficulty: "easy",
      subject: "educacao_fisica",
    },
    {
      id: 32,
      question: "O que é frequência cardíaca?",
      options: [
        "A quantidade de sangue bombeada pelo coração",
        "O número de batimentos cardíacos por minuto",
        "A pressão do sangue nas artérias",
        "O volume de oxigênio consumido durante o exercício",
      ],
      correctAnswer: 1,
      difficulty: "medium",
      subject: "educacao_fisica",
    },
    {
      id: 33,
      question: "O que é periodização no treinamento esportivo?",
      options: [
        "Divisão do ano em temporadas competitivas",
        "Organização sistemática do treinamento em fases para otimizar o desempenho",
        "Intervalo entre séries de exercícios",
        "Tempo de recuperação após lesões",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      subject: "educacao_fisica",
    },
  
    // Artes
    {
      id: 34,
      question: "Quem pintou a 'Mona Lisa'?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correctAnswer: 1,
      difficulty: "easy",
      subject: "artes",
    },
    {
      id: 35,
      question: "Qual movimento artístico tem Salvador Dalí como um de seus principais representantes?",
      options: ["Cubismo", "Impressionismo", "Surrealismo", "Expressionismo"],
      correctAnswer: 2,
      difficulty: "medium",
      subject: "artes",
    },
    {
      id: 36,
      question: "O que caracteriza a arte barroca?",
      options: [
        "Simplicidade e equilíbrio",
        "Dramaticidade, contraste e movimento",
        "Geometrização e abstração das formas",
        "Representação fiel da natureza",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      subject: "artes",
    },
  ]
  
  // Definição dos níveis com critérios mais justos
  export const levelDefinitions = [
    { min: 0, max: 30, level: "Iniciante", color: "text-danger", description: "Conhecimentos básicos iniciais" },
    { min: 31, max: 50, level: "Básico", color: "text-warning", description: "Fundamentos estabelecidos" },
    {
      min: 51,
      max: 65,
      level: "Intermediário Inicial",
      color: "text-info",
      description: "Conhecimento em desenvolvimento",
    },
    {
      min: 66,
      max: 75,
      level: "Intermediário",
      color: "text-primary",
      description: "Bom domínio dos conceitos principais",
    },
    {
      min: 76,
      max: 85,
      level: "Intermediário Avançado",
      color: "text-secondary",
      description: "Conhecimento sólido e abrangente",
    },
    { min: 86, max: 95, level: "Avançado", color: "text-dark", description: "Domínio amplo e profundo" },
    {
      min: 96,
      max: 100,
      level: "Especialista",
      color: "text-success",
      description: "Excelência e maestria nos conteúdos",
    },
  ]
  