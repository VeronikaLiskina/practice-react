import React from "react";

class FormatSection extends React.Component {
  render() {
    const formatItems = [
      {
        id: 1,
        text: "Онлайн и офлайн обучение",
        img: "/img/main/study-format/pic_1.jpg",
        rotate: "left",
      },
      {
        id: 2,
        text: "Вход в крупнейшее иркутское IT-сообщество",
        img: "/img/main/study-format/pic_2.jpg",
        rotate: "none",
      },
      {
        id: 3,
        text: "Система наставничества",
        img: "/img/main/study-format/pic_3.jpg",
        rotate: "right",
      },
      {
        id: 4,
        text: "Связь с наставником 24/7",
        img: "/img/main/study-format/pic_4.jpg",
        rotate: "strong-left",
      },
      {
        id: 5,
        text: "Мастер-классы, хакатоны, интенсивы от ведущих специалистов",
        img: "/img/main/study-format/pic_5.jpg",
        rotate: "none",
      },
      {
        id: 6,
        text: "Фундаментальное разностороннее обучение",
        img: "/img/main/study-format/pic_6.jpg",
        rotate: "right",
      },
    ];

    return (
      <section className="format-study">
        <div className="container">
          <h2 className="format-study__title title">ФОРМАТ ОБУЧЕНИЯ</h2>
          <div className="format-study__grid">
            {formatItems.map((item) => (
              <div
                key={item.id}
                className={`format-item format-item--rotate-${item.rotate}`}
              >
                <div className="format-item__image">
                  <img src={item.img} alt={item.text} />
                </div>
                <div className="format-item__label">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default FormatSection;
