/* BAC Pro CIEL — petits comportements communs à toutes les pages */
(function () {
  // Lien actif dans le menu
  var section = document.documentElement.getAttribute('data-section');
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    if (a.getAttribute('data-section') === section) a.setAttribute('aria-current', 'page');
  });

  // Année courante
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---------- Pages de niveau : rubriques, sauts, recherche ----------
  var shelvesWrap = document.querySelector('.shelves[data-auto]');
  if (shelvesWrap) {
    var shelves = Array.prototype.slice.call(shelvesWrap.querySelectorAll('.shelf'));
    var jumps = document.querySelector('.jumps');
    var emptyBox = document.querySelector('.empty-summary');
    var emptyNames = [];

    shelves.forEach(function (shelf) {
      var n = shelf.querySelectorAll('.doc').length;
      var name = shelf.querySelector('h2').textContent.trim();
      if (n === 0) {
        shelf.hidden = true;
        shelf.dataset.empty = '1';
        emptyNames.push(name);
      } else if (jumps && shelf.id) {
        var a = document.createElement('a');
        a.href = '#' + shelf.id;
        a.innerHTML = name + '<span class="count">' + n + '</span>';
        jumps.appendChild(a);
      }
    });

    if (emptyBox) {
      if (emptyNames.length) {
        emptyBox.textContent = 'Pas encore de document dans : ' + emptyNames.join(', ') +
          '. Ils apparaîtront ici dès qu’ils seront publiés.';
      } else {
        emptyBox.hidden = true;
      }
    }

    // Un seul rayon rempli : on l'affiche en pleine largeur
    var filled = shelves.filter(function (s) { return !s.dataset.empty; });
    if (filled.length === 1) shelvesWrap.classList.add('single');
    if (filled.length === 0 && emptyBox) {
      emptyBox.textContent = 'Aucun document n’est encore publié pour cette classe. Reviens bientôt !';
    }

    var input = document.querySelector('.search input');
    var noResult = document.querySelector('.no-result');
    if (input) {
      if (filled.length === 0) document.querySelector('.toolbar').hidden = true;
      var normalize = function (s) {
        return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      };
      input.addEventListener('input', function () {
        var q = normalize(input.value.trim());
        var total = 0;
        filled.forEach(function (shelf) {
          var visible = 0;
          shelf.querySelectorAll('.doc').forEach(function (doc) {
            var match = !q || normalize(doc.textContent).indexOf(q) !== -1 ||
              normalize(shelf.querySelector('h2').textContent).indexOf(q) !== -1;
            doc.hidden = !match;
            if (match) visible++;
          });
          shelf.hidden = visible === 0;
          total += visible;
        });
        if (noResult) {
          noResult.hidden = total !== 0;
          noResult.textContent = 'Aucun document ne contient « ' + input.value.trim() +
            ' ». Essaie un autre mot (ex. : TP, Ohm, Python).';
        }
        if (emptyBox && emptyNames.length) emptyBox.hidden = !!q;
      });
    }
  }

  // ---------- Page Stages : choix de la classe pour les conventions ----------
  var picker = document.querySelector('.class-picker');
  if (picker) {
    var buttons = picker.querySelectorAll('button');
    var groups = document.querySelectorAll('.conv-group');
    var show = function (cls) {
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.class === cls)); });
      groups.forEach(function (g) { g.hidden = cls !== 'all' && g.dataset.class !== cls; });
      try { localStorage.setItem('ciel-classe', cls); } catch (e) {}
    };
    buttons.forEach(function (b) {
      b.addEventListener('click', function () { show(b.dataset.class); });
    });
    var saved = null;
    try { saved = localStorage.getItem('ciel-classe'); } catch (e) {}
    var fromHash = location.hash.replace('#', '');
    var initial = ['2mtne', 'premiere', 'terminale'].indexOf(fromHash) !== -1 ? fromHash : (saved || 'all');
    show(initial);
  }
})();
