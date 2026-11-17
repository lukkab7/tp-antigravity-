// app.js - Lógica interactiva para NEXO E-Sports & Gaming Club

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Base de Datos de Torneos (6 Tarjetas Detalladas) ---
  const TOURNAMENTS = [
    {
      id: 'valorant-masters',
      title: 'Valorant Champions Masters',
      game: 'Valorant (FPS)',
      category: 'fps',
      date: '28 Nov 2026',
      time: '18:00hs GMT-3',
      format: '5v5 Táctico - Doble Eliminación',
      prizepool: '$1.500.000 ARS',
      slots: '16 Escuadras (Quedan 3)',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&auto=format&fit=crop&q=80',
      description: 'El torneo insignia de tiradores tácticos de NEXO. Los mejores equipos compiten en un bracket de eliminación doble con transmisión oficial en vivo por Twitch y casters profesionales.',
      rules: 'Todos los jugadores deben poseer rango Platino o superior. Servidor oficial Santiago/Buenos Aires. Anti-cheat Vanguard activo obligatorio.'
    },
    {
      id: 'lol-rift-clash',
      title: 'League of Legends: Rift Clash',
      game: 'League of Legends (MOBA)',
      category: 'moba',
      date: '02 Dic 2026',
      time: '19:30hs GMT-3',
      format: '5v5 Torneo Grieta del Invocador (Bo3)',
      prizepool: '$2.000.000 ARS + Riot Points',
      slots: '32 Equipos (Quedan 8)',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=700&auto=format&fit=crop&q=80',
      description: 'Lucha por el honor y el nexo en la Grieta del Invocador. Fase de grupos seguida de playoffs presenciales en la arena NEXO.',
      rules: 'Cuentas en servidor LAS nivel 30+. Baneo estándar de torneo competitivo. Prohibido toxicidad o smurfing no registrado.'
    },
    {
      id: 'cs2-regional-major',
      title: 'Counter-Strike 2 Regional Major',
      game: 'Counter-Strike 2 (FPS)',
      category: 'fps',
      date: '05 Dic 2026',
      time: '17:00hs GMT-3',
      format: '5v5 Modo Competitivo MR12',
      prizepool: '$1.800.000 ARS + Skins Cuchillos',
      slots: '16 Equipos (Quedan 2)',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&auto=format&fit=crop&q=80',
      description: 'Disparos precisos, control de utilidades y pura adrenalina en servidores de 128-subtick. Gran final al mejor de 5 mapas.',
      rules: 'Servidores privados Gamers Club / Faceit con grabación obligatoria de demos POV por cada capitán.'
    },
    {
      id: 'rocket-championship',
      title: 'Rocket League Turbo Cup',
      game: 'Rocket League (Arcade/Deporte)',
      category: 'arcade',
      date: '10 Dic 2026',
      time: '20:00hs GMT-3',
      format: '3v3 Balón Rueda Libre (Bo5)',
      prizepool: '$900.000 ARS',
      slots: '24 Tríos (Quedan 6)',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=700&auto=format&fit=crop&q=80',
      description: 'Acrobacias aéreas a máxima velocidad. La copa abierta para tríos competitivos que buscan clasificarse a la liga de verano.',
      rules: 'Cross-platform habilitado (PC, PlayStation, Xbox). Arena estándar DFH Stadium y Champions Field.'
    },
    {
      id: 'fortnite-trio-battle',
      title: 'Fortnite Battle Royale Showdown',
      game: 'Fortnite (Battle Royale)',
      category: 'battle-royale',
      date: '12 Dic 2026',
      time: '16:00hs GMT-3',
      format: 'Tríos - Modalidad Zero Build (6 Partidas)',
      prizepool: '$1.200.000 ARS',
      slots: '33 Tríos (Últimos 4 cupos)',
      image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=700&auto=format&fit=crop&q=80',
      description: 'Supervivencia, estrategia y posicionamiento en modo Cero Construcción. Suma puntos por eliminación y posición final.',
      rules: 'Puntaje oficial FNCS. Transmisión obligatoria con delay de 2 minutos para capitanes.'
    },
    {
      id: 'tekken-fighting-dojo',
      title: 'Tekken 8 & Street Fighter 6 Dojo',
      game: 'Juegos de Pelea (Fighting)',
      category: 'fighting',
      date: '15 Dic 2026',
      time: '18:30hs GMT-3',
      format: '1v1 Individual Doble Eliminación',
      prizepool: '$750.000 ARS + Arcade Sticks',
      slots: '64 Jugadores (Quedan 12)',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=700&auto=format&fit=crop&q=80',
      description: 'La arena de peleas de NEXO abre sus puertas. Demuestra tu precisión en combos y dominación neutral en pantallas de 240Hz.',
      rules: 'Mandos y sticks homologados por la FGC. Set al mejor de 3 rounds, finales al mejor de 5.'
    }
  ];

  // --- 2. Elementos Clave del DOM ---
  const views = {
    inicio: document.getElementById('view-inicio'),
    catalogo: document.getElementById('view-catalogo'),
    formulario: document.getElementById('view-formulario')
  };

  const navLinks = document.querySelectorAll('[data-target-view]');
  const mobileMenuBtn = document.getElementById('btn-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const cardsContainer = document.getElementById('cards-container');
  const emptyState = document.getElementById('empty-state');
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('[data-filter]');

  // Modal
  const modal = document.getElementById('tournament-modal');
  const modalCloseBtn = document.getElementById('btn-close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalGame = document.getElementById('modal-game');
  const modalPrizepool = document.getElementById('modal-prizepool');
  const modalDate = document.getElementById('modal-date');
  const modalSlots = document.getElementById('modal-slots');
  const modalFormat = document.getElementById('modal-format');
  const modalDescription = document.getElementById('modal-description');
  const modalRules = document.getElementById('modal-rules');
  const modalImage = document.getElementById('modal-image');
  const modalJoinBtn = document.getElementById('btn-modal-join');

  // Formulario
  const joinForm = document.getElementById('join-form');
  const successToast = document.getElementById('success-toast');
  const tournamentSelect = document.getElementById('form-tournament');

  // --- 3. Sistema de Vistas SPA (Sin Recarga) ---
  function showView(targetViewId) {
    Object.keys(views).forEach(key => {
      if (key === targetViewId) {
        views[key].classList.remove('hidden');
        views[key].setAttribute('aria-hidden', 'false');
      } else {
        views[key].classList.add('hidden');
        views[key].setAttribute('aria-hidden', 'true');
      }
    });

    // Actualizar estilos de enlaces activos
    navLinks.forEach(link => {
      const isCurrent = link.getAttribute('data-target-view') === targetViewId;
      if (isCurrent) {
        link.classList.add('text-purple-400', 'font-bold');
        link.classList.remove('text-slate-300', 'text-slate-600');
      } else {
        link.classList.remove('text-purple-400', 'font-bold');
        link.classList.add('text-slate-300');
      }
    });

    // Cerrar menú móvil si está abierto
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }

    // Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target-view');
      showView(target);
    });
  });

  // Botones de llamada a la acción en el Hero
  const btnHeroExplore = document.getElementById('btn-hero-explore');
  const btnHeroJoin = document.getElementById('btn-hero-join');
  if (btnHeroExplore) btnHeroExplore.addEventListener('click', () => showView('catalogo'));
  if (btnHeroJoin) btnHeroJoin.addEventListener('click', () => showView('formulario'));

  // --- 4. Alternancia de Modo Claro / Modo Oscuro ---
  function initTheme() {
    const savedTheme = localStorage.getItem('nexo-theme') || 'dark';
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('nexo-theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('nexo-theme', 'dark');
    }
  }

  themeToggleBtns.forEach(btn => btn.addEventListener('click', toggleTheme));
  initTheme();

  // --- 5. Menú Móvil Táctil (Hamburguesa) ---
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- 6. Renderizado de Catálogo de Tarjetas ---
  function renderTournaments(tournamentsToRender) {
    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';

    if (tournamentsToRender.length === 0) {
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    tournamentsToRender.forEach(t => {
      const card = document.createElement('article');
      card.className = 'tournament-card group relative bg-slate-900/80 rounded-2xl border border-purple-500/20 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col';
      card.setAttribute('aria-label', `Torneo ${t.title}`);

      card.innerHTML = `
        <div class="relative h-48 w-full overflow-hidden">
          <img src="${t.image}" alt="Banner del torneo ${t.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <span class="absolute top-3 right-3 bg-purple-600/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold force-text-white shadow">
            ${t.game}
          </span>
          <span class="absolute bottom-3 left-3 bg-emerald-500/90 px-2.5 py-1 rounded-md text-xs font-bold force-text-white flex items-center gap-1 shadow">
            <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            ${t.prizepool}
          </span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-purple-400 font-mono mb-2">
              <span>📅 ${t.date}</span>
              <span>🎮 ${t.slots}</span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1 mb-2">
              ${t.title}
            </h3>
            <p class="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4">
              ${t.description}
            </p>
          </div>
          <button type="button" class="btn-open-modal w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 force-text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50" data-id="${t.id}">
            <span>Ver Detalles & Reglas</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      `;

      cardsContainer.appendChild(card);
    });

    // Asignar listeners a los nuevos botones de detalles
    document.querySelectorAll('.btn-open-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openModal(id);
      });
    });
  }

  // --- 7. Modal de Detalles Interactivo ---
  function openModal(id) {
    const tournament = TOURNAMENTS.find(item => item.id === id);
    if (!tournament || !modal) return;

    modalTitle.textContent = tournament.title;
    modalGame.textContent = tournament.game;
    modalPrizepool.textContent = tournament.prizepool;
    modalDate.textContent = `${tournament.date} · ${tournament.time}`;
    modalSlots.textContent = tournament.slots;
    modalFormat.textContent = tournament.format;
    modalDescription.textContent = tournament.description;
    modalRules.textContent = tournament.rules;
    modalImage.src = tournament.image;
    modalImage.alt = `Banner detallado de ${tournament.title}`;

    // Configurar botón para pre-seleccionar en el formulario
    modalJoinBtn.onclick = () => {
      closeModal();
      showView('formulario');
      if (tournamentSelect) {
        tournamentSelect.value = tournament.id;
      }
    };

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // --- 8. Filtros y Búsqueda de Torneos ---
  let activeFilter = 'all';

  function applyFilterAndSearch() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = TOURNAMENTS.filter(t => {
      const matchesCategory = (activeFilter === 'all') || (t.category === activeFilter);
      const matchesSearch = t.title.toLowerCase().includes(query) ||
                            t.game.toLowerCase().includes(query) ||
                            t.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    renderTournaments(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilterAndSearch);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-purple-600', 'text-white', 'shadow-purple-500/30');
        b.classList.add('bg-slate-800', 'text-slate-400');
      });

      btn.classList.remove('bg-slate-800', 'text-slate-400');
      btn.classList.add('bg-purple-600', 'text-white', 'shadow-purple-500/30');

      activeFilter = btn.getAttribute('data-filter') || 'all';
      applyFilterAndSearch();
    });
  });

  const resetFiltersBtn = document.getElementById('btn-reset-filters');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      activeFilter = 'all';
      filterButtons.forEach(b => {
        const isAll = b.getAttribute('data-filter') === 'all';
        if (isAll) {
          b.classList.add('bg-purple-600', 'text-white');
          b.classList.remove('bg-slate-800', 'text-slate-400');
        } else {
          b.classList.remove('bg-purple-600', 'text-white');
          b.classList.add('bg-slate-800', 'text-slate-400');
        }
      });
      applyFilterAndSearch();
    });
  }

  // --- 9. Formulario Interactivo con Toast de Éxito ---
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const teamName = document.getElementById('team-name').value.trim();
      const captainName = document.getElementById('captain-name').value.trim();
      const email = document.getElementById('email').value.trim();
      const discord = document.getElementById('discord-tag').value.trim();
      const tournament = document.getElementById('form-tournament').value;

      // Validación simple
      if (!teamName || !captainName || !email || !discord || !tournament) {
        alert('Por favor completa todos los campos obligatorios.');
        return;
      }

      // Feedback de Éxito (Estado Success)
      if (successToast) {
        successToast.classList.remove('hidden');
        successToast.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Resetear campos
      joinForm.reset();

      // Ocultar mensaje automáticamente luego de 8 segundos
      setTimeout(() => {
        if (successToast) successToast.classList.add('hidden');
      }, 8000);
    });
  }

  // Poblar select del formulario
  if (tournamentSelect) {
    tournamentSelect.innerHTML = '<option value="" disabled selected>Selecciona una competición oficial...</option>';
    TOURNAMENTS.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `${t.title} (${t.game})`;
      tournamentSelect.appendChild(opt);
    });
  }

  // Inicializar renderizado con los 6 torneos
  renderTournaments(TOURNAMENTS);
});
