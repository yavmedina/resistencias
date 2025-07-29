// ========================================
// CARRITO DE COMPRAS - OHM RESISTENCIAS
// ========================================

// Variables globales
let carrito = [];
let carritoAbierto = false;

// ========================================
// FUNCIONES PRINCIPALES DEL CARRITO
// ========================================

// Inicializar carrito al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarCarrito();
    crearModalCarrito();
});

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    // Verificar si el producto ya existe en el carrito
    const productoExistente = carrito.find(item => item.nombre === nombre);
    
    if (productoExistente) {
        // Si existe, aumentar la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si no existe, agregarlo como nuevo producto
        const nuevoProducto = {
            id: Date.now(), // ID único basado en timestamp
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        };
        carrito.push(nuevoProducto);
    }
    
    // Actualizar interfaz
    actualizarCarrito();
    
    // Efecto visual en el botón
    animarBotonAgregar(event.target);
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const contador = document.getElementById('carrito-contador');
    const total = document.getElementById('carrito-total');
    
    if (!contador || !total) return;
    
    // Calcular cantidad total de productos
    const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    
    // Calcular precio total
    const precioTotal = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    
    // Actualizar elementos del DOM
    contador.textContent = cantidadTotal;
    total.textContent = `${precioTotal.toLocaleString('es-AR', {minimumFractionDigits: 2})}`;
    
    // Actualizar el modal si está abierto
    if (carritoAbierto) {
        actualizarModalCarrito();
    }
}

// Función para mostrar/ocultar el modal del carrito
function toggleCarrito() {
    const modal = document.getElementById('carrito-modal');
    
    if (!modal) return;
    
    carritoAbierto = !carritoAbierto;
    
    if (carritoAbierto) {
        modal.style.display = 'flex';
        actualizarModalCarrito();
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    } else {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ========================================
// FUNCIONES DEL MODAL
// ========================================

// Crear estructura del modal del carrito
function crearModalCarrito() {
    const modalHTML = `
        <div id="carrito-modal" class="carrito-modal">
            <div class="carrito-modal-contenido">
                <div class="carrito-modal-header">
                    <h2><i class="fas fa-shopping-cart"></i> Mi Carrito</h2>
                    <button class="carrito-cerrar" onclick="toggleCarrito()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="carrito-modal-body" id="carrito-items">
                    <!-- Los productos se cargan dinámicamente aquí -->
                </div>
                <div class="carrito-modal-footer">
                    <div class="carrito-total-final">
                        <span>Total: <strong id="carrito-total-modal">$0,00</strong></span>
                    </div>
                    <div class="carrito-botones">
                        <button class="btn-vaciar" onclick="vaciarCarrito()">
                            <i class="fas fa-trash"></i> Vaciar Carrito
                        </button>
                        <button class="btn-finalizar" onclick="finalizarCompra()">
                            <i class="fas fa-credit-card"></i> Finalizar Compra
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insertar el modal al final del body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Actualizar contenido del modal
function actualizarModalCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const totalModal = document.getElementById('carrito-total-modal');
    
    if (!carritoItems || !totalModal) return;
    
    // Limpiar contenido actual
    carritoItems.innerHTML = '';
    
    if (carrito.length === 0) {
        carritoItems.innerHTML = `
            <div class="carrito-vacio">
                <i class="fas fa-shopping-cart carrito-vacio-icon"></i>
                <p>Tu carrito está vacío</p>
                <p class="carrito-vacio-subtitle">¡Agrega algunos productos!</p>
            </div>
        `;
    } else {
        // Mostrar cada producto del carrito
        carrito.forEach(item => {
            const itemHTML = `
                <div class="carrito-item" data-id="${item.id}">
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <div class="carrito-item-info">
                        <h4>${item.nombre}</h4>
                        <p class="carrito-item-precio">$${item.precio.toLocaleString('es-AR', {minimumFractionDigits: 2})}</p>
                    </div>
                    <div class="carrito-item-cantidad">
                        <button class="btn-cantidad" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                        <span class="cantidad">${item.cantidad}</span>
                        <button class="btn-cantidad" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                    </div>
                    <div class="carrito-item-subtotal">
                        $${(item.precio * item.cantidad).toLocaleString('es-AR', {minimumFractionDigits: 2})}
                    </div>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            carritoItems.innerHTML += itemHTML;
        });
    }
    
    // Actualizar total
    const precioTotal = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    totalModal.textContent = `$${precioTotal.toLocaleString('es-AR', {minimumFractionDigits: 2})}`;
}

// ========================================
// FUNCIONES DE GESTIÓN DE PRODUCTOS
// ========================================

// Cambiar cantidad de un producto
function cambiarCantidad(id, cambio) {
    const producto = carrito.find(item => item.id === id);
    
    if (producto) {
        producto.cantidad += cambio;
        
        // Si la cantidad llega a 0, eliminar el producto
        if (producto.cantidad <= 0) {
            eliminarDelCarrito(id);
            return;
        }
        
        actualizarCarrito();
    }
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    const index = carrito.findIndex(item => item.id === id);
    
    if (index !== -1) {
        carrito.splice(index, 1);
        actualizarCarrito();
    }
}

// Vaciar todo el carrito
function vaciarCarrito() {
    if (carrito.length === 0) {
        alert('El carrito ya está vacío');
        return;
    }
    
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        carrito = [];
        actualizarCarrito();
    }
}

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

// Animación del botón al agregar producto
function animarBotonAgregar(boton) {
    if (!boton) return;
    
    const originalText = boton.innerHTML;
    boton.innerHTML = '<i class="fas fa-check"></i> ¡Agregado!';
    boton.style.backgroundColor = '#28a745';
    boton.disabled = true;
    
    setTimeout(() => {
        boton.innerHTML = originalText;
        boton.style.backgroundColor = '';
        boton.disabled = false;
    }, 1500);
}

// Finalizar compra (simulación)
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const cantidadItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    
    const mensaje = `¡Gracias por tu compra!\n\nResumen:\n- ${cantidadItems} productos\n- Total: $${total.toLocaleString('es-AR', {minimumFractionDigits: 2})}\n\nPronto te contactaremos para coordinar el pago y la entrega.`;
    
    alert(mensaje);
    
    // Vaciar carrito después de la compra
    carrito = [];
    actualizarCarrito();
    toggleCarrito();
}

// ========================================
// EVENT LISTENERS
// ========================================

// Cerrar modal al hacer click fuera de él
document.addEventListener('click', function(event) {
    const modal = document.getElementById('carrito-modal');
    if (modal && event.target === modal) {
        toggleCarrito();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && carritoAbierto) {
        toggleCarrito();
    }
});

// ========================================
// ESTILOS CSS DINÁMICOS PARA EL MODAL
// ========================================

// Agregar estilos CSS para el modal
function agregarEstilosModal() {
    const estilos = `
        <style>
            /* MODAL DEL CARRITO */
            .carrito-modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                justify-content: center;
                align-items: center;
            }
            
            .carrito-modal-contenido {
                background-color: white;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                display: flex;
                flex-direction: column;
            }
            
            .carrito-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 25px;
                background-color: red;
                color: white;
                border-radius: 15px 15px 0 0;
            }
            
            .carrito-modal-header h2 {
                margin: 0;
                background: none;
                text-align: left;
                padding: 0;
                color: white;
            }
            
            .carrito-cerrar {
                background: none;
                border: none;
                color: white;
                font-size: 1.5em;
                cursor: pointer;
                padding: 5px;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }
            
            .carrito-cerrar:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
            
            .carrito-modal-body {
                padding: 20px;
                overflow-y: auto;
                flex-grow: 1;
            }
            
            .carrito-vacio {
                text-align: center;
                padding: 40px 20px;
                color: #666;
            }
            
            .carrito-vacio-icon {
                font-size: 3em;
                color: #ddd;
                margin-bottom: 15px;
            }
            
            .carrito-vacio-subtitle {
                font-size: 0.9em;
                color: #999;
            }
            
            .carrito-item {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px 0;
                border-bottom: 1px solid #eee;
            }
            
            .carrito-item img {
                width: 60px;
                height: 60px;
                object-fit: cover;
                border-radius: 8px;
            }
            
            .carrito-item-info {
                flex-grow: 1;
            }
            
            .carrito-item-info h4 {
                margin: 0 0 5px 0;
                color: #333;
                font-size: 1em;
            }
            
            .carrito-item-precio {
                margin: 0;
                color: red;
                font-weight: bold;
                font-size: 0.9em;
            }
            
            .carrito-item-cantidad {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .btn-cantidad {
                background-color: #f0f0f0;
                border: 1px solid #ddd;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                color: red;
                transition: all 0.3s ease;
            }
            
            .btn-cantidad:hover {
                background-color: red;
                color: white;
            }
            
            .cantidad {
                font-weight: bold;
                min-width: 20px;
                text-align: center;
                color: #333;
            }
            
            .carrito-item-subtotal {
                font-weight: bold;
                color: red;
                min-width: 80px;
                text-align: right;
            }
            
            .btn-eliminar {
                background-color: #ff4757;
                border: none;
                color: white;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.3s ease;
            }
            
            .btn-eliminar:hover {
                background-color: #ff3742;
            }
            
            .carrito-modal-footer {
                padding: 20px 25px;
                border-top: 1px solid #eee;
                background-color: #f9f9f9;
                border-radius: 0 0 15px 15px;
            }
            
            .carrito-total-final {
                text-align: center;
                margin-bottom: 15px;
                font-size: 1.2em;
                color: #333;
            }
            
            .carrito-botones {
                display: flex;
                gap: 10px;
                justify-content: center;
            }
            
            .btn-vaciar,
            .btn-finalizar {
                padding: 12px 25px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
                transition: background-color 0.3s ease;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .btn-vaciar {
                background-color: #6c757d;
                color: white;
            }
            
            .btn-vaciar:hover {
                background-color: #5a6268;
            }
            
            .btn-finalizar {
                background-color: #28a745;
                color: white;
            }
            
            .btn-finalizar:hover {
                background-color: #218838;
            }
            
            /* NOTIFICACIONES - ELIMINADO */
            
            /* RESPONSIVE */
            @media (max-width: 768px) {
                .carrito-modal-contenido {
                    width: 95%;
                    max-height: 90vh;
                }
                
                .carrito-item {
                    flex-wrap: wrap;
                    gap: 10px;
                }
                
                .carrito-item img {
                    width: 50px;
                    height: 50px;
                }
                
                .carrito-botones {
                    flex-direction: column;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', estilos);
}

// Agregar estilos cuando se carga el DOM
document.addEventListener('DOMContentLoaded', agregarEstilosModal);