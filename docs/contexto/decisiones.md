# Registro Cronológico de Decisiones (ADR)

Registro ordenado y cronológico de todas las decisiones técnicas tomadas.

---

## [ADR-001] · [2026-11-16 23:06] Adopción de Reglas Maestras AOS
- **Decisión**: Implementación del sistema de reglas globales Antigravity Operating System (`.agents/rules/antigravity_global_rules.md`) vinculado en `GEMINI.md`.
- **Impacto**: Establece el rol de Senior Product Engineer, definición de DoD, control de guardas y metodología SDD.
- **Autorización**: Solicitada y aprobada por el usuario.

---

## [ADR-002] · [2026-11-16 23:10] Creación de Documentación Viva SDD
- **Decisión**: Inicialización del directorio `docs/contexto/` con 6 documentos estándar adaptados de Gentle AI para documentar arquitectura, convenciones, decisiones, glosario, flujo y errores.
- **Impacto**: Estandariza la persistencia de contexto sin depender exclusivamente del historial de chat.
- **Autorización**: Solicitada y aprobada por el usuario.

---

## [ADR-003] · [2026-11-16 23:13] Sincronización Estricta con el Estado Real del Repositorio
- **Decisión**: Actualización de los 6 documentos de contexto basándose exclusivamente en los archivos reales existentes en el workspace.
- **Impacto**: Evita suposiciones no verificadas y mantiene la integridad documental.
- **Autorización**: Solicitada y aprobada por el usuario.

---

## [ADR-004] · [2026-11-16 23:18] Auditoría y Poda Inteligente de Skills
- **Decisión**: Eliminación de 2.862 skills superfluas y preservación de 19 skills especializadas en HTML5, TailwindCSS, a11y, JS Vanilla y SDD.
- **Impacto**: Optimización de espacio y eliminación de ruido contextual.
- **Autorización**: Solicitada y aprobada por el usuario.

---

## [ADR-005] · [2026-11-16 23:30] Definición de Temática de Negocio: Club de Videojuegos & E-Sports
- **Decisión**: Se establece la temática oficial del proyecto como **"NEXO E-Sports & Gaming Club"** para dar cumplimiento a los 5 requisitos de la Clase 07 (SPA de 3 secciones, catálogo de torneos con 6 tarjetas, modales de detalles interactivos, alternancia Modo Claro/Oscuro con `.force-text-white`, menú hamburguesa móvil y formulario de inscripción con feedback verde).
- **Impacto**: Orienta el diseño visual hacia una estética cyberpunk neón violeta, estructura los datos de muestra en torneos competitivos de e-sports y alinea el glosario con la terminología gamer/competitiva.
- **Autorización**: Solicitada explícitamente y confirmada por el usuario.

---

## 🔒 Protocolo de Autorización Previa Obligatoria
Cualquier cambio estructural, cambio de framework, adición/borrado de dependencias o alteración de arquitectura requiere:
1. Notificación previa del impacto.
2. Confirmación explícita del usuario.
3. Registro inmediato en este documento como `[ADR-XXX] · [YYYY-MM-DD HH:mm]`.
