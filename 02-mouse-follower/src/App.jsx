import { useEffect, useState } from 'react';

const App = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Pointer movement
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    enabled && document.addEventListener('mousemove', handleMove);

    return () => {
      document.removeEventListener('mousemove', handleMove);
    };
  }, [enabled]);

  // Pointer appearance
  useEffect(() => {
    document.body.classList.toggle('show-custom-cursor', enabled);

    return () => {
      document.body.classList.remove('show-custom-cursor');
    };
  }, [enabled]);

  return (
    <div className='app'>
      <div
        className='custom-cursor'
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h1>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'deactivate' : 'activate'} mouse follower
      </button>
    </div>
  );
};

export default App;
