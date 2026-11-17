# Convenciones de Código y Diseño

Estándares de estilizado, semántica y diseño visual responsive del proyecto.

---

## 1. Semántica HTML5 Obligatoria

- Uso estricto de etiquetas semánticas:
  - `<header>` y `<nav>` para la cabecera superior y enlaces de navegación SPA.
  - `<main>` como contenedor principal de las vistas.
  - `<section id="view-...">` para cada una de las 3 pantallas de la SPA.
  - `<article>` para cada tarjeta de torneo o arena de juego.
  - `<button>` para todos los botones interactivos (menú, modales, pestañas, CTA).
  - `<form>` con etiquetas `<label for="...">` asociadas inequívocamente a sus `<input>`.
  - `<footer>` para información institucional y redes del club.

---

## 2. Paleta de Colores y Tokens Visuales (Tema E-Sports Cyberpunk)

### Modo Oscuro (Predeterminado)
- **Fondo Principal (`bg-theme`)**: `#0b0a14` (Deep Space Dark)
- **Fondo de Tarjetas (`card-theme`)**: `#131124` con bordes en `rgba(139, 92, 246, 0.25)`
- **Acento Primario**: Violeta Neón `#8b5cf6` e Índigo `#6366f1`
- **Acento Secundario (Highlight)**: Fucsia / Neón Cyan `#06b6d4` / `#ec4899`
- **Texto Principal**: `#f8fafc` (Blanco brillante)
- **Texto Secundario**: `#94a3b8` (Gris frío)
- **Éxito (Feedback Verde)**: `#10b981` (Emerald 500)

### Modo Claro (Alternativo)
- **Fondo Principal**: `#f1f5f9` (Slate 100)
- **Fondo de Tarjetas**: `#ffffff` (White con sombras limpias)
- **Texto Principal**: `#0f172a` (Slate 900)
- **Texto Secundario**: `#475569` (Slate 600)

### Regla Crítica de Contraste: `.force-text-white`
- Los elementos con gradientes violeta intensos, badges destacados y botones de acción principal deben portar la clase utilitaria `.force-text-white` o `text-white font-semibold` tanto en Modo Oscuro como en Modo Claro para garantizar legibilidad WCAG AAA.

---

## 3. Breakpoints y Diseño Responsive (Mobile First)

- **Móvil (< 640px)**:
  - 1 sola columna vertical para tarjetas (`grid-cols-1`).
  - Menú de navegación condensado en panel táctil desplegable tipo hamburguesa.
  - Botones a ancho completo (`w-full`) con altura mínima de `44px` para interacción táctil óptima.
- **Tablet (640px - 1024px)**:
  - 2 columnas para el catálogo (`sm:grid-cols-2`).
- **Desktop (> 1024px)**:
  - 3 columnas para la grilla de torneos (`lg:grid-cols-3`).
  - Navegación horizontal fluida con estado activo iluminado.

---

## 4. Micro-interacciones Hover

- **Tarjetas**: Elevación sutil `hover:-translate-y-2`, sombra con resplandor violeta `hover:shadow-purple-500/30` y leve escalado de portada (`group-hover:scale-105`).
- **Botones**: Transición de gradiente y brillo `transition-all duration-300 hover:brightness-110 active:scale-95`.
