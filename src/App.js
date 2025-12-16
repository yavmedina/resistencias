// App.js - Componente principal
// React Router - Para navegación entre páginas
// CarritoProvider - Context API para estado global (Clase 7)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './contexts/CarritoContext';

// Componentes de layout - Clase 3
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Carrito from './components/layout/Carrito';

// Componentes de páginas - Clase 3
import Inicio from './components/pages/Inicio';
import Productos from './components/pages/Productos';
import Nosotros from './components/pages/Nosotros';
import Contacto from './components/pages/Contacto';

function App() {
  return (
    <Router>
      <CarritoProvider>
        <div className="App">
          <Header />
          <Carrito />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </div>
      </CarritoProvider>
    </Router>
  );
}

export default App;

