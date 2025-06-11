"use client"

import { useState, useEffect } from "react"
import { List, Play, BookOpen, Edit, Share2 } from "lucide-react"

interface StudyTopic {
  id: number
  title: string
  description?: string
}

interface StudySubject {
  id: number
  name: string
  topics: StudyTopic[]
}

export default function MatematicaStudy() {
  const [studyData, setStudyData] = useState<StudySubject | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Simulação de API - substitua pela sua API real
  const fetchStudyData = async (): Promise<StudySubject> => {
    // Simula delay da API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      id: 1,
      name: "Matemática 1",
      topics: [
        { id: 1, title: "Teoria dos conjuntos" },
        { id: 2, title: "Conjuntos numéricos e Intervalos reais" },
        { id: 3, title: "Progressão aritmética (PA)" },
        { id: 4, title: "Progressão geométrica (PG)" },
        { id: 5, title: "Teoria geral de funções" },
        { id: 6, title: "Função composta e Função inversa" },
        { id: 7, title: "Função constante e Função afim" },
        { id: 8, title: "Função do segundo grau (quadrática)" },
      ],
    }
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const data = await fetchStudyData()
        setStudyData(data)
      } catch (err) {
        setError("Erro ao carregar os dados")
        console.error("Erro:", err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleAction = (action: string, topicId: number) => {
    console.log(`Ação ${action} executada para o tópico ${topicId}`)
    // Aqui você pode implementar as ações específicas
  }

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <div className="spinner-border logocalendario" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
            <p className="mt-2 logocalendario">Carregando conteúdo...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-white border-0 pb-0">
          <h2 className="textocalendario titulo-materia  fw-bold mb-0 mt-3 p-2">{studyData?.name}</h2>
        </div>

        <div className="card-body p-4">
          <div className="row g-3">
            {studyData?.topics.map((topic) => (
              <div key={topic.id} className="col-12">
                <div
                  className="card topic-card h-100 border-0 shadow-sm"
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)"
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="card-body py-3">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h6 className="card-title mb-0 text-muted">{topic.title}</h6>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex justify-content-end gap-2">
                          <button
                            className="btn btn-outline-success btn-sm rounded-pill"
                            onClick={() => handleAction("list", topic.id)}
                            title="Lista de exercícios"
                          >
                            <List size={16} />
                          </button>
                          <button
                            className="btn btn-outline-success btn-sm rounded-pill"
                            onClick={() => handleAction("video", topic.id)}
                            title="Assistir vídeo"
                          >
                            <Play size={16} />
                          </button>
                          <button
                            className="btn btn-outline-success btn-sm rounded-pill"
                            onClick={() => handleAction("read", topic.id)}
                            title="Material de leitura"
                          >
                            <BookOpen size={16} />
                          </button>
                          <button
                            className="btn btn-outline-success btn-sm rounded-pill"
                            onClick={() => handleAction("edit", topic.id)}
                            title="Editar"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            className="btn btn-outline-success  btn-sm rounded-pill"
                            onClick={() => handleAction("share", topic.id)}
                            title="Compartilhar"
                          >
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .topic-card:hover {
          background-color: #f8f9fa !important;
        }
        
        .btn-outline-primary:hover {
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .d-flex.gap-2 {
            flex-wrap: wrap;
            gap: 0.5rem !important;
          }
          
          .btn-sm {
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}
