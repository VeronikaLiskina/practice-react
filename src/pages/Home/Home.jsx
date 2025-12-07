import React from "react";
import Hero from "../../components/Hero.jsx";
import About from "../../components/About.jsx";
import Programs from "../../components/Programs.jsx";
import FormatStudy from "../../components/FormatStudy.jsx";
import Benefits from "../../components/Benefits.jsx";
import Teachers from "../../components/Teachers.jsx";
class Home extends React.Component {
  render() {
    return (
      <div>
        <main className="content">
          <Hero />
          <About />
          <Programs />
          <FormatStudy />
          <Teachers />
          <Benefits />
        </main>
      </div>
    );
  }
}

export default Home;
