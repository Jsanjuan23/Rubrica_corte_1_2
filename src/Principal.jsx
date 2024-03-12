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
    <body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: '0', padding: '0', boxSizing: 'border-box' }}>
      <div>
        <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '2em' }}>
          <h1>Mis Series de Netflix Preferidas</h1>
        </header>

        <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px' }}>
          {seriesData.map(series => (
            <div key={series.id} style={{ width: '300px', margin: '20px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <img src={series.image} alt={`Portada ${series.name}`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} />
              <h2>{series.name}</h2>
              <p>{series.summary}</p>
              <p>Categoría: {series.category}</p>
              <p>Actores Principales: {series.actors}</p>
            </div>
          ))}
        </section>
      </div>
    </body>
  );
};

export default Principal;
