import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Programs from "../../components/Programs";
import FormatStudy from "../../components/FormatStudy";
import Benefits from "../../components/Benefits";

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
