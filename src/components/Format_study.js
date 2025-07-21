import React from "react";
import Image1 from "../img/main/study-format/pic_1.jpg";
import Image2 from "../img/main/study-format/pic_2.jpg";
import Image3 from "../img/main/study-format/pic_3.jpg";
import Image4 from "../img/main/study-format/pic_4.jpg";
import Image5 from "../img/main/study-format/pic_5.jpg";
import Image6 from "../img/main/study-format/pic_6.jpg";
class FormatSection extends React.Component {
  render() {
    const formatItems = [
      {
        id: 1,
        text: "Онлайн и офлайн обучение",
        img: Image1,
        rotate: "left",
      },
      {
        id: 2,
        text: "Вход в крупнейшее иркутское IT-сообщество",
        img: Image2,
        rotate: "none",
      },
      {
        id: 3,
        text: "Система наставничества",
        img: Image3,
        rotate: "right",
      },
      {
        id: 4,
        text: "Связь с наставником 24/7",
        img: Image4,
        rotate: "strong-left",
      },
      {
        id: 5,
        text: "Мастер-классы, хакатоны, интенсивы от ведущих специалистов",
        img: Image5,
        rotate: "none",
      },
      {
        id: 6,
        text: "Фундаментальное разностороннее обучение",
        img: Image6,
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
