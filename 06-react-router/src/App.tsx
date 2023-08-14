import { useEffect, useState } from 'react';
import './App.css';

const NAVIGATION_EVENT = 'pushstate';

const navigate = (path: string) => {
  window.history.pushState({}, '', path);

  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
};

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <p>This is the home page.</p>

      <button onClick={() => navigate('/about')}>Go to about page</button>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>About</h1>

      <p>This is the about page.</p>

      <button onClick={() => navigate('/')}>Go to home page</button>
    </>
  );
};

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
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
