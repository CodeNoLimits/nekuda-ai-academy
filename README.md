# Nekuda AI Academy × DreamNova Studios — version Claude

Site de vente du cours de Bat Yam (5 séances, 1,849 ₪ par séance). Il est bilingue : hébreu RTL par défaut, et anglais via le bouton `EN` ou l'URL `?lang=en`.

- `index.html` : landing page (film + chapitres, livrables, cas milamila.co.il, sphère 3D, programme, prix, FAQ, CTA WhatsApp)
- `cours/index.html` : syllabus heure par heure, prompts copiables, machine YouTube de la séance 5
- `assets/nekuda.css`, `assets/nekuda.js` : design system et runtime partagés (langue, reveal, flip, copie)
- `PREUVES.md` : mesures chiffrées · `PROMPTS.md` : règles de fabrication vidéo

## Les autres versions, à ne pas pousser depuis ici

| Version | Où |
|---|---|
| Gemini 4 / Antigravity | `CodeNoLimits/nekuda-ai-academy` → https://codenolimits.github.io/nekuda-ai-academy/ |
| Grok | `CodeNoLimits/nekuda-michal-grok` → https://codenolimits.github.io/nekuda-michal-grok/ |
| Ancienne, gelée | `CodeNoLimits/nekuda-michal-cours` |

Cette version est conservée sur la branche orpheline `claude/nekuda-michal-claude`. Elle n'a aucun historique commun avec le `main` de Gemini et n'a pas de PR.

## Mettre en ligne (GitHub Pages)

1. Créer le dépôt vide `CodeNoLimits/nekuda-michal-claude` sur github.com.
2. Dans une session Claude Code : « pousse la branche `claude/nekuda-michal-claude` comme `main` du nouveau repo et active Pages ».

Test local : `python3 -m http.server` puis http://localhost:8000
