import { useState } from "react";
import logo from '../src/assets/logo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <Header setShowMenu={setShowMenu} showMenu={showMenu} />

      <Navigation showMenu={showMenu} />

      <DemoCourosel />

      <div className="home__options">
        <Option>
          <i className="fa-regular fa-handshake"></i>
          <span>Trabaja con nosotros</span>
          <span className="option__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam?</span>
        </Option>
        <Option>
          <i className="fa-regular fa-calendar"></i>
          <span>Consulta tu cita</span>
          <span className="option__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam?</span>
        </Option>
        <Option>
          <i class="fa-solid fa-headphones-simple"></i>
          <span>Telemedicina</span>
          <span className="option__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam?</span>
        </Option>
        <Option>
          <i className="fa-solid fa-laptop-file"></i>
          <span>Comunicados</span>
          <span className="option__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam?</span>
        </Option>
        <Option>
          <i className="fa-solid fa-question"></i>
          <span>Preguntas frecuentes</span>
          <span className="option__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam?</span>
        </Option>
      </div>

      <BorderOption />

      <Heading
        title="Ultimas Noticias"
        subtitle=" Conoce las noticias y/o actividades de nuestra institución"
      />

      <div className="home__news">
        <Post />
        <Post />
        <Post />
      </div>

      <Heading
        title="Nuestras publicaciones"
        subtitle="Conoce nuestras publicaciones sobre la salud"
      />

      <div className="home__posts">
        <Report />
        <Report />
        <Report />
      </div>

      <Heading
        title="Nuestras servicios"
        subtitle="Conoce los servicios que brindamos a toda la poblacion"
      />

      <div className="home__posts">
        <Report />
        <Report />
        <Report />
      </div>
      <Footer />
    </>
  );
}

export const Post = () => {
  return (
    <div className="post">
      <div className="post__content">
        <img src="https://i0.wp.com/portal.hnseb.gob.pe/wp-content/uploads/2022/12/011122-1-NP.jpg?fit=1300%2C798&ssl=1" />
        <div className="post__info">
          <h3 className="post__title">
            SE REALIZÓ CON ÉXITO LA CAMPAÑA POR EL “DÍA MUNDIAL DE LA LUCHA
            CONTRA EL VIH”
          </h3>
          <p className="post__date">Diciembre 01, 2022</p>
          <p className="post__text">
            IMPORTANTE HAZTE LA PRUEBA DEL VIH PERIÓDICAMENTE. IMPORTANTE EL USO
            DEL CONDÓN EN TODAS TUS RELACIONES SEXUALES...
          </p>
          <a href="#" className="post__link">
            Leer más
          </a>
        </div>
      </div>
    </div>
  );
};

export const Report = () => {
  return (
    <div className="post">
      <div className="post__content">
        <img src="https://i0.wp.com/portal.hnseb.gob.pe/wp-content/uploads/2022/12/011122-1-NP.jpg?fit=1300%2C798&ssl=1" />
        <div className="post__info">
          <h3 className="post__title">LA LUCHA CONTRA EL VIH y EL SIDA</h3>
          <p className="post__date">Diciembre 01, 2022</p>
          <a href="#" className="post__link">
            Leer más
          </a>
        </div>
      </div>
    </div>
  );
};

export const Heading = ({ title, subtitle }) => {
  return (
    <div className="heading">
      <h3 className="heading-primary">{title}</h3>
      <p className="heading-secondary">{subtitle}</p>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <h4 className="footer__title">Enlaces de interés</h4>
          <div className="footer__content">
            <a href="#">Ministerio de salud</a>
            <a href="#">Seguro integral de salud</a>
            <a href="#">Susalud</a>
            <a href="#">OPS</a>
            <a href="#">OMS</a>
            <a href="#">Portal del estado Peruano</a>
          </div>
        </div>
        <div className="footer__center">
          <h4 className="footer__title">Noticias</h4>
          <div className="footer__content">
            <a href="#">Ministerio de salud</a>
            <a href="#">Seguro integral de salud</a>
            <a href="#">Susalud</a>
            <a href="#">OPS</a>
            <a href="#">OMS</a>
            <a href="#">Portal del estado Peruano</a>
          </div>
        </div>
        <div className="footer__right">
          <h4 className="footer__title">Contáctenos</h4>
          <div className="footer__content">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i> facebook
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i> youtube
            </a>
            <a href="#">
              <i className="fa-solid fa-phone"></i> Central Telefónica: (01)
              640-9875
            </a>
            <a href="#">
              <i class="fa-solid fa-envelope"></i> Informes y consultas:
              informes@heves.gob.pe
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          ©2023 Página web oficial del Hospital Santa Rosa de Puerto Maldonado.
          Todos los Derechos Reservados.
        </p>
      </div>
    </footer>
  );
};

export const BorderOption = () => {
  return (
    <div className="option__border">
      <div className="option__border-left"></div>
      <div className="option__border-center"></div>
      <div className="option__border-right"></div>
    </div>
  );
};

export const Option = ({ children }) => {
  return <a className="option">{children}</a>;
};

export const Header = ({showMenu, setShowMenu}) => {
  return (
    <div className="header">
      <i class="fa-solid fa-bars header__bar" onClick={() => setShowMenu(!showMenu)}></i>
      <div className="header__left">
        <p className="text-header">
          <i className="fa-solid fa-phone"></i>
          <span>Llámanos: (+511) 5580186</span>
        </p>
      </div>
      <div className="header__center">
        <p className="text-header">
          <i className="fa-solid fa-map-location"></i>
          <span>Ubícanos: Av. Tupac Amaru N° 8000, Comas, Lima, Perú</span>
        </p>
      </div>
      <div className="header__right">
        <a href="#" className="header__icon">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" className="header__icon">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#" className="header__icon">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export const Navigation = ({showMenu}) => {
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={showMenu ? 'navigation__menu active' : 'navigation__menu'}>
        <a href="#" className="navigation__link">
          Nosostros
        </a>
        <a href="#" className="navigation__link">
          Información institucional
        </a>
        <a href="#" className="navigation__link">
          Nuestros servicios
        </a>
        <a href="#" className="navigation__link">
          Noticias
        </a>
        <a href="#" className="navigation__link">
          Portal de transparencia
        </a>
      </div>
    </div>
  );
};

export const DemoCourosel = () => {
  return (
    <div className="my-carousel">
      <Carousel
        infiniteLoop
        autoPlay
        emulateTouch
        showStatus={false}
        showArrows={false}
      >
        <div>
          <img src="http://hdosdemayo.gob.pe/portal/wp-content/uploads/2022/11/slider-actual.jpg" />
        </div>
        <div>
          <img src="http://hdosdemayo.gob.pe/portal/wp-content/uploads/2021/12/COVERS-aprobado.jpg" />
        </div>
        <div>
          <img src="http://hdosdemayo.gob.pe/portal/wp-content/uploads/2021/12/PORTADA-WEB-2021-8-7-12-21.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default App;
