import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./layout/Header";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Register/>}/>
    
      </Routes>
    </>
  );
}

export default App;
