# 🧩 Iteración - Configuración de Rutas y Componentes en React

Esta iteración se enfocó en la implementación de rutas utilizando **React Router**, así como en la reorganización de componentes y la creación de vistas adicionales requeridas por el proyecto.

---

## ✅ Requerimientos cumplidos

### 1. Instalación y configuración de React Router

- Se instaló `react-router-dom@7.2.0`
- Se utilizó `HashRouter` para compatibilidad con GitHub Pages.
- Se configuraron todas las rutas necesarias en `App.jsx`.

### 2. Reorganización de componentes

Se trasladaron los siguientes componentes a la carpeta `src/pages/`:

- `Home.jsx`
- `RegisterPage.jsx`
- `LoginPage.jsx`
- `Cart.jsx`
- `Pizza.jsx`

### 3. Rutas implementadas

| Ruta         | Componente renderizado |
| ------------ | ---------------------- |
| `/`          | `Home`                 |
| `/register`  | `RegisterPage`         |
| `/login`     | `LoginPage`            |
| `/cart`      | `Cart`                 |
| `/pizza/:id` | `Pizza` (dinámico)     |
| `/profile`   | `Profile`              |
| `/404`       | `NotFound`             |
| `*`          | Redirección a `/404`   |

### 4. Componente `NotFound`

- Página 404 creativa.
- Incluye un mensaje de error y un botón para volver al inicio.

### 5. Componente `Profile`

- Muestra un email estático.
- Incluye un botón de cerrar sesión (sin lógica aún, por implementar en futuras iteraciones).

### 6. Componente `Navbar`

- Menú de navegación con enlaces usando `Link`.
- Botón del carrito (`🛒 Carrito - $XXX`) enlaza correctamente a `/cart`.

---

## 📁 Estructura del proyecto actual

```
src/
│
├── pages/
│   ├── Home.jsx
│   ├── RegisterPage.jsx
│   ├── LoginPage.jsx
│   ├── Cart.jsx
│   ├── Pizza.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
│
├── App.jsx
└── main.jsx
```

---

## 📌 Notas

- La lógica de autenticación aún no está implementada.
- El componente `Pizza` utiliza un ID estático (`p001`) en el `useEffect`, pero está preparado para recibirlo dinámicamente desde la URL.
- Las rutas están implementadas con `HashRouter` para soportar deploy en GitHub Pages. Se puede cambiar a `BrowserRouter` si se despliega en un servidor con soporte para rutas directas.
