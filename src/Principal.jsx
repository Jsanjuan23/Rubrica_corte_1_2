import React from 'react';

const Principal = () => {
  const seriesData = [
    {
      id: 1,
      name: 'Breaking Bad',
      image: 'https://i.blogs.es/16e585/breaking-bad/1366_2000.jpg',
      summary: 'Un profesor de química convertido en fabricante de metanfetaminas se asocia con un exalumno para asegurar el futuro financiero de su familia.',
      category: 'Drama, Crimen',
      actors: 'Bryan Cranston, Aaron Paul',
    },
    {
      id: 2,
      name: 'Stranger Things',
      image: 'https://www.fayerwayer.com/resizer/gZmzsRN9PG6JSk_9vGD97jFKZW8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/SZNR4IXRVBG6DIN55H5KPYNU2Q.webp',
      summary: 'Un grupo de niños en un pequeño pueblo descubre fenómenos paranormales y criaturas sobrenaturales mientras buscan a su amigo desaparecido.',
      category: 'Ciencia ficción, Terror',
      actors: 'Millie Bobby Brown, Finn Wolfhard',
    },
    {
      id: 3,
      name: 'The Mandalorian',
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/mandalorian-2485773.jpg?tf=1200x',
      summary: 'En el vasto universo de Star Wars, un cazarrecompensas solitario se embarca en misiones épicas mientras cuida a un misterioso niño llamado Grogu.',
      category: 'Acción, Aventura',
      actors: 'Pedro Pascal',
    },
  ];

  return (
    <body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: '0', padding: '0', boxSizing: 'border-box' }}>
      <div>
        <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '2em', fontFamily: 'Helvetica, Arial, sans-serif' }}>
          <h1 style={{ margin: '0', fontSize: '2em', fontWeight: 'bold' }}>Mis Series de Netflix Preferidas</h1>
        </header>

        <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px', backgroundColor: '#fff' }}>
          {seriesData.map(series => (
            <div key={series.id} style={{ width: '300px', margin: '20px', padding: '15px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <img src={series.image} alt={`Portada ${series.name}`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} />
              <h2 style={{ margin: '0', fontSize: '1.5em', fontWeight: 'bold' }}>{series.name}</h2>
              <p style={{ margin: '0', fontSize: '0.8em', fontStyle: 'italic' }}>{series.summary}</p>
              <p style={{ margin: '0', fontSize: '0.8em', fontStyle: 'italic' }}>Categoría: {series.category}</p>
              <p style={{ margin: '0', fontSize: '0.8em', fontStyle: 'italic' }}>Actores Principales: {series.actors}</p>
            </div>
          ))}
        </section>
      </div>
    </body>
  );
};

export default Principal;
