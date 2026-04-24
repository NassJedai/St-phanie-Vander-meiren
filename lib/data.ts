/* ─────────────────────────────────────────────
   IMAGES — Cloudinary CDN
   ───────────────────────────────────────────── */
export const images = {
  // Stéphanie
  stephaniePortrait: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019732/Photo_ste%CC%81phanie_ubap1h.jpg",
  atelierSculpture1: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019737/Ste%CC%81phanie_entrain_de_re%CC%81aliser_une_sculture_c4d4rk.jpg",
  atelierSculpture2: "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019738/Ste%CC%81phanie_entrain_de_re%CC%81aliser_une_sculture_2_jzduwh.jpg",

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

  // Livres
  livreRocaillou:    "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019729/livre_rocaillou_skdxg7.jpg",
  livrePetiteVie:    "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019724/Livre_petite-vie-deviendra-grande_cn8sfx.jpg",
  livreBinche:       "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019730/livre_Un-Carnaval-De-Binche-Pas-Comme-Les-Autres_m1omzn.jpg",
  livreBelgica:      "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019730/livre_belgica_a9ycyj.jpg",
  livreCarnaval:     "https://res.cloudinary.com/dksg8jr17/image/upload/v1777019729/livre_carnaval_fwlmfe.jpg",
} as const;


/* ─────────────────────────────────────────────
   PUPPETS — sticky scroll storytelling
   ───────────────────────────────────────────── */
export type Puppet = {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  quote: string;
  color: string;
  imagePortrait: string;
  imageAction: string;
  emoji: string;
};

export const puppets: Puppet[] = [
  {
    id: "oscar",
    name: "Oscar",
    title: "La Partie de cartes",
    subtitle: "sous les étoiles",
    quote:
      "Quand Oscar pointe de sa canne les moments intenses de sa vie bien chargée. Quand ses valises s'ouvrent sur ses malices d'antan, les échanges entre bons copains ressurgissent pour le plus grand bonheur de cet As au grand cœur.",
    color: "#789a7d",
    imagePortrait: images.luneux1,
    imageAction: images.luneux2,
    emoji: "☽",
  },
  {
    id: "mia",
    name: "Mia",
    title: "Le Jardin",
    subtitle: "lunatique",
    quote:
      "Quand Mia jardine avec la Lune, ses premiers semis de souvenirs sortent de terre, les carottes chantent et l'arrosoir se dandine. La Lune lui rappelle que ses précieux printemps ne sont pas fanés.",
    color: "#b59b6a",
    imagePortrait: images.luneux3,
    imageAction: images.luneux4,
    emoji: "✿",
  },
  {
    id: "amedee",
    name: "Amédée",
    title: "La Lune",
    subtitle: "à facettes",
    quote:
      "Quand Amédée fait danser ses pensées, il entend les premières notes d'un morceau disco… Quand la Lune se prend pour une boule à facettes, la nostalgie de ce Vieux Luneux se déhanche sur les rythmes de sa jeunesse.",
    color: "#d4a84c",
    imagePortrait: images.luneux5,
    imageAction: images.luneux6,
    emoji: "✦",
  },
];


/* ─────────────────────────────────────────────
   GALLERY — marquee infinite scroll
   ───────────────────────────────────────────── */
export const gallery: { src: string; label: string }[] = [
  { src: images.luneux7,    label: "Les Vieux Luneux" },
  { src: images.luneuxGroup,label: "La compagnie" },
  { src: images.agnes2,     label: "Agnès" },
  { src: images.luneux8,    label: "En spectacle" },
  { src: images.agnes3,     label: "Marionnette Agnès" },
  { src: images.masque,     label: "Masque réalisé" },
  { src: images.luneux9,    label: "Vieux Luneux en scène" },
  { src: images.agnesMini,  label: "Mini marionnette Agnès" },
  { src: images.dessin,     label: "Dessin original" },
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
