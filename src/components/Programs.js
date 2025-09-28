import React from "react";
import { Link } from "react-router-dom";
import WebProgramImage from "../img/main/programs/1_.png.webp";
import ProgramCampImage from "../img/main/programs/camp.webp";

class Programs extends React.Component {
  render() {
    const programItems = [
      {
        id: 1,
        title: "ВЕБ-ПРОГРАММИРОВАНИЕ ДЛЯ ВЗРОСЛЫХ",
        className: "program-web",
        modifier: "full-width",
        image: WebProgramImage,
        path: "/web-programming"
      },
      {
        id: 2,
        title: "1C ПРОГРАММИРОВАНИЕ",
        className: "program-1c",
        path: "/1c-programming"
      },
      {
        id: 3,
        title: "JAVA ENTERPRISE",
        className: "program-java", 
        path: "/java"
      },
      {
        id: 4,
        title: "ЛЕТНИЙ ЛАГЕРЬ ДЛЯ ДЕТЕЙ",
        className: "program-camp",
        modifier: "full-width",
        image: ProgramCampImage,
        path: "/camp"
      }
    ];

    return (
      <section id="programs" className="programs">
        <div className="container">
          <div className="programs__body">
            <div className="programs__header">
              <h2 className="programs__title title">Программы обучения</h2>
              <p className="programs__description">
                Обучающий процесс построен в виде образовательных траекторий из
                нескольких направлений, которые позволят подготовить ученика с
                разных сторон
              </p>
            </div>
            <div className="programs__gallery">
              {programItems.map((item) => (
                <div
                  key={item.id}
                  className={`programs__item ${item.className} ${
                    item.modifier ? `programs__item--${item.modifier}` : ""
                  }`}
                >
                  <div className="programs__column">
                    <h3 className="programs__name">{item.title}</h3>
                    <div className="programs__link link">
                      <Link to={item.path}>Подробнее</Link>
                    </div>
                  </div>
                  {item.modifier && (
                    <div className="programs__image ibg">
                      <img src={item.image} alt={item.title} />
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