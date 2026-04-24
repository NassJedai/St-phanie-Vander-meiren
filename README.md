# Stéphanie Vander Meiren — Site portfolio

Site web de Stéphanie Vander Meiren, artiste belge pluridisciplinaire (marionnettes, illustration jeunesse, scénographie, ateliers). Compagnie des Vieux Luneux.

Construit avec **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** et **Framer Motion**. Design d'inspiration Apple : typographie massive, scroll storytelling, animations soyeuses.

## Démarrage local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Ajout des photos

Toutes les photos vont dans `public/images/`. Les noms attendus sont listés dans `public/images/.gitkeep`.

Tant qu'une photo n'est pas ajoutée, le site affiche automatiquement un placeholder dégradé avec sa légende (rien n'est cassé).

Formats recommandés : `.jpg` ou `.webp`, ratios respectés selon la section :
- Portraits marionnettes : 3/4
- Spectacles : 16/10 ou 4/3
- Galerie défilante : 3/4

## Déploiement sur Vercel

### Option 1 — via le dashboard Vercel
1. Pousser ce dossier sur un repo Git (GitHub, GitLab, Bitbucket).
2. Sur [vercel.com/new](https://vercel.com/new), importer le repo.
3. Vercel détecte automatiquement Next.js, aucun réglage requis.
4. Cliquer sur **Deploy**.

### Option 2 — via la CLI Vercel
```bash
npm i -g vercel
vercel       # déploiement preview
vercel --prod # déploiement production
```

## Structure

```
app/
  layout.tsx        # racine, fonts (Inter + Fraunces + JetBrains Mono)
  page.tsx          # assemblage des sections
  globals.css       # base Tailwind + utilitaires (stars, glass, marquee)
components/
  Nav.tsx           # nav glassmorphism sticky + menu mobile
  Hero.tsx          # full viewport, lune animée, parallax
  About.tsx         # éditorial portrait + stats Apple-style
  Marionnettes.tsx  # sticky scroll storytelling (Oscar/Mia/Amédée)
  Spectacles.tsx    # grille asymétrique
  Livres.tsx        # carrousel/grille de couvertures
  Ateliers.tsx      # transmission + CTA
  Contact.tsx       # form premium
  Footer.tsx
  PlaceholderImage.tsx  # smart image avec fallback dégradé
lib/
  data.ts           # contenus structurés (puppets, spectacles, livres)
public/
  images/           # photos à ajouter
```

## Connecter le formulaire de contact

Le formulaire `Contact.tsx` simule un envoi côté client. Pour le rendre fonctionnel :

- **Resend / SendGrid** : créer une route `app/api/contact/route.ts` et envoyer le mail côté serveur.
- **Formspree / Getform / Web3Forms** : changer `onSubmit` pour POSTer sur l'endpoint du service.
- **EmailJS** : importer le SDK et appeler `emailjs.sendForm`.

## Personnalisation

- Couleurs : `tailwind.config.ts` — palette `ink`, `cream`, `moon`, `sage`, `terra`, `sand`.
- Contenus : `lib/data.ts` — modifier titres, textes, années, ordre.
- Métadonnées SEO : `app/layout.tsx` — `metadata` (title, description, OG).
