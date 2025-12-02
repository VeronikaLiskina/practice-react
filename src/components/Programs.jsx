import React, { Component } from "react";
import { Link } from "react-router-dom";

class Programs extends Component {
  state = {
    programs: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:5000/api/courses");
      const programs = await res.json();
      this.setState({ programs });
    } catch (err) {
      console.error("Ошибка загрузки курсов:", err);
    }
  }

  render() {
    const { programs } = this.state;

    return (
      <section id="programs" className="programs">
        <div className="container">
          <div className="programs__body">
            <div className="programs__header">
              <h2 className="programs__title title">Программы обучения</h2>
              <p className="programs__description">
                Образовательные траектории для старта в IT
              </p>
            </div>

            <div className="programs__gallery">
              {programs.map((item, index) => {
                const isFullWidth = index % 3 === 0;

                return (
                  <div
                    key={item.id}
                    className={`programs__item ${item.modifiers || ""} ${
                      isFullWidth ? "programs__item--full-width" : ""
                    }`}
                    style={{
                      backgroundColor: item.sections?.design?.backgroundColor,
                      backgroundImage: item.sections?.design?.backgroundImage
                        ? `url(${item.sections.design.backgroundImage})`
                        : "none",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right",
                    }}
                  >
                    <div className="programs__column">
                      <h3 className="programs__name">{item.title}</h3>
                      <div className="programs__link link">
                        <Link to={`/course/${item.slug}`}>Подробнее</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Programs;
