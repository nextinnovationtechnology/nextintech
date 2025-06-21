import React from 'react';

const AnimatedEarth: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Earth Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-96 h-96 animate-spin" style={{ animationDuration: '60s' }}>
          {/* Earth Base */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/20 via-green-900/10 to-blue-900/20 border border-blue-500/20">
            {/* Grid Overlay */}
            <div className="absolute inset-0 rounded-full" style={{
              background: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 15px,
                  rgba(59, 130, 246, 0.1) 15px,
                  rgba(59, 130, 246, 0.1) 16px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 15px,
                  rgba(59, 130, 246, 0.1) 15px,
                  rgba(59, 130, 246, 0.1) 16px
                )
              `
            }}>
            </div>
            
            {/* Continents - Abstract Representation */}
            <div className="absolute top-1/4 left-1/4 w-16 h-12 bg-green-500/10 rounded-full blur-sm"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-8 bg-green-500/10 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/3 left-1/3 w-12 h-16 bg-green-500/10 rounded-full blur-sm"></div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400/5 blur-xl"></div>
            <div className="absolute inset-4 rounded-full bg-blue-400/5 blur-lg"></div>
          </div>

          {/* Orbital Rings */}
          <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse"></div>
          <div className="absolute -inset-8 rounded-full border border-teal-400/10" style={{
            animation: 'spin 40s linear infinite reverse'
          }}></div>
          <div className="absolute -inset-16 rounded-full border border-blue-400/5" style={{
            animation: 'spin 80s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
  );
};

export default AnimatedEarth;