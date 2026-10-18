/* NEKUDA × DREAMNOVA — shared runtime: language (HE default / EN), reveal, copy, video helpers */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  var WA = 'https://wa.me/972584921492';
  var WA_TEXT = {
    he: 'שלום דויד, ראיתי את התוכנית של Nekuda AI Academy ואשמח לשריין מקום ולקבל פרטים 🙏',
    en: 'Hi David, I saw the Nekuda AI Academy program and would love to book a spot and get the details 🙏'
  };

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- Language ---------- */
  function setLang(lang) {
    if (lang !== 'en') lang = 'he';
    root.lang = lang;
    root.dir = lang === 'he' ? 'rtl' : 'ltr';
    var t = root.getAttribute('data-title-' + lang);
    if (t) document.title = t;
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang));
    });
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      a.href = WA + '?text=' + encodeURIComponent(WA_TEXT[lang]);
    });
    document.querySelectorAll('[data-aria-he]').forEach(function (el) {
      el.setAttribute('aria-label', el.getAttribute('data-aria-' + lang));
    });
    store('nk-lang', lang);
    document.dispatchEvent(new CustomEvent('nk:lang', { detail: lang }));
  }
  var q = new URLSearchParams(location.search).get('lang');
  setLang(q || store('nk-lang') || 'he');
  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });
  window.NK = { lang: function () { return root.lang; } };

  /* ---------- Scroll reveal: IO threshold .05 + forced activation after 400ms ---------- */
  var reveals = [].slice.call(document.querySelectorAll('.reveal'));
  function show(el) { el.classList.add('in'); }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  }
  setTimeout(function () { reveals.forEach(show); }, 400);

  /* ---------- Videos: one at a time ---------- */
  document.addEventListener('play', function (e) {
    if (e.target.tagName !== 'VIDEO') return;
    document.querySelectorAll('video').forEach(function (v) { if (v !== e.target && !v.paused) v.pause(); });
  }, true);

  /* ---------- Copy buttons ---------- */
  var toast = document.createElement('div');
  toast.className = 'toast'; toast.setAttribute('role', 'status');
  document.body.appendChild(toast);
  function flash(msg) {
    toast.textContent = msg; toast.classList.add('show');
    clearTimeout(flash._t); flash._t = setTimeout(function () { toast.classList.remove('show'); }, 1600);
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (res, rej) {
      var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? res() : rej(); } catch (err) { rej(err); } finally { ta.remove(); }
    });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.copy'); if (!b) return;
    var pre = b.closest('.prompt').querySelector('pre');
    copyText(pre.innerText.trim()).then(
      function () { flash(root.lang === 'he' ? 'הפרומפט הועתק ✓' : 'Prompt copied ✓'); },
      function () { flash(root.lang === 'he' ? 'סמני והעתיקי ידנית' : 'Select and copy manually'); }
    );
  });

  /* ---------- Sticky mobile CTA appears after the hero ---------- */
  var sticky = document.querySelector('.sticky-cta');
  if (sticky) {
    var onScroll = function () { sticky.classList.toggle('on', window.scrollY > window.innerHeight * 0.8); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }
})();
