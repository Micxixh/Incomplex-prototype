import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CustomCursor from "./components/CustomCursor";


createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <CustomCursor />
  </>
);
