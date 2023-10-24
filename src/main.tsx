import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { registerSW } from "virtual:pwa-register";
const App = lazy(() => import("./App"));

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("New content available. Reload?");
    updateSW(true);
    window.location.reload();
  },
  onOfflineReady() {
    console.log("offline ready");
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
