import React from "react"
import Router from "./router";

import GlobalContext from "./context";

export const App: React.FC = () => {
  return (
    <GlobalContext>
      <Router />
    </GlobalContext>
  );
}

export default App;
