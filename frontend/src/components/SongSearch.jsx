import { useState } from 'react';
import { searchSongs, addSongToGarden } from '../utils/songAPI';

function SongSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setMessage('');
    
    try {
      const songs = await searchSongs(query);
      setResults(songs);
      if (songs.length === 0) {
        setMessage('No songs found. Try a different search! 🎵');
      }
    } catch (error) {
      console.error('Search error:', error);
      setMessage('Oops! Something went wrong. Try again! 💿');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToGarden = async (song) => {
    try {
      // Add random position for the flower
      const songWithPosition = {
        ...song,
        x: Math.random() * 600 + 100, // Random x between 100-700
        y: 400,
        size: Math.random() * 20 + 30 // Random size between 30-50
      };
      
      await addSongToGarden(songWithPosition);
      setMessage(`🌱 "${song.name}" planted in your garden!`);
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error adding song:', error);
      setMessage('❌ Could not add song to garden');
    }
  };

  return (
    <div>
      <h2 style={{
        color: 'var(--cyber-yellow)',
        marginBottom: '20px',
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        🔍 Discover Your Vibe
      </h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '25px',
        flexWrap: 'wrap'
      }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, artists, or moods..."
          className="retro-input"
          style={{ flex: '1', minWidth: '250px' }}
        />
        <button 
          type="submit" 
          className="retro-button"
          disabled={loading}
        >
          {loading ? '🔄 Searching...' : '🎵 Search'}
        </button>
      </form>

      {/* Message Display */}
      {message && (
        <div style={{
          background: message.includes('❌') 
            ? 'rgba(255, 0, 0, 0.2)' 
            : 'rgba(0, 255, 0, 0.2)',
          border: `2px solid ${message.includes('❌') ? 'var(--rust-red)' : 'var(--avocado-green)'}`,
          borderRadius: '10px',
          padding: '15px',
          marginBottom: '20px',
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          animation: 'slideIn 0.3s ease'
        }}>
          {message}
        </div>
      )}

      {/* Results Grid */}
      {results.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          {results.map((song, index) => (
            <div
              key={song.id || index}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 16, 240, 0.1), rgba(0, 240, 255, 0.1))',
                border: '2px solid var(--electric-blue)',
                borderRadius: '12px',
                padding: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Album art placeholder */}
              <div style={{
                width: '100%',
                height: '120px',
                background: 'linear-gradient(135deg, var(--laser-purple), var(--neon-pink))',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                marginBottom: '15px',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)'
              }}>
                💿
              </div>

              {/* Song info */}
              <h3 style={{
                color: 'var(--cyber-yellow)',
                marginBottom: '8px',
                fontSize: '1.1rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {song.name}
              </h3>

              {song.artist && (
                <p style={{
                  color: 'var(--cream)',
                  fontSize: '0.9rem',
                  marginBottom: '8px',
                  opacity: 0.8
                }}>
                  👤 {song.artist}
                </p>
              )}

              {song.genre && (
                <p style={{
                  color: 'var(--electric-blue)',
                  fontSize: '0.85rem',
                  marginBottom: '8px'
                }}>
                  🎸 {song.genre}
                </p>
              )}

              {song.mood && (
                <p style={{
                  color: 'var(--bubblegum-pink)',
                  fontSize: '0.85rem',
                  marginBottom: '12px'
                }}>
                  💭 {song.mood}
                </p>
              )}

              {/* Action button */}
              <button
                onClick={() => handleAddToGarden(song)}
                className="retro-button"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '0.95rem'
                }}
              >
                🌱 Plant in Garden
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && results.length === 0 && !message && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: 'var(--cream)',
          opacity: 0.7
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎸</div>
          <p style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
            Ready to grow your garden?
          </p>
          <p>
            Search for your favorite songs and watch them bloom! 🌺
          </p>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default SongSearch;