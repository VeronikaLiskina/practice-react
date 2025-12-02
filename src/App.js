import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseTemplate from "./pages/CourseTemplate";
import Header from "./components/Header";
import Footer from "./components/Footer";

import AdminDashboard from "./admin/AdminDashboard"; // оболочка админки
import CourseBuilder from "./admin/CourseBuilder";
import CourseList from "./admin/CourseList";
import EditCourse from "./admin/EditCourse";
import DeleteCourse from "./admin/DeleteCourse";

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
