/* Observatory — point-of-interest content (Duomo di Milano) + renderer.
   Shared by poi.html (standalone, ?p=N) and object.html (in-page overlay).
   One template, eight points; only content and image count differ. */
(function () {
  var P = 'assets/img/poi/';
  window.POINTS = [
    { // 1
      zone: 'Exterior',
      title: 'The Main Façade of the Duomo — history in stone',
      desc: 'Duomo di Milano. One of the largest Gothic cathedrals in Europe and the foremost symbol of Milan. Construction began in 1386 and continued for almost six centuries.',
      audio: 'The Main Façade', where: 'In front of the main façade, Piazza del Duomo.',
      hero: P + 'poi1-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The Madonnina — symbol of Milan', img: P + 'poi1-fact-1.jpg', text: 'On the Duomo’s main spire stands a golden statue of the Virgin Mary, about 4 metres tall. Since the 19th century there has been a tradition: no building in Milan was to rise higher than the Madonnina. Later this rule became symbolic — the city’s new high-rises still keep a connection to this image.' },
        { t: 'An “astronaut” on a 14th-century cathedral', img: P + 'poi1-fact-2.jpg', text: 'Among the reliefs of the main portal, restored in the 20th century, one figure looks strikingly like an astronaut in a spacesuit — carved long before spaceflight. Spotting it has become a small ritual for visitors standing before the façade.' }
      ]}]
    },
    { // 2
      zone: 'Interior',
      title: 'First look inside the Duomo — a forest of stone and the sundial meridian',
      desc: 'Step through the doors and the noise of the square falls away. Fifty-two colossal pillars rise like the trunks of a stone forest, drawing the eye up into the shadows of the vaults — one for each week of the year.',
      audio: 'Inside the Duomo', where: 'Just inside the main entrance, central nave.',
      hero: P + 'poi2-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The Sundial Meridian — a clock inside the cathedral', img: P + 'poi2-fact-1.jpg', text: 'A brass line runs across the floor, marked with the signs of the zodiac. Installed by astronomers in 1786, a beam of sunlight from a small hole in the vault crosses it at solar noon — a working meridian built into the church.' }
      ]}]
    },
    { // 3
      zone: 'Interior',
      title: 'Tombs — memory of the people of Milan',
      desc: 'The Duomo is not only a place of worship but a resting place. Along its aisles and in its floor lie archbishops, condottieri and citizens whose monuments turn the cathedral into a chronicle of the city, carved in marble and bronze.',
      audio: 'The tombs of the Duomo', where: 'Along the side aisles and the transepts.',
      hero: P + 'poi3-hero.jpg',
      groups: [
        { title: 'The Duomo’s silent residents', facts: [
          { t: 'The Tomb of Marco Carelli', img: P + 'poi3-fact-1.jpg', text: 'A merchant who left his entire fortune to the cathedral in 1394, speeding its construction. His Gothic sarcophagus repays the gift with a row of finely carved saints.' },
          { t: 'The Tomb of Ariberto da Intimiano', img: P + 'poi3-fact-2.jpg', text: 'The 11th-century archbishop who crowned emperors is remembered by a great copper crucifix — one of the oldest objects the Duomo still guards.' },
          { t: 'The Tomb of Gian Giacomo Medici', img: P + 'poi3-fact-3.jpg', text: 'Designed after Michelangelo and cast in bronze and marble, the monument to the condottiero known as “il Medeghino” is among the finest in the church.' }
        ]},
        { title: 'Interesting Facts', facts: [
          { t: 'Being buried here was a privilege, not a right', img: P + 'poi3-fact-4.jpg', text: 'Space inside the Duomo was reserved for those who served or funded it. A tomb under these vaults was the city’s highest honour, and it was granted sparingly.' },
          { t: 'The monuments almost everyone walks straight past', img: P + 'poi3-fact-5.jpg', text: 'Set into the floor and half-hidden along the aisles, many memorials are stepped over daily by visitors who never notice the names beneath their feet.' }
        ]}
      ]
    },
    { // 4
      zone: 'Interior',
      title: 'The Main Altar, the Holy Nail and the Porphyry Chalice',
      desc: 'The heart of the cathedral. Beneath the apse, the presbytery gathers the Duomo’s most sacred objects — from a relic said to come from the Cross to vessels far older than the church itself.',
      audio: 'The main altar', where: 'The presbytery and apse, behind the main altar.',
      hero: P + 'poi4-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The Holy Nail hangs high above the altar', img: P + 'poi4-fact-1.jpg', text: 'A relic believed to be a nail from the Crucifixion is kept in a niche high in the apse, marked by a small red light. It is lowered for veneration only once a year.' },
        { t: 'The Nivola is more than a machine', img: P + 'poi4-fact-2.jpg', text: 'To reach the relic, the archbishop rises in the Nivola — a cloud-shaped lift painted with angels, designed in the 16th century and still in use today.' },
        { t: 'A porphyry chalice from Egypt', img: P + 'poi4-fact-3.jpg', text: 'Among the treasures stands a great basin of imperial porphyry, quarried in Egypt and far older than the Duomo — reused, like so much here, across the centuries.' }
      ]}]
    },
    { // 5
      zone: 'Interior',
      title: 'The Crypt of Carlo Borromeo — the saint who changed Milan',
      desc: 'Beneath the main altar, a golden octagonal chapel holds the body of Saint Charles Borromeo, the reforming archbishop who shaped Milan through the plague and the Counter-Reformation.',
      audio: 'The crypt of San Carlo', where: 'The Scurolo, beneath the main altar.',
      hero: P + 'poi5-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The archbishop who stayed during the plague', img: P + 'poi5-fact-1.jpg', text: 'When plague struck Milan in 1576, Borromeo remained in the city, tending the sick and organising relief while others fled. The epidemic still bears his name.' },
        { t: 'Borromeo and education', img: P + 'poi5-fact-2.jpg', text: 'He founded seminaries and schools across the diocese, believing an educated clergy could renew the Church — an early network of colleges that outlived him.' },
        { t: 'A tomb of crystal', img: P + 'poi5-fact-3.jpg', text: 'His body rests in a rock-crystal and silver casket, the gift of a Spanish king, visible to pilgrims in the shimmering gold of the crypt.' }
      ]}]
    },
    { // 6
      zone: 'Interior',
      title: 'Saint Bartholomew — anatomy turned into art',
      desc: 'Near the right transept stands one of the most unsettling sculptures in any church: Saint Bartholomew, martyred by flaying, carrying his own skin as if it were a cloak.',
      audio: 'Saint Bartholomew', where: 'The right transept, near the presbytery.',
      hero: P + 'poi6-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'A sculpture often mistaken for an anatomy atlas', img: P + 'poi6-fact-1.jpg', text: 'Marco d’Agrate carved every muscle and vein with such precision in 1562 that anatomists have studied the figure. The saint’s body is a lesson in flesh without its skin.' },
        { t: 'Bartholomew holds not a cloak, but his own skin', img: P + 'poi6-fact-2.jpg', text: 'What drapes his shoulders is his flayed skin, complete with its face — the instrument of his martyrdom worn as a garment.' }
      ]}]
    },
    { // 7
      zone: 'Interior',
      title: 'The Basilica of Santa Tecla before the Duomo',
      desc: 'Long before the Duomo, two early churches stood on this spot. Their foundations survive beneath the cathedral floor, reached by a stair near the entrance — the oldest layer of Christian Milan.',
      audio: 'Beneath the Duomo', where: 'The archaeological area beneath the cathedral.',
      hero: P + 'poi7-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The Edict of Milan', img: P + 'poi7-fact-1.jpg', text: 'It was in the Milan of Constantine that Christianity was granted freedom, in 313 AD. The city where the faith became legal lies, quite literally, beneath your feet.' },
        { t: 'Archaeology underfoot', img: P + 'poi7-fact-2.jpg', text: 'The excavations reveal the octagonal baptistery of San Giovanni alle Fonti, where, by tradition, Saint Ambrose baptised Saint Augustine.' }
      ]}]
    },
    { // 8
      zone: 'Terraces',
      title: 'The Duomo Terraces — the city from a Gothic forest',
      desc: 'The climb ends on the roof, among a forest of 135 marble spires and hundreds of statues. From here Milan opens out below, and on clear days the Alps close the horizon.',
      audio: 'The terraces', where: 'The roof of the cathedral.',
      hero: P + 'poi8-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The terraces are the same marble as the whole cathedral', img: P + 'poi8-fact-1.jpg', text: 'Every spire and statue is carved from Candoglia marble, quarried on Lake Maggiore and floated to Milan along the canals — a supply that has served the Duomo for over six centuries.' }
      ]}],
      next: { eyebrow: 'Next on the route', name: 'Galleria Vittorio Emanuele II', img: 'assets/img/object/next-galleria.jpg' }
    }
  ];

  var TOTAL = window.POINTS.length;                       // 8
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  var ICN = 'assets/icons.svg?v=3#';

  function factCard(f) {
    return '<article class="fact" role="button" tabindex="0" data-title="' + esc(f.t) + '" data-img="' + esc(f.img) + '" data-text="' + esc(f.text) + '">' +
      '<img class="fact__img" src="' + esc(f.img) + '" alt="">' +
      '<div class="fact__scrim"></div>' +
      '<div class="fact__top"><button class="fact__toggle" aria-label="Open fact" tabindex="-1"><svg class="icon"><use href="' + ICN + 'i-plus"></use></svg></button></div>' +
      '<div class="fact__body"><h3 class="fact__title">' + esc(f.t) + '</h3></div>' +
    '</article>';
  }

  // inner HTML of a .poi-screen for point index i (0-based)
  window.renderPointInner = function (i) {
    var pt = window.POINTS[i]; if (!pt) return '';
    var n = i + 1;
    var segs = '';
    for (var s = 1; s <= TOTAL; s++) segs += '<span class="pprogress__seg' + (s <= n ? ' is-done' : '') + '"></span>';
    var groups = pt.groups.map(function (g) {
      return '<div class="facts pdesc__block"><h2 class="facts__title">' + esc(g.title) + '</h2>' +
        '<div class="facts__row">' + g.facts.map(factCard).join('') + '</div></div>';
    }).join('');
    var nextCard = pt.next ? '<div class="nextobj-wrap"><a class="nextobj" href="nav.html">' +
      '<img class="nextobj__thumb" src="' + esc(pt.next.img) + '" alt="">' +
      '<div class="nextobj__text"><span class="nextobj__eyebrow">' + esc(pt.next.eyebrow) + '</span><h2 class="nextobj__name">' + esc(pt.next.name) + '</h2></div>' +
      '<svg class="icon"><use href="' + ICN + 'i-arrow-right"></use></svg></a></div>' : '';

    return '' +
    '<header class="phead">' +
      '<div class="phead__bar">' +
        '<button class="icon-btn icon-btn--ghost-b" data-nav="back" aria-label="Back"><svg class="icon"><use href="' + ICN + 'i-arrow-left"></use></svg></button>' +
        '<div class="phead__center"><span class="phead__title">Point ' + n + ' of ' + TOTAL + '</span><span class="phead__zone">' + esc(pt.zone) + '</span></div>' +
        '<button class="icon-btn icon-btn--ghost-b" aria-label="Language"><svg class="icon"><use href="' + ICN + 'i-globe"></use></svg></button>' +
      '</div>' +
      '<div class="pprogress" aria-hidden="true">' + segs + '</div>' +
    '</header>' +
    '<section class="phero"><div class="phero__media"><img src="' + esc(pt.hero) + '" alt=""></div></section>' +
    '<section class="pdesc">' +
      '<div class="pdesc__block">' +
        '<div class="pdesc__head"><div class="pdesc__headtop">' +
          '<span class="poi-eyebrow">' + ('0' + n).slice(-2) + '</span>' +
          '<h1 class="pdesc__title">' + esc(pt.title) + '</h1>' +
        '</div><p class="pdesc__text">' + esc(pt.desc) + '</p></div>' +
        '<div class="audio">' +
          '<button class="audio__play" aria-label="Play">' +
            '<svg class="icon audio__ico audio__ico--play"><use href="' + ICN + 'i-play"></use></svg>' +
            '<svg class="icon audio__ico audio__ico--pause"><use href="' + ICN + 'i-pause"></use></svg>' +
          '</button>' +
          '<div class="audio__body"><div class="audio__row"><span class="audio__label">' + esc(pt.audio) + '</span><span class="audio__time">0:55</span></div>' +
          '<div class="audio__track"><span class="audio__rail"></span><span class="audio__fill"></span><span class="audio__thumb"></span></div></div>' +
        '</div>' +
        '<div class="wherecard"><span class="wherecard__k">Where is It?</span><span class="wherecard__v">' + esc(pt.where) + '</span></div>' +
      '</div>' +
      groups +
    '</section>' +
    nextCard +
    '<nav class="pswitch" aria-label="Points">' +
      '<button class="pswitch__prev" data-nav="prev" aria-label="Previous point"><svg class="icon"><use href="' + ICN + 'i-arrow-left"></use></svg></button>' +
      '<a class="pswitch__next" data-nav="next">Next<svg class="icon"><use href="' + ICN + 'i-arrow-right"></use></svg></a>' +
    '</nav>';
  };
})();

/* ---------- shared behaviour (works on freshly-rendered .poi-screen content) ---------- */
(function () {
  // audio player: play/pause + animated progress bar + countdown + scrub (demo, no file)
  window.wireAudio = function (audio) {
    if (audio.__wired) return; audio.__wired = true;
    var btn = audio.querySelector('.audio__play');
    var fill = audio.querySelector('.audio__fill'), thumb = audio.querySelector('.audio__thumb');
    var timeEl = audio.querySelector('.audio__time');
    var parts = (timeEl ? timeEl.textContent : '0:55').split(':');
    var dur = (+parts[0]) * 60 + (+parts[1]) || 55;
    var playing = false, elapsed = 0, last = 0, raf;
    function render() {
      var pct = Math.min(elapsed / dur, 1) * 100; fill.style.width = pct + '%'; thumb.style.left = pct + '%';
      var rem = Math.max(0, Math.ceil(dur - elapsed));
      if (timeEl) timeEl.textContent = Math.floor(rem / 60) + ':' + ('0' + (rem % 60)).slice(-2);
    }
    function pause() { playing = false; audio.classList.remove('is-playing'); btn.setAttribute('aria-label', 'Play'); cancelAnimationFrame(raf); }
    function tick(ts) { if (!last) last = ts; elapsed += (ts - last) / 1000; last = ts; render(); if (elapsed >= dur) { pause(); elapsed = 0; render(); return; } raf = requestAnimationFrame(tick); }
    btn.addEventListener('click', function () { if (playing) { pause(); return; } playing = true; audio.classList.add('is-playing'); btn.setAttribute('aria-label', 'Pause'); last = 0; raf = requestAnimationFrame(tick); });
    var track = audio.querySelector('.audio__track'), scrubbing = false, wasPlaying = false;
    function seekAt(x) { var r = track.getBoundingClientRect(); elapsed = Math.min(1, Math.max(0, (x - r.left) / r.width)) * dur; render(); }
    track.addEventListener('pointerdown', function (e) { e.preventDefault(); scrubbing = true; wasPlaying = playing; if (playing) cancelAnimationFrame(raf); audio.classList.add('is-scrubbing'); try { track.setPointerCapture(e.pointerId); } catch (_) {} seekAt(e.clientX); });
    track.addEventListener('pointermove', function (e) { if (scrubbing) seekAt(e.clientX); });
    function endScrub() { if (!scrubbing) return; scrubbing = false; audio.classList.remove('is-scrubbing'); if (wasPlaying && elapsed < dur) { last = 0; raf = requestAnimationFrame(tick); } }
    track.addEventListener('pointerup', endScrub); track.addEventListener('pointercancel', endScrub);
  };
  window.wireAudioIn = function (scope) { (scope || document).querySelectorAll('.audio').forEach(window.wireAudio); };

  // fact cards → open the bottom-sheet modal (populated from data-*)
  window.wireFacts = function (scope, open) {
    scope.querySelectorAll('.fact').forEach(function (c) {
      if (c.__wired) return; c.__wired = true;
      c.addEventListener('click', function () { open(c); });
      c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(c); } });
    });
  };

  // fact modal: open/close + drag-to-dismiss (wired once per modal element)
  window.initFactModal = function (modal) {
    var t = modal.querySelector('.factmodal__title'), im = modal.querySelector('.factmodal__img'), tx = modal.querySelector('.factmodal__text');
    var sheet = modal.querySelector('.factmodal__sheet'), scrim = modal.querySelector('.factmodal__scrim');
    function open(card) { t.textContent = card.dataset.title; im.src = card.dataset.img; tx.textContent = card.dataset.text; modal.hidden = false; }
    function close() { modal.hidden = true; sheet.style.transition = ''; sheet.style.transform = ''; scrim.style.transition = ''; scrim.style.opacity = ''; }
    modal.querySelectorAll('[data-close]').forEach(function (el) { el.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) close(); });
    var dg = false, sy = 0, dy = 0, h = 0;
    sheet.addEventListener('pointerdown', function (e) {
      if (sheet.scrollTop > 0 && !e.target.closest('.factmodal__handle, .factmodal__head')) return;
      dg = true; sy = e.clientY; dy = 0; h = sheet.offsetHeight; sheet.style.transition = 'none';
      try { sheet.setPointerCapture(e.pointerId); } catch (_) {}
    });
    sheet.addEventListener('pointermove', function (e) {
      if (!dg) return; dy = Math.max(0, e.clientY - sy); if (dy > 0 && e.cancelable) e.preventDefault();
      sheet.style.transform = 'translateY(' + dy + 'px)'; scrim.style.opacity = String(Math.max(0, 1 - dy / h));
    });
    function endDrag() {
      if (!dg) return; dg = false; sheet.style.transition = 'transform var(--dur) var(--ease)';
      if (dy > h * 0.28) { scrim.style.transition = 'opacity var(--dur) var(--ease)'; scrim.style.opacity = '0'; sheet.style.transform = 'translateY(100%)'; sheet.addEventListener('transitionend', function te() { sheet.removeEventListener('transitionend', te); close(); }); }
      else { sheet.style.transform = 'translateY(0)'; scrim.style.opacity = ''; }
    }
    sheet.addEventListener('pointerup', endDrag); sheet.addEventListener('pointercancel', endDrag);
    return { open: open, close: close };
  };
})();
