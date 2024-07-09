import { useState, useEffect } from 'react';
import UNSCLogo from '../assets/Img/UNCSLogo.png';
import CovenantLogo from '../assets/Img/CovenantLogo.png';
import FloodLogo from '../assets/Img/FloodLogo.png';
import ForerunnersLogo from '../assets/Img/ForerunnerLogo.png';
import Historia from './Historia';
import Personajes from './Personajes';
import Armas from './Armas';
import './styles/Tarjet.css';

const Tarjet = () => {
  const [currentMenu, setCurrentMenu] = useState('main');
  const [currentLogo, setCurrentLogo] = useState(UNSCLogo); // Estado para la imagen actual
  const [activeItem, setActiveItem] = useState(null); // Estado para el elemento activo

  const menus = {
    main: [
      { label: 'UNSC', submenu: 'unsc', logo: UNSCLogo },
      { label: 'El Covenant', submenu: 'covenant', logo: CovenantLogo },
      { label: 'Los Floods', submenu: 'floods', logo: FloodLogo },
      { label: 'Los Forerunners', submenu: 'forerunners', logo: ForerunnersLogo }
    ],
    unsc: [
      { label: 'Historia', submenu: null },
      { label: 'Personajes', submenu: null },
      { label: 'Armas', submenu: null },
      { label: 'Volver', submenu: 'main' }
    ],
    covenant: [
      { label: 'Historia', submenu: null },
      { label: 'Personajes', submenu: null },
      { label: 'Armas', submenu: null },
      { label: 'Volver', submenu: 'main' }
    ],
    floods: [
      { label: 'Historia', submenu: null },
      { label: 'Personajes', submenu: null },
      { label: 'Armas', submenu: null },
      { label: 'Volver', submenu: 'main' }
    ],
    forerunners: [
      { label: 'Historia', submenu: null },
      { label: 'Personajes', submenu: null },
      { label: 'Armas', submenu: null },
      { label: 'Volver', submenu: 'main' }
    ]
  };

  const handleMenuClick = (submenu, logo, label) => {
    if (submenu === 'main') {
      setCurrentMenu('main');
      setActiveItem(null);
      setCurrentLogo(UNSCLogo);
    } else if (submenu) {
      setCurrentMenu(submenu);
      setActiveItem(menus[submenu][0].label); // Activar la primera subopción automáticamente
      // Cambiar la imagen solo si es una opción principal diferente
      if (logo) {
        setCurrentLogo(logo);
      }
    } else {
      setActiveItem(label); // Permitir cambiar entre subopciones
    }
  };

  useEffect(() => {
    if (currentMenu !== 'main' && !activeItem) {
      setActiveItem(menus[currentMenu][0].label); // Activar la primera subopción automáticamente
    }
  }, [currentMenu]);

  const renderContent = () => {
    switch (activeItem) {
      case 'Historia':
        return <Historia faccion={currentMenu} />;
      case 'Personajes':
        return <Personajes faccion={currentMenu} />;
      case 'Armas':
        return <Armas faccion={currentMenu} />;
      default:
        return <div>Selecciona una opción para ver el contenido.</div>;
    }
  };

  return (
    <div className="glass" id="tarjet">
      <div id='containerImgNavBar'>
        <img src={currentLogo} alt="Logo de la facción" />
      </div>
      <div className="navbar">
        <ul id='menu'>
          {menus[currentMenu].map((item, index) => (
            <li
              key={index}
              className={`opciones ${activeItem === item.label ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.submenu, item.logo, item.label)}
            >
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='OpcionView'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Tarjet;
