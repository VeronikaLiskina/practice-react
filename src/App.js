import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Footer from "./components/Footer";
import Format_study from "./components/Format_study";
import Benefits from "./components/Benefits";
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="content">
          <Hero />
          <About />
          <Programs />
          <Format_study />
          <Benefits />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
