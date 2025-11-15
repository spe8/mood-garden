import { useState } from 'react';

function HomePage({ onNavigate }) {
  const [doorHover, setDoorHover] = useState(false);
  const [windowHover, setWindowHover] = useState(false);

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #87CEEB 0%, #B0E0E6 50%, #90EE90 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Title */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        zIndex: 10
      }}>
        <h1 style={{
          fontSize: '4rem',
          margin: 0,
          textShadow: '4px 4px 8px rgba(0,0,0,0.3)'
        }}>
          🎵 Mood Garden 🎵
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: 'var(--cream)',
          marginTop: '10px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          Click the door to enter your music room
        </p>
      </div>

      {/* Sun */}
      <div style={{
        position: 'absolute',
        top: '50px',
        right: '100px',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #FFD700, #FFA500)',
        boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)',
        animation: 'sun-pulse 4s ease-in-out infinite'
      }}/>

      {/* Clouds */}
      <div style={{
        position: 'absolute',
        top: '100px',
        left: '150px',
        animation: 'cloud-drift 30s linear infinite'
      }}>
        <div style={{
          width: '80px',
          height: '40px',
          background: 'white',
          borderRadius: '50px',
          opacity: 0.8,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}/>
      </div>

      {/* House Container */}
      <svg width="600" height="500" viewBox="0 0 600 500" style={{ position: 'relative', zIndex: 5 }}>
        <defs>
          {/* Brick pattern */}
          <pattern id="brickPattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
            <rect width="40" height="20" fill="#8B4513"/>
            <rect width="38" height="18" x="1" y="1" fill="#A0522D"/>
            <line x1="0" y1="10" x2="40" y2="10" stroke="#654321" strokeWidth="1"/>
            <line x1="20" y1="0" x2="20" y2="10" stroke="#654321" strokeWidth="1"/>
            <line x1="20" y1="10" x2="20" y2="20" stroke="#654321" strokeWidth="1"/>
          </pattern>
          
          {/* Wood grain */}
          <pattern id="woodGrain" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="#654321"/>
            <path d="M0,5 Q10,3 20,5" stroke="#543210" strokeWidth="1" fill="none"/>
            <path d="M0,12 Q10,10 20,12" stroke="#543210" strokeWidth="1" fill="none"/>
          </pattern>

          {/* Window reflection */}
          <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#4682B4', stopOpacity: 0.8 }} />
          </linearGradient>
        </defs>

        {/* Grass ground */}
        <rect x="0" y="400" width="600" height="100" fill="#2E7D32"/>
        
        {/* House walls */}
        <rect x="100" y="200" width="400" height="250" fill="url(#brickPattern)" stroke="#654321" strokeWidth="3"/>
        
        {/* Roof */}
        <polygon 
          points="300,100 80,200 520,200" 
          fill="#8B0000" 
          stroke="#654321" 
          strokeWidth="3"
        />
        <polygon 
          points="300,100 90,195 510,195" 
          fill="#A52A2A" 
          opacity="0.6"
        />

        {/* Chimney */}
        <rect x="380" y="120" width="50" height="80" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
        <rect x="375" y="115" width="60" height="10" fill="#654321"/>
        
        {/* Chimney smoke */}
        <g opacity="0.6">
          <ellipse cx="405" cy="100" rx="15" ry="10" fill="#D3D3D3">
            <animate attributeName="cy" values="100;80;60" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.3;0" dur="3s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="415" cy="95" rx="12" ry="8" fill="#D3D3D3">
            <animate attributeName="cy" values="95;75;55" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.3;0" dur="3.5s" repeatCount="indefinite"/>
          </ellipse>
        </g>

        {/* Left Window - CLICKABLE TO GARDEN */}
        <g 
          onClick={() => onNavigate('garden')}
          onMouseEnter={() => setWindowHover(true)}
          onMouseLeave={() => setWindowHover(false)}
          style={{ cursor: 'pointer' }}
        >
          <rect 
            x="150" 
            y="250" 
            width="80" 
            height="100" 
            fill="url(#windowGradient)" 
            stroke="#654321" 
            strokeWidth="3"
            style={{
              filter: windowHover ? 'brightness(1.3) drop-shadow(0 0 20px #FFD700)' : 'none',
              transition: 'all 0.3s ease'
            }}
          />
          <line x1="190" y1="250" x2="190" y2="350" stroke="#654321" strokeWidth="2"/>
          <line x1="150" y1="300" x2="230" y2="300" stroke="#654321" strokeWidth="2"/>
          
          {windowHover && (
            <>
              <rect x="130" y="360" width="120" height="30" fill="rgba(0,0,0,0.8)" rx="5"/>
              <text x="190" y="380" textAnchor="middle" fill="#FFD700" fontSize="14" fontWeight="bold">
                🌸 Garden
              </text>
            </>
          )}
        </g>

        {/* Right Window */}
        <rect x="370" y="250" width="80" height="100" fill="url(#windowGradient)" stroke="#654321" strokeWidth="3"/>
        <line x1="410" y1="250" x2="410" y2="350" stroke="#654321" strokeWidth="2"/>
        <line x1="370" y1="300" x2="450" y2="300" stroke="#654321" strokeWidth="2"/>

        {/* Door - CLICKABLE TO MAIN ROOM */}
        <g 
          onClick={() => onNavigate('room')}
          onMouseEnter={() => setDoorHover(true)}
          onMouseLeave={() => setDoorHover(false)}
          style={{ cursor: 'pointer' }}
        >
          <rect 
            x="260" 
            y="300" 
            width="80" 
            height="150" 
            fill="url(#woodGrain)" 
            stroke="#654321" 
            strokeWidth="3"
            rx="5"
            style={{
              filter: doorHover ? 'brightness(1.2) drop-shadow(0 0 20px #FFD700)' : 'none',
              transition: 'all 0.3s ease'
            }}
          />
          
          {/* Door panels */}
          <rect x="270" y="310" width="60" height="60" fill="none" stroke="#543210" strokeWidth="2" rx="3"/>
          <rect x="270" y="380" width="60" height="60" fill="none" stroke="#543210" strokeWidth="2" rx="3"/>
          
          {/* Door knob */}
          <circle 
            cx="320" 
            cy="380" 
            r="5" 
            fill="#FFD700"
            style={{
              filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.5))'
            }}
          />

          {doorHover && (
            <>
              <rect x="240" y="460" width="120" height="30" fill="rgba(0,0,0,0.8)" rx="5"/>
              <text x="300" y="480" textAnchor="middle" fill="#FFD700" fontSize="14" fontWeight="bold">
                🎵 Enter Room
              </text>
            </>
          )}
        </g>

        {/* Window flower box */}
        <rect x="145" y="350" width="90" height="15" fill="#654321" stroke="#543210" strokeWidth="2"/>
        <g>
          <circle cx="160" cy="355" r="8" fill="#FF69B4"/>
          <circle cx="175" cy="352" r="8" fill="#FFD700"/>
          <circle cx="190" cy="355" r="8" fill="#FF69B4"/>
          <circle cx="205" cy="353" r="8" fill="#9370DB"/>
          <circle cx="220" cy="355" r="8" fill="#FF69B4"/>
        </g>

        {/* Garden path */}
        <path d="M 300,450 L 280,500" fill="#A0522D" stroke="#654321" strokeWidth="2"/>
        <path d="M 300,450 L 320,500" fill="#8B7355" stroke="#654321" strokeWidth="2"/>
        
        {/* Path stones */}
        <ellipse cx="295" cy="460" rx="15" ry="8" fill="#808080" opacity="0.7"/>
        <ellipse cx="305" cy="475" rx="15" ry="8" fill="#808080" opacity="0.7"/>
        <ellipse cx="298" cy="490" rx="15" ry="8" fill="#808080" opacity="0.7"/>
      </svg>

      {/* Instructions */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: 'var(--cream)',
        fontSize: '1.2rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        <p>🚪 Click the <strong>door</strong> for your music room</p>
        <p>🪟 Click the <strong>window</strong> to see your garden</p>
      </div>

      <style>{`
        @keyframes sun-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }

        @keyframes cloud-drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(400px); }
        }
      `}</style>
    </div>
  );
}

export default HomePage;