// Context API y useContext - Clase N° 7
// useState - Clase N° 4
// useEffect - Clase N° 5
import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el Context
const CarritoContext = createContext();

// Provider que maneja el estado del carrito
export function CarritoProvider({ children }) {
  // useState para manejar el array de items del carrito - Clase 4
  const [items, setItems] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // useEffect para cargar el carrito desde localStorage al iniciar - Clase 5
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setItems(JSON.parse(carritoGuardado));
    }
  }, []); // Array vacío = se ejecuta solo al montar el componente

  // useEffect para guardar el carrito en localStorage cada vez que cambia - Clase 5
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('carrito', JSON.stringify(items));
    } else {
      localStorage.removeItem('carrito');
    }
  }, [items]); // Se ejecuta cada vez que items cambia

  // Función para agregar producto al carrito
  const agregarProducto = (producto) => {
    // Buscar si el producto ya existe en el carrito
    const productoExistente = items.find(item => item.id === producto.id);
    
    if (productoExistente) {
      // Si existe, aumentar la cantidad
      setItems(items.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      // Si no existe, agregarlo con cantidad 1
      setItems([...items, { ...producto, cantidad: 1 }]);
    }
  };

  // Función para eliminar producto del carrito
  const eliminarProducto = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Función para modificar cantidad
  const modificarCantidad = (id, cantidad) => {
    if (cantidad <= 0) {
      eliminarProducto(id);
    } else {
      setItems(items.map(item =>
        item.id === id ? { ...item, cantidad } : item
      ));
    }
  };

  // Función para vaciar todo el carrito
  const vaciarCarrito = () => {
    setItems([]);
  };

  // Función para mostrar/ocultar el panel del carrito
  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  // Función para calcular el total
  const calcularTotal = () => {
    return items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  // Función para contar total de items
  const contarItems = () => {
    return items.reduce((total, item) => total + item.cantidad, 0);
  };

  // El value contiene todo lo que queremos compartir
  const value = {
    items,
    mostrarCarrito,
    agregarProducto,
    eliminarProducto,
    modificarCantidad,
    vaciarCarrito,
    toggleCarrito,
    calcularTotal,
    contarItems
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente
export function useCarrito() {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  }
  return context;
}
