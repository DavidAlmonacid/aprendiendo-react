import { Suspense, lazy } from "react";
import { Route, Router } from "./components";

const LazyAbout = lazy(() => import("./pages/About.jsx"));
const LazyHome = lazy(() => import("./pages/Home.jsx"));
const LazySearch = lazy(() => import("./pages/Search.jsx"));

const routes = [
  {
    path: "/about/:lang",
    component: LazyAbout,
  },
  {
    path: "/search/:query",
    component: LazySearch,
  },
];

const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <Suspense fallback={null}>
        <Router routes={routes}>
          <Route path="/" component={LazyHome} />
          <Route path="/about" component={LazyAbout} />
        </Router>
      </Suspense>
    </>
  );
};

export default App;
