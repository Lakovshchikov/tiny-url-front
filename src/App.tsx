import { Route, Routes } from "react-router";
import { Home, RedirectPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<RedirectPage />} />
    </Routes>
  );
}

export default App;
