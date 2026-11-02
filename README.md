# Site de M. Bonali — mode d'emploi

Deux espaces : **Bac Pro CIEL** (`bacpro/`, `2mtne/`, `premiere/`, `terminale/`, `stages/`, `administratif/`)
et **École d'ingénieurs** (`ingenieur/`, rubriques : `cours`, `td`, `tp`, `projets`, `examens`, `logiciels`).

## Ajouter un document dans une page de classe

Dans `2mtne/index.html`, `premiere/index.html`, `terminale/index.html` ou `ingenieur/index.html`, repère la rubrique
(`id="cours"`, `id="tp"`, `id="exercices"`, `id="methodes"`, `id="evaluations"`, `id="logiciels"`)
et colle un bloc dans son `<div class="docs">`.

Les rubriques vides sont masquées automatiquement, et le menu de saut + le compteur
se mettent à jour tout seuls. La recherche de la page trouve aussi les nouveaux documents.

### PDF (s'ouvre dans un nouvel onglet)

```html
<a class="doc" href="documents/tp/mon-tp.pdf" target="_blank" rel="noopener">
  <span class="doc-type pdf">PDF</span>
  <span class="doc-text"><strong>Titre du document</strong><span>Une phrase pour dire ce que c'est.</span></span>
  <span class="doc-action">Ouvrir</span>
</a>
```

### ZIP (téléchargement direct)

```html
<a class="doc" href="documents/logiciels/mon-archive.zip" download>
  <span class="doc-type zip">ZIP</span>
  <span class="doc-text"><strong>Fichiers de l'exercice</strong><span>Archive à télécharger.</span></span>
  <span class="doc-action">Télécharger</span>
</a>
```

### Site externe

```html
<a class="doc" href="https://exemple.fr" target="_blank" rel="noopener">
  <span class="doc-type web">WEB</span>
  <span class="doc-text"><strong>Nom du site</strong><span>Site externe.</span></span>
  <span class="doc-action">Ouvrir le site</span>
</a>
```

Types d'icône disponibles : `pdf` (rouge), `zip` (violet), `web` (bleu), `app` (vert, logiciels).
La ligne de description (`<span>…</span>` après le titre) est facultative.

## Code couleur des classes

Comme le code des résistances : 2MTNE = rouge (2), Première = marron (1), Terminale = orange (3).
Classes CSS : `lvl-2`, `lvl-1`, `lvl-3`, plus `lvl-stage` (vert), `lvl-admin` (violet) et `lvl-ing` (bleu canard, école d'ingénieurs).

## Liens utiles (Pronote, ENT…)

Un bloc prêt à l'emploi est en commentaire en bas de `administratif/index.html` :
décommente-le et remplace l'adresse.
