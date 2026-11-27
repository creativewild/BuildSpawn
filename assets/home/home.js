/* Buildspawn product page: theme toggle (shared with the guide), tabs and picture zoom. */
(function () {
  var html = document.documentElement;

  // Theme. The early script in <head> has already set data-theme; this paints the button and handles clicks.
  var btn = document.getElementById('theme');
  var SUN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>';
  function paint() {
    var dark = html.getAttribute('data-theme') === 'dark';
    btn.innerHTML = dark ? SUN : MOON;
    btn.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
  }
  if (btn) {
    paint();
    btn.addEventListener('click', function () {
      var t = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', t);
      paint();
      try { localStorage.setItem('bs-theme', t); } catch (e) {}
    });
  }

  // Tabs: [role=tablist] with [role=tab] buttons whose aria-controls names a [role=tabpanel].
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t, false); });
      t.addEventListener('keydown', function (e) {
        var vertical = list.getAttribute('aria-orientation') === 'vertical';
        var next = vertical ? 'ArrowDown' : 'ArrowRight', prev = vertical ? 'ArrowUp' : 'ArrowLeft';
        var j = null;
        if (e.key === next) j = (i + 1) % tabs.length;
        else if (e.key === prev) j = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') j = 0;
        else if (e.key === 'End') j = tabs.length - 1;
        if (j !== null) { e.preventDefault(); select(tabs[j], true); }
      });
    });
  });

  // Picture zoom: click a screenshot to see it full size. Close with the Close button or Esc.
  var zoom = document.getElementById('zoom');
  var zimg = zoom.querySelector('img'), zcap = zoom.querySelector('p'), zclose = zoom.querySelector('button');
  var lastFocus = null;
  function open(img) {
    lastFocus = img;
    zimg.src = img.currentSrc || img.src;
    zimg.alt = img.alt;
    zcap.textContent = img.alt;
    zoom.classList.add('open');
    zclose.focus();
  }
  function close() {
    zoom.classList.remove('open');
    if (lastFocus) lastFocus.focus();
  }
  document.querySelectorAll('img[data-zoom]').forEach(function (img) {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.addEventListener('click', function () { open(img); });
    img.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); } });
  });
  zclose.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && zoom.classList.contains('open')) close(); });
})();
