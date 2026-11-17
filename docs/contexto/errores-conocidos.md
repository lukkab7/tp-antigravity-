# Registro de Errores Conocidos y Gotchas de Maquetado

Gotchas técnicos identificados y sus soluciones aplicadas para garantizar los 100 puntos en la evaluación.

---

## 1. Gotcha: Pérdida de Contraste al Alternar a Modo Claro

- **Problema**: En modo claro, botones con texto que hereda colores oscuros pueden volverse ilegibles sobre fondos violetas o botones destacados.
- **Solución Obligatoria**: Implementar la clase `.force-text-white` en CSS:
  ```css
  .force-text-white {
    color: #ffffff !important;
  }
  ```
  Se aplica a todos los botones principales, badges de torneos y elementos con gradientes violeta neón.

---

## 2. Gotcha: Recarga Accidental en Navegación SPA

- **Problema**: Los enlaces `<a href="#">` hacen saltar el scroll hacia arriba o disparan recargas en ciertos navegadores.
- **Solución Obligatoria**:
  - Usar etiquetas `<button type="button" data-view="...">` para los enlaces del menú y botones CTA, o capturar el evento con `e.preventDefault()`.
  - Actualizar visualmente la clase de botón activo para dar feedback inmediato al usuario.

---

## 3. Gotcha: Desplazamiento Fantasma de Fondo al Abrir el Modal

- **Problema**: Al abrir la ventana modal del torneo en celulares, el usuario sigue deslizando la página principal en segundo plano.
- **Solución Obligatoria**:
  - Al abrir: `document.body.classList.add('overflow-hidden')`.
  - Al cerrar: `document.body.classList.remove('overflow-hidden')`.
  - Permitir cierre fácil con tecla `Escape` o tocando fuera del modal.

---

## 4. Gotcha: Desbordamiento Horizontal en Celulares (Scroll Horizontal Roto)

- **Problema**: Elementos con anchos fijos o animaciones que se salen del viewport en pantallas pequeñas (< 400px).
- **Solución Obligatoria**:
  - Asignar `overflow-x-hidden` en el `body` y contenedor global.
  - Asegurar `w-full` y `object-cover` en las imágenes de las tarjetas de e-sports.
