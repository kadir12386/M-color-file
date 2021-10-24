import React, { useState } from "react";

import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Switch,
} from "@material-ui/core";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <header className="App-header">
            <Switch onChange={handleDarkMode} value={darkMode} />
          </header>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}
