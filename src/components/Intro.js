import React from "react";

class Intro extends React.Component {
  handleBackClick = () => {
    window.history.back();
  };
  render() {
    const { title, image, button, text, modifiers, theme } = this.props;
    return (
      <section className={`intro intro--${modifiers} intro--theme-${theme}`}>
        <div className="intro__back-button">
          <button className="btn-back" onClick={this.handleBackClick}>
            Назад
          </button>
        </div>
        <div className="container">
          <div className="intro__content">
            <h2 className="intro__title blue-title">
              <span>{title}</span>
            </h2>

            <div className="intro__row">
              <div className="intro__column">
                {/* Кнопка */}
                <div className="intro__button link">{button}</div>

                {/* Текст */}
                <div className="intro__text">{text}</div>
              </div>
              {/* Картинка */}
              <div className="intro__image">
                <img src={image} alt={title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
