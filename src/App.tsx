import { useState } from "react";
import "./App.css";
import bananas from "./Bananas.svg";
import useGetCryptoLive from "./hooks/websockets/useGetCryptoLive";
import useGetEventOdds from "./hooks/websockets/useGetEventOdds";
import useGetLiveMatchUpdates from "./hooks/websockets/useGetLiveMatchUpdates";

function App() {
  const [count, setCount] = useState(0);
  const { crypto } = useGetCryptoLive();
  const { odds } = useGetEventOdds();
  const { match } = useGetLiveMatchUpdates();

  console.log("crypto", crypto);
  console.log("odds", odds);
  console.log("match", match);
  return (
    <div className="App">
      <div>
        <a href="#">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="#">
          <img src={bananas} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Websocket testing 1 2 3</h1>
      <img src={"https://picsum.photos/500/300?random=1"} alt="random-img" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
