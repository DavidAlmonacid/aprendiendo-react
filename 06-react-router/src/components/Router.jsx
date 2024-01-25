import { match } from "path-to-regexp";
import { Children, useEffect, useState } from "react";
import { navigationEvents } from "../utils/consts.js";
import { getCurrentPath } from "../utils/getCurrentPath.js";

const Router = ({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) => {
  console.log(children);

  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener(navigationEvents.PUSHSTATE, onLocationChange);
    window.addEventListener(navigationEvents.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(navigationEvents.PUSHSTATE, onLocationChange);
      window.removeEventListener(navigationEvents.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === "Route";

    return isRoute ? props : null;
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

  const Page = routesToUse.find(({ path }) => {
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
