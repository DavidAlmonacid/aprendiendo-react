import { useEffect, useState } from 'react';
import './App.css';
import { About, Home } from './pages';
import { NavigationEvents } from './types/navigation.ts';

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NavigationEvents.PUSHSTATE, onLocationChange);
    window.addEventListener(NavigationEvents.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(NavigationEvents.PUSHSTATE, onLocationChange);
      window.removeEventListener(NavigationEvents.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <>
      <h1>React Router</h1>
      {currentPath === '/' && <Home />}
      {currentPath === '/about' && <About />}
    </>
  );
};

export default App;
