import React from "react";

class InfoBlock extends React.Component {
  render() {
    const { title, text, items = [] } = this.props;

    return (
      <section className="info-block">
        <div className="container">
          <div className="info-block__content">
            {title && <h2 className="info-block__title title">{title}</h2>}
            {text && <p className="info-block__text">{text}</p>}

            {items.length > 0 && (
              <ul className="info-block__list">
                {items.map((item, index) => (
                  <li key={index} className="info-block__item">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default InfoBlock;
