import PropTypes from 'prop-types';

const Historia = ({ faccion }) => {
  const contenido = {
    unsc: 'Aquí va la historia de la UNSC...',
    covenant: 'Aquí va la historia del Covenant...',
    floods: 'Aquí va la historia de los Floods...',
    forerunners: 'Aquí va la historia de los Forerunners...'
  };

  return (
    <div>
      <h2>Historia de {faccion}</h2>
      <p>{contenido[faccion]}</p>
    </div>
  );
};

Historia.propTypes = {
  faccion: PropTypes.string.isRequired
};

export default Historia;
