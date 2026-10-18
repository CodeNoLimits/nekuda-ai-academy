# PREUVES — version Claude v2 (mesures du 18/10/2026)

Note de contrôle pour David. La page publique est en hébreu (RTL, langue par défaut) avec un bouton EN. Il n'y a pas de page française publique.

## Ce qui a changé en v2 (après ton retour « pas la bonne vidéo, c'est confus »)

- **Film principal** : c'est maintenant le film de 57 s que Gemini a poussé dans le commit `10c56bd` (« David's 8 Veo 3 videos from Desktop/NEKUDA IL COURSE »), avec tes vrais plans et les sous-titres HE/EN. Il est copié dans `video/film.mp4`, donc la page ne dépend plus du site Gemini. La v1 lisait encore l'ancien film composite.
- **Les chapitres sont les séances.** Le film est coupé à 0, 8, 16, 24, 34, 44 et 54 s (coupures mesurées sur le fichier). Le chapitre 2 correspond à la séance 1, et ainsi de suite jusqu'au chapitre 6 pour la séance 5. Chaque étape du programme a un bouton « צפו בפרק בסרט » qui lance le film au bon moment.
- **Structure orientée conversion** : promesse + film, puis l'offre en un coup d'œil (quoi, pour qui, où, combien de temps, outils, accompagnement, prix), puis les 5 séances, la preuve milamila, l'accompagnement, le prix, David, la FAQ et le CTA final.
- **Retirés parce qu'ils brouillaient le message** : la sphère 3D, le spot /brag, le carrousel produits et les flip cards. On peut les remettre si tu veux.
- La version verticale du film n'est pas utilisée : c'est encore l'ancien montage (coffret noir et or).

## v5.1 (demande de David, 18/10)

- **Prix clarifié** : « 1,849 ₪ למפגש, לקבוצה של עד 6 משתתפות » sous le prix, avec le calcul « כשאתן 6, כ-308 ₪ למשתתפת למפגש » (1849 / 6 = 308,17). Ajouté aussi : la taille de groupe dans « l'offre en un coup d'œil », une question FAQ, le syllabus et le JSON-LD. Cela remplace l'ancienne règle « aucune taille de groupe », à la demande explicite de David.
- **4ᵉ clip** `6020660f` (blazer, l'hébreu le plus propre) placé au CTA final, dans un cadre de téléphone, avec sous-titres HE/EN. C'est la promesse répétée en clôture, comme en ouverture.
- QA 1440 et 390, HE et EN : 0 scroll horizontal, 0 erreur, 9 vidéos dont 4 sous-titrées, aucun prix avant la section ההשקעה.

## v5 : les 5 nouveaux clips de David (18/10, 15h30)

Transcription faite avec ElevenLabs Scribe sur ton compte (environ 0,12 $, 319 crédits), puisque Whisper est inaccessible depuis le cloud. Les 5 pistes audio ont été concaténées en un seul fichier pour ne lancer qu'une transcription.

| Clip | Format | Ce que David dit | Décision |
|---|---|---|---|
| `a06d7334` Kotel + coffret « נקודה למחשבה » | 16:9 | « שלום מיכל, ג'מה and friends in Bat Yam. I'm David from Jerusalem… I built an AI empire » | **Section David** (`video/kotel.mp4`) |
| `99bc5e19` gare centrale + tableau | 16:9 | « In session two, we dive into advanced Google Flow with zero code… first four viral reels » | **Carte Séance 2** (`video/s2.mp4`) |
| `6b903a09` blazer multi-angles | 9:16 | « אחרי ההכשרה הזו של DreamNova תוכלו לעשות הכל… And the sky, And the sky is the limit » | **Hero**, dans un cadre de téléphone (`video/hero.mp4`). Le plan du bégaiement (7,42–8,50 s, une coupure de plan nette) a été retiré : durée 8,92 s |
| `6020660f` blazer | 9:16 | même promesse, en hébreu propre | non utilisé, pour ne pas répéter le message du hero |
| `4c256d93` blazer | 9:16 | même promesse, avec « נוכל » au lieu de « תוכלו » et un « בהחלט » parasite à la fin | non utilisé (sa dernière frame sert de poster au hero : sourire bouche fermée, même tenue) |

- **Sous-titres** WebVTT HE et EN pour les 3 clips (`video/cc/`), écrits à partir de la transcription minutée. Ils suivent la langue de la page, y compris au changement en direct (testé).
- **Posters** sur des frames souriantes bouche fermée : Kotel @9.52 s, gare @9.95 s, hero = fin du clip `4c256d93` @9.50 s.
- **Lighthouse mobile** : 93 / 100 / 100 / 100. QA 1440 et 390, HE et EN : 0 scroll horizontal, 0 erreur, 0 image cassée.

## v4 (retours mobile de David, 18/10 après-midi)

- **Bug corrigé** : les vignettes de chapitres s'étiraient en hauteur sur mobile, à cause des attributs `width`/`height` sans `height:auto`. Le film est maintenant en pleine largeur, avec une barre de chapitres segmentée (cliquable, qui se remplit pendant la lecture) et un carrousel de vignettes 16:9 qui défile au doigt sur mobile.
- **Images HD, sourire bouche fermée** : toutes les vignettes, posters, paires « réel → IA », la photo « David » et la vignette WhatsApp viennent des clips bruts (sans sous-titres). Les frames ont été choisies en mesurant la bouche image par image (OpenCV) puis vérifiées à l'œil. Elles sont pour la plupart en fin de plan, quand Veo termine sur un sourire. Vignettes du carrousel en 640×360, posters en 1280×720 WebP.
- **Chaque séance a sa vidéo** (s1–s5, les plans sous-titrés du film) avec une **animation en haut de la vidéo** : numéro de séance, promesse, puis mots-clés qui apparaissent un par un. Elle se déclenche quand la carte entre à l'écran et se replie en simple titre pendant la lecture. Elle est faite en HTML/CSS plutôt qu'avec Remotion, ce qui la garde nette, bilingue HE/EN et sans poids vidéo supplémentaire.
- **Effet « wow » discret** : des points de lumière dorés (la נקודה) dérivent en fond et forment une constellation autour du doigt ou de la souris. Ils démarrent après le chargement, à 30 i/s, et s'arrêtent avec `prefers-reduced-motion`. S'y ajoutent un reflet doré sur les mots clés du titre et un éclat périodique sur les boutons dorés.
- **Vignette WhatsApp** `og.jpg` (1200×630, 85 Ko) : en hébreu, sans prix. `og:description` hébreu sans prix, `og:locale he_IL`.
- **Prix en fin de page** : aucun 1,849 avant la section « ההשקעה » (vérifié automatiquement). La barre mobile affiche « עצמאות ב-AI + 10 רילס » au lieu du prix.
- **Livrables** : d'abord l'autonomie complète avec les outils IA (« דויד מחזיק לכן את היד בהתחלה »), puis 10 Reels, puis un site neuf ou amélioré avec une stratégie de pub 2.0.
- **Accompagnement inclus vs Grow ×10** : comparatif côte à côte. Grow ×10 = les stratégies Terminator de David (agence 2016–2020, avant l'empire Airbnb à Jérusalem, puis de 2023 à aujourd'hui), badge « לטרמינייטוריות של הביזנס », prix séparé décidé ensemble.
- **Retirés** : la vidéo verticale, `film.jpg`, les anciennes annexes. Le selfie à la plage n'est pas utilisé : une autre personne est sur la photo et sa qualité ne tient pas à côté des plans Veo.
- **QA** : 1440 et 390, HE et EN, 0 scroll horizontal, 0 erreur, 0 image cassée, 7 chapitres, 5 animations de séance déclenchées. **Lighthouse mobile** : landing 95 / 100 / 100 / 100 (TBT 0 ms, CLS 0), syllabus 100 / 100 / 100 / 100.

## v3 (publication)

- **URL publique** : https://codenolimits.github.io/nekuda-academy/ (dossier `nekuda-academy/` du repo `CodeNoLimits/CodeNoLimits.github.io`, seulement les fichiers du site, sans ces notes internes).
- **Nom** : דויד (צלחיה) אמור / David (Tselahya) Amor partout. 0 « דוד » restant, 0 « עמור ».
- **Valeur** (validée par David le 18/10) : un cours de ce niveau en académie vaut environ 15 000 ₪ par participante, et plus de 25 000 ₪ avec un coach privé et un accompagnement jusqu'au succès et à l'autonomie. L'accompagnement jusqu'à l'autonomie est inclus. Le plan **Grow** (viralité, scale ×5, ×10 et au-delà) est optionnel ; son plan et son prix se décident ensemble.
- **Signature** : « DreamNova · the sky is the limit. » et `DreamNova.studio` en bas de page, en texte. Je n'ai pas mis de lien parce que le domaine n'est pas joignable depuis le cloud pour vérifier qu'il répond.
- **Lighthouse mobile** (Google Fonts bloqué pour simuler un CDN rapide) : landing 99 / 100 / 100 / 100 (perf / a11y / bonnes pratiques / SEO), LCP 2,0 s, TBT 0 ms, CLS 0. Syllabus 100 / 100 / 100 / 100. Les seuls avertissements restants concernent la compression et le cache du serveur de test, que GitHub Pages gère lui-même.
- **Images** passées en WebP (miniatures 160 px pour les vignettes produits), lazy-loading sous la ligne de flottaison. Médias inutilisés supprimés.

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
