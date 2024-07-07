// Tarjet.jsx

import { useState } from 'react';
import './styles/Tarjet.css';

const Tarjet = () => {
  const [currentMenu, setCurrentMenu] = useState('main'); // Estado para manejar el menú actual

  // Definición de los menús y submenús
  const menus = {
    main: [
      { label: 'Comando Espacial de las Naciones Unidas (UNSC)', submenu: 'unsc' },
      { label: 'El Covenant', submenu: 'covenant' },
      { label: 'Los Floods', submenu: 'floods' },
      { label: 'Los Forerunners', submenu: 'forerunners' }
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

  // Maneja el clic en una opción del menú
  const handleMenuClick = (submenu) => {
    if (submenu) {
      setCurrentMenu(submenu);
    }
  };

  return (
    <div className="glass" id="tarjet">
      <div className="navbar">
        <ul id='menu'>
          {menus[currentMenu].map((item, index) => (
            <li key={index} className="opciones" onClick={() => handleMenuClick(item.submenu)}>
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
