import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

const StringCalculatorComponent = React.lazy(
  () => import("./StringCalculatorComponent")
);

function App() {
  const gettheme = () => {
    const theme = createTheme({
      typography: {
        body1: { fontFamily: "Arial" },
        body2: { fontFamily: "Arial", fontWeight: "normal" },
        fontSize: 12,
      },
      palette: {
        primary: {
          light: "#006064",
          main: "#006064",
          dark: "#434343",
          contrastText: "#fff",
        },
        secondary: {
          light: "#ff7961",
          main: "#f44336",
          dark: "#a7a7a7",
          contrastText: "#000",
        },
        success: {
          light: "#008000",
          main: "#008000",
        },
        info: {
          light: "#5e35b1",
          main: "#5e35b1",
        },
        error: {
          light: "#b71c1c",
          main: "#b71c1c",
        },
        warning: {
          light: "#ff6f00",
          main: "#ff6f00",
        },
        text: {
          primary: "#434343",
          secondary: "#7b7b7b",
          disabled: "#e9ecef",
        },
      },
    });
    return theme;
  };

  return (
    <ThemeProvider theme={gettheme()}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <StringCalculatorComponent />
              </Suspense>
            }
          />
          <Route element={<div>Not found</div>} />{" "}
          {/* This route will be rendered if no other route matches */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
