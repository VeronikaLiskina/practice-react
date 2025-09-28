import Intro from "../../../components/Intro";
import React from "react";
import javaImage from "../../../img/main/java/java.webp";
class Java extends React.Component {
  render() {
    return (
      <Intro
        title="JAVA Enterprise"
        image={javaImage}
        text="Java — один из самых востребованных языков программирования. Благодаря своей надежности и широкой экосистеме, Java выбирают такие компании, как Яндекс, Google, Facebook, Netflix и Amazon. Особенно он популярен в финансовом секторе, где критически важна стабильность."
        button={<a href="#">Приобрести курс</a>}
        modifiers="java-program"
      />
    );
  }
}

export default Java;
