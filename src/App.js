import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./core/Navbar";
import AppRoutes from "./core/AppRoutes";
import { ThemeProvider } from "./core/context/themeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="fpl-app-container">
          <Navbar />
          <div className="content-container">
            <AppRoutes />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
