import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const layout = document.getElementById("root");
const root = createRoot(layout);

root.render(<App />);
