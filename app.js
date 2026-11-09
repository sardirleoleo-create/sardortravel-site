(function () {
  'use strict';
  var TG = 'ds_sardor';
  var HASH = !!window.HASH_MODE;
  var T = {
    ru: {
      title: 'Sardor Travel — экскурсии в Таиланде',
      nav_catalog: 'Все экскурсии', nav_fav: 'Избранное', nav_contact: 'Связаться', chat: 'Чат с менеджером',
      footer_text: 'Экскурсии в Таиланде. Бронь и вопросы — менеджеру в Telegram, поддержка 24/7.',
      footer_soon: 'Новые страны — скоро',
      hero_h1: 'Экскурсии <em>от своих людей</em> на месте',
      hero_lead: 'Острова, джунгли и драйв в Таиланде. Выберите программу — менеджер подтвердит бронь в Telegram.',
      search_ph: 'Город или экскурсия', search_btn: 'Найти', search_label: 'Поиск экскурсий',
      soon: 'скоро', soon_country: 'Страна', destinations: 'Направления',
      cat_sea: 'Острова', cat_jungle: 'Джунгли', cat_drive: 'Драйв', cat_overnight: 'С ночёвкой', cat_show: 'Шоу и клубы', cat_city: 'Города и страны', cat_all: 'Все',
      popular: 'Популярное', all_n: 'Все {n}', all_btn: 'Смотреть все {n} экскурсий',
      early_h: 'Ранний выезд — меньше людей', early_p: 'Выезжаем до основного потока туристов: пустые пляжи и мягкий свет для фото.',
      overnight_h: 'С ночёвкой на островах', recent: 'Вы смотрели',
      why: 'Почему с нами удобно',
      w1: 'Свои люди на Пхукете', w1p: 'Команда живёт на острове и знает каждую программу изнутри.',
      w2: 'Поддержка 24/7', w2p: 'Пишите в Telegram в любое время — до, во время и после поездки.',
      w3: 'Трансфер из отеля', w3p: 'В большинстве программ забираем и привозим обратно. Время подтвердит менеджер.',
      w4: 'Без шопинга', w4p: 'Программы без навязанных заездов в магазины.',
      how: 'Как забронировать',
      s1: 'Выберите экскурсию', s1p: 'Дата и количество гостей — прямо на странице.',
      s2: 'Нажмите «Забронировать»', s2p: 'Откроется Telegram с готовым сообщением менеджеру.',
      s3: 'Получите подтверждение', s3p: 'Менеджер подтвердит место, время трансфера и итоговую цену.',
      faq: 'Частые вопросы',
      q1: 'Как оплатить экскурсию?', a1: 'После подтверждения менеджер пришлёт в Telegram удобные способы оплаты. Онлайн-оплата картой на сайте появится скоро.',
      q2: 'Забирают ли из отеля?', a2: 'Во многих программах трансфер включён — смотрите блок «Что включено» на странице экскурсии. Точное время забора подтвердит менеджер.',
      q3: 'Можно с детьми?', a3: 'Да, на большинство программ. Цену для детей и ограничения по возрасту подскажет менеджер — укажите возраст детей при брони.',
      q4: 'На каком языке гид?', a4: 'Во многих программах гид русскоязычный — это указано в «Что включено». Если нужен английский, напишите менеджеру.',
      q5: 'Какие условия отмены?', a5: 'Условия — по правилам операторов и указаны на странице каждой экскурсии. Для однодневных: больше чем за 3 дня — штраф 1 000 ฿ с человека, меньше чем за 3 дня — 50%, после 17:00 накануне — 100%. Для двухдневок и Симилан условия строже. Если экскурсию отменяет оператор (например, из-за погоды), предложим другую дату или вернём деньги полностью.',
      not_found_q: 'Не нашли подходящее? Напишите даты и пожелания — подберём сами.',
      write: 'Написать менеджеру',
      catalog_h1: 'Экскурсии в Таиланде', found: 'Найдено: {n}', nothing: 'Ничего не нашлось. Попробуйте другой запрос или напишите менеджеру — подберём.',
      sort: 'Сортировка', sort_pop: 'Сначала популярные', sort_cheap: 'Сначала дешевле', sort_exp: 'Сначала дороже',
      dur: 'Длительность', dur_any: 'Любая', dur_short: 'До обеда', dur_day: 'Весь день', dur_multi: '2 дня', reset: 'Сбросить',
      fav_h1: 'Избранное', fav_empty: 'Пока пусто. Нажмите на сердечко у экскурсии, чтобы сохранить её здесь.',
      fav_add: 'В избранное', fav_remove: 'Убрать из избранного',
      from: 'от', per_adult: 'за взрослого',
      b_rus: 'Русский гид', b_transfer: 'Трансфер', b_meal: 'Обед', b_early: 'Ранний выезд', hit: 'Хит',
      thailand: 'Таиланд', back: 'Назад',
      booking: 'Бронирование', date: 'Дата', other_date: 'Другая дата', adults: 'Взрослые', kids: 'Дети',
      kids_price: 'цену подскажет менеджер', total: 'Итого', total_kids: '+ дети по цене менеджера',
      book: 'Забронировать', book_note: 'Сейчас бронь подтверждает менеджер в Telegram. Онлайн-оплата картой — скоро.',
      highlights: 'Главное', program: 'Программа', included: 'Что включено', inc_ask: 'Состав услуг уточните у менеджера.',
      bring: 'Что взять с собой', similar: 'Похожие экскурсии', share: 'Поделиться', copied: 'Ссылка скопирована',
      ask: 'Есть вопрос по программе? Напишите — ответим в чате.', ask_btn: 'Спросить менеджера',
      wd: ['вс','пн','вт','ср','чт','пт','сб'],
      msg: 'Здравствуйте! Хочу забронировать экскурсию «{name}».\nДата: {date}\nВзрослых: {a}\nДетей: {k}\nОтель: …',
      msg_unit: 'Здравствуйте! Хочу забронировать «{name}».\nДата: {date}\n{u}: {q}\nОтель: …',
      msg_q: 'Здравствуйте! Вопрос по экскурсии «{name}»: ',
      msg_general: 'Здравствуйте! Хочу подобрать экскурсию. Даты: … Гостей: … Отель: …',
      not_selected: 'не выбрана', not_found_tour: 'Такой экскурсии нет. Возможно, ссылка устарела.', to_home: 'На главную',
      bring_sea: ['Купальник и полотенце', 'Солнцезащитный крем и головной убор', 'Наличные на личные расходы', 'Непромокаемый чехол для телефона'],
      bring_jungle: ['Удобная закрытая обувь', 'Сменная одежда', 'Репеллент и солнцезащитный крем', 'Наличные на личные расходы'],
      bring_overnight: ['Вещи на ночь и зарядка', 'Паспорт для заселения в отель', 'Купальник и солнцезащитный крем', 'Наличные на личные расходы'],
      bring_city: ['Удобная обувь', 'Одежда, закрывающая плечи и колени, — для храмов', 'Головной убор и вода', 'Наличные на личные расходы']
    },
    en: {
      title: 'Sardor Travel — tours in Thailand',
      nav_catalog: 'All tours', nav_fav: 'Saved', nav_contact: 'Contact', chat: 'Chat with us',
      footer_text: 'Tours in Thailand. Bookings and questions — chat with our manager on Telegram, 24/7 support.',
      footer_soon: 'New countries coming soon',
      hero_h1: 'Tours <em>by locals</em> who live here',
      hero_lead: 'Islands, jungle and thrills in Thailand. Pick a tour — our manager confirms your booking on Telegram.',
      search_ph: 'City or tour', search_btn: 'Search', search_label: 'Search tours',
      soon: 'soon', soon_country: 'Country', destinations: 'Destinations',
      cat_sea: 'Islands', cat_jungle: 'Jungle', cat_drive: 'Thrills', cat_overnight: 'Overnight', cat_show: 'Shows & clubs', cat_city: 'Cities & countries', cat_all: 'All',
      popular: 'Popular', all_n: 'All {n}', all_btn: 'See all {n} tours',
      early_h: 'Early starts, fewer people', early_p: 'We leave before the main tourist wave: empty beaches and soft light for photos.',
      overnight_h: 'Overnight on the islands', recent: 'Recently viewed',
      why: 'Why book with us',
      w1: 'Locals in Phuket', w1p: 'Our team lives on the island and knows every tour inside out.',
      w2: '24/7 support', w2p: 'Message us on Telegram any time — before, during and after your trip.',
      w3: 'Hotel pick-up', w3p: 'Most tours include pick-up and drop-off. The manager confirms the time.',
      w4: 'No shopping stops', w4p: 'Tours without forced stops at shops.',
      how: 'How to book',
      s1: 'Choose a tour', s1p: 'Pick the date and number of guests right on the page.',
      s2: 'Tap “Book now”', s2p: 'Telegram opens with a ready message to our manager.',
      s3: 'Get confirmation', s3p: 'The manager confirms your spot, pick-up time and final price.',
      faq: 'FAQ',
      q1: 'How do I pay?', a1: 'Once your booking is confirmed, the manager sends payment options on Telegram. Online card payment on the site is coming soon.',
      q2: 'Do you pick up from hotels?', a2: 'Many tours include hotel transfer — see “What’s included” on the tour page. The manager confirms the pick-up time.',
      q3: 'Can I bring children?', a3: 'Yes, on most tours. The manager will tell you the child price and any age limits — mention the children’s ages when booking.',
      q4: 'What language is the guide?', a4: 'Many tours have a Russian-speaking guide — see “What’s included”. If you need English, message our manager.',
      q5: 'What are the cancellation terms?', a5: 'Terms follow our operators’ rules and are shown on each tour page. Day trips: more than 3 days before — 1,000 ฿ per person, less than 3 days — 50%, after 17:00 the day before — 100%. Overnight tours and the Similans have stricter terms. If the operator cancels (for example, due to weather), we offer another date or a full refund.',
      not_found_q: 'Can’t find what you need? Send us your dates and wishes — we’ll suggest options.',
      write: 'Message a manager',
      catalog_h1: 'Tours in Thailand', found: 'Found: {n}', nothing: 'Nothing found. Try another search or message our manager.',
      sort: 'Sort', sort_pop: 'Most popular', sort_cheap: 'Price: low to high', sort_exp: 'Price: high to low',
      dur: 'Duration', dur_any: 'Any', dur_short: 'Morning / half day', dur_day: 'Full day', dur_multi: '2 days', reset: 'Reset',
      fav_h1: 'Saved', fav_empty: 'Nothing here yet. Tap the heart on a tour to save it.',
      fav_add: 'Save', fav_remove: 'Remove from saved',
      from: 'from', per_adult: 'per adult',
      b_rus: 'Russian guide', b_transfer: 'Transfer', b_meal: 'Lunch', b_early: 'Early start', hit: 'Top',
      thailand: 'Thailand', back: 'Back',
      booking: 'Booking', date: 'Date', other_date: 'Other date', adults: 'Adults', kids: 'Children',
      kids_price: 'price on request', total: 'Total', total_kids: '+ children, price on request',
      book: 'Book now', book_note: 'For now our manager confirms bookings on Telegram. Online card payment is coming soon.',
      highlights: 'Highlights', program: 'Itinerary', included: 'What’s included', inc_ask: 'Ask our manager for the list of inclusions.',
      bring: 'What to bring', similar: 'You might also like', share: 'Share', copied: 'Link copied',
      ask: 'Questions about the tour? Message us — we reply in the chat.', ask_btn: 'Ask a manager',
      wd: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      msg: 'Hello! I’d like to book the tour “{name}”.\nDate: {date}\nAdults: {a}\nChildren: {k}\nHotel: …',
      msg_unit: 'Hello! I’d like to book “{name}”.\nDate: {date}\n{u}: {q}\nHotel: …',
      msg_q: 'Hello! A question about “{name}”: ',
      msg_general: 'Hello! I’d like help choosing a tour. Dates: … Guests: … Hotel: …',
      not_selected: 'not selected', not_found_tour: 'This tour doesn’t exist. The link may be out of date.', to_home: 'Home',
      bring_sea: ['Swimwear and towel', 'Sunscreen and a hat', 'Cash for personal expenses', 'Waterproof phone pouch'],
      bring_jungle: ['Comfortable closed shoes', 'A change of clothes', 'Insect repellent and sunscreen', 'Cash for personal expenses'],
      bring_overnight: ['Overnight things and a charger', 'Passport for hotel check-in', 'Swimwear and sunscreen', 'Cash for personal expenses'],
      bring_city: ['Comfortable shoes', 'Clothes covering shoulders and knees — for temples', 'A hat and water', 'Cash for personal expenses']
    }
  };

  var ICONS = {
    sea: '<path d="M2 18c3 0 3-2 6-2s3 2 6 2 3-2 6-2M12 3v10M12 3l6 7H6z"/>',
    jungle: '<path d="M12 21V11M7 14l5-9 5 9z"/>',
    drive: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    overnight: '<path d="M20 15A8 8 0 1 1 9 4a6 6 0 0 0 11 11z"/>',
    show: '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>',
    city: '<path d="M4 21V9l6-4v16M10 21h10V11l-6-3"/>',
    all: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
    share: '<path d="M4 12v8h16v-8M12 3v13M7 8l5-5 5 5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>', clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    bus: '<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M8 21v-4M16 21v-4"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
    nobag: '<path d="M6 8h12l-1 12H7zM9 8a3 3 0 0 1 6 0M4 4l16 16"/>'
  };
  var CATS = ['sea', 'jungle', 'drive', 'overnight', 'show', 'city', 'all'];
  var DUR = { 'jetski': 'short', 'fishing': 'short', 'phuket': 'short', 'sunrise': 'short', 'early-phi-phi': 'short', 'early-krabi': 'short', 'phi-phi-2day': 'multi', 'five-pearls': 'multi', 'four-pearls': 'multi', 'khaosok-2day': 'multi', 'kuala-lumpur': 'multi', 'singapore': 'multi', 'jetski-tsa': 'short', 'jetski-kb': 'short', 'jetski-pattaya': 'short', 'yona-morning': 'short', 'yona-evening': 'short', 'krabi-4-islands': 'short', 'sunrise-adventure': 'short', 'carnival-magic': 'short', 'fantasea': 'short', 'hanuman-world': 'short', 'erawan-zipline': 'short', 'paraglide': 'short', 'plane-flight': 'short' };
  var EARLY = ['early-phi-phi', 'early-krabi', 'sunrise', 'similan', 'phi-phi-paradise-early', 'la-phangnga-hong', 'sunrise-adventure'];
  /* ограничения — из регламента «Ограничения по возрасту и здоровью» */
  var LIMITS = {
    ru: {
      jetski: ['Пассажиром — с 5 лет', 'Самостоятельно за рулём — с 17 лет', 'Цена за гидроцикл: до 2 взрослых + 1 ребёнок до 10 лет, общий вес до 200 кг', 'Беременным нельзя'],
      'rafting-atv': ['Рафтинг — с 7 лет или рост от 110 см', 'Квадроцикл за рулём — с 17 лет, пассажиром — с 7 лет'],
      rafting: ['Рафтинг — с 7 лет или рост от 110 см'],
      avatar: ['Рафтинг — с 7 лет или рост от 110 см', 'Квадроцикл за рулём — с 17 лет, пассажиром — с 7 лет'],
      diving: ['Без сертификата — до 12 м', 'Дети до 8 лет — до 2 м, с 12 лет — полноценное погружение', 'Нельзя беременным и детям до 1 года'],
      similan: ['Дети до 3 лет не допускаются', 'С осторожностью: старше 60 лет и при хронических заболеваниях']
    },
    en: {
      jetski: ['Passengers from age 5', 'Driving yourself from age 17', 'Price per jet ski: up to 2 adults + 1 child under 10, total weight up to 200 kg', 'Not allowed during pregnancy'],
      'rafting-atv': ['Rafting from age 7 or height 110 cm+', 'ATV driver from 17, passenger from 7'],
      rafting: ['Rafting from age 7 or height 110 cm+'],
      avatar: ['Rafting from age 7 or height 110 cm+', 'ATV driver from 17, passenger from 7'],
      diving: ['Without certification — down to 12 m', 'Children under 8 — down to 2 m; from 12 — full dive', 'Not allowed during pregnancy or for children under 1'],
      similan: ['Children under 3 are not allowed', 'Take care if over 60 or with chronic conditions']
    }
  };

  if (window.LIMITS_EXTRA) ['ru', 'en'].forEach(function (lg) { Object.keys(window.LIMITS_EXTRA[lg]).forEach(function (k) { LIMITS[lg][k] = (LIMITS[lg][k] || []).concat(window.LIMITS_EXTRA[lg][k]); }); });
  /* ---------- helpers ---------- */
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || 'null'); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  function getLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'ru' || q === 'en') { store('lang', q); return q; }
    var s = store('lang'); if (s === 'ru' || s === 'en') return s;
    var n = (navigator.language || 'ru').slice(0, 2).toLowerCase();
    return ['ru', 'uk', 'be', 'kk', 'uz', 'ky', 'tg', 'hy', 'az', 'ka'].indexOf(n) >= 0 ? 'ru' : 'en';
  }
  var lang = getLang();
  function t(k, v) { var s = (T[lang][k] != null ? T[lang][k] : T.ru[k]); if (v) Object.keys(v).forEach(function (x) { s = String(s).split('{' + x + '}').join(v[x]); }); return s; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ฿'; }
  function L(x) { return x[lang] || x.ru; }
  var BASE = HASH ? 'assets/' : '/assets/';
  function img(name) { return BASE + name + '.webp'; }
  /* ---------- партнёрская метка (?utm=xxx → #p_xxx в сообщении, как на старом сайте; CRM читает хэштег) ---------- */
  var UTM_KEY = 'booking_utm', UTM_RE = /^[a-z0-9_-]{1,64}$/i;
  var UTM_MEM = '';
  (function () {
    var u = ''; try { u = new URLSearchParams(location.search).get('utm') || ''; } catch (e) {}
    if (u && UTM_RE.test(u)) {
      UTM_MEM = u;
      try { localStorage.setItem(UTM_KEY, u); } catch (e) {}
      try { sessionStorage.setItem(UTM_KEY, u); } catch (e) {}
      try { document.cookie = UTM_KEY + '=' + u + ';path=/;max-age=7776000;SameSite=Lax'; } catch (e) {}
    }
  })();
  function utmGet() {
    if (UTM_MEM) return UTM_MEM;
    var u = '';
    try { u = localStorage.getItem(UTM_KEY) || ''; } catch (e) {}
    if (!u) try { u = sessionStorage.getItem(UTM_KEY) || ''; } catch (e) {}
    if (!u) try { var m = document.cookie.match(/(?:^|; )booking_utm=([^;]+)/); u = m ? m[1] : ''; } catch (e) {}
    return UTM_RE.test(u) ? (UTM_MEM = u) : '';
  }
  function utmTag() { var u = utmGet(); return u ? '#p_' + u.toLowerCase() : ''; }
  function tagText(text) {
    text = (text || '').replace(/\u2026/g, '...');
    var g = utmTag(); if (!g) return text;
    if (!text) return 'Здравствуйте! Хочу экскурсии ' + g;
    text = text.replace(/\s*#p_[a-z0-9_-]+/ig, '');
    var i = text.indexOf('\n'); return i < 0 ? text + ' ' + g : text.slice(0, i) + ' ' + g + text.slice(i);
  }
  function tg(text) { text = tagText(text); return 'https://t.me/' + TG + (text ? '?text=' + encodeURIComponent(text) : ''); }
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest && ev.target.closest('a[href*="t.me/' + TG + '"]'); if (!a || !utmTag()) return;
    try { var url = new URL(a.href); a.href = tg(url.searchParams.get('text') || ''); } catch (e) {}
  }, true);
  function icon(c, size) { return '<svg aria-hidden="true" width="' + (size || 24) + '" height="' + (size || 24) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICONS[c] + '</svg>'; }
  function href(path, params) { var qs = params && params.toString() ? '?' + params.toString() : ''; return (HASH ? '#' : '') + path + qs; }
  function byId(id) { return TOURS.filter(function (z) { return z.id === id; })[0]; }
  function region(id) { return REGIONS.filter(function (z) { return z.id === id; })[0]; }
  function badges(x) {
    var inc = x.ru.inc.join(' ').toLowerCase(), out = [];
    if (/русск|русский/.test(inc)) out.push('b_rus');
    if (/трансфер|транспорт/.test(inc)) out.push('b_transfer');
    if (EARLY.indexOf(x.id) >= 0) out.push('b_early');
    else if (/обед/.test(inc)) out.push('b_meal');
    return out;
  }
  function bringList(x) { var c = x.cats.indexOf('overnight') >= 0 ? 'overnight' : x.cats.indexOf('city') >= 0 ? 'city' : x.cats.indexOf('sea') >= 0 ? 'sea' : 'jungle'; return t('bring_' + c); }
  var favs = store('favs') || [];
  function isFav(id) { return favs.indexOf(id) >= 0; }
  function toggleFav(id) { favs = isFav(id) ? favs.filter(function (z) { return z !== id; }) : favs.concat(id); store('favs', favs); updateFavCount(); }
  function updateFavCount() { var el = document.getElementById('fav-count'); if (el) { el.textContent = favs.length; el.hidden = !favs.length; } }
  function pushRecent(id) { var r = (store('recent') || []).filter(function (z) { return z !== id && byId(z); }); r.unshift(id); store('recent', r.slice(0, 8)); }
  function toast(msg) { var el = document.getElementById('toast'); el.textContent = msg; el.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(function () { el.hidden = true; }, 2200); }
  var main = document.getElementById('main');

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'); });
    document.querySelectorAll('[data-href]').forEach(function (a) { a.setAttribute('href', href(a.getAttribute('data-href'))); });
    document.getElementById('chatfab').href = tg(t('msg_general'));
    document.getElementById('year').textContent = new Date().getFullYear();
    updateFavCount();
  }

  /* ---------- pieces ---------- */
  function card(x) {
    var l = L(x), fav = isFav(x.id);
    return '<article class="card"><a class="card__link" href="' + href('/tour/' + x.id) + '">' +
      '<div class="card__img"><img src="' + img(x.img) + '" alt="' + esc(l.name) + '" loading="lazy" width="400" height="400">' +
      (x.hit ? '<span class="hit">' + t('hit') + '</span>' : '') +
      '<span class="price-tag">' + t('from') + ' ' + fmt(x.price) + '</span></div>' +
      '<div class="card__body"><span class="card__title">' + esc(l.name) + '</span><span class="card__meta">' + esc(l.place) + ' · ' + esc(l.duration) + '</span>' +
      (revsFor(x.id).length ? '<span class="card__rev">' + icon('chat', 14) + revCount(revsFor(x.id).length) + '</span>' : '') +
      '<span class="badges">' + badges(x).slice(0, 2).map(function (b) { return '<span class="badge">' + t(b) + '</span>'; }).join('') + '</span></div></a>' +
      '<button type="button" class="fav" data-fav="' + x.id + '" aria-pressed="' + fav + '" aria-label="' + (fav ? t('fav_remove') : t('fav_add')) + '">' + icon('heart', 20) + '</button></article>';
  }
  var MONTHS = { ru: ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'], en: ['January','February','March','April','May','June','July','August','September','October','November','December'] };
  function revsFor(id) { var n = (window.REV_COUNT || {})[id] || 0; return { length: n }; }
  function revCount(n) { if (lang === 'en') return n + (n === 1 ? ' review' : ' reviews'); var m10 = n % 10, m100 = n % 100; return n + ' ' + (m10 === 1 && m100 !== 11 ? 'отзыв' : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? 'отзыва' : 'отзывов'); }
  function homeReviews() { var seen = {}, out = []; (window.REVIEWS || []).forEach(function (r) { var k = r.tour || 'x' + r.msg; if (r.msg !== 11578 && !seen[k] && out.length < 4) { seen[k] = 1; out.push(r); } }); return out; }
  function review(r, withTour) {
    var p = r.date.split('-'), when = MONTHS[lang][+p[1] - 1] + ' ' + p[0], tr = r.tour ? byId(r.tour) : null;
    var guest = r.name === 'Гость из чата', nm = guest && lang === 'en' ? 'Guest from our chat' : r.name;
    var C = window.REVIEWS_CHAT || {}, link = C.url && r.msg ? C.url + '/' + r.msg : '';
    var initial = guest ? '' : esc(r.name.charAt(0));
    return '<figure class="review" data-msg="' + (r.msg || '') + '">' +
      '<figcaption class="review__head"><span class="review__ava' + (guest ? ' review__ava--guest' : '') + '" aria-hidden="true">' + (initial || icon('chat', 16)) + '</span>' +
        '<span class="review__who"><strong>' + esc(nm) + '</strong><span>' + when + (lang === 'en' ? ' · in Russian' : '') + '</span></span>' +
        '<span class="review__tg" title="Telegram">' + TG_ICON + '</span></figcaption>' +
      '<blockquote>' + esc(r.text) + '</blockquote>' +
      '<div class="review__foot">' + (withTour && tr ? '<a href="' + href('/tour/' + tr.id) + '">' + esc(L(tr).name) + '</a>' : '<span></span>') +
        (link ? '<a class="review__src" href="' + link + '" target="_blank" rel="noopener">' + (lang === 'ru' ? 'Оригинал в Telegram' : 'Original on Telegram') + ' ↗</a>' : '') + '</div></figure>';
  }
  var TG_ICON = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path d="M5.4 11.8l10.9-4.2c.5-.2 1 .1.8.9l-1.9 8.8c-.1.6-.5.8-1 .5l-2.8-2.1-1.4 1.3c-.2.2-.3.3-.6.3l.2-2.9 5.3-4.8c.2-.2 0-.3-.3-.1l-6.6 4.1-2.8-.9c-.6-.2-.6-.6.2-.8z" fill="#fff"/></svg>';
  /* отзывы в виде настоящего окна Telegram-чата (тёмная тема iOS) — данные настоящих сообщений (window.TG_MSGS) */
  var TG_AVA = ['#ff885e,#ff516a', '#ffcd6a,#ffa85c', '#82b1ff,#665fff', '#a0de7e,#54cb68', '#53edd6,#28c9b7', '#72d5fd,#2a9ef1', '#e0a2f3,#d669ed'];
  var TG_NAME = ['#FF8E86', '#FFA357', '#B18FFF', '#4DD6BF', '#45E8D1', '#7AC9FF', '#FF7FD5'];
  var PLAY = '<span class="tgm__play" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff"/></svg></span>';
  function tgTime(iso) { var d = new Date(new Date(iso).getTime() + 7 * 3600e3); return ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2); }
  function tgDay(iso) {
    var d = new Date(new Date(iso).getTime() + 7 * 3600e3);
    var mon = { ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'], en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] }[lang];
    return lang === 'ru' ? d.getUTCDate() + ' ' + mon[d.getUTCMonth()] : mon[d.getUTCMonth()] + ' ' + d.getUTCDate();
  }
  function plural(n, f) { var a = n % 10, b = n % 100; return f[a === 1 && b !== 11 ? 0 : a >= 2 && a <= 4 && (b < 10 || b >= 20) ? 1 : 2]; }
  /* одна запись отзыва: {i:id, n:имя, c:цвет, l:буква, a:есть аватар, t:время, r:реакции, x:текст, k:[экскурсии], g:{w,h,t:[[left,top,w,h,видео]]}, old:старые имена файлов} */
  function tgMsg(m, withTour, hideDay) {
    var C = window.REVIEWS_CHAT || {}, ru = lang === 'ru', A = BASE, id = m.i, link = C.url ? C.url + '/' + id : '';
    var tr = withTour && m.k && m.k.length ? byId(m.k[0]) : null;
    var fa = m.old ? 'rev-' + id + '-ava.webp' : 'r' + id + 'a.webp', fm = function (k) { return m.old ? 'rev-' + id + '-' + k + '.webp' : 'r' + id + '-' + k + '.webp'; };
    var ava = m.a ? '<img class="tgm__ava" src="' + A + fa + '" alt="" width="34" height="34" loading="lazy">' : '<span class="tgm__ava" style="background:linear-gradient(' + TG_AVA[m.c || 0] + ')" aria-hidden="true">' + esc((m.l || m.n.charAt(0) || '?').toUpperCase()) + '</span>';
    var media = '';
    if (m.g && m.g.t && m.g.t.length) {
      media = '<a class="tgm__album" href="' + link + '" target="_blank" rel="noopener" style="aspect-ratio:' + m.g.w + '/' + m.g.h + '" aria-label="' + (ru ? 'Фото и видео — открыть в Telegram' : 'Photos and videos — open on Telegram') + '">' + m.g.t.map(function (t, k) {
        var st = 'left:' + (t[0] / m.g.w * 100) + '%;top:' + (t[1] / m.g.h * 100) + '%;width:' + (t[2] / m.g.w * 100) + '%;height:' + (t[3] / m.g.h * 100) + '%';
        return '<span class="tgm__tile" style="' + st + '"><img src="' + A + fm(k) + '" alt="" loading="lazy">' + (t[4] ? PLAY + (t[4] !== 'v' ? '<span class="tgm__dur">' + esc(t[4]) + '</span>' : '') : '') + '</span>';
      }).join('') + '</a>';
    }
    var reacts = m.r && m.r.length ? '<span class="tgm__reacts">' + m.r.map(function (x) { var e = x.replace(/\d+$/, ''), n = x.slice(e.length); if (e === '❤') e = '❤️'; return '<span class="tgm__react"><i>' + esc(e) + '</i>' + n + '</span>'; }).join('') + '</span>' : '';
    var long = m.x.length > 360;
    return '<figure class="review tgm">' +
      (m.t && !hideDay ? '<span class="tgm__day">' + tgDay(m.t) + '</span>' : '') +
      '<div class="tgm__row">' + ava +
      '<div class="tgm__bubble' + (media ? ' has-media' : '') + '"><b class="tgm__name" style="color:' + TG_NAME[m.c || 0] + '">' + esc(m.n || (ru ? 'Гость' : 'Guest')) + '</b>' + media +
        '<div class="tgm__in"><blockquote class="tgm__text' + (long ? ' is-long' : '') + '">' + esc(m.x) + '</blockquote>' +
        (long ? '<button type="button" class="tgm__expand" data-expand>' + (ru ? 'Показать полностью' : 'Show more') + '</button>' : '') +
        '<div class="tgm__bottom">' + reacts + '<span class="tgm__meta">' + (m.t ? tgTime(m.t) : '') + '</span></div></div>' +
        '<svg class="tgm__tail" width="11" height="20" viewBox="0 0 11 20" aria-hidden="true"><path d="M11 0v20H0c4.5-1.6 8-5.4 9.3-10.2C10.4 6 11 3 11 0z" fill="currentColor"/></svg></div></div>' +
      '<div class="tgm__foot">' + (tr ? '<a class="tgm__chip" href="' + href('/tour/' + tr.id) + '">' + esc(L(tr).name) + ' →</a>' : '') +
        (link ? '<a class="tgm__src" href="' + link + '" target="_blank" rel="noopener">' + (ru ? 'Открыть в Telegram' : 'Open on Telegram') + ' ↗</a>' : '') + '</div></figure>';
  }
  function tgList(list, withTour) {
    return list.map(function (m, i) { var prev = i ? list[i - 1] : null; return tgMsg(m, withTour, prev && prev.t && m.t && tgDay(prev.t) === tgDay(m.t)); }).join('');
  }
  /* все отзывы из чата грузим отдельным файлом reviews.json, чтобы страница открывалась быстро */
  var REVS = null, revWait = [];
  function legacyRevs() {
    var M = window.TG_MSGS || {};
    return (window.REVIEWS || []).map(function (r) { var m = M[r.msg] || {}; return { i: r.msg, n: m.n || r.name, c: m.c, l: m.l, a: m.a, t: m.t, r: m.r || [], x: m.x || r.text, k: r.tour ? [r.tour] : [], g: m.g, old: 1 }; });
  }
  function loadRevs(cb) {
    if (REVS) return cb(REVS);
    revWait.push(cb); if (revWait.length > 1) return;
    var done = function (d) { d.sort(function (a, b) { return (b.t || '') < (a.t || '') ? -1 : 1; }); REVS = d; revWait.splice(0).forEach(function (f) { f(d); }); };
    if (HASH || !window.fetch) return done(legacyRevs());
    fetch('/reviews.json?v=' + (window.REV_VER || 1)).then(function (r) { return r.json(); }).then(done).catch(function () { done(legacyRevs()); });
  }
  function revsOf(all, tourId) { if (!tourId) return all; var own = all.filter(function (m) { return m.k && m.k.indexOf(tourId) >= 0; }), al = (window.REV_ALIAS || {})[tourId]; return own.length || !al ? own : all.filter(function (m) { return m.k && m.k.indexOf(al) >= 0; }); }
  function fillRevs(root) {
    root.querySelectorAll('[data-revs]').forEach(function (box) {
      var o = JSON.parse(box.getAttribute('data-revs'));
      loadRevs(function (all) {
        var list = revsOf(all, o.tour), ru = lang === 'ru';
        if (o.tour && !list.length) list = all.filter(function (m) { return !m.k || !m.k.length; });
        if (o.home) { var score = function (m) { return (m.r || []).reduce(function (s, x) { return s + (parseInt(x.replace(/\D+/g, ''), 10) || 0); }, 0) + (m.a ? 2 : 0); }; list = ['jetski', 'early-phi-phi', 'similan', 'five-pearls', 'avatar', 'krabi'].map(function (tid) { return all.filter(function (m) { return m.k && m.k[0] === tid && m.n && m.g && m.x.length >= 120 && m.x.length <= 700; }).sort(function (a, b) { return score(b) - score(a); })[0]; }).filter(Boolean).slice(0, 5); }
        var per = o.per || 8, page = o.page || 1, start = o.paged ? (page - 1) * per : 0, shown = o.paged ? list.slice(start, start + per) : list.slice(0, per);
        box.innerHTML = tgList(shown, o.withTour);
        var foot = box.parentNode.querySelector('.tgwin__more');
        if (!o.paged && !o.home && list.length > per) {
          var n = per;
          foot.innerHTML = '<button type="button" class="tgwin__morebtn">' + (ru ? 'Показать ещё отзывы' : 'Show more reviews') + ' · ' + (list.length - n) + '</button>';
          foot.querySelector('button').addEventListener('click', function () {
            var next = list.slice(n, n + per); box.insertAdjacentHTML('beforeend', tgList(next, o.withTour)); n += per;
            if (n >= list.length) foot.innerHTML = ''; else this.textContent = (ru ? 'Показать ещё отзывы' : 'Show more reviews') + ' · ' + (list.length - n);
          });
        }
        if (o.paged) {
          var pages = Math.ceil(list.length / per), cur = page, base = new URLSearchParams(); if (o.tour) base.set('tour', o.tour);
          var link = function (pg) { var q = new URLSearchParams(base.toString()); if (pg > 1) q.set('p', pg); return href('/reviews', q); };
          var nums = []; for (var i = 1; i <= pages; i++) if (i === 1 || i === pages || Math.abs(i - cur) <= 2) nums.push(i); else if (nums[nums.length - 1] !== '…') nums.push('…');
          foot.innerHTML = pages > 1 ? '<nav class="pager" aria-label="' + (ru ? 'Страницы' : 'Pages') + '">' + (cur > 1 ? '<a href="' + link(cur - 1) + '" aria-label="' + (ru ? 'Назад' : 'Previous') + '">‹</a>' : '') + nums.map(function (x) { return x === '…' ? '<span>…</span>' : '<a href="' + link(x) + '"' + (x === cur ? ' aria-current="page"' : '') + '>' + x + '</a>'; }).join('') + (cur < pages ? '<a href="' + link(cur + 1) + '" aria-label="' + (ru ? 'Вперёд' : 'Next') + '">›</a>' : '') + '</nav>' : '';
          var cnt = document.getElementById('rev-total'); if (cnt) cnt.textContent = revCount(list.length);
        }
        if (o.tour && !o.paged) { var c2 = document.getElementById('rev-count'); if (c2) c2.textContent = revCount(list.length); }
      });
    });
  }
  function tgWindow(opts) {
    var C = window.REVIEWS_CHAT; if (!C) return '';
    var sp = function (n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }, ru = lang === 'ru';
    var sub = ru ? sp(C.members) + ' ' + plural(C.members, ['участник', 'участника', 'участников']) + (C.online ? ', ' + sp(C.online) + ' в сети' : '') : sp(C.members) + ' members' + (C.online ? ', ' + sp(C.online) + ' online' : '');
    var A = BASE;
    return '<div class="tgwin">' +
      '<a class="tgwin__top" href="' + C.url + '" target="_blank" rel="noopener">' +
        '<span class="tgwin__pill tgwin__back"><svg width="12" height="20" viewBox="0 0 12 20" aria-hidden="true"><path d="M10 2 2 10l8 8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
        '<span class="tgwin__pill tgwin__title"><strong>' + esc(C.name) + '</strong><small>' + sub + '</small></span>' +
        '<img class="tgwin__ava" src="' + A + 'chat-ava.webp" alt="" width="44" height="44"></a>' +
      (C.pinned ? '<a class="tgwin__pin" href="' + C.url + '" target="_blank" rel="noopener"><i></i><img src="' + A + 'chat-ava.webp" alt="" width="34" height="34"><span><b>' + (ru ? 'Закреплённое сообщение' : 'Pinned message') + '</b><span>' + esc(C.pinned) + '</span></span></a>' : '') +
      '<div class="tgwin__body" data-revs=\'' + esc(JSON.stringify(opts)) + '\'><div class="tgwin__loading">' + (ru ? 'Загружаем сообщения из чата…' : 'Loading chat messages…') + '</div></div><div class="tgwin__more"></div>' +
      '<a class="tgwin__input" href="' + C.url + '" target="_blank" rel="noopener">' +
        '<span class="tgwin__circle"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5l-8.6 8.6a5.5 5.5 0 0 1-7.8-7.8l8.9-8.9a3.7 3.7 0 0 1 5.2 5.2l-8.9 8.9a1.8 1.8 0 0 1-2.6-2.6l8.2-8.2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg></span>' +
        '<span class="tgwin__field">' + (ru ? 'Сообщение' : 'Message') + '</span>' +
        '<span class="tgwin__circle"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg></span></a>' +
      '<a class="tgwin__cta" href="' + C.url + '" target="_blank" rel="noopener">' + (ru ? 'Открыть чат и прочитать все отзывы' : 'Open the chat and read every review') + ' ↗</a>' +
    '</div>';
  }
  function chatProof() {
    var C = window.REVIEWS_CHAT; if (!C) return '';
    var n = C.members.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return '<a class="proof" href="' + C.url + '" target="_blank" rel="noopener">' + TG_ICON.replace('width="18" height="18"', 'width="40" height="40"') +
      '<span><strong>' + esc(C.name) + '</strong><span>' + (lang === 'ru' ? 'Открытый чат гостей в Telegram · ' + n + ' участников. Все отзывы — там, с фото и видео.' : 'Open guest chat on Telegram · ' + n + ' members. All reviews are there, with photos and videos.') + '</span></span>' +
      '<span class="proof__btn">' + (lang === 'ru' ? 'Открыть чат' : 'Open chat') + ' ↗</span></a>';
  }
  /* на боевом сайте подгружаем настоящие сообщения из Telegram вместо текста */
  function liveReviews(root) {
    if (HASH || !('IntersectionObserver' in window)) return;
    var C = window.REVIEWS_CHAT; if (!C) return;
    var slug = C.url.split('/').pop();
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; io.unobserve(e.target);
        var fig = e.target, id = fig.getAttribute('data-msg'); if (!id) return;
        var box = document.createElement('div'); box.className = 'review__live';
        var s = document.createElement('script'); s.async = true; s.src = 'https://telegram.org/js/telegram-widget.js?22';
        s.setAttribute('data-telegram-post', slug + '/' + id); s.setAttribute('data-width', '100%'); s.setAttribute('data-userpic', 'false'); s.setAttribute('data-color', '123C3A');
        box.appendChild(s); fig.appendChild(box);
        var mo = new MutationObserver(function () { var f = box.querySelector('iframe'); if (f) { mo.disconnect(); f.addEventListener('load', function () { fig.classList.add('is-live'); }); } });
        mo.observe(box, { childList: true, subtree: true });
      });
    }, { rootMargin: '200px' });
    root.querySelectorAll('.revs .review[data-msg], .rail--rev .review[data-msg]').forEach(function (f) { io.observe(f); });
  }
  function grid(list) { return '<div class="grid">' + list.map(card).join('') + '</div>'; }
  function rail(list) { return '<div class="rail">' + list.map(card).join('') + '</div>'; }

  function stories(active) {
    var h = REGIONS.map(function (r) {
      var p = new URLSearchParams(); p.set('region', r.id);
      return '<a class="story" href="' + href('/catalog', p) + '"' + (active === r.id ? ' aria-current="true"' : '') + '><span class="story__ring"><img src="' + img(r.img) + '" alt="" loading="lazy" width="64" height="64"></span>' + esc(r[lang]) + '</a>';
    }).join('');
    h += '<span class="story story--soon"><span class="story__ring">' + t('soon') + '</span>' + t('soon_country') + '</span>';
    return '<div class="stories" aria-label="' + t('destinations') + '">' + h + '</div>';
  }
  function searchForm(q) {
    return '<form class="search" role="search" data-search><label><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#123C3A" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><span class="sr">' + t('search_label') + '</span><input type="search" id="q" name="q" value="' + esc(q || '') + '" placeholder="' + t('search_ph') + '" autocomplete="off" enterkeyhint="search"></label>' +
      '<button type="submit" aria-label="' + t('search_btn') + '"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>' + t('search_btn') + '</span></button></form>';
  }
  function head(title, more) { return '<div class="section__head"><h2 class="h2">' + title + '</h2>' + (more || '') + '</div>'; }
  function faq() {
    return '<section class="section"><h2 class="h2 mb">' + t('faq') + '</h2><div class="faq">' + [1, 2, 3, 4, 5].map(function (i) {
      return '<details><summary>' + t('q' + i) + '</summary><p>' + t('a' + i) + '</p></details>';
    }).join('') + '</div></section>';
  }
  function chatbox() { return '<div class="chatbox"><div class="bubble">' + t('not_found_q') + '</div><a class="btn btn--lime" href="' + tg(t('msg_general')) + '" target="_blank" rel="noopener">' + t('write') + '</a></div>'; }

  /* ---------- pages ---------- */
  function home() {
    var hits = TOURS.filter(function (x) { return x.hit; }).concat(TOURS.filter(function (x) { return !x.hit; })).slice(0, 8);
    var early = EARLY.map(byId).filter(Boolean);
    var over = TOURS.filter(function (x) { return x.cats.indexOf('overnight') >= 0; });
    var recent = (store('recent') || []).map(byId).filter(Boolean);
    var why = ['w1', 'w2', 'w3', 'w4'], whyIcon = ['pin', 'chat', 'bus', 'nobag'];
    main.innerHTML =
      '<section class="hero"><div class="wrap"><h1>' + t('hero_h1') + '</h1><p class="lead">' + t('hero_lead') + '</p>' + searchForm('') + stories() + '</div></section>' +
      '<div class="wrap">' +
      '<section class="section"><div class="cats">' + CATS.map(function (c) { var p = new URLSearchParams(); if (c !== 'all') p.set('cat', c); return '<a class="cat" href="' + href('/catalog', p) + '">' + icon(c) + t('cat_' + c) + '</a>'; }).join('') + '</div></section>' +
      (recent.length ? '<section class="section">' + head(t('recent')) + rail(recent) + '</section>' : '') +
      '<section class="section">' + head(t('popular'), '<a class="more" href="' + href('/catalog') + '">' + t('all_n', { n: TOURS.length }) + '</a>') + grid(hits) +
      '<a class="btn btn--ghost btn-all" href="' + href('/catalog') + '">' + t('all_btn', { n: TOURS.length }) + '</a></section>' +
      '<section class="section promo"><div class="promo__text"><h2 class="h2">' + t('early_h') + '</h2><p>' + t('early_p') + '</p></div>' + rail(early) + '</section>' +
      '<section class="section">' + head(t('overnight_h')) + '<div class="grid grid--2">' + over.map(card).join('') + '</div></section>' +
      '<section class="section">' + head(lang === 'ru' ? 'Отзывы гостей' : 'Guest reviews', '<a class="more" href="' + href('/reviews') + '">' + (lang === 'ru' ? 'Все ' : 'All ') + revCount(window.REV_TOTAL || 0) + ' →</a>') + tgWindow({ home: 1, withTour: 1 }) + '<p class="revs-all"><a class="btn btn--ghost" href="' + href('/reviews') + '">' + (lang === 'ru' ? 'Читать все ' + revCount(window.REV_TOTAL || 0) : 'Read all ' + revCount(window.REV_TOTAL || 0)) + '</a></p></section>' +
      '<section class="section"><h2 class="h2 mb">' + t('why') + '</h2><div class="why">' + why.map(function (w, i) { return '<div class="why__item">' + icon(whyIcon[i], 26) + '<strong>' + t(w) + '</strong><p>' + t(w + 'p') + '</p></div>'; }).join('') + '</div></section>' +
      '<section class="section"><h2 class="h2 mb">' + t('how') + '</h2><ol class="steps">' +
      [1, 2, 3].map(function (i) { return '<li class="step"><b aria-hidden="true">' + i + '</b><div><strong>' + t('s' + i) + '</strong><p>' + t('s' + i + 'p') + '</p></div></li>'; }).join('') + '</ol>' + chatbox() + '</section>' +
      faq() + '</div>';
  }

  function catalog(params) {
    var cat = params.get('cat') || 'all', reg = params.get('region') || '', q = (params.get('q') || '').trim(),
      sort = params.get('sort') || 'pop', dur = params.get('dur') || 'any';
    var ql = q.toLowerCase();
    var list = TOURS.filter(function (x) {
      if (cat !== 'all' && x.cats.indexOf(cat) < 0) return false;
      if (reg && x.regions.indexOf(reg) < 0) return false;
      if (dur !== 'any' && (DUR[x.id] || 'day') !== dur) return false;
      if (ql) {
        var hay = [x.ru.name, x.en.name, x.ru.place, x.en.place, x.ru.desc, x.en.desc, x.ru.tag, x.en.tag].concat(x.ru.route, x.en.route, x.regions.map(function (r) { var R = region(r); return R ? R.ru + ' ' + R.en : r; })).join(' ').toLowerCase();
        if (ql.split(/\s+/).some(function (w) { return hay.indexOf(w) < 0; })) return false;
      }
      return true;
    });
    if (sort === 'cheap') list.sort(function (a, b) { return a.price - b.price; });
    else if (sort === 'exp') list.sort(function (a, b) { return b.price - a.price; });
    else list.sort(function (a, b) { return (b.hit ? 1 : 0) - (a.hit ? 1 : 0); });
    function link(over) {
      var s = { cat: cat, region: reg, q: q, sort: sort, dur: dur }; Object.keys(over).forEach(function (k) { s[k] = over[k]; });
      var p = new URLSearchParams(); if (s.cat && s.cat !== 'all') p.set('cat', s.cat); if (s.region) p.set('region', s.region); if (s.q) p.set('q', s.q); if (s.dur && s.dur !== 'any') p.set('dur', s.dur); if (s.sort && s.sort !== 'pop') p.set('sort', s.sort);
      return href('/catalog', p);
    }
    var R = reg ? region(reg) : null;
    var filtered = cat !== 'all' || reg || q || dur !== 'any';
    main.innerHTML =
      '<section class="page-head"><div class="wrap"><h1>' + (R ? esc(R[lang]) : t('catalog_h1')) + '</h1>' + searchForm(q) +
      '<div class="chips">' + CATS.map(function (c) { return '<a class="chip" href="' + link({ cat: c }) + '" aria-pressed="' + (c === cat) + '">' + t('cat_' + c) + '</a>'; }).join('') + '</div>' +
      stories(reg) + '</div></section>' +
      '<div class="wrap section"><div class="toolbar">' +
        '<p class="count">' + t('found', { n: list.length }) + (filtered ? ' · <a href="' + href('/catalog') + '">' + t('reset') + '</a>' : '') + '</p>' +
        '<div class="toolbar__ctrls"><label class="select"><span class="sr">' + t('dur') + '</span><select id="dur" data-param="dur">' + ['any', 'short', 'day', 'multi'].map(function (d) { return '<option value="' + d + '"' + (d === dur ? ' selected' : '') + '>' + (d === 'any' ? t('dur') + ': ' + t('dur_any') : t('dur_' + d)) + '</option>'; }).join('') + '</select></label>' +
        '<label class="select"><span class="sr">' + t('sort') + '</span><select id="sort" data-param="sort">' + ['pop', 'cheap', 'exp'].map(function (d) { return '<option value="' + d + '"' + (d === sort ? ' selected' : '') + '>' + t('sort_' + d) + '</option>'; }).join('') + '</select></label></div>' +
      '</div>' +
      (list.length ? grid(list) : '<div class="empty"><p>' + t('nothing') + '</p><a class="btn" href="' + tg(t('msg_general')) + '" target="_blank" rel="noopener">' + t('write') + '</a></div>') +
      chatbox() + '</div>';
    main.querySelectorAll('select[data-param]').forEach(function (s) {
      s.addEventListener('change', function () { var o = {}; o[s.dataset.param] = s.value; go(link(o)); });
    });
  }

  function reviewsPage(params) {
    var tourId = params.get('tour') || '', pg = Math.max(1, parseInt(params.get('p') || '1', 10) || 1), ru = lang === 'ru';
    var x = tourId ? byId(tourId) : null; if (!x) tourId = '';
    document.title = (ru ? 'Отзывы гостей' : 'Guest reviews') + (x ? ' — ' + L(x).name : '') + ' — Sardor Travel';
    var C = window.REV_COUNT || {}, chips = TOURS.filter(function (z) { return C[z.id] && !(window.REV_ALIAS || {})[z.id]; }).sort(function (a, b) { return C[b.id] - C[a.id]; });
    var chip = function (id, label, n) { var q = new URLSearchParams(); if (id) q.set('tour', id); return '<a class="chip" href="' + href('/reviews', q) + '" aria-pressed="' + (id === tourId) + '">' + esc(label) + ' <small>' + n + '</small></a>'; };
    main.innerHTML = '<section class="page-head"><div class="wrap"><h1>' + (ru ? 'Отзывы гостей' : 'Guest reviews') + (x ? ': ' + esc(L(x).name) : '') + '</h1><p class="lead"><span id="rev-total">' + revCount(x ? (C[tourId] || 0) : (window.REV_TOTAL || 0)) + '</span> · ' + (ru ? 'настоящие сообщения из нашего открытого Telegram-чата' : 'real messages from our open Telegram chat') + '</p><div class="chips chips--scroll">' + chip('', ru ? 'Все' : 'All', window.REV_TOTAL || 0) + chips.map(function (z) { return chip(z.id, L(z).name, C[z.id]); }).join('') + '</div></div></section>' +
      '<div class="wrap section">' +
      tgWindow({ tour: tourId, paged: 1, page: pg, per: 12, withTour: !tourId }) +
      (x ? '<p class="revs-all"><a class="btn" href="' + href('/tour/' + x.id) + '">' + (ru ? 'Смотреть экскурсию и цены' : 'See the tour and prices') + '</a></p>' : '') + '</div>';
    fillRevs(main);
  }
  function favorites() {
    var list = favs.map(byId).filter(Boolean);
    main.innerHTML = '<section class="page-head"><div class="wrap"><h1>' + t('fav_h1') + '</h1></div></section><div class="wrap section">' +
      (list.length ? grid(list) : '<div class="empty"><p>' + t('fav_empty') + '</p><a class="btn" href="' + href('/catalog') + '">' + t('nav_catalog') + '</a></div>') + '</div>';
  }

  var state = { date: null, a: 2, k: 0 };
  function nextDays() { var out = []; var d = new Date(); for (var i = 1; i <= 4; i++) { var x = new Date(d); x.setDate(d.getDate() + i); out.push(x); } return out; }
  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function human(s) { if (!s) return t('not_selected'); var p = s.split('-'); return p[2] + '.' + p[1] + '.' + p[0]; }

  function tour(id) {
    var x = byId(id);
    if (!x) { main.innerHTML = '<div class="wrap section"><div class="empty"><p>' + t('not_found_tour') + '</p><a class="btn" href="' + href('/') + '">' + t('to_home') + '</a></div></div>'; return; }
    pushRecent(x.id);
    state.a = (x.unit && x.unit.def) || 2; state.k = 0;
    var l = L(x), R = region(x.regions[0]), fav = isFav(x.id);
    var similar = TOURS.filter(function (z) { return z.id !== x.id && z.cats.some(function (c) { return x.cats.indexOf(c) >= 0; }); })
      .sort(function (a, b) { return Math.abs(a.price - x.price) - Math.abs(b.price - x.price); }).slice(0, 4);
    if (!state.date) state.date = iso(nextDays()[0]);
    var opts = (window.PRICES || {})[x.id] || [];
    if (state.tour !== x.id) { state.tour = x.id; state.opt = 0; }
    document.title = l.name + ' — Sardor Travel';
    var hl = l.route.filter(function (r, i) { return i > 0 && i < l.route.length - 1; }).slice(0, 4);
    if (hl.length < 2) hl = l.route.slice(0, 4);
    var catP = new URLSearchParams(); catP.set('region', R.id);
    main.innerHTML =
      '<div class="tour-hero"><img src="' + img(x.img) + '" alt="' + esc(l.name) + '" width="1200" height="800" fetchpriority="high">' +
        '<a class="round back" href="' + href('/catalog') + '" aria-label="' + t('back') + '"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>' +
        '<div class="tour-hero__actions"><button type="button" class="round" id="share" aria-label="' + t('share') + '">' + icon('share', 20) + '</button>' +
        '<button type="button" class="round fav--big" data-fav="' + x.id + '" aria-pressed="' + fav + '" aria-label="' + (fav ? t('fav_remove') : t('fav_add')) + '">' + icon('heart', 20) + '</button></div></div>' +
      '<div class="wrap"><div class="tour-layout">' +
      '<div class="tour-main">' +
        '<section class="panel tour-intro"><p class="crumbs"><a href="' + href('/catalog') + '">' + (R.country ? esc(R.country[lang]) : t('thailand')) + '</a> › <a href="' + href('/catalog', catP) + '">' + esc(R[lang]) + '</a></p>' +
        '<h1 class="tour-title">' + esc(l.name) + '</h1>' +
        '<ul class="facts"><li class="fact">' + icon('clock', 16) + esc(l.duration) + '</li><li class="fact">' + icon('pin', 16) + esc(l.place) + '</li>' + (revsFor(x.id).length ? '<li class="fact">' + icon('chat', 16) + revCount(revsFor(x.id).length) + '</li>' : '') + badges(x).map(function (b) { return '<li class="fact fact--ok">' + icon('check', 16) + t(b) + '</li>'; }).join('') + '</ul>' +
        '<p class="tour-desc">' + esc(l.desc) + '</p></section>' +
        '<section class="panel"><h2 class="h3">' + t('highlights') + '</h2><ul class="hl">' + hl.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></section>' +
        '<section class="panel"><h2 class="h3">' + t('program') + '</h2><ol class="route">' + l.route.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ol></section>' +
        '<section class="panel"><h2 class="h3">' + t('included') + '</h2>' + (l.inc.length ? '<ul class="inc">' + l.inc.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' : '<p class="m0">' + t('inc_ask') + '</p>') + '</section>' +
        ((LIMITS[lang] || LIMITS.ru)[x.id] ? '<section class="panel panel--warn"><h2 class="h3">' + (lang === 'ru' ? 'Ограничения' : 'Restrictions') + '</h2><ul class="hl hl--plain">' + LIMITS[lang][x.id].map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></section>' : '') +
        cancelPanel(x) +
        '<section class="panel"><h2 class="h3">' + t('bring') + '</h2><ul class="hl hl--plain">' + bringList(x).map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></section>' +
        '<section class="panel" id="reviews"><h2 class="h3">' + (lang === 'ru' ? 'Отзывы из чата' : 'Reviews from the chat') + ' · <span id="rev-count">' + revCount(revsFor(x.id).length) + '</span></h2>' + tgWindow({ tour: x.id, per: 8 }) + (revsFor(x.id).length ? '<p class="revs-all"><a href="' + href('/reviews', new URLSearchParams('tour=' + x.id)) + '">' + (lang === 'ru' ? 'Все отзывы об этой экскурсии постранично →' : 'All reviews for this tour, page by page →') + '</a></p>' : '') + '</section>' +
        '<div class="chatbox m0"><div class="bubble">' + t('ask') + '</div><a class="btn" href="' + tg(t('msg_q', { name: l.name })) + '" target="_blank" rel="noopener">' + t('ask_btn') + '</a></div>' +
      '</div>' +
      '<aside class="panel book" id="book" aria-label="' + t('booking') + '"><div class="book__price"><span>' + t('from') + '</span> <strong>' + fmt(x.price) + '</strong> <span>' + (x.unit ? esc(x.unit[lang]) : t('per_adult')) + '</span></div>' +
        '<div><span class="label">' + t('date') + '</span><div class="dates" id="dates"></div>' +
        '<label class="sr" for="date-input">' + t('other_date') + '</label><input class="date-input" type="date" id="date-input" min="' + iso(new Date()) + '"></div>' +
        (opts.length > 1 ? '<div class="opts"><span class="label">' + (lang === 'ru' ? 'Вариант' : 'Option') + '</span><div class="opts__list" id="opts"></div></div>' : '') +
        '<div class="book__row"><span class="book__label">' + (x.unit ? esc(x.unit.qty[lang]) : t('adults')) + '<small id="price-a"></small></span><div class="stepper"><button type="button" data-step="a" data-d="-1" aria-label="' + t('adults') + ' −1">−</button><output id="out-a" aria-live="polite"></output><button type="button" data-step="a" data-d="1" aria-label="' + t('adults') + ' +1">+</button></div></div>' +
        '<div class="book__row"' + (x.unit ? ' hidden' : '') + '><span class="book__label">' + t('kids') + '<small id="price-k"></small></span><div class="stepper"><button type="button" data-step="k" data-d="-1" aria-label="' + t('kids') + ' −1">−</button><output id="out-k" aria-live="polite"></output><button type="button" data-step="k" data-d="1" aria-label="' + t('kids') + ' +1">+</button></div></div>' +
        '<div class="total"><span>' + t('total') + '<br><small id="kids-note"></small></span><strong id="total"></strong></div>' +
        '<a class="btn btn--lime" id="book-btn" target="_blank" rel="noopener" href="#">' + t('book') + '</a>' +
        '<p class="book__note">' + t('book_note') + '</p></aside>' +
      '</div>' +
      '<section class="section">' + head(t('similar')) + grid(similar) + '</section>' +
      faq() + '</div>' +
      '<div class="stickybar"><div><small>' + t('from') + '</small><strong>' + fmt(x.price) + '</strong></div><button class="btn" type="button" id="to-book">' + t('book') + '</button></div>';
    document.body.classList.add('has-sticky');
    document.getElementById('to-book').addEventListener('click', function () { document.getElementById('book').scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    document.getElementById('share').addEventListener('click', function () {
      var url = location.href;
      if (navigator.share) { navigator.share({ title: l.name, url: url }).catch(function () {}); return; }
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { toast(t('copied')); }).catch(function () { toast(url); });
      else toast(url);
    });
    function update() {
      document.getElementById('dates').innerHTML = nextDays().map(function (d) { var s = iso(d); return '<button type="button" class="date" data-date="' + s + '" aria-pressed="' + (state.date === s) + '"><small>' + t('wd')[d.getDay()] + '</small><b>' + d.getDate() + '</b></button>'; }).join('');
      document.getElementById('date-input').value = state.date || '';
      document.getElementById('out-a').textContent = state.a;
      document.getElementById('out-k').textContent = state.k;
      document.querySelector('[data-step="a"][data-d="-1"]').disabled = state.a <= 1;
      document.querySelector('[data-step="k"][data-d="-1"]').disabled = state.k <= 0;
      var o = opts[state.opt] || { a: x.price }, kidsKnown = o.c != null;
      if (opts.length > 1) document.getElementById('opts').innerHTML = opts.map(function (v, i) { return '<button type="button" class="opt" data-opt="' + i + '" aria-pressed="' + (i === state.opt) + '"><span>' + esc(v[lang] || v.ru) + '</span><b>' + fmt(v.a) + '</b></button>'; }).join('');
      document.getElementById('price-a').textContent = fmt(o.a);
      var age = x.kidAge === undefined ? '4–11' : x.kidAge; if (x.unit) { state.k = 0; kidsKnown = false; }
      document.getElementById('price-k').textContent = kidsKnown ? (age ? (lang === 'ru' ? age + ' лет · ' : 'age ' + age + ' · ') : '') + fmt(o.c) : t('kids_price');
      document.getElementById('total').textContent = fmt(state.a * o.a + (kidsKnown ? state.k * o.c : 0));
      document.getElementById('kids-note').textContent = state.k && !kidsKnown ? t('total_kids') : '';
      var nm = l.name + (opts.length > 1 ? ' (' + (o[lang] || o.ru) + ')' : '');
      document.getElementById('book-btn').href = tg(x.unit ? t('msg_unit', { name: nm, date: human(state.date), q: state.a, u: x.unit.qty[lang] }) : t('msg', { name: nm, date: human(state.date), a: state.a, k: state.k }));
    }
    main.querySelector('#book').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.date) { state.date = b.dataset.date; update(); }
      if (b.dataset.opt) { state.opt = +b.dataset.opt; update(); }
      if (b.dataset.step) { var k = b.dataset.step; state[k] = Math.max(k === 'a' ? 1 : 0, Math.min(30, state[k] + Number(b.dataset.d))); update(); }
    });
    document.getElementById('date-input').addEventListener('change', function (e) { if (e.target.value) { state.date = e.target.value; update(); } });
    update();
    liveReviews(main);
  }

  function cancelPanel(x) {
    var ct = window.CANCEL_TYPE || {}, type = Object.prototype.hasOwnProperty.call(ct, x.id) ? ct[x.id] : 'day';
    var C = type && window.CANCEL ? window.CANCEL[type] : null;
    var h = '<section class="panel"><h2 class="h3">' + (lang === 'ru' ? 'Отмена и перенос' : 'Cancellation & changes') + '</h2>';
    if (!C) return h + '<p class="m0">' + (lang === 'ru' ? 'Условия отмены по этой программе менеджер пришлёт до оплаты.' : 'Our manager will send the cancellation terms before you pay.') + '</p></section>';
    return h + '<ul class="hl hl--plain">' + C[lang].map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul><p class="note">' + (lang === 'ru' ? 'Условия операторов-партнёров: катера, трансферы и гиды оплачиваются заранее.' : 'These are our partner operators’ terms: boats, transfers and guides are paid in advance.') + '</p></section>';
  }
  function notFound() { main.innerHTML = '<div class="wrap section"><div class="empty"><p>' + (lang === 'ru' ? 'Такой страницы нет.' : 'Page not found.') + '</p><a class="btn" href="' + href('/') + '">' + t('to_home') + '</a></div></div>'; }

  /* ---------- router ---------- */
  function current() {
    if (HASH) { var h = location.hash.replace(/^#/, '') || '/'; return { path: h.split('?')[0], params: new URLSearchParams(h.split('?')[1] || '') }; }
    return { path: location.pathname.replace(/\/index\.html$/, '/').replace(/(.)\/$/, '$1') || '/', params: new URLSearchParams(location.search) };
  }
  function route(keepScroll) {
    if (HASH && location.hash && location.hash.indexOf('#/') !== 0 && main.innerHTML) return;
    document.body.classList.remove('has-sticky');
    applyStatic();
    var c = current(), p = c.path;
    if (p.indexOf('/tour/') === 0) { tour(decodeURIComponent(p.slice(6))); fillRevs(main); }
    else if (p === '/catalog') catalog(c.params);
    else if (p === '/favorites') favorites();
    else if (p === '/reviews') reviewsPage(c.params);
    else if (p === '/' || p === '') { home(); fillRevs(main); }
    else notFound();
    if (!keepScroll) window.scrollTo(0, 0);
  }
  function go(url) {
    if (HASH) { location.hash = url.replace(/^#/, ''); return; }
    history.pushState(null, '', url); route();
  }

  document.addEventListener('click', function (e) {
    var ex = e.target.closest('[data-expand]'); if (ex) { var q = ex.previousElementSibling; q.classList.remove('is-long'); ex.remove(); return; }
    var f = e.target.closest('[data-fav]');
    if (f) {
      e.preventDefault(); toggleFav(f.dataset.fav);
      document.querySelectorAll('[data-fav="' + f.dataset.fav + '"]').forEach(function (b) { var on = isFav(b.dataset.fav); b.setAttribute('aria-pressed', on); b.setAttribute('aria-label', on ? t('fav_remove') : t('fav_add')); });
      if (current().path === '/favorites') route(true);
      return;
    }
    if (HASH) return;
    var a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    var u = new URL(a.href, location.href);
    if (u.origin !== location.origin || u.pathname.indexOf('/assets/') === 0) return;
    if (u.hash && u.pathname === location.pathname) return;
    e.preventDefault(); go(u.pathname + u.search);
  });
  document.addEventListener('submit', function (e) {
    if (!e.target.matches('[data-search]')) return;
    e.preventDefault();
    var q = e.target.q.value.trim(), c = current(), p = new URLSearchParams();
    if (c.path === '/catalog') ['cat', 'region', 'dur', 'sort'].forEach(function (k) { if (c.params.get(k)) p.set(k, c.params.get(k)); });
    if (q) p.set('q', q);
    go(href('/catalog', p));
  });
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { lang = b.dataset.lang; store('lang', lang); var y = window.scrollY; route(true); window.scrollTo(0, y); });
  });
  window.addEventListener(HASH ? 'hashchange' : 'popstate', function () { route(); });
  route();
})();
