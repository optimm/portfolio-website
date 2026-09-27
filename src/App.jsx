import React, { useEffect } from "react";
import Home from "./pages/Home";
import { initReveal } from "./reveal";

function App() {
  useEffect(() => initReveal(), []);
  return <Home />;
}

export default App;
