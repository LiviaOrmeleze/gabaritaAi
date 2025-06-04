
import { useState } from "react"
import axios from "axios"
import { parseStringPromise } from "xml2js"

const Significados = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setIsLoading(true)

    try {
      const response = await axios.get(`https://dicionario-aberto.net/define/${searchTerm}`)
      const parsed = await parseStringPromise(response.data)

      if (!parsed.entry || !parsed.entry.sense) {
        setSearchResults([])
        return
      }

      const word = parsed.entry.form[0]
      const definitionText = parsed.entry.sense[0].def[0]

      const newResult = {
        word,
        pronunciation: "", // API não fornece, deixamos em branco
        partOfSpeech: "substantivo", // Pode melhorar futuramente com NLP
        definitions: [
          {
            meaning: definitionText,
            example: `Exemplo com a palavra "${word}".`,
          },
        ],
      }

      setSearchResults([newResult])
    } catch (error) {
      console.error("Erro ao buscar palavra:", error)
      setSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const playPronunciation = (word) => {
    console.log(`Reproduzindo pronúncia de: ${word}`)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-vh-100">
      <div className="py-5">
        {/* Header */}
        <div className="text-center mb-5 d-flex">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <i className="bi bi-book fs-1 fonteBg me-3"></i>
            <h1 className="display-4 fw-bold fonteBg mb-0">Dicionário de Significados</h1>
          </div>

          <div className="justify-content-center mb-5">
            <div className="card shadow-lg border-0">
              <form onSubmit={handleSearch}>
                <div className="input-group input-group-lg">
                  <span className="input-group-text border-end-0">
                    <i className="bi bi-search text-muted"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0 ps-0"
                    placeholder="Digite uma palavra para buscar seu significado..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-primary px-4" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Buscando...
                      </>
                    ) : (
                      "Buscar"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {searchResults.map((result, index) => (
              <div key={index} className="card shadow-lg border-0 mb-4">
                <div className="card-header bg-white border-bottom-0 pt-4">
                  <div className="d-flex align-items-start justify-content-between">
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <h2 className="h3 text-primary fw-bold mb-0 me-3">{result.word}</h2>
                        <button
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() => playPronunciation(result.word)}
                          title="Ouvir pronúncia"
                        >
                          <i className="bi bi-volume-up"></i>
                        </button>
                        <button className="btn btn-outline-secondary btn-sm me-2" title="Adicionar aos favoritos">
                          <i className="bi bi-star"></i>
                        </button>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => copyToClipboard(result.word)}
                          title="Copiar palavra"
                        >
                          <i className="bi bi-clipboard"></i>
                        </button>
                      </div>
                      <div className="d-flex align-items-center">
                        <code className="text-muted me-3">{result.pronunciation}</code>
                        <span className="badge bg-secondary">{result.partOfSpeech}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="mb-4">
                    <h4 className="h5 fw-semibold text-dark mb-3">
                      <i className="bi bi-list-ul me-2 text-primary"></i>
                      Definições
                    </h4>
                    {result.definitions.map((def, defIndex) => (
                      <div key={defIndex} className="border-start border-primary border-3 ps-3 mb-3">
                        <p className="mb-2">
                          <span className="fw-semibold text-primary me-2">{defIndex + 1}.</span>
                          {def.meaning}
                        </p>
                        <div className="bg-light p-3 rounded">
                          <small className="text-muted">
                            <strong>Exemplo:</strong> <em>{def.example}</em>
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* No Results */}
            {searchResults.length === 0 && searchTerm && !isLoading && (
              <div className="card shadow-lg border-0">
                <div className="card-body text-center py-5">
                  <i className="bi bi-search display-1 text-muted mb-3"></i>
                  <h3 className="h4 text-muted mb-2">Nenhum resultado encontrado</h3>
                  <p className="text-muted">
                    Não encontramos definições para "{searchTerm}". Tente uma palavra diferente.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-5">
          <p className="text-white-50">
            <i className="bi bi-heart-fill text-danger me-1"></i>
            Explore o significado das palavras e enriqueça seu vocabulário
          </p>
        </div>
      </div>
    </div>
  )
}

export default Significados
