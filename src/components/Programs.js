import React from "react";

class Programs extends React.Component {
  render() {
    const programItems = [
      {
        id: 1,
        title: "ВЕБ-ПРОГРАММИРОВАНИЕ ДЛЯ ВЗРОСЛЫХ",
        className: "program-web",
        modifier: "full-width", // Модификатор для полной ширины
      },
      {
        id: 2,
        title: "1C ПРОГРАММИРОВАНИЕ",
        className: "program-1c",
      },
      {
        id: 3,
        title: "ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ",
        className: "program-ai",
      },
      {
        id: 4,
        title: "ЛЕТНИЙ ЛАГЕРЬ ДЛЯ ДЕТЕЙ",
        className: "program-camp",
        modifier: "full-width", // Модификатор для полной ширины
      },
      {
        id: 5,
        title: "ЭЛЕКТРОНИКА",
        className: "program-electronics",
      },
      {
        id: 6,
        title: "JAVA ENTERPRISE",
        className: "program-java",
      },
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
                  <h3 className="programs__name">{item.title}</h3>
                  <div className="programs__link">
                    <a href="#">Подробнее</a>
                  </div>
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
