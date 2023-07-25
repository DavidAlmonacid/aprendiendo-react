import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { FiltersProvider } from './context/FiltersContext.tsx';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
