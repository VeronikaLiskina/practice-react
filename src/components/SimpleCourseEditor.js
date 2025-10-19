// admin/SimpleCourseEditor.jsx
import React, { useState } from 'react';

const SimpleCourseEditor = () => {
  const [course, setCourse] = useState({
    id: '',
    title: '',
    intro: { title: '', text: '' },
    infoBlock: { title: '', text: '', items: [''] },
    pricing: { title: '', plans: [{ period: '', price: '' }] },
    faq: [{ question: '', answer: '' }]
  });

  const saveCourse = () => {
    // Здесь сохраняем в JSON файл
    console.log('Сохранен курс:', course);
    alert('Курс сохранен!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Редактор курса</h2>
      
      <div>
        <h3>Основная информация</h3>
        <input 
          placeholder="ID курса" 
          value={course.id}
          onChange={e => setCourse({...course, id: e.target.value})}
        />
        <input 
          placeholder="Название курса" 
          value={course.title}
          onChange={e => setCourse({...course, title: e.target.value})}
        />
      </div>

      <div>
        <h3>Блок Intro</h3>
        <input 
          placeholder="Заголовок" 
          value={course.intro.title}
          onChange={e => setCourse({
            ...course, 
            intro: {...course.intro, title: e.target.value}
          })}
        />
        <textarea 
          placeholder="Текст" 
          value={course.intro.text}
          onChange={e => setCourse({
            ...course, 
            intro: {...course.intro, text: e.target.value}
          })}
        />
      </div>

      {/* ... остальные поля ... */}

      <button onClick={saveCourse}>Сохранить курс</button>
    </div>
  );
};