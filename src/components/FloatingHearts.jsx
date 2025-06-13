// FloatingHearts.jsx
const FloatingHearts = ({ count = 12 }) => {
  const hearts = Array.from({ length: count });

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {hearts.map((_, i) => {
        const size = Math.floor(Math.random() * 20) + 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 10 + Math.random() * 10;

        return (
          <div
            key={i}
            className="absolute heart"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingHearts;
