"use client"

import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

// Tipos de matérias do Ensino Médio
const subjectInfo = {
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
const questions = [
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
const levelDefinitions = [
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

export default function Disciplina() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(undefined))
  const [showResults, setShowResults] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [activeTab, setActiveTab] = useState("geral")

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScoreBySubject = () => {
    const subjectScores = {}

    // Inicializar contadores para cada matéria
    Object.keys(subjectInfo).forEach((subject) => {
      subjectScores[subject] = { correct: 0, total: 0, questions: [] }
    })

    // Calcular pontuações por matéria
    questions.forEach((question, index) => {
      const subject = question.subject
      subjectScores[subject].total++
      subjectScores[subject].questions.push(question)

      if (selectedAnswers[index] === question.correctAnswer) {
        subjectScores[subject].correct++
      }
    })

    return subjectScores
  }

  const getLevel = (percentage) => {
    const level = levelDefinitions.find((def) => percentage >= def.min && percentage <= def.max)
    return level || levelDefinitions[0]
  }

  const calculateOverallScore = () => {
    let score = 0
    let answered = 0

    questions.forEach((_, index) => {
      if (selectedAnswers[index] !== undefined) {
        answered++
        if (selectedAnswers[index] === questions[index].correctAnswer) {
          score++
        }
      }
    })

    return { score, answered }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(questions.length).fill(undefined))
    setShowResults(false)
    setTestStarted(false)
    setActiveTab("geral")
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  // Agrupar questões por matéria para a tela inicial
  const subjectQuestionCounts = Object.keys(subjectInfo).reduce((acc, subject) => {
    acc[subject] = questions.filter((q) => q.subject === subject).length
    return acc
  }, {})

  if (!testStarted) {
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
        <div className="card shadow-lg" style={{ maxWidth: "800px", width: "100%" }}>
          <div className="card-header text-center bg-primary text-white">
            <div className="mb-3">
              <span className="display-4">🏆</span>
            </div>
            <h1 className="card-title h2 mb-2">Teste de Nível - Ensino Médio</h1>
            <p className="mb-0">Avalie seus conhecimentos em todas as matérias do Ensino Médio</p>
          </div>
          <div className="card-body">
            <div className="alert alert-info mb-4">
              <h5 className="alert-heading">Instruções:</h5>
              <ul className="mb-0 small">
                <li>O teste contém {questions.length} questões de 12 matérias diferentes</li>
                <li>Cada questão tem apenas uma resposta correta</li>
                <li>Você pode navegar entre as questões</li>
                <li>Ao final, você receberá seu nível geral e por matéria</li>
                <li>
                  Os níveis são: Iniciante, Básico, Intermediário Inicial, Intermediário, Intermediário Avançado,
                  Avançado e Especialista
                </li>
              </ul>
            </div>

            <div className="row g-3 mb-4">
              {Object.entries(subjectInfo).map(([key, info]) => {
                const count = subjectQuestionCounts[key] || 0
                return (
                  <div key={key} className="col-6 col-md-4 col-lg-3">
                    <div className="card h-100 text-center border-2">
                      <div className="card-body p-3">
                        <div className="fs-3 mb-2">{info.icon}</div>
                        <h6 className="card-title small mb-1">{info.name}</h6>
                        <small className="text-muted">{count} questões</small>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="alert alert-warning">
              <h6 className="alert-heading">Sistema de Níveis:</h6>
              <div className="row">
                {levelDefinitions.map((level) => (
                  <div key={level.level} className="col-md-6 mb-1">
                    <small>
                      <span className={`fw-bold ${level.color}`}>●</span> {level.level} ({level.min}-{level.max}%)
                    </small>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => setTestStarted(true)} className="btn btn-primary btn-lg w-100">
              Iniciar Teste
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    const subjectScores = calculateScoreBySubject()
    const { score, answered } = calculateOverallScore()
    const percentage = answered > 0 ? Math.round((score / answered) * 100) : 0
    const { level, color, description } = getLevel(percentage)

    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
        <div className="card shadow-lg" style={{ maxWidth: "900px", width: "100%" }}>
          <div className="card-header text-center bg-success text-white">
            <div className="mb-3">
              <span className="display-4">🏆</span>
            </div>
            <h1 className="card-title h2">Resultado do Teste</h1>
          </div>
          <div className="card-body">
            {/* Resultado Geral */}
            <div className="text-center bg-primary bg-opacity-10 p-4 rounded mb-4">
              <div className="display-1 fw-bold text-primary mb-2">{percentage}%</div>
              <div className={`h3 fw-bold ${color} mb-2`}>Nível Geral: {level}</div>
              <p className="text-muted">{description}</p>
              <div className="h5 text-dark">
                <span className="fw-bold">{score}</span> de {answered} questões corretas
              </div>
            </div>

            {/* Tabs para resultados por matéria */}
            <ul className="nav nav-tabs mb-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "geral" ? "active" : ""}`}
                  onClick={() => setActiveTab("geral")}
                >
                  Desempenho por Matéria
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "detalhes" ? "active" : ""}`}
                  onClick={() => setActiveTab("detalhes")}
                >
                  Revisão Detalhada
                </button>
              </li>
            </ul>

            {activeTab === "geral" && (
              <div className="row g-3 mb-4">
                {Object.entries(subjectScores).map(([subjectKey, score]) => {
                  const subjectData = subjectInfo[subjectKey]
                  const subjectPercentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
                  const subjectLevel = getLevel(subjectPercentage)

                  return (
                    <div key={subjectKey} className="col-md-6">
                      <div className="card h-100">
                        <div className={`card-header bg-${subjectData.color} text-white p-2`}>
                          <div className="d-flex align-items-center">
                            <span className="me-2">{subjectData.icon}</span>
                            <div>
                              <h6 className="mb-0">{subjectData.name}</h6>
                              <small className="opacity-75">{subjectData.description}</small>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="h4 fw-bold">{subjectPercentage}%</span>
                            <span className={`badge ${subjectLevel.color.replace("text-", "bg-")}`}>
                              {subjectLevel.level}
                            </span>
                          </div>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div className="progress-bar" style={{ width: `${subjectPercentage}%` }}></div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <small className="text-muted">
                              {score.correct}/{score.total} corretas
                            </small>
                            <button onClick={() => setActiveTab("detalhes")} className="btn btn-link btn-sm p-0">
                              Ver detalhes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {activeTab === "detalhes" && (
              <div className="mb-4" style={{ maxHeight: "500px", overflowY: "auto" }}>
                {Object.entries(subjectScores).map(([subjectKey, score]) => {
                  const subjectData = subjectInfo[subjectKey]
                  const subjectPercentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
                  const subjectLevel = getLevel(subjectPercentage)

                  return (
                    <div key={subjectKey} className="card mb-3">
                      <div className="card-header">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="me-2">{subjectData.icon}</span>
                            <h6 className="mb-0">{subjectData.name}</h6>
                          </div>
                          <span className={`badge ${subjectLevel.color.replace("text-", "bg-")}`}>
                            {subjectLevel.level} ({subjectPercentage}%)
                          </span>
                        </div>
                      </div>
                      <div className="card-body">
                        {score.questions.map((question) => {
                          const questionIndex = questions.findIndex((q) => q.id === question.id)
                          const userAnswer = selectedAnswers[questionIndex]
                          const isCorrect = userAnswer === question.correctAnswer
                          const difficultyColors = {
                            easy: "success",
                            medium: "warning",
                            hard: "danger",
                          }

                          return (
                            <div key={question.id} className="d-flex align-items-start mb-3 p-2 bg-light rounded">
                              <div className="me-3 mt-1">
                                {isCorrect ? (
                                  <span className="text-success">✓</span>
                                ) : (
                                  <span className="text-danger">✗</span>
                                )}
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-1 fw-medium">{question.question}</p>
                                  <span className={`badge bg-${difficultyColors[question.difficulty]} ms-2`}>
                                    {question.difficulty === "easy"
                                      ? "Fácil"
                                      : question.difficulty === "medium"
                                        ? "Médio"
                                        : "Difícil"}
                                  </span>
                                </div>
                                <p className="mb-1 small text-success">
                                  Resposta correta: {question.options[question.correctAnswer]}
                                </p>
                                {!isCorrect && userAnswer !== undefined && (
                                  <p className="mb-0 small text-danger">Sua resposta: {question.options[userAnswer]}</p>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            <button onClick={resetTest} className="btn btn-primary btn-lg w-100">
              🔄 Fazer Teste Novamente
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const subjectData = subjectInfo[question.subject]

  const difficultyColors = {
    easy: "success",
    medium: "warning",
    hard: "danger",
  }

  const answeredCount = selectedAnswers.filter((a) => a !== undefined).length

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
      <div className="card shadow-lg" style={{ maxWidth: "700px", width: "100%" }}>
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <small className="text-muted">
              Questão {currentQuestion + 1} de {questions.length}
            </small>
            <div className="d-flex align-items-center gap-2">
              <span className={`badge bg-${subjectData.color} d-flex align-items-center`}>
                <span className="me-1">{subjectData.icon}</span>
                {subjectData.name}
              </span>
              <span className={`badge bg-${difficultyColors[question.difficulty]}`}>
                {question.difficulty === "easy" ? "Fácil" : question.difficulty === "medium" ? "Médio" : "Difícil"}
              </span>
            </div>
          </div>
          <div className="progress mb-3" style={{ height: "8px" }}>
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <h5 className="card-title">{question.question}</h5>
        </div>
        <div className="card-body">
          <div className="d-grid gap-3 mb-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`btn text-start p-3 ${
                  selectedAnswers[currentQuestion] === index ? "btn-primary" : "btn-outline-secondary"
                }`}
              >
                <div className="d-flex align-items-center">
                  <div
                    className={`me-3 rounded-circle border d-flex align-items-center justify-content-center ${
                      selectedAnswers[currentQuestion] === index
                        ? "bg-white text-primary border-white"
                        : "border-secondary"
                    }`}
                    style={{ width: "24px", height: "24px" }}
                  >
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="bg-primary rounded-circle" style={{ width: "8px", height: "8px" }}></div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-outline-secondary" onClick={handlePrevious} disabled={currentQuestion === 0}>
              Anterior
            </button>
            <small className="text-muted">
              {answeredCount}/{questions.length} respondidas
            </small>
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
