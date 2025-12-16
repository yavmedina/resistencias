// Página Nosotros - Clase 2 (map para testimonios)
import React from 'react';

function Nosotros() {
  // Array de testimonios - JavaScript básico
  const testimonios = [
    {
      id: 1,
      nombre: "Douglas Colvin",
      imagen: "/images/clientes_dee_dee_ramone.jpeg",
      comentario: "El producto muy bueno, pero la atención pésima - I hate freaks like you.",
      estrellas: 3,
      fecha: "5/06/2024"
    },
    {
      id: 2,
      nombre: "Jeff Hyman",
      imagen: "/images/clientes_joey_ramone.jpg",
      comentario: "Producto de alta calidad. Pedí una resistencia especial, a medida y me la fabricaron.",
      estrellas: 5,
      fecha: "19/05/2025"
    },
    {
      id: 3,
      nombre: "Monty Burns",
      imagen: "/images/clientes-montgomery-burns.jpeg",
      comentario: "¡Excelente!",
      estrellas: 5,
      fecha: "1/06/2025"
    }
  ];

  // Función para renderizar estrellas
  const renderEstrellas = (cantidad) => {
    const estrellas = [];
    for (let i = 0; i < 5; i++) {
      estrellas.push(
        <span key={i} style={{ color: i < cantidad ? '#FFD700' : '#ddd' }}>
          ⭐
        </span>
      );
    }
    return estrellas;
  };

  return (
    <main style={{ padding: '20px' }}>
      <section>
        <h1 style={{
          margin: '30px auto',
          textAlign: 'center',
          color: 'red',
          fontSize: '2.5em'
        }}>
          Nuestra Historia
        </h1>
        
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <h2 style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '15px 30px',
            margin: '30px 0 20px 0',
            textAlign: 'left'
          }}>
            Los Comienzos (1987)
          </h2>
          
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            Todo comenzó en 1987 cuando <strong>Ricardo Ohm</strong>, un ingeniero 
            eléctrico visionario, decidió fundar <strong>Ohm Resistencias</strong> en 
            un pequeño taller de Quilmes, Buenos Aires.
          </p>
          
          <h2 style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '15px 30px',
            margin: '30px 0 20px 0',
            textAlign: 'left'
          }}>
            Crecimiento y Expansión (1990-2000)
          </h2>
          
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            Durante la década del 90, la empresa experimentó un crecimiento exponencial.
          </p>
          
          <h2 style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '15px 30px',
            margin: '30px 0 20px 0',
            textAlign: 'left'
          }}>
            Nuestros Valores
          </h2>
          
          <ul style={{ maxWidth: '800px', margin: '20px auto' }}>
            <li style={{ margin: '15px 0', fontSize: '16px', lineHeight: '1.6' }}>
              <strong>Innovación:</strong> Invertimos constantemente en investigación
            </li>
            <li style={{ margin: '15px 0', fontSize: '16px', lineHeight: '1.6' }}>
              <strong>Calidad:</strong> Cada producto pasa por 15 controles de calidad
            </li>
            <li style={{ margin: '15px 0', fontSize: '16px', lineHeight: '1.6' }}>
              <strong>Compromiso:</strong> Con nuestros clientes y empleados
            </li>
          </ul>
        </div>
      </section>

      {/* Línea divisoria */}
      <div style={{
        width: '80%',
        height: '3px',
        backgroundColor: 'red',
        margin: '50px auto'
      }}></div>

      {/* Testimonios usando map() - Clase 2 */}
      <section>
        <h2 style={{
          textAlign: 'center',
          color: 'red',
          fontSize: '2em',
          marginBottom: '30px'
        }}>
          Lo que dicen nuestros clientes
        </h2>
        
        <div style={{
          padding: '60px 20px 20px 20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          {testimonios.map(testimonio => (
            <div key={testimonio.id} style={{
              maxWidth: '280px',
              borderRadius: '20px',
              backgroundColor: 'white',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              padding: '30px 20px 20px',
              textAlign: 'center',
              position: 'relative',
              border: '4px solid whitesmoke'
            }}>
              <img 
                src={testimonio.imagen} 
                alt={testimonio.nombre}
                style={{
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  border: '4px solid whitesmoke'
                }}
              />
              
              <div style={{ marginTop: '50px' }}>
                <h3 style={{
                  color: '#8B4513',
                  margin: '0 0 15px 0',
                  fontSize: '1.4em'
                }}>
                  {testimonio.nombre}
                </h3>
                
                <p style={{
                  color: '#8B4513',
                  lineHeight: '1.6',
                  margin: '0 0 15px 0',
                  fontSize: '0.95em'
                }}>
                  {testimonio.comentario}
                </p>
                
                <div>{renderEstrellas(testimonio.estrellas)}</div>
                
                <span style={{
                  display: 'block',
                  color: '#999',
                  fontSize: '16px',
                  marginTop: '10px'
                }}>
                  {testimonio.fecha}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Nosotros;
