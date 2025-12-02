// CourseList.js
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
    const slug = courseToDelete.slug || "";
    fetch(`http://localhost:5000/api/courses/${slug}`, {
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

    if (loading)
      return <p className="course-list__message">Загрузка курсов...</p>;
    if (error)
      return (
        <p className="course-list__message course-list__message--error">
          {error}
        </p>
      );

    return (
      <div className="course-list">
        <div className="course-list__header">
          <h2>Список курсов</h2>
          <Link to="/admin/create" className="btn btn-primary">
            Создать новый курс
          </Link>
        </div>

        {courses.length === 0 ? (
          <p className="course-list__message">Нет курсов</p>
        ) : (
          <div className="course-list__grid">
            {courses.map((course) => (
              <div className="course-card">
                <h3 className="course-card__title">{course.title}</h3>

                <div className="course-card__info">
                  <div className="course-card__field">
                    <strong>Slug:</strong>{" "}
                    <code className="course-card__code">{course.slug}</code>
                  </div>
                  <div className="course-card__field">
                    <strong>Модификатор:</strong>{" "}
                    {course.modifiers || <em>—</em>}
                  </div>
                </div>

                <div className="course-card__actions">
                  <Link
                    to={`/admin/edit/${course.slug}`}
                    className="btn btn-secondary"
                  >
                    Редактировать
                  </Link>
                  <button
                    onClick={() => this.openDeleteModal(course)}
                    className="btn btn-danger"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

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
