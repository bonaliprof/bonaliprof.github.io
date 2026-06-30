# BAC Pro CIEL — site GitHub Pages

Première version du portail `bonaliprof.github.io`.

## Structure

- `index.html` : accueil du portail
- `2mtne/` : ressources 2MTNE
- `premiere/` : ressources Première CIEL
- `terminale/` : ressources Terminale CIEL
- `stages/` : page stage + carte interactive
- `administratif/` : documents génériques
- `assets/` : CSS, JS, icônes

## Ajouter un PDF

Exemple : déposer un fichier dans :

```txt
premiere/documents/cours/mon-cours.pdf
```

Puis modifier `premiere/index.html` pour remplacer une carte “À compléter” par un lien :

```html
<a href="documents/cours/mon-cours.pdf">Télécharger le cours</a>
```

## Carte des stages

La carte utilise :

```txt
stages/carte.html
stages/stages_full.json
stages/stages_geocode.json
```

Attention : GitHub Pages est public. Ne pas publier de données personnelles, de numéros mobiles, de listes d’élèves ou de documents remplis.
