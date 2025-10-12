import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <section className="contact">
        <div className="container">
          <h2 className="contact__title">ХОТИТЕ УЗНАТЬ ПОДРОБНОСТИ?</h2>
          <p className="contact__subtitle">
            Оставьте заявку и мы свяжемся с вами
          </p>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className="contact__input"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Ваш телефон"
              className="contact__input"
              required
            />
            <input
              type="text"
              name="nameAndAge"
              placeholder="Имя и возраст ребенка"
              className="contact__input"
              required
            />
            <button type="submit" className="contact__button">
              Отправить
            </button>
          </form>

          <p className="contact__privacy">
            «Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь с политикой конфиденциальности»
          </p>
        </div>
      </section>
    );
  }
}

export default ContactForm;
