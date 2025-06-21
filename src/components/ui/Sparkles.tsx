import React from 'react';

const Sparkles: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Sparkle Elements */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        >
          <div
            className={`w-1 h-1 bg-gradient-to-r ${
              Math.random() > 0.5 
                ? 'from-blue-400 to-blue-600' 
                : Math.random() > 0.5 
                  ? 'from-teal-400 to-teal-600'
                  : 'from-purple-400 to-purple-600'
            } rounded-full blur-sm`}
            style={{
              boxShadow: '0 0 6px currentColor',
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite alternate`
            }}
          ></div>
        </div>
      ))}
      
      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default Sparkles;