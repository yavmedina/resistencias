// Página Contacto - Clase 4 (formularios controlados, useState, eventos)
import React, { useState } from 'react';

function Contacto() {
  // useState para manejar los datos del formulario - Clase 4
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    consultaTipo: '',
    mensaje: ''
  });

  // Función para manejar cambios en los inputs - Eventos Clase 4
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario - Clase 4
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir recarga de página
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu consulta! Te responderemos pronto.');
    
    // Resetear formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      consultaTipo: '',
      mensaje: ''
    });
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
          Contacto
        </h1>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
          justifyContent: 'center'
        }}>
          {/* Sección de ubicación */}
          <div style={{ flex: 1, minWidth: '400px' }}>
            <h2 style={{ color: 'red' }}>Nuestra Ubicación</h2>
            
            <div style={{
              backgroundColor: '#f0f0f0',
              border: '2px solid #ddd',
              borderRadius: '15px',
              padding: '40px',
              textAlign: 'center',
              margin: '20px 0'
            }}>
              <div style={{
                fontSize: '3em',
                color: 'red',
                marginBottom: '15px'
              }}>
                📍
              </div>
              <p style={{
                fontSize: '1.2em',
                fontWeight: 'bold',
                color: '#666'
              }}>
                Quilmes, Buenos Aires<br />Argentina
              </p>
            </div>
            
            {/* Horarios */}
            <div style={{
              backgroundColor: '#f9f9f9',
              padding: '25px',
              borderRadius: '15px',
              margin: '20px 0'
            }}>
              <h3 style={{ color: 'red', marginBottom: '20px' }}>
                🕐 Horarios de Atención
              </h3>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px 0',
                padding: '8px 0',
                borderBottom: '1px solid #eee'
              }}>
                <span style={{ fontWeight: 'bold' }}>Lunes a Viernes:</span>
                <span style={{ color: 'red', fontWeight: 'bold' }}>8:00 - 18:00 hs</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px 0',
                padding: '8px 0',
                borderBottom: '1px solid #eee'
              }}>
                <span style={{ fontWeight: 'bold' }}>Sábados:</span>
                <span style={{ color: 'red', fontWeight: 'bold' }}>9:00 - 13:00 hs</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px 0',
                padding: '8px 0'
              }}>
                <span style={{ fontWeight: 'bold' }}>Domingos:</span>
                <span style={{ color: 'red', fontWeight: 'bold' }}>Cerrado</span>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div style={{ flex: 1, minWidth: '400px' }}>
            <h2 style={{ color: 'red' }}>Envianos tu Consulta</h2>
            
            {/* Formulario controlado - Clase 4 */}
            <form onSubmit={handleSubmit} style={{
              maxWidth: '500px',
              width: '100%',
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              margin: '20px 0'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre Completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #ccc',
                    borderRadius: '10px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #ccc',
                    borderRadius: '10px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono (opcional)"
                  value={formData.telefono}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #ccc',
                    borderRadius: '10px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <select
                  name="consultaTipo"
                  value={formData.consultaTipo}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #ccc',
                    borderRadius: '10px',
                    fontSize: '16px',
                    boxSizing: 'border-box',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">Tipo de Consulta</option>
                  <option value="productos">Consulta sobre Productos</option>
                  <option value="presupuesto">Solicitud de Presupuesto</option>
                  <option value="personalizado">Producto Personalizado</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <textarea
                  name="mensaje"
                  rows="5"
                  placeholder="Detalle su consulta..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #ccc',
                    borderRadius: '10px',
                    fontSize: '16px',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    minHeight: '100px'
                  }}
                ></textarea>
              </div>
              
              <button type="submit" style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                cursor: 'pointer',
                marginTop: '10px'
              }}>
                ✉️ Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacto;
