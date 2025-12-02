import React from "react";

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
                  <img src="/img/hero/__1.png" alt="Иконка адреса" />
                </div>
                <div className="hero-address__title">
                  АКАДЕМИКА КУРЧАТОВА, 13, ИРКУТСК
                </div>
              </div>
            </div>
            <div className="hero__column hero__column-image">
              <img
                src="/img/hero/heart.png"
                alt="Сердечко"
                className="hero__decor hero__decor--heart"
              />
              <img
                src="/img/hero/nerpa.png"
                alt="Нерпа"
                className="hero__decor hero__decor--nerpa"
              />

              <div className="hero__image">
                <img
                  src="/img/hero/-1jpg-.jpg"
                  alt="IT-центр ВЗЛЕТ"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="hero__address-2">
            <div className="hero-address__icon">
              <img src="/img/hero/__1.png" alt="Иконка адреса" />
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
