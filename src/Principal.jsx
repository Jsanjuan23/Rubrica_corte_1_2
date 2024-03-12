import React from 'react';

const Principal = () => {
    const seriesData = [
        {
          id: 1,
          name: 'Breaking Bad',
          image: 'breaking_bad.jpg',
          summary: 'Un profesor de química convertido en fabricante de metanfetaminas se asocia con un exalumno para asegurar el futuro financiero de su familia.',
          category: 'Drama, Crimen',
          actors: 'Bryan Cranston, Aaron Paul',
        },
        {
          id: 2,
          name: 'Stranger Things',
          image: 'stranger_things.jpg',
          summary: 'Un grupo de niños en un pequeño pueblo descubre fenómenos paranormales y criaturas sobrenaturales mientras buscan a su amigo desaparecido.',
          category: 'Ciencia ficción, Terror',
          actors: 'Millie Bobby Brown, Finn Wolfhard',
        },
        {
          id: 3,
          name: 'The Mandalorian',
          image: 'mandalorian.jpg',
          summary: 'En el vasto universo de Star Wars, un cazarrecompensas solitario se embarca en misiones épicas mientras cuida a un misterioso niño llamado Grogu.',
          category: 'Acción, Aventura',
          actors: 'Pedro Pascal',
        },
        {
          id: 4,
          name: 'The Crown',
          image: 'the_crown.jpg',
          summary: 'Una mirada a la vida y reinado de la Reina Isabel II desde sus primeros días en el trono hasta eventos históricos más recientes.',
          category: 'Drama, Biografía',
          actors: 'Olivia Colman, Tobias Menzies',
        },
  
      ];
      

  return (
    <body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: '0', padding: '0', boxSizing: 'border-box' }}>
      <div>
        <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '2em' }}>
          <h1>Mis Series de Netflix Preferidas</h1>
        </header>

        <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px', backgroundColor: '#fff' }}>
          {seriesData.map(series => (
            <div key={series.id} style={{ width: '300px', margin: '20px', padding: '15px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <img src={series.image} alt={`Portada ${series.name}`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} />
              <h2 style={{ margin: '0' }}>{series.name}</h2>
              <p style={{ margin: '0' }}>{series.summary}</p>
              <p style={{ margin: '0' }}>Categoría: {series.category}</p>
              <p style={{ margin: '0' }}>Actores Principales: {series.actors}</p>
            </div>
          ))}
        </section>
      </div>
    </body>
  );
};

export default Principal;
