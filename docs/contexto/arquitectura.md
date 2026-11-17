# Arquitectura del Sistema - Nexo E-Sports & Gaming Club

Especificación arquitectónica oficial según la metodología SDD (Software Design Document).

---

## 1. Stack Tecnológico Oficial

| Componente | Tecnología | Justificación Técnica |
| :--- | :--- | :--- |
| **Arquitectura de Vistas** | Single Page Application (SPA sin recarga) | Navegación instantánea entre 3 vistas principales (Inicio, Torneos/Catálogo, Inscripción) manipulando el atributo `hidden` del DOM. |
| **Marcado Semántico** | HTML5 Semántico nativo | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>/<aside>`, `<footer>`. |
| **Estilos & Responsive** | TailwindCSS v3 (via CDN) + CSS Custom Properties | Clases utilitarias mobile-first, paleta Cyberpunk Dark / Light, y reglas de contraste (`.force-text-white`). |
| **Lógica & DOM** | JavaScript Vanilla ES6+ (`app.js`) | Control de estado de tema (Dark/Light), apertura/cierre de modales accesibles, menú hamburguesa táctil y validación de formulario. |
| **Iconografía & Assets** | SVG nativos inline optimizados | Cero dependencias pesadas, carga inmediata y nitidez en cualquier resolución. |

---

## 2. Mapa de Módulos y Secciones

```
[ Navbar Fijo / Responsive ]
  ├── Marca / Logo: "NEXO ESPORTS CLUB" (con insignia iluminada)
  ├── Enlaces SPA: [ Inicio ] [ Torneos & Arenas ] [ Unirse al Club ]
  ├── Botón Theme Toggle (Modo Oscuro / Modo Claro)
  └── Menú Hamburguesa táctil para móviles (< 768px)

[ Sección 1: Inicio (Hero & Highlights) ]
  ├── Título de Impacto: "DOMINA LA ARENA COMPETITIVA"
  ├── Subtítulo: Plataforma para escuadras, bootcamps y torneos profesionales
  ├── Badges de Estadísticas (Miembros activos, Torneos disputados, Prizepool)
  └── Botones de Acción (CTA): "Explorar Torneos" y "Registrar Escuadra"

[ Sección 2: Torneos & Arenas (Catálogo de Cards) ]
  ├── Barra de búsqueda y filtros rápidos por categoría (FPS, MOBA, Battle Royale, Fighting)
  ├── Grilla de 6 Cards detalladas (Valorant Masters, League of Legends Rift, CS2 Major, Rocket Arena, Fighting Dojo, Fortnite Cup)
  └── Estado "Empty State" con botón de reseteo si no hay coincidencias

[ Modal Interactivo de Detalle ]
  ├── Título del torneo, banner visual, juego, fecha, formato, prizepool y reglas
  ├── Backdrop con blur y bloqueo de scroll en el body
  └── Cierre mediante botón "✕", clic en backdrop o tecla Escape

[ Sección 3: Formulario de Inscripción & Contacto ]
  ├── Inputs: Nombre de Capitán, Gamertag / ID, Email, Discord Tag, Torneo/Juego, Rol en equipo
  ├── Manejo de evento submit con preventDefault()
  ├── Toast / Banner de Éxito verde contextual ("¡Inscripción confirmada! Te contactaremos por Discord")
  └── Reset limpio de formulario

[ Footer ]
  ├── Enlaces a redes competitivas (Twitch, Discord, YouTube, X)
  └── Copyright y badge de titulación "Full-Stack Agentic UI Developer"
```

---

## 3. Límites Técnicos y Tecnologías Prohibidas (Guardrails)

- ⛔ **NO Frameworks SPA/Front**: Prohibido el uso de React, Angular, Vue o Svelte.
- ⛔ **NO Backend / Servidores**: Prohibido crear servidores en Node.js, Express, Python o Java.
- ⛔ **NO Bases de Datos**: Prohibido MongoDB, Firebase, Supabase o SQL.
- ⛔ **NO Recargas de Página**: Toda la transición de vistas debe ser instantánea dentro de `index.html`.
- ⛔ **NO Inline Styles sucios**: Prohibido el uso de `style="..."` cuando existan clases de utilidad de TailwindCSS.
