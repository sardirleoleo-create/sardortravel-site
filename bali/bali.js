(function () {
  var TG = 'ds_sardor', main = document.getElementById('main');
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function rp(n) { return n.toLocaleString('ru-RU').replace(/,/g, ' ') + ' IDR'; }
  function minP(t) { return Math.min.apply(null, t.v.map(function (v) { return v[2]; })); }
  function byId(id) { return TOURS.filter(function (t) { return t.id === id; })[0]; }

  /* партнёрская метка ?utm=xxx → #p_xxx в первой строке сообщения (как на основном сайте) */
  var KEY = 'booking_utm', RE = /^[a-z0-9_-]{1,64}$/i, MEM = '';
  (function () { var u = ''; try { u = new URLSearchParams(location.search).get('utm') || ''; } catch (e) {}
    if (u && RE.test(u)) { MEM = u; try { localStorage.setItem(KEY, u); } catch (e) {} try { document.cookie = KEY + '=' + u + ';path=/;max-age=7776000;SameSite=Lax'; } catch (e) {} } })();
  function tag() { var u = MEM; if (!u) try { u = localStorage.getItem(KEY) || ''; } catch (e) {}
    if (!u) try { var m = document.cookie.match(/(?:^|; )booking_utm=([^;]+)/); u = m ? m[1] : ''; } catch (e) {}
    return RE.test(u) ? '#p_' + u.toLowerCase() : ''; }
  function tg(text) { var g = tag(); text = (text || 'Здравствуйте! Хочу экскурсию на Бали.').replace(/…/g, '...');
    if (g) { var i = text.indexOf('\n'); text = i < 0 ? text + ' ' + g : text.slice(0, i) + ' ' + g + text.slice(i); }
    return 'https://t.me/' + TG + '?text=' + encodeURIComponent(text); }
  function wa(text) { return tg(text).replace('https://t.me/' + TG + '?text=', 'https://wa.me/66617843046?text='); }
  function fixTg() { document.querySelectorAll('[data-tg]').forEach(function (a) { a.href = tg(''); }); }

  function card(t) {
    return '<a class="card" href="#/t/' + t.id + '"><div class="card__img"><img src="' + IMG(t.img) + '" alt="' + esc(t.name) + '" loading="lazy">' +
      (t.hit ? '<span class="badge">Хит</span>' : '') + '<span class="price">от ' + rp(minP(t)) + '</span></div>' +
      '<div class="card__b"><h3>' + esc(t.name) + '</h3><p>' + esc(t.dur) + ' · ' + esc(CATS.filter(function (c) { return c.id === t.cat; })[0].ru) + '</p></div></a>';
  }
  function home(cat) {
    document.title = 'Экскурсии на Бали — Sardor Travel';
    var list = TOURS.filter(function (t) { return !cat || t.cat === cat; });
    main.innerHTML = '<section class="hero"><img class="hero__img" src="' + IMG('cc37fa76-8d5c-452d-84ab-f5241283c02b.d8295f2ac49a4d9be48e9ebacce3ef0e.webp') + '" alt="">' +
      '<div class="wrap hero__in"><h1>Экскурсии <em>на Бали</em></h1><p>Убуд и храмы, Нуса Пенида, рассвет на вулкане, Гили, Комодо и китовые акулы. Русскоговорящие гиды, бронь в Telegram.</p>' +
      '<ul class="facts"><li>' + TOURS.filter(function (t) { return t.cat !== 'transport'; }).length + ' программ</li><li>Групповые и индивидуальные</li><li>Предоплата от 50%</li></ul></div></section>' +
      '<div class="wrap"><div class="chips">' + [{ id: '', ru: 'Все' }].concat(CATS).map(function (c) {
        return '<button class="chip" data-cat="' + c.id + '" aria-pressed="' + ((cat || '') === c.id) + '">' + esc(c.ru) + '</button>'; }).join('') + '</div>' +
      '<section class="sec"><div class="grid">' + list.map(card).join('') + '</div></section></div>';
    main.querySelectorAll('[data-cat]').forEach(function (b) { b.onclick = function () { home(b.getAttribute('data-cat')); }; });
  }
  function tour(t) {
    document.title = t.name + ' — экскурсия на Бали — Sardor Travel';
    var sel = 0;
    main.innerHTML = '<div class="t-hero"><img src="' + IMG(t.img) + '" alt="' + esc(t.name) + '"></div><div class="wrap">' +
      '<a class="back" href="#/">← Все экскурсии на Бали</a><div class="t-head"><h1>' + esc(t.name) + '</h1><div class="meta">' + esc(t.dur) + ' · от ' + rp(minP(t)) + '</div></div>' +
      '<div class="t-grid"><div><div class="box"><p style="margin:0">' + esc(t.sum) + '</p>' + (t.note ? '<p class="small">' + esc(t.note) + '</p>' : '') + '</div>' +
      '<div class="box"><h2>Программа</h2><ol class="route">' + t.route.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ol></div>' +
      '<div class="box cols"><div><h2>Включено</h2><ul class="ticks">' + t.inc.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></div>' +
      (t.exc.length ? '<div><h2>Не включено</h2><ul class="ticks ticks--no">' + t.exc.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></div>' : '') + '</div>' +
      '<div class="box"><h2>Оплата и отмена</h2><p class="small" style="margin:0">' + esc(t.terms || TERMS) + '</p></div></div>' +
      '<aside class="box book"><h2>Варианты и цены</h2><div id="opts">' + t.v.map(function (v, i) {
        return '<label class="opt" data-on="' + (i === 0 ? 1 : 0) + '"><input type="radio" name="v" value="' + i + '"' + (i === 0 ? ' checked' : '') + '><span><span class="opt__n">' + esc(v[0]) + '</span><br><span class="opt__s">' + esc(v[1]) + '</span></span><span class="opt__p">' + rp(v[2]) + '</span></label>'; }).join('') + '</div>' +
      '<div class="field"><label>Дата<input type="date" id="d"></label><label>Гостей<input type="number" id="n" min="1" value="2"></label></div>' +
      '<a class="btn" id="go" target="_blank" rel="noopener">Забронировать в Telegram</a><a class="btn btn--wa" id="gowa" target="_blank" rel="noopener">Забронировать в WhatsApp</a><p class="small">Менеджер в Telegram или WhatsApp подтвердит наличие мест и пришлёт детали.</p></aside></div></div>';
    function upd() {
      var v = t.v[sel], d = main.querySelector('#d').value, n = main.querySelector('#n').value;
      var bm = 'Здравствуйте! Хочу забронировать ' + (t.cat === 'transport' ? '' : 'экскурсию ') + 'на Бали «' + t.name + '».\nВариант: ' + v[0] + ' — ' + rp(v[2]) + '\nДата: ' + (d ? d.split('-').reverse().join('.') : '...') + '\nГостей: ' + (n || '...') + '\nОтель: ...'; main.querySelector('#go').href = tg(bm); main.querySelector('#gowa').href = wa(bm);
    }
    main.querySelectorAll('.opt input').forEach(function (r) { r.onchange = function () { sel = +r.value; main.querySelectorAll('.opt').forEach(function (o, i) { o.setAttribute('data-on', i === sel ? 1 : 0); }); upd(); }; });
    main.querySelector('#d').oninput = upd; main.querySelector('#n').oninput = upd; upd();
  }
  function route() {
    var h = location.hash.replace(/^#\/?/, ''), m = h.match(/^t\/([\w-]+)/), t = m && byId(m[1]);
    if (t) tour(t); else home('');
    window.scrollTo(0, 0); fixTg();
  }
  window.addEventListener('hashchange', route); route();
})();
