import React from "react";
import heroIcon from "../img/hero/__1.png";
import heroImage from "../img/hero/-1jpg-.jpg";
import heartIcon from "../img/hero/heart.png";
import nerpaIcon from "../img/hero/nerpa.png";

class Hero extends React.Component {
  render() {
    return (
      <section className="hero" onMouseMove={this.handleMouseMove}>
        <div className="container">
          <div className="hero__row">
            <div className="hero__column">
              <div className="hero__title">
                Готовим к цифровым профессиям взрослых и детей
              </div>
              <h1 className="hero__text">
                <span>IT-центр ВЗЛЕТ</span>
              </h1>
              <div className="hero__address-1">
                <div className="hero-address__icon">
                  <img src={heroIcon} alt="Иконка адреса" />
                </div>
                <div className="hero-address__title">
                  АКАДЕМИКА КУРЧАТОВА, 13, ИРКУТСК
                </div>
              </div>
            </div>
            <div className="hero__column hero__column-image">
              <img
                src={heartIcon}
                alt="Сердечко"
                className="hero__decor hero__decor--heart"
              />
              <img
                src={nerpaIcon}
                alt="Нерпа"
                className="hero__decor hero__decor--nerpa"
              />

              <div className="hero__image">
                <img src={heroImage} alt="IT-центр ВЗЛЕТ" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="hero__address-2">
            <div className="hero-address__icon">
              <img src={heroIcon} alt="Иконка адреса" />
            </div>
            <div className="hero-address__title">
              АКАДЕМИКА КУРЧАТОВА, 13, ИРКУТСК
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
