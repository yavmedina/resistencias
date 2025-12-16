// Panel del Carrito - Clase 4 (useState y eventos)
import React from 'react';
import { useCarrito } from '../../contexts/CarritoContext';

function Carrito() {
  const { 
    items, 
    mostrarCarrito, 
    toggleCarrito, 
    eliminarProducto, 
    modificarCantidad, 
    vaciarCarrito,
    calcularTotal 
  } = useCarrito();

  // Formatear precio
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(precio);
  };

  // Manejar cambio de cantidad - Eventos Clase 4
  const handleAumentarCantidad = (item) => {
    modificarCantidad(item.id, item.cantidad + 1);
  };

  const handleDisminuirCantidad = (item) => {
    if (item.cantidad > 1) {
      modificarCantidad(item.id, item.cantidad - 1);
    } else {
      eliminarProducto(item.id);
    }
  };

  // Si no está abierto, no mostrar nada
  if (!mostrarCarrito) {
    return null;
  }

  return (
    // Panel lateral del carrito
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '400px',
      height: '100vh',
      backgroundColor: 'white',
      boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header del carrito */}
      <div style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0, fontSize: '20px' }}>Carrito de Compras</h2>
        <button 
          onClick={toggleCarrito}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
      </div>

      {/* Contenido del carrito */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {items.length === 0 ? (
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '18px'
          }}>
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            {/* Lista de items */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px'
            }}>
              {items.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '15px',
                  padding: '15px',
                  borderBottom: '1px solid #eee'
                }}>
                  <img 
                    src={item.imagen} 
                    alt={item.nombre}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      margin: '0 0 5px 0',
                      color: 'red',
                      fontSize: '16px'
                    }}>
                      {item.nombre}
                    </h4>
                    <p style={{
                      color: '#666',
                      fontSize: '14px',
                      margin: '5px 0'
                    }}>
                      {formatearPrecio(item.precio)}
                    </p>
                    
                    {/* Controles de cantidad */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginTop: '10px'
                    }}>
                      <button 
                        onClick={() => handleDisminuirCantidad(item)}
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          border: 'none',
                          width: '28px',
                          height: '28px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '16px'
                        }}
                      >
                        -
                      </button>
                      <span style={{
                        fontWeight: 'bold',
                        minWidth: '30px',
                        textAlign: 'center'
                      }}>
                        {item.cantidad}
                      </span>
                      <button 
                        onClick={() => handleAumentarCantidad(item)}
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          border: 'none',
                          width: '28px',
                          height: '28px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '16px'
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Botón eliminar */}
                  <button 
                    onClick={() => eliminarProducto(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#999',
                      cursor: 'pointer',
                      fontSize: '18px'
                    }}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            {/* Footer del carrito */}
            <div style={{
              padding: '20px',
              borderTop: '2px solid #eee',
              backgroundColor: '#f9f9f9'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                <span>Total:</span>
                <span style={{ color: 'red' }}>
                  {formatearPrecio(calcularTotal())}
                </span>
              </div>
              
              <button 
                onClick={vaciarCarrito}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  backgroundColor: '#f0f0f0',
                  color: '#666'
                }}
              >
                Vaciar Carrito
              </button>
              
              <button style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                backgroundColor: 'red',
                color: 'white'
              }}>
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Carrito;
