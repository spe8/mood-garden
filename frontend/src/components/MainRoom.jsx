import { useState } from 'react';

function MainRoom({ onNavigate }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2C1810 0%, #4A2C1A 50%, #5D3A2B 100%)',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Back button */}
      <button
        onClick={() => onNavigate('home')}
        className="retro-button"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 100
        }}
      >
        🏠 Back to House
      </button>

      {/* Window to Garden */}
      <div
        onClick={() => onNavigate('garden')}
        onMouseEnter={() => setHoveredItem('window')}
        onMouseLeave={() => setHoveredItem(null)}
        style={{
          position: 'absolute',
          top: '50px',
          right: '50px',
          width: '150px',
          height: '180px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          transform: hoveredItem === 'window' ? 'scale(1.05)' : 'scale(1)'
        }}
      >
        <svg width="150" height="180" viewBox="0 0 150 180">
          <defs>
            <linearGradient id="gardenView" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#98D8C8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#6B8E23', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          
          <rect x="5" y="5" width="140" height="170" fill="url(#gardenView)" stroke="#654321" strokeWidth="6" rx="5"/>
          <line x1="75" y1="5" x2="75" y2="175" stroke="#654321" strokeWidth="4"/>
          <line x1="5" y1="90" x2="145" y2="90" stroke="#654321" strokeWidth="4"/>
          
          <circle cx="50" cy="120" r="12" fill="#FF69B4" opacity="0.8"/>
          <circle cx="100" cy="130" r="12" fill="#FFD700" opacity="0.8"/>
          <circle cx="75" cy="140" r="12" fill="#9370DB" opacity="0.8"/>
          
          <rect x="10" y="10" width="60" height="60" fill="white" opacity="0.2"/>
          
          {hoveredItem === 'window' && (
            <text x="75" y="200" textAnchor="middle" fill="#FFD700" fontSize="14" fontWeight="bold">
              🌸 View Garden
            </text>
          )}
        </svg>
      </div>

      <h1 style={{
        textAlign: 'center',
        marginTop: '80px',
        marginBottom: '40px',
        color: 'var(--cyber-yellow)',
        textShadow: '0 0 20px var(--cyber-yellow)'
      }}>
        🎵 Your Retro Music Room 🎵
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        
        {/* Vinyl Record Player */}
        <div className="retro-panel" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--neon-pink)', marginBottom: '20px' }}>💿 Now Playing</h2>
          
          <div style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 20px',
            position: 'relative'
          }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #1a1a1a 30%, #000 50%, #1a1a1a 70%)',
              border: '3px solid #333',
              animation: 'spin 3s linear infinite',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #FFD700, #FFA500)',
                border: '2px solid #333'
              }}/>
              
              {[60, 80, 100, 120, 140, 160].map((size, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              ))}
            </div>
          </div>
          
          <p style={{ color: 'var(--cream)', fontSize: '1.2rem', marginBottom: '10px' }}>
            <strong>Song Title</strong>
          </p>
          <p style={{ color: 'var(--cream)', opacity: 0.8 }}>Artist Name</p>
          
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <button className="retro-button" style={{ padding: '10px 20px' }}>⏮️</button>
            <button className="retro-button" style={{ padding: '10px 20px', fontSize: '1.5rem' }}>▶️</button>
            <button className="retro-button" style={{ padding: '10px 20px' }}>⏭️</button>
          </div>
        </div>

        {/* DVD Shelf */}
        <div className="retro-panel">
          <h2 style={{ color: 'var(--electric-blue)', marginBottom: '20px', textAlign: 'center' }}>
            📀 DVD Collection (Gifts)
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '15px'
          }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
                  border: '2px solid var(--neon-pink)',
                  borderRadius: '8px',
                  padding: '15px 10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  minHeight: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💿</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--cream)' }}>Gift #{item}</div>
              </div>
            ))}
          </div>
          
          <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--cream)', opacity: 0.7 }}>
            Songs gifted from friends appear here
          </p>
        </div>

        {/* Retro TV */}
        <div className="retro-panel" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--laser-purple)', marginBottom: '20px' }}>📺 Your Vibe</h2>
          
          <div style={{
            width: '280px',
            height: '200px',
            margin: '0 auto',
            background: '#2d2d2d',
            border: '15px solid #1a1a1a',
            borderRadius: '20px',
            position: 'relative',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, var(--neon-pink), var(--electric-blue), var(--laser-purple))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              animation: 'tv-flicker 0.15s infinite alternate'
            }}>
              😊
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '20px',
              background: '#1a1a1a',
              borderRadius: '0 0 10px 10px'
            }}/>
          </div>
          
          <p style={{ marginTop: '45px', color: 'var(--cream)', fontSize: '1.2rem' }}>
            Current Mood: <strong style={{ color: 'var(--cyber-yellow)' }}>Happy</strong>
          </p>
          <p style={{ color: 'var(--cream)', opacity: 0.8, marginTop: '10px' }}>
            Era: 80s Vibes
          </p>
        </div>

        {/* Achievements */}
        <div className="retro-panel">
          <h2 style={{ color: 'var(--cyber-yellow)', marginBottom: '20px', textAlign: 'center' }}>
            🏆 Achievements
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              { icon: '🌱', title: 'Green Thumb', desc: 'Planted 10 songs' },
              { icon: '🎸', title: 'Music Lover', desc: 'Listened for 5 hours' },
              { icon: '🎁', title: 'Generous Soul', desc: 'Gifted 3 songs' }
            ].map((achievement, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '2px solid var(--electric-blue)',
                  borderRadius: '10px',
                  padding: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <div style={{ fontSize: '2.5rem' }}>{achievement.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'var(--cyber-yellow)', fontWeight: 'bold', marginBottom: '5px' }}>
                    {achievement.title}
                  </div>
                  <div style={{ color: 'var(--cream)', fontSize: '0.9rem', opacity: 0.8 }}>
                    {achievement.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Button */}
        <div 
          className="retro-panel" 
          onClick={() => onNavigate('search')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 16, 240, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
          <h2 style={{ color: 'var(--neon-pink)', marginBottom: '10px' }}>Find New Music</h2>
          <p style={{ color: 'var(--cream)', opacity: 0.8 }}>Search and add songs to your garden</p>
        </div>

        {/* Profile Button */}
        <div 
          className="retro-panel"
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>👤</div>
          <h2 style={{ color: 'var(--bubblegum-pink)', marginBottom: '10px' }}>Your Profile</h2>
          <p style={{ color: 'var(--cream)', opacity: 0.8 }}>View your retro avatar & stats</p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes tv-flicker {
          0% { opacity: 1; }
          100% { opacity: 0.95; }
        }
      `}</style>
    </div>
  );
}

export default MainRoom;