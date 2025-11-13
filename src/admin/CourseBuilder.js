import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";

function withRouter(ComponentClass) {
  return function Wrapped(props) {
    const params = useParams();
    const navigate = useNavigate();
    return <ComponentClass {...props} params={params} navigate={navigate} />;
  };
}

class CourseBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      slug: "",
      image: "",
      modifiers: "",
      order: 0,
      intro: { title: "", text: "", buttonText: "" },
      infoBlock: { title: "", text: "", items: [""] },
      pricing: [{ period: "", price: "", discount: "", badge: "" }],
      faq: [{ question: "", answer: "" }],
      loading: false,
      error: null,
    };
  }

  async componentDidMount() {
    const { isEdit, params } = this.props;

    if (isEdit && params.slug) {
      try {
        this.setState({ loading: true });
        const res = await fetch(`http://localhost:5000/api/courses/${params.slug}`);
        if (!res.ok) throw new Error("Курс не найден");
        const course = await res.json();

        this.setState({
          title: course.title,
          slug: course.slug,
          image: course.image,
          modifiers: course.modifiers,
          order: course.order || 0,
          intro: course.sections?.intro || { title: "", text: "", buttonText: "" },
          infoBlock: course.sections?.infoBlock || { title: "", text: "", items: [""] },
          pricing: course.sections?.pricing?.plans || [{ period: "", price: "", discount: "", badge: "" }],
          faq: course.sections?.faq?.questions || [{ question: "", answer: "" }],
          loading: false,
        });
      } catch (err) {
        this.setState({ error: err.message, loading: false });
      }
    }
  }

  // ======== ОБРАБОТЧИКИ =========
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleIntroChange = (e) => {
    this.setState({
      intro: { ...this.state.intro, [e.target.name]: e.target.value },
    });
  };

  handleInfoItemChange = (index, value) => {
    const items = [...this.state.infoBlock.items];
    items[index] = value;
    this.setState({ infoBlock: { ...this.state.infoBlock, items } });
  };

  addInfoItem = () => {
    this.setState({
      infoBlock: {
        ...this.state.infoBlock,
        items: [...this.state.infoBlock.items, ""],
      },
    });
  };

  handlePricingChange = (index, e) => {
    const updated = [...this.state.pricing];
    updated[index][e.target.name] = e.target.value;
    this.setState({ pricing: updated });
  };

  addPricingPlan = () => {
    this.setState({
      pricing: [
        ...this.state.pricing,
        { period: "", price: "", discount: "", badge: "" },
      ],
    });
  };

  handleFAQChange = (index, e) => {
    const updated = [...this.state.faq];
    updated[index][e.target.name] = e.target.value;
    this.setState({ faq: updated });
  };

  addFAQ = () => {
    this.setState({
      faq: [...this.state.faq, { question: "", answer: "" }],
    });
  };

  // ======== СОХРАНЕНИЕ =========
  handleSave = async () => {
    const { isEdit, navigate, params } = this.props;

    const newCourse = {
      id: `${this.state.slug}-id`,
      slug: this.state.slug,
      title: this.state.title,
      image: this.state.image,
      modifiers: this.state.modifiers,
      order: Number(this.state.order),
      sections: {
        intro: this.state.intro,
        infoBlock: this.state.infoBlock,
        pricing: { title: "ВЫБЕРИТЕ ТАРИФ", plans: this.state.pricing },
        faq: { questions: this.state.faq },
      },
    };

    try {
      const response = await fetch(
        isEdit
          ? `http://localhost:5000/api/courses/${params.slug}`
          : "http://localhost:5000/api/courses",
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCourse),
        }
      );

      if (!response.ok) throw new Error("Ошибка при сохранении курса");

      alert(isEdit ? "✅ Курс обновлён!" : "✅ Курс успешно создан!");
      navigate("/admin");
    } catch (error) {
      console.error("Ошибка:", error);
      alert("❌ Не удалось сохранить курс");
    }
  };

  // ======== РЕНДЕР =========
  render() {
    const {
      title,
      slug,
      image,
      modifiers,
      order,
      intro,
      infoBlock,
      pricing,
      faq,
      loading,
      error,
    } = this.state;
    const { isEdit } = this.props;

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
      <div className="course-builder">
        <div className="container">
          <h2 className="course-builder__title title">
            {isEdit ? "✏️ Редактировать курс" : "🛠 Конструктор курса"}
          </h2>

          {/* Основная информация */}
          <div className="course-builder__block">
            <h3 className="course-builder__subtitle">Основная информация</h3>
            <input
              name="title"
              value={title}
              onChange={this.handleChange}
              placeholder="Название"
            />
            <input
              name="slug"
              value={slug}
              onChange={this.handleChange}
              placeholder="Slug (URL)"
              disabled={isEdit} // при редактировании slug менять нельзя
            />
            <input
              name="image"
              value={image}
              onChange={this.handleChange}
              placeholder="Ссылка на картинку"
            />
            <input
              name="modifiers"
              value={modifiers}
              onChange={this.handleChange}
              placeholder="CSS модификатор"
            />
            <input
              name="order"
              type="number"
              value={order}
              onChange={this.handleChange}
              placeholder="Порядок отображения"
            />
          </div>

          {/* Intro */}
          <div className="course-builder__block">
            <h3 className="course-builder__subtitle">Intro</h3>
            <input
              name="title"
              value={intro.title}
              onChange={this.handleIntroChange}
              placeholder="Заголовок Intro"
            />
            <textarea
              name="text"
              value={intro.text}
              onChange={this.handleIntroChange}
              placeholder="Текст Intro"
            />
            <input
              name="buttonText"
              value={intro.buttonText}
              onChange={this.handleIntroChange}
              placeholder="Текст кнопки"
            />
          </div>

          {/* InfoBlock */}
          <div className="course-builder__block">
            <h3 className="course-builder__subtitle">InfoBlock</h3>
            <input
              value={infoBlock.title}
              onChange={(e) =>
                this.setState({
                  infoBlock: { ...infoBlock, title: e.target.value },
                })
              }
              placeholder="Заголовок InfoBlock"
            />
            <textarea
              value={infoBlock.text}
              onChange={(e) =>
                this.setState({
                  infoBlock: { ...infoBlock, text: e.target.value },
                })
              }
              placeholder="Текст InfoBlock"
            />
            <h4 className="course-builder__label">Пункты списка:</h4>
            {infoBlock.items.map((item, index) => (
              <input
                key={index}
                value={item}
                onChange={(e) =>
                  this.handleInfoItemChange(index, e.target.value)
                }
                placeholder={`Пункт ${index + 1}`}
              />
            ))}
            <button onClick={this.addInfoItem}>+ Добавить пункт</button>
          </div>

          {/* Pricing */}
          <div className="course-builder__block">
            <h3 className="course-builder__subtitle">Pricing</h3>
            {pricing.map((plan, index) => (
              <div key={index}>
                <input
                  name="period"
                  placeholder="Период"
                  value={plan.period}
                  onChange={(e) => this.handlePricingChange(index, e)}
                />
                <input
                  name="price"
                  placeholder="Цена"
                  value={plan.price}
                  onChange={(e) => this.handlePricingChange(index, e)}
                />
                <input
                  name="discount"
                  placeholder="Скидка"
                  value={plan.discount}
                  onChange={(e) => this.handlePricingChange(index, e)}
                />
                <input
                  name="badge"
                  placeholder="Бейдж"
                  value={plan.badge}
                  onChange={(e) => this.handlePricingChange(index, e)}
                />
              </div>
            ))}
            <button onClick={this.addPricingPlan}>+ Добавить тариф</button>
          </div>

          {/* FAQ */}
          <div className="course-builder__block">
            <h3 className="course-builder__subtitle">FAQ</h3>
            {faq.map((q, index) => (
              <div key={index}>
                <input
                  name="question"
                  placeholder="Вопрос"
                  value={q.question}
                  onChange={(e) => this.handleFAQChange(index, e)}
                />
                <textarea
                  name="answer"
                  placeholder="Ответ"
                  value={q.answer}
                  onChange={(e) => this.handleFAQChange(index, e)}
                />
              </div>
            ))}
            <button onClick={this.addFAQ}>+ Добавить вопрос</button>
          </div>

          <button
            className="course-builder__save-btn"
            onClick={this.handleSave}
          >
            💾 {isEdit ? "Сохранить изменения" : "Сохранить курс"}
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(CourseBuilder);
