# PROMPTS — Nekuda × DreamNova (version Claude)

Les prompts élèves (copiables en 1 clic) sont dans `cours/index.html`. Ce fichier garde les règles de fabrication des vidéos de David.

## Règles apprises (à appliquer à chaque génération)

1. **Pas d'hébreu dessiné par l'IA.** Écrire dans le prompt : `No text, no letters, no logos on screen` et `Keep any printed text exactly as in the reference — do not redraw letters`. Le texte hébreu se pose ensuite, au montage.
2. **Débit de voix.** Mesure faite le 18/10/2026 sur 11 clips : le spot `/brag` de Gemini (24 s = 3 blocs de 8 s) a le même débit que les autres clips Veo (≈ 3,0 noyaux de parole/s), donc **il n'est pas accéléré**. L'impression de vitesse vient d'une phrase trop longue tassée dans 8 s, avec seulement 0,3 à 0,45 s de pause entre les blocs. Règle : **max 12 à 14 mots par plan de 8 s**, et terminer le prompt par `…then a calm one-second pause`.
3. **Visage.** Même référence à chaque plan (casquette noire, lunettes métal fines, barbe poivre et sel, tee-shirt olive). Sur la Lune : tee-shirt olive et pantalon sombre, **pas de combinaison**.
4. **Faststart obligatoire** avant toute mise en ligne : `ffmpeg -i in.mp4 -c copy -movflags +faststart out.mp4`.

## Prompt type — plan qui marche, David face caméra (Veo 3 / Flow)

```
16:9, 8 seconds. The same man as the reference (black cap, thin metal glasses, salt-and-pepper beard, olive t-shirt) walks slowly toward the camera on [LOCATION], holding [REAL PRODUCT, plain side toward camera]. He says in Hebrew, calmly: "[max 12 words]" — then a calm one-second pause. Natural light, medium shot, accurate lip-sync. No on-screen text, no letters on signs or products.
```

## Prompt type — Grok Imagine, image → vidéo d'un produit réel

```
Animate this exact product photo. Keep the product, its shape and all printed text completely unchanged — do not redraw any letters. Slow 15° orbit, soft warm light, gentle bokeh. 6 seconds, 9:16. No added text.
```

## Clips de cette version et leur source

| Fichier | Source | Contenu |
|---|---|---|
| `video/annex_01.mp4` | upload David `Man_holding_candle_talking_to…134923` (1080p) | bougie « HaEsh Sheli », studio |
| `video/annex_02.mp4` | upload `Man_presenting_product_box…` | coffret + cartes flottantes |
| `video/annex_03.mp4` | upload `Man_holding_name-verse_print…` | cadre « Birkat Hashem » |
| `video/annex_04.mp4` | uploads `…candle_talking_to…134854` + `…candle_on_Moon…` (montés, ré-encodés) | studio + final lunaire |
| `video/session_03_train.mp4` | upload `Man_walking_on_train_platform…` | quai de gare, coffret באורם של צדיקים |
| `video/session_04_batyam.mp4` | upload `Man_walking_into_studio…` | promenade de Bat Yam |
| `video/session_05_moon.mp4` | upload `Man_walking_on_the_Moon…` | marche sur la Lune, la Terre au fond |

Le film complet, les 7 séquences et `/brag` ne sont **pas copiés** : la page les lit directement sur `https://codenolimits.github.io/nekuda-ai-academy/video/`, ce qui n'écrit rien dans ce dépôt.
