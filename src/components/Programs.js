import React from "react";
import { Link } from "react-router-dom";

class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { programs: [] };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => this.setState({ programs: data }));
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
              {programs.map((item) => (
                <div
                  key={item.id}
                  className={`programs__item ${item.modifiers || ""}`}
                >
                  <div className="programs__column">
                    <h3 className="programs__name">{item.title}</h3>
                    <div className="programs__link link">
                      <Link to={`/course/${item.slug}`}>Подробнее</Link>
                    </div>
                  </div>
                  {item.image && (
                    <div className="programs__image ibg">
                      <img src={item.image}/>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Programs;
