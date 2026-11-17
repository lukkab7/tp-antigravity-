# Glosario del Proyecto - Nexo E-Sports & Gaming Club

Definición de términos del dominio competitivo y componentes de la interfaz de usuario.

---

## 1. Términos del Dominio (E-Sports & Gaming)

- **Gamertag**: Seudónimo o alias único que identifica a un jugador en las plataformas competitivas.
- **Roster / Escuadra**: Alineación de jugadores titulares y suplentes que componen un equipo competitivo.
- **Prizepool**: Fondo acumulado de premios monetarios o en periféricos a repartir entre los ganadores del torneo.
- **Bracket**: Cuadro eliminatorio que define los cruces y emparejamientos de las partidas.
- **Bootcamp**: Sesión presencial o virtual intensiva de entrenamiento táctico previo a una competición oficial.
- **FPS (First-Person Shooter)**: Género de videojuegos de disparos en primera persona (ej: Valorant, CS2).
- **MOBA (Multiplayer Online Battle Arena)**: Género competitivo de estrategia en arena por equipos (ej: League of Legends).
- **Battle Royale**: Modalidad de supervivencia de todos contra todos hasta quedar una sola escuadra (ej: Fortnite).

---

## 2. Entidades de Interfaz de Usuario (UI)

- **SPA (Single Page Application)**: Aplicación web contenida íntegramente en `index.html` donde las pantallas o vistas se activan y ocultan mediante manipulación del DOM sin recargar la página.
- **Theme Switcher**: Botón interactivo que alterna entre modo oscuro (*Cyberpunk Dark*) y modo claro (*Clean Light*), persistiendo la preferencia en `localStorage`.
- **Tournament Card**: Tarjeta semántica (`<article>`) que resume la información de una competencia (título, juego, fecha, cupos, premio y botón de acción).
- **Details Modal**: Ventana emergente flotante con fondo difuminado (*backdrop blur*) que expone el reglamento, cronograma y requisitos del torneo.
- **Success Toast / Alert**: Notificación visual verde que valida la correcta inscripción del equipo en la interfaz.
- **Force Text White (`.force-text-white`)**: Regla de seguridad de contraste para asegurar texto blanco legible en botones y badges neón tanto en modo claro como en modo oscuro.
- **DoD (Definition of Done)**: Conjunto de criterios de aceptación que certifican que el código cumple con la calidad requerida para los 100 puntos.
