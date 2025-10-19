// pages/DynamicCourse.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Импортируем ваши компоненты
import Intro from "../components/Intro";
import InfoBlock from "../components/InfoBlock"; 
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";

// Импортируем данные курсов
import webCourse from '../data/courses/web-development.json';
import javaCourse from '../data/courses/java.json';
import cCourse from '../data/courses/1c.json';

// Объект со всеми курсами
const allCourses = {
  'web-development': webCourse,
  'java': javaCourse, 
  '1c': cCourse
};

// Функция для поиска курса по slug (для URL)
const findCourseBySlug = (slug) => {
  return Object.values(allCourses).find(course => course.slug === slug);
};

const DynamicCourse = () => {
  const { courseSlug } = useParams();
  
  // Находим курс по slug из URL
  const course = findCourseBySlug(courseSlug);

  if (!course) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Курс не найден</h2>
        <p>Курс с адресом "{courseSlug}" не существует.</p>
      </div>
    );
  }

  const { sections, image, modifiers } = course;

  return (
    <>
      {/* Блок Intro */}
      <Intro
        title={sections.intro.title}
        image={image}
        text={sections.intro.text}
        button={<a href="#pricing">{sections.intro.buttonText}</a>}
        modifiers={modifiers}
      />

      {/* Информационный блок */}
      <InfoBlock
        title={sections.infoBlock.title} 
        text={sections.infoBlock.text}
        items={sections.infoBlock.items}
      />

      {/* Цены */}
      <Pricing
        title={sections.pricing.title}
        plans={sections.pricing.plans}
      />

      {/* FAQ */}
      <FAQ questions={sections.faq.questions} />

      {/* Форма обратной связи */}
      <ContactForm />
    </>
  );
};

export default DynamicCourse;