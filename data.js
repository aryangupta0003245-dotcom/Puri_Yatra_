/**
 * Puri Darshan - Sacred Data Repository
 * Comprehensive dataset of Sri Kshetra / Sankha Kshetra pilgrimage places,
 * daily Dina Sevas, Mahaprasadam, festivals, and curated itineraries.
 */

const PURI_DATA = {
  stats: {
    totalPlaces: 18,
    dailySevas: 12,
    chhappanBhog: 56,
    annualPilgrims: "10 Million+",
    heritageYears: "1000+ Years"
  },

  categories: [
    { id: "all", name: "All Sacred Sites", icon: "om", count: 18 },
    { id: "core", name: "Sri Mandir Sanctum", icon: "temple", count: 3 },
    { id: "caitanya", name: "Mahaprabhu Lila Sthalas", icon: "lotus", count: 6 },
    { id: "pancha-tirtha", name: "Pancha Tirtha (Holy Waters)", icon: "water", count: 5 },
    { id: "ancient-mathas", name: "Ancient Mathas & Deities", icon: "flame", count: 4 }
  ],

  places: [
    {
      id: "jagannath-temple",
      category: "core",
      name: "Sri Jagannath Temple (Sri Mandir)",
      odiaName: "ଶ୍ରୀ ଜଗନ୍ନାଥ ମନ୍ଦିର",
      subtitle: "The Epicenter of Sankha Kshetra & Marta Vaikuntha",
      distance: "0.0 km (Center)",
      significance: "Supreme Abode of Lord of the Universe",
      deity: "Chaturdha Murti (Lord Jagannath, Balabhadra, Subhadra & Sudarshana Chakra)",
      timings: "5:00 AM – 11:30 PM (Closes during Bhoga)",
      coordinates: { lat: 19.8049, lng: 85.8179 },
      mapZone: "center",
      tags: ["Must Visit", "Bada Danda", "Chaturdha Murti", "Neelachakra"],
      heroImage: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80",
      description: "The 12th-century architectural marvel built by King Anantavarman Chodaganga Deva. Standing at 214 feet, the Rekha Deula spire crowns the conch-shaped city of Puri. It is one of the four Char Dham pilgrimage sites where Lord Jagannath is worshipped not as a distant idol, but as a living emperor and loving family member with 56 daily offerings and 12 grand annual yatras.",
      pastime: "In Caitanya Caritamrta, it is described how Lord Sri Caitanya Mahaprabhu would run in ecstatic love towards the sanctum the moment He entered Puri. Overwhelmed by the darshan of Lord Jagannatha's large, lotus-like compassionate eyes (Chaka Akhi), Mahaprabhu would embrace the Aruna Stambha pillar and shed tears of transcendental separation (viraha bhava), leaving deep indentations in the stone.",
      scripturalQuote: {
        verse: "samudra-teere ramye cha purushottama-mandire | prasadanna-prabhavena muktim yanti janah sada ||",
        source: "Skanda Purana, Utkala Khanda",
        translation: "In the delightful temple of Purusottama by the ocean shore, merely by the potency of the consecrated Mahaprasada, all beings easily attain liberation."
      },
      highlights: [
        "Neelachakra: 8-metal alloy wheel atop the spire where the flag (Patitapabana Bana) is changed daily by climbers 214 feet above ground.",
        "Ananda Bazaar: The largest open-air kitchen and sacred market on earth.",
        "Aruna Stambha: The 16-sided monolithic chlorite stone pillar brought from the Sun Temple at Konark.",
        "Bada Danda: The Grand Avenue where the holy chariots roll during Ratha Yatra."
      ],
      practicalTips: {
        dressCode: "Traditional Indian attire required (Dhoti/Kurta for men, Saree/Salwar for women). Western casuals, shorts, and leather items are strictly prohibited.",
        entryRules: "Sanctum open to practicing Hindus as per ancient temple traditions. Non-Hindu and international devotees can take darshan of Patitapabana at Lion's Gate and during Ratha Yatra.",
        bestTimeToVisit: "Early morning 5:30 AM for Mangala Alati or 7:30 PM for Sandhya Dhupa and serene evening atmosphere."
      }
    },
    {
      id: "gambhira",
      category: "caitanya",
      name: "Sri Radha-Kanta Matha (Gambhira)",
      odiaName: "ଗମ୍ଭୀରା (ଶ୍ରୀ ରାଧାକାନ୍ତ ମଠ)",
      subtitle: "The Inner Sanctum of Mahaprabhu's Final 18 Years",
      distance: "0.8 km South of Sri Mandir",
      significance: "Place of Divine Viraha & Intimate Pastimes",
      deity: "Sri Radha-Kanta Jiu & Sri Caitanya Mahaprabhu",
      timings: "6:00 AM – 12:00 PM | 4:30 PM – 9:00 PM",
      coordinates: { lat: 19.8001, lng: 85.8234 },
      mapZone: "south",
      tags: ["Mahaprabhu Lila", "Kasi Mishra", "Intimate Sanctum", "Sacred Relics"],
      heroImage: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80",
      description: "Originally the residence of Kasi Mishra, the royal preceptor of King Prataparudra. Sri Caitanya Mahaprabhu resided in a small, solitary subterranean room called the Gambhira for the last 18 years of His manifested pastimes, completely absorbed in the intense ecstasy of Srimati Radharani's love in separation from Krishna.",
      pastime: "Here in Gambhira, alongside His confidential associates Svarupa Damodara and Ramananda Raya, Mahaprabhu tasted the deep emotions of the Srimad Bhagavatam, Jayadeva's Gita Govinda, and the songs of Vidyapati and Chandidas. Sacred relics of the Lord, including His wooden footwear (Khadam), quilt (Kantha), and water pot (Kamandalu), are preserved here for devotees to venerate.",
      scripturalQuote: {
        verse: "nana-bhave radhikara krsna-viraha-dasa | sei dase vyakula prabhu kore divasa-nisa ||",
        source: "Sri Caitanya Caritamrta, Antya-lila",
        translation: "In the mood of Srimati Radharani, the Lord experienced constant pangs of divine separation, weeping day and night in the secluded retreat of Gambhira."
      },
      highlights: [
        "The Gambhira room: Look through the grilled window to view Mahaprabhu's personal quarters.",
        "Divine Relics: Wooden Padukas (sandals), quilt, and water container of Sri Caitanya.",
        "Radha-Kanta Deity: Enchanting deities originally brought from South India and worshipped by Kasi Mishra.",
        "Peaceful Bhajan Atmosphere: Quiet courtyard ideal for personal chanting and meditation."
      ],
      practicalTips: {
        dressCode: "Modest and respectful clothing. Shoes removed at the matha courtyard entrance.",
        entryRules: "Open to all sincere visitors and spiritual seekers from around the world without restriction.",
        bestTimeToVisit: "Late morning (10:00 AM) or peaceful twilight (5:30 PM) during sandhya arati."
      }
    },
    {
      id: "siddha-bakula",
      category: "caitanya",
      name: "Siddha Bakula",
      odiaName: "ସିଦ୍ଧ ବକୁଳ",
      subtitle: "The Bhajan Kutir of Namacharya Srila Haridasa Thakura",
      distance: "1.1 km South-West of Sri Mandir",
      significance: "Chanting Abode of 300,000 Holy Names Daily",
      deity: "Srila Haridasa Thakura & Lord Jagannath Neem Darshan",
      timings: "5:30 AM – 12:30 PM | 4:00 PM – 9:00 PM",
      coordinates: { lat: 19.7985, lng: 85.8198 },
      mapZone: "south",
      tags: ["Haridasa Thakura", "Miracle Tree", "Nama Seva", "Holy Tree"],
      heroImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      description: "The serene holy garden where Namacharya Srila Haridasa Thakura resided and continuously chanted 192 rounds (300,000 holy names of Krishna) each day. Despite being born outside the orthodox tradition, Lord Caitanya declared Haridasa as the crest-jewel of all saints.",
      pastime: "Seeing that Haridasa sat chanting under the blazing tropical sun with no shelter, Mahaprabhu took a dried tooth-stick (danta-kastha) used by Lord Jagannath and planted it in the sand. Miraculously, it instantly sprouted into a lush, sprawling Bakula tree that hollowed itself out to form a divine umbrella, shading Haridasa forever. Even today, the ancient tree has no central trunk yet lives and blooms green leaves.",
      scripturalQuote: {
        verse: "tumi ta' karile eka nama-avatara | nama-prabhave tomara sarva-taranahara ||",
        source: "Caitanya Bhagavata",
        translation: "You have appeared as the personification of the Holy Name; by the sublime influence of your chanting, the entire universe is delivered."
      },
      highlights: [
        "The Miraculous Hollow Bakula Tree: Centuries old, living without interior heartwood.",
        "Haridasa Thakura's Bhajan Kutir: The exact sacred ground where the Mahamantra echoed tirelessly.",
        "Govinda's Daily Prasad Delivery: Spot where Mahaprabhu's servant delivered Jagannatha Mahaprasad daily.",
        "Srila Sanatana Goswami's Meeting Point: Where Mahaprabhu embraced Sanatana Goswami."
      ],
      practicalTips: {
        dressCode: "Traditional and comfortable clothes suitable for sitting on the floor to meditate.",
        entryRules: "Open to all visitors globally.",
        bestTimeToVisit: "Early morning around 6:30 AM when the garden is peaceful and incense fills the air."
      }
    },
    {
      id: "tota-gopinatha",
      category: "caitanya",
      name: "Tota Gopinatha Temple",
      odiaName: "ତୋଟା ଗୋପୀନାଥ ମନ୍ଦିର",
      subtitle: "The Unique Seated Deity Discovered by Gadadhara Pandita",
      distance: "1.4 km South of Sri Mandir",
      significance: "Deity Sitting Down Out of Love for His Devotee",
      deity: "Sri Tota Gopinatha (Seated Krishna with Radha & Lalita)",
      timings: "6:00 AM – 12:00 PM | 4:30 PM – 8:30 PM",
      coordinates: { lat: 19.7942, lng: 85.8168 },
      mapZone: "south",
      tags: ["Gadadhara Pandita", "Seated Deity", "Catuh-sloki", "Garden Abode"],
      heroImage: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
      description: "Nestled within lush gardens (Tota) near the ocean shore, this quiet shrine houses Tota Gopinatha, one of the most exquisite and unique deities of Krishna in the world. Sri Gadadhara Pandita, the incarnation of Srimati Radharani's inner devotional mood, served this deity life-long with supreme dedication.",
      pastime: "As Gadadhara Pandita grew elderly and frail, he found it physically painful to reach up and garland the tall standing deity of Gopinatha. Noticing the strain of His beloved servant, Lord Gopinatha miraculously sat down into a seated lotus posture (Padmasana) so Gadadhara could easily drape garlands around His neck. It is the only seated Gopinatha deity in the Vedic world.",
      scripturalQuote: {
        verse: "gopinatha darsane premera ullasa | gadadhara-seve prabhu hoiya vilasa ||",
        source: "Gaura-ganoddesa-dipika",
        translation: "Beholding the captivating beauty of Gopinatha inspires boundless waves of pure love; here Gadadhara's tender service is eternally glorified."
      },
      highlights: [
        "Unique Sitting Posture: The only deity of Sri Krishna worshipped in a seated position to accept garlands.",
        "Srimad Bhagavatam Hall: Where Mahaprabhu listened to Gadadhara recite Dhruva and Prahlada's pastimes 100 times.",
        "Disappearance Site: The sacred temple where Sri Caitanya Mahaprabhu is said to have entered into the heart of Gopinatha.",
        "Radha, Lalita & Jahnava Ma Murthis: Beautiful accompanying deities flanking the Lord."
      ],
      practicalTips: {
        dressCode: "Traditional Indian attire recommended.",
        entryRules: "Open to devotees from all nations.",
        bestTimeToVisit: "Noon Arati (11:30 AM) or evening Sandhya Arati (7:00 PM)."
      }
    },
    {
      id: "gundicha-temple",
      category: "core",
      name: "Sri Gundicha Temple (Yajna Vedi)",
      odiaName: "ଶ୍ରୀ ଗୁଣ୍ଡିଚା ମନ୍ଦିର",
      subtitle: "The Divine Summer Garden Palace & Destination of Ratha Yatra",
      distance: "2.8 km North-East of Sri Mandir",
      significance: "Birthplace of the Deities & The Abode of Vrindavana",
      deity: "Ratna Simhasana (Occupied during the 7 days of Ratha Yatra)",
      timings: "6:00 AM – 9:00 PM (Full festivities during Asadha/July)",
      coordinates: { lat: 19.8252, lng: 85.8341 },
      mapZone: "north",
      tags: ["Ratha Yatra", "Gundicha Marjana", "Vrindavana Mood", "Garden Palace"],
      heroImage: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80",
      description: "Located at the northeastern end of Bada Danda, Gundicha Temple is set amidst tranquil walled gardens. While Sri Mandir represents Dvaraka's opulence, Gundicha represents the serene groves of Vrindavana. Here the three divine siblings reside for seven joyful days during the annual Ratha Yatra.",
      pastime: "On the eve of Ratha Yatra, Mahaprabhu performed the legendary 'Gundicha Marjana' (Temple Cleansing). With hundreds of followers carrying water pots from Indradyumna Sarovara, they scrubbed every inch of floor, ceiling, and altar with their own cloths and tears of devotion, illustrating how one must thoroughly cleanse the heart of all material dust before welcoming the Lord.",
      scripturalQuote: {
        verse: "nirmala ujjwala kaila deula sabara nayana | yena nija-shuddha chitta nirmala karana ||",
        source: "Sri Caitanya Caritamrta, Madhya-lila",
        translation: "The temple was made so spotless and radiant that it appeared just like a completely purified, pure consciousness cleansed of all impurities."
      },
      highlights: [
        "Yajna Vedi: The holy site where King Indradyumna performed 1,000 horse sacrifices.",
        "Gundicha Marjana Pastime Marker: Commemorates the great cleansing pastime.",
        "Lush Gardens: Shaded groves of mango, coconut, and flowering trees.",
        "Hera Panchami Gateway: Site where Goddess Lakshmi arrives in royal chariot on the 5th day of Ratha Yatra."
      ],
      practicalTips: {
        dressCode: "Traditional modest dress.",
        entryRules: "Open year-round to visitors; exceptionally vibrant during the Ratha Yatra festival in June/July.",
        bestTimeToVisit: "Morning hours (7:00 AM – 10:00 AM) to stroll the quiet garden compounds."
      }
    },
    {
      id: "haridas-thakur-samadhi",
      category: "caitanya",
      name: "Srila Haridasa Thakura Samadhi",
      odiaName: "ହରିଦାସ ଠାକୁର ସମାଧି",
      subtitle: "The Coastal Resting Place of the Master of Holy Names",
      distance: "2.1 km South-East on Oceanfront",
      significance: "Bathing and Samadhi personally performed by Mahaprabhu",
      deity: "Srila Haridasa Thakura & Gouranga Mahaprabhu",
      timings: "5:00 AM – 1:00 PM | 3:30 PM – 9:30 PM",
      coordinates: { lat: 19.7915, lng: 85.8285 },
      mapZone: "oceanfront",
      tags: ["Samadhi", "Ocean Breeze", "Mahaprabhu Love", "Sacred Shore"],
      heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      description: "Directly facing the majestic roaring waves of Mahodadhi (Bay of Bengal), this serene samadhi marks the sacred spot where the great saint Srila Haridasa Thakura left this mortal world, gazing into the lotus face of Sri Caitanya Mahaprabhu while chanting 'Sri Krishna Caitanya'.",
      pastime: "Upon Haridasa's departure, Sri Caitanya Mahaprabhu hoisted his body onto His own shoulders and danced in transcendental ecstasy along the seashore. Mahaprabhu bathed Haridasa's body in the ocean and personally dug his tomb in the sand with His own hands, declaring: 'The ocean has today become a holy place of pilgrimage because it has touched Haridasa's body.'",
      scripturalQuote: {
        verse: "apane sri-haste prabhu balu kshonidila | haridasa-deha tare samadhi karila ||",
        source: "Sri Caitanya Caritamrta, Antya-lila",
        translation: "With His own divine hands, Sri Caitanya dug the sand and placed the body of Haridasa Thakura into eternal Samadhi."
      },
      highlights: [
        "Samadhi Mandir: Sacred tomb facing the ocean breeze.",
        "Puri Beach Proximity: Walk right down to the ocean where Mahaprabhu and associates took holy bath.",
        "Daily Harinam Sankirtan: Ongoing melodic chanting of the Hare Krishna Mahamantra.",
        "Ananta Vasudeva Shrine: Ancient accompanying shrine adjacent to the courtyard."
      ],
      practicalTips: {
        dressCode: "Comfortable spiritual or modest casual clothing.",
        entryRules: "Open to all pilgrims without restriction.",
        bestTimeToVisit: "Sunset (5:30 PM - 7:00 PM) when ocean breezes and evening kirtan create a deeply moving atmosphere."
      }
    },
    {
      id: "narendra-sarovara",
      category: "pancha-tirtha",
      name: "Narendra Sarovara (Chandan Pushkarini)",
      odiaName: "ନରେନ୍ଦ୍ର ସରୋବର",
      subtitle: "The Royal Lake of the 42-Day Chandana Yatra Boat Pastimes",
      distance: "1.9 km North-East of Sri Mandir",
      significance: "Water Festival Lake of Lord Jagannatha & Madanamohana",
      deity: "Sri Madanamohana & Sri Ramakrsna (during festivals)",
      timings: "Open 24 Hours (Best during daylight)",
      coordinates: { lat: 19.8181, lng: 85.8275 },
      mapZone: "north",
      tags: ["Chandana Yatra", "Chapa Khela", "Swan Boat", "Sacred Lake"],
      heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      description: "A vast 3.2-hectare rectangular sacred lake excavated in the 14th century by Narendra Dev, minister of King Vira Narasimha Deva. In its center stands a graceful island pavilion (Chandan Mandapa) connected by stone steps to the water's edge.",
      pastime: "Every summer during the 42 days of Chandana Yatra, the representative deities Madanamohana, Rama, and Krishna come daily from Sri Mandir in ornate palanquins smeared with fragrant sandalwood paste. Accompanied by the five Shiva Lingas (Pancha Pandavas), They cruise the waters of Narendra Sarovara in swan-shaped wooden boats (Nanda and Bhadra) while thousands chant and toss flowers.",
      scripturalQuote: {
        verse: "chandana-sarovare chapa-khela parama ananda | madanamohana sange nachaye gaurachandra ||",
        source: "Sri Caitanya Mangala",
        translation: "Supreme bliss overflows during the boat-cruise on Chandana Lake; Gaurachandra dances in ecstatic joy alongside Madanamohana."
      },
      highlights: [
        "Island Temple (Chandana Mandapa): The whitewashed central pavilion where the deities rest.",
        "16 Ghats: Massive stone staircases leading down to the clear waters.",
        "Summer Chapa Festival: The most colorful water festival in Eastern India during April-May.",
        "Historical Inscriptions: Ancient stone records detailing royal contributions."
      ],
      practicalTips: {
        dressCode: "Modest casual wear.",
        entryRules: "Publicly accessible ghats open to all visitors.",
        bestTimeToVisit: "Early mornings for peaceful reflection or evening twilight around 6:00 PM."
      }
    },
    {
      id: "markandeya-sarovara",
      category: "pancha-tirtha",
      name: "Markandeya Sarovara & Temple",
      odiaName: "ମାର୍କଣ୍ଡେୟ ସରୋବର",
      subtitle: "The Primordial Cosmic Deluge Tank & Pancha Tirtha Site",
      distance: "1.3 km North-West of Sri Mandir",
      significance: "First Step of the Sacred Pancha Tirtha Yatra",
      deity: "Lord Markandesvara Mahadeva & Saptamatrikas",
      timings: "5:30 AM – 8:30 PM",
      coordinates: { lat: 19.8122, lng: 85.8118 },
      mapZone: "north-west",
      tags: ["Pancha Tirtha", "Sage Markandeya", "Shiva Protector", "Ancient Tank"],
      heroImage: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80",
      description: "One of the oldest pilgrimage tanks in Puri, dating to the pre-Christian era and renovated in the 12th century. Pilgrims performing the Pancha Tirtha pilgrimage traditionally begin their sacred bath here at Markandeya Tank before paying homage to Lord Markandesvara, the ancient Shiva guardian.",
      pastime: "Legend relates that the sage Markandeya Rishi was floating alone in the terrifying waters of universal cosmic dissolution (Pralaya) when Lord Vishnu granted him vision of the divine child resting upon a banyan leaf in the sacred conch of Puri. To mark this cosmic salvation, the sacred tank was consecrated.",
      scripturalQuote: {
        verse: "markandeyah krite snane sarva-papa-pramuchyate | shiva-loka-mavapnoti punarjanma na vidyate ||",
        source: "Brahma Purana",
        translation: "By bathing in Markandeya tank and worshipping Lord Shiva, a devotee is freed from all sins and attains the supreme spiritual realm."
      },
      highlights: [
        "Ancient 8th-Century Shiva Shrine: Markandesvara Mahadeva temple with exquisite carved friezes.",
        "Saptamatrika Idols: Rare carvings of the Seven Mother Goddesses along the eastern steps.",
        "Kaliyadalan Ceremony: During festivals, Lord Krishna's subduing of Kaliya serpent is reenacted here.",
        "Pancha Tirtha Ritual: Holy snana point for cleansing negative karma."
      ],
      practicalTips: {
        dressCode: "Traditional bath-wear if taking holy dip; otherwise modest clothes.",
        entryRules: "Open to all respectful visitors.",
        bestTimeToVisit: "Sunrise (6:00 AM) when morning priests perform water offerings."
      }
    },
    {
      id: "indradyumna-sarovara",
      category: "pancha-tirtha",
      name: "Indradyumna Sarovara",
      odiaName: "ଇନ୍ଦ୍ରଦ୍ୟୁମ୍ନ ସରୋବର",
      subtitle: "The Sacred Tank Created by the Hooves of a Billion Cows",
      distance: "2.6 km North-East near Gundicha",
      significance: "Pancha Tirtha Snana Point of King Indradyumna's Yajnas",
      deity: "Lord Nilakanthesvara & Sacred Tortoises",
      timings: "5:00 AM – 9:00 PM",
      coordinates: { lat: 19.8279, lng: 85.8362 },
      mapZone: "north",
      tags: ["Pancha Tirtha", "King Indradyumna", "Ancient Turtles", "Holy Dip"],
      heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      description: "Located near Gundicha Temple, this vast 4.5-acre pond is celebrated as one of the 5 great holy waters of Puri. In the center is a shrine, and the water is famously home to centuries-old sacred freshwater tortoises that surface when pilgrims call them.",
      pastime: "When King Indradyumna performed one thousand Ashvamedha sacrifices to invoke Lord Jagannatha's appearance, he donated millions of cows as dakshina to the brahmanas. The trampling of billions of cow hooves hollowed out this vast reservoir, which filled with cow milk and sacred water, sanctifying the entire region.",
      scripturalQuote: {
        verse: "indradyumna-saro gattva snanam krtva vidhanatah | gopradana-phalam labdhva visnuloke mahiyate ||",
        source: "Skanda Purana",
        translation: "One who bathes according to Vedic rules in Indradyumna Sarovara earns the divine merit of donating thousands of cows and ascends to the realm of Vishnu."
      },
      highlights: [
        "Sacred Centuries-Old Turtles: Harmless giant turtles who gently feed on prasad offered by devotees.",
        "Nilakanthesvara Temple: Ancient temple on the western bank.",
        "Gundicha Marjana Water Source: Source of 100 pots used by Mahaprabhu to clean Gundicha temple.",
        "Peaceful Green Environs: Calm spiritual atmosphere away from city traffic."
      ],
      practicalTips: {
        dressCode: "Traditional Indian attire.",
        entryRules: "Open to all visitors without fee.",
        bestTimeToVisit: "Late morning (9:00 AM) to observe the sacred turtles swimming near the steps."
      }
    },
    {
      id: "sweta-ganga",
      category: "pancha-tirtha",
      name: "Sweta Ganga Kunda",
      odiaName: "ଶ୍ୱେତ ଗଙ୍ଗା",
      subtitle: "The Miraculous White Ganga Spring Flowing Under the Sand",
      distance: "0.6 km South of Sri Mandir",
      significance: "Underground Ganga Sanctified by King Sweta",
      deity: "Sri Sweta Madhava & Matsya Avatara",
      timings: "6:00 AM – 8:00 PM",
      coordinates: { lat: 19.8012, lng: 85.8155 },
      mapZone: "south",
      tags: ["Pancha Tirtha", "White Ganga", "Sweta Madhava", "Mystic Spring"],
      heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      description: "A deep sacred freshwater tank enclosed by tall stone retaining walls, situated right in the heart of the old city. It is believed that mother Ganga flows secretly through underground channels beneath the desert sand to bathe the lotus feet of Lord Jagannatha.",
      pastime: "King Sweta performed intense tapasya here. In response, Lord Jagannatha caused the celestial Ganga to burst forth as a white subterranean torrent, giving the kunda its name 'Sweta Ganga' (White Ganges). It is considered equivalent to taking bath in the Ganges at Varanasi.",
      scripturalQuote: {
        verse: "ganga tu sahasra-koti bhumi-madhye vibhati ya | sweta-ganga-samam nasti tirthesvara-vara-prada ||",
        source: "Padma Purana",
        translation: "Among thousands of divine streams across the earth, none equals the glory of Sweta Ganga in bestowing the fruits of all pilgrimages."
      },
      highlights: [
        "Sweta Madhava Temple: Ancient black chlorite deity of Vishnu overlooking the waters.",
        "Matsya Avatara Shrine: Rare stone manifestation of the fish incarnation.",
        "Deep Step-Well Architecture: Dramatically carved steps descending into cool pristine waters.",
        "Pancha Tirtha 4th Station: Essential step in the fivefold holy circuit."
      ],
      practicalTips: {
        dressCode: "Modest clothes.",
        entryRules: "Open to all visitors.",
        bestTimeToVisit: "Morning hours around 7:30 AM."
      }
    },
    {
      id: "mahodadhi-beach",
      category: "pancha-tirtha",
      name: "Mahodadhi (Puri Sea Beach / Swargadwar)",
      odiaName: "ମହୋଦଧି (ସ୍ୱର୍ଗଦ୍ୱାର ସମୁଦ୍ର)",
      subtitle: "The Sacred Ocean where Sins Melt Away into Waves of Grace",
      distance: "1.5 km South of Sri Mandir",
      significance: "Fifth and Crown Tirtha of Sri Kshetra",
      deity: "Lord Varuna & Lord Jagannath in Water",
      timings: "Open 24 Hours",
      coordinates: { lat: 19.7903, lng: 85.8202 },
      mapZone: "oceanfront",
      tags: ["Pancha Tirtha", "Golden Beach", "Bathing Yatra", "Ocean Sunset"],
      heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      description: "Unlike ordinary seas, the ocean at Puri is worshipped as 'Mahodadhi'—a great sacred personified devotee and place of pilgrimage. Lord Caitanya Mahaprabhu would regularly take bath in the rolling surf, seeing the deep blue waves as the enchanting hue of Lord Krishna playing with the gopis.",
      pastime: "It was into this roaring ocean that Sri Caitanya Mahaprabhu once lept in ecstatic trance, mistaking the luminous blue waves for the waters of the Yamuna in Vrindavana. Caught in the net of a fisherman, Mahaprabhu was pulled ashore speaking transcendental poetry of divine love.",
      scripturalQuote: {
        verse: "mahodadhau krite snane sarva-tirthasya phalam labhet | jagannathasya samnidhyat pavitram bhumandale ||",
        source: "Skanda Purana",
        translation: "A holy dip in Mahodadhi yields the spiritual benefit of bathing in all sacred waters throughout the universe, made holy by the proximity of Lord Jagannatha."
      },
      highlights: [
        "Swargadwar Beach: The spiritual shoreline where souls are said to attain heavenly liberation.",
        "Golden Sand Parikrama: Devotees walk the soft shores chanting japa at dawn.",
        "Spiritual Bathing Point: Conclusion of the Pancha Tirtha pilgrimage circuit.",
        "Blue Flag Certified Beach: Spotlessly clean, eco-friendly beach zones nearby."
      ],
      practicalTips: {
        dressCode: "Comfortable beachwear or traditional clothes for holy bathing.",
        entryRules: "Publicly accessible 24/7.",
        bestTimeToVisit: "Sunrise for spiritual snana; sunset for magnificent ocean breeze and evening walks."
      }
    },
    {
      id: "sarvabhauma-bhattacharya-home",
      category: "caitanya",
      name: "Sarvabhauma Bhattacharya's Residence",
      odiaName: "ସାର୍ବଭୌମ ଭଟ୍ଟାଚାର୍ଯ୍ୟ ଗୃହ",
      subtitle: "Where the Great Scholar Surrendered to Mahaprabhu's Sadbhuja Form",
      distance: "0.5 km South of Sri Mandir",
      significance: "Revelation of the Six-Armed Sadbhuja Murti",
      deity: "Sadbhuja Gouranga (Rama, Krishna & Caitanya Manifested)",
      timings: "6:30 AM – 12:00 PM | 4:30 PM – 8:30 PM",
      coordinates: { lat: 19.8028, lng: 85.8199 },
      mapZone: "center",
      tags: ["Sadbhuja", "Vedanta Debate", "Prasada Mercy", "Bhattacharya"],
      heroImage: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80",
      description: "The historic home of Sarvabhauma Bhattacharya, the chief court scholar and philosopher of Odisha in the 16th century. It was here that Sarvabhauma attempted to lecture the young sannyasi Sri Caitanya on Mayavada Vedanta philosophy for seven straight days.",
      pastime: "On the eighth day, Mahaprabhu shattered all impersonal theories with pristine devotional interpretations of the Vedanta-sutra and revealed His extraordinary six-armed 'Sadbhuja' form: holding bow and arrow (Lord Rama), flute (Lord Krishna), and staff and waterpot (Sri Caitanya). The arrogant scholar immediately fell prostrate, becoming His ardent follower.",
      scripturalQuote: {
        verse: "dhanus-sara eka bhuje vamse eka kare | kamandalu-danda dhari dekhalo sundare ||",
        source: "Caitanya Bhagavata",
        translation: "Holding bow and arrows in two arms, divine flute in two, and danda and kamandalu in two, the splendid Six-Armed Lord revealed His true identity."
      },
      highlights: [
        "Six-Armed Sadbhuja Deity: Inspiring deity depicting the combined avatars of Rama, Krishna, and Gouranga.",
        "The Debate Hall: The stone courtyard where the historic 7-day philosophical discourse occurred.",
        "Mahaprasad Miracle Spot: Where Sarvabhauma embraced bed-side Mahaprasada without washing his mouth, acknowledging its absolute purity.",
        "Ancient Palm Leaf Library: Historical manuscripts of Gaudiya philosophy."
      ],
      practicalTips: {
        dressCode: "Respectful spiritual attire.",
        entryRules: "Open to all visitors.",
        bestTimeToVisit: "10:30 AM or 5:00 PM."
      }
    },
    {
      id: "alarnath-temple",
      category: "ancient-mathas",
      name: "Sri Alarnath Temple (Brahmagiri)",
      odiaName: "ଶ୍ରୀ ଅଲାରନାଥ ମନ୍ଦିର",
      subtitle: "The Refuge of Pilgrims During Lord Jagannatha's 15-Day Anavasara",
      distance: "23 km West of Puri (Brahmagiri)",
      significance: "Living Manifestation of Jagannatha during Temple Quarantine",
      deity: "Sri Alarnath (Four-Armed Lord Vishnu with Garuda)",
      timings: "6:00 AM – 1:30 PM | 3:30 PM – 9:30 PM",
      coordinates: { lat: 19.7891, lng: 85.6421 },
      mapZone: "outskirts",
      tags: ["Anavasara", "Kheer Bhog", "Stone Impression", "Four Armed"],
      heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      description: "Located in nearby Brahmagiri, this ancient temple houses an imposing black stone four-armed deity of Lord Vishnu standing with His carrier Garuda. During the 15-day 'Anavasara' period before Ratha Yatra when Sri Mandir is closed for public darshan, Lord Jagannatha manifests His full presence at Alarnath.",
      pastime: "Unable to bear separation from Lord Jagannatha during the Anavasara fortnight, Mahaprabhu walked daily to Alarnath to have darshan. So fierce was His ecstatic love that when He prostrated on the stone floor, the black stone melted beneath Him, leaving an indelible impression of His divine limbs that is visible to this day.",
      scripturalQuote: {
        verse: "anavasare jagannathe na paiya darsana | viraha-bhave alarnathe korila gamana ||",
        source: "Sri Caitanya Caritamrta, Madhya-lila",
        translation: "Unable to behold Lord Jagannatha during the quarantine of Anavasara, Mahaprabhu walked to Alarnath in waves of devotional yearning."
      },
      highlights: [
        "Melted Stone Slab (Silapaduka): Sacred stone bearing the impressions of Mahaprabhu's prostration.",
        "Famed Kheer Bhog: World-renowned condensed milk pudding offered hot to Lord Alarnath daily.",
        "Garuda Stambha: Ancient stone pillar where Sri Caitanya stood weeping in devotion.",
        "Anavasara Mega Pilgrimage: The focal point for lakhs of devotees when Puri temple doors are shut."
      ],
      practicalTips: {
        dressCode: "Traditional temple clothing.",
        entryRules: "Open to all devotees; taxis and regular local buses depart from Puri bus stand (45 mins drive).",
        bestTimeToVisit: "12:00 PM for Madhyahna Bhoga to taste the famous fresh Kheer Prasad."
      }
    },
    {
      id: "cakra-tirtha",
      category: "ancient-mathas",
      name: "Cakra Tirtha & Cakra Narayana Temple",
      odiaName: "ଚକ୍ର ତୀର୍ଥ",
      subtitle: "Where the Sacred Daru Logs First Washed Ashore from the Ocean",
      distance: "2.4 km East along the Seashore",
      significance: "Appearance Point of the Divine Neem Timber for the Deities",
      deity: "Sri Cakra Narayana & Lord Jagannath Dariya",
      timings: "6:00 AM – 8:30 PM",
      coordinates: { lat: 19.8075, lng: 85.8456 },
      mapZone: "oceanfront",
      tags: ["Daru Log", "Sudarshana Cakra", "Appearance Site", "Coastline"],
      heroImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      description: "A tranquil temple situated right where a freshwater stream (Banki Muhan) meets the Bay of Bengal. This seaside holy site is consecrated to Lord Sudarshana Chakra and Lord Cakra Narayana.",
      pastime: "It was here at Cakra Tirtha that the legendary scented Daru log (divine neem wood bearing the sacred conch, wheel, mace, and lotus markings) floated ashore from the ocean, as revealed in King Indradyumna's dream, from which the divine deities of Jagannath, Balabhadra, and Subhadra were carved by Visvakarma.",
      scripturalQuote: {
        verse: "daru-rupe jagannathah samudrat samupasthitah | cakratirthe samutpanno trailokya-taranaya cha ||",
        source: "Utkala Purana",
        translation: "In the form of sacred timber, Lord Jagannatha appeared from the rolling waves at Cakra Tirtha to deliver all three worlds."
      },
      highlights: [
        "Cakra Narayana Murti: Unique carving of Lord Vishnu within the Sudarshana Chakra disc.",
        "Banki Muhan Confluence: Estuary where the river merges gracefully with the roaring sea.",
        "Daru Appearance Monument: Sacred landmark marking the origin of the deities.",
        "Quiet Beach Promenade: Serene seaside spot with fewer tourists."
      ],
      practicalTips: {
        dressCode: "Comfortable spiritual or modest clothes.",
        entryRules: "Open to all pilgrims.",
        bestTimeToVisit: "Sunrise (6:00 AM - 7:30 AM) when the morning sun illuminates the sea waves."
      }
    },
    {
      id: "lokanatha-temple",
      category: "ancient-mathas",
      name: "Sri Lokanatha Temple",
      odiaName: "ଶ୍ରୀ ଲୋକନାଥ ମନ୍ଦିର",
      subtitle: "Ancient Shiva Lingam Submerged Under Natural Spring Water",
      distance: "2.5 km West of Sri Mandir",
      significance: "The Supreme Guardian of Lord Jagannatha's Treasury",
      deity: "Submerged Swayambhu Shiva Lingam",
      timings: "5:30 AM – 9:00 PM (Linga darshan on Pankoddhar Ekadasi)",
      coordinates: { lat: 19.7995, lng: 85.8032 },
      mapZone: "west",
      tags: ["Guardian Shiva", "Pankoddhar Ekadasi", "Spring Water", "Treasury Key"],
      heroImage: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
      description: "One of the five premier Shiva temples (Pancha Pandavas) protecting Sri Kshetra. Lord Rama Himself is believed to have installed this Shiva Lingam during His journey in search of Sita Devi.",
      pastime: "The Shiva Lingam rests deep in an underground sanctum filled permanently with natural subterranean spring water. It remains underwater 364 days a year and is visible only on 'Pankoddhar Ekadasi' (three days before Shivaratri) when all the water is bailed out by priests to reveal the divine lingam.",
      scripturalQuote: {
        verse: "lokanatham namaskrtya jagannathasya darsanat | sarva-kama-samrddhir syad apavargam cha vindati ||",
        source: "Kapila Samhita",
        translation: "By bowing down to Lord Lokanatha in conjunction with the darshan of Jagannatha, all cherished desires are fulfilled and supreme liberation is reached."
      },
      highlights: [
        "Subterranean Spring: Natural cold spring water eternally covering the deity.",
        "Pankoddhar Festival: Spectacular annual de-watering ceremony witnessing thousands.",
        "Ancient Tank (Parvati Kunda): Surrounding ponds with healing medicinal waters.",
        "Guardian of the Bhandara: Historically entrusted with guarding the keys to Jagannath's jewel treasury."
      ],
      practicalTips: {
        dressCode: "Traditional attire.",
        entryRules: "Open to all respectful Hindu devotees.",
        bestTimeToVisit: "Early morning 6:30 AM before the queue lengthens."
      }
    },
    {
      id: "rohini-kunda",
      category: "pancha-tirtha",
      name: "Rohini Kunda & Bhusandi Kaka",
      odiaName: "ରୋହିଣୀ କୁଣ୍ଡ",
      subtitle: "The Waters of Immortality Inside the Jagannath Temple Complex",
      distance: "Inside Sri Mandir (Near Vimala Devi Temple)",
      significance: "Pancha Tirtha Well Where Death Becomes Liberation",
      deity: "Sudarsana Chakra in Water & Stone Raven (Kaka)",
      timings: "Same as Jagannath Temple hours",
      coordinates: { lat: 19.8051, lng: 85.8175 },
      mapZone: "center",
      tags: ["Pancha Tirtha", "Inner Sanctum", "Vimala Temple", "Crow Miracle"],
      heroImage: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80",
      description: "Situated in the inner courtyard of the Jagannath Temple just in front of the shrine of Goddess Vimala Devi. This sacred masonry tank contains holy water that is considered the cosmic water of creation (Karana Jala).",
      pastime: "The Puranas recount the story of an ordinary crow (Kaka Bhusandi) who accidentally fell into the waters of Rohini Kunda while clutching a fish. The moment its head submerged, the bird instantly assumed a four-armed divine form like Lord Narayana and flew away to Vaikuntha! Carved stone figures of the crow and Sudarshana Chakra rest inside the kunda to commemorate this miracle.",
      scripturalQuote: {
        verse: "rohini-kunda-toyeshu sparsanmatrena manavah | vaikuntha-vasino bhutva modante visnuna saha ||",
        source: "Brahma Purana",
        translation: "Merely by touching the waters of Rohini Kunda, human beings attain the spiritual realm of Vaikuntha and rejoice eternally in the company of Lord Vishnu."
      },
      highlights: [
        "Stone Crow Footprints: Ancient carving of Bhusandi Kaka on the southern rim.",
        "Sudarshana Stone Imprint: Consecrated footprint of Lord Vishnu submerged within.",
        "Adjacent to Maa Vimala: The premier Shakti Peetha where Jagannatha's Mahaprasad becomes Mahaprasadam.",
        "Pancha Tirtha 2nd Station: Holy water sprinkled on pilgrims' heads for purification."
      ],
      practicalTips: {
        dressCode: "Strict temple dress code within Sri Mandir premises.",
        entryRules: "Located within the Jagannath Temple complex (accessible to Hindu pilgrims).",
        bestTimeToVisit: "Mid-morning after Sakala Dhupa arati."
      }
    },
    {
      id: "sri-radha-rasikaraja-iskcon",
      category: "ancient-mathas",
      name: "ISKCON Puri (Sri Sri Radha Rasikaraja)",
      odiaName: "ଇସ୍କନ ପୁରୀ",
      subtitle: "Srila Prabhupada's International Oasis on VIP Road",
      distance: "3.2 km North of Sri Mandir",
      significance: "Global Beacon of Gaudiya Vaishnava Teachings & Hospitality",
      deity: "Sri Sri Radha Rasikaraja, Gauranga & Jagannatha Balabhadra Subhadra",
      timings: "4:30 AM – 1:00 PM | 4:15 PM – 8:30 PM",
      coordinates: { lat: 19.8295, lng: 85.8214 },
      mapZone: "north",
      tags: ["ISKCON", "Srila Prabhupada", "Global Pilgrim Hub", "Pure Prasadam"],
      heroImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      description: "Founded under the inspiration of A.C. Bhaktivedanta Swami Prabhupada, this vibrant international center on VIP Road serves as a welcoming gateway for spiritual seekers from all six continents visiting Sri Jagannatha Puri Dhama.",
      pastime: "Srila Prabhupada visited Puri in 1977 and desired a grand temple and spiritual academy where pilgrims of every background, race, and nationality could learn the science of Sanatana Dharma, partake in lavish Krishna Prasadam, and sing the Holy Names without boundary.",
      scripturalQuote: {
        verse: "prthivite ache yata nagaradi grama | sarvatra pracara haibe mora nama ||",
        source: "Caitanya Bhagavata",
        translation: "In every town and village of this world, the chanting of My holy name will be broadcast far and wide."
      },
      highlights: [
        "Enchanting Deities: Exquisite marble deities of Sri Sri Radha Rasikaraja.",
        "International Pilgrim Helpdesk: Guided parikramas and multicurrency guest facilities.",
        "Pure Satvik Restaurant: Clean, hygienic Govinda's restaurant serving satvik delicacies.",
        "Daily Ecstatic Kirtan: World-renowned melodic kirtan and Srimad Bhagavatam discourses."
      ],
      practicalTips: {
        dressCode: "Modest attire.",
        entryRules: "Open warmly to everyone from all countries, castes, and creeds.",
        bestTimeToVisit: "4:30 AM for sublime Mangala Arati or 7:00 PM for Sandhya Gaura Arati."
      }
    },
    {
      id: "atharanala-bridge",
      category: "core",
      name: "Atharanala Historical Bridge",
      odiaName: "ଅଠରନଳା ପୋଲ",
      subtitle: "The 13th-Century 18-Arch Gateway into the Holy City",
      distance: "3.5 km North at the Entrance of Puri",
      significance: "First View of the Neelachakra & Grand Welcoming Gate",
      deity: "Patitapabana at Entrance Gate",
      timings: "Open 24 Hours",
      coordinates: { lat: 19.8342, lng: 85.8301 },
      mapZone: "north",
      tags: ["18 Arches", "Heritage Bridge", "Entry Gateway", "Historic Bridge"],
      heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      description: "Built in the 13th century by King Bhanu Deva of the Eastern Ganga Dynasty, this majestic laterite stone bridge spans the Madhupur stream across 18 arches (Athar = 18, Nala = channels). It is the sacred traditional threshold where every pilgrim enters Puri.",
      pastime: "When Sri Caitanya Mahaprabhu first walked into Puri on His journey from Bengal, it was on Atharanala Bridge that He stopped, beheld the glistening Neelachakra spire of the Jagannath Temple rising into the clouds, and fell down prostrate in intense ecstatic tears of love.",
      scripturalQuote: {
        verse: "dure dekhi jagannather mandira-sikhar | dharani-tale podila prabhu premera sagar ||",
        source: "Sri Caitanya Caritamrta",
        translation: "Beholding the soaring spire of Jagannatha's temple from a distance, the Lord collapsed to the earth, submerged in an ocean of love."
      },
      highlights: [
        "18 Medieval Laterite Arches: An engineering marvel that has withstood floods and monsoons for 800 years.",
        "First Darshan Vantage: Traditional viewpoint to spot the flying temple flag (Bana).",
        "Archaeological Monument: Protected heritage site with illuminated walkways.",
        "Pilgrim Prostration Spot: Where centuries of great saints fell to their knees upon reaching Puri."
      ],
      practicalTips: {
        dressCode: "Any respectful attire.",
        entryRules: "Public heritage monument open 24 hours.",
        bestTimeToVisit: "Late afternoon for stunning panoramic photography of the ancient arches."
      }
    }
  ],

  // 24-Hour Daily Seva Schedule of Lord Jagannatha
  dailySevas: [
    {
      id: 1,
      name: "Dwaraphita & Mangala Alati",
      odiaName: "ଦ୍ୱାରଫିଟା ଓ ମଙ୍ଗଳ ଆଳତି",
      time: "05:00 AM – 05:30 AM",
      startMinutes: 300,
      endMinutes: 330,
      description: "The temple doors are officially unsealed in the presence of designated Sevakas (Bhitarachha and Talichha Mohapatras). Camphor and ghee lamps are waved before the smiling deities in the first darshan of the day.",
      significance: "Waking the Lord with sweet music of conches and cymbals. Bestows auspiciousness for the entire day."
    },
    {
      id: 2,
      name: "Mailam & Tadapalagi",
      odiaName: "ମଇଲମ ଓ ତଡ଼ପଲାଗି",
      time: "05:30 AM – 06:15 AM",
      startMinutes: 330,
      endMinutes: 375,
      description: "The night attire of the deities (Gitagovinda silk fabrics) is removed by the Pasupalaka servitors. The Lords are dressed in fresh morning cotton garments called 'Tadapalagi'.",
      significance: "Purifying morning changing of royal robes."
    },
    {
      id: 3,
      name: "Abakasha (Danta Dhavana & Snana)",
      odiaName: "ଅବକାଶ (ଦନ୍ତଧାବନ ଓ ସ୍ନାନ)",
      time: "06:15 AM – 07:00 AM",
      startMinutes: 375,
      endMinutes: 420,
      description: "The morning bath and dental cleaning ritual. The deities are offered special tooth sticks (Karpura danta-kastha) and tongue cleaners, followed by a symbolic water bath using bronze mirrors reflecting Their faces.",
      significance: "Intimate morning ablutions accompanied by Vedic mantras."
    },
    {
      id: 4,
      name: "Besha Lagi & Morning Adornment",
      odiaName: "ବେଶ ଲାଗି",
      time: "07:00 AM – 07:45 AM",
      startMinutes: 420,
      endMinutes: 465,
      description: "The Lords are adorned in rich seasonal silks, floral garlands, and gold ornaments according to the specific astrological day (tithi) and color of the day.",
      significance: "Royal morning dressing matching the planetary energy of the weekday."
    },
    {
      id: 5,
      name: "Gopala Vallabha Bhoga (Breakfast)",
      odiaName: "ଗୋପାଳ ବଲ୍ଲଭ ଭୋଗ",
      time: "08:00 AM – 09:00 AM",
      startMinutes: 480,
      endMinutes: 540,
      description: "The divine morning breakfast offered at the Ananta Vasudeva altar. Consists of puffed sweet rice (Khai), ripe bananas, coconut laddu, sweet curds, butter, and fragrant green camphor.",
      significance: "Reminiscent of Krishna's playful breakfast with the cowherd boys in the pastures of Vrindavana."
    },
    {
      id: 6,
      name: "Sakala Dhupa (Morning Raja Bhoga)",
      odiaName: "ସକାଳ ଧୂପ",
      time: "10:00 AM – 11:30 AM",
      startMinutes: 600,
      endMinutes: 690,
      description: "The first major cooked royal meal. Offered with 16 royal articles of worship (Upacharas). Includes Enduri pitha, Kanika fragrant sweet rice, varieties of dal, and steamed vegetable curries.",
      significance: "The morning feast prepared in pure earthen pots inside the sacred Rosha Ghara (temple kitchen)."
    },
    {
      id: 7,
      name: "Madhyahna Dhupa (Afternoon Feast)",
      odiaName: "ମଧ୍ୟାହ୍ନ ଧୂପ",
      time: "12:30 PM – 02:00 PM",
      startMinutes: 750,
      endMinutes: 840,
      description: "The grandest banquet of the day with an enormous array of rice dishes, traditional Odia pithas, Dalma (lentils with raw banana and pumpkin), and sweet dishes offered to the triad.",
      significance: "Goddess Lakshmi personally supervises the cooking, ensuring limitless spiritual nourishment."
    },
    {
      id: 8,
      name: "Madhyahna Pahuda (Afternoon Rest)",
      odiaName: "ମଧ୍ୟାହ୍ନ ପହୁଡ଼",
      time: "02:00 PM – 04:30 PM",
      startMinutes: 840,
      endMinutes: 990,
      description: "The deities rest quietly behind closed silk curtains. The sanctum doors are temporarily shut for the Lord's royal afternoon siesta.",
      significance: "The Lord's divine resting period after the grand midday feast."
    },
    {
      id: 9,
      name: "Sandhya Alati (Evening Lamp Offering)",
      odiaName: "ସନ୍ଧ୍ୟା ଆଳତି",
      time: "05:30 PM – 06:15 PM",
      startMinutes: 1050,
      endMinutes: 1095,
      description: "Doors reopen amidst the thunderous roll of mridanga drums and conch blowing. Five-tiered camphor and ghee lamps are waved in glowing circles around the Lord's lotus face.",
      significance: "Mesmerizing evening darshan filled with celestial light and devotional fervor."
    },
    {
      id: 10,
      name: "Sandhya Dhupa (Evening Cooked Bhoga)",
      odiaName: "ସନ୍ଧ୍ୟା ଧୂପ",
      time: "07:00 PM – 08:30 PM",
      startMinutes: 1140,
      endMinutes: 1230,
      description: "The evening cooked meal offering. Features Kanti (fried sweet dumplings), Mathapuli, sweet khichdi, and refreshing herbal decoctions.",
      significance: "Evening nourishment keeping the deities pleased and smiling."
    },
    {
      id: 11,
      name: "Badasinghara Besha (Night Floral Attire)",
      odiaName: "ବଡ଼ସିଂହାର ବେଶ",
      time: "10:00 PM – 11:00 PM",
      startMinutes: 1320,
      endMinutes: 1380,
      description: "The most poetic and breathtaking darshan of the day. The deities are completely adorned in handcrafted garlands of jasmine, tulasi, and fragrant marigold, wearing silk cloth woven with Jayadeva's Gita Govinda verses.",
      significance: "The supreme beauty of Lord Jagannatha as the romantic hero of the Gita Govinda."
    },
    {
      id: 12,
      name: "Badasinghara Bhoga & Ratri Pahuda",
      odiaName: "ବଡ଼ସିଂହାର ଭୋଗ ଓ ରାତ୍ରି ପହୁଡ଼",
      time: "11:00 PM – 11:45 PM",
      startMinutes: 1380,
      endMinutes: 1425,
      description: "The final offering of hot sweetened milk, Kadali pitha, and betel nut (Pana). Sevakas sing sweet melodies of the Gita Govinda as silver cots are laid out and the sanctum doors are sealed until dawn.",
      significance: "The Lord retires peacefully for the night into transcendental slumber."
    }
  ],

  // The Mahaprasadam & Ananda Bazaar Guide
  mahaprasad: {
    title: "Ananda Bazaar: The Market of Spiritual Joy",
    subtitle: "The Largest Open-Air Kitchen & Sacred Food Market in the World",
    summary: "At Puri, food is not merely nourishment—it is 'Mahaprasada', the direct transcendental mercy of the Supreme Lord. Prepared in the Rosha Ghara (which contains 240 earthen ovens and employs 600 cooks), nothing is ever tasted during preparation. Seven unglazed earthen pots are stacked directly on top of each other over a single wood fire; by divine mystery, the topmost pot cooks first!",
    cookingMystery: "The cooking fire is ignited using flames from the perpetual sacred Vaishnava sacrificial pit. It is believed that Goddess Mahalakshmi herself cooks the bhoga invisibly. If any dog or impure entity enters the temple premises, the food immediately loses its fragrance and turns to stone, signaling it must be buried in the Koili Baikuntha courtyard.",
    rulesForHonoring: [
      "No Caste Distinctions: Brahmins and all beings sit together on the same ground to honor Mahaprasad.",
      "Taken with the Right Hand: Never let shoes touch the dining mat; sit cross-legged on the earth.",
      "Nirmalya Potency: Even dried rice grains of Mahaprasad (Nirmalya) retain their full spiritual potency for years.",
      "Offered to Bimala Devi: Food offered to Jagannatha becomes 'Mahaprasada' only after it is subsequently offered to Goddess Vimala inside the temple."
    ],
    items: [
      {
        name: "Kanika",
        category: "Rice Preparations",
        taste: "Fragrant Sweet Rice",
        description: "Aromatic Basmati/sun-dried rice cooked with pure desi ghee, golden raisins, cashews, cloves, bay leaves, and flavored with crushed cardamom and nutmeg."
      },
      {
        name: "Khechudi (Tata Khechudi)",
        category: "Rice Preparations",
        taste: "Savory & Warming",
        description: "Golden rice and yellow moong dal cooked with crushed ginger, whole black pepper, and liberal ladles of pure cow ghee."
      },
      {
        name: "Dalma",
        category: "Dals & Curries",
        taste: "Nutritious & Hearty",
        description: "The crown jewel of Odia culinary devotion. Toor or moong dal simmered gently with raw bananas, pumpkin, eggplant, colocasia (arbi), and finished with roasted cumin and dry chili temper."
      },
      {
        name: "Besara",
        category: "Dals & Curries",
        taste: "Tangy & Mustard Spiced",
        description: "A rich vegetable medley cooked in a delicate stone-ground mustard seed paste, seasoned with turmeric and sun-dried lentil dumplings (Badi)."
      },
      {
        name: "Mahura",
        category: "Dals & Curries",
        taste: "Rich Earthy Stew",
        description: "A deeply nourishing mixed vegetable preparation made with yam, sweet potato, and pumpkin, lightly sweetened with pure palm jaggery."
      },
      {
        name: "Khaja (Pheni)",
        category: "Traditional Sweets",
        taste: "Crispy Layered Delicacy",
        description: "The world-famous signature sweet of Puri. Delicately kneaded refined flour rolled into countless paper-thin flaky layers, deep fried in pure ghee, and drenched in fragrant sugar syrup."
      },
      {
        name: "Chenna Poda",
        category: "Traditional Sweets",
        taste: "Caramelized Baked Cheese",
        description: "Fresh cottage cheese kneaded with sugar, cardamom, and cashews, wrapped in sal tree leaves and baked overnight until a delicious golden-brown caramel crust forms."
      },
      {
        name: "Poda Pitha",
        category: "Traditional Pithas",
        taste: "Smoky Sweet Rice Cake",
        description: "Lord Jagannatha's favorite midnight snack. Slow-baked rice and urad dal batter infused with grated coconut, jaggery, crushed black pepper, and ginger."
      },
      {
        name: "Chenna Gaja",
        category: "Traditional Sweets",
        taste: "Firm Juicy Sweet",
        description: "Dense rectangular cubes of hardened chhena cottage cheese and semolina fried golden and soaked in thick cardamom syrup."
      },
      {
        name: "Malpua (Amalu)",
        category: "Traditional Sweets",
        taste: "Soft Sweet Fritters",
        description: "Delicate golden pancakes offered during Sandhya Dhupa, flavored with crushed fennel seeds and dipped in saffron rose syrup."
      },
      {
        name: "Kanti",
        category: "Traditional Pithas",
        taste: "Fried Cottage Cheese Dumplings",
        description: "Small fluffy dumplings of fresh cottage cheese mixed with wheat flour, deep-fried and glazed in sweet honeyed syrup."
      },
      {
        name: "Enduri Pitha",
        category: "Traditional Pithas",
        taste: "Steamed Turmeric Leaf Cake",
        description: "Steamed rice cakes filled with coconut and jaggery, wrapped inside aromatic fresh green turmeric leaves that impart a heavenly scent."
      }
    ]
  },

  // Major Annual Festivals
  festivals: [
    {
      id: "ratha-yatra",
      name: "Sri Ratha Yatra (The Chariot Festival)",
      odiaName: "ରଥଯାତ୍ରା",
      timing: "Asadha Sukla Dwitiya (June / July)",
      summary: "The grandest public celebration of divinity on earth. The Lord of the Universe emerges from His temple to ride three colossal wooden chariots along Bada Danda to Gundicha Temple.",
      details: "For one magical week, all social, caste, and national barriers dissolve. Millions pull the ropes of Nandighosa (Jagannatha's 45-foot red and yellow chariot with 16 wheels), Taladhwaja (Balabhadra's green and red chariot with 14 wheels), and Darpadalana (Subhadra's red and black chariot with 12 wheels).",
      significance: "Demonstrates that the Supreme Lord is not locked away inside palaces, but comes out onto the dusty highway to grant His loving darshan to every single living soul."
    },
    {
      id: "snana-yatra",
      name: "Snana Yatra (Divine Bathing Ceremony)",
      odiaName: "ସ୍ନାନ ଯାତ୍ରା",
      timing: "Jyeshtha Purnima (Full Moon of May / June)",
      summary: "The divine birthday bath where the deities are bathed with 108 golden pots of perfumed water drawn from the sacred Golden Well (Suna Kua).",
      details: "Following this lavish public bath on the high Snana Vedi platform, the deities catch a divine cold (fever) and retire for the 15-day secret healing period known as Anavasara, dressed in the famous elephant-faced Gajanana Besha.",
      significance: "Commemorates the historic appearance day of Lord Jagannatha as ordained by King Indradyumna."
    },
    {
      id: "anavasara",
      name: "Anavasara (The Divine 15-Day Seclusion)",
      odiaName: "ଅଣବସର",
      timing: "Fortnight before Ratha Yatra",
      summary: "The 15 days when the temple doors remain closed as the Lords undergo special herbal treatments (Dasamula) administered by the Daitapati servitors.",
      details: "During this time, the sanctum displays traditional Pattachitra paintings (Anasar Pati) in place of the deities, and pilgrims travel in large numbers to Alarnath Temple in Brahmagiri to seek the Lord's mercy.",
      significance: "Teaches the tender human-like intimacy of the Lord, who accepts herbal oils and cooling fruit extracts."
    },
    {
      id: "chandana-yatra",
      name: "Chandana Yatra (The 42-Day Sandalwood Festival)",
      odiaName: "ଚନ୍ଦନ ଯାତ୍ରା",
      timing: "Akshaya Tritiya (April / May) for 42 Days",
      summary: "The longest festival in Puri, lasting 42 days (21 days Bahira Chandana at Narendra Sarovara and 21 days Bhitara Chandana inside the temple).",
      details: "Deities are smeared in cool sandalwood paste and taken in flower-bedecked palanquins to cruise the waters of Narendra Sarovara in swan-shaped boats every evening.",
      significance: "Marks the sacred day when construction of the annual Ratha Yatra chariots officially commences with ritual axe blessings."
    },
    {
      id: "suna-besha",
      name: "Suna Besha (Golden Adornment on Chariots)",
      odiaName: "ସୁନା ବେଶ",
      timing: "Asadha Sukla Ekadasi (Upon Return of Bahuda Yatra)",
      summary: "The breathtaking evening when Lord Jagannatha, Balabhadra, and Subhadra are adorned with over 208 kilograms of solid gold crowns, hands, and ornaments while resting atop Their chariots.",
      details: "Watched by over 1.5 million devotees standing in reverence along the Grand Avenue, this is the most opulent public darshan of the entire year.",
      significance: "Commemorates King Kapilendra Deva's victory in 1460 AD when he surrendered all his royal gold booty directly at the Lord's lotus feet."
    },
    {
      id: "kartika-panchaka",
      name: "Kartika Niyama Seva & Panchaka Beshas",
      odiaName: "କାର୍ତ୍ତିକ ବ୍ରତ ଓ ପଞ୍ଚକ ବେଶ",
      timing: "Month of Kartika (October / November)",
      summary: "The most auspicious spiritual month when thousands of Habisiali elderly mothers and worldwide devotees observe month-long fasting and prayers in Puri.",
      details: "During the final five days (Baka Panchaka), the deities are adorned each day in a magnificent different attire: Thiakia Besha, Bankachuda Besha, Dalakia Besha, Lakshmi-Narayana Besha, and the rare Nagarjuna Besha (Warrior Attire).",
      significance: "Devotional service performed in Kartika yields thousands of times more spiritual merit than during any other period."
    }
  ],

  // Curated Itineraries for Devotees
  itineraries: [
    {
      id: "one-day-express",
      title: "1-Day Divine Essence Yatra",
      tag: "Express Darshan",
      duration: "1 Day (Dawn to Night)",
      suitability: "Short weekend visitors & first-time pilgrims",
      stops: [
        { time: "05:30 AM", placeId: "jagannath-temple", label: "Mangala Alati & Temple Parikrama" },
        { time: "08:30 AM", placeId: "sarvabhauma-bhattacharya-home", label: "Sadbhuja Darshan & Historical Home" },
        { time: "10:00 AM", placeId: "gambhira", label: "Sri Radha-Kanta Matha & Mahaprabhu's Room" },
        { time: "11:30 AM", placeId: "siddha-bakula", label: "Namacharya Haridasa Thakura's Miracle Tree" },
        { time: "01:00 PM", placeId: "jagannath-temple", label: "Honor Hot Mahaprasad at Ananda Bazaar" },
        { time: "04:30 PM", placeId: "tota-gopinatha", label: "Unique Seated Gopinatha Deity Darshan" },
        { time: "06:00 PM", placeId: "haridas-thakur-samadhi", label: "Seashore Samadhi Darshan & Ocean Breeze" },
        { time: "07:30 PM", placeId: "jagannath-temple", label: "Evening Sandhya Alati & Bada Danda Stroll" }
      ]
    },
    {
      id: "two-day-lila",
      title: "2-Day Caitanya Lila & Sacred Waters Circuit",
      tag: "Devotional Parikrama",
      duration: "2 Days / 1 Night",
      suitability: "Gaudiya devotees & lovers of Caitanya Caritamrta",
      stops: [
        { time: "Day 1 AM", placeId: "jagannath-temple", label: "Grand Morning Darshan & Inner Courtyard Shrines" },
        { time: "Day 1 Noon", placeId: "gambhira", label: "Deep Meditation at Mahaprabhu's Gambhira" },
        { time: "Day 1 PM", placeId: "siddha-bakula", label: "Japa at Haridasa Thakura's Bhajan Kutir" },
        { time: "Day 1 Eve", placeId: "tota-gopinatha", label: "Evening Aarti & Bhagavatam Hall" },
        { time: "Day 2 AM", placeId: "narendra-sarovara", label: "Chandana Yatra Lake & Morning Walks" },
        { time: "Day 2 Mid", placeId: "gundicha-temple", label: "Gundicha Temple Gardens & Indradyumna Tank" },
        { time: "Day 2 PM", placeId: "cakra-tirtha", label: "Cakra Narayana & Beach Where Daru Log Landed" },
        { time: "Day 2 Eve", placeId: "haridas-thakur-samadhi", label: "Sunset Kirtan at Seashore Samadhi" }
      ]
    },
    {
      id: "three-day-sankha-kshetra",
      title: "3-Day Complete Sankha Kshetra Experience",
      tag: "Comprehensive Pilgrimage",
      duration: "3 Days / 2 Nights",
      suitability: "Spiritual seekers wanting the full Pancha Tirtha & Alarnath journey",
      stops: [
        { time: "Day 1", placeId: "jagannath-temple", label: "Full Sri Mandir Exploration, Ananda Bazaar, & Gambhira" },
        { time: "Day 2", placeId: "markandeya-sarovara", label: "Pancha Tirtha Circuit (Markandeya, Rohini, Sweta Ganga, Indradyumna, Mahodadhi)" },
        { time: "Day 3 AM", placeId: "alarnath-temple", label: "Morning Excursion to Sri Alarnath (Brahmagiri) & Kheer Bhoga" },
        { time: "Day 3 PM", placeId: "sri-radha-rasikaraja-iskcon", label: "ISKCON Puri Darshan, Govinda's Prasadam & Atharanala Bridge" }
      ]
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "What is the dress code for entering Sri Jagannath Temple?",
      a: "Devotees must wear traditional, modest Indian clothing. Men should wear dhoti and kurta/angavastram (or bare chest with dhoti), and women should wear saree or salwar kameez. Western clothes, shorts, bermudas, sleeveless tops, and jeans are prohibited. All leather accessories (belts, wallets, shoes, leather watch straps) and electronic devices (mobile phones, cameras, smart watches) are strictly banned inside."
    },
    {
      q: "Can non-Hindu and foreign tourists enter the main Jagannath Temple?",
      a: "According to ancient temple traditions passed down over centuries, entry into the inner sanctum of Sri Mandir is reserved for practicing Hindus. However, Lord Jagannatha is affectionately known as 'Patitapabana' (Deliverer of the Fallen), and His deity is prominently installed right at the Lion's Gate (Singhadwara) for all people of the world to receive darshan freely. Moreover, during the annual Ratha Yatra, Lord Jagannatha leaves His temple and stays on the open chariots for nine days specifically so every human being without distinction can behold Him. Nearby sites such as Gambhira, Tota Gopinatha, Siddha Bakula, Gundicha Temple, Narendra Sarovara, and ISKCON Puri are open to all visitors globally."
    },
    {
      q: "How can one obtain authentic Mahaprasadam at Ananda Bazaar?",
      a: "Mahaprasad is available daily in the open-air market called Ananda Bazaar, situated within the outer northeast precinct of the Jagannath Temple complex (accessible via the Northern Gate / Hasti Dwara). Freshly cooked Sakala Dhupa items become available around 11:30 AM, and the main lavish Madhyahna Dhupa feast is available from 1:30 PM to 3:30 PM. Dry sweet items like Khaja can be packed for travel and keep fresh for over two weeks."
    },
    {
      q: "What are the Pancha Tirthas of Puri and what is their significance?",
      a: "The Pancha Tirthas are five sacred water bodies: 1. Markandeya Sarovara (where sage Markandeya saw Vishnu during deluge), 2. Rohini Kunda (inside Sri Mandir with Bhusandi crow legend), 3. Sweta Ganga (secret underground Ganges spring), 4. Indradyumna Sarovara (tank born of sacrificial cow hooves), and 5. Mahodadhi (the sacred ocean at Swargadwar). Completing the holy bath at all five tirthas in proper sequence is said to wash away lifelong sins and grant liberation."
    },
    {
      q: "What is the best season to visit Puri for pilgrimage?",
      a: "The most pleasant weather occurs between October and March (temperatures 18°C – 28°C), making it ideal for sightseeing and comfortable walking. For experiencing intense spiritual festivals, the summer months bring Chandana Yatra (April-May), Snana Yatra (June), and the world-famous Ratha Yatra (late June or July), which draws millions despite coastal monsoon rains."
    },
    {
      q: "How do I reach Puri and what is local transport like?",
      a: "Puri is well-connected by railway (Puri Terminal Station, PURI), which has direct superfast and express trains to Kolkata, New Delhi, Chennai, Mumbai, and Bangalore. The nearest airport is Biju Patnaik International Airport (BBI) in Bhubaneswar, 60 km away (approx. 1 hour 15 minutes by four-lane national highway via taxi or airport bus). Inside Puri, battery-operated e-rickshaws (Totos) and auto-rickshaws are the most convenient way to navigate the narrow sacred streets."
    }
  ],

  // Adi Shankaracharya's Sacred Jagannathashtakam (8 Immortal Verses)
  jagannathashtakam: [
    {
      verseNo: 1,
      sanskrit: "कदाचित् कालिन्दी-तट-विपिन-सङ्गीत-तरलो\nमुदाभीरी-नारी-वदन-कमलास्वाद-मधुपः ।\nरमाशम्भु-ब्रह्मामुरपति-गणेशार्चित-पदो\nजगन्नाथः स्वामी नयन-पथ-गामी भवतु मे ॥ १ ॥",
      transliteration: "kadācit kālindī-taṭa-vipina-saṅgīta-taralo\nmudābhīrī-nārī-vadana-kamalāsvāda-madhupaḥ |\nramā-śambhu-brahmāmura-pati-gaṇeśārcita-pado\njagannāthaḥ svāmī nayana-patha-gāmī bhavatu me || 1 ||",
      translation: "Sometimes, standing upon the banks of the Yamuna River, He plays enchanting flute music. Like a honeybee, He delights in the lotus faces of the cowherd maidens. His lotus feet are worshipped by Lakshmi, Shiva, Brahma, Indra, and Ganesha. May that Lord Jagannatha be the eternal object of my divine vision!"
    },
    {
      verseNo: 2,
      sanskrit: "भुजे सव्ये वेणुं शिरसि शिखिपिञ्छं कटितटे\nदुकूलं नेत्रान्ते सहचर-कटाक्षं विदधते ।\nसदा श्रीमद्-वृन्दावन-वसति-लीला-परिचयो\nजगन्नाथः स्वामी नयन-पथ-गामी भवतु मे ॥ २ ॥",
      transliteration: "bhuje savye veṇuṁ śirasi śikhi-piñchaṁ kaṭi-taṭe\ndukūlaṁ netrānte sahacara-kaṭākṣaṁ vidadhate |\nsadā śrīmad-vṛndāvana-vasati-līlā-paricayo\njagannāthaḥ svāmī nayana-patha-gāmī bhavatu me || 2 ||",
      translation: "Holding a flute in His left hand, crowned with a peacock feather upon His head, adorned with yellow silk robes around His waist, and glancing lovingly from the corners of His large lotus eyes upon His companions—He whose eternal pastimes dwell forever in Vrindavana: May that Lord Jagannatha be the eternal object of my divine vision!"
    },
    {
      verseNo: 3,
      sanskrit: "महाम्भोधेस्तीरे हेम-रुचिर-नीलाचल-वने\nवसन् प्रासादान्तः सहज-बलभद्रेण बलिना ।\nसुभद्रा-मध्यस्थः सकल-सुर-सेवावसरदो\nजगन्नाथः स्वामी नयन-पथ-गामी भवतु मे ॥ ३ ॥",
      transliteration: "mahāmbhodhes-tīre hema-rucira-nīlācala-vane\nvasan prāsādāntaḥ sahaja-balabhadreṇa balinā |\nsubhadrā-madhya-sthaḥ sakala-sura-sevāvasarado\njagannāthaḥ svāmī nayana-patha-gāmī bhavatu me || 3 ||",
      translation: "Residing upon the shore of the vast ocean inside the golden, luminous temple of Nilachala, alongside His powerful brother Balabhadra and sister Subhadra in the middle, bestowing joyful opportunities of service to all demigods and mortals: May that Lord Jagannatha be the eternal object of my divine vision!"
    },
    {
      verseNo: 4,
      sanskrit: "कृपा-पारावारः सजल-जलद-श्रेणि-रुचिरो\nरमा-वाणी-रामः स्फुरद्-अमल-पङ्केरुह-मुखः ।\nसुरेन्द्रैर्-आराध्यः श्रुति-गण-शिखा-गीत-चरितो\nजगन्नाथः स्वामी नयन-पथ-गामी भवतु मे ॥ ४ ॥",
      transliteration: "kṛpā-pārāvāraḥ sajala-jalada-śreṇi-ruciro\nramā-vāṇī-rāmaḥ sphurad-amala-paṅkeruha-mukhaḥ |\nsurendrair-ārādhyaḥ śruti-gaṇa-śikhā-gīta-carito\njagannāthaḥ svāmī nayana-patha-gāmī bhavatu me || 4 ||",
      translation: "An ocean of boundless mercy, His complexion glowing like fresh rainclouds, giving delight to Lakshmi and Sarasvati, His smiling face blossoming like a pure radiant lotus, worshipped by the kings of heaven, His glory sung in the Upanishads: May that Lord Jagannatha be the eternal object of my divine vision!"
    },
    {
      verseNo: 5,
      sanskrit: "रथारूढो गच्छन् पथि मिलित-भूदेव-पटलैः\nस्तुति-प्रादुर्भावं प्रति-पदम् उपकर्ण्य सदयः ।\nदया-सिन्धुर्बन्धुः सकल-जगतां सिन्धु-सुतया\nजगन्नाथः स्वामी नयन-पथ-गामी भवतु मे ॥ ५ ॥",
      transliteration: "rathārūḍho gacchan pathi milita-bhūdeva-paṭalaiḥ\nstuti-prādurbhāvaṁ prati-padam upakarṇya sadayaḥ |\ndayā-sindhur bandhuḥ sakala-jagatāṁ sindhu-sutayā\njagannāthaḥ svāmī nayana-patha-gāmī bhavatu me || 5 ||",
      translation: "Mounted upon His grand chariot as it rolls down Bada Danda, listening with compassion at every step to the prayers of assembled sages and devotees, the ocean of grace and beloved friend of all universes alongside Lakshmi: May that Lord Jagannatha be the eternal object of my divine vision!"
    },
    {
      verseNo: 6,
      sanskrit: "परब्रह्मापीडः कुवलय-दलोत्फुल्ल-नयनो\nनिवासी नीलाद्रौ निहित-चरणोऽनन्त-शिरसि ।\nरसानन्दी राधा-सरस-वपुरालिङ्गन-सुखो\nजगन्नाथः स्वामी नयन-पथ-गामी भवतु मे ॥ ६ ॥",
      transliteration: "parabrahmāpīḍaḥ kuvalaya-dalotphulla-nayano\nnivāsī nīlādrau nihita-caraṇo'nanta-śirasi |\nrasānandī rādhā-sarasa-vapur-āliṅgana-sukho\njagannāthaḥ svāmī nayana-patha-gāmī bhavatu me || 6 ||",
      translation: "The crown jewel of Supreme Divinity, His eyes blossoming wide like large blue lotus petals, resting His feet upon the heads of Ananta Shesha in the mountain of Niladri, immersed in transcendental mellows and rejoicing in Radha's divine love: May that Lord Jagannatha be the eternal object of my divine vision!"
    },
    {
      verseNo: 7,
      sanskrit: "न वै याचे राज्यं न च कनक-माणिक्य-विभवं\nन याचेऽहं रम्यां सकल-जन-काम्यां वर-वधूम् ।\nसदा काले काले प्रमथ-पतिना गीत-चरितो\nजगन्नाथः स्वामी नयन-पथ-गामी भवतु मे ॥ ७ ॥",
      transliteration: "na vai yāce rājyaṁ na ca kanaka-māṇikya-vibhavaṁ\nna yāce'haṁ ramyāṁ sakala-jana-kāmyāṁ vara-vadhūm |\nsadā kāle kāle pramatha-patinā gīta-carito\njagannāthaḥ svāmī nayana-patha-gāmī bhavatu me || 7 ||",
      translation: "I beg neither for kingdoms, nor riches of gold and rubies, nor for beautiful companions desired by worldly souls. Only this: He whose transcendental glories Lord Shiva sings throughout eternity—may that Lord Jagannatha be the eternal object of my divine vision!"
    },
    {
      verseNo: 8,
      sanskrit: "हर त्वं संसारं द्रुततरम् असारं सुर-पते\nहर त्वं पापानां विततिम् अपरां यादव-पते ।\nअहो दीनेऽनाथे निहित-चरणो निश्चितम् इदं\nजगन्नाथः स्वामी नयन-पथ-गामी भवतु मे ॥ ८ ॥",
      transliteration: "hara tvaṁ saṁsāraṁ drutataram asāraṁ sura-pate\nhara tvaṁ pāpānāṁ vitatim aparāṁ yādava-pate |\naho dīne'nāthe nihita-caraṇo niścitam idaṁ\njagannāthaḥ svāmī nayana-patha-gāmī bhavatu me || 8 ||",
      translation: "O Lord of the demigods! Quickly remove this hollow cycle of material existence! O King of the Yadus! Destroy my boundless heaps of sins! You who shower mercy upon the fallen and shelter the helpless: May that Lord Jagannatha be the eternal object of my divine vision!"
    }
  ],

  // Step-by-Step Sacred Pancha Tirtha Snana Circuit
  panchaTirthaRitual: [
    {
      step: 1,
      name: "Markandeya Sarovara Snana",
      location: "Markandeshwar Sahi (North-West)",
      mantra: "om markandeyaye namastubhyam sarva-papa-pranasana | snanena mama toyeshu visnulokam pradasyasi ||",
      procedure: "Face east at the stone ghat. Sprinkle water thrice upon the head, take a complete holy immersion, and offer respects to Markandesvara Shiva and the Saptamatrikas."
    },
    {
      step: 2,
      name: "Rohini Kunda Sparshana",
      location: "Inside Jagannath Temple (Near Vimala Devi)",
      mantra: "om karana-toya-sambhute rohini-kunda-pavaney | sparsanat mukti-danaya namaste brahma-rupine ||",
      procedure: "Sprinkle the sanctified water of the well over forehead and crown. Bow to the submerged Sudarshana Chakra and the ancient carving of Bhusandi Kaka."
    },
    {
      step: 3,
      name: "Sweta Ganga Snana",
      location: "South of Temple (Sweta Ganga Lane)",
      mantra: "om sweta-gange maha-punye patita-pavani subhe | snanena te nirmalatvam dehi me visnu-vallabhe ||",
      procedure: "Descend the deep stone step-well. Perform sacred ablution invoking Ganga and Yamuna, followed by darshan of Sweta Madhava and Matsya Avatara."
    },
    {
      step: 4,
      name: "Indradyumna Sarovara Snana",
      location: "Near Gundicha Temple (North-East)",
      mantra: "om indradyumna-saro-raja go-pradana-phala-prada | tvayi snatva vimuktah syam sarva-bandhair na samsayah ||",
      procedure: "Take holy dip in the tank created by King Indradyumna's Ashvamedha cows. Feed sacred green grass or puffed rice to the holy tortoises, then visit Nilakanthesvara."
    },
    {
      step: 5,
      name: "Mahodadhi Snana (The Sacred Ocean)",
      location: "Swargadwar Beach",
      mantra: "om namas-te sarva-tirthanam adhipo tvam mahodadhe | jagannatha-pada-sparsha-pavitra-jala-vahine ||",
      procedure: "Conclude the pilgrimage at the roaring surf of the Bay of Bengal. Take 3 dips into the waves, offer arghya to Surya Narayana, and chant the Mahamantra as Lord Caitanya did."
    }
  ],

  // Pilgrim Advisory & Panda Guidelines
  pilgrimAdvisory: {
    dressCode: "Men must wear Dhoti-Kurta or bare chest with Dhoti. Women must wear Saree or Salwar-Kameez. Jeans, shorts, skirts, sleeveless clothing, and leather items (belts, wallets, watchstraps) are barred.",
    mobileAndLockers: "Mobiles and cameras are strictly banned inside Sri Mandir. Free / nominal safe lockers operated by the Shree Jagannath Temple Administration (SJTA) are available at Singhadwara (Lion's Gate), Paschima Dwara, and Uttar Dwara.",
    pandasAndOfferings: "Only engage registered servitors displaying official SJTA Identity Cards. Agree on any special puja/dakshina beforehand. Official temple receipts should always be requested for donations.",
    mahaprasadPricing: "Inside Ananda Bazaar, price boards are displayed at government-monitored stalls. Freshly prepared meals arrive around 11:30 AM (Sakala Dhupa) and 1:30 PM (Madhyahna Dhupa). Always sit on the ground to honor.",
    localTransit: "Fixed rate e-rickshaws (Totos) operate between Railway Station, Bada Danda, and Swargadwar (₹20 to ₹50 per person on shared basis, or ₹100–₹150 private hire)."
  },

  // Multilingual UI Translations (English, Odia, Hindi)
  translations: {
    en: {
      siteTitle: "PURI DARSHAN",
      siteSubtitle: "The Divine Abode of Lord Jagannath",
      navMap: "Sankha Kshetra",
      navPlaces: "Holy Places",
      navSevas: "Dina Seva",
      navMahaprasad: "Mahaprasad",
      navFestivals: "Festivals",
      navItineraries: "Yatra Routes",
      navAshtakam: "Jagannathashtakam",
      navPanchaTirtha: "Pancha Tirtha",
      navFaq: "Pilgrim Guide",
      myYatra: "My Yatra",
      heroBadge: "Sri Purusottama Kshetra • Jagannatha Puri",
      heroTitle: "Journey into the Heart of Sankha Kshetra & Caitanya Lila",
      heroDesc: "An immersive, responsive digital pilgrimage across the sacred holy land of Lord Jagannatha — explore 18 transcendent pastime sites, live 24-hour temple sevas, sacred waters, and the eternal grace of Ananda Bazaar Mahaprasadam.",
      exploreMapBtn: "Explore Interactive Map",
      browseSitesBtn: "Browse 18 Holy Sites"
    },
    or: {
      siteTitle: "ପୁରୀ ଦର୍ଶନ",
      siteSubtitle: "ମହାପ୍ରଭୁ ଶ୍ରୀ ଜଗନ୍ନାଥଙ୍କ ପବିତ୍ର ଧାମ",
      navMap: "ଶଙ୍ଖ କ୍ଷେତ୍ର",
      navPlaces: "ପବିତ୍ର ତୀର୍ଥ",
      navSevas: "ଦିନ ସେବା",
      navMahaprasad: "ମହାପ୍ରସାଦ",
      navFestivals: "ପର୍ବପର୍ବାଣୀ",
      navItineraries: "ଯାତ୍ରା ମାର୍ଗ",
      navAshtakam: "ଜଗନ୍ନାଥାଷ୍ଟକମ୍",
      navPanchaTirtha: "ପଞ୍ଚ ତୀର୍ଥ",
      navFaq: "ଯାତ୍ରୀ ମାର୍ଗଦର୍ଶିକା",
      myYatra: "ମୋର ଯାତ୍ରା",
      heroBadge: "ଶ୍ରୀ ପୁରୁଷୋତ୍ତମ କ୍ଷେତ୍ର • ଶ୍ରୀ ଜଗନ୍ନାଥ ଧାମ ପୁରୀ",
      heroTitle: "ଶଙ୍ଖ କ୍ଷେତ୍ର ଓ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ଲୀଳାଭୂମି ଦର୍ଶନ",
      heroDesc: "ମହାପ୍ରଭୁ ଶ୍ରୀ ଜଗନ୍ନାଥଙ୍କ ପରମ ପବିତ୍ର ଶ୍ରୀକ୍ଷେତ୍ର ପରିକ୍ରମା — ୧୮ ଟି ଦିବ୍ୟ ତୀର୍ଥସ୍ଥଳୀ, ମନ୍ଦିରର ୨୪ ଘଣ୍ଟିଆ ଦିନ ସେବା, ଆନନ୍ଦ ବଜାର ମହାପ୍ରସାଦ ଓ ପବିତ୍ର ପଞ୍ଚତୀର୍ଥ ସ୍ନାନର ଅନୁଭୂତି ।",
      exploreMapBtn: "ଇଣ୍ଟରାକ୍ଟିଭ୍ ମାନଚିତ୍ର ଦେଖନ୍ତୁ",
      browseSitesBtn: "୧୮ ଟି ତୀର୍ଥସ୍ଥାନ ବ୍ରାଉଜ୍ କରନ୍ତୁ"
    },
    hi: {
      siteTitle: "पुरी दर्शन",
      siteSubtitle: "भगवान श्री जगन्नाथ का परम पावन धाम",
      navMap: "शंख क्षेत्र",
      navPlaces: "पवित्र तीर्थ",
      navSevas: "दैनिक सेवा",
      navMahaprasad: "महाप्रसाद",
      navFestivals: "उत्सव",
      navItineraries: "यात्रा मार्ग",
      navAshtakam: "जगन्नाथाष्टकम्",
      navPanchaTirtha: "पंच तीर्थ",
      navFaq: "यात्री निर्देशिका",
      myYatra: "मेरी यात्रा",
      heroBadge: "श्री पुरुषोत्तम क्षेत्र • श्री जगन्नाथ पुरी धाम",
      heroTitle: "शंख क्षेत्र और चैतन्य महाप्रभु की लीलाभूमि में प्रवेश",
      heroDesc: "भगवान श्री जगन्नाथ के पावन धाम की दिव्य डिजिटल तीर्थयात्रा — 18 अलौकिक लीला स्थल, चौबीस घंटे चलने वाली दैनिक सेवा, आनंद बाज़ार का महाप्रसाद और पवित्र पंच तीर्थ स्नान ।",
      exploreMapBtn: "इंटरएक्टिव मानचित्र देखें",
      browseSitesBtn: "18 पवित्र तीर्थ स्थल देखें"
    }
  }
};

// Export to window object for standalone browser use & module for testing
if (typeof window !== "undefined") {
  window.PURI_DATA = PURI_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PURI_DATA;
}

