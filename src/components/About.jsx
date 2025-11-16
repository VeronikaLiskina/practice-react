
import React from 'react';
import PhotoSlider from './PhotoSlider.js';

class About extends React.Component {
  componentDidMount() {
    this.aboutSection = document.querySelector('.about');
    if (this.aboutSection) {
      this.aboutSection.addEventListener('mousemove', this.handleMouseMove);
    }
  }

  componentWillUnmount() {
    if (this.aboutSection) {
      this.aboutSection.removeEventListener('mousemove', this.handleMouseMove);
    }
  }

  handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    container.style.setProperty('--mouse-x', x);
    container.style.setProperty('--mouse-y', y);
  }

  render() {
    return (
      <section className="about">
        <div className="container">
          <h2 className="about__title">О центре</h2>
          <div className="about__row">
            <div className="about__column">
              <div className="about__image-wrapper">
                <div className="about__blue-block"></div>
                <div className="about__image">
                  <img src="/img/main/director.webp" alt="Директор центра" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="about__column">
              <div className="about__body">
                <p className="about__text">
                  Миссия образовательного центра – подготовить высококвалифицированных специалистов 
                  для предприятий Сибири и обеспечить развитие IT-отрасли
                </p>
              </div>
            </div>
          </div> 
          <div className="about__photo-slider">
            <PhotoSlider />
          </div>
        </div> 
      </section>
    );
  }
}

export default About;
