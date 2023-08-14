import { useState } from 'react';
import './App.css';

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <p>This is the home page.</p>

      <a href='/about'>Go to about page</a>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>About</h1>

      <p>This is the about page.</p>

      <a href='/'>Go to home page</a>
    </>
  );
};

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <>
      <h1>React Router</h1>
      {currentPath === '/' && <Home />}
      {currentPath === '/about' && <About />}
    </>
  );
};

export default App;
