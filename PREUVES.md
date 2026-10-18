# PREUVES — version Claude (mesures du 18/10/2026)

Note de contrôle pour David. La page publique est en hébreu (RTL, langue par défaut) avec un bouton EN. Il n'y a pas de page française publique.

## Lecture du prix (à corriger ici si besoin)

- **Ateliers : 1,849 ₪ par séance**, 5 séances de 2h30 à 3h, dans l'imprimerie à Bat Yam.
- **Accompagnement privé 1-on-1 après le cours : bloc séparé, « non inclus dans le prix des ateliers ».** La page n'affiche **aucun prix** pour ce bloc : elle dit que le plan et le tarif se décident ensemble, en direct. Si tu veux afficher « 1,849 ₪ par séance privée », il suffit de modifier une seule ligne de `index.html` (section `#price`, carte de droite).
- Aucune date. Aucune « conférence ». Aucune taille de groupe. Shekel seul.
- Prix des produits milamila : **non affichés**. Le brief de David (109/128/99 ₪) et la liste lue par Grok (45/140/170 ₪) se contredisent, et la boutique est injoignable depuis le cloud. On n'affiche donc rien plutôt qu'un prix faux.

## Comptes dans les fichiers

| Contrôle | `index.html` | `cours/index.html` |
|---|---|---|
| « 1,849 » | 4 (meta description, stats, carte prix, barre mobile) | 2 (HE + EN) |
| conférence / conference / כנס / הרצאה | 0 | 0 |
| « 6 femmes / 6 משתתפות / six women » | 0 | 0 |
| `nekudap` | 0 | 0 |
| numéro WhatsApp | uniquement `972584921492` (celui de David) | idem |

## Vidéos hébergées ici (faststart vérifié octet par octet)

| Fichier | Octets | Durée | Image | Atomes en tête |
|---|---|---|---|---|
| `video/annex_01.mp4` | 3,190,831 | 7.98 s | 1920×1080 | ftyp@0 → moov@32 |
| `video/annex_02.mp4` | 2,581,113 | 8.00 s | 1280×720 | ftyp@0 → moov@32 |
| `video/annex_03.mp4` | 2,073,771 | 8.00 s | 1280×720 | ftyp@0 → moov@32 |
| `video/annex_04.mp4` | 2,188,473 | 11.05 s | 1280×720 | ftyp@0 → moov@32 |
| `video/session_03_train.mp4` | 3,719,388 | 10.01 s | 1280×720 | ftyp@0 → moov@32 |
| `video/session_04_batyam.mp4` | 4,144,808 | 10.01 s | 1280×720 | ftyp@0 → moov@32 |
| `video/session_05_moon.mp4` | 4,431,266 | 10.01 s | 1280×720 | ftyp@0 → moov@32 |

## Vidéos lues à distance (repo Gemini, commit `93f432b`, non copiées)

Vérifié sur les fichiers de ce commit : `final_nekuda_trailer.mp4` (moov@32), `seq_01.mp4` (moov@32), `seq_07.mp4` (moov@32), `brag.mp4` (moov@32). Si Gemini renomme ou supprime ces fichiers sur son `main`, le lecteur principal de cette page cassera.

## Navigateur (Playwright, Chromium headless, 1440×900 et 390×844, HE et EN)

- `scrollWidth == clientWidth` : 1440/1440 et 390/390 sur les 4 combinaisons, et 390/390 sur le syllabus.
- Erreurs JS : 0 sur les deux pages.
- Sections invisibles après 700 ms : 0 (le reveal force tout à l'écran après 400 ms).
- Tous les liens WhatsApp portent le texte pré-rempli dans la bonne langue.
- Flip card au tap (mobile) : OK.
- Machine YouTube (`localStorage` clé `nekuda-machine-v1`) : alpha 1000/100 contre beta 500/10 donne le gagnant « beta · 50.00 ». Avec gamma à 0 abonné, la page affiche un message au lieu d'une division par zéro. Les valeurs sont toujours là après rechargement.
- **Lecture vidéo non prouvée dans ce navigateur** : le Chromium open-source du cloud ne contient pas de décodeur H.264 (`canPlayType` renvoie une chaîne vide). La preuve disponible ici est structurelle : moov en tête, H.264/AAC. À vérifier sur un vrai téléphone une fois la page en ligne.

## Bande-son

Non transcrite : Whisper est inutilisable depuis le cloud (téléchargement des modèles bloqué par le réseau). La page ne prétend nulle part que l'audio est en hébreu. Débit mesuré : voir `PROMPTS.md`.
