import './App.css';
import { Router } from './components';
import { About, Home } from './pages';

export interface Route {
  path: string;
  component: React.FC;
}

const routes: Route[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
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
