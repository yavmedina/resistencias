// Componente de página Inicio - Clase 3
import React from 'react';

function Inicio() {
  return (
    <main style={{ padding: '20px' }}>
      <section>
        <h1 style={{
          margin: '30px auto',
          textAlign: 'center',
          color: 'red',
          fontSize: '2.5em'
        }}>
          Bienvenidos a Ohm Resistencias
        </h1>
        
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            Desde 1987, <strong>Ohm Resistencias</strong> se ha consolidado como líder 
            indiscutible en la fabricación de resistencias eléctricas de alta calidad en 
            Argentina y la región.
          </p>
          
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            Con más de 35 años de experiencia en el mercado, hemos construido una 
            reputación sólida basada en la excelencia técnica y la confiabilidad de 
            nuestros productos.
          </p>
          
          <h2 style={{
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'right',
            textTransform: 'uppercase',
            paddingRight: '80px',
            margin: '30px 0 20px 0'
          }}>
            Nuestras Especialidades
          </h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '30px',
            margin: '40px 0'
          }}>
            <div style={{
              flex: 1,
              minWidth: '250px',
              textAlign: 'center',
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px'
            }}>
              <div style={{
                fontSize: '2.5em',
                color: 'red',
                marginBottom: '15px'
              }}>
                🏭
              </div>
              <h3 style={{ color: 'red', marginBottom: '10px' }}>
                Resistencias de Precisión
              </h3>
              <p style={{ fontSize: '16px', color: '#666' }}>
                Componentes de alta precisión para aplicaciones críticas.
              </p>
            </div>
            
            <div style={{
              flex: 1,
              minWidth: '250px',
              textAlign: 'center',
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px'
            }}>
              <div style={{
                fontSize: '2.5em',
                color: 'red',
                marginBottom: '15px'
              }}>
                ⚡
              </div>
              <h3 style={{ color: 'red', marginBottom: '10px' }}>
                Resistencias de Potencia
              </h3>
              <p style={{ fontSize: '16px', color: '#666' }}>
                Soluciones robustas para aplicaciones de alta potencia.
              </p>
            </div>
            
            <div style={{
              flex: 1,
              minWidth: '250px',
              textAlign: 'center',
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px'
            }}>
              <div style={{
                fontSize: '2.5em',
                color: 'red',
                marginBottom: '15px'
              }}>
                ⚙️
              </div>
              <h3 style={{ color: 'red', marginBottom: '10px' }}>
                Componentes Personalizados
              </h3>
              <p style={{ fontSize: '16px', color: '#666' }}>
                Desarrollamos productos a medida según las necesidades.
              </p>
            </div>
          </div>
          
          <h2 style={{
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'right',
            textTransform: 'uppercase',
            paddingRight: '80px',
            margin: '30px 0 20px 0'
          }}>
            ¿Por qué elegirnos?
          </h2>
          
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            Nuestro compromiso con la innovación y el control de calidad nos ha 
            posicionado como referentes en el sector. Contamos con certificaciones 
            ISO 9001 y trabajamos bajo los más altos estándares internacionales.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
