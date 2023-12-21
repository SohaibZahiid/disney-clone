import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
