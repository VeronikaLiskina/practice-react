import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__row">
            <div className="footer__column">
              <div className="footer__title">IT-академия «Взлет»</div>
              <div className="footer__address">
                <p>АКАДЕМИКА КУРЧАТОВА, 13</p>
                <p>ИРКУТСК</p>
              </div>
              <div className="footer__phone">+7 (902) 178-55-11</div>
              <div className="footer__info">
                <div className="footer__org-name">
                  <strong>АНОДПОДО "Розовый слон"</strong>
                </div>
                <div className="footer__license">
                  Лицензия на ведение образовательной деятельности №РО-045897 от 24 апреля 2012 г.
                </div>
                <div className="footer__ogrn">ОГРН 11038000000446</div>
                <div className="footer__inn">ИНН 3812109920</div>
                <div className="footer__copyright">© 2024</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;