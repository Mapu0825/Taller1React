# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

🍦 MADY – Heladería Artesanal 🍦

MADY es una aplicación web para una heladería artesanal, construida con React, una popular librería de JavaScript para crear interfaces de usuario. El proyecto ofrece una base sólida y escalable, con un enfoque en la modularidad, la reutilización y el mantenimiento. Cuenta con diseño responsivo, enrutamiento del lado del cliente y una arquitectura modular, con una paleta de colores inspirada en los helados (vainilla, fresa, menta y chocolate) y cuidando la accesibilidad.

🚀 Características
Arquitectura modular: la aplicación está dividida en componentes y carpetas por funcionalidad (landing y auth), lo que facilita su mantenimiento y crecimiento.
Enrutamiento del lado del cliente: usa React Router para navegar entre páginas sin recargar el sitio.
Diseño responsivo: se adapta a celulares, tabletas y computadores.
Integración con Bootstrap: usa Bootstrap para una cuadrícula y componentes consistentes y atractivos.
React Hooks: utiliza useState y useEffect para manejar el estado y los efectos secundarios.
Catálogo con filtros: muestra los sabores en tarjetas y permite filtrarlos por categoría (Helados, Paletas y Copas).
Autenticación (interfaz): pantallas de iniciar sesión, crear cuenta y recuperar cuenta con validación de formularios.
Consumo de API: una página que muestra los personajes de la API pública de Rick and Morty, con paginación.
Accesibilidad y SEO: colores con buen contraste, textos alternativos en las imágenes, puntos de referencia (<main>) y meta descripción.
🛠️ Tecnologías
Frontend: React, React Router, Bootstrap, CSS
Herramienta de construcción: Vite
Dependencias: react, react-dom, react-router-dom, bootstrap
Dependencias de desarrollo: vite, @vitejs/plugin-react, eslint
📦 Instalación

Para empezar con el proyecto, sigue estos pasos:

Clona el repositorio con git clone https://github.com/tu-usuario/tu-repositorio.git
Entra a la carpeta del proyecto con cd React_t1
Instala las dependencias con npm install
Inicia el servidor de desarrollo con npm run dev
💻 Uso

Para ejecutar la aplicación:

Inicia el servidor de desarrollo con npm run dev
Abre el navegador y entra a http://localhost:5173
Explora las páginas y funcionalidades de la aplicación
🧭 Rutas
Ruta	Descripción
/	Inicio con el catálogo de sabores
/Login	Iniciar sesión
/crearcuenta	Crear una cuenta nueva
/recuperar	Recuperar cuenta
/Props	Perfiles en tarjetas (ejemplo de props)
/rickandmorty	Personajes de Rick and Morty (consumo de API)
📂 Estructura del proyecto
.
├── index.html
├── public
│   ├── favicon.svg
│   └── (imágenes de los sabores)
├── src
│   ├── main.jsx
│   ├── App.jsx
│   └── features
│       ├── landing
│       │   └── components
│       │       ├── Header.jsx
│       │       ├── Main.jsx
│       │       ├── Footer.jsx
│       │       ├── Props.jsx
│       │       └── Rickandmorty.jsx
│       └── auth
│           └── components
│               ├── Login.jsx
│               ├── CrearCuenta.jsx
│               └── Recuperar.jsx
├── vite.config.js
├── package.json
└── README.md
🎨 Paleta de colores
Color	Hex	Uso
Vainilla	
#fff8ec	Fondo principal
Cono	
#f6e3c3	Fondos secundarios y bordes
Fresa	
#a82c57	Botones y detalles (texto blanco)
Menta	
#a8dccb	Detalles y etiquetas
Chocolate	
#4a2c22	Títulos, textos y paneles oscuros
📸 Capturas de pantalla

Agrega aquí las capturas de tu proyecto.

🤝 Contribuir

Para contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio
Crea una nueva rama con git checkout -b nombre-de-tu-rama
Haz tus cambios y guárdalos con git commit -m "mensaje-de-tu-commit"
Sube tus cambios con git push origin nombre-de-tu-rama
Crea un pull request para unir tus cambios a la rama principal
📝 Licencia

Este proyecto está bajo la licencia MIT.

📬 Contacto

Si tienes preguntas o comentarios, escríbeme a tu-correo@ejemplo.com.

💖 Agradecimientos

Gracias a todas las personas que mantienen las herramientas de código abierto que hicieron posible este proyecto: React, Vite, Bootstrap y la API de Rick and Morty.
