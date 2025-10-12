import React from "react";
import heartIcon from "../img/hero/heart.png";
import nerpaIcon from "../img/hero/nerpa.png";

class Pricing extends React.Component {
  render() {
    const pricingPlans = [
      {
        period: "1 месяц",
        price: "8 000 ₽",
        discount: null,
        description: null,
      },
      {
        period: "3 месяца",
        price: "21 000 ₽",
        discount: "с учетом скидки 3 000 ₽",
        description: null,
        modifier: "center",
      },
      {
        period: "6 месяцев",
        price: "36 000 ₽",
        discount: "с учетом скидки 12 000 ₽",
        description: null,
      },
    ];

    return (
      <section className="pricing">
        <img
          src={heartIcon}
          alt="Сердечко"
          className="pricing__decor pricing__decor--heart"
        />
        <img
          src={heartIcon}
          alt="Сердечко"
          className="pricing__decor pricing__decor--heart2"
        />
        <img
          src={heartIcon}
          alt="Сердечко"
          className="pricing__decor pricing__decor--heart3"
        />
        <img
          src={nerpaIcon}
          alt="Нерпа"
          className="pricing__decor pricing__decor--nerpa"
        />
        <div className="container">
          <div className="pricing__content">
            <h2 className="pricing__title title">
              ВЫБИРАЙТЕ УДОБНЫЙ ДЛЯ ВАС ПЕРИОД И СПОСОБ ОПЛАТЫ
            </h2>

            <div className="pricing__plans">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`pricing__card ${
                    plan.modifier ? `pricing__card--${plan.modifier}` : ""
                  }`}
                >
                  <div className="pricing__period">{plan.period}</div>
                  <div className="pricing__price">{plan.price}</div>
                  <div className="pricing__discount">{plan.discount}</div>
                  {plan.description && (
                    <div className="pricing__description">
                      {plan.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
