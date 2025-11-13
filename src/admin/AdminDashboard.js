// AdminDashboard.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => (
  <div className="admin-dashboard">
    <aside className="admin-sidebar">
      <h2>Админка</h2>
      <nav>
        <Link to="/admin">Все курсы</Link>
        <Link to="/admin/create">Создать курс</Link>
      </nav>
    </aside>

    <section className="admin-content">
      <Outlet /> {/* Здесь будут подстраницы */}
    </section>
  </div>
);

export default AdminDashboard;
