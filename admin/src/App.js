import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/Bar/Topbar";
import Sidebar from "./scenes/Bar/Sidebar";
import Dashboard from "./scenes/Dashboard/Dashboard";
import BlogEdit from "./scenes/BlogEdit/BlogEdit";
import NginxLogs from "./scenes/NginxLogs/NginxLogs";
import FAQ from "./scenes/FAQ/FAQ";
import FormDataAdd from "./scenes/FormDataAdd/FormDataAdd";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/blog-edit" element={<BlogEdit />} />
              <Route path="/logs" element={<NginxLogs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/new-post" element={<FormDataAdd />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
