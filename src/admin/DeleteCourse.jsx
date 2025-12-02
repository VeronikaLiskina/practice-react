import React, { Component } from "react";

class DeleteCourse extends Component {
  render() {
    const { visible, onClose, onConfirm, course } = this.props;
    if (!visible) return null;

    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Удалить курс?</h2>
          <p>
            Вы действительно хотите удалить курс: <b>{course.title}</b>?
          </p>
          <div className="modal-actions">
            <button onClick={onConfirm} className="btn btn-danger">
              Удалить
            </button>
            <button onClick={onClose} className="btn">
              Отмена
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteCourse;
