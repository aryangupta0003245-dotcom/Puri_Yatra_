# Puri Darshan (ଶ୍ରୀକ୍ଷେତ୍ର ଦର୍ଶନ)
### A Modern, Vibrant & Responsive Digital Pilgrimage Web Platform for Sri Purusottama Kshetra

---

## 🌟 Reference Analysis: `srimayapurdhama.com/gaura-mandala/`

The reference site (**Sri Mayapur Dhama — Gaura Mandala**) provides an exemplary model for sacred digital pilgrimage. Our analysis identified the key structural and experiential pillars that make it effective:

1. **Sacred Geography as Navigation**: Rather than presenting locations as generic tourist attractions, Gaura Mandala structures navigation around the 9 Islands of Navadvipa and the extended mandala (Ekachakra, Katwa, Santipur, Kalna). For Puri, this translates directly to **Sankha Kshetra** (the 7 concentric zones of the sacred conch shell described in the Skanda Purana).
2. **Deep Spiritual Narrative (Lila-Centric)**: Each destination highlights the transcendental pastimes of Sri Caitanya Mahaprabhu and His associates, citing shastric verses (*Caitanya Caritamrta*, *Brahma Purana*, *Kapila Samhita*).
3. **Multi-Pillar Organization**:
   - **Plan**: Visitor guidelines, accommodations, dress code, accessibility rules.
   - **Discover**: Interactive map markers, categorized directory, real-time search.
   - **Experience / Seva**: Daily worship timings and arati darshans.
   - **Honor**: Sacred Prasadam rules and preparation mystery.
4. **Interactive & Responsive Presentation**: Rich detail drawers/modals, direct Google Maps navigation coordinates, and visual badges.

---

## 🎨 Design System & Visual Identity

The design language of **Puri Darshan** marries ancient Kalingan temple architecture with cutting-edge 2026 responsive web standards:

- **Sacred Pitambara Gold** (`#F59E0B`, `#FBBF24`): Reflects the golden spire ornaments, glowing evening aarti lamps, and divine yellow silk robes.
- **Sindoor / Kumkum Red** (`#DC2626`, `#991B1B`): Evokes the vermillion of temple gates, Lord Jagannatha's lotus lips, and sacred flags.
- **Mahodadhi Ocean Azure** (`#0284C7`, `#38BDF8`): Honors the roaring sacred waters of the Bay of Bengal where Mahaprabhu bathed.
- **Deep Midnight Temple Slate** (`#090D16`, `#111827`): A nocturnal canvas that makes glowing auric borders and golden typography pop.
- **Typography**:
  - Headings: `Cinzel` (classic heritage serif) + Odia script subtitles (`ଶ୍ରୀ ଜଗନ୍ନାଥ ମନ୍ଦିର`).
  - Body: `Plus Jakarta Sans` (high-readability modern geometric sans-serif).

---

## 🚀 Key Interactive Features

1. **Interactive Sankha Kshetra Conch Map**:
   - Custom SVG rendering of the sacred conch geography of Puri.
   - Interactive pins for all 18 holy sites with pulsating radar animations, category color codes, and hover tooltips.
   - Direct click-to-open detailed modal.

2. **Real-Time 24-Hour Dina Seva Clock**:
   - Live time sync with Puri (Asia/Kolkata timezone).
   - Automatically computes and highlights the current active temple seva in real-time (e.g. *Dwaraphita*, *Mangala Alati*, *Sakala Dhupa*, *Sandhya Alati*, *Badasinghara Besha*).

3. **Sacred Temple Soundscape Synthesizer (Web Audio API)**:
   - Zero external audio files or broken links!
   - 100% generated on-the-fly using the Web Audio API:
     - Ocean wave generator (filtered pink noise with smooth LFO wave swells).
     - Meditative cosmic tanpura drone (136.1 Hz Om frequency).
     - Gentle harmonic temple bell chimes.
   - Accessible via the top ticker ribbon with animated equalizer bars.

4. **18+ Comprehensive Holy Places Directory**:
   - Real-time search by English name, Odia title, deity, pastime keywords.
   - Category filtering: *Sri Mandir Sanctum*, *Mahaprabhu Lila Sthalas*, *Pancha Tirtha*, *Ancient Mathas & Deities*.
   - Detail modal with 4 interactive tabs:
     - **Transcendental Lila**: Deep narrative of Caitanya Mahaprabhu's pastimes in Puri.
     - **Scriptural Glory**: Sanskrit verses with English translations.
     - **Sacred Highlights**: Bullet-pointed features to inspect on-site.
     - **Pilgrim Guidelines**: Dress code, camera rules, sanctum accessibility, and direct Google Maps routing.

5. **Ananda Bazaar & Chhappan Bhog Guide**:
   - Explores the world's largest open-air kitchen (Rosha Ghara with 240 earthen ovens).
   - The cooking miracle of 7 stacked earthen pots.
   - Interactive 56 Bhog filter (Rice preparations, Dals & curries, Traditional Sweets, Pithas).

6. **Personal "My Yatra" Itinerary Planner**:
   - Devotees can bookmark any place to their custom pilgrimage list.
   - Persisted automatically in `localStorage`.
   - Slide-in side drawer displaying saved sites with one-click print/export.

7. **Curated Parikrama Routes**:
   - 1-Day Express Darshan, 2-Day Caitanya Lila Circuit, 3-Day Complete Sankha Kshetra Experience.

8. **Pilgrim Practical Guide / FAQs**:
   - Guidance on dress codes, non-Hindu and foreign visitor access, locker rules, and local transport.

---

## 💻 Tech Stack & Zero-Dependency Portability

- **HTML5**: Semantic tags, accessible ARIA attributes, responsive meta viewport.
- **Modern CSS3**: CSS Custom Properties, clamp() fluid typography, CSS Grid, Flexbox, glassmorphism, responsive breakpoints.
- **Vanilla JavaScript (ES6+)**: Clean modular architecture, state management, zero external framework overhead, instant load times.
- **Web Audio API**: Native browser synthesis for ambient audio.

### How to Run:
Simply double-click `index.html` in any modern web browser or serve via any static file server:
```bash
npx serve .
# or
python -m http.server 8000
```

