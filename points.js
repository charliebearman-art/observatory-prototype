/* Observatory — point-of-interest content (Duomo di Milano) + renderer.
   Shared by poi.html (standalone, ?p=N) and object.html (in-page overlay).
   One template, eight points; content, image count and fact groups differ.
   Copy and image mapping verified against Figma (section 1099:3735, details 1139:*). */
(function () {
  var P = 'assets/img/poi/';
  window.POINTS = [
    { // 1
      zone: 'Exterior', time: '0:55', audio: 'The Main Façade',
      title: 'The Main Façade of the Duomo — history in stone',
      desc: 'Duomo di Milano. One of the largest Gothic cathedrals in Europe and the foremost symbol of Milan. Construction began in 1386 and continued for almost six centuries.',
      where: 'In front of the main façade, Piazza del Duomo.',
      hero: P + 'poi1-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The Madonnina — symbol of Milan', img: P + 'poi1-fact-1.jpg', text: 'On the Duomo’s main spire stands a golden statue of the Virgin Mary, about 4 metres tall. Since the 19th century there has been a tradition: no building in Milan was to rise higher than the Madonnina. Later this rule became symbolic — the city’s new high-rises still keep a connection to this image.' },
        { t: 'An “astronaut” on a 14th-century cathedral', img: P + 'poi1-fact-2.jpg', text: 'Look closely at the Duomo’s sculptures and you can spot a figure that strikingly resembles a person in a modern spacesuit. Medieval craftsmen knew nothing of space — it is in fact a 20th-century religious sculpture, but its form resembles an astronaut so closely that it has become one of the cathedral’s best-known modern legends.' }
      ]}]
    },
    { // 2
      zone: 'Interior', time: '0:55', audio: 'The Sundial Meridian',
      title: 'First look inside the Duomo — a forest of stone and the sundial meridian',
      desc: 'First look inside the Duomo. Inside, the cathedral reveals its true scale: colossal columns, Gothic vaults and an 18th-century sundial meridian that turns the cathedral into a meeting place of art and science.',
      where: 'Just inside the main entrance, the central nave.',
      hero: P + 'poi2-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The Sundial Meridian — a clock inside the cathedral', img: P + 'poi2-fact-1.jpg', text: 'Inside the Duomo is one of the most unusual instruments of the 18th century — the sundial meridian, created in 1786 by the astronomers of Milan’s Brera Observatory. A brass line runs across the floor, flanked by the signs of the zodiac. Through an opening in the ceiling, a ray of sunlight at noon marks the position of the sun and the matching zodiac sign.' }
      ]}]
    },
    { // 3
      zone: 'Interior', time: '2:00', audio: 'The Tombs',
      title: 'Tombs — memory of the people of Milan',
      desc: 'The Duomo is not only a church, but a place of memory. Over the centuries, tombs of important Milanese appeared inside the cathedral: rulers, soldiers and members of the clergy. Open the cards to discover their stories.',
      where: 'The right side of the cathedral, towards the altar.',
      hero: P + 'poi3-hero.jpg',
      groups: [
        { title: 'The Duomo’s silent residents', facts: [
          { t: 'The Tomb of Marco Carelli', img: P + 'poi3-fact-1.jpg', eyebrow: 'Patron of the Duomo’s construction', text: 'Marco Carelli was one of the key figures in the cathedral’s construction. In the early 15th century he made a large donation to continue the work, and his contribution proved so significant that after his death his memory was preserved inside the Duomo — a reminder that the cathedral was made possible not only by architects and craftsmen but by those who funded it.' },
          { t: 'The Tomb of Ariberto da Intimiano', img: P + 'poi3-fact-4.jpg', eyebrow: 'One of the most powerful men in 11th-century Milan', text: 'Ariberto da Intimiano (c. 970/980–1045) was Archbishop of Milan from 1018 — not only a religious leader but a major political figure. He took part in imperial politics and in 1027 crowned Conrad II King of Italy. His sarcophagus was first in the church of San Dionigi and, after its 18th-century destruction, was moved to the Duomo.' },
          { t: 'The Tomb of Gian Giacomo Medici', img: P + 'poi3-fact-3.jpg', eyebrow: 'A military leader from the Medici family', text: 'Gian Giacomo Medici (1498–1555), known as Medeghino, was one of the most famous soldiers of 16th-century Milan. Unlike the Florentine Medici, his family was Milanese; he served the Spanish crown when Milan was under Habsburg rule. His tomb was created by the sculptor Leone Leoni and is one of the Duomo’s important Renaissance monuments.' }
        ]},
        { title: 'Interesting Facts', facts: [
          { t: 'Being buried here was a privilege, not a right', img: P + 'poi3-fact-2.jpg', text: 'In medieval Europe it was common to bury important members of society inside a city’s main churches. In this way a person remained symbolically tied to the history of the place even after death.' },
          { t: 'The monuments almost everyone walks straight past', img: P + 'poi3-fact-5.jpg', text: 'Many visitors cross the cathedral without noticing the funerary monuments — attention is usually taken by the scale of the architecture and the stained glass. Yet it is precisely such details that reveal the personal stories of the people behind the Duomo.' }
        ]}
      ]
    },
    { // 4
      zone: 'Interior', time: '2:00', audio: 'Altar and Nail',
      title: 'The Main Altar, the Holy Nail and the Porphyry Chalice',
      desc: 'The main altar is the heart of the cathedral’s religious life. Here stand an unusual porphyry chalice and one of Milan’s greatest relics — the Holy Nail.',
      where: 'The altar area of the cathedral.',
      hero: P + 'poi4-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The Holy Nail hangs high above the altar', img: P + 'poi4-fact-2.jpg', text: 'The relic sits dozens of metres up in the vault of the apse, so it cannot be reached without a special mechanism.' },
        { t: 'The Nivola is more than a machine', img: P + 'poi4-fact-1.jpg', text: 'It fuses an engineering solution with religious theatre: during the rite, the slow movement of the platform becomes part of the ceremony.' },
        { t: 'A porphyry chalice from Egypt', img: P + 'poi4-fact-3.jpg', text: 'Purple porphyry was quarried only in Egypt, at Mons Porphyrites. In ancient Rome the stone was so precious that its use was tied almost solely to imperial power.' }
      ]}]
    },
    { // 5
      zone: 'Interior', time: '2:30', audio: 'The Crypt',
      title: 'The Crypt of Carlo Borromeo — the saint who changed Milan',
      desc: 'Beneath the main altar lies the place that keeps the memory of Carlo Borromeo — one of Milan’s most important archbishops. His reforms changed not only the Church, but the city itself.',
      where: 'Beneath the main altar of the Duomo.',
      hero: P + 'poi5-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The archbishop who stayed during the plague', img: P + 'poi5-fact-1.jpg', text: 'During the plague of 1576, Carlo Borromeo refused to leave Milan and became one of the main organisers of relief for its people.' },
        { t: 'Borromeo and education', img: P + 'poi5-fact-2.jpg', text: 'He founded the Collegio Borromeo in Pavia and actively developed the training of priests after the decisions of the Council of Trent.' },
        { t: 'A tomb of crystal', img: P + 'poi5-fact-3.jpg', text: 'In the crypt his remains rest in a transparent rock-crystal casket, which lets visitors see the saint in his archbishop’s vestments.' }
      ]}]
    },
    { // 6
      zone: 'Interior', time: '3:00', audio: 'Saint Bartholomew',
      title: 'Saint Bartholomew — anatomy turned into art',
      desc: 'Saint Bartholomew without his skin. One of the Duomo’s most unusual sculptures shows the saint not as a religious image, but as a true study of the human body.',
      where: 'The left side of the cathedral, the south transept.',
      hero: P + 'poi6-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'A sculpture often mistaken for an anatomy atlas', img: P + 'poi6-fact-1.jpg', text: 'Its muscles and body structure are rendered so precisely that it is often called one of the finest examples of the fusion of art and anatomy.' },
        { t: 'Bartholomew holds not a cloak, but his own skin', img: P + 'poi6-fact-2.jpg', text: 'The sculpture’s most striking detail is the skin thrown over his shoulder — a reference to the saint’s martyrdom.' }
      ]}]
    },
    { // 7
      zone: 'Interior', time: '3:00', audio: 'The Basilica',
      title: 'The Basilica of Santa Tecla — Milan before the Duomo',
      desc: 'Beneath the Duomo hides another city. Long before the present cathedral, ancient Christian basilicas stood here. Today, underground, you can see the remains of Santa Tecla — one of the most important churches of early Milan.',
      where: 'The archaeological area beneath the cathedral.',
      hero: P + 'poi7-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The Edict of Milan', img: P + 'poi7-fact-1.jpg', text: 'In 313 the emperors Constantine and Licinius proclaimed freedom of worship for Christians across the Roman Empire. The Edict of Milan became one of the most important events in the history of Christianity.' },
        { t: 'Archaeology underfoot', img: P + 'poi7-fact-2.jpg', text: 'Beneath Piazza del Duomo the remains of ancient buildings from different eras survive. The archaeological area shows how one city was literally built on top of another.' }
      ]}]
    },
    { // 8
      zone: 'Terraces', time: '3:00', audio: 'The Terraces',
      title: 'The Duomo Terraces — the city from a Gothic forest',
      desc: 'Where stone meets the sky. The terraces reveal another side of the Duomo: among the spires and statues you see the architecture not from below but from within — walking across the summit of a Gothic masterpiece.',
      where: 'The roof of Milan Cathedral.',
      hero: P + 'poi8-hero.jpg',
      groups: [{ title: 'Interesting Facts', facts: [
        { t: 'The terraces are the same marble as the whole cathedral', img: P + 'poi8-fact-1.jpg', text: 'Candoglia marble is still used to restore the Duomo today.' }
      ]}],
      next: { eyebrow: 'Next on the route', name: 'Galleria Vittorio Emanuele II', img: 'assets/img/object/next-galleria.jpg' }
    }
  ];

  var TOTAL = window.POINTS.length;                       // 8
  var ZONE_SLIDE = { Exterior: 0, Interior: 1, Terraces: 2 };
  window.slideOfPoint = function (i) { return ZONE_SLIDE[window.POINTS[i].zone] || 0; };
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  var ICN = 'assets/icons.svg?v=3#';

  function factCard(f, wide) {
    return '<article class="fact' + (wide ? ' fact--wide' : '') + '" role="button" tabindex="0" data-title="' + esc(f.t) + '" data-img="' + esc(f.img) + '" data-eyebrow="' + esc(f.eyebrow || 'Interesting fact') + '" data-text="' + esc(f.text) + '">' +
      '<img class="fact__img" src="' + esc(f.img) + '" alt="">' +
      '<div class="fact__scrim"></div>' +
      '<div class="fact__top"><button class="fact__toggle" aria-label="Open fact" tabindex="-1"><svg class="icon"><use href="' + ICN + 'i-plus"></use></svg></button></div>' +
      '<div class="fact__body"><h3 class="fact__title">' + esc(f.t) + '</h3></div>' +
    '</article>';
  }

  // the sticky header (does NOT get re-rendered on prev/next, so it never re-animates)
  window.renderPointHead = function (i) {
    var pt = window.POINTS[i], n = i + 1, segs = '';
    for (var s = 1; s <= TOTAL; s++) segs += '<span class="pprogress__seg' + (s <= n ? ' is-done' : '') + '"></span>';
    return '<header class="phead">' +
      '<div class="phead__bar">' +
        '<button class="icon-btn icon-btn--outline icon-btn--36" data-nav="back" aria-label="Back"><svg class="icon"><use href="' + ICN + 'i-arrow-left"></use></svg></button>' +
        '<div class="phead__center"><span class="phead__title">Point ' + n + ' of ' + TOTAL + '</span><span class="phead__zone">' + esc(pt.zone) + '</span></div>' +
        '<button class="icon-btn icon-btn--outline icon-btn--36" aria-label="Language"><svg class="icon"><use href="' + ICN + 'i-globe"></use></svg></button>' +
      '</div>' +
      '<div class="pprogress" aria-hidden="true">' + segs + '</div>' +
    '</header>';
  };

  // the scrolling body (hero + description + facts + switcher [+ next object]) — replaced on prev/next
  window.renderPointBody = function (i) {
    var pt = window.POINTS[i], n = i + 1;
    var groups = pt.groups.map(function (g) {
      var wide = g.facts.length === 1;
      return '<div class="facts pdesc__block"><h2 class="facts__title">' + esc(g.title) + '</h2>' +
        '<div class="facts__row' + (wide ? ' facts__row--single' : '') + '">' + g.facts.map(function (f) { return factCard(f, wide); }).join('') + '</div></div>';
    }).join('');
    var sw = '<nav class="pswitch" aria-label="Points">';
    if (n > 1) sw += '<button class="btn btn--secondary btn--large pswitch__back" data-nav="prev"><svg class="icon"><use href="' + ICN + 'i-arrow-left"></use></svg>Back</button>';
    if (n < TOTAL) sw += '<a class="btn btn--primary btn--large pswitch__next" data-nav="next">Next<svg class="icon"><use href="' + ICN + 'i-arrow-right"></use></svg></a>';
    else sw += '<a class="btn btn--primary btn--large pswitch__next" data-nav="object">To Object</a>';   // last point: return to the object card (next-object card still flows below)
    sw += '</nav>';
    var nextCard = pt.next ? '<div class="nextobj-wrap"><a class="nextobj" href="nav.html">' +
      '<img class="nextobj__thumb" src="' + esc(pt.next.img) + '" alt="">' +
      '<div class="nextobj__text"><span class="nextobj__eyebrow">' + esc(pt.next.eyebrow) + '</span><h2 class="nextobj__name">' + esc(pt.next.name) + '</h2></div>' +
      '<svg class="icon"><use href="' + ICN + 'i-arrow-right"></use></svg></a></div>' : '';
    return '<section class="phero"><div class="phero__media"><img src="' + esc(pt.hero) + '" alt=""></div></section>' +
    '<div class="psheet">' +
    '<section class="pdesc">' +
      '<div class="pdesc__block">' +
        '<div class="pdesc__head"><div class="pdesc__headtop">' +
          '<span class="poi-eyebrow">' + ('0' + n).slice(-2) + '</span>' +
          '<h1 class="pdesc__title">' + esc(pt.title) + '</h1>' +
        '</div><p class="pdesc__text">' + esc(pt.desc) + '</p></div>' +
        '<div class="audio" data-src="assets/audio/poi-' + n + '.mp3">' +
          '<button class="audio__play" aria-label="Play">' +
            '<svg class="icon audio__ico audio__ico--play"><use href="' + ICN + 'i-play"></use></svg>' +
            '<svg class="icon audio__ico audio__ico--pause"><use href="' + ICN + 'i-pause"></use></svg>' +
          '</button>' +
          '<div class="audio__body"><div class="audio__row"><span class="audio__label">' + esc(pt.audio) + '</span><span class="audio__time">' + esc(pt.time || '0:55') + '</span></div>' +
          '<div class="audio__track"><span class="audio__rail"></span><span class="audio__fill"></span><span class="audio__thumb"></span></div></div>' +
        '</div>' +
        '<div class="wherecard"><span class="wherecard__k">Where is It?</span><span class="wherecard__v">' + esc(pt.where) + '</span></div>' +
      '</div>' +
      groups +
    '</section>' + sw + nextCard + '</div>';
  };

  window.renderPointInner = function (i) {
    return window.renderPointHead(i) + '<div class="poibody">' + window.renderPointBody(i) + '</div>';
  };

  // update the header in place for prev/next (no animation on the header)
  window.updatePointHead = function (root, i) {
    var n = i + 1;
    var tt = root.querySelector('.phead__title'); if (tt) tt.textContent = 'Point ' + n + ' of ' + TOTAL;
    var zn = root.querySelector('.phead__zone'); if (zn) zn.textContent = window.POINTS[i].zone;
    root.querySelectorAll('.pprogress__seg').forEach(function (s, idx) { s.classList.toggle('is-done', idx < n); });
  };

  /* ---------- shared behaviour (works on freshly-rendered content) ---------- */
  // registry so only one clip plays at a time and orphaned clips (whose player
  // was re-rendered/removed) can be stopped on navigation.
  window.__audioReg = window.__audioReg || [];
  window.stopAllAudio = function () {
    window.__audioReg = window.__audioReg.filter(function (r) { r.stop(); return r.node.isConnected; });
  };
  window.wireAudio = function (audio) {
    if (audio.__wired) return; audio.__wired = true;
    var btn = audio.querySelector('.audio__play');
    var fill = audio.querySelector('.audio__fill'), thumb = audio.querySelector('.audio__thumb');
    var timeEl = audio.querySelector('.audio__time');
    var track = audio.querySelector('.audio__track');
    var src = audio.getAttribute('data-src');
    // duration from the label until real metadata arrives (keeps the "0:55" chip correct on first paint)
    var parts = (timeEl ? timeEl.textContent : '0:55').split(':');
    var dur = (+parts[0]) * 60 + (+parts[1]) || 55;
    var el = new Audio(); el.preload = 'metadata'; if (src) el.src = src;
    function fmt(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
    function render() {
      var cur = el.currentTime || 0, pct = dur ? Math.min(cur / dur, 1) * 100 : 0;
      fill.style.width = pct + '%'; thumb.style.left = pct + '%';
      if (timeEl) timeEl.textContent = fmt(dur - cur);   // counts down remaining
    }
    function stop() { el.pause(); audio.classList.remove('is-playing'); btn.setAttribute('aria-label', 'Play'); }
    function play() { window.stopAllAudio(); el.play().catch(function () {}); audio.classList.add('is-playing'); btn.setAttribute('aria-label', 'Pause'); }
    el.addEventListener('loadedmetadata', function () { if (isFinite(el.duration) && el.duration > 0) dur = el.duration; render(); });
    el.addEventListener('timeupdate', function () { if (!scrubbing) render(); });
    el.addEventListener('ended', function () { stop(); el.currentTime = 0; render(); });
    btn.addEventListener('click', function () { if (el.paused) play(); else stop(); });
    var scrubbing = false, wasPlaying = false;
    function seekAt(x) { var r = track.getBoundingClientRect(); el.currentTime = Math.min(1, Math.max(0, (x - r.left) / r.width)) * (dur || 0); render(); }
    track.addEventListener('pointerdown', function (e) { e.preventDefault(); scrubbing = true; wasPlaying = !el.paused; el.pause(); audio.classList.add('is-scrubbing'); try { track.setPointerCapture(e.pointerId); } catch (_) {} seekAt(e.clientX); });
    track.addEventListener('pointermove', function (e) { if (scrubbing) seekAt(e.clientX); });
    function endScrub() { if (!scrubbing) return; scrubbing = false; audio.classList.remove('is-scrubbing'); if (wasPlaying) play(); }
    track.addEventListener('pointerup', endScrub); track.addEventListener('pointercancel', endScrub);
    window.__audioReg.push({ node: audio, stop: stop });
    render();
  };
  window.wireAudioIn = function (scope) { (scope || document).querySelectorAll('.audio').forEach(window.wireAudio); };

  // opening a fact opens the modal on that fact within its group (same .facts__row),
  // so the modal can page prev/next through the group
  window.wireFacts = function (scope, open) {
    scope.querySelectorAll('.fact').forEach(function (c) {
      if (c.__wired) return; c.__wired = true;
      function fire() {
        var row = c.closest('.facts__row');
        var list = row ? [].slice.call(row.querySelectorAll('.fact')) : [c];
        open(list, list.indexOf(c));
      }
      c.addEventListener('click', fire);
      c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fire(); } });
    });
  };

  window.initFactModal = function (modal) {
    var card = modal.querySelector('.factmodal__card');
    var eb = modal.querySelector('.factmodal__eyebrow');
    var t = modal.querySelector('.factmodal__title'), im = modal.querySelector('.factmodal__img'), tx = modal.querySelector('.factmodal__text');
    var nav = modal.querySelector('.factmodal__nav');
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cards = [], idx = 0, anim = false;

    function navBtn(kind, icon) { return '<button class="icon-btn icon-btn--outline" data-act="' + kind + '" aria-label="' + kind + '"><svg class="icon"><use href="' + ICN + icon + '"></use></svg></button>'; }
    function paint() {
      var c = cards[idx];
      if (eb) eb.textContent = c.dataset.eyebrow || 'Interesting fact';
      t.textContent = c.dataset.title; im.src = c.dataset.img; tx.textContent = c.dataset.text;
      nav.innerHTML =
        (idx > 0 ? navBtn('prev', 'i-arrow-left') : '<span></span>') +
        navBtn('close', 'i-x') +
        (idx < cards.length - 1 ? navBtn('next', 'i-arrow-right') : '<span></span>');
      card.scrollTop = 0;
    }
    function reset() { card.style.transition = ''; card.style.transform = ''; card.style.opacity = ''; }
    function close() { modal.hidden = true; reset(); }
    function open(list, i) { cards = list; idx = i || 0; reset(); paint(); modal.hidden = false; }

    // exitDir: -1 = fly out left (next), +1 = fly out right (prev)
    function transitionTo(k, exitDir) {
      if (k < 0 || k >= cards.length || anim) return;
      if (reduce) { idx = k; paint(); return; }
      anim = true;
      card.style.transition = 'transform var(--dur) var(--ease), opacity var(--dur) var(--ease)';
      card.style.transform = 'translateX(' + (exitDir * 115) + '%) rotate(' + (exitDir * 6) + 'deg)';
      card.style.opacity = '0';
      var enter = -exitDir;
      setTimeout(function () {
        idx = k; paint();
        card.style.transition = 'none';
        card.style.transform = 'translateX(' + (enter * 115) + '%) rotate(' + (enter * 6) + 'deg)'; card.style.opacity = '0';
        requestAnimationFrame(function () { requestAnimationFrame(function () {
          card.style.transition = 'transform var(--dur-slow) var(--ease), opacity var(--dur-slow) var(--ease)';
          card.style.transform = 'translateX(0) rotate(0deg)'; card.style.opacity = '1';
          anim = false;
        }); });
      }, 200);
    }
    function goNext() { transitionTo(idx + 1, -1); }
    function goPrev() { transitionTo(idx - 1, 1); }

    nav.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'); if (!b) return;
      if (b.dataset.act === 'close') close(); else if (b.dataset.act === 'next') goNext(); else goPrev();
    });
    modal.querySelectorAll('[data-close]').forEach(function (el) { el.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') goNext(); else if (e.key === 'ArrowLeft') goPrev();
    });

    // Tinder-style horizontal swipe between facts; vertical stays native scroll
    var down = false, sx = 0, sy = 0, dx = 0, axis = '';
    card.addEventListener('pointerdown', function (e) {
      if (anim) return; down = true; sx = e.clientX; sy = e.clientY; dx = 0; axis = ''; card.style.transition = 'none';
    });
    card.addEventListener('pointermove', function (e) {
      if (!down) return;
      var mx = e.clientX - sx, my = e.clientY - sy;
      if (!axis && (Math.abs(mx) > 8 || Math.abs(my) > 8)) axis = Math.abs(mx) > Math.abs(my) ? 'x' : 'y';
      if (axis !== 'x') return;
      if (e.cancelable) e.preventDefault();
      dx = mx;
      if ((idx === 0 && dx > 0) || (idx === cards.length - 1 && dx < 0)) dx *= 0.3;   // resist at the ends
      card.style.transform = 'translateX(' + dx + 'px) rotate(' + (dx * 0.03) + 'deg)';
      try { card.setPointerCapture(e.pointerId); } catch (_) {}
    });
    function endSwipe() {
      if (!down) return; down = false;
      if (axis !== 'x') return;
      var th = (card.offsetWidth || 320) * 0.28;
      if (dx < -th && idx < cards.length - 1) goNext();
      else if (dx > th && idx > 0) goPrev();
      else { card.style.transition = 'transform var(--dur) var(--ease)'; card.style.transform = 'translateX(0) rotate(0deg)'; }
    }
    card.addEventListener('pointerup', endSwipe); card.addEventListener('pointercancel', endSwipe);

    return { open: open, close: close };
  };
})();
