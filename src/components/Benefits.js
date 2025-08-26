import React from "react";
import studentImage from "../img/main/benefits/benefits.png";
class Benefits extends React.Component {
  render() {
    return (
      <section className="benefits">
        <div className="container">
          <div className="benefits__content">
            <h2 className="benefits__title title">ЧТО ВЫ ПОЛУЧАЕТЕ</h2>
            <div className="benefits__row">
              <div className="benefits__image">
                <img src={studentImage} alt="Студент с планшетом" />
              </div>
              <ul className="benefits__list">
                <li className="benefits__item">
                  <div className="benefits__text">
                    <b>ДИПЛОМ</b> о дополнительном профессиональном образовании
                    или переподготовке (имеется лицензия)
                  </div>
                </li>
                <li className="benefits__item">
                  <div className="benefits__text">
                    <b>ВСТУПЛЕНИЕ В КАДРОВЫЙ РЕЗЕРВ ШКОЛЫ</b>, из которого
                    многие компании Сибири нанимают себе сотрудников
                  </div>
                </li>
                <li className="benefits__item">
                  <div className="benefits__text">
                    Первые <b>КОММЕРЧЕСКИЕ ПРОЕКТЫ</b> уже в ходе обучения
                  </div>
                </li>
                <li className="benefits__item">
                  <div className="benefits__text">
                    <b>ПОГРУЖЕНИЕ В РАЗНЫЕ IT-профессии</b> (изучив алгоритмику
                    и основы, легко изучить любой язык программирования в
                    дальнейшем)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Benefits;
