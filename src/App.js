import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ICProgramming from "./pages/ProgramDetails/1C-programming";
import Java from "./pages/ProgramDetails/Java";
import WebProgramming from "./pages/ProgramDetails/Web-programming";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<Home />} />

            {/* Страницы программ */}
            <Route path="/1c-programming" element={<ICProgramming />} />
            <Route path="/java" element={<Java />} />
            <Route path="/web-programming" element={<WebProgramming />} />

            {/* Добавьте маршруты для остальных 3 программ */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
