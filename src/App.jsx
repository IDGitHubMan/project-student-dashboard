import { useState } from "react";
import data from "./data/data.json";
function App() {
  for (let student of data) {
    console.log(student);
  }
  return (
    <div>
      <h1>Student Dashboard</h1>
    </div>
  );
}

export default App;
