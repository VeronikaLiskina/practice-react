import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteCourse from "./DeleteCourse";

class CourseList extends Component {
  state = {
    courses: [],
    loading: true,
    error: null,
    deleteModalVisible: false,
    courseToDelete: null,
  };

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses = () => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при загрузке курсов");
        return res.json();
      })
      .then((courses) => this.setState({ courses, loading: false }))
      .catch((err) => this.setState({ error: err.message, loading: false }));
  };

  openDeleteModal = (course) => {
    this.setState({ deleteModalVisible: true, courseToDelete: course });
  };

  closeDeleteModal = () => {
    this.setState({ deleteModalVisible: false, courseToDelete: null });
  };

  deleteCourse = () => {
    const { courseToDelete } = this.state;
    fetch(`http://localhost:5000/api/courses/${courseToDelete.slug}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при удалении");
        this.setState((prev) => ({
          courses: prev.courses.filter((c) => c.slug !== courseToDelete.slug),
          deleteModalVisible: false,
          courseToDelete: null,
        }));
      })
      .catch((err) => alert(err.message));
  };

  render() {
    const { courses, loading, error, deleteModalVisible, courseToDelete } =
      this.state;

    if (loading) return <p>Загрузка курсов...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
      <div className="course-list">
        <h2>Список курсов</h2>
        <Link to="/admin/create" className="btn btn-primary">
          Создать новый курс
        </Link>

        <table className="course-table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Slug</th>
              <th>Модификатор CSS</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.slug}>
                <td>{course.title}</td>
                <td>{course.slug}</td>
                <td>{course.modifiers}</td>
                <td>
                  <Link
                    to={`/admin/edit/${course.slug}`}
                    className="btn btn-secondary"
                  >
                    Редактировать
                  </Link>
                  <button
                    onClick={() => this.openDeleteModal(course)}
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {deleteModalVisible && courseToDelete && (
          <DeleteCourse
            visible={deleteModalVisible}
            onClose={this.closeDeleteModal}
            onConfirm={this.deleteCourse}
            course={courseToDelete}
          />
        )}
      </div>
    );
  }
}

export default CourseList;
