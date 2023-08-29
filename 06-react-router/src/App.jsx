import { Route, Router } from './components';
import { About, Home, Search } from './pages';

const routes = [
  {
    path: '/search/:query',
    component: Search
  }
];

const App = () => {
  return (
    <>
      <h1>React Router</h1>
      <Router routes={routes}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
      </Router>
    </>
  );
};

export default App;
