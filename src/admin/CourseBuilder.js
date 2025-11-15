// CourseBuilder.js
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
      modifiers: "",
      order: 0,

      // Intro с image по умолчанию
      intro: { title: "", text: "", buttonText: "", image: "" },

      infoBlock: { title: "", text: "", items: [""] },
      pricing: [{ period: "", price: "", discount: "" }], // ← badge удалён
      faq: [{ question: "", answer: "" }],

      // Design
      design: { backgroundColor: "", backgroundImage: "" },

      loading: false,
      error: null,
    };
  }

  async componentDidMount() {
    const { isEdit, params } = this.props;

    if (isEdit && params.slug) {
      try {
        this.setState({ loading: true });
        const res = await fetch(
          `http://localhost:5000/api/courses/${params.slug}`
        );
        if (!res.ok) throw new Error("Курс не найден");
        const course = await res.json();

        // Преобразуем pricing, игнорируя badge
        const pricing = course.sections?.pricing?.plans?.map((plan) => ({
          period: plan.period || "",
          price: plan.price || "",
          discount: plan.discount || "",
        })) || [{ period: "", price: "", discount: "" }];

        this.setState({
          title: course.title,
          slug: course.slug,
          modifiers: course.modifiers,
          order: course.order || 0,

          intro: course.sections?.intro || {
            title: "",
            text: "",
            buttonText: "",
            image: "",
          },

          infoBlock: course.sections?.infoBlock || {
            title: "",
            text: "",
            items: [""],
          },

          pricing,

          faq: course.sections?.faq?.questions || [
            { question: "", answer: "" },
          ],

          design: course.sections?.design || {
            backgroundColor: "",
            backgroundImage: "",
          },

          loading: false,
        });
      } catch (err) {
        this.setState({ error: err.message, loading: false });
      }
    }
  }

  // ========= HANDLERS =========
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
        { period: "", price: "", discount: "" }, // ← без badge
      ],
    });
  };

  handleFAQChange = (index, e) => {
    const updated = [...this.state.faq];
    updated[index][e.target.name] = e.target.value;
    this.setState({ faq: updated });
  };

  addFAQ = () => {
    this.setState({ faq: [...this.state.faq, { question: "", answer: "" }] });
  };

  handleDesignChange = (key, value) => {
    this.setState({ design: { ...this.state.design, [key]: value } });
  };

  // ========= SAVE =========
  handleSave = async () => {
    const { isEdit, navigate, params } = this.props;

    const newCourse = {
      id: `${this.state.slug}-id`,
      slug: this.state.slug,
      title: this.state.title,
      modifiers: this.state.modifiers,
      order: Number(this.state.order),
      sections: {
        intro: this.state.intro,
        infoBlock: this.state.infoBlock,
        pricing: { title: "ВЫБЕРИТЕ ТАРИФ", plans: this.state.pricing },
        faq: { questions: this.state.faq },
        design: this.state.design,
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

      alert(isEdit ? "Курс обновлён!" : "Курс создан!");
      navigate("/admin");
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось сохранить курс");
    }
  };

  // ========= RENDER =========
  render() {
    const {
      title,
      slug,
      modifiers,
      order,
      intro,
      infoBlock,
      pricing,
      faq,
      design,
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
            {isEdit ? " Редактировать курс" : " Конструктор курса"}
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
              disabled={isEdit}
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
            <input
              name="backgroundColor"
              value={design.backgroundColor}
              onChange={(e) =>
                this.handleDesignChange("backgroundColor", e.target.value)
              }
              placeholder="Цвет фона (#RRGGBB)"
            />
            <input
              name="backgroundImage"
              value={design.backgroundImage}
              onChange={(e) =>
                this.handleDesignChange("backgroundImage", e.target.value)
              }
              placeholder="Путь к картинке"
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
            <input
              name="image"
              value={intro.image}
              onChange={this.handleIntroChange}
              placeholder="Ссылка на картинку Intro"
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
            <h4>Пункты списка:</h4>
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

          {/* Pricing — без badge */}
          <div className="course-builder__block">
            <h3 className="course-builder__subtitle">Pricing</h3>
            {pricing.map((plan, index) => (
              <div key={index} className="course-builder__pricing-plan">
                <input
                  name="period"
                  value={plan.period}
                  onChange={(e) => this.handlePricingChange(index, e)}
                  placeholder="Период"
                />
                <input
                  name="price"
                  value={plan.price}
                  onChange={(e) => this.handlePricingChange(index, e)}
                  placeholder="Цена"
                />
                <input
                  name="discount"
                  value={plan.discount}
                  onChange={(e) => this.handlePricingChange(index, e)}
                  placeholder="Скидка"
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
                  value={q.question}
                  onChange={(e) => this.handleFAQChange(index, e)}
                  placeholder="Вопрос"
                />
                <textarea
                  name="answer"
                  value={q.answer}
                  onChange={(e) => this.handleFAQChange(index, e)}
                  placeholder="Ответ"
                />
              </div>
            ))}
            <button onClick={this.addFAQ}>+ Добавить вопрос</button>
          </div>

          <button
            className="course-builder__save-btn"
            onClick={this.handleSave}
          >
            {isEdit ? "Сохранить изменения" : "Сохранить курс"}
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(CourseBuilder);
