import React, { Component } from "react";

export default class Teachers extends Component {
  state = {
    current: 0,
  };

  teachers = [
    {
      img: "public/img/main/teachers/teacher1.jpg",
      name: "Юрий Басиров",
      position: "Директор школы",
    },
    {
      img: "public/img/main/teachers/teacher2.jpg",
      name: "Никита Прокопьев",
      position: "Управляющий школы, преподаватель проектного менеджмента",
    },
    {
      img: "public/img/main/teachers/teacher3.jpg",
      name: "Светлана Пещерова",
      position:
        "Партнёр академии, преподаватель курса Методы машинного обучения",
    },
    {
      img: "public/img/main/teachers/teacher4.jpg",
      name: "Юлия Высоцкая",
      position: "Преподаватель курса графического дизайна",
    },
    {
      img: "public/img/main/teachers/teacher5.jpg",
      name: "Адольф Карпеюс",
      position: "Преподаватель системного администрирования",
    },
    {
      img: "public/img/main/teachers/teacher6.jpg",
      name: "Сергей Быков",
      position: "Преподаватель курса алгоритмики и программирования",
    },
    {
      img: "public/img/main/teachers/teacher7.jpg",
      name: "Сергей Заремба",
      position: "Преподаватель курса конструирования и электроники",
    },
  ];

  next = () => {
    this.setState(({ current }) => ({
      current: (current + 1) % this.teachers.length,
    }));
  };

  prev = () => {
    this.setState(({ current }) => ({
      current: (current - 1 + this.teachers.length) % this.teachers.length,
    }));
  };

  render() {
    const { current } = this.state;
    const total = this.teachers.length;

    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;

    return (
      <div className="teachers">
        <div className="container">
          <h2 className="teachers__title title">ПРЕПОДАВАТЕЛИ</h2>

          <div className="teachers__slider">
            {this.teachers.map((t, index) => {
              const isActive = index === current;
              const isPrev = index === prevIndex;
              const isNext = index === nextIndex;

              return (
                <div
                  key={index}
                  className={` teachers__slide 
                  ${isActive ? "teachers__slide teachers__slide--active" : ""}
                  ${isPrev ? "teachers__slide teachers__slide--prev" : ""}
                  ${isNext ? "teachers__slide teachers__slide--next" : ""}
                `}
                >
                  <img className="teachers__img" src={t.img} alt={t.name} />
                  <div className="teachers__info">
                    <h3 className="teachers__name">{t.name}</h3>
                    <p className="teachers__position"> {t.position}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="teachers__controls">
          <button onClick={this.prev}>{"<<"}</button>
          <button onClick={this.next}>{">>"}</button>
        </div>
      </div>
    );
  }
}
