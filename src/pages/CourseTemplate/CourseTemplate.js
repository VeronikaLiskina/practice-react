import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Intro from "../../components/Intro.js";
import InfoBlock from "../../components/InfoBlock.js";
import Pricing from "../../components/Pricing.js";
import FAQ from "../../components/FAQ.js";
import ContactForm from "../../components/ContactForm.js";

function withParams(ComponentClass) {
  return function WrappedComponent(props) {
    const params = useParams();
    return <ComponentClass {...props} params={params} />;
  };
}

class CourseTemplate extends Component {
  state = {
    course: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.loadCourse();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.slug !== this.props.params.slug) {
      this.loadCourse();
    }
  }

  loadCourse = () => {
    const { slug } = this.props.params;
    this.setState({ loading: true, error: null });

    fetch(`http://localhost:5000/api/courses/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Курс не найден");
        return res.json();
      })
      .then((course) => this.setState({ course, loading: false }))
      .catch((err) => this.setState({ error: err.message, loading: false }));
  };

  render() {
    const { course, loading, error } = this.state;

    if (loading) return <p>Загрузка курса...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!course) return <h1>Курс не найден</h1>;

    const { sections } = course;

    return (
      <>
        <Intro
          title={sections.intro.title}
          image={`http://localhost:5000${sections.intro.image}`}
          text={sections.intro.text}
          button={<a href="#pricing">{sections.intro.buttonText}</a>}
          modifiers={course.modifiers}
        />

        <InfoBlock
          title={sections.infoBlock.title}
          text={sections.infoBlock.text}
          items={sections.infoBlock.items}
        />

        <Pricing
          title={sections.pricing.title}
          plans={sections.pricing.plans}
        />

        <FAQ questions={sections.faq.questions} />

        <ContactForm />
      </>
    );
  }
}

export default withParams(CourseTemplate);
