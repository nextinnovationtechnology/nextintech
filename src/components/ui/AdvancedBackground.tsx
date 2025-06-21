import React from 'react';

const AdvancedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
        animation: 'gridMove 20s linear infinite'
      }}></div>

      {/* Floating geometric shapes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {Math.random() > 0.5 ? (
            <div
              className="border border-blue-400 rotate-45"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                animation: `rotate ${10 + Math.random() * 10}s linear infinite`
              }}
            ></div>
          ) : (
            <div
              className="rounded-full border border-teal-400"
              style={{
                width: `${15 + Math.random() * 30}px`,
                height: `${15 + Math.random() * 30}px`,
                animation: `pulse ${3 + Math.random() * 3}s ease-in-out infinite`
              }}
            ></div>
          )}
        </div>
      ))}

      {/* Glowing orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            background: `radial-gradient(circle, ${
              Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(20, 184, 166, 0.1)'
            } 0%, transparent 70%)`,
            animation: `drift ${20 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`
          }}
        ></div>
      ))}

      {/* Particle system */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particleFloat ${10 + Math.random() * 15}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`line-${i}`}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            style={{
              animation: `lineGlow ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </svg>

      {/* Central tech hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-96 h-96">
          {/* Rotating rings */}
          <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute inset-8 rounded-full border border-teal-400/20 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-16 rounded-full border border-purple-400/20 animate-spin" style={{ animationDuration: '60s' }}></div>
          
          {/* Central core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-400/30 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-10px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translate(0px, 0px); }
          25% { transform: translate(100px, -50px); }
          50% { transform: translate(-50px, -100px); }
          75% { transform: translate(-100px, 50px); }
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }
        
        @keyframes lineGlow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AdvancedBackground;