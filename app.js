/**
 * Puri Darshan - Interactive Application Engine
 * High-performance, modern client-side scripting for Sri Kshetra digital pilgrimage.
 */

(function () {
  "use strict";

  // Application State
  const state = {
    selectedCategory: "all",
    searchQuery: "",
    activeModalPlace: null,
    activeItineraryId: "one-day-express",
    activeBhogCategory: "all",
    savedYatraPlaces: [],
    isSoundscapePlaying: false,
    audioContext: null,
    audioNodes: null
  };

  // DOM Elements Cache
  const dom = {
    placesGrid: document.getElementById("placesGrid"),
    categoryTabs: document.getElementById("categoryTabs"),
    searchInput: document.getElementById("searchInput"),
    resultsCount: document.getElementById("resultsCount"),
    modalOverlay: document.getElementById("placeModalOverlay"),
    modalContent: document.getElementById("placeModalContent"),
    sevaTimeline: document.getElementById("sevaTimeline"),
    activeSevaTitle: document.getElementById("activeSevaTitle"),
    activeSevaTime: document.getElementById("activeSevaTime"),
    currentTimeDisplay: document.getElementById("currentTimeDisplay"),
    bhogGrid: document.getElementById("bhogGrid"),
    bhogFilters: document.getElementById("bhogFilters"),
    itineraryTabs: document.getElementById("itineraryTabs"),
    itineraryDisplay: document.getElementById("itineraryDisplay"),
    faqContainer: document.getElementById("faqContainer"),
    yatraDrawer: document.getElementById("yatraDrawer"),
    yatraCountBadge: document.getElementById("yatraCountBadge"),
    yatraList: document.getElementById("yatraList"),
    soundscapeBtn: document.getElementById("soundscapeBtn"),
    mobileMenuBtn: document.getElementById("mobileMenuBtn"),
    mainNav: document.getElementById("mainNav"),
    sankhaSvgWrapper: document.getElementById("sankhaSvgWrapper"),
    mapTooltip: document.getElementById("mapTooltip")
  };

  /* ==========================================================================
     Initialization
     ========================================================================== */
  function init() {
    loadSavedYatra();
    renderCategoryTabs();
    renderPlaces();
    renderInteractiveSankhaMap();
    renderSevaTimeline();
    updateLiveSevaClock();
    setInterval(updateLiveSevaClock, 30000); // Check every 30s
    renderMahaprasadBhog();
    renderItinerary();
    renderFaqs();
    setupEventListeners();
  }

  /* ==========================================================================
     Category Tabs & Filtering
     ========================================================================== */
  function renderCategoryTabs() {
    if (!dom.categoryTabs || !window.PURI_DATA) return;
    
    dom.categoryTabs.innerHTML = window.PURI_DATA.categories
      .map(
        (cat) => `
        <button class="category-tab-btn ${cat.id === state.selectedCategory ? "active" : ""}" data-category="${cat.id}">
          <span>${cat.name}</span>
          <span class="tab-badge">${cat.count}</span>
        </button>
      `
      )
      .join("");

    dom.categoryTabs.querySelectorAll(".category-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selectedCategory = btn.dataset.category;
        dom.categoryTabs.querySelectorAll(".category-tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderPlaces();
      });
    });
  }

  /* ==========================================================================
     Places Directory & Cards
     ========================================================================== */
  function renderPlaces() {
    if (!dom.placesGrid || !window.PURI_DATA) return;

    const filtered = window.PURI_DATA.places.filter((place) => {
      const matchesCategory =
        state.selectedCategory === "all" || place.category === state.selectedCategory;
      const query = state.searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        place.name.toLowerCase().includes(query) ||
        place.odiaName.toLowerCase().includes(query) ||
        place.significance.toLowerCase().includes(query) ||
        place.deity.toLowerCase().includes(query) ||
        place.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    if (dom.resultsCount) {
      dom.resultsCount.textContent = `Showing ${filtered.length} of ${window.PURI_DATA.places.length} sacred destinations`;
    }

    if (filtered.length === 0) {
      dom.placesGrid.innerHTML = `
        <div class="empty-results-box">
          <h4>No Sacred Places Found</h4>
          <p>No places matched "${state.searchQuery}". Try searching for 'Gambhira', 'Mandir', 'Sarovara', or select another category.</p>
        </div>
      `;
      return;
    }

    dom.placesGrid.innerHTML = filtered
      .map((place) => {
        const isSaved = state.savedYatraPlaces.includes(place.id);
        const categoryMeta = window.PURI_DATA.categories.find((c) => c.id === place.category) || { name: "Pilgrimage Site" };
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`;

        return `
          <article class="place-card" data-place-id="${place.id}">
            <div class="place-card-image-wrap">
              <img src="${place.heroImage}" alt="${place.name}" class="place-card-image" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.position='static';" />
              <div class="place-category-badge">${categoryMeta.name}</div>
              <button class="bookmark-quick-btn ${isSaved ? "bookmarked" : ""}" data-id="${place.id}" title="${isSaved ? "Remove from Yatra" : "Add to My Yatra"}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
            <div class="place-card-body">
              <div class="place-odia-title">${place.odiaName}</div>
              <h3 class="place-card-title">${place.name}</h3>
              <div class="place-card-subtitle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${place.distance}</span>
              </div>
              <p class="place-card-excerpt">${place.description}</p>
              <div class="place-card-meta">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  ${place.timings.split("|")[0]}
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  ${place.tags[0] || "Sacred"}
                </span>
              </div>
              <div class="place-card-actions">
                <button class="btn-card-details view-details-btn" data-id="${place.id}">
                  Explore Lila & Darshan
                </button>
                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-map" title="Open in Google Maps">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Attach card event listeners
    dom.placesGrid.querySelectorAll(".view-details-btn").forEach((btn) => {
      btn.addEventListener("click", () => openPlaceModal(btn.dataset.id));
    });

    dom.placesGrid.querySelectorAll(".bookmark-quick-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleYatraBookmark(btn.dataset.id);
      });
    });
  }

  /* ==========================================================================
     Interactive Sankha Kshetra SVG Map
     ========================================================================== */
  function renderInteractiveSankhaMap() {
    if (!dom.sankhaSvgWrapper || !window.PURI_DATA) return;

    // Relative SVG Coordinates for key landmarks on the conch shell geometry
    const mapCoordinates = {
      "jagannath-temple": { cx: 480, cy: 260, zone: "center" },
      "gambhira": { cx: 460, cy: 320, zone: "caitanya" },
      "siddha-bakula": { cx: 430, cy: 350, zone: "caitanya" },
      "tota-gopinatha": { cx: 410, cy: 380, zone: "caitanya" },
      "haridas-thakur-samadhi": { cx: 530, cy: 440, zone: "caitanya" },
      "mahodadhi-beach": { cx: 470, cy: 450, zone: "waters" },
      "sarvabhauma-bhattacharya-home": { cx: 505, cy: 290, zone: "caitanya" },
      "sweta-ganga": { cx: 435, cy: 290, zone: "waters" },
      "markandeya-sarovara": { cx: 370, cy: 210, zone: "waters" },
      "narendra-sarovara": { cx: 580, cy: 190, zone: "waters" },
      "gundicha-temple": { cx: 640, cy: 140, zone: "center" },
      "indradyumna-sarovara": { cx: 680, cy: 120, zone: "waters" },
      "atharanala-bridge": { cx: 720, cy: 80, zone: "center" },
      "sri-radha-rasikaraja-iskcon": { cx: 610, cy: 90, zone: "mathas" },
      "lokanatha-temple": { cx: 310, cy: 310, zone: "mathas" },
      "cakra-tirtha": { cx: 640, cy: 360, zone: "waters" },
      "rohini-kunda": { cx: 495, cy: 245, zone: "waters" },
      "alarnath-temple": { cx: 160, cy: 390, zone: "mathas" }
    };

    let pinsMarkup = "";
    window.PURI_DATA.places.forEach((place) => {
      const coords = mapCoordinates[place.id];
      if (!coords) return;

      const fillColors = {
        center: "#F59E0B",
        caitanya: "#EC4899",
        waters: "#0284C7",
        mathas: "#10B981"
      };
      const pinColor = fillColors[coords.zone] || "#F59E0B";

      pinsMarkup += `
        <g class="map-pin" data-id="${place.id}" data-name="${place.name}" data-significance="${place.significance}" transform="translate(${coords.cx}, ${coords.cy})">
          <circle cx="0" cy="0" r="14" class="pin-pulse" fill="${pinColor}" fill-opacity="0.3"></circle>
          <circle cx="0" cy="0" r="7" fill="${pinColor}" stroke="#FFFFFF" stroke-width="2"></circle>
          <text x="12" y="4" class="pin-label">${place.name.split(" ")[0]} ${place.name.split(" ")[1] || ""}</text>
        </g>
      `;
    });

    dom.sankhaSvgWrapper.innerHTML = `
      <svg viewBox="0 0 900 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="conchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.25"/>
            <stop offset="50%" stop-color="#DC2626" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#0284C7" stop-opacity="0.2"/>
          </linearGradient>
          <radialGradient id="oceanGlow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stop-color="#0284C7" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#090D16" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- Ocean Shore at the base -->
        <path d="M 0,420 Q 250,380 450,430 T 900,420 L 900,500 L 0,500 Z" fill="url(#oceanGlow)" />
        <path d="M 0,430 Q 300,400 500,440 T 900,430" fill="none" stroke="#38BDF8" stroke-width="2" stroke-opacity="0.5" stroke-dasharray="8,6" />

        <!-- Mystical Sankha Kshetra Conch Shell Outline -->
        <path d="M 480,260 
                 C 540,240 650,200 720,80 
                 C 660,60 560,90 480,140 
                 C 380,180 320,220 280,290 
                 C 240,360 210,410 160,390
                 C 200,440 340,460 470,450 
                 C 580,440 680,390 640,360
                 C 600,320 540,300 480,260 Z" 
              fill="url(#conchGradient)" 
              stroke="#F59E0B" 
              stroke-width="1.8" 
              stroke-opacity="0.6"
              stroke-dasharray="6,4" />

        <!-- Grand Bada Danda Avenue (connecting Jagannath Temple to Gundicha) -->
        <line x1="480" y1="260" x2="640" y2="140" stroke="#FDE68A" stroke-width="4" stroke-opacity="0.5" stroke-linecap="round" />
        <text x="560" y="195" fill="#FDE68A" font-size="10" font-weight="700" letter-spacing="1">BADA DANDA</text>

        <!-- Ocean Label -->
        <text x="470" y="480" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle" letter-spacing="3">MAHODADHI (BAY OF BENGAL)</text>

        <!-- Sacred Pins -->
        ${pinsMarkup}
      </svg>
    `;

    // Map pin interactions
    const pins = dom.sankhaSvgWrapper.querySelectorAll(".map-pin");
    pins.forEach((pin) => {
      pin.addEventListener("mouseenter", (e) => {
        const name = pin.dataset.name;
        const significance = pin.dataset.significance;
        if (!dom.mapTooltip) return;

        dom.mapTooltip.innerHTML = `
          <h5>${name}</h5>
          <p>${significance}</p>
        `;
        dom.mapTooltip.style.display = "block";

        const rect = dom.sankhaSvgWrapper.getBoundingClientRect();
        const pinRect = pin.getBoundingClientRect();
        dom.mapTooltip.style.left = `${pinRect.left - rect.left + pinRect.width / 2}px`;
        dom.mapTooltip.style.top = `${pinRect.top - rect.top}px`;
      });

      pin.addEventListener("mouseleave", () => {
        if (dom.mapTooltip) dom.mapTooltip.style.display = "none";
      });

      pin.addEventListener("click", () => {
        openPlaceModal(pin.dataset.id);
      });
    });
  }

  /* ==========================================================================
     Details Modal / Drawer
     ========================================================================== */
  function openPlaceModal(placeId) {
    if (!window.PURI_DATA) return;
    const place = window.PURI_DATA.places.find((p) => p.id === placeId);
    if (!place || !dom.modalOverlay || !dom.modalContent) return;

    state.activeModalPlace = place;
    const isSaved = state.savedYatraPlaces.includes(place.id);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`;

    dom.modalContent.innerHTML = `
      <div class="modal-hero-banner">
        <img src="${place.heroImage}" alt="${place.name}" />
        <div class="modal-hero-gradient"></div>
        <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="modal-body-content">
        <div class="modal-title-row">
          <div class="modal-odia-name">${place.odiaName}</div>
          <h2 class="modal-title">${place.name}</h2>
          <div class="modal-subtitle">${place.subtitle}</div>
        </div>

        <div class="modal-quick-meta">
          <div class="meta-field">
            <h6>Primary Deity</h6>
            <p>${place.deity}</p>
          </div>
          <div class="meta-field">
            <h6>Darshan Timings</h6>
            <p>${place.timings}</p>
          </div>
          <div class="meta-field">
            <h6>Distance / Zone</h6>
            <p>${place.distance}</p>
          </div>
          <div class="meta-field">
            <h6>Spiritual Significance</h6>
            <p>${place.significance}</p>
          </div>
        </div>

        <nav class="modal-tabs-nav" id="modalTabsNav">
          <button class="modal-tab-btn active" data-tab="lila">Transcendental Lila</button>
          <button class="modal-tab-btn" data-tab="scriptures">Scriptural Glory</button>
          <button class="modal-tab-btn" data-tab="highlights">Sacred Highlights</button>
          <button class="modal-tab-btn" data-tab="guidelines">Pilgrim Guidelines</button>
        </nav>

        <div class="modal-tab-pane active" id="pane-lila">
          <p style="margin-bottom: 1.2rem; font-size: 1.05rem; color: #F3F4F6;">${place.description}</p>
          <h4 style="color: var(--color-gold-400); margin-bottom: 0.5rem; font-family: var(--font-serif);">Divine Pastime (Lila-Katha)</h4>
          <p>${place.pastime}</p>
        </div>

        <div class="modal-tab-pane" id="pane-scriptures">
          <div class="scriptural-quote-card">
            <div class="quote-verse">"${place.scripturalQuote.verse}"</div>
            <div class="quote-source">— ${place.scripturalQuote.source}</div>
            <div class="quote-trans"><strong>Translation:</strong> ${place.scripturalQuote.translation}</div>
          </div>
          <p>The scriptures celebrate Sri Purusottama Kshetra as the realm where material boundaries dissolve into pure prema. Visiting this sacred site with humility invokes eternal spiritual benefit.</p>
        </div>

        <div class="modal-tab-pane" id="pane-highlights">
          <ul style="list-style-type: none; display: flex; flex-direction: column; gap: 0.8rem;">
            ${place.highlights
              .map(
                (h) => `
              <li style="display: flex; align-items: flex-start; gap: 0.6rem;">
                <span style="color: var(--color-gold-400); font-weight: bold;">✦</span>
                <span>${h}</span>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>

        <div class="modal-tab-pane" id="pane-guidelines">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <strong style="color: #FBBF24;">Dress Code:</strong>
              <p>${place.practicalTips.dressCode}</p>
            </div>
            <div>
              <strong style="color: #FBBF24;">Entry Regulations:</strong>
              <p>${place.practicalTips.entryRules}</p>
            </div>
            <div>
              <strong style="color: #FBBF24;">Optimal Timing:</strong>
              <p>${place.practicalTips.bestTimeToVisit}</p>
            </div>
          </div>
        </div>

        <div class="modal-footer-actions">
          <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size: 0.88rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            Directions in Google Maps
          </a>
          <button class="btn-primary" id="modalBookmarkBtn" style="font-size: 0.88rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>${isSaved ? "Saved to My Yatra" : "Add to My Yatra"}</span>
          </button>
        </div>
      </div>
    `;

    // Modal internal listeners
    document.getElementById("modalCloseBtn").addEventListener("click", closeModal);

    const modalTabsNav = document.getElementById("modalTabsNav");
    modalTabsNav.querySelectorAll(".modal-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        modalTabsNav.querySelectorAll(".modal-tab-btn").forEach((b) => b.classList.remove("active"));
        dom.modalContent.querySelectorAll(".modal-tab-pane").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        const targetPane = dom.modalContent.querySelector(`#pane-${btn.dataset.tab}`);
        if (targetPane) targetPane.classList.add("active");
      });
    });

    const modalBookmarkBtn = document.getElementById("modalBookmarkBtn");
    modalBookmarkBtn.addEventListener("click", () => {
      toggleYatraBookmark(place.id);
      const updatedSaved = state.savedYatraPlaces.includes(place.id);
      modalBookmarkBtn.querySelector("span").textContent = updatedSaved ? "Saved to My Yatra" : "Add to My Yatra";
      modalBookmarkBtn.querySelector("svg").setAttribute("fill", updatedSaved ? "currentColor" : "none");
    });

    dom.modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!dom.modalOverlay) return;
    dom.modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
    state.activeModalPlace = null;
  }

  /* ==========================================================================
     Real-Time 24-Hour Dina Seva Clock & Tracker
     ========================================================================== */
  function updateLiveSevaClock() {
    const now = new Date();
    // Format Puri IST time
    const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
    const timeStr = now.toLocaleTimeString("en-US", options);
    
    if (dom.currentTimeDisplay) {
      dom.currentTimeDisplay.textContent = `${timeStr} (Puri Time)`;
    }

    // Convert current time in IST to minutes of the day (0 - 1439)
    const istDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentMinutes = istDate.getHours() * 60 + istDate.getMinutes();

    if (!window.PURI_DATA || !window.PURI_DATA.dailySevas) return;

    let activeSeva = window.PURI_DATA.dailySevas.find(
      (seva) => currentMinutes >= seva.startMinutes && currentMinutes < seva.endMinutes
    );

    // If night after 23:45 or early morning before 05:00
    if (!activeSeva) {
      activeSeva = {
        name: "Ratri Pahuda (Lord in Divine Slumber)",
        odiaName: "ରାତ୍ରି ପହୁଡ଼",
        time: "11:45 PM – 05:00 AM",
        description: "The sanctum is sealed as Lord Jagannatha rests peacefully. Temple gates awaken at 5:00 AM for Dwaraphita and Mangala Alati."
      };
    }

    if (dom.activeSevaTitle) {
      dom.activeSevaTitle.textContent = `${activeSeva.name} (${activeSeva.odiaName})`;
    }
    if (dom.activeSevaTime) {
      dom.activeSevaTime.textContent = activeSeva.time;
    }

    // Update cards in timeline
    if (dom.sevaTimeline) {
      const cards = dom.sevaTimeline.querySelectorAll(".seva-step-card");
      cards.forEach((card) => {
        const sevaId = parseInt(card.dataset.id, 10);
        if (activeSeva.id && sevaId === activeSeva.id) {
          card.classList.add("active-seva");
        } else {
          card.classList.remove("active-seva");
        }
      });
    }
  }

  function renderSevaTimeline() {
    if (!dom.sevaTimeline || !window.PURI_DATA) return;

    dom.sevaTimeline.innerHTML = window.PURI_DATA.dailySevas
      .map(
        (seva) => `
        <div class="seva-step-card" data-id="${seva.id}">
          <div class="seva-step-marker">${seva.id}</div>
          <div class="seva-card-content">
            <div class="seva-header-line">
              <h4 class="seva-title">${seva.name} <span style="font-size: 0.85rem; color: var(--color-gold-400); font-weight: normal;">(${seva.odiaName})</span></h4>
              <span class="seva-time-tag">${seva.time}</span>
            </div>
            <p class="seva-desc">${seva.description}</p>
            <div class="seva-spiritual-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              ${seva.significance}
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  /* ==========================================================================
     Mahaprasadam & Chhappan Bhog
     ========================================================================== */
  function renderMahaprasadBhog() {
    if (!dom.bhogGrid || !window.PURI_DATA) return;

    const items = window.PURI_DATA.mahaprasad.items;
    const categories = ["all", ...new Set(items.map((i) => i.category))];

    if (dom.bhogFilters) {
      dom.bhogFilters.innerHTML = categories
        .map(
          (cat) => `
          <button class="bhog-filter-btn ${cat === state.activeBhogCategory ? "active" : ""}" data-category="${cat}">
            ${cat === "all" ? "All Offerings" : cat}
          </button>
        `
        )
        .join("");

      dom.bhogFilters.querySelectorAll(".bhog-filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.activeBhogCategory = btn.dataset.category;
          dom.bhogFilters.querySelectorAll(".bhog-filter-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          filterBhogItems();
        });
      });
    }

    filterBhogItems();
  }

  function filterBhogItems() {
    if (!dom.bhogGrid || !window.PURI_DATA) return;
    const filtered = window.PURI_DATA.mahaprasad.items.filter(
      (item) => state.activeBhogCategory === "all" || item.category === state.activeBhogCategory
    );

    dom.bhogGrid.innerHTML = filtered
      .map(
        (item) => `
        <div class="bhog-card">
          <div class="bhog-category-tag">${item.category}</div>
          <h4 class="bhog-title">${item.name}</h4>
          <div class="bhog-taste">Flavor: ${item.taste}</div>
          <p class="bhog-desc">${item.description}</p>
        </div>
      `
      )
      .join("");
  }

  /* ==========================================================================
     Curated Itineraries
     ========================================================================== */
  function renderItinerary() {
    if (!dom.itineraryTabs || !dom.itineraryDisplay || !window.PURI_DATA) return;

    dom.itineraryTabs.innerHTML = window.PURI_DATA.itineraries
      .map(
        (itin) => `
        <button class="itinerary-tab-btn ${itin.id === state.activeItineraryId ? "active" : ""}" data-id="${itin.id}">
          ${itin.title}
        </button>
      `
      )
      .join("");

    dom.itineraryTabs.querySelectorAll(".itinerary-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeItineraryId = btn.dataset.id;
        dom.itineraryTabs.querySelectorAll(".itinerary-tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        displayActiveItinerary();
      });
    });

    displayActiveItinerary();
  }

  function displayActiveItinerary() {
    const itin = window.PURI_DATA.itineraries.find((i) => i.id === state.activeItineraryId);
    if (!itin || !dom.itineraryDisplay) return;

    dom.itineraryDisplay.innerHTML = `
      <div class="itinerary-header-info">
        <div>
          <span class="sacred-pill" style="margin-bottom: 0.5rem;">${itin.tag}</span>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: #FFFFFF;">${itin.title}</h3>
          <p style="color: var(--color-text-muted); font-size: 0.95rem;">Recommended for: ${itin.suitability}</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--color-gold-400);">${itin.duration}</div>
          <span style="font-size: 0.8rem; color: var(--color-text-muted);">${itin.stops.length} Pilgrimage Milestones</span>
        </div>
      </div>

      <div class="itinerary-stops-flow">
        ${itin.stops
          .map((stop, idx) => {
            const place = window.PURI_DATA.places.find((p) => p.id === stop.placeId) || {};
            return `
            <div class="stop-card">
              <div class="stop-time">Stop ${idx + 1} • ${stop.time}</div>
              <div class="stop-title">${place.name || stop.label}</div>
              <div class="stop-desc">${stop.label}</div>
            </div>
          `;
          })
          .join("")}
      </div>
    `;
  }

  /* ==========================================================================
     FAQs Accordion
     ========================================================================== */
  function renderFaqs() {
    if (!dom.faqContainer || !window.PURI_DATA) return;

    dom.faqContainer.innerHTML = window.PURI_DATA.faqs
      .map(
        (faq, idx) => `
        <div class="faq-item ${idx === 0 ? "active" : ""}">
          <button class="faq-question">
            <span>${faq.q}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${faq.a}</p>
          </div>
        </div>
      `
      )
      .join("");

    dom.faqContainer.querySelectorAll(".faq-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains("active");
        dom.faqContainer.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    });
  }

  /* ==========================================================================
     Saved Yatra (Pilgrim Itinerary & LocalStorage)
     ========================================================================== */
  function loadSavedYatra() {
    try {
      const stored = localStorage.getItem("puri_darshan_saved_yatra");
      if (stored) {
        state.savedYatraPlaces = JSON.parse(stored);
      }
    } catch (e) {
      console.warn("LocalStorage access failed:", e);
    }
    updateYatraUI();
  }

  function saveYatraToStorage() {
    try {
      localStorage.setItem("puri_darshan_saved_yatra", JSON.stringify(state.savedYatraPlaces));
    } catch (e) {
      console.warn("Failed to write to localStorage:", e);
    }
    updateYatraUI();
  }

  function toggleYatraBookmark(placeId) {
    const idx = state.savedYatraPlaces.indexOf(placeId);
    if (idx > -1) {
      state.savedYatraPlaces.splice(idx, 1);
    } else {
      state.savedYatraPlaces.push(placeId);
    }
    saveYatraToStorage();
    renderPlaces(); // re-render bookmark states
  }

  function updateYatraUI() {
    if (dom.yatraCountBadge) {
      dom.yatraCountBadge.textContent = state.savedYatraPlaces.length;
    }

    if (!dom.yatraList) return;

    if (state.savedYatraPlaces.length === 0) {
      dom.yatraList.innerHTML = `
        <div class="drawer-empty-msg">
          <p>Your custom Yatra is empty.</p>
          <p style="font-size: 0.8rem; margin-top: 0.5rem;">Click the bookmark icon on any sacred site to add it to your pilgrimage checklist.</p>
        </div>
      `;
      return;
    }

    dom.yatraList.innerHTML = state.savedYatraPlaces
      .map((id) => {
        const place = window.PURI_DATA.places.find((p) => p.id === id);
        if (!place) return "";
        return `
          <div class="saved-place-item">
            <div class="saved-place-info">
              <h5>${place.name}</h5>
              <p>${place.distance} • ${place.timings.split("|")[0]}</p>
            </div>
            <button class="remove-saved-btn" data-id="${place.id}" title="Remove">
              ✕
            </button>
          </div>
        `;
      })
      .join("");

    dom.yatraList.querySelectorAll(".remove-saved-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        toggleYatraBookmark(btn.dataset.id);
      });
    });
  }

  /* ==========================================================================
     Synthesized Ambient Temple Soundscape (Web Audio API)
     Zero external audio file dependencies — 100% reliable synthesized bells & ocean
     ========================================================================== */
  function toggleSoundscape() {
    if (state.isSoundscapePlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  }

  function startSoundscape() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!state.audioContext) {
        state.audioContext = new AudioContext();
      }

      if (state.audioContext.state === "suspended") {
        state.audioContext.resume();
      }

      // Master Gain
      const masterGain = state.audioContext.createGain();
      masterGain.gain.setValueAtTime(0.3, state.audioContext.currentTime);
      masterGain.connect(state.audioContext.destination);

      // 1. Ocean Waves Generator (Pink Noise + Low Pass Filter + LFO)
      const bufferSize = state.audioContext.sampleRate * 2;
      const noiseBuffer = state.audioContext.createBuffer(1, bufferSize, state.audioContext.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.11;
      }

      const whiteNoise = state.audioContext.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const oceanFilter = state.audioContext.createBiquadFilter();
      oceanFilter.type = "lowpass";
      oceanFilter.frequency.setValueAtTime(320, state.audioContext.currentTime);

      const oceanLfo = state.audioContext.createOscillator();
      oceanLfo.frequency.setValueAtTime(0.12, state.audioContext.currentTime); // 8-second wave swells
      const oceanLfoGain = state.audioContext.createGain();
      oceanLfoGain.gain.setValueAtTime(200, state.audioContext.currentTime);

      oceanLfo.connect(oceanLfoGain);
      oceanLfoGain.connect(oceanFilter.frequency);

      const oceanGain = state.audioContext.createGain();
      oceanGain.gain.setValueAtTime(0.2, state.audioContext.currentTime);

      whiteNoise.connect(oceanFilter);
      oceanFilter.connect(oceanGain);
      oceanGain.connect(masterGain);

      whiteNoise.start();
      oceanLfo.start();

      // 2. Meditative Drone (136.1 Hz - Cosmic Om / C# Tone)
      const droneOsc = state.audioContext.createOscillator();
      droneOsc.type = "sine";
      droneOsc.frequency.setValueAtTime(136.1, state.audioContext.currentTime);

      const droneGain = state.audioContext.createGain();
      droneGain.gain.setValueAtTime(0.08, state.audioContext.currentTime);

      droneOsc.connect(droneGain);
      droneGain.connect(masterGain);
      droneOsc.start();

      // Periodic Gentle Temple Bell Chime Function
      let chimeInterval = setInterval(() => {
        if (!state.isSoundscapePlaying || !state.audioContext) return;
        playTempleChime(state.audioContext, masterGain);
      }, 9000);

      state.audioNodes = { masterGain, whiteNoise, oceanLfo, droneOsc, chimeInterval };
      state.isSoundscapePlaying = true;

      if (dom.soundscapeBtn) {
        dom.soundscapeBtn.classList.add("playing");
        dom.soundscapeBtn.querySelector("span:last-child").textContent = "Pause Ambience";
      }
    } catch (e) {
      console.warn("Web Audio could not be started:", e);
    }
  }

  function playTempleChime(ctx, destination) {
    const freqs = [528, 660, 792, 1056];
    const freq = freqs[Math.floor(Math.random() * freqs.length)];

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);

    osc.connect(gain);
    gain.connect(destination);

    osc.start();
    osc.stop(ctx.currentTime + 4.5);
  }

  function stopSoundscape() {
    if (state.audioNodes) {
      try {
        state.audioNodes.whiteNoise.stop();
        state.audioNodes.oceanLfo.stop();
        state.audioNodes.droneOsc.stop();
        clearInterval(state.audioNodes.chimeInterval);
      } catch (e) {}
    }
    state.isSoundscapePlaying = false;
    if (dom.soundscapeBtn) {
      dom.soundscapeBtn.classList.remove("playing");
      dom.soundscapeBtn.querySelector("span:last-child").textContent = "Temple Ambience";
    }
  }

  /* ==========================================================================
     Event Listeners
     ========================================================================== */
  function setupEventListeners() {
    // Search input
    if (dom.searchInput) {
      dom.searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderPlaces();
      });
    }

    // Modal background click
    if (dom.modalOverlay) {
      dom.modalOverlay.addEventListener("click", (e) => {
        if (e.target === dom.modalOverlay) closeModal();
      });
    }

    // Keyboard Escape key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
        closeYatraDrawer();
      }
    });

    // Soundscape button
    if (dom.soundscapeBtn) {
      dom.soundscapeBtn.addEventListener("click", toggleSoundscape);
    }

    // Yatra Drawer Toggle
    const openYatraBtn = document.getElementById("openYatraBtn");
    const closeYatraBtn = document.getElementById("closeYatraBtn");

    if (openYatraBtn) openYatraBtn.addEventListener("click", openYatraDrawer);
    if (closeYatraBtn) closeYatraBtn.addEventListener("click", closeYatraDrawer);

    const clearYatraBtn = document.getElementById("clearYatraBtn");
    if (clearYatraBtn) {
      clearYatraBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear your saved pilgrimage destinations?")) {
          state.savedYatraPlaces = [];
          saveYatraToStorage();
          renderPlaces();
        }
      });
    }

    const printYatraBtn = document.getElementById("printYatraBtn");
    if (printYatraBtn) {
      printYatraBtn.addEventListener("click", () => window.print());
    }

    // Mobile Menu
    if (dom.mobileMenuBtn && dom.mainNav) {
      dom.mobileMenuBtn.addEventListener("click", () => {
        dom.mainNav.classList.toggle("mobile-active");
      });
    }

    // Sticky Header Scroll detection
    const mainHeader = document.getElementById("mainHeader");
    window.addEventListener("scroll", () => {
      if (!mainHeader) return;
      if (window.scrollY > 40) {
        mainHeader.classList.add("scrolled");
      } else {
        mainHeader.classList.remove("scrolled");
      }
    });
  }

  function openYatraDrawer() {
    if (dom.yatraDrawer) dom.yatraDrawer.classList.add("open");
  }

  function closeYatraDrawer() {
    if (dom.yatraDrawer) dom.yatraDrawer.classList.remove("open");
  }

  // Run upon DOM readiness
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
