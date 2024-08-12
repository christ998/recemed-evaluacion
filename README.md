# Proyecto de Recetas con Vite y Vike de Christian Herrera

Este proyecto implementa una aplicación de recetas utilizando Vite como bundler y Vike para manejar el Server-Side Rendering (SSR) y Client-Side Rendering (CSR).

## Estructura del Proyecto

El proyecto consta de tres vistas principales:

1. Login (SSR)
2. Password (SSR)
3. Dashboard (CSR)

## Implementación de SSR y CSR

### Server-Side Rendering (SSR)

SSR se implementó para las vistas de Login y Password utilizando Vike.

- Vista de Login (/pages/login):
  - Renderiza el formulario de ingreso de RUT en el servidor.

- Vista de Password (/pages/password):
  - Renderiza el formulario de contraseña en el servidor.

### Client-Side Rendering (CSR)

CSR se implementó específicamente para la vista de Dashboard.

- Vista de Dashboard (/pages/dashboard):
  - Configurada para renderizarse completamente en el cliente.
  - En el archivo `+config.js` de esta vista, se estableció `ssr: false` para desactivar el renderizado en el servidor.
  - Toda la lógica y renderizado de esta vista se maneja en el navegador del cliente.

## Configuración de Vike

- Para las vistas SSR (Login y Password), no se requiere configuración especial en `+config.js`.
- Para la vista CSR (Dashboard), el archivo `+config.js` contiene:

  ```javascript
  export default {
    ssr: false
  }

## Comandos para ejecutar el proyecto

Para iniciar el proyecto en modo de desarrollo:

```bash
npm run dev