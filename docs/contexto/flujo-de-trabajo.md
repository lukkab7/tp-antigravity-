# Flujo de Trabajo y Ciclo de Vida SDD

Guía metodológica paso a paso para el maquetado y verificación de la aplicación del club de e-sports.

---

## 1. Fases del Flujo de Maquetado SDD

```
[ Fase 1: Maquetado Semántico HTML5 ]
  ├── Estructura de vistas <section id="view-inicio">, <section id="view-catalogo">, <section id="view-formulario">
  ├── Accesibilidad nativa: encabezados lógicos (h1-h3), atributos alt, aria-hidden y roles
  └── Marcado del modal accesible y botón de cierre

[ Fase 2: Estilos & Temas TailwindCSS ]
  ├── Tokens de Modo Oscuro (#0b0a14) y Modo Claro (#f1f5f9)
  ├── Efectos de gradiente violeta/cyan e interactividad hover
  ├── Inclusión de regla .force-text-white para preservación de contraste
  └── Diseño responsive con menú hamburguesa táctil (< 768px)

[ Fase 3: Dinamismo en JavaScript Vanilla (app.js) ]
  ├── Router ligero para cambio de vistas SPA sin recarga
  ├── Apertura, población dinámica y cierre del Modal de Torneos (Escape + Backdrop click)
  ├── Selector y persistencia del tema Dark / Light
  ├── Filtro y búsqueda en tiempo real de torneos
  └── Intercepción del submit de formulario con preventDefault() y toast verde de éxito
```

---

## 2. Definition of Done (DoD) - Verificación de los 4 Estados UI

Toda la aplicación debe validar los siguientes 4 estados:
1. **Loading / Transition State**: Transiciones fluidas entre secciones sin saltos de maquetado ni parpadeos.
2. **Empty State**: Si el usuario busca un juego inexistente en el catálogo, se muestra un mensaje informativo cordial con botón "Ver todos los torneos".
3. **Error State**: Validación de campos del formulario marcando en rojo los inputs incompletos con mensaje claro.
4. **Success State**: Al completar el registro, se despliega el aviso visual verde de éxito con confirmación y animación de entrada.

---

## 3. Checklist de Certificación (Rúbrica 100 Puntos)

- [ ] **Requisito 1**: Archivo único `index.html` con 3 vistas SPA alternadas con fluidez.
- [ ] **Requisito 2**: Catálogo de 6 torneos con fotos atractivas y modales interactivos con botón de cierre.
- [ ] **Requisito 3**: Menú hamburguesa táctil, switch Dark/Light con `.force-text-white` y aviso verde.
- [ ] **Requisito 4**: Los 6 documentos de `docs/contexto/` completos y vinculados en `GEMINI.md`.
- [ ] **Requisito 5**: Generación del archivo `REPORTE_VERIFICACION_SDD.md`.
