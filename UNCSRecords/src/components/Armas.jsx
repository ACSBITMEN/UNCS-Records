const Armas = ({ faccion }) => {
  const contenido = {
    unsc: 'Aquí van las armas de la UNSC...',
    ElCovenant: 'Aquí van las armas del Covenant...',
    LosFloods: 'Aquí van las armas de los Floods...',
    LosForerunners: 'Aquí van las armas de los Forerunners...'
  };

  return (
    <div>
      <h2>Armas de {faccion}</h2>
      <p>{contenido[faccion]}</p>
    </div>
  );
};

export default Armas;
