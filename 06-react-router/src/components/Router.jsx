import { match } from 'path-to-regexp';
import { useEffect, useState } from 'react';
// import { NavigationEvents } from '../types/navigation';

const Router = ({
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
  })?.component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
};

export default Router;
