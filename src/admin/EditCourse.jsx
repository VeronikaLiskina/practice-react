import React, { Component } from "react";
import { useParams } from "react-router-dom";

function withParams(ComponentClass) {
  return (props) => {
    const params = useParams();
    return <ComponentClass {...props} params={params} />;
  };
}

class EditCourse extends Component {
  state = {
    course: null,
    title: "",
    slug: "",
    modifiers: "",
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchCourse();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.slug !== this.props.params.slug) {
      this.fetchCourse();
    }
  }

  fetchCourse = () => {
    const { slug } = this.props.params;
    this.setState({ loading: true, error: null });

    fetch(`http://localhost:5000/api/courses/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Курс не найден");
        return res.json();
      })
      .then((course) =>
        this.setState({
          course,
          title: course.title,
          slug: course.slug,
          modifiers: course.modifiers,
          loading: false,
        })
      )
      .catch((err) =>
        this.setState({ error: err.message, loading: false })
      );
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  save = () => {
    const { course, title, slug, modifiers } = this.state;
    const updatedCourse = { ...course, title, slug, modifiers };

    fetch(`http://localhost:5000/api/courses/${course.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCourse),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при сохранении");
        alert("Курс успешно сохранён!");
      })
      .catch((err) => alert(err.message));
  };

  render() {
    const { loading, error, title, slug, modifiers } = this.state;

    if (loading) return <p>Загрузка курса...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
      <div className="edit-course">
        <h2>Редактировать курс</h2>

        <label>Название</label>
        <input name="title" value={title} onChange={this.handleChange} />

        <label>Slug</label>
        <input name="slug" value={slug} onChange={this.handleChange} />

        <label>CSS модификатор</label>
        <input
          name="modifiers"
          value={modifiers}
          onChange={this.handleChange}
        />

        <div className="actions">
          <button className="btn btn-primary" onClick={this.save}>
            Сохранить
          </button>
        </div>
      </div>
    );
  }
}

export default withParams(EditCourse);
