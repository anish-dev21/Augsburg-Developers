import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FloatingPhone from "./Components/FloatingPhone";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FloatingPhone></FloatingPhone>
    </>
  );
}

export default App;
