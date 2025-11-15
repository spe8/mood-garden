import { useState, useEffect } from 'react';
import { getCurrentUser } from '../utils/userAPI';

// Genre/Mood color mappings for plants
const moodColors = {
  happy: '#FFD700',
  sad: '#4169E1',
  energetic: '#FF4500',
  calm: '#98D8C8',
  romantic: '#FF69B4',
  nostalgic: '#9B59B6',
  default: '#4CAF50'
};

const genreColors = {
  rock: '#8B0000',
  pop: '#FF69B4',
  jazz: '#4B0082',
  classical: '#DAA520',
  electronic: '#00CED1',
  hiphop: '#FF8C00',
  indie: '#9370DB',
  default: '#4CAF50'
};

function Garden() {
  const [garden, setGarden] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGarden = async () => {
      try {
        const user = await getCurrentUser();
        setGarden(user.garden);
        setLoading(false);
      } catch (error) {
        console.error("Error loading garden:", error);
        setLoading(false);
      }
    };
    
    loadGarden();
  }, []);

  const generatePlant = (song) => {
    const color = song.mood 
      ? moodColors[song.mood.toLowerCase()] || moodColors.default
      : genreColors[song.genre?.toLowerCase()] || genreColors.default;
    
    const baseY = 500;
    const stemHeight = song.size * 2 || 80;
    const flowerSize = song.size * 0.6 || 30;
    const topY = baseY - stemHeight;
    
    return (
      <g key={song.songId} style={{ cursor: 'pointer' }}>
        <line
          x1={song.x}
          y1={baseY}
          x2={song.x}
          y2={topY}
          stroke="url(#stemGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        
        <ellipse
          cx={song.x - 12}
          cy={baseY - stemHeight * 0.3}
          rx="15"
          ry="8"
          fill="#66BB6A"
          transform={`rotate(-45 ${song.x - 12} ${baseY - stemHeight * 0.3})`}
        />
        <ellipse
          cx={song.x + 12}
          cy={baseY - stemHeight * 0.5}
          rx="15"
          ry="8"
          fill="#66BB6A"
          transform={`rotate(45 ${song.x + 12} ${baseY - stemHeight * 0.5})`}
        />
        <ellipse
          cx={song.x - 10}
          cy={baseY - stemHeight * 0.7}
          rx="15"
          ry="8"
          fill="#66BB6A"
          transform={`rotate(-30 ${song.x - 10} ${baseY - stemHeight * 0.7})`}
        />
        
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const petalX = song.x + Math.cos((angle * Math.PI) / 180) * flowerSize;
          const petalY = topY + Math.sin((angle * Math.PI) / 180) * flowerSize;
          return (
            <ellipse
              key={i}
              cx={petalX}
              cy={petalY}
              rx={flowerSize * 0.5}
              ry={flowerSize * 0.7}
              fill={color}
              opacity="0.95"
              transform={`rotate(${angle} ${petalX} ${petalY})`}
              style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.3))' }}
            />
          );
        })}
        
        <circle
          cx={song.x}
          cy={topY}
          r={flowerSize * 0.4}
          fill="#FFD700"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        />
        <circle
          cx={song.x}
          cy={topY}
          r={flowerSize * 0.25}
          fill="#FFA500"
          opacity="0.6"
        />
        
        <text 
          x={song.x} 
          y={baseY + 20} 
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill="#2E7D32"
          style={{ pointerEvents: 'none' }}
        >
          {song.name.length > 15 ? song.name.substring(0, 15) + '...' : song.name}
        </text>
      </g>
    );
  };

  if (loading) {
    return (
      <div className="retro-panel">
        <div className="loading">🌱 Growing your garden...</div>
      </div>
    );
  }

  return (
    <div className="garden retro-panel">
      <h2>🌸 Your Music Garden 🌸</h2>
      
      <div className="garden-stats">
        <div className="stat-badge">🎵 {garden.length} Songs</div>
        <div className="stat-badge">🌺 {new Set(garden.map(s => s.mood)).size} Moods</div>
        <div className="stat-badge">🎸 {new Set(garden.map(s => s.genre)).size} Genres</div>
      </div>
      
      <div className="garden-canvas">
        <svg width="100%" height="600" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#B0E0E6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#F0E68C', stopOpacity: 1 }} />
            </linearGradient>
            
            <linearGradient id="stemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4CAF50', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2E7D32', stopOpacity: 1 }} />
            </linearGradient>
            
            <pattern id="grassPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect width="30" height="30" fill="#7CB342"/>
              <path d="M5,30 Q5,25 7,20 L7,30 Z" fill="#558B2F" opacity="0.6"/>
              <path d="M12,30 Q12,22 14,18 L14,30 Z" fill="#558B2F" opacity="0.6"/>
              <path d="M20,30 Q20,24 22,19 L22,30 Z" fill="#558B2F" opacity="0.6"/>
              <path d="M27,30 Q27,26 28,22 L28,30 Z" fill="#558B2F" opacity="0.6"/>
            </pattern>
          </defs>
          
          <rect x="0" y="0" width="800" height="400" fill="url(#skyGradient)"/>
          
          <g opacity="0.7">
            <ellipse cx="120" cy="80" rx="40" ry="25" fill="white"/>
            <ellipse cx="100" cy="85" rx="35" ry="20" fill="white"/>
            <ellipse cx="140" cy="85" rx="30" ry="20" fill="white"/>
          </g>
          
          <g>
            <circle cx="700" cy="80" r="35" fill="#FFD700"/>
            <circle cx="700" cy="80" r="40" fill="#FFA500" opacity="0.3"/>
          </g>
          
          <rect x="0" y="400" width="800" height="200" fill="#8FBC8F"/>
          <rect x="0" y="420" width="800" height="180" fill="url(#grassPattern)" opacity="0.8"/>
          
          {garden.map((song) => generatePlant(song))}
        </svg>
      </div>

      {garden.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--cyber-yellow)' }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🌱 Your garden is empty!</p>
          <p>Search for songs above to start growing your music garden.</p>
        </div>
      )}
    </div>
  );
}

export default Garden;