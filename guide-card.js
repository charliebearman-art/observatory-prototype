/* Concept A "featured guide" card — one template, rendered into a rail from data.
   Single source of truth shared by index-a (home) and guide-a, so the two never
   diverge. Markup mirrors the original .a-guide article exactly. */
(function () {
  var ICN = 'assets/icons.svg?v=3#i-arrow-right';
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function card(g) {
    return '<article class="a-guide"><a class="a-guide__link" href="' + esc(g.href || 'guide-a.html') + '" aria-label="Open guide"></a>' +
      '<img class="a-guide__img" src="' + esc(g.img) + '" alt="">' +
      '<span class="a-guide__badge">' + esc(g.city) + '</span>' +
      '<div class="a-guide__scrim" aria-hidden="true"></div>' +
      '<div class="a-guide__text">' +
        '<div class="a-guide__texthead">' +
          '<h3 class="a-guide__title">' + esc(g.title) + '</h3>' +
          '<p class="a-guide__teaser">' + esc(g.teaser) + '</p>' +
        '</div>' +
        '<div class="a-guide__foot">' +
          '<span class="a-guide__price">' + esc(g.price) + '</span>' +
          '<span class="icon-btn icon-btn--outline" aria-hidden="true"><svg class="icon"><use href="' + ICN + '"></use></svg></span>' +
        '</div>' +
      '</div>' +
    '</article>';
  }
  window.renderGuideCards = function (rail, cards) {
    if (typeof rail === 'string') rail = document.querySelector(rail);
    if (!rail) return;
    rail.innerHTML = cards.map(card).join('');
  };
})();
