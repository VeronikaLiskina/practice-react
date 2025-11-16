import React from "react";
import Hero from "../../components/Hero.js";
import About from "../../components/About.js";
import Programs from "../../components/Programs.js";
import FormatStudy from "../../components/FormatStudy.js";
import Benefits from "../../components/Benefits.js";

class Home extends React.Component {
  render() {
    return (
      <div>
        <main className="content">
          <Hero />
          <About />
          <Programs />
          <FormatStudy />
          <Benefits />
        </main>
      </div>
    );
  }
}

export default Home;
