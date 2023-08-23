import { useEffect, useState } from 'react';
import { Route } from '../App';
import { NavigationEvents } from '../types/navigation';

interface RouterProps {
  routes: Route[];
  defaultComponent?: React.FC;
}

const Router: React.FC<RouterProps> = ({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>
}) => {
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

  const Page = routes.find(({ path }) => path === currentPath)?.component;

  return Page ? <Page /> : <DefaultComponent />;
};

export default Router;
