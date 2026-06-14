import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch((err) => console.error(err));
    return () => {
      cancelled = true;
    };
  }, []);

  console.log(data);

  return (
    <>
      <h1>Vite + React</h1>
      <p>Labas, aš krabas ;)</p>
    </>
  );
}

export default App;
