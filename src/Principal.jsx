import React from 'react';

const Principal = () => {
  const seriesData = [
    {
      id: 1,
      name: 'Nombre de la Serie 1',
      image: 'imagen_serie_1.jpg',
      summary: 'Resumen de la Serie 1. Breve descripción de la trama.',
      category: 'Acción, Drama',
      actors: 'Actor 1, Actriz 1',
    },
    {
      id: 2,
      name: 'Nombre de la Serie 2',
      image: 'imagen_serie_2.jpg',
      summary: 'Resumen de la Serie 2. Breve descripción de la trama.',
      category: 'Comedia',
      actors: 'Actor 2, Actriz 2',
    },

  ];

  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1em' }}>
        <h1>Mis Series de Netflix Preferidas</h1>
      </header>

      <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px' }}>
        {seriesData.map(series => (
          <div key={series.id} style={{ width: '300px', margin: '20px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          
          </div>
        ))}
      </section>
    </div>
  );
};

export default Principal;

