import PropTypes from 'prop-types';

const Personajes = ({ faccion }) => {
  const contenido = {
    unsc: 'Aquí van los personajes de la UNSC...',
    covenant: 'Aquí van los personajes del Covenant...',
    floods: 'Aquí van los personajes de los Floods...',
    forerunners: 'Aquí van los personajes de los Forerunners...'
  };

  return (
    <div>
      <h2>Personajes de {faccion}</h2>
      <p>{contenido[faccion]}</p>
    </div>
  );
};

Personajes.propTypes = {
  faccion: PropTypes.string.isRequired
};

export default Personajes;
