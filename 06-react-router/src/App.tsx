/* eslint-disable @typescript-eslint/no-explicit-any */

import './App.css';
import { Router } from './components';
import { About, Home, Search } from './pages';

export interface Route {
  path: string;
  component: React.FC<any>;
}

const routes: Route[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/search/:query',
    component: Search
  }
];

const App = () => {
  return (
    <>
      <h1>React Router</h1>
      <Router routes={routes} />
    </>
  );
};

export default App;
