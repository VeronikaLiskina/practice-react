import Intro from "../../../components/Intro";
import React from "react";
import webImage from "../../../img/main/WebProg/web.webp";
class WebProgramming extends React.Component {
  render() {
    return (
      <Intro
        title="ВЕБ-ПРОГРАММИРОВАНИЕ ДЛЯ ВЗРОСЛЫХ"
        image={webImage}
        text="Базовый курс для тех, кто хочет начать изучать IT с нуля или перейти в IT из других профессий."
        button={<a href="#">Приобрести курс</a>}
        modifiers="web-program"
      />
    );
  }
}

export default WebProgramming;
