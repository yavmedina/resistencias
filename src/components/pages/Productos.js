// Página de Productos - Clase 2 (map), Clase 4 (eventos, useState)
import React from 'react';
import { productos } from '../../data/productos';
import { useCarrito } from '../../contexts/CarritoContext';

function Productos() {
  const { agregarProducto } = useCarrito();

  // Formatear precio
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(precio);
  };

  // Manejar click en agregar al carrito - Eventos Clase 4
  const handleAgregar = (producto) => {
    agregarProducto(producto);
    alert(`${producto.nombre} agregado al carrito`);
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
          Nuestros Productos
        </h1>
        
        <p style={{
          fontSize: '18px',
          maxWidth: '800px',
          textAlign: 'center',
          margin: '0 auto',
          paddingBottom: '20px'
        }}>
          Catálogo completo de resistencias eléctricas de alta calidad
        </p>
        
        {/* Grid de productos usando map() - Clase 2 */}
        <div style={{
          margin: '40px auto',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          maxWidth: '1400px'
        }}>
          {productos.map(producto => (
            <div key={producto.id} style={{
              width: '280px',
              backgroundColor: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              border: '2px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              
              <div style={{
                padding: '20px',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <h3 style={{
                  color: 'red',
                  marginBottom: '10px',
                  fontSize: '1.2em'
                }}>
                  {producto.nombre}
                </h3>
                
                <p style={{
                  fontSize: '1.5em',
                  fontWeight: 'bold',
                  color: 'red',
                  margin: '10px 0'
                }}>
                  {formatearPrecio(producto.precio)}
                </p>
                
                {/* Botón con evento onClick - Clase 4 */}
                <button 
                  onClick={() => handleAgregar(producto)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    marginTop: '10px'
                  }}
                >
                  🛒 Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Productos;
