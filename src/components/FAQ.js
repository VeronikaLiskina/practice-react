import React from "react";

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  toggleQuestion = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    const { questions = [] } = this.props;
    const { activeIndex } = this.state;

    return (
      <section className="faq">
        <div className="container">
          <h2 className="faq__title title">Часто задаваемые вопросы</h2>

          <div className="faq__list">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`faq__item ${
                  activeIndex === index ? "faq__item--active" : ""
                }`}
              >
                <button
                  className="faq__question"
                  onClick={() => this.toggleQuestion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="faq__question-text">
                    {question.question}
                  </span>
                  <span className="faq__icon">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L8 8L15 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div className="faq__answer">
                  <div className="faq__answer-content">{question.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;
