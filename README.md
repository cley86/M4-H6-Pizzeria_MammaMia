# 🍕 Pizzería Mamma Mía

Una aplicación web desarrollada con **React** que simula un sistema de pedidos de pizzas. Los usuarios pueden explorar el catálogo, añadir productos al carrito, modificar cantidades y ver el total actualizado en tiempo real desde cualquier vista.

---

## 🚀 Tecnologías Utilizadas

- ⚛️ **React** (con Hooks)
- 📦 **Context API** para manejo de estado global
- 🌐 **React Router DOM** para el enrutamiento
- 🎨 **Bootstrap** y CSS personalizado
- 🧠 **Fetch API** para simular consumo de datos

---

## 🎯 Funcionalidades

- Listado dinámico de pizzas con datos obtenidos desde una API local
- Añadir pizzas al carrito desde la página principal
- Aumentar, disminuir o eliminar cantidades desde el carrito
- Visualización del total del pedido en todo momento (navbar y carrito)
- Separación clara entre productos diferentes y unidades
- Arquitectura basada en Context para carrito y datos

---

## 🗂️ Estructura del Proyecto

```bash
/src
├── components/
│   └── Navbar.jsx
│   └── Header.jsx
│
├── context/
│   └── CartContext.jsx         # Manejo del carrito
│   └── PizzaContext.jsx        # Carga y distribución de datos de pizzas
│
├── pages/
│   └── Home.jsx
│   └── Cart.jsx
│   └── Pizza.jsx
│   └── LoginPage.jsx
│   └── RegisterPage.jsx
│   └── Profile.jsx
│   └── NotFound.jsx
│
├── styles/
│   └── Cart.css
│
├── App.jsx
├── main.jsx
└── index.css
```
