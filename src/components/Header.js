import React from "react";
import logo from "../img/head/logo.jpg";
import { debounce } from "lodash";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isMobile: window.innerWidth < 980,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.updateMobileState = this.updateMobileState.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateMobileState);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMobileState);
  }

  updateMobileState() {
    this.setState({ isMobile: window.innerWidth < 980 });
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    const { isMenuOpen, isMobile } = this.state;

    const content = (
      <>
        <div className="header__logo">
          <a href="https://itssl.ru" title="www.itssl.ru">
            <img src={logo} alt="Логотип IT-центра ВЗЛЕТ" />
          </a>
        </div>

        <nav className={`header__menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#programs" onClick={this.closeMenu}>
            Программы
          </a>
          <a href="#teachers" onClick={this.closeMenu}>
            Преподаватели
          </a>
          <a href="#price" onClick={this.closeMenu}>
            Стоимость
          </a>
        </nav>

        <div className="header__phone">+7 (902) 178-55-11</div>

        <a href="#callback" className="header__button">
          Начать учиться
        </a>
      </>
    );

    return (
      <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="container">
          <div className="header__row">
            {(!isMobile || isMenuOpen) && content}

            <button
              className={`header__burger ${isMenuOpen ? "active" : ""}`}
              onClick={this.toggleMenu}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isMenuOpen}
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
