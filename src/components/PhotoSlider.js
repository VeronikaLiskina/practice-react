import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Photo1 from '../img/main/about/1.jpg.webp';
import Photo2 from '../img/main/about/2.jpg.webp';
import Photo3 from '../img/main/about/3.jpg.webp';
import Photo4 from '../img/main/about/4.jpg.webp';

class PhotoSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };

    this.photos = [
      { id: 1, photo: Photo2, alt: 'Фото нашего центра 1' },
      { id: 2, photo: Photo1, alt: 'Фото нашего центра 2' },
      { id: 3, photo: Photo3, alt: 'Фото нашего центра 3' },
      { id: 4, photo: Photo4, alt: 'Фото нашего центра 4' },
    ];
  }
  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: 
        prevState.currentIndex === this.photos.length - 1 ? 0 : prevState.currentIndex + 1
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex: 
        prevState.currentIndex === 0 ? this.photos.length - 1 : prevState.currentIndex - 1
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const currentPhoto = this.photos[currentIndex];

    return (
      <div className="photo-slider">
        <div className="photo-slider__container">
          <button 
            className="photo-slider__arrow photo-slider__arrow--left" 
            onClick={this.prevSlide}
            aria-label="Предыдущее фото"
          >
            <FaChevronLeft />
          </button>
          
          <div className="photo-slider__frame">
            <img 
              src={currentPhoto.photo} 
              alt={currentPhoto.alt} 
              className="photo-slider__photo"
            />
          </div>
          
          <button 
            className="photo-slider__arrow photo-slider__arrow--right" 
            onClick={this.nextSlide}
            aria-label="Следующее фото"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
  }
}

export default PhotoSlider;