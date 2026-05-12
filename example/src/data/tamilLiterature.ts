export type Era = "Sangam" | "Post-Sangam" | "Bhakti" | "Medieval" | "Colonial" | "Modern" | "Contemporary";
export type Genre = "Poetry" | "Epic" | "Grammar" | "Devotional" | "Novel" | "Short Story" | "Anthology" | "Ethics";

export interface TamilWork {
  id: number;
  title: string;
  titleTamil?: string;
  author: string;
  era: Era;
  period: string; // e.g., "300 BCE – 300 CE"
  genre: Genre;
  description: string;
  significance: string;
  tags: string[];
  language: "Classical Tamil" | "Medieval Tamil" | "Modern Tamil";
}

export const tamilLiteratureData: TamilWork[] = [
  // ── SANGAM ERA ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Tolkappiyam",
    titleTamil: "தொல்காப்பியம்",
    author: "Tolkappiyar",
    era: "Sangam",
    period: "300 BCE – 100 CE",
    genre: "Grammar",
    description:
      "The oldest surviving grammar of the Tamil language and one of the oldest extant grammars of any language in the world. It covers phonology, morphology, and poetics including the akam (love) and puram (heroism) literary conventions.",
    significance:
      "Foundation of Tamil grammar and literary tradition; prescribes the Tinai system of landscape-based poetry.",
    tags: ["grammar", "akam", "puram", "tinai", "classical", "oldest", "linguistics"],
    language: "Classical Tamil",
  },
  {
    id: 2,
    title: "Purananuru",
    titleTamil: "புறநானூறு",
    author: "Multiple Poets (400 poems)",
    era: "Sangam",
    period: "200 BCE – 300 CE",
    genre: "Anthology",
    description:
      "A collection of 400 puram (exterior/heroic) poems from the Eight Anthologies (Ettuttokai). It covers themes of war, death, the generosity of kings, and the heroism of warriors.",
    significance:
      "Considered the most comprehensive source on Sangam-era history, politics, and social life.",
    tags: ["puram", "war", "heroism", "kings", "ettuttokai", "anthology", "history"],
    language: "Classical Tamil",
  },
  {
    id: 3,
    title: "Akananuru",
    titleTamil: "அகநானூறு",
    author: "Multiple Poets (400 poems)",
    era: "Sangam",
    period: "100 BCE – 250 CE",
    genre: "Anthology",
    description:
      "A collection of 400 akam (interior/love) poems, among the longest in the Sangam corpus. The poems describe love in all its phases using the five tinai landscapes.",
    significance:
      "A masterpiece of classical Tamil love poetry, celebrated for its rich imagery and metaphor.",
    tags: ["akam", "love", "tinai", "ettuttokai", "nature", "poetry", "anthology"],
    language: "Classical Tamil",
  },
  {
    id: 4,
    title: "Kurunthokai",
    titleTamil: "குறுந்தொகை",
    author: "Multiple Poets (400 poems)",
    era: "Sangam",
    period: "200 BCE – 200 CE",
    genre: "Anthology",
    description:
      "One of the Eight Anthologies, containing 400 short akam poems. Noted for their brevity, depth, and exquisite use of imagery drawn from nature to express the nuances of romantic love.",
    significance:
      "A jewel of Sangam akam poetry, celebrated for distilling profound emotions in few words.",
    tags: ["akam", "love", "short poems", "ettuttokai", "imagery", "nature"],
    language: "Classical Tamil",
  },
  {
    id: 5,
    title: "Narrinai",
    titleTamil: "நற்றிணை",
    author: "Multiple Poets (400 poems)",
    era: "Sangam",
    period: "100 BCE – 200 CE",
    genre: "Anthology",
    description:
      "400 akam poems of medium length from the Eight Anthologies. Known for their vivid descriptions of the five tinai landscapes and their skillful depiction of love and longing.",
    significance: "One of the richest collections of akam poetry, celebrated for its poetic excellence.",
    tags: ["akam", "love", "tinai", "ettuttokai", "medium poems"],
    language: "Classical Tamil",
  },
  {
    id: 6,
    title: "Ainkurunuru",
    titleTamil: "ஐங்குறுநூறு",
    author: "Multiple Poets (500 poems)",
    era: "Sangam",
    period: "100 CE – 300 CE",
    genre: "Anthology",
    description:
      "A collection of 500 short love poems, each set in one of the five tinai landscapes. The poems are arranged in five books of 100, each dealing with one tinai.",
    significance:
      "Unique for its strict structural arrangement by landscape; a model of how emotion and nature intertwine in Sangam poetry.",
    tags: ["akam", "love", "tinai", "ettuttokai", "structured", "five landscapes"],
    language: "Classical Tamil",
  },
  {
    id: 7,
    title: "Patirruppattu",
    titleTamil: "பதிற்றுப்பத்து",
    author: "Multiple Poets",
    era: "Sangam",
    period: "200 BCE – 300 CE",
    genre: "Anthology",
    description:
      "A collection of ten groups of ten puram poems, each group praising a Chera king. It is the primary source for the history and genealogy of the Chera dynasty.",
    significance:
      "An invaluable historical document on the Chera kings and Sangam-era political geography.",
    tags: ["puram", "chera", "kings", "ettuttokai", "history", "heroism"],
    language: "Classical Tamil",
  },
  {
    id: 8,
    title: "Kalittokai",
    titleTamil: "கலித்தொகை",
    author: "Multiple Poets (150 poems)",
    era: "Sangam",
    period: "100 CE – 300 CE",
    genre: "Anthology",
    description:
      "A collection of 150 akam poems composed in the kali meter, a lively and dramatic rhythm. Unique among the Eight Anthologies for its use of dialogue and dramatic scenes.",
    significance:
      "Celebrated for its dramatic flair and complex metrical structure; a bridge between the lyric and dramatic traditions.",
    tags: ["akam", "love", "drama", "kali meter", "ettuttokai", "dialogue"],
    language: "Classical Tamil",
  },
  {
    id: 9,
    title: "Paripatal",
    titleTamil: "பரிபாடல்",
    author: "Multiple Poets",
    era: "Sangam",
    period: "200 CE – 400 CE",
    genre: "Anthology",
    description:
      "A partially surviving anthology of religious and romantic poems, celebrating the gods Murugan, Vishnu, and the river Vaigai. Notably blends devotional and Sangam-era literary conventions.",
    significance: "The earliest surviving devotional poetry in Tamil, a precursor to the Bhakti movement.",
    tags: ["devotional", "murugan", "vishnu", "vaigai", "ettuttokai", "religious"],
    language: "Classical Tamil",
  },
  {
    id: 10,
    title: "Thirumurugarruppadai",
    titleTamil: "திருமுருகாற்றுப்படை",
    author: "Nakkirar",
    era: "Sangam",
    period: "200 CE – 400 CE",
    genre: "Poetry",
    description:
      "A guide poem in praise of Lord Murugan, one of the Ten Idylls (Pattupattu). It describes the six abodes of Murugan and guides devotees to them. Considered the earliest Tamil devotional poem.",
    significance:
      "The founding text of the Murugan devotional tradition; a masterwork of Sangam-era descriptive poetry.",
    tags: ["murugan", "devotional", "pattupattu", "guide poem", "nakkirar", "temples"],
    language: "Classical Tamil",
  },
  {
    id: 11,
    title: "Maduraikkanji",
    titleTamil: "மதுரைக்காஞ்சி",
    author: "Mankudi Maruthanar",
    era: "Sangam",
    period: "200 CE – 300 CE",
    genre: "Poetry",
    description:
      "One of the longest and finest poems in the Ten Idylls (Pattupattu), describing the city of Madurai and the Pandya king Nedunj Chezhiyan. A vivid portrait of a classical Tamil metropolis.",
    significance: "A remarkably detailed description of Sangam-era Madurai's urban life, economy, and culture.",
    tags: ["madurai", "pandya", "city", "pattupattu", "history", "culture"],
    language: "Classical Tamil",
  },

  // ── POST-SANGAM / EPIC ERA ────────────────────────────────────────────────
  {
    id: 12,
    title: "Tirukkural",
    titleTamil: "திருக்குறள்",
    author: "Thiruvalluvar",
    era: "Post-Sangam",
    period: "100 BCE – 500 CE",
    genre: "Ethics",
    description:
      "A collection of 1,330 kurals (couplets) arranged in 133 chapters dealing with Aram (virtue), Porul (wealth), and Inbam (love). One of the greatest works of world literature, translated into over 80 languages.",
    significance:
      "A universal guide to ethical living, governance, and love; often called the 'Tamil Veda' and the 'Universal Scripture'.",
    tags: ["ethics", "virtue", "governance", "love", "couplets", "thiruvalluvar", "universal", "world literature"],
    language: "Classical Tamil",
  },
  {
    id: 13,
    title: "Silappatikaram",
    titleTamil: "சிலப்பதிகாரம்",
    author: "Ilango Adigal",
    era: "Post-Sangam",
    period: "200 CE – 400 CE",
    genre: "Epic",
    description:
      "The first of the five Tamil epics, telling the story of Kannagi and Kovalan. A sweeping narrative touching on love, betrayal, justice, and the power of chastity. It culminates in the destruction of Madurai.",
    significance:
      "The pinnacle of classical Tamil narrative poetry; a foundational text of Tamil culture, religion, and womanhood.",
    tags: ["epic", "kannagi", "kovalan", "justice", "madurai", "five epics", "chastity", "ilango"],
    language: "Classical Tamil",
  },
  {
    id: 14,
    title: "Manimekalai",
    titleTamil: "மணிமேகலை",
    author: "Sittalai Sattanar",
    era: "Post-Sangam",
    period: "300 CE – 500 CE",
    genre: "Epic",
    description:
      "The companion epic to Silappatikaram, following Manimekalai, daughter of Kovalan and Madhavi. A Buddhist epic exploring themes of renunciation, compassion, and the illusory nature of wealth and pleasure.",
    significance:
      "An invaluable document on Buddhism in ancient Tamil Nadu and an important philosophical epic.",
    tags: ["epic", "buddhism", "manimekalai", "philosophy", "five epics", "sattanar"],
    language: "Classical Tamil",
  },
  {
    id: 15,
    title: "Civaka Cintamani",
    titleTamil: "சீவகசிந்தாமணி",
    author: "Tiruttakkatevar",
    era: "Post-Sangam",
    period: "900 CE – 1000 CE",
    genre: "Epic",
    description:
      "A Jain epic narrating the life of Civakan, a hero of extraordinary beauty, strength, and learning. Considered the first Tamil novel-length narrative poem, renowned for its ornate style.",
    significance:
      "Pioneered a rich ornate style (manippravala) in Tamil literature and established the romance epic genre.",
    tags: ["epic", "jainism", "romance", "five epics", "ornate", "hero"],
    language: "Medieval Tamil",
  },

  // ── BHAKTI / MEDIEVAL ERA ─────────────────────────────────────────────────
  {
    id: 16,
    title: "Thevaram",
    titleTamil: "தேவாரம்",
    author: "Thirugnanasambandar, Appar, Sundarar",
    era: "Bhakti",
    period: "600 CE – 800 CE",
    genre: "Devotional",
    description:
      "The first seven books of the Tirumurai, the sacred canon of Tamil Shaivism. Comprising thousands of hymns in praise of Shiva, composed by the three great Nayanar saints and sung in temples to this day.",
    significance:
      "The cornerstone of Tamil Shaivism; sparked a devotional revolution that transformed religious practice across South Asia.",
    tags: ["shaivism", "shiva", "devotional", "nayanar", "tirumurai", "hymns", "bhakti", "temple"],
    language: "Medieval Tamil",
  },
  {
    id: 17,
    title: "Thiruvasagam",
    titleTamil: "திருவாசகம்",
    author: "Manikkavacakar",
    era: "Bhakti",
    period: "850 CE – 900 CE",
    genre: "Devotional",
    description:
      "A collection of 51 hymns of intense personal devotion to Shiva, forming the eighth book of the Tirumurai. Manikkavacakar's ecstatic mystical poetry is unmatched in its emotional depth.",
    significance:
      "Often described as the highest peak of Tamil devotional literature; 'He who has not been moved by Thiruvasagam has a heart of stone'.",
    tags: ["shaivism", "shiva", "devotional", "manikkavacakar", "tirumurai", "mystical", "bhakti"],
    language: "Medieval Tamil",
  },
  {
    id: 18,
    title: "Nalayira Divya Prabandham",
    titleTamil: "நாலாயிர திவ்யப் பிரபந்தம்",
    author: "12 Alvars",
    era: "Bhakti",
    period: "600 CE – 900 CE",
    genre: "Devotional",
    description:
      "A collection of 4,000 hymns in praise of Vishnu, composed by the twelve Alvar saints. The 'Tamil Veda' of Vaishnavism, compiled by Nathamunigal. It includes Andal's Thiruppavai.",
    significance:
      "The scriptural foundation of Sri Vaishnavism; elevated Tamil to the status of a sacred language equal to Sanskrit.",
    tags: ["vaishnavism", "vishnu", "alvars", "devotional", "andal", "thiruppavai", "bhakti", "4000"],
    language: "Medieval Tamil",
  },
  {
    id: 19,
    title: "Thiruppavai",
    titleTamil: "திருப்பாவை",
    author: "Andal",
    era: "Bhakti",
    period: "700 CE – 800 CE",
    genre: "Devotional",
    description:
      "30 verses composed by Andal, the only female Alvar, describing her mystical union with Vishnu through the Pavai vow. Sung universally during the Tamil month of Margazhi.",
    significance:
      "The most widely recited devotional text in Tamil Vaishnavism; Andal is revered as a goddess herself.",
    tags: ["vaishnavism", "vishnu", "andal", "female poet", "alvars", "margazhi", "30 verses"],
    language: "Medieval Tamil",
  },
  {
    id: 20,
    title: "Periyapuranam",
    titleTamil: "பெரியபுராணம்",
    author: "Sekkizhar",
    era: "Bhakti",
    period: "1100 CE – 1135 CE",
    genre: "Devotional",
    description:
      "The 12th and final book of the Tirumurai, narrating the lives of the 63 Nayanar saints. Written under the Chola king Kulottunga II, it is a monumental hagiographic and literary achievement.",
    significance:
      "The greatest hagiographic work in Tamil literature; a window into medieval Tamil Shaivite society.",
    tags: ["shaivism", "nayanar", "hagiography", "sekkizhar", "chola", "tirumurai", "63 saints"],
    language: "Medieval Tamil",
  },
  {
    id: 21,
    title: "Kamba Ramayanam",
    titleTamil: "கம்ப ராமாயணம்",
    author: "Kambar",
    era: "Medieval",
    period: "1100 CE – 1200 CE",
    genre: "Epic",
    description:
      "A creative Tamil retelling of the Sanskrit Ramayana in 10,000 verses, not a mere translation but a reimagined epic that adapts the story for Tamil cultural and aesthetic sensibilities.",
    significance:
      "Considered the greatest literary achievement of medieval Tamil; Kambar earned the title 'Kavi Chakravarthy' (Emperor of Poets).",
    tags: ["ramayana", "kambar", "epic", "rama", "medieval", "kavi chakravarthy", "10000 verses"],
    language: "Medieval Tamil",
  },
  {
    id: 22,
    title: "Nalavenba",
    titleTamil: "நளவெண்பா",
    author: "Pugazhenthi",
    era: "Medieval",
    period: "1000 CE – 1100 CE",
    genre: "Poetry",
    description:
      "A Tamil retelling of the Nala and Damayanti story from the Mahabharata, written in the venba meter. Known for its poetic virtuosity and mastery of classical Tamil prosody.",
    significance: "A masterclass in the venba meter; showcases the richness of medieval Tamil poetic craft.",
    tags: ["nala", "damayanti", "mahabharata", "venba", "poetry", "meter"],
    language: "Medieval Tamil",
  },

  // ── COLONIAL / TRANSITIONAL ERA ──────────────────────────────────────────
  {
    id: 23,
    title: "Thembavani",
    titleTamil: "தேம்பாவணி",
    author: "Costanzo Giuseppe Beschi (Veeramamunivar)",
    era: "Colonial",
    period: "1726 CE",
    genre: "Epic",
    description:
      "A Tamil epic in 3,615 stanzas narrating the life of St. Joseph, written by an Italian Jesuit priest in impeccable classical Tamil. A unique product of the colonial encounter.",
    significance:
      "Demonstrates the adaptability and richness of Tamil literary forms; a landmark of Tamil-Christian literature.",
    tags: ["christian", "jesuit", "beschi", "epic", "joseph", "colonial", "veeramamunivar"],
    language: "Medieval Tamil",
  },

  // ── MODERN ERA ────────────────────────────────────────────────────────────
  {
    id: 24,
    title: "Panchali Sapatham",
    titleTamil: "பாஞ்சாலி சபதம்",
    author: "Subramania Bharati",
    era: "Modern",
    period: "1912 CE",
    genre: "Poetry",
    description:
      "A dramatic epic poem recounting Draupadi's vow of vengeance after her humiliation at the Kaurava court. Written by Mahakavi Bharathiyar, it blazes with nationalist fervor and feminist rage.",
    significance:
      "A landmark of modern Tamil poetry; transformed classical themes into a vehicle for nationalist and feminist protest.",
    tags: ["bharati", "draupadi", "mahabharata", "nationalism", "feminism", "modern", "epic poem"],
    language: "Modern Tamil",
  },
  {
    id: 25,
    title: "Kannan Pattu",
    titleTamil: "கண்ணன் பாட்டு",
    author: "Subramania Bharati",
    era: "Modern",
    period: "1917 CE",
    genre: "Poetry",
    description:
      "A collection of devotional songs to Krishna, composed in a free and innovative style. Bharati merges personal devotion, divine love, and nationalist themes in a revolutionary modern idiom.",
    significance:
      "Pioneered free verse (puthukkavithai) in Tamil; broke classical metrical constraints to create a new modern Tamil voice.",
    tags: ["bharati", "krishna", "devotional", "free verse", "modern", "innovation", "nationalism"],
    language: "Modern Tamil",
  },
  {
    id: 26,
    title: "Ponniyin Selvan",
    titleTamil: "பொன்னியின் செல்வன்",
    author: "Kalki Krishnamurthy",
    era: "Modern",
    period: "1950 – 1954 CE",
    genre: "Novel",
    description:
      "A monumental historical novel in five parts set in the Chola Empire of the 10th century, following Prince Arulmozhivarman (later Rajaraja Chola I). First serialized in Kalki magazine.",
    significance:
      "The most widely read Tamil novel of all time; revived popular interest in Chola history and culture.",
    tags: ["chola", "historical novel", "kalki", "rajaraja", "arulmozhivarman", "ponni", "bestseller", "serialized"],
    language: "Modern Tamil",
  },
  {
    id: 27,
    title: "Sivakamiyin Sabadham",
    titleTamil: "சிவகாமியின் சபதம்",
    author: "Kalki Krishnamurthy",
    era: "Modern",
    period: "1944 – 1946 CE",
    genre: "Novel",
    description:
      "A historical novel set during the Pallava dynasty of the 7th century, centering on the dancer Sivagami and the sculptor Aayanar. Explores the tension between art, politics, and faith.",
    significance:
      "A beautifully crafted historical romance that illuminated the Pallava period for modern Tamil readers.",
    tags: ["pallava", "historical novel", "kalki", "dancer", "sculptor", "7th century"],
    language: "Modern Tamil",
  },
  {
    id: 28,
    title: "Alai Osai",
    titleTamil: "அலை ஓசை",
    author: "Kalki Krishnamurthy",
    era: "Modern",
    period: "1948 – 1949 CE",
    genre: "Novel",
    description:
      "A social novel set against the backdrop of the Indian independence movement, depicting the struggles of ordinary Tamil people caught in the tide of nationalism.",
    significance:
      "Kalki's most important social novel; a vivid portrait of Tamil society during the freedom struggle.",
    tags: ["social novel", "independence", "nationalism", "kalki", "freedom struggle", "Tamil society"],
    language: "Modern Tamil",
  },
  {
    id: 29,
    title: "Kadavulும் Kandasami Pillaiyum",
    titleTamil: "கடவுளும் கந்தசாமி பிள்ளையும்",
    author: "Pudumaipithan",
    era: "Modern",
    period: "1930s CE",
    genre: "Short Story",
    description:
      "A satirical short story by Pudumaipithan, the master of modern Tamil short fiction, depicting the hypocrisies of religion and society through biting wit.",
    significance:
      "A landmark of Tamil modernist short fiction; Pudumaipithan's sharp social satire was revolutionary.",
    tags: ["short story", "satire", "pudumaipithan", "religion", "society", "modernism", "manikodi"],
    language: "Modern Tamil",
  },
  {
    id: 30,
    title: "Sila Nerangalil Sila Manithargal",
    titleTamil: "சில நேரங்களில் சில மனிதர்கள்",
    author: "Jayakanthan",
    era: "Modern",
    period: "1970 CE",
    genre: "Novel",
    description:
      "A Sahitya Akademi Award-winning novel by Jayakanthan, exploring the lives of marginalized individuals in Chennai with compassion and social conscience.",
    significance:
      "Won the Sahitya Akademi Award; established Jayakanthan as the voice of Tamil social realism.",
    tags: ["social realism", "jayakanthan", "jnanpith", "sahitya akademi", "marginalized", "chennai", "award"],
    language: "Modern Tamil",
  },

  // ── CONTEMPORARY ──────────────────────────────────────────────────────────
  {
    id: 31,
    title: "Naagathamizhan",
    titleTamil: "நாகத்தமிழன்",
    author: "Balakumaran",
    era: "Contemporary",
    period: "1980s – 1990s CE",
    genre: "Novel",
    description:
      "A celebrated Tamil novel by Balakumaran exploring themes of social justice, identity, and the human condition in contemporary Tamil Nadu.",
    significance: "Made Balakumaran one of the most beloved popular novelists of late 20th century Tamil literature.",
    tags: ["contemporary", "balakumaran", "social justice", "identity", "popular fiction"],
    language: "Modern Tamil",
  },
  {
    id: 32,
    title: "Agni Pravesam",
    titleTamil: "அக்னிப் பிரவேசம்",
    author: "Jayakanthan",
    era: "Modern",
    period: "1981 CE",
    genre: "Novel",
    description:
      "Jayakanthan's autobiographical novel exploring his own life journey, political disillusionment, and personal transformation. An introspective masterwork.",
    significance: "Considered Jayakanthan's most personal and artistically mature work.",
    tags: ["autobiography", "jayakanthan", "political", "self-discovery", "introspective"],
    language: "Modern Tamil",
  },
  {
    id: 33,
    title: "Vaadivasal",
    titleTamil: "வாடிவாசல்",
    author: "C. S. Chellappa",
    era: "Modern",
    period: "1958 CE",
    genre: "Novel",
    description:
      "A short but powerful novel capturing the fierce rural sport of Jallikattu and the raw, elemental world of Tamil village life. Written with stunning prose.",
    significance:
      "Widely considered a masterpiece of Tamil prose; a visceral portrayal of rural Tamil identity and valor.",
    tags: ["jallikattu", "rural", "village", "chellappa", "prose", "sport", "identity", "bull taming"],
    language: "Modern Tamil",
  },
  {
    id: 34,
    title: "Oru Puliyamarathin Kathai",
    titleTamil: "ஒரு புளியமரத்தின் கதை",
    author: "Su. Venkatesan",
    era: "Contemporary",
    period: "2008 CE",
    genre: "Novel",
    description:
      "A Sahitya Akademi Award-winning novel spanning 200 years of Tamil history through the story of a tamarind tree and the generations of a village family who live beneath it.",
    significance: "Won the Sahitya Akademi Award 2009; a sweeping family saga connecting history to everyday life.",
    tags: ["sahitya akademi", "su. venkatesan", "contemporary", "family saga", "history", "award", "tamarind tree"],
    language: "Modern Tamil",
  },
  {
    id: 35,
    title: "Koogai",
    titleTamil: "கூகை",
    author: "Devibala",
    era: "Contemporary",
    period: "2015 CE",
    genre: "Novel",
    description:
      "A celebrated contemporary Tamil novel by Devibala, known for its gripping narrative and rich characterization exploring themes of family, tradition, and change in modern Tamil Nadu.",
    significance: "Hugely popular in contemporary Tamil fiction; introduced a new generation to Tamil literary novels.",
    tags: ["contemporary", "devibala", "family", "tradition", "popular", "modern Tamil Nadu"],
    language: "Modern Tamil",
  },
] as const;
