# HANDOVER — Nekuda AI Academy × DreamNova (version Claude)

> Format inter-IA strict. À lire en entier avant de toucher au site.
> Dernière mise à jour : 18/10/2026 · v6 en ligne.

## 1. ÉTAT

| Clé | Valeur |
|---|---|
| Statut | **v6 EN LIGNE**, prête à envoyer |
| Lien public | https://codenolimits.github.io/nekuda-academy/ |
| Lien à partager (WhatsApp) | https://codenolimits.github.io/nekuda-academy/?v=7 (`?v=` force WhatsApp à recharger la vignette ; incrémenter à chaque nouvel envoi) |
| Lien anglais | https://codenolimits.github.io/nekuda-academy/?lang=en |
| Syllabus | https://codenolimits.github.io/nekuda-academy/cours/ |
| Déploiement | Pages run 39130582115 (commit `1cfa317`) : **success** |
| QA v6 | 1440 px + 390 px, HE + EN : 0 scroll horizontal, 0 erreur console, prix seulement dans `#price` · Lighthouse mobile **93 / 100 / 100 / 100** |
| Envoyé à Michal ? | **NON**. C'est David qui envoie le lien. Aucune IA n'envoie quoi que ce soit à Michal. |

## 2. OÙ EST QUOI

| Rôle | Repo / branche | Chemin local (session cloud) |
|---|---|---|
| **Source** (avec docs) | `CodeNoLimits/nekuda-ai-academy` → branche orpheline `claude/nekuda-michal-claude` (pas de PR, aucun historique commun avec `main`) | `/home/user/nekuda-michal-claude` |
| **Site en ligne** | `CodeNoLimits/CodeNoLimits.github.io` → `main`, dossier `nekuda-academy/` (`.nojekyll` à la racine) | `/home/user/codenolimits.github.io` |
| Aperçu privé | https://claude.ai/artifact/D1VuHfbgae2VyzzKz1iZVN (v8, .vtt renommés .vtt.txt, aperçu seulement) | scratchpad |

Le dossier en ligne = la source **sans** `HANDOVER.md`, `PREUVES.md`, `PROMPTS.md`, `README.md`, `.gitignore`.

### NE JAMAIS POUSSER SUR
- `main` de `CodeNoLimits/nekuda-ai-academy` (version Gemini / Antigravity)
- `CodeNoLimits/nekuda-michal-grok` (version Grok)
- `CodeNoLimits/nekuda-michal-cours` (gelé)

## 3. METTRE À JOUR LE SITE (procédure, 3 commandes)

```bash
# 1) modifier + commit dans la source
cd /home/user/nekuda-michal-claude && git add -A && git commit -m "feat: ..." && git push -u origin claude/nekuda-michal-claude
# 2) remplacer la copie en ligne par le commit source (sans les docs) — testé : sortie identique au site v6
D=/home/user/codenolimits.github.io/nekuda-academy
rm -rf "$D" && mkdir -p "$D" && git -C /home/user/nekuda-michal-claude archive HEAD | tar -x -C "$D" && rm -f "$D"/*.md "$D"/.gitignore
# 3) publier
cd /home/user/codenolimits.github.io && git add nekuda-academy && git commit -m "nekuda-academy: vX (...)" && git push origin main
```
Puis vérifier le run « pages build and deployment » dans les Actions de `CodeNoLimits.github.io` (le proxy cloud bloque github.io, donc pas de test HTTP direct possible depuis le cloud).

## 4. L'OFFRE (texte validé par David, ne pas réinventer)

- **Produit** : 5 séances de 2,5 à 3 h, au studio d'impression de Bat Yam (milamila.co.il, « נקודה למחשבה »). Formateur : **David (Tselahya) Amor / דויד (צלחיה) אמור**.
- **Prix** : **1 849 ₪ par séance, pour tout le groupe (jusqu'à 6 participantes), PAS par participante.** Le prix apparaît **uniquement à la fin** (`#price`), jamais dans le hero ni dans la vignette WhatsApp.
- **Livrables, dans cet ordre** :
  1. **100 % d'autonomie avec les outils IA**, « ליווי צמוד בהתחלה »
  2. **10 Reels / pubs IA**
  3. **1 site nouveau ou amélioré + אסטרטגיית פרסום 2.0**
- **Ancre de valeur** : ≈ 15 000 ₪ par participante en académie ; 25 000 ₪+ avec coach privé et accompagnement jusqu'au succès et à l'indépendance.
- **Accompagnement inclus** : ligne WhatsApp https://wa.me/972584921492, David répond une fois par jour, jusqu'à ce que chaque participante soit autonome.
- **Grow ×10 (optionnel, prix fixé ensemble)** : les stratégies « Terminator » de David (agence 2016–2020, avant l'empire Airbnb à Jérusalem, puis de 2023 à aujourd'hui). Badge : « לטרמינייטוריות של הביזנס ». Cible : « מי שרוצה לגדול ».
- **Signature** : « DreamNova · the sky is the limit. » + `DreamNova.studio` en texte simple (pas de lien tant que le domaine n'est pas vérifié).

### Règles de formulation (tsniout + ton)
- ❌ Pas de « David vous tient la main » ni de traduction littérale de « hand-holding » → ✅ « ליווי צמוד בהתחלה »
- ❌ « תיאבון לגדול » → ✅ « מי שרוצה לגדול »
- ❌ Calcul par participante (308 ₪) supprimé, ne pas le remettre.
- Images de David : **bouche fermée, sourire**. Ne pas passer du temps à chasser les sourires ; choisir une frame correcte et avancer.
- Pas d'hébreu dessiné par l'IA dans les vidéos/images (le texte se pose au montage).

## 5. STRUCTURE DE LA LANDING (`index.html`)

Ordre des sections (★ = fond crème `.light`, le reste obsidienne/or) :

`top` (hero : texte + téléphone `hero.mp4`) → **`offer`★ (panneau mis en relief, conseil de l'épouse de David)** → `film` (57 s, 7 chapitres) → `why`★ → `how` (5 séances animées s1–s5) → `proof`★ (paires réel → IA) → `support` (inclus vs Grow ×10) → `david`★ (`kotel.mp4`) → `price` → `faq`★ → `final` (`final.mp4`)

- Bilingue : `<span data-he>` / `<span data-en>` ; langue gérée par `assets/nekuda.js` (`?lang=`, localStorage `nk-lang`, texte WhatsApp prérempli).
- Thème : `.light` redéfinit les variables CSS (crème `#F6F0E4`, texte `#1E1A15`, or `#7A5E1C` pour le contraste AA).
- Vidéos : MP4 faststart obligatoire (`ffmpeg -i in.mp4 -c copy -movflags +faststart out.mp4`) ; sous-titres `video/cc/*.he.vtt` / `*.en.vtt` synchronisés à la langue de la page.
- Animation « wow » : points de lumière (canvas, 30 fps, démarre à 1,2 s, respecte `prefers-reduced-motion`).
- Vignette WhatsApp : `og.jpg` 1200×630, hébreu, sans prix ; balises og en URL absolue.

## 6. MÉDIAS : source de chaque clip

| Fichier | Source | Usage |
|---|---|---|
| `video/hero.mp4` | upload David `6b903a09` (plan bégayé 7,42–8,5 s coupé, 8,92 s) | hero |
| `video/film.mp4` | repo Gemini commit `10c56bd` | film 57 s |
| `video/s1,s3–s5.mp4` | repo Gemini `seq_02…06` | séances |
| `video/s2.mp4` | upload David `99bc5e19` (gare centrale) | séance 2 |
| `video/kotel.mp4` | upload David `a06d7334` | section David |
| `video/final.mp4` | upload David `6020660f` | CTA final |

Détail des frames et mesures : `PREUVES.md` · règles de génération vidéo : `PROMPTS.md`.

## 7. QA (comment revérifier)

- Serveur local avec Range (indispensable pour tester le seek vidéo) : `node rangeserver.js` (scratchpad) sur `localhost:8766`, ou `python3 -m http.server` pour un simple aperçu.
- Playwright : Chromium dans `/opt/pw-browsers` (pas d'H.264 dans ce Chromium → tester le seek avec une copie VP9 temporaire).
- Lighthouse 12.2.1 en bloquant Google Fonts (sinon timeout via le proxy).
- Checklist minimale : pas de scroll horizontal à 390 px, 0 erreur console, prix seulement dans `#price`, HE et EN.

## 8. POINTS OUVERTS (non bloquants)

| # | Sujet | Action |
|---|---|---|
| 1 | Sous-titres Kotel : l'ASR a entendu « ג'מאל », remplacé par « ג׳מה » | David confirme l'orthographe du prénom |
| 2 | `DreamNova.studio` en texte | en faire un lien quand le domaine est vérifié |
| 3 | Photo solo de David | remplacer la frame vidéo de la section David si David en envoie une |
| 4 | 🔐 Mot de passe Google collé dans le chat | **David doit le changer** |
| 5 | 🔐 Token Vercel dans `CHECKPOINT_REPRISE.md` du repo `adaptive-mirror-dj` | **le révoquer sur vercel.com**, puis le retirer du repo |

## 9. PROCHAINE ACTION

**David** : envoyer https://codenolimits.github.io/nekuda-academy/?v=7 à Michal et Gemma, puis transmettre leurs retours (ou ceux d'Esther) → l'IA suivante applique, rsync, push, vérifie le run Pages.
