import logo from "./logo.svg";
import "./App.css";
import RouterApp from "./routes/routes";
import { AuthProvider } from "#context/AuthContext.js";
import { ThemeProvider } from "styled-components";

const theme = {
  main: "blue",
};
function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterApp />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
