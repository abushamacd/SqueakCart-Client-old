import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const layout = document.getElementById("root");
const root = createRoot(layout);

root.render(<App />);
