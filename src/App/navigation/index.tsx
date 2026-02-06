import type React from "react";
import { AppRouter } from "./router";
import { BrowserRouter } from "react-router-dom";


export default function Navigation(): React.ReactElement {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
