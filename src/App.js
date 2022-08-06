import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Accordion from "./pages/Accordion/Accordion";
import Birthday from "./pages/Birthday/Birthday";
import Tours from "./pages/Tours/Tours";
import Default from "./pages/Default";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/birthday" element={<Birthday />} />
          <Route path="/tours" element={<Tours />} /> */}
          <Route path="/4" element={<Accordion />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
