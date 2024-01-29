import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TodosProvider } from "./contexts/TodosContext.tsx";

import "todomvc-app-css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
);
