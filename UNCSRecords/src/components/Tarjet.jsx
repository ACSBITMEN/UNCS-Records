import { useState } from 'react';
import UNSCLogo from '../assets/Img/UNCSLogo.png';
import CovenantLogo from '../assets/Img/CovenantLogo.png';
import FloodLogo from '../assets/Img/FloodLogo.png';
import ForerunnersLogo from '../assets/Img/ForerunnerLogo.png';
import './styles/Tarjet.css';

const Tarjet = () => {
  const [currentMenu, setCurrentMenu] = useState('main');
  const [currentLogo, setCurrentLogo] = useState(UNSCLogo); // Estado para la imagen actual

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
      { label: 'Spartans', submenu: null },
      { label: 'Volver', submenu: 'main' }
    ],
    covenant: [
      { label: 'Historia', submenu: null },
      { label: 'Especies', submenu: null },
      { label: 'Armas', submenu: null },
      { label: 'Volver', submenu: 'main' }
    ],
    floods: [
      { label: 'Historia', submenu: null },
      { label: 'Tipos de Flood', submenu: null },
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

  const handleMenuClick = (submenu, logo) => {
    if (submenu) {
      setCurrentMenu(submenu);
      // Cambiar la imagen solo si es una opción principal diferente
      if (logo) {
        setCurrentLogo(logo);
      }
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
            <li key={index} className="opciones" onClick={() => handleMenuClick(item.submenu, item.logo)}>
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='OpcionView'>
        {/* Aquí puedes renderizar contenido adicional basado en la opción seleccionada */}
      </div>
    </div>
  );
};

export default Tarjet;
