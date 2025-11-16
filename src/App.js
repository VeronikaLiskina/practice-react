import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import CourseTemplate from "./pages/CourseTemplate/CourseTemplate.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import AdminDashboard from "./admin/AdminDashboard.js"; // оболочка админки
import CourseBuilder from "./admin/CourseBuilder.js";
import CourseList from "./admin/CourseList.js";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:slug" element={<CourseTemplate />} />

            {/* Админка с вложенными страницами */}
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<CourseList />} />
              <Route path="create" element={<CourseBuilder isEdit={false} />} />
              <Route
                path="edit/:slug"
                element={<CourseBuilder isEdit={true} />}
              />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
