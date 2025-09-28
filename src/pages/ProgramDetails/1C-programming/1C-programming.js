import Intro from "../../../components/Intro";
import React from "react";
import Image1C from "../../../img/main/1C-prog/1c.webp";
class Prog1C extends React.Component {
  render() {
    return (
      <Intro
        title="1С Программист"
        image={Image1C}
        text="Платформа «1С:Предприятие» — это мощный инструмент, который позволяет автоматизировать ключевые бизнес-процессы и эффективно решать учетные задачи вашей компании. Будь то бухгалтерия, управление кадрами или комплексное управление предприятием, «1С:Предприятие» предоставляет все необходимые функции для оптимизации работы и повышения продуктивности."
        button={<a href="#">Приобрести курс</a>}
        modifiers="1C-program"
      />
    );
  }
}

export default Prog1C;
