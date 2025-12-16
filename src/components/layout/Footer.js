// Componente funcional Footer - Clase 3
import React from 'react';

function Footer() {
  return (
    <footer style={{ width: '100vw', marginTop: '50px' }}>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'red'
      }}></div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 30px'
      }}>
        <div>
          <p style={{
            fontFamily: 'monospace',
            fontSize: '30px',
            fontWeight: 'bold',
            margin: 0
          }}>
            Ohm Resistencias
          </p>
          <p style={{
            fontFamily: 'monospace',
            fontSize: '24px',
            margin: 0
          }}>
            Quilmes - Buenos Aires
          </p>
        </div>
        
        <div>
          <a href="https://wa.me/54911xx" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              margin: '3px',
              fontSize: '26px',
              padding: '15px',
              borderRadius: '10px',
              backgroundColor: 'red',
              color: 'whitesmoke',
              textDecoration: 'none'
            }}
          >
            📱
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              margin: '3px',
              fontSize: '26px',
              padding: '15px',
              borderRadius: '10px',
              backgroundColor: 'red',
              color: 'whitesmoke',
              textDecoration: 'none'
            }}
          >
            📘
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              margin: '3px',
              fontSize: '26px',
              padding: '15px',
              borderRadius: '10px',
              backgroundColor: 'red',
              color: 'whitesmoke',
              textDecoration: 'none'
            }}
          >
            📷
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              margin: '3px',
              fontSize: '26px',
              padding: '15px',
              borderRadius: '10px',
              backgroundColor: 'red',
              color: 'whitesmoke',
              textDecoration: 'none'
            }}
          >
            🐦
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
