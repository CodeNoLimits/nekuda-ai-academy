# PREUVES — version Claude v2 (mesures du 18/10/2026)

Note de contrôle pour David. La page publique est en hébreu (RTL, langue par défaut) avec un bouton EN. Il n'y a pas de page française publique.

## Ce qui a changé en v2 (après ton retour « pas la bonne vidéo, c'est confus »)

- **Film principal** : c'est maintenant le film de 57 s que Gemini a poussé dans le commit `10c56bd` (« David's 8 Veo 3 videos from Desktop/NEKUDA IL COURSE »), avec tes vrais plans et les sous-titres HE/EN. Il est copié dans `video/film.mp4`, donc la page ne dépend plus du site Gemini. La v1 lisait encore l'ancien film composite.
- **Les chapitres sont les séances.** Le film est coupé à 0, 8, 16, 24, 34, 44 et 54 s (coupures mesurées sur le fichier). Le chapitre 2 correspond à la séance 1, et ainsi de suite jusqu'au chapitre 6 pour la séance 5. Chaque étape du programme a un bouton « צפו בפרק בסרט » qui lance le film au bon moment.
- **Structure orientée conversion** : promesse + film, puis l'offre en un coup d'œil (quoi, pour qui, où, combien de temps, outils, accompagnement, prix), puis les 5 séances, la preuve milamila, l'accompagnement, le prix, David, la FAQ et le CTA final.
- **Retirés parce qu'ils brouillaient le message** : la sphère 3D, le spot /brag, le carrousel produits et les flip cards. On peut les remettre si tu veux.
- La version verticale du film n'est pas utilisée : c'est encore l'ancien montage (coffret noir et or).

## v2.1 : ce que j'ai repris de la discussion Gemini 4 / Antigravity

Le lien de la session Antigravity n'est pas lisible depuis le cloud (le proxy refuse `antigravity.google.com`, il faut ton compte Google, et la session était hors ligne). Le contexte a été lu dans la page que Gemini a publiée (`index.html` du commit `10c56bd`).

- **Repris** : ta citation à la première personne (« התחלתי מאפס… »), un cas d'usage concret par produit (bougie → 3 Reels 9:16, cartes → « הקלף היומי » 48 jours, Birkat Hashem → aperçu du verset + PDF, coffrets cadeaux → prospection d'organisations, d'écoles et de comités d'entreprise avec devis PDF), le bloc avant/après, la pratique uniquement sur leurs propres produits, et le respect des textes sacrés.
- **Non repris** : « מפגש ועידה » / séance conférence (9 occurrences chez Gemini, alors que ta phrase s'arrêtait sur ce mot), « accompagnement inclus dans le parcours » (cela change le prix), le chiffre « 15 000 à 25 000 ₪ en agence » (non vérifiable), et l'envoi automatique de posts (tout passe par une validation humaine).

## Lecture du prix (à corriger ici si besoin)

- **Ateliers : 1,849 ₪ par séance**, 5 séances de 2h30 à 3h, dans l'imprimerie à Bat Yam.
- **Accompagnement 1-on-1 après le cours : bloc séparé, « non inclus dans le prix de la sadna ».** Aucun prix n'est affiché pour ce bloc : la page dit que le plan et le prix se décident ensemble. Pour afficher 1,849 ₪ par séance privée, il suffit de changer une phrase dans la section `#support`.
- Aucune date, aucune « conférence », aucune taille de groupe. Une seule devise, le shekel. Les prix des produits milamila ne sont pas affichés.

## Comptes dans les fichiers

| Contrôle | `index.html` | `cours/index.html` |
|---|---|---|
| « 1,849 » | 5 (meta, faits du hero, offre, carte prix, barre mobile) | 2 (HE + EN) |
| conférence / conference / כנס / הרצאה | 0 | 0 |
| « 6 femmes / 6 משתתפות / six women » | 0 | 0 |
| `nekudap` | 0 | 0 |
| numéro WhatsApp | uniquement `972584921492` (David) | idem |

## Vidéos (faststart vérifié octet par octet)

| Fichier | Octets | Durée | Image | Atomes en tête |
|---|---|---|---|---|
| `video/film.mp4` | 9,631,971 | 57.03 s | 1280×720 | ftyp@0 → moov@32 |
| `video/annex_01.mp4` | 3,190,831 | 7.98 s | 1920×1080 | ftyp@0 → moov@32 |
| `video/annex_02.mp4` | 2,581,113 | 8.00 s | 1280×720 | ftyp@0 → moov@32 |
| `video/annex_03.mp4` | 2,073,771 | 8.00 s | 1280×720 | ftyp@0 → moov@32 |

Serveur de test avec Range (comme GitHub Pages) : `Range: bytes=0-47` sur `film.mp4` → `206`, `Content-Range: bytes 0-47/9631971`.

## Navigateur (Playwright, Chromium headless)

- Landing 1440×900 et 390×844, en HE et en EN : `scrollWidth == clientWidth` sur les 4 combinaisons, 0 erreur JS, 0 image cassée, 7 chapitres affichés, tous les liens WhatsApp ont le texte pré-rempli.
- **Chapitres** (testés sur une copie VP9 temporaire, car le Chromium du cloud ne décode pas le H.264) : un clic sur le chapitre 4 amène le film à t = 25.37 s en lecture, avec le chapitre 4 surligné. Le bouton de l'étape 5 (seek 44) donne t = 45.43 s, chapitre 6 surligné, et fait défiler la page jusqu'au film.
- **Syllabus** 390 et 1440 : pas de scroll horizontal, 11 prompts, 0 erreur. La machine YouTube (clé `nekuda-machine-v1`) donne le gagnant « beta · 50.00 » sur 1000/100 contre 500/10. Avec 0 abonné, un message s'affiche au lieu d'une division par zéro. Les valeurs sont toujours là après rechargement.
- **À vérifier sur un vrai téléphone** : la lecture du H.264 lui-même.

## Bande-son

Non transcrite : Whisper est inutilisable depuis le cloud, car le téléchargement des modèles est bloqué. Débit mesuré : voir `PROMPTS.md`.
