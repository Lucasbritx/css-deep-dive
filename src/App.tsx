import React from "react";
import CascadeLayers from "./components/cascade-layers";

function App() {
  return (
    <div>
      CSS DEEP DIVE
      <CascadeLayers />
      <div>
        <h1>:has() como CSS parent selector</h1>
      </div>
      <div>
        <h1>Container Queries + @container style()</h1>
      </div>
      <div>
        <h1>CSS Triggers e Performance</h1>
      </div>
      <div>
        <h1>Houdini + Custom Properties com fallback</h1>
      </div>
    </div>
  );
}

export default App;
