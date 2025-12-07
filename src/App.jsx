import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CourseTemplate from "./pages/CourseTemplate/CourseTemplate.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import AdminDashboard from "./admin/AdminDashboard.jsx"; // оболочка админки
import CourseBuilder from "./admin/CourseBuilder.jsx";
import CourseList from "./admin/CourseList.jsx";

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
