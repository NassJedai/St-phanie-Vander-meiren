/* ─────────────────────────────────────────────
   IMAGES — Cloudinary CDN
   ───────────────────────────────────────────── */
export const images = {
  // Stéphanie
  stephaniePortrait:     "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019732/Photo_ste%CC%81phanie_ubap1h.jpg",
  stephanie2:            "https://res.cloudinary.com/dksg8jr17/image/upload/v1777042334/Ste%CC%81phanie_2_rmfzpz.jpg",
  stephanieVanderMeiren: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777042335/Ste%CC%81phanie_vander_meiren_hujcpr.jpg",
  atelierSculpture1:     "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019737/Ste%CC%81phanie_entrain_de_re%CC%81aliser_une_sculture_c4d4rk.jpg",
  atelierSculpture2:     "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019738/Ste%CC%81phanie_entrain_de_re%CC%81aliser_une_sculture_2_jzduwh.jpg",

  // Vieux Luneux
  luneuxGroup: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019729/Marionnette_les_vieux_luneux_r3l0cl.jpg",
  luneux1: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019734/Marionette_les_vieux_luneux_1_gkfqhi.jpg",
  luneux2: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019731/Marionette_les_vieux_luneux_2_ujhkt5.jpg",
  luneux3: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019735/Marionette_les_vieux_luneux_3_shodd9.jpg",
  luneux4: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019736/Marionette_les_vieux_luneux_4_enk5xh.jpg",
  luneux5: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019735/Marionette_les_vieux_luneux_5_sxxf8d.jpg",
  luneux6: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019738/Marionette_les_vieux_luneux_6_jsxykg.jpg",
  luneux7: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019727/Marionette_les_vieux_luneux_7_xvwrvv.jpg",
  luneux8: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019723/Marionette_les_vieux_luneux_8_bv5bx6.jpg",
  luneux9: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019724/Marionette_les_vieux_luneux_9_tzfatz.jpg",

  // Agnès
  agnesMini: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777020012/mini_marionnette_agnes_zclt4i.jpg",
  agnes2: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777020011/marionnette_agnes2_qfnv54.jpg",
  agnes3: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777020009/marionnette_agnes3_khx1ks.jpg",

  // Autres créations
  masque: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019735/Masque_re%CC%81alise%CC%81_eth7ss.jpg",
  dessin: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019730/Dessin_re%CC%81alise%CC%81_dn0avh.jpg",

  // Fonds & textures
  papierPeint1:  "https://res.cloudinary.com/dksg8jr17/image/upload/v1777024933/papier_peint1_k1nyqz.jpg",
  dessinLesVieux:"https://res.cloudinary.com/dksg8jr17/image/upload/v1777042340/dessin_les_vieux_kgvdg6.jpg",

  // Livres
  livreRocaillou:    "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019729/livre_rocaillou_skdxg7.jpg",
  livrePetiteVie:    "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019724/Livre_petite-vie-deviendra-grande_cn8sfx.jpg",
  livreBinche:       "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019730/livre_Un-Carnaval-De-Binche-Pas-Comme-Les-Autres_m1omzn.jpg",
  livreBelgica:      "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019730/livre_belgica_a9ycyj.jpg",
  livreCarnaval:     "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019729/livre_carnaval_fwlmfe.jpg",
} as const;


/* ─────────────────────────────────────────────
   MARIONNETTES — 3 blocs thématiques
   ───────────────────────────────────────────── */
export type Puppet = {
  id: string;
  emoji?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  outro?: string[];
  color: string;
  imagePortrait: string;
  imageAction: string;
};

export const puppets: Puppet[] = [
  {
    id: "vieux-luneux",
    emoji: "🌙",
    title: "Les Vieux Luneux",
    paragraphs: [
      "Nés dans le cadre de l'opéra urbain Décrocher la Lune à La Louvière, les Vieux Luneux incarnent la mémoire vivante des quartiers et des habitants.",
      "Créés en 2018 pour la 7ᵉ édition du spectacle, ces sept personnages sont des marionnettes à taille humaine représentant des figures âgées, inspirées de l'histoire et des récits locaux. Chacun d'eux porte l'âme d'un quartier, comme un témoin sensible du passé et des vies qui l'ont façonné.",
      "Pensés comme des « sages de nos quartiers », ils déambulent dans l'espace public, dansent, interpellent et émeuvent sans prononcer un mot, laissant place à une narration universelle faite de gestes, de regards et de souvenirs.",
    ],
    color: "#789a7d",
    imagePortrait: images.luneuxGroup,
    imageAction: images.luneux1,
  },
  {
    id: "sculpture-marionnette",
    title: "Sculpture & Marionnette",
    paragraphs: [
      "Entre matière et mouvement, Stéphanie Vander Meiren développe un travail sculptural où les formes prennent vie.",
      "Ses créations mêlent volumes, textures et textiles pour donner naissance à des personnages singuliers, à la frontière entre objet et présence vivante. Chaque marionnette est pensée comme une figure narrative, porteuse d'émotions, d'histoires et de gestes.",
      "Modeler, assembler, habiller : le processus de création est profondément artisanal. Il laisse place à l'expérimentation, au détournement de matériaux et à une attention particulière portée aux détails, aux expressions et à la corporalité.",
    ],
    color: "#b59b6a",
    imagePortrait: images.stephanieVanderMeiren,
    imageAction: images.masque,
  },
  {
    id: "personnages-incarner",
    title: "Des personnages à incarner",
    paragraphs: [
      "Plus que de simples objets, ses marionnettes sont conçues pour être activées, manipulées, mises en scène. Elles trouvent leur place dans :",
    ],
    bullets: [
      "des spectacles et projets scénographiques",
      "des performances et déambulations",
      "des ateliers participatifs",
      "des projets pédagogiques",
    ],
    outro: [
      "À travers le mouvement, elles deviennent un langage à part entière, universel et accessible, où le corps remplace la parole.",
    ],
    color: "#d4a84c",
    imagePortrait: images.luneux8,
    imageAction: images.agnes2,
  },
];


/* ─────────────────────────────────────────────
   GALLERY — marquee infinite scroll
   ───────────────────────────────────────────── */
export const gallery: { src: string; label: string }[] = [
  { src: images.luneux7,    label: "Les Vieux Luneux" },
  { src: images.luneux2,    label: "Portrait" },
  { src: images.agnes2,     label: "Agnès" },
  { src: images.luneux3,    label: "En spectacle" },
  { src: images.agnes3,     label: "Marionnette Agnès" },
  { src: images.masque,     label: "Masque réalisé" },
  { src: images.luneux9,    label: "Vieux Luneux en scène" },
  { src: images.agnesMini,  label: "Mini marionnette Agnès" },
  { src: images.luneux4,    label: "Détail" },
];


/* ─────────────────────────────────────────────
   SPECTACLES
   ───────────────────────────────────────────── */
export type Spectacle = {
  title: string;
  type: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const spectacles: Spectacle[] = [
  {
    title: "Les Vieux Luneux",
    type: "Théâtre · Marionnettes",
    description:
      "Un spectacle intime où chaque personnage ouvre sa valise et laisse déborder une vie entière de souvenirs, de rires et de mélancolie douce.",
    image: images.luneuxGroup,
  },
  {
    title: "Sous la Lune",
    type: "Grand spectacle · Nuit",
    description:
      "Sous une lune géante, confettis et lumières, les Vieux Luneux dansent et invitent tout le public à lever les yeux vers les étoiles.",
    image: images.luneux8,
    featured: true,
  },
  {
    title: "En balade avec Oscar",
    type: "Arts de la rue",
    description:
      "Oscar et ses complices s'invitent dans les marchés, les places et les festivals — rencontres inattendues, poésie partagée.",
    image: images.luneux9,
  },
];


/* ─────────────────────────────────────────────
   LIVRES
   ───────────────────────────────────────────── */
export type Livre = {
  title: string;
  year: number;
  cover: string;
};

export const livres: Livre[] = [
  { title: "Rocaillou",                                  year: 2006, cover: images.livreRocaillou },
  { title: "Petite vie deviendra grande",                year: 2008, cover: images.livrePetiteVie },
  { title: "Un carnaval de Binche pas comme les autres", year: 2013, cover: images.livreBinche },
  { title: "Belgica, une aventure en Antarctique",       year: 2018, cover: images.livreBelgica },
  { title: "Mais où est passé Carnaval ?",               year: 2020, cover: images.livreCarnaval },
];


/* ─────────────────────────────────────────────
   ATELIERS
   ───────────────────────────────────────────── */
export const ateliers = [
  "Initiation à la sculpture et au modelage",
  "Création de marionnettes",
  "Illustration et narration visuelle",
  "Arts plastiques jeune public",
  "Médiation culturelle en milieu scolaire",
];
