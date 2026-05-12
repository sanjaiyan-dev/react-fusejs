import { useState } from 'react'
import { useFuse } from 'react-fusejs'
import { useFuseTanstackQuery } from 'react-fusejs/tanstack'
import { tamilLiteratureData, type TamilWork } from './data/tamilLiterature'

const SEARCH_KEYS = ['title', 'titleTamil', 'author', 'description', 'tags']

function App() {
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState<'standard' | 'tanstack'>('standard')
  const [defer, setDefer] = useState(true)
  const [matchAll, setMatchAll] = useState(false)

  // Standard Hook usage
  const standard = useFuse<TamilWork>({
    items: tamilLiteratureData as any,
    searchQuery: query,
    keys: SEARCH_KEYS,
    deferSearchQuery: defer,
    matchAllOnEmptyQuery: matchAll,
    threshold: 0.3,
  })

  // TanStack Query Hook usage
  const { results: tanstackResults } = useFuseTanstackQuery<TamilWork>({
    items: tamilLiteratureData as any,
    searchQuery: query,
    keys: SEARCH_KEYS,
    deferSearchQuery: defer,
    matchAllOnEmptyQuery: matchAll,
    threshold: 0.3,
    cacheConfig: {
      maxCacheLimit: 5,
    }
  })

  const results = mode === 'standard' ? standard.results : (tanstackResults.data || [])
  const isLoading = mode === 'tanstack' && tanstackResults.isLoading

  return (
    <div className="app-container">
      <header className="header">
        <h1>தமிழ் இலக்கியம்</h1>
        <p>Explore the vast treasures of Tamil Literature from the ancient Sangam age to modern masterpieces.</p>
      </header>

      <div className="search-section">
        <div className="input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search by title, author, description, or tags (e.g. 'love', 'war', 'ethics')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="controls">
          <div className="tab-switcher">
            <button
              className={`tab-btn ${mode === 'standard' ? 'active' : ''}`}
              onClick={() => setMode('standard')}
            >
              Standard Hook
            </button>
            <button
              className={`tab-btn ${mode === 'tanstack' ? 'active' : ''}`}
              onClick={() => setMode('tanstack')}
            >
              TanStack Query
            </button>
          </div>

          <div className="toggle-group">
            <label className="toggle-item">
              <input
                type="checkbox"
                checked={defer}
                onChange={() => setDefer(!defer)}
              />
              Defer Query (UX)
            </label>
            <label className="toggle-item">
              <input
                type="checkbox"
                checked={matchAll}
                onChange={() => setMatchAll(!matchAll)}
              />
              Match All if Empty
            </label>
          </div>

          <div className="stats">
            {isLoading ? 'Searching...' : `Found ${results.length} works`}
          </div>
        </div>
      </div>

      <main className="results-grid">
        {results.length > 0 ? (
          results.map((result) => {
            const item = result.item;
            return (
              <article key={item.id} className="card">
                <div className="card-header">
                  <h2 className="card-title">{item.title}</h2>
                  <span className="era-badge">{item.era}</span>
                </div>
                {item.titleTamil && (
                  <div className="card-tamil tamil-text">{item.titleTamil}</div>
                )}
                <div className="card-author">
                  <span>✍️</span> {item.author}
                </div>
                <div className="card-period">
                  📅 {item.period} | 📜 {item.genre}
                </div>
                <p className="card-desc" title={item.description}>
                  {item.description}
                </p>
                <div className="card-tags">
                  {item.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
                {result.score !== undefined && (
                  <div className="score-badge">Match: {(1 - result.score).toFixed(2)}</div>
                )}
              </article>
            );
          })
        ) : (
          <div className="empty-state">
            {!query && !matchAll ? (
              <p>Start typing to explore the collection or enable "Match All if Empty".</p>
            ) : (
              <p>No works found matching your search. Try different keywords.</p>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
