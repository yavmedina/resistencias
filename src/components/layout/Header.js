// Componente funcional Header - Clase 3
// NavLink para navegación - React Router
// useContext para acceder al carrito - Clase 7
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCarrito } from '../../contexts/CarritoContext';

function Header() {
  const { toggleCarrito, calcularTotal, contarItems } = useCarrito();

  // Función para formatear precio - JavaScript básico
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(precio);
  };

  return (
    <header style={{
      backgroundColor: 'red',
      padding: '10px 0',
      position: 'relative'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        fontSize: '14pt'
      }}>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <li style={{ margin: '0 20px' }}>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({
                color: 'white',
                textDecoration: isActive ? 'underline' : 'none',
                textTransform: 'uppercase',
                fontWeight: 'bold'
              })}
            >
              Inicio
            </NavLink>
          </li>
          <li style={{ margin: '0 20px' }}>
            <NavLink 
              to="/productos"
              style={({ isActive }) => ({
                color: 'white',
                textDecoration: isActive ? 'underline' : 'none',
                textTransform: 'uppercase',
                fontWeight: 'bold'
              })}
            >
              Productos
            </NavLink>
          </li>
          <li style={{ margin: '0 20px' }}>
            <NavLink 
              to="/nosotros"
              style={({ isActive }) => ({
                color: 'white',
                textDecoration: isActive ? 'underline' : 'none',
                textTransform: 'uppercase',
                fontWeight: 'bold'
              })}
            >
              Sobre Nosotros
            </NavLink>
          </li>
          <li style={{ margin: '0 20px' }}>
            <NavLink 
              to="/contacto"
              style={({ isActive }) => ({
                color: 'white',
                textDecoration: isActive ? 'underline' : 'none',
                textTransform: 'uppercase',
                fontWeight: 'bold'
              })}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
        
        {/* Icono del carrito - manejo de eventos onClick - Clase 4 */}
        <div 
          onClick={toggleCarrito}
          style={{
            position: 'absolute',
            right: '30px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 15px',
            borderRadius: '25px',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '20px', color: 'white', marginRight: '8px' }}>🛒</span>
          <div style={{ color: 'white', fontSize: '13px', fontWeight: 'bold' }}>
            {formatearPrecio(calcularTotal())}
          </div>
          <div style={{
            backgroundColor: 'white',
            color: 'red',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 'bold',
            marginLeft: '6px'
          }}>
            {contarItems()}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
