import { match } from 'path-to-regexp';
import { useEffect, useState } from 'react';
import { Route } from '../App';
import { NavigationEvents } from '../types/navigation';

interface RouterProps {
  routes: Route[];
  defaultComponent?: React.FC<PageProps>;
}

interface PageProps {
  routeParams: Record<string, string>;
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

  let routeParams = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) {
      return true;
    }

    const matcherURL = match(path, { decode: decodeURIComponent });
    const matched = matcherURL(currentPath);

    if (matched) {
      routeParams = matched.params;
      return true;
    } else {
      return false;
    }
  })?.component as React.FC<PageProps>;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
};

export default Router;
