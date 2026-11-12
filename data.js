/* Каталог Sardor Travel. Чтобы поменять цену или текст — правьте здесь.
   price — цена за взрослого в батах. regions/cats — для фильтров. */
window.TOURS = [
{
  id: "krabi", img: "krabi", price: 2800, hit: true,
  regions: ["krabi"], cats: ["sea"],
  ru: { name: "Тропический рай Краби", place: "Острова Краби", duration: "1 день", tag: "Белые пляжи и лагуны",
    desc: "Целый день на островах Краби: бирюзовые лагуны, снорклинг, красивые пляжи и закат на песчаной косе.",
    route: ["Прибытие на пирс, знакомство с гидом", "Остров Нака Яй", "Остров Пабия", "Остров Хонг: смотровая и обед", "Снорклинг у Хонг", "Остров Лао Ладинг", "Закат на песчаной косе Ко Паре", "Возвращение на пирс"],
    inc: ["Трансфер (автобус + лодка)", "Входные билеты в нацпарки", "Безалкогольные напитки", "Коктейль в кокосе, фрукты", "Обед", "Гид", "Спасжилеты, маски, трубки", "Страховка"] },
  en: { name: "Krabi Tropical Paradise", place: "Krabi islands", duration: "1 day", tag: "White beaches & lagoons",
    desc: "A full day in the Krabi islands: turquoise lagoons, snorkelling, beautiful beaches and sunset on a sandbar.",
    route: ["Arrival at the pier, meet your guide", "Naka Yai island", "Pabia island", "Hong island: viewpoint and lunch", "Snorkelling at Hong", "Lao Lading island", "Sunset on the Koh Pare sandbar", "Return to the pier"],
    inc: ["Transfer (bus + boat)", "National park fees", "Soft drinks", "Coconut cocktail, fruit", "Lunch", "Guide", "Life jackets, masks, snorkels", "Insurance"] }
},
{
  id: "early-phi-phi", img: "early-phi-phi", price: 2800, hit: true,
  regions: ["phiphi"], cats: ["sea"],
  ru: { name: "Ранний Пхи-Пхи", place: "Острова Пхи-Пхи", duration: "Утро", tag: "Рассвет и пустые бухты",
    desc: "Рассвет на Пхи-Пхи с ранним выездом: Майя Бэй, лагуна Пиле, снорклинг, остров Бамбу и лучшие виды архипелага.",
    route: ["Ранний трансфер", "Завтрак и отправление с пирса", "Рассвет в открытом море", "Майя Бэй", "Лагуна Пиле", "Снорклинг", "Пляж обезьян", "Пхи-Пхи Дон: смотровая и прогулка", "Остров Бамбу", "Возвращение на Пхукет"],
    inc: ["Русскоязычный гид", "Полная страховка", "Вход в нацпарк", "Трансфер от/до отеля", "Завтрак и обед", "Напитки и фрукты", "Снаряжение для снорклинга", "Спасжилеты"] },
  en: { name: "Early Phi Phi", place: "Phi Phi islands", duration: "Morning", tag: "Sunrise & empty bays",
    desc: "Sunrise at Phi Phi with an early start: Maya Bay, Pileh Lagoon, snorkelling, Bamboo Island and the best views of the archipelago.",
    route: ["Early transfer", "Breakfast and departure from the pier", "Sunrise at open sea", "Maya Bay", "Pileh Lagoon", "Snorkelling", "Monkey Beach", "Phi Phi Don: viewpoint and walk", "Bamboo Island", "Return to Phuket"],
    inc: ["Russian-speaking guide", "Full insurance", "National park fee", "Hotel transfer", "Breakfast and lunch", "Drinks and fruit", "Snorkelling gear", "Life jackets"] }
},
{
  id: "avatar", img: "avatar-phangnga", price: 3450, hit: true,
  regions: ["phangnga"], cats: ["jungle", "drive"],
  ru: { name: "Мир Аватара", place: "Пханг-Нга", duration: "Весь день", tag: "Пейзажи Пханг-Нга",
    desc: "Максимум эмоций за один день: джунгли, водопад, слоны, сплав, квадроциклы, горячие источники и закат на море. Полностью наземный маршрут без морской качки.",
    route: ["Выезд из отеля около 07:00", "Водопад, смотровые, храм", "Слоны, сплав, квадроциклы", "Горячие источники", "Закат на пляже Натай", "Возвращение около 19:00"],
    inc: ["Трансфер", "Русскоязычный гид", "Обед и напитки", "Все активности и билеты", "Страховка"] },
  en: { name: "Avatar World", place: "Phang Nga", duration: "Full day", tag: "Phang Nga landscapes",
    desc: "Maximum impressions in one day: jungle, waterfall, elephants, rafting, ATVs, hot springs and a sunset by the sea. Land-only route — no seasickness.",
    route: ["Hotel pick-up around 07:00", "Waterfall, viewpoints, temple", "Elephants, rafting, ATVs", "Hot springs", "Sunset at Natai beach", "Return around 19:00"],
    inc: ["Transfer", "Russian-speaking guide", "Lunch and drinks", "All activities and tickets", "Insurance"] }
},
{
  id: "jetski", img: "jetski", price: 6000, hit: true,
  regions: ["phuket"], cats: ["sea", "drive"],
  ru: { name: "Гидроциклы: 9 островов", place: "Побережье Пхукета", duration: "Утро или день", tag: "Адреналин на воде",
    desc: "Сафари на гидроциклах по 9 островам: мангровые каналы, пляжи, лагуны и остров обезьян. Два выезда в день.",
    route: ["Острова Коконат и Ао Пор", "Мангровые леса", "Остров обезьян", "Нака Яй, Прае, Липи, Ранг Яй, Мали", "Время: 08:00–13:00 или 13:30–17:30"],
    inc: ["Гидроцикл на выбор (Sea-Doo / Yamaha)", "Спасжилеты", "Маска и трубка", "Страховка", "Гид и сопровождение", "Обед", "Шезлонги на пляже"] },
  en: { name: "Jet Ski: 9 Islands", place: "Phuket coast", duration: "Morning or afternoon", tag: "Adrenaline on the water",
    desc: "A jet-ski safari around 9 islands: mangrove channels, beaches, lagoons and Monkey Island. Two departures a day.",
    route: ["Coconut and Ao Por islands", "Mangrove forest", "Monkey Island", "Naka Yai, Prae, Lipi, Rang Yai, Mali", "Times: 08:00–13:00 or 13:30–17:30"],
    inc: ["Jet ski of your choice (Sea-Doo / Yamaha)", "Life jackets", "Mask and snorkel", "Insurance", "Guide and escort", "Lunch", "Beach loungers"] }
},
{
  id: "similan", img: "similan", price: 3300,
  regions: ["similan"], cats: ["sea"],
  ru: { name: "Симиланские острова", place: "Симиланы", duration: "Сезонная программа", tag: "Снорклинг и бирюзовая вода",
    desc: "Ранний выезд на Симиланы: островные пляжи, мягкий свет, снорклинг и прогулка к Парусному камню. Программа сезонная — даты уточняйте у менеджера.",
    route: ["Ранний трансфер из отеля", "Пирс, завтрак и инструктаж", "Остров Мианг (№4)", "Снорклинг у островов №7 и №9", "Остров Симилан (№8), прогулка к Парусному камню", "Обед и свободное время", "Возвращение в отель"],
    inc: ["Трансфер (автобус + лодка)", "Входные билеты в нацпарк", "Напитки и фрукты", "Обед", "Спасжилеты, маски, трубки", "Страховка", "Русский гид"] },
  en: { name: "Similan Islands", place: "Similan", duration: "Seasonal", tag: "Snorkelling & turquoise water",
    desc: "An early trip to the Similans: island beaches, soft light, snorkelling and a walk to Sail Rock. Seasonal programme — ask our manager for dates.",
    route: ["Early hotel pick-up", "Pier, breakfast and briefing", "Miang island (No. 4)", "Snorkelling at islands No. 7 and No. 9", "Similan island (No. 8), walk to Sail Rock", "Lunch and free time", "Return to the hotel"],
    inc: ["Transfer (bus + boat)", "National park fees", "Drinks and fruit", "Lunch", "Life jackets, masks, snorkels", "Insurance", "Russian-speaking guide"] }
},
{
  id: "sunrise", img: "sunrise", price: 2100,
  regions: ["phuket"], cats: ["sea"],
  ru: { name: "Рассвет на райских островах", place: "Острова Рача и Корал", duration: "Утро", tag: "Ранний старт, меньше людей",
    desc: "Ранний тур: рассвет в открытом море, остров Рача Яй, рыбалка, снорклинг и обед на Коралловом острове.",
    route: ["Ранний трансфер из отеля", "Спидбот и встреча рассвета в море", "Остров Рача Яй", "Рыбалка в открытом море", "Снорклинг у кораллов", "Обед на Коралловом острове", "Свободное время на пляже", "Возвращение в отель"],
    inc: ["Трансфер туда-обратно", "Завтрак-бокс", "Спидбот", "Рыбалка", "Оборудование для снорклинга", "Обед", "Спасжилеты", "Русскоязычный гид", "Входные билеты в нацпарки", "Страховка"] },
  en: { name: "Sunrise on Paradise Islands", place: "Racha & Coral islands", duration: "Morning", tag: "Early start, fewer people",
    desc: "An early tour: sunrise at open sea, Racha Yai island, fishing, snorkelling and lunch on Coral Island.",
    route: ["Early hotel pick-up", "Speedboat and sunrise at sea", "Racha Yai island", "Open-sea fishing", "Snorkelling at the reef", "Lunch on Coral Island", "Free time on the beach", "Return to the hotel"],
    inc: ["Return transfer", "Breakfast box", "Speedboat", "Fishing", "Snorkelling gear", "Lunch", "Life jackets", "Russian-speaking guide", "National park fees", "Insurance"] }
},
{
  id: "phi-phi-2day", img: "phi-phi-2day", price: 4950,
  regions: ["phiphi"], cats: ["sea", "overnight"],
  ru: { name: "Пхи-Пхи с ночёвкой", place: "Острова Пхи-Пхи", duration: "2 дня / 1 ночь", tag: "Ночь на островах",
    desc: "Двухдневный тур на Пхи-Пхи с рассветом, лагунами и ночёвкой на острове. Спокойный темп и полное погружение в атмосферу архипелага.",
    route: ["День 1: ранний выезд, рассвет, Майя Бэй, лагуна Пиле, снорклинг, Бамбу", "Заселение на Пхи-Пхи Дон, вечер на острове", "День 2: завтрак, снорклинг, пляж обезьян, рыбалка у Ранг Яй", "Возвращение на пирс и трансфер в отель"],
    inc: ["Трансфер", "Гид", "Завтрак-бокс", "2 обеда и ужин", "Проживание в отеле", "Напитки и фрукты", "Маски, трубки, жилеты", "Страховка"] },
  en: { name: "Phi Phi Overnight", place: "Phi Phi islands", duration: "2 days / 1 night", tag: "A night on the islands",
    desc: "A two-day Phi Phi tour with sunrise, lagoons and a night on the island. Relaxed pace and full immersion in the archipelago.",
    route: ["Day 1: early start, sunrise, Maya Bay, Pileh Lagoon, snorkelling, Bamboo", "Check-in on Phi Phi Don, evening on the island", "Day 2: breakfast, snorkelling, Monkey Beach, fishing at Rang Yai", "Return to the pier and hotel transfer"],
    inc: ["Transfer", "Guide", "Breakfast box", "2 lunches and dinner", "Hotel stay", "Drinks and fruit", "Masks, snorkels, jackets", "Insurance"] }
},
{
  id: "five-pearls", img: "five-pearls", price: 5950,
  regions: ["phangnga", "krabi", "phiphi"], cats: ["sea", "overnight"],
  ru: { name: "5 жемчужин Андамана", place: "Пханг-Нга · Краби · Пхи-Пхи", duration: "2 дня / 1 ночь", tag: "Максимум островов",
    desc: "2 дня и 1 ночь по самым ярким местам Андаманского моря: остров Джеймса Бонда, Краби, Пхи-Пхи и Ранг Яй.",
    route: ["День 1: остров Панак, Джеймс Бонд, каноэ, деревня Паньи, острова Краби", "Заселение на Пхи-Пхи Дон, ужин, шоу; по желанию — светящийся планктон", "День 2: Майя Бэй, лагуна Пиле, снорклинг, Ранг Яй", "Возвращение на Пхукет"],
    inc: ["Трансфер", "Лодка", "Отель", "2 обеда, ужин и завтрак", "Гид", "Снаряжение для снорклинга", "Вход в нацпарки", "Страховка"] },
  en: { name: "5 Pearls of the Andaman", place: "Phang Nga · Krabi · Phi Phi", duration: "2 days / 1 night", tag: "The most islands",
    desc: "2 days and 1 night through the highlights of the Andaman Sea: James Bond Island, Krabi, Phi Phi and Rang Yai.",
    route: ["Day 1: Panak island, James Bond, canoeing, Panyee village, Krabi islands", "Check-in on Phi Phi Don, dinner, show; optional glowing plankton", "Day 2: Maya Bay, Pileh Lagoon, snorkelling, Rang Yai", "Return to Phuket"],
    inc: ["Transfer", "Boat", "Hotel", "2 lunches, dinner and breakfast", "Guide", "Snorkelling gear", "National park fees", "Insurance"] }
},
{
  id: "fishing", img: "fishing", price: 3000,
  regions: ["phuket"], cats: ["sea"],
  ru: { name: "Морская рыбалка", place: "Побережье Пхукета", duration: "Полдня", tag: "Лодка, снасти, улов",
    desc: "Утренняя морская рыбалка: троллинг, донка, крабовые ловушки, снорклинг и обед из свежего улова.",
    route: ["Ранний сбор по отелям", "Выход в море", "Троллинг и донная рыбалка", "Проверка крабовых ловушек", "Остановка у острова: купание и снорклинг", "Обед на борту", "Возвращение на пирс"],
    inc: ["Лодка и команда", "Снасти и экипировка", "Обед на борту", "Сопровождение гида"] },
  en: { name: "Sea Fishing", place: "Phuket coast", duration: "Half day", tag: "Boat, tackle, catch",
    desc: "Morning sea fishing: trolling, bottom fishing, crab traps, snorkelling and lunch from the fresh catch.",
    route: ["Early hotel pick-up", "Out to sea", "Trolling and bottom fishing", "Checking the crab traps", "Island stop: swimming and snorkelling", "Lunch on board", "Return to the pier"],
    inc: ["Boat and crew", "Tackle and gear", "Lunch on board", "Guide"] }
},
{
  id: "diving", img: "diving", price: 4700,
  regions: ["phuket", "phiphi"], cats: ["sea", "drive"],
  ru: { name: "Дайвинг", place: "Дайв-сайты Пхукета", duration: "Целый день", tag: "Для новичков и с сертификатом",
    desc: "Дайвинг на лучших сайтах Пхукета: Пхи-Пхи, Рача Ной и Яй, Кинг Крузер, Шарк-Пойнт и Анемон-Риф.",
    route: ["Трансфер на пирс Чалонг", "Завтрак на корабле", "2–3 погружения (по сертификации)", "Обед и отдых на борту", "Возвращение в порт и трансфер в отель"],
    inc: ["Трансфер из популярных районов", "Питание на корабле", "Комплект снаряжения", "Русскоговорящий инструктор", "Страховка"] },
  en: { name: "Scuba Diving", place: "Phuket dive sites", duration: "Full day", tag: "Beginners & certified divers",
    desc: "Diving at Phuket's best sites: Phi Phi, Racha Noi and Yai, King Cruiser, Shark Point and Anemone Reef.",
    route: ["Transfer to Chalong pier", "Breakfast on board", "2–3 dives (depending on certification)", "Lunch and rest on board", "Return to port and hotel transfer"],
    inc: ["Transfer from popular areas", "Meals on board", "Full gear set", "Russian-speaking instructor", "Insurance"] }
},
{
  id: "early-krabi", img: "early-krabi", price: 2700,
  regions: ["krabi"], cats: ["sea"],
  ru: { name: "Ранний Краби", place: "Острова Краби", duration: "05:30 — 14:30", tag: "Раньше всех туристов",
    desc: "Настоящий Краби до толп: ранний выезд, лагуна Хонг, подъём на остров Нок и прогулка по белой косе.",
    route: ["05:30 — трансфер, чай, кофе", "Остров Лао Ладинг: пляж, фото, купание", "Лагуна острова Хонг", "Остров Хонг: снорклинг, отдых, смотровая", "Обед на острове", "Остров Нок: подъём к панораме", "Коса Лаем Хад на Ко Яо", "14:30 — возвращение"],
    inc: [] },
  en: { name: "Early Krabi", place: "Krabi islands", duration: "05:30 — 14:30", tag: "Before the crowds",
    desc: "The real Krabi before the crowds: early start, Hong lagoon, a climb on Nok island and a walk along a white sandbar.",
    route: ["05:30 — transfer, tea, coffee", "Lao Lading island: beach, photos, swimming", "Hong island lagoon", "Hong island: snorkelling, rest, viewpoint", "Lunch on the island", "Nok island: climb to the panorama", "Laem Had sandbar, Koh Yao", "14:30 — return"],
    inc: [] }
},
{
  id: "plankton", img: "plankton", price: 3050,
  regions: ["phangnga"], cats: ["jungle", "sea"],
  ru: { name: "Сияние планктона + Самет Нангше", place: "Залив Пханг-Нга", duration: "День и вечер", tag: "Закат и светящееся море",
    desc: "Редкие места за один день: пляж с самолётами, горячие источники у моря, панорама Самет Нангше, остров Джеймса Бонда, закат и каякинг со светящимся планктоном.",
    route: ["Сбор по отелям", "Пляж с самолётами", "Горячие источники у моря", "Смотровая Самет Нангше и обед", "Тайская лодка, Бриллиантовая пещера, остров Джеймса Бонда", "Закат на пляже", "Каякинг среди светящегося планктона", "Возвращение в отель"],
    inc: ["Трансфер от/до отеля", "Лодка по заливу", "Каякинг к планктону", "Сопровождение гида"] },
  en: { name: "Glowing Plankton + Samet Nangshe", place: "Phang Nga Bay", duration: "Day and evening", tag: "Sunset & glowing sea",
    desc: "Rare spots in one day: plane-spotting beach, seaside hot springs, Samet Nangshe panorama, James Bond Island, sunset and kayaking among glowing plankton.",
    route: ["Hotel pick-up", "Plane-spotting beach", "Seaside hot springs", "Samet Nangshe viewpoint and lunch", "Thai boat, Diamond Cave, James Bond Island", "Sunset on the beach", "Kayaking among glowing plankton", "Return to the hotel"],
    inc: ["Hotel transfer", "Boat around the bay", "Plankton kayaking", "Guide"] }
},
{
  id: "phuket", img: "phuket", price: 1650,
  regions: ["phuket"], cats: ["city"],
  ru: { name: "Сити-тур по Пхукету", place: "Пхукет", duration: "6 часов", tag: "Без шопинга",
    desc: "Обзорная экскурсия без шопинга: пляжи Патонг, Ката, Карон, Большой Будда, Ват Чалонг, Старый город и смотровые площадки.",
    route: ["Встреча в отеле", "Смотровая Карон (три пляжа)", "Смотровая «Ветряная мельница»", "Мыс Промтеп", "Рынок морских цыган", "Большой Будда", "Храм Ват Чалонг", "Старый город Пхукет", "Ранг-Хилл", "Возвращение"],
    inc: ["Транспорт от/до отеля", "Русский гид", "Страховка"] },
  en: { name: "Phuket City Tour", place: "Phuket", duration: "6 hours", tag: "No shopping stops",
    desc: "A sightseeing tour with no shopping stops: Patong, Kata and Karon beaches, the Big Buddha, Wat Chalong, Old Town and viewpoints.",
    route: ["Hotel pick-up", "Karon viewpoint (three beaches)", "Windmill viewpoint", "Promthep Cape", "Sea gypsy market", "Big Buddha", "Wat Chalong temple", "Phuket Old Town", "Rang Hill", "Return"],
    inc: ["Hotel transport", "Russian-speaking guide", "Insurance"] }
},
{
  id: "rafting", img: "rafting", price: 2000,
  regions: ["khaolak"], cats: ["jungle"],
  ru: { name: "Рафтинг + слоны", place: "Као Лак", duration: "1 день", tag: "Для всей семьи",
    desc: "Сафари-день в Као Лаке: слоны, бамбуковые плоты, водопад и красивые виды. Хороший вариант для семьи и спокойного отдыха.",
    route: ["Выезд из отеля", "Храм Суван Куха (пещера обезьян)", "Зоопарк", "Слоновье СПА", "Сплав на плотах", "Обед", "Мини-ферма черепах", "Водопад и смотровая", "Возвращение"],
    inc: ["Трансфер", "Программа со слонами", "Сплав на плотах", "Обед", "Сопровождение гида"] },
  en: { name: "Rafting + Elephants", place: "Khao Lak", duration: "1 day", tag: "Great for families",
    desc: "A safari day in Khao Lak: elephants, bamboo rafts, a waterfall and beautiful views. A good choice for families and a relaxed day.",
    route: ["Hotel pick-up", "Suwan Kuha temple (monkey cave)", "Zoo", "Elephant spa", "Bamboo rafting", "Lunch", "Turtle farm", "Waterfall and viewpoint", "Return"],
    inc: ["Transfer", "Elephant programme", "Rafting", "Lunch", "Guide"] }
},
{
  id: "rafting-atv", img: "rafting-atv", price: 2500,
  regions: ["phangnga"], cats: ["jungle", "drive"],
  ru: { name: "Рафтинг + слоны + квадроциклы", place: "Джунгли Пханг-Нга", duration: "1 день", tag: "Для любителей драйва",
    desc: "Активный день в джунглях: рафтинг 5 км, квадроциклы, тарзанка, слоны и водопад.",
    route: ["Выезд из отеля", "Пещерный храм Суван Куха", "Тарзанка", "Инструктаж и рафтинг 5 км", "Квадроциклы", "Обед", "Программа со слонами", "Водопад", "Возвращение"],
    inc: ["Трансфер от/до отеля", "Русскоязычный гид", "Страховка", "Вход в нацпарк", "Рафтинг 5 км", "Квадроциклы", "Тарзанка", "Программа со слонами", "Обед", "Снаряжение"] },
  en: { name: "Rafting + Elephants + ATV", place: "Phang Nga jungle", duration: "1 day", tag: "For thrill-seekers",
    desc: "An active jungle day: 5 km rafting, ATVs, zipline, elephants and a waterfall.",
    route: ["Hotel pick-up", "Suwan Kuha cave temple", "Zipline", "Briefing and 5 km rafting", "ATVs", "Lunch", "Elephant programme", "Waterfall", "Return"],
    inc: ["Hotel transfer", "Russian-speaking guide", "Insurance", "National park fee", "5 km rafting", "ATVs", "Zipline", "Elephant programme", "Lunch", "Gear"] }
},
{
  id: "phangnga", img: "phangnga", price: 2550,
  regions: ["phangnga"], cats: ["jungle"],
  ru: { name: "Удивительная Пханг-Нга", place: "Пханг-Нга", duration: "1 день", tag: "Путь Аватара",
    desc: "Лучшие места Пханг-Нга за один день: пляж с самолётами, слоновье СПА, храм Чёрного монаха, деревня морских цыган и панорама Самет Нангше.",
    route: ["Выезд из отеля", "Пляж с самолётами", "Водопад в джунглях (в сезон дождей)", "Слоновье СПА", "Храм Чёрного монаха", "Прогулка на лодке среди мангров", "Обед в деревне морских цыган", "Храм Суван Куха", "Самет Нангше или стеклянный мост", "Возвращение в отель"],
    inc: ["Трансфер от/до отеля", "Русскоязычный гид", "Программа со слонами", "Прогулка на лодке", "Обед (морепродукты)", "Вход в нацпарк", "Страховка"] },
  en: { name: "Amazing Phang Nga", place: "Phang Nga", duration: "1 day", tag: "The Avatar trail",
    desc: "The best of Phang Nga in one day: plane-spotting beach, elephant spa, Black Monk temple, a sea gypsy village and the Samet Nangshe panorama.",
    route: ["Hotel pick-up", "Plane-spotting beach", "Jungle waterfall (rainy season)", "Elephant spa", "Black Monk temple", "Boat ride through the mangroves", "Lunch in a sea gypsy village", "Suwan Kuha temple", "Samet Nangshe or glass bridge", "Return to the hotel"],
    inc: ["Hotel transfer", "Russian-speaking guide", "Elephant programme", "Boat ride", "Seafood lunch", "National park fee", "Insurance"] }
},
{
  id: "cheowlan", img: "cheowlan", price: 3100, hit: true,
  regions: ["cheowlan"], cats: ["jungle"],
  ru: { name: "Озеро Чео Лан", place: "Сураттхани", duration: "1 день", tag: "Природа без суеты",
    desc: "Природный день без суеты: Самет Нангше, озеро Чео Лан, скалы как в Гуйлине, лодка по озеру и храм Банг Тонг.",
    route: ["Ранний выезд", "Самет Нангше: панорама залива", "Смотровая на озере", "Пирс Чео Лан, длиннохвостая лодка", "Мини-сафари по озеру среди скал", "Обед в плавучем ресторане, купание, каноэ", "Храм Банг Тонг", "Возвращение"],
    inc: ["Трансфер", "Гид", "Страховка", "Обед", "Лодка", "Входные билеты в нацпарки", "Каноэ", "Рыбалка"] },
  en: { name: "Cheow Lan Lake", place: "Surat Thani", duration: "1 day", tag: "Nature, no rush",
    desc: "A calm nature day: Samet Nangshe, Cheow Lan Lake, Guilin-like cliffs, a boat ride on the lake and Bang Thong temple.",
    route: ["Early departure", "Samet Nangshe: bay panorama", "Lake viewpoint", "Cheow Lan pier, longtail boat", "Mini safari among the cliffs", "Lunch at a floating restaurant, swimming, canoe", "Bang Thong temple", "Return"],
    inc: ["Transfer", "Guide", "Insurance", "Lunch", "Boat", "National park fees", "Canoe", "Fishing"] }
}
];

window.REGIONS = [
  { id: "phuket", img: "phuket", ru: "Пхукет", en: "Phuket" },
  { id: "krabi", img: "krabi", ru: "Краби", en: "Krabi" },
  { id: "phiphi", img: "early-phi-phi", ru: "Пхи-Пхи", en: "Phi Phi" },
  { id: "phangnga", img: "phangnga", ru: "Пханг-Нга", en: "Phang Nga" },
  { id: "similan", img: "similan", ru: "Симиланы", en: "Similan" },
  { id: "khaolak", img: "rafting", ru: "Као Лак", en: "Khao Lak" },
  { id: "cheowlan", img: "cheowlan", ru: "Чео Лан", en: "Cheow Lan" }
];

/* Отзывы гостей — из чата «ПХУКЕТ | без переплат» (Telegram), сокращены без изменения смысла */
window.REVIEWS_CHAT = { url: "https://t.me/phuketsardor", name: "ПХУКЕТ | без переплат 🌴", members: 2792, online: 729, pinned: "🌴 ЭКСКУРСИИ ПХУКЕТ — меню" };
window.REVIEWS = [
  { tour: "jetski", msg: 11647, name: "Женя", date: "2026-10", text: "Море очень спокойное, волн вообще не было, летали на полной скорости. Русский гид Андрей потрясающий, легко нашли общий язык. Скорость, драйв, экстрим — если хотите, обязательно нужно посетить джетски 9 островов! Спасибо, Сардор! 1000000/10" },
  { tour: "jetski", msg: 11587, name: "Гость из чата", date: "2026-10", text: "Нас многие пугали, что это тяжело, сложно, устанете и сгорите — я тут, чтоб развеять ваши сомнения. Экскурсия очень крутая, идеальные сопровождающие, русские, проблем с пониманием нет. Крайне рекомендую. Спасибо за оперативность и качество — всё на высоте." },
  { tour: "jetski", msg: 11616, name: "Гость из чата", date: "2026-10", text: "Огромное спасибо за экскурсию «9 островов»! Гиды классные, сервис отличный. Всё честно — и по времени, и по стоимости, и по впечатлениям!" },
  { tour: "jetski", msg: 11527, name: "Дарья", date: "2026-09", text: "Спасибо @ds_sardor за потрясающую экскурсию на гидроциклах. Всё подробно рассказал, помог выбрать самый подходящий вариант. Уровень сервиса и комфорта на высоте, а эмоции от скорости по волнам и красоты островов не передать словами!" },
  { tour: "jetski", msg: 11574, name: "Виктор", date: "2026-10", text: "Брали несколько экскурсий, всё прошло супер. Катание на гидроциклах запомнилось больше всего — если хочется ярких эмоций, вам точно стоит попробовать! Гидам отдельное спасибо." },
  { tour: "early-phi-phi", msg: 11578, name: "Анастасия", date: "2026-10", text: "По совету Сардора выбрали «Ранний Пхи-Пхи». Пугало, что нужно встать в 3 утра, но всё прошло отлично! День прошёл легко, с кучей ярких эмоций. Гид Виталий очень интересно рассказывал истории о каждой точке. Подкупило, что входит двухразовое полноценное питание, напитки и фрукты." },
  { tour: "early-phi-phi", msg: 11621, name: "Гость из чата", date: "2026-10", text: "Ездила на «Ранний Пхи-Пхи». Всё очень понравилось, отлично организовано, кормили очень вкусно, нигде не бежали, не спешили — рекомендую." },
  { tour: "five-pearls", msg: 11557, name: "Гость из чата", date: "2026-10", text: "Побывали на двухдневной экскурсии «5 жемчужин Андамана». Остались в восторге от невероятных видов. Огромная благодарность гидам и капитанам — была создана максимально комфортная и безопасная обстановка. Очень рекомендую!" },
  { tour: "five-pearls", msg: 11562, name: "Гость из чата", date: "2026-10", text: "Наши 2 дня прошли великолепно, много нового узнали и посмотрели. Благодаря гиду Инне дни получились весёлыми и познавательными. Отдельное спасибо тайской команде, которая заботилась о нашей безопасности и комфорте." },
  { tour: "avatar", msg: 11467, name: "Гость из чата", date: "2026-09", text: "Хочу поблагодарить за отличную организацию экскурсии «Мир Аватара» Сардора и его команду, в частности гида Никиту. Было очень интересно!" },
  { tour: "phangnga", msg: 11575, name: "Сергей", date: "2026-10", text: "Были на «Пути Аватара». Всё прошло просто супер! Эмоции через край, особенно общение со слонами. Отдельное спасибо гиду Вугару за профессионализм. Всем рекомендую!" },
  { tour: "krabi", msg: 11576, name: "Гость из чата", date: "2026-10", text: "Ездили на «Тропический рай Краби» с закатом. Острова невероятно живописные. Ещё больше повезло с гидом — спасибо Инне! Своим позитивом она зарядила всю группу с самого утра." },
  { tour: "fishing", msg: 11592, name: "Гость из чата", date: "2026-10", text: "Ездили на рыбалку, всё прошло отлично! Покормили хорошим завтраком, на троллинге поймали несколько тунцов — из них сделали нереальный сашими. Потом снорклинг с ластами и масками. У нас лишь слова благодарности." },
  { tour: "cheowlan", msg: 11529, name: "Гость из чата", date: "2026-10", text: "Брали Као Сок + Чео Лан. Лучшая экскурсия, насыщенная локациями. Еда потрясающая, тайминги просчитаны, на локациях без беготни. Отдельное спасибо гиду Вугару — понравился всей группе!" },
  { tour: null, msg: 11537, name: "Гость из чата", date: "2026-10", text: "Сардор досконально вник в наш запрос, подобрал 2 отличные экскурсии в наших временных рамках и всегда оперативно отвечал на вопросы." },
  { tour: null, msg: 11501, name: "Гость из чата", date: "2026-09", text: "Брали у вас экскурсии в январе — всё было супер! В декабре решили в Паттайю сгонять, хотим, чтобы всё было так же чётко организовано, как у вас." }
];


/* Настоящие данные сообщений из чата (t.me/phuketsardor, публичные посты): имя, цвет аватарки Telegram, фото, время, реакции, полный текст */
window.TG_MSGS = {"11647": {"n": "Женя Хандрыга", "c": 5, "l": "Ж", "a": 1, "t": "2026-10-13T06:47:37Z", "r": ["🤝2", "🔥1"], "x": "Гоняли на экскурсию 9 остров, море очень спокойное, волн вообще не было, лучше чем в высокий сезон😁 летали на полной скорости и даже попу не отбили! Русский гид Андрей потрясающий, легко нашли общий язык\nСкорость, драйв, экстрим если хотите, то обязательно нужно посетить джетски 9 островов!\nСпасибо Сардор! 1000000/10"}, "11587": {"n": "Eremeeva Daria", "c": 5, "l": "E", "a": 1, "t": "2026-10-07T08:58:34Z", "r": ["❤4"], "x": "Всем привет! Хочу оставить отзыв об экскурсии на гидриках по 9 островам.\nНас многие пугали, что это тяжело, сложно, устанете и сгорите))) я тут чтоб развеять ваши сомнения, если они есть ))\nЭкскурсия очень крутая, идеальные сопровождающие, русские, проблем вообще с пониманием нет.\nЭмоции потрясающие, весело, местами экстремально и в целом очень круто.\nКрайне рекомендую эту экскурсию ☀️\nСпасибо за оперативность и качество предоставляемых услуг 🫶🫶🫶 все на высоте", "g": {"w": 453, "h": 177, "t": [[0, 0, 133, 177, 0], [135, 0, 318, 177, "0:30"]]}}, "11616": {"n": "Александр", "c": 2, "l": "А", "a": 0, "t": "2026-10-10T05:48:33Z", "r": ["❤1", "🔥1", "😁1"], "x": "Огромное Вам спасибо за вчерашнюю экскурсию «9 островов» !!! Гиды классные , сервис отличный , все необходимое можно купить на базе перед выездом. Все честно и по времени и по стоимости и по впечатлениям !!! Еще раз огромное спасибо 🫵🏻👍🏻💪🏻🤝", "g": {"w": 453, "h": 604, "t": [[0, 0, 453, 604, 0]]}}, "11527": {"n": "DARIA GENNADIEVNA", "c": 0, "l": "D", "a": 1, "t": "2026-09-30T10:20:10Z", "r": ["❤2", "❤‍🔥1"], "x": "Спасибо @ds_sardor за то, что организовал потрясающую экскурсию на гидроциклах. Все подробно рассказал, помог выбрать самый подходящий вариант. Уровень сервиса и комфорта был на высоте, а эмоции от скорости на гидрике по волнам и потрясающей красоты островов не передать словами!🔥🔥🔥"}, "11574": {"n": "Viktor", "c": 2, "l": "V", "a": 0, "t": "2026-10-04T08:00:35Z", "r": ["🤝1"], "x": "Добрый день. Брали несколько экскурсий , всё прошло супер. Катание на гидроциклах запомнилось больше всего , если хочется яркий эмоций, вам точно стоит попробовать!\nГидам отдельное спасибо ,отличные ребята!"}, "11578": {"n": "Анастасия", "c": 2, "l": "А", "a": 0, "t": "2026-10-06T06:20:57Z", "r": ["❤3"], "x": "Всем пламенный привет!\nБыли в Тае в конце августа, решили посетить в последние дни экскурсию по островам. Выбирали разные варианты, но по совету Сардора решили выбрать \"Ранний Пхи Пхи\". Пугало, что нужно встать в 3 утра, потому что в 4 забирает трасфер, а я прям всем совам сова😂😂\n\nНо все прошло отлично! День прошел легко, с кучей ярких эмоций. Нам невероятно повезло с погодой, было жарко и солнечно. Наш гид Виталий очень интересно рассказывал истории о каждой точке в путешествии, отдельное ему спасибо!\n\nЕще подкупило, что в стоимость входит двух разовое ПОЛНОЦЕННОЕ питание, и в путешествии нас сопровождали напитки и фрукты. Подробнее можно посмотреть в моем рилсе🙌🏻\n\nСпасибо большое команде, обязательно буду рекомендовать вас друзьям!❤️🇹🇭🥥🥂🌴"}, "11621": {"n": "Светик", "c": 3, "l": "С", "a": 1, "t": "2026-10-13T03:12:06Z", "r": [], "x": "Ездила на «Ранний Пхи пхи»\nМне все очень понравилось , все отлично организовано , кормили очень вкусно , нигде не бежали не спешили - рекомендую", "g": {"w": 421, "h": 604, "t": [[0, 0, 297, 604, 0], [299, 0, 122, 216, "0:12"], [299, 218, 122, 222, "0:18"], [299, 442, 122, 162, 0]]}}, "11557": {"n": "Александра", "c": 4, "l": "А", "a": 0, "t": "2026-10-02T04:06:12Z", "r": ["❤2", "👍1"], "x": "Всем доброе утро 🌞\nПобывали на двухдневной экскурсии 5 жемчужин Андамана!\nОстались просто в восторге от красочных и невероятных видов. У нас была потрясающая и веселая команда. Хочется выразить огромную благодарность Ине и Нони - наши гиды, также отдельная спасибо нашим капитанам. Была создана максимально комфортная и безопасная обстановка ❤️\nМы до сих пор под впечатлением 🔥\nОчень рекомендую попасть именно в такую сплоченную и веселую команду, как была у нас 🥰", "g": {"w": 453, "h": 479, "t": [[0, 0, 270, 270, 0], [272, 0, 181, 270, "0:18"], [0, 272, 155, 207, 0], [157, 272, 138, 207, "0:04"], [297, 272, 156, 207, 0]]}}, "11562": {"n": "Serg", "c": 0, "l": "S", "a": 0, "t": "2026-10-02T06:10:11Z", "r": ["❤‍🔥2", "❤1"], "x": "Добрый день. Хотелось бы поделиться впечатлениями от экскурсии 5 жемчужин. Наши 2 дня прошли великолепно, всего много нового узнали и посмотрели. А благодаря нашему гиду Инне эти два дня получились веселыми, зажигательными, познавательными и душевно приятными. Отдельное спасибо нашей тайской команде, которые всегда помогали и заботились о нас, о нашей безопасности  и комфорте.", "g": {"w": 453, "h": 691, "t": [[0, 0, 453, 453, 0], [0, 455, 224, 132, 0], [226, 455, 227, 132, "0:10"], [0, 589, 173, 102, 0], [175, 589, 173, 102, 0], [350, 589, 103, 102, "0:11"]]}}, "11467": {"n": "Valeria Kartashova", "c": 2, "l": "V", "a": 0, "t": "2026-09-24T06:22:50Z", "r": ["❤3"], "x": "Добрый день! Хочу поблагодарить за отличную организацию экскурсии «Мир Аватара» Сардора и его команду, в частности гида Никиту. Было очень интересно!", "g": {"w": 453, "h": 450, "t": [[0, 0, 149, 224, 0], [151, 0, 149, 224, 0], [302, 0, 151, 224, 0], [0, 226, 149, 224, 0], [151, 226, 149, 224, 0], [302, 226, 151, 224, 0]]}}, "11575": {"n": "Serg", "c": 0, "l": "S", "a": 0, "t": "2026-10-04T16:37:20Z", "r": ["❤1"], "x": "Добрый вечер! Были на экскурсии «Путь Аватара». Все прошло просто супер! Эмоции просто через край, максимально запало это общение со слонами просто не передать словами, нужно просто это ощутить. Отдельное спасибо гиду Вугару за его профессионализм и умение донести информацию до группы. Очень редко встретишь такого профессионала, день в общении с ним был просто незабываемый. Всем рекомендую👍!"}, "11576": {"n": "Anton", "c": 3, "l": "A", "a": 1, "t": "2026-10-05T12:10:58Z", "r": ["❤‍🔥3"], "x": "Всем доброго дня.\nЕздили 3 октября на экскурсию Тропический рай Краби с закатом.\nОстрова невероятно живописные.\nС погодой повезло.\nЕщё больше нам повезло с гидом, отдельное спасибо Инне! Очень классная энергетика, своим позитивом она зарядила всю группу с самого утра.", "g": {"w": 453, "h": 805, "t": [[0, 0, 453, 805, 0]]}}, "11592": {"n": "Danechek", "c": 5, "l": "D", "a": 0, "t": "2026-10-08T02:32:14Z", "r": ["❤2", "👍2", "🔥2"], "x": "Всем привет!\nЕздили на рыбалку, все прошло отлично!\nПокормили вполне себе хорошим завтраком и отправились на лодку. Нас было 11 человек на борту.\nНачали с троллинга, удалось поймать несколько тунцов, из которых впоследствии сделали нереальный сашими👍\nНа глубоководной рыбалке не такой насыщенный клев был, но в целом троллинг все компенсировал.\nДалее остановились на подводную охоту, там же был снорклинг с ластами и масками.\nВсе понравилось, можно было забрать рыбу, но не стали, оставили команде.\nВ конце угостили мороженым😋\nУ нас лишь слова благодарности за такую экскурсию🙏", "g": {"w": 453, "h": 300, "t": [[0, 0, 225, 300, 0], [227, 0, 226, 300, 0]]}}, "11529": {"n": "mike", "c": 1, "l": "m", "a": 1, "t": "2026-10-01T03:19:38Z", "r": ["❤1"], "x": "Всем привет! Брали экскурсию на КАО СОК+ЧАО ЛАНГ. Это лучшая экскурсия, насыщенная локациями и удобным перемещением по ним, на локациях есть туалет и время между локациями небольшое. Эта экскурсия, где ты можешь довериться гиду и просто получать эмоции и удовольствие от видов. Еда потрясающая.\nВсегда вкусно и вовремя кормили. Тайминги просчитаны, время на локациях без беготни. Очень грамотно!\nЭта та эксурсия, которую можно брать несколько раз и получать новые эмоции)))\n\nОтдельное спасибо гиду Вугару!\nПонравился всей группе, открытый и интересный человек, знает, как сделать экскурсию незабываемой, имеет индивидуальный подход к каждой группе, был своим для всех.\nРассказывает факты и истории даже если хочешь спать, не уснешь, интересно слушать 😃рекомендуем!", "g": {"w": 453, "h": 386, "t": [[0, 0, 128, 192, 0], [130, 0, 128, 192, 0], [260, 0, 193, 192, 0], [0, 194, 192, 192, 0], [194, 194, 128, 192, 0], [324, 194, 129, 192, 0]]}}, "11537": {"n": "mike", "c": 1, "l": "m", "a": 1, "t": "2026-10-01T03:24:36Z", "r": ["❤1"], "x": "Сардор (@ds_sardor), досконально вник в наш запрос и подобрал 2 отличные экскурсии в наших временных рамках и всегда оперативно отвечал на вопросы, ему отдельное спасибо за подготовку 🔥🔥🔥"}, "11501": {"n": "12345", "c": 3, "l": "1", "a": 0, "t": "2026-09-24T18:21:22Z", "r": [], "x": "Сардор, здравствуйте!\nБрали у вас экскурсии в январе, все было супер! В декабре решили в Паттайю сгонять. Можете кого-нибудь посоветовать в плане экскурсий, чтобы все было так же четко организовано, как у вас?"}};
/* Цены из CRM (Tour Catalog), 15.10.2026. a — взрослый, c — ребёнок 4–11 лет. Первый вариант — базовый («от»). */
window.PRICES = {
  "krabi":        [{ ru: "Standard", en: "Standard", a: 2800, c: 2500 }, { ru: "Comfort+", en: "Comfort+", a: 3000, c: 2700 }],
  "early-phi-phi":[{ ru: "Standard", en: "Standard", a: 2800, c: 2500 }, { ru: "Comfort+", en: "Comfort+", a: 3000, c: 2700 }],
  "avatar":       [{ ru: "Стандарт", en: "Standard", a: 3450, c: 3150 }],
  "similan":      [{ ru: "Standard", en: "Standard", a: 3300, c: 3000 }, { ru: "Comfort+", en: "Comfort+", a: 3400, c: 3100 }],
  "sunrise":      [{ ru: "Стандарт", en: "Standard", a: 2100, c: 1800 }, { ru: "Комфорт", en: "Comfort", a: 2300, c: 2000 }],
  "phi-phi-2day": [{ ru: "Standard · Enhanced Room", en: "Standard · Enhanced Room", a: 4950, c: 4450 }, { ru: "Standard · Standard Room", en: "Standard · Standard Room", a: 5000, c: 4500 }, { ru: "Standard · Superior Room", en: "Standard · Superior Room", a: 5500, c: 5000 }, { ru: "Comfort+ · Enhanced Room", en: "Comfort+ · Enhanced Room", a: 5250, c: 4750 }, { ru: "Comfort+ · Standard Room", en: "Comfort+ · Standard Room", a: 5300, c: 4800 }, { ru: "Comfort+ · Superior Room", en: "Comfort+ · Superior Room", a: 5800, c: 5300 }],
  "five-pearls":  [{ ru: "Standard · Enhanced Room", en: "Standard · Enhanced Room", a: 5950, c: 5450 }, { ru: "Standard · Standard Room", en: "Standard · Standard Room", a: 6000, c: 5500 }, { ru: "Standard · Superior Room", en: "Standard · Superior Room", a: 6500, c: 6000 }, { ru: "Comfort+ · Enhanced Room", en: "Comfort+ · Enhanced Room", a: 6250, c: 5750 }, { ru: "Comfort+ · Standard Room", en: "Comfort+ · Standard Room", a: 6300, c: 5800 }, { ru: "Comfort+ · Superior Room", en: "Comfort+ · Superior Room", a: 6800, c: 6300 }],
  "plankton":     [{ ru: "Смотровая Самет + белый храм", en: "Samet viewpoint + White Temple", a: 3050, c: 2750 }, { ru: "Смотровая Самет + горячие источники", en: "Samet viewpoint + hot springs", a: 3350, c: 3050 }, { ru: "Стеклянный мост + белый храм", en: "Glass bridge + White Temple", a: 3550, c: 3250 }, { ru: "Стеклянный мост + горячие источники", en: "Glass bridge + hot springs", a: 3850, c: 3550 }],
  "phuket":       [{ ru: "Стандарт", en: "Standard", a: 1650, c: 1550 }],
  "rafting":      [{ ru: "Стандарт", en: "Standard", a: 2050, c: 1850 }],
  "rafting-atv":  [{ ru: "Стандарт", en: "Standard", a: 2550, c: 2350 }],
  "phangnga":     [{ ru: "Без стеклянного моста", en: "Without glass bridge", a: 2550, c: 2250 }, { ru: "Со стеклянным мостом", en: "With glass bridge", a: 3150, c: 2850 }],
  "cheowlan":     [{ ru: "1 день", en: "1 day", a: 3100, c: 2700 }]
};

/* Условия отмены — из шаблона CRM «Условия отмены и переноса операторов BTC, Phuket Jetski Club…» */
window.CANCEL = {
  day: {
    ru: ["Более чем за 3 дня — штраф 1 000 ฿ с человека", "Менее чем за 3 дня — штраф 50% стоимости", "После 17:00 накануне, в день экскурсии или неявка — 100%", "Проспали — можно перенести на другой день с доплатой 50%", "Заболели — со справкой из тайского госпиталя (до 15:00 в день экскурсии) рассматриваем индивидуально"],
    en: ["More than 3 days before — 1,000 ฿ fee per person", "Less than 3 days before — 50% fee", "After 17:00 the day before, on the day or no-show — 100%", "Overslept — can move to another day with a 50% surcharge", "Got sick — with a Thai hospital certificate (by 15:00 on the tour day) we review individually"]
  },
  jetski: {
    ru: ["Более чем за 3 дня — штраф 2 400 ฿ за гидроцикл", "Менее чем за 3 дня — штраф 50% стоимости", "После 17:00 накануне, в день экскурсии или неявка — 100%"],
    en: ["More than 3 days before — 2,400 ฿ fee per jet ski", "Less than 3 days before — 50% fee", "After 17:00 the day before, on the day or no-show — 100%"]
  },
  twoday: {
    ru: ["Более чем за 3 дня — штраф 1 000 ฿ с человека", "Менее чем за 72 часа — 100%", "Справка из госпиталя для двухдневных программ не действует"],
    en: ["More than 3 days before — 1,000 ฿ fee per person", "Less than 72 hours before — 100%", "Hospital certificates do not apply to overnight tours"]
  },
  similan: {
    ru: ["Отмена — штраф 100% в любом случае, независимо от даты", "Перенос при неявке не делается"],
    en: ["Cancellation — 100% fee in any case, regardless of the date", "No rescheduling after a no-show"]
  }
};
window.CANCEL_TYPE = { "jetski": "jetski", "phi-phi-2day": "twoday", "five-pearls": "twoday", "similan": "similan", "diving": null, "fishing": "day" };

/* ===== Полный каталог из CRM (Tour Catalog, 15.10.2026) + справочники менеджеров ===== */
(function () {
  function P(ru, en, a, c) { return { ru: ru, en: en, a: a, c: c == null ? null : c }; }
  function add(o) { window.TOURS.push(o); }
  function tour(id, img, regions, cats, ru, en, extra) {
    var o = { id: id, img: img, price: 0, regions: regions, cats: cats,
      ru: { name: ru[0], place: ru[1], duration: ru[2], tag: ru[3], desc: ru[4], route: ru[5], inc: ru[6] },
      en: { name: en[0], place: en[1], duration: en[2], tag: en[3], desc: en[4], route: en[5], inc: en[6] } };
    if (extra) Object.keys(extra).forEach(function (k) { o[k] = extra[k]; });
    add(o);
  }
  var JET = { ru: "за гидроцикл", en: "per jet ski", qty: { ru: "Гидроциклы", en: "Jet skis" } };
  var PERSON = { ru: "за человека", en: "per person", qty: { ru: "Гости", en: "Guests" } };
  var PLANE = { ru: "за самолёт", en: "per plane", qty: { ru: "Самолёты", en: "Planes" } };
  var FROM_KRABI_RU = "Старт из Краби — для тех, кто живёт в Краби", FROM_KRABI_EN = "Starts in Krabi — for guests staying in Krabi";

  /* --- существующие: точные тарифы из CRM --- */
  var j = window.TOURS.filter(function (t) { return t.id === "jetski"; })[0];
  if (j) j.unit = JET;
  Object.assign(window.PRICES, {
    "jetski": [P("Yamaha 1100", "Yamaha 1100", 7900), P("Sea-Doo 1630", "Sea-Doo 1630", 8900), P("Yamaha FX 1900", "Yamaha FX 1900", 11400)],
    "fishing": [P("Рыбак", "Angler", 3000), P("Без рыбалки (сопровождающий)", "Non-angler (companion)", 2700)],
    "diving": [P("Без сертификата", "Non-certified", 4700), P("С сертификатом", "Certified diver", 5300), Object.assign(P("Сопровождающий без погружений", "Companion (no diving)", 3500), { x: 1 })],
    "early-krabi": [P("Стандарт", "Standard", 3200, 2800)],
    "cheowlan": [P("1 день", "1 day", 3100, 2700)]
  });
  ["fishing", "diving"].forEach(function (id) { var t = window.TOURS.filter(function (z) { return z.id === id; })[0]; if (t) t.unit = PERSON; });
  var ek = window.TOURS.filter(function (t) { return t.id === "early-krabi"; })[0]; if (ek) ek.kidAge = "3–11";

  /* ---------- МОРЕ: BTC ---------- */
  tour("eleven-islands", "phangnga", ["phangnga", "krabi"], ["sea"],
    ["11 островов", "Пханг-Нга и Краби", "1 день", "Максимум островов за день",
     "Самый насыщенный морской день без ночёвки: залив Пханг-Нга с островом Джеймса Бонда, каноэ в мангровых протоках, деревня морских цыган Паньи и острова Краби.",
     ["Сбор по отелям 06:00–06:30, пирс Яму или Чалонг", "Остров Панак, залив Пханг-Нга", "Пещера Ice Cream (при отливе)", "Остров Джеймса Бонда — высадка", "Каноэ у острова Талу, мангровые заросли", "Обед в деревне Паньи", "Острова Краби: купание и снорклинг", "Возвращение на пирс ~18:10"],
     ["Трансфер", "Гид и страховка", "Входные билеты в нацпарки", "Обед в деревне Паньи", "Напитки и фрукты на борту", "Жилеты, маски, трубки"]],
    ["11 Islands", "Phang Nga & Krabi", "1 day", "The most islands in a day",
     "The busiest sea day without an overnight: Phang Nga Bay with James Bond Island, canoeing in the mangroves, the Panyee sea-gypsy village and the Krabi islands.",
     ["Hotel pick-up 06:00–06:30, Yamu or Chalong pier", "Panak island, Phang Nga Bay", "Ice Cream cave (at low tide)", "James Bond Island — landing", "Canoeing at Talu island, mangroves", "Lunch at Panyee village", "Krabi islands: swimming and snorkelling", "Back at the pier ~18:10"],
     ["Transfer", "Guide and insurance", "National park fees", "Lunch at Panyee village", "Drinks and fruit on board", "Life jackets, masks, snorkels"]]);
  tour("four-pearls", "krabi", ["krabi", "phiphi"], ["sea", "overnight"],
    ["4 жемчужины Андаманского моря", "Краби и Пхи-Пхи", "2 дня / 1 ночь", "Райлей, Пхи-Пхи, ночь на острове",
     "Как «5 жемчужин», но первый день — в провинции Краби: пляж Прананг (Райлей), пещера плодородия, острова Близнецы и Курица, снорклинг. Ночь в отеле на Пхи-Пхи.",
     ["День 1: выезд ~06:50, пирс Яму или Чалонг", "Пляж Прананг (Райлей) и пещера плодородия", "Острова Близнецы и Курица, снорклинг", "Заселение на Пхи-Пхи, ужин", "День 2: острова Пхи-Пхи", "Возвращение на пирс ~16:30"],
     ["Трансфер", "Гид и страховка", "Входные билеты в нацпарки", "2 обеда, 1 ужин, 1 завтрак", "Ночёвка в отеле", "Напитки и фрукты на борту", "Жилеты, маски, трубки"]],
    ["4 Pearls of the Andaman Sea", "Krabi & Phi Phi", "2 days / 1 night", "Railay, Phi Phi, a night on the island",
     "Like “5 Pearls”, but day one is in Krabi province: Phra Nang (Railay) beach, the fertility cave, the Twins and Chicken islands and snorkelling. Overnight at a hotel on Phi Phi.",
     ["Day 1: departure ~06:50, Yamu or Chalong pier", "Phra Nang (Railay) beach and the fertility cave", "Twins and Chicken islands, snorkelling", "Check-in on Phi Phi, dinner", "Day 2: Phi Phi islands", "Back at the pier ~16:30"],
     ["Transfer", "Guide and insurance", "National park fees", "2 lunches, 1 dinner, 1 breakfast", "Hotel night", "Drinks and fruit on board", "Life jackets, masks, snorkels"]]);
  tour("maiton-catamaran", "early-phi-phi", ["phiphi", "phuket"], ["sea"],
    ["Пхи-Пхи, Рача Яй и закат у Майтона", "Пхи-Пхи · катамаран", "1 день", "Катамаран с горкой и бассейном",
     "Премиум-день на двухпалубном катамаране с горкой, бассейном, SUP-бордами и прозрачными каноэ: Рача Яй утром без толп, Пхи-Пхи и закатная вечеринка у острова Майтон.",
     ["Сбор 06:30–07:30, лаунж на пирсе: завтрак, кофе", "Выход ~08:30", "Рача Яй", "Острова Пхи-Пхи", "Обед", "Закатная вечеринка у острова Майтон", "Возвращение на пирс ~19:00"],
     ["Трансфер и гид", "Завтрак-шведский стол на пирсе", "Полноценный обед", "Напитки и фрукты на борту", "Коктейль в бамбуковом стакане в подарок", "Страховка, жилеты, маски, трубки", "Полотенца, Wi-Fi, мороженое по возвращении"]],
    ["Phi Phi, Racha Yai & Maiton Sunset", "Phi Phi · catamaran", "1 day", "Catamaran with slide & pool",
     "A premium day on a two-deck catamaran with a slide, pool, SUP boards and clear canoes: Racha Yai in the quiet morning, Phi Phi and a sunset party off Maiton island.",
     ["Pick-up 06:30–07:30, pier lounge: breakfast, coffee", "Departure ~08:30", "Racha Yai", "Phi Phi islands", "Lunch", "Sunset party off Maiton island", "Back at the pier ~19:00"],
     ["Transfer and guide", "Buffet breakfast at the pier", "Full lunch", "Drinks and fruit on board", "A welcome cocktail in a bamboo cup", "Insurance, life jackets, masks, snorkels", "Towels, Wi-Fi, ice cream on return"]]);
  tour("phi-phi-bamboo-cat", "early-phi-phi", ["phiphi"], ["sea"],
    ["Пхи-Пхи + Бамбу на катамаране", "Острова Пхи-Пхи", "1 день", "Классика на катамаране",
     "Пхи-Пхи и остров Бамбу на катамаране. Программу дня и состав услуг менеджер пришлёт перед бронью.",
     ["Трансфер на пирс", "Острова Пхи-Пхи", "Остров Бамбу", "Возвращение на Пхукет"], []],
    ["Phi Phi + Bamboo by Catamaran", "Phi Phi islands", "1 day", "The classic, by catamaran",
     "Phi Phi and Bamboo Island by catamaran. Our manager will send the day plan and inclusions before booking.",
     ["Transfer to the pier", "Phi Phi islands", "Bamboo Island", "Return to Phuket"], []]);
  tour("phi-phi-rang-yai-fishing", "early-phi-phi", ["phiphi", "phuket"], ["sea"],
    ["Пхи-Пхи + Бамбу + Ранг Яй с рыбалкой", "Пхи-Пхи и Ранг Яй", "1 день", "Острова и рыбалка в один день",
     "Острова Пхи-Пхи и Бамбу, а на обратном пути — остров Ранг Яй с рыбалкой. Тарифы Standard и Comfort+. Подробную программу пришлёт менеджер.",
     ["Трансфер на пирс", "Острова Пхи-Пхи", "Остров Бамбу", "Остров Ранг Яй и рыбалка", "Возвращение на Пхукет"], []],
    ["Phi Phi + Bamboo + Rang Yai with Fishing", "Phi Phi & Rang Yai", "1 day", "Islands and fishing in one day",
     "Phi Phi and Bamboo islands, then Rang Yai island with fishing on the way back. Standard and Comfort+ tariffs. Our manager will send the full plan.",
     ["Transfer to the pier", "Phi Phi islands", "Bamboo Island", "Rang Yai island and fishing", "Return to Phuket"], []]);
  tour("phi-phi-premium", "early-phi-phi", ["phiphi"], ["sea"],
    ["Пхи-Пхи Premium: частный пляж и закат", "Острова Пхи-Пхи", "1 день", "Бич-клуб и закат",
     "Премиальный формат Пхи-Пхи: частный пляж, бич-клуб и закат. Подробную программу и что включено пришлёт менеджер.",
     ["Трансфер на пирс", "Острова Пхи-Пхи", "Частный пляж и бич-клуб", "Закат", "Возвращение на Пхукет"], []],
    ["Phi Phi Premium: Private Beach & Sunset", "Phi Phi islands", "1 day", "Beach club & sunset",
     "A premium take on Phi Phi: a private beach, a beach club and the sunset. Our manager will send the full plan and inclusions.",
     ["Transfer to the pier", "Phi Phi islands", "Private beach and beach club", "Sunset", "Return to Phuket"], []]);

  /* ---------- МОРЕ: Narayana ---------- */
  tour("phi-phi-paradise-early", "early-phi-phi", ["phiphi"], ["sea"],
    ["Phi Phi Paradise: ранний катамаран", "Острова Пхи-Пхи", "Утро и день", "Майя Бэй до толп",
     "Ранний выход на скоростном двухпалубном катамаране: бухта Майя до основных толп, лагуна Пиле, снорклинг. Возвращение в марину в 15:30.",
     ["Трансфер 05:15–05:30, марина Boat Lagoon, лёгкий завтрак", "Отправление 06:30", "Острова Бида Нок и Бида Най", "Бухта Лосама и Майя Бэй (закрыта в августе–сентябре)", "Лагуна Пиле: купание и прыжки с палубы", "Пещера Викингов", "Обед и снорклинг", "Возвращение в марину 15:30"],
     ["Трансфер", "Билеты в нацпарк", "Снаряжение для снорклинга", "Обед", "Страховка", "Русскоязычный гид"]],
    ["Phi Phi Paradise Early Catamaran", "Phi Phi islands", "Morning & day", "Maya Bay before the crowds",
     "An early start on a fast two-deck catamaran: Maya Bay before the crowds, Pileh Lagoon and snorkelling. Back at the marina at 15:30.",
     ["Pick-up 05:15–05:30, Boat Lagoon marina, light breakfast", "Departure 06:30", "Bida Nok and Bida Nai islands", "Loh Samah and Maya Bay (closed Aug–Sep)", "Pileh Lagoon: swimming and deck jumps", "Viking Cave", "Lunch and snorkelling", "Back at the marina 15:30"],
     ["Transfer", "National park fees", "Snorkelling gear", "Lunch", "Insurance", "Russian-speaking guide"]], { kidAge: "3–11" });
  tour("phi-phi-rung", "early-phi-phi", ["phiphi", "phuket"], ["sea"],
    ["Пхи-Пхи + частный остров Rung", "Пхи-Пхи · Smart Catamaran", "1 день · только суббота", "Финал на частном острове",
     "Премиум-тур на Smart Catamaran: Майя Бэй, лагуна Пиле, пещера Викингов, обед на Пхи-Пхи Дон и финал на частном острове Rung. Выезд только по субботам.",
     ["Трансфер 07:00–07:30, частный пирс Phuket Boat Lagoon", "Отправление 08:30", "Пхи-Пхи Лей: Майя Бэй, лагуна Пиле, пещера Викингов, снорклинг", "Обед на Пхи-Пхи Дон", "Свободное время", "Частный остров Rung", "Возвращение 16:00"],
     ["Трансфер", "Билеты в нацпарк", "Снаряжение для снорклинга", "Обед", "Страховка", "Русскоязычный гид"]],
    ["Phi Phi + Rung Private Island", "Phi Phi · Smart Catamaran", "1 day · Saturdays only", "Ending on a private island",
     "A premium Smart Catamaran tour: Maya Bay, Pileh Lagoon, Viking Cave, lunch on Phi Phi Don and a finale on the private Rung island. Saturdays only.",
     ["Pick-up 07:00–07:30, private Phuket Boat Lagoon pier", "Departure 08:30", "Phi Phi Leh: Maya Bay, Pileh Lagoon, Viking Cave, snorkelling", "Lunch on Phi Phi Don", "Free time", "Rung private island", "Back 16:00"],
     ["Transfer", "National park fees", "Snorkelling gear", "Lunch", "Insurance", "Russian-speaking guide"]], { kidAge: "3–11" });
  tour("james-bond", "phangnga", ["phangnga"], ["sea"],
    ["James Bond & Co", "Залив Пханг-Нга · катамаран", "1 день", "Остров 007 на катамаране",
     "Премиум-тур на скоростном катамаране в залив Пханг-Нга: остров Ко Панак, остров Джеймса Бонда, каноэ по пещерам и мангровым протокам, плавучая деревня Паньи.",
     ["Трансфер 06:00, чай и кофе на причале", "Отправление 07:30", "Остров Ко Панак", "Остров Джеймса Бонда — прогулка", "Каноэ по пещерам, гротам и мангровым зарослям", "Плавучая деревня Паньи", "Обед и снорклинг", "Возвращение в марину 16:00"],
     ["Трансфер", "Билеты в нацпарк", "Снаряжение для снорклинга", "Обед", "Страховка", "Русскоязычный гид"]],
    ["James Bond & Co", "Phang Nga Bay · catamaran", "1 day", "Island 007 by catamaran",
     "A premium fast-catamaran tour of Phang Nga Bay: Koh Panak, James Bond Island, canoeing through caves and mangroves, and the Panyee floating village.",
     ["Pick-up 06:00, tea and coffee at the pier", "Departure 07:30", "Koh Panak", "James Bond Island — walk", "Canoeing through caves, grottoes and mangroves", "Panyee floating village", "Lunch and snorkelling", "Back at the marina 16:00"],
     ["Transfer", "National park fees", "Snorkelling gear", "Lunch", "Insurance", "Russian-speaking guide"]], { kidAge: "3–11" });

  /* ---------- МОРЕ: Love Andaman ---------- */
  tour("la-phi-phi-bamboo", "early-phi-phi", ["phiphi"], ["sea"],
    ["Пхи-Пхи + Бамбу на скоростной лодке", "Острова Пхи-Пхи", "1 день", "Майя Бэй, Пиле, Бамбу",
     "Классический день на Пхи-Пхи: Майя Бэй, лагуна Пиле, пещера Викингов, скала обезьян, снорклинг, обед на Пхи-Пхи Дон и остров Бамбу. Есть обычный и ранний выезд.",
     ["Сбор 07:00–08:30, пирс Visit Panwa", "Завтрак на пирсе, инструктаж", "Майя Бэй — пляж из фильма «Пляж»", "Лагуна Пиле — купание", "Пещера Викингов", "Скала обезьян и снорклинг", "Обед «Ton Sai Seafood»", "Остров Бамбу", "Возвращение на пирс 16:20–16:40"],
     ["Трансфер отель — пирс — отель", "Завтрак на пирсе", "Обед-шведский стол", "Русский гид", "Сборы нацпарка", "Страховка до 1 000 000 ฿"]],
    ["Phi Phi + Bamboo by Speedboat", "Phi Phi islands", "1 day", "Maya Bay, Pileh, Bamboo",
     "The classic Phi Phi day: Maya Bay, Pileh Lagoon, Viking Cave, Monkey Rock, snorkelling, lunch on Phi Phi Don and Bamboo Island. Regular and early departures.",
     ["Pick-up 07:00–08:30, Visit Panwa pier", "Breakfast at the pier, briefing", "Maya Bay — the beach from “The Beach”", "Pileh Lagoon — swimming", "Viking Cave", "Monkey Rock and snorkelling", "Lunch at Ton Sai Seafood", "Bamboo Island", "Back at the pier 16:20–16:40"],
     ["Hotel–pier–hotel transfer", "Breakfast at the pier", "Buffet lunch", "Russian-speaking guide", "National park fees", "Insurance up to 1,000,000 ฿"]], { kidAge: "4–11" });
  tour("la-whale-shark", "early-phi-phi", ["phiphi"], ["sea"],
    ["Пхи-Пхи + Майтон + закат: катамаран «Китовая акула»", "Пхи-Пхи · катамаран", "1 день", "Лодка в Пиле включена",
     "Двухпалубный скоростной катамаран: лагуна Пиле с включённой длиннохвостой лодкой, Майя Бэй, обед на Пхи-Пхи, горка и сапборды, снэк-бар и закат у острова Майтон.",
     ["Сбор 07:00–08:00, пирс Visit Panwa, расширенный завтрак", "Отправление 10:00", "Лагуна Пиле: длиннохвостая лодка 45 минут", "Майя Бэй", "Обед «Ton Sai Seafood»", "Горка и сапборды", "Снэк-бар и закат у Майтона", "Возвращение на пирс 18:20–18:30"],
     ["Трансфер отель — пирс — отель", "Расширенный завтрак на пирсе", "Длиннохвостая лодка в лагуне Пиле", "Обед-шведский стол", "Снэк-бар на Майтоне", "Водная горка и сапборды", "Полотенце и ласты без депозита"]],
    ["Phi Phi + Maiton Sunset: “Whale Shark” Catamaran", "Phi Phi · catamaran", "1 day", "Pileh longtail included",
     "A fast two-deck catamaran: Pileh Lagoon with an included longtail ride, Maya Bay, lunch on Phi Phi, a slide and SUP boards, a snack bar and the sunset off Maiton island.",
     ["Pick-up 07:00–08:00, Visit Panwa pier, extended breakfast", "Departure 10:00", "Pileh Lagoon: 45-minute longtail ride", "Maya Bay", "Lunch at Ton Sai Seafood", "Slide and SUP boards", "Snack bar and sunset off Maiton", "Back at the pier 18:20–18:30"],
     ["Hotel–pier–hotel transfer", "Extended breakfast at the pier", "Longtail ride in Pileh Lagoon", "Buffet lunch", "Snack bar at Maiton", "Water slide and SUP boards", "Towel and fins with no deposit"]], { kidAge: "4–11" });
  tour("la-phangnga-hong", "phangnga", ["phangnga", "krabi"], ["sea"],
    ["Залив Пханг-Нга + остров Хонг", "Пханг-Нга и Краби", "1 день · ср и пт", "Смотровая 360° и каяки",
     "Ранний выезд: смотровая «360 градусов» на острове Хонг, остров Джеймса Бонда, каяки с гребцом и обед в плавучей деревне Ко Паньи. Полностью русская группа. Выезды по средам и пятницам.",
     ["Сбор 04:50–06:00, пирс Visit Panwa, завтрак", "Остров Хонг: смотровая «360 градусов»", "Остров Куду Яй", "Остров Джеймса Бонда", "Каяки с гребцом", "Обед в деревне Ко Паньи", "Остров Нака Яй", "Возвращение на пирс 15:00–15:20"],
     ["Трансфер отель — пирс — отель", "Завтрак на пирсе", "Каяки с гребцом", "Обед в деревне Ко Паньи", "Русский гид, русская группа", "Сборы нацпарка"]],
    ["Phang Nga Bay + Hong Island", "Phang Nga & Krabi", "1 day · Wed & Fri", "360° viewpoint & kayaks",
     "An early start: the “360 degrees” viewpoint on Hong island, James Bond Island, kayaks with a paddler and lunch in the Koh Panyee floating village. A fully Russian-speaking group. Wednesdays and Fridays.",
     ["Pick-up 04:50–06:00, Visit Panwa pier, breakfast", "Hong island: “360 degrees” viewpoint", "Kudu Yai island", "James Bond Island", "Kayaks with a paddler", "Lunch at Koh Panyee", "Naka Yai island", "Back at the pier 15:00–15:20"],
     ["Hotel–pier–hotel transfer", "Breakfast at the pier", "Kayaks with a paddler", "Lunch at Koh Panyee", "Russian-speaking guide and group", "National park fees"]], { kidAge: "4–11" });
  tour("la-similan", "similan", ["similan", "khaolak"], ["sea"],
    ["Симиланы: стандарт и Early Bird", "Симиланские острова", "1 день", "Смотровая «Парус» и 2 снорклинга",
     "Главный морской маршрут Андамана: смотровая «Парус» на острове №8, два снорклинга у островов №9 и №7, обед на острове. Выезд с Пхукета или из Као Лака, есть ранний Early Bird.",
     ["Сбор 06:30–08:30, пирс Табламу (Као Лак)", "Регистрация и завтрак", "Остров №8: смотровая «Парус», белый пляж", "Снорклинг у острова №9", "Снорклинг у острова №7", "Обед-шведский стол", "Возвращение на пирс 16:35, лёгкий ужин"],
     ["Трансфер (Пхукет или Као Лак)", "Завтрак на пирсе", "Обед на островах", "Лёгкий ужин после экскурсии", "Напитки на катере", "Входной билет в нацпарк", "Страховка до 1 000 000 ฿", "Русский гид", "Снаряжение для снорклинга"]],
    ["Similan Islands: Standard & Early Bird", "Similan islands", "1 day", "Sail Rock viewpoint & 2 snorkel stops",
     "The Andaman's signature sea route: Sail Rock viewpoint on island No. 8, two snorkel stops at islands No. 9 and No. 7, lunch on the island. From Phuket or Khao Lak, with an Early Bird option.",
     ["Pick-up 06:30–08:30, Tablamu pier (Khao Lak)", "Check-in and breakfast", "Island No. 8: Sail Rock viewpoint, white beach", "Snorkelling at island No. 9", "Snorkelling at island No. 7", "Buffet lunch", "Back at the pier 16:35, light dinner"],
     ["Transfer (Phuket or Khao Lak)", "Breakfast at the pier", "Lunch on the islands", "Light dinner after the tour", "Drinks on board", "National park ticket", "Insurance up to 1,000,000 ฿", "Russian-speaking guide", "Snorkelling gear"]], { kidAge: "4–11" });
  tour("la-surin", "similan", ["similan", "khaolak"], ["sea"],
    ["Суринские острова", "Му Ко Сурин", "1 день", "Лучший снорклинг Таиланда",
     "Самый «подводный» маршрут: снорклинг в бухтах Сурина, деревня морских цыган мокенов, обед в национальном парке. Катамаран из Као Лака.",
     ["Сбор 05:30–07:30, пирс Табламу, завтрак", "Переход на катамаране ~2 часа", "Снорклинг в бухте «Немо» или «Ананасовой»", "Деревня мокенов и смотровая", "Обед-шведский стол в нацпарке", "Снорклинг в бухтах", "Возвращение на пирс 17:00, ужин"],
     ["Трансфер (Пхукет или Као Лак)", "Завтрак на пирсе", "Обед в нацпарке без ограничений", "Лёгкий ужин", "Напитки на катере", "Входной билет в нацпарк", "Страховка до 1 000 000 ฿", "Русский гид", "Снаряжение для снорклинга"]],
    ["Surin Islands", "Mu Ko Surin", "1 day", "Thailand's best snorkelling",
     "The most underwater route: snorkelling in Surin's bays, the Moken sea-gypsy village and lunch in the national park. By catamaran from Khao Lak.",
     ["Pick-up 05:30–07:30, Tablamu pier, breakfast", "~2 hours by catamaran", "Snorkelling at Nemo or Pineapple bay", "Moken village and viewpoint", "Buffet lunch in the national park", "Snorkelling in the bays", "Back at the pier 17:00, dinner"],
     ["Transfer (Phuket or Khao Lak)", "Breakfast at the pier", "All-you-can-eat lunch in the park", "Light dinner", "Drinks on board", "National park ticket", "Insurance up to 1,000,000 ฿", "Russian-speaking guide", "Snorkelling gear"]], { kidAge: "4–11" });

  /* ---------- МОРЕ: из Краби (Sawanu) ---------- */
  tour("krabi-phi-phi", "early-phi-phi", ["krabi", "phiphi"], ["sea"],
    ["Пхи-Пхи + Бамбу из Краби", "Старт в Краби", "1 день", FROM_KRABI_RU,
     "Классический Пхи-Пхи с заходом со стороны Краби: Майя Бэй, лагуна Пиле, пещера Викингов, бухта обезьян, снорклинг, обед и остров Бамбу.",
     ["Сбор в лаунже Sawanu 08:30", "Катамаран с пирса Port Takola", "Майя Бэй", "Лагуна Пиле", "Пещера Викингов и бухта обезьян", "Снорклинг и обед", "Остров Бамбу", "Возвращение 16:00–17:00"],
     ["Трансфер из отеля (в Краби)", "Сертифицированный гид", "Билеты в нацпарк", "Обед в местном ресторане", "Снаряжение для снорклинга", "Напитки и снеки на борту"]],
    ["Phi Phi + Bamboo from Krabi", "Starts in Krabi", "1 day", FROM_KRABI_EN,
     "Classic Phi Phi from the Krabi side: Maya Bay, Pileh Lagoon, Viking Cave, Monkey Bay, snorkelling, lunch and Bamboo Island.",
     ["Check-in at the Sawanu lounge 08:30", "Catamaran from Port Takola", "Maya Bay", "Pileh Lagoon", "Viking Cave and Monkey Bay", "Snorkelling and lunch", "Bamboo Island", "Back 16:00–17:00"],
     ["Hotel transfer (in Krabi)", "Certified guide", "National park fees", "Lunch at a local restaurant", "Snorkelling gear", "Drinks and snacks on board"]]);
  tour("krabi-hong", "krabi", ["krabi"], ["sea"],
    ["Остров Хонг из Краби", "Старт в Краби", "1 день", FROM_KRABI_RU,
     "День вокруг острова Хонг: пляж Рейли с моря, смотровая и обед на Хонге, затем соседние острова для купания.",
     ["Сбор в лаунже Sawanu 09:30", "Пирс Port Takola", "Пляж Рейли", "Остров Хонг: пляж и смотровая", "Обед на Хонге", "Острова для купания", "Возвращение 16:30–17:30"],
     ["Трансфер из отеля (в Краби)", "Сертифицированный гид", "Билеты в нацпарк", "Обед в местном ресторане", "Снаряжение для снорклинга", "Напитки и снеки на борту"]],
    ["Hong Island from Krabi", "Starts in Krabi", "1 day", FROM_KRABI_EN,
     "A day around Hong island: Railay beach from the sea, the viewpoint and lunch on Hong, then nearby islands for swimming.",
     ["Check-in at the Sawanu lounge 09:30", "Port Takola pier", "Railay beach", "Hong island: beach and viewpoint", "Lunch on Hong", "Islands for swimming", "Back 16:30–17:30"],
     ["Hotel transfer (in Krabi)", "Certified guide", "National park fees", "Lunch at a local restaurant", "Snorkelling gear", "Drinks and snacks on board"]]);
  tour("krabi-4-islands", "krabi", ["krabi"], ["sea"],
    ["4 острова из Краби", "Старт в Краби", "Полдня – день", FROM_KRABI_RU,
     "Классика Краби: Талай Ваек — «разделённое море» с песчаной косой в отлив, остров Чикен со снорклингом, пляж острова Пода и пляж Рейли.",
     ["Сбор в лаунже Sawanu 09:30", "Пирс Port Takola", "Пляж Рейли", "Талай Ваек — «разделённое море»", "Остров Чикен: снорклинг", "Остров Пода: отдых на пляже", "Возвращение 13:30–16:30"],
     ["Трансфер из отеля (в Краби)", "Сертифицированный гид", "Билеты в нацпарк", "Обед в местном ресторане", "Снаряжение для снорклинга", "Напитки и снеки на борту"]],
    ["4 Islands from Krabi", "Starts in Krabi", "Half to full day", FROM_KRABI_EN,
     "The Krabi classic: Talay Waek “separated sea” with its low-tide sandbar, Chicken island snorkelling, Poda island beach and Railay.",
     ["Check-in at the Sawanu lounge 09:30", "Port Takola pier", "Railay beach", "Talay Waek — the “separated sea”", "Chicken island: snorkelling", "Poda island: beach time", "Back 13:30–16:30"],
     ["Hotel transfer (in Krabi)", "Certified guide", "National park fees", "Lunch at a local restaurant", "Snorkelling gear", "Drinks and snacks on board"]]);

  /* ---------- ГИДРОЦИКЛЫ: другие операторы ---------- */
  tour("jetski-tsa", "jetski", ["phuket"], ["sea", "drive"],
    ["Гидроциклы TSA: острова залива", "Пирс Санрайз-Бич, Пхукет", "4 часа", "Обед на Кокосовом острове",
     "Сафари на новых BRP Sea-Doo GTX PRO 130 (до 90 км/ч): остров Мали, деревня слонов, мангры, обед на Кокосовом острове и купание на Ранг Яй. Старт ежедневно в 09:30 и 14:00.",
     ["Пирс Санрайз-Бич", "Остров Мали", "Деревня со слонами — фотосессия", "Мангровый лес", "Кокосовый остров — обед", "Остров Ранг Яй — купание", "Возвращение на пирс"],
     ["Гидроцикл BRP Sea-Doo GTX PRO 130", "Страховка жизни и здоровья", "Русскоязычный сопровождающий", "Трансфер из бесплатных зон (Патонг, Ката, Карон, Камала и др.)", "Обед", "Напитки"]],
    ["TSA Jet Ski: Bay Islands", "Sunrise Beach pier, Phuket", "4 hours", "Lunch on Coconut Island",
     "A safari on new BRP Sea-Doo GTX PRO 130s (up to 90 km/h): Mali island, an elephant village, mangroves, lunch on Coconut Island and a swim at Rang Yai. Daily at 09:30 and 14:00.",
     ["Sunrise Beach pier", "Mali island", "Elephant village — photo stop", "Mangrove forest", "Coconut Island — lunch", "Rang Yai island — swim", "Back to the pier"],
     ["BRP Sea-Doo GTX PRO 130", "Life and health insurance", "Russian-speaking escort", "Transfer from free zones (Patong, Kata, Karon, Kamala etc.)", "Lunch", "Drinks"]], { unit: JET });
  tour("jetski-kb", "jetski", ["phuket"], ["sea", "drive"],
    ["Гидроциклы KB: северо-восточные острова", "Пирс Яму, Пхукет", "Полдня", "Спокойнее и дешевле",
     "Маршрут с пирса Яму: мангровые протоки, остров обезьян, обед на Нака Яй и снорклинг. Программа проще и спокойнее — для тех, кому важнее покататься.",
     ["Пирс Яму", "Остров Пхаэ", "Марина Ао По", "Мангровый лес", "Остров Хум", "Остров обезьян", "Обед на Нака Яй и снорклинг", "Возвращение на пирс"], []],
    ["KB Jet Ski: North-East Islands", "Yamu pier, Phuket", "Half day", "Calmer and cheaper",
     "From Yamu pier: mangrove channels, Monkey Island, lunch on Naka Yai and snorkelling. A simpler, calmer programme for those who mostly want to ride.",
     ["Yamu pier", "Phae island", "Ao Po marina", "Mangrove forest", "Hum island", "Monkey Island", "Lunch on Naka Yai and snorkelling", "Back to the pier"], []], { unit: JET });
  tour("jetski-pattaya", "jetski", ["pattaya"], ["sea", "drive"],
    ["Гидроциклы по островам Паттайи", "Паттайя", "2 или 4 часа", "Ко Лан, Ко Крок, обезьянки",
     "Морское сафари на новых BRP Sea-Doo GTX PRO 130 по островам Паттайи: снорклинг у Ко Крок, пляж Хат Нуан на Ко Лан с обезьянками. Видео на GoPro включено.",
     ["Сбор по отелям за ~1,5 часа до старта", "Остров Ко Крок: фото и снорклинг", "Остров Ко Лан", "Пляж Хат Нуан: обезьянки", "Возвращение"],
     ["Гидроцикл BRP Sea-Doo GTX PRO 130", "Страховка жизни и здоровья", "Русскоговорящий сопровождающий", "Видео на GoPro и фото", "Снорклинг", "Трансфер", "Напитки"]],
    ["Pattaya Island Jet Ski Tour", "Pattaya", "2 or 4 hours", "Koh Larn, Koh Krok, monkeys",
     "A sea safari on new BRP Sea-Doo GTX PRO 130s around Pattaya's islands: snorkelling at Koh Krok and Hat Nuan beach on Koh Larn with its monkeys. GoPro video included.",
     ["Hotel pick-up ~1.5 h before the start", "Koh Krok: photos and snorkelling", "Koh Larn", "Hat Nuan beach: monkeys", "Return"],
     ["BRP Sea-Doo GTX PRO 130", "Life and health insurance", "Russian-speaking escort", "GoPro video and photos", "Snorkelling", "Transfer", "Drinks"]], { unit: JET });

  /* ---------- БИЧ-КЛУБ ---------- */
  tour("yona-morning", "ph-yona", ["phuket"], ["show", "sea"],
    ["Yona Beach Club: утро", "Остров у Пхукета", "09:30–14:00", "Бассейны и живой вокал, с 4 лет",
     "Спокойная половина дня в бич-клубе: бассейны, бары, ресторан, живой вокал без диджея. Подходит семьям и парам. Депозит идёт на бар и ресторан.",
     ["Шаттл-лодка с пирса", "Регистрация 09:30–12:00", "Бассейны, бары и ресторан", "Последний заказ еды 13:00", "Обратная лодка до 14:00"],
     ["Депозит на бар и ресторан", "Приветственный напиток", "Шаттл-лодка пирс — клуб — пирс", "Полотенце на день", "Бассейны", "Страховка"]],
    ["Yona Beach Club: Morning", "Island off Phuket", "09:30–14:00", "Pools & live vocals, age 4+",
     "A relaxed half-day at the beach club: pools, bars, a restaurant and live vocals, no DJ. Great for families and couples. The deposit is spent at the bar and restaurant.",
     ["Shuttle boat from the pier", "Check-in 09:30–12:00", "Pools, bars and restaurant", "Last food order 13:00", "Return boat by 14:00"],
     ["Bar & restaurant deposit", "Welcome drink", "Pier–club–pier shuttle boat", "Towel for the day", "Pools", "Insurance"]], { unit: PERSON });
  tour("yona-evening", "ph-yona", ["phuket"], ["show", "sea"],
    ["Yona Beach Club: вечер", "Остров у Пхукета", "14:00–21:30", "Диджей и закат, с 20 лет",
     "Вторая половина дня и вечер в клубе: диджей, артисты, свет и звук, бассейны и закат с верхних этажей. Вход по пассу или бронь зоны (лежаки, дейбеды, VIP).",
     ["Шаттл-лодка с пирса", "Регистрация в зонах 14:00–16:00", "Бассейны, бары, ресторан", "Диджей и шоу", "Закат", "Последний заказ еды 20:30", "Обратная лодка до 21:30"],
     ["Депозит на бар и ресторан", "Приветственный напиток", "Шаттл-лодка пирс — клуб — пирс", "Полотенце на день", "Бассейны", "Диджей, артисты, шоу"]],
    ["Yona Beach Club: Evening", "Island off Phuket", "14:00–21:30", "DJ & sunset, age 20+",
     "The afternoon and evening at the club: DJs, performers, light and sound, pools and the sunset from the upper decks. Entry by pass or a booked zone (loungers, daybeds, VIP).",
     ["Shuttle boat from the pier", "Zone check-in 14:00–16:00", "Pools, bars, restaurant", "DJ and show", "Sunset", "Last food order 20:30", "Return boat by 21:30"],
     ["Bar & restaurant deposit", "Welcome drink", "Pier–club–pier shuttle boat", "Towel for the day", "Pools", "DJs, performers, show"]], { unit: PERSON });

  /* ---------- СУША ---------- */
  tour("khaolak-safari", "rafting", ["khaolak"], ["jungle"],
    ["Као Лак Safari", "Као Лак", "1 день", "Слоны, плоты, пещера обезьян",
     "Полный день в тропиках: пещера обезьян и храм Суван Куха, зоопарк, слоновье СПА с полной программой, сплав на бамбуковых плотах и обед. Самый ранний возврат среди сухопутных туров.",
     ["Выезд из отеля 06:50", "Пещера обезьян и храм Суван Куха", "Зоопарк", "Слоновье СПА: грязь, купание, душ, шоу, катание", "Сплав на бамбуковых плотах", "Фруктовые и каучуковые плантации", "Обед в тайском ресторане", "Возвращение ~16:00–19:00"],
     ["Трансфер", "Гид и страховка", "Входные билеты", "Обед", "Полная программа со слонами"]],
    ["Khao Lak Safari", "Khao Lak", "1 day", "Elephants, rafts, monkey cave",
     "A full day in the tropics: the monkey cave and Suwan Kuha temple, a zoo, an elephant spa with the full programme, bamboo rafting and lunch. The earliest return of our land tours.",
     ["Hotel pick-up 06:50", "Monkey cave and Suwan Kuha temple", "Zoo", "Elephant spa: mud, bathing, shower, show, ride", "Bamboo rafting", "Fruit and rubber plantations", "Lunch at a Thai restaurant", "Back ~16:00–19:00"],
     ["Transfer", "Guide and insurance", "Entrance tickets", "Lunch", "Full elephant programme"]]);
  tour("elephants-mantra", "avatar-phangnga", ["phangnga", "phuket"], ["jungle"],
    ["Пляж слонов + стеклянный мост + Mantra Spa", "Пханг-Нга", "1 день", "Финал в спа под открытым небом",
     "Белый храм, пляж с самолётами, купание со слонами, обед на стеклянном мосту и вечер в Mantra Spa: минеральные бассейны, том-ям и кофейные ванны, сауны.",
     ["Сбор по отелям 09:00–10:00", "Белый храм", "Пляж с самолётами", "Пляж слонов: кормление и купание", "Стеклянный мост или смотровая Самет Нангше, обед", "Mantra Spa: бассейны, ванны, сауны", "Отправление в 20:00"],
     ["Трансфер, гид и страховка", "Программа со слонами", "Вход на стеклянный мост (в варианте с мостом)", "Обед", "Посещение Mantra Spa"]],
    ["Elephant Beach + Glass Bridge + Mantra Spa", "Phang Nga", "1 day", "Ending at an open-air spa",
     "The White Temple, the plane-spotting beach, bathing with elephants, lunch on the glass bridge and an evening at Mantra Spa: mineral pools, tom yum and coffee baths, saunas.",
     ["Hotel pick-up 09:00–10:00", "White Temple", "Plane-spotting beach", "Elephant beach: feeding and bathing", "Glass bridge or Samet Nangshe viewpoint, lunch", "Mantra Spa: pools, baths, saunas", "Departure at 20:00"],
     ["Transfer, guide and insurance", "Elephant programme", "Glass bridge entry (bridge option)", "Lunch", "Mantra Spa entry"]]);
  tour("sunrise-adventure", "phangnga", ["phangnga"], ["jungle"],
    ["Рассветное приключение", "Самет Нангше, Пханг-Нга", "Ночь – обед", "Рассвет над заливом",
     "Единственный тур, который начинается до рассвета: восход на смотровой Самет Нангше (или на стеклянном мосту), завтрак с видом, лонгтейл к острову Джеймса Бонда и пляж с самолётами. В 13:30 уже в отеле.",
     ["Выезд 03:00–04:00", "Смотровая Самет Нангше до рассвета", "Восход над заливом Пханг-Нга", "Завтрак с видом", "Лонгтейл: остров Джеймса Бонда (фото с лодки), пещеры", "Пляж с самолётами", "Возвращение 13:00–13:30"],
     ["Трансфер, гид и страховка", "Лёгкий завтрак", "Прогулка на лонгтейле", "Пляж с самолётами"]],
    ["Sunrise Adventure", "Samet Nangshe, Phang Nga", "Night to lunchtime", "Sunrise over the bay",
     "Our only tour that starts before dawn: sunrise at Samet Nangshe (or on the glass bridge), breakfast with a view, a longtail to James Bond Island and the plane-spotting beach. Back by 13:30.",
     ["Pick-up 03:00–04:00", "Samet Nangshe before sunrise", "Sunrise over Phang Nga Bay", "Breakfast with a view", "Longtail: James Bond Island (photo from the boat), caves", "Plane-spotting beach", "Back 13:00–13:30"],
     ["Transfer, guide and insurance", "Light breakfast", "Longtail ride", "Plane-spotting beach"]]);
  tour("khaosok-2day", "cheowlan", ["cheowlan"], ["jungle", "overnight"],
    ["Као Сок + Чео Лан: 2 дня", "Као Сок, Сураттхани", "2 дня / 1 ночь", "Ночь в бунгало на озере",
     "Два дня в древнейших джунглях Као Сок: озеро Чео Лан, ночёвка в бунгало на понтонах, вечернее сафари и слоновья программа. Deluxe — с горячими источниками и сплавом, Standard — проще и короче.",
     ["День 1: выезд 06:50", "Слоновья программа на выбор", "Озеро Чео Лан на лонгтейле", "Заселение в бунгало на понтонах", "Вечернее сафари", "День 2: рассвет на озере", "Горячие источники и сплав (Deluxe)", "Возвращение ~14:00–19:00"],
     ["Трансфер, гид и страховка", "Сбор нацпарка", "Питание по программе", "Ночёвка в бунгало на понтонах", "Слоновья программа — одна на выбор"]],
    ["Khao Sok + Cheow Lan: 2 Days", "Khao Sok, Surat Thani", "2 days / 1 night", "A night in a lake bungalow",
     "Two days in the ancient Khao Sok jungle: Cheow Lan Lake, a night in a floating bungalow, an evening safari and an elephant programme. Deluxe adds hot springs and rafting; Standard is simpler and shorter.",
     ["Day 1: pick-up 06:50", "Elephant programme of your choice", "Cheow Lan Lake by longtail", "Check-in at the floating bungalows", "Evening safari", "Day 2: sunrise on the lake", "Hot springs and rafting (Deluxe)", "Back ~14:00–19:00"],
     ["Transfer, guide and insurance", "National park fee", "Meals as per programme", "Night in a floating bungalow", "One elephant programme of your choice"]]);

  /* ---------- ШОУ ---------- */
  tour("carnival-magic", "ph-carnival", ["phuket"], ["show"],
    ["Carnival Magic", "Камала, Пхукет", "Вечер 17:00–22:00", "Парад и 40 млн огней",
     "Крупнейший карнавальный парк Таиланда: ярмарка, аттракционы, парад «Речной карнавал» со 150 артистами и костюмами до 8 метров, затем Королевство огней.",
     ["Трансфер ~17:30", "Ярмарка, аттракционы, ужин (по билету)", "Парад «Речной карнавал» ~19:00", "Королевство огней", "Возвращение ~22:00"],
     ["Трансфер", "Входной билет в парк", "Все шоу и зоны парка", "Королевство огней", "Ужин — в билетах «с ужином»"]],
    ["Carnival Magic", "Kamala, Phuket", "Evening 17:00–22:00", "A parade and 40 million lights",
     "Thailand's biggest carnival park: a fair, rides, the “River Carnival” parade with 150 performers and costumes up to 8 m tall, then the Kingdom of Lights.",
     ["Transfer ~17:30", "Fair, rides, dinner (by ticket)", "“River Carnival” parade ~19:00", "Kingdom of Lights", "Back ~22:00"],
     ["Transfer", "Park entrance ticket", "All shows and park zones", "Kingdom of Lights", "Dinner — with “dinner” tickets"]], { kidAge: "" });
  tour("fantasea", "ph-fantasea", ["phuket"], ["show"],
    ["Phuket FantaSea", "Камала, Пхукет", "Вечер 17:30–23:00", "Шоу с 30 живыми слонами",
     "Культурный парк в Камале: Tiger Jungle Adventure, деревня фестиваля, ужин-шведский стол по билету и главное шоу «Фантазия Королевства» — 4D, пиротехника, акробаты и 30 живых слонов.",
     ["Открытие парка 17:30", "Tiger Jungle Adventure и деревня фестиваля", "Ужин (по билету)", "Шоу «Фантазия Королевства» в 21:00", "Возвращение ~23:00"],
     ["Трансфер", "Входной билет", "Все зоны парка", "Главное шоу", "Ужин — в билетах «с ужином»"]],
    ["Phuket FantaSea", "Kamala, Phuket", "Evening 17:30–23:00", "A show with 30 live elephants",
     "A cultural theme park in Kamala: Tiger Jungle Adventure, the festival village, a buffet dinner by ticket and the main “Kingdom of Fantasy” show — 4D effects, pyrotechnics, acrobats and 30 live elephants.",
     ["Park opens 17:30", "Tiger Jungle Adventure and festival village", "Dinner (by ticket)", "“Kingdom of Fantasy” show at 21:00", "Back ~23:00"],
     ["Transfer", "Entrance ticket", "All park zones", "Main show", "Dinner — with “dinner” tickets"]], { kidAge: "" });

  /* ---------- ПАРКИ И ПОЛЁТЫ ---------- */
  tour("hanuman-world", "ph-hanuman", ["phuket"], ["drive", "jungle"],
    ["Hanuman World", "Пхукет, джунгли", "2–4 часа", "Зиплайн, роллер, скайуок, луж",
     "Парк активностей в джунглях: зиплайн на 10, 18 или 32 платформы, роллер-зиплайн 800 м до 40 км/ч, скайуок в кронах на высоте ~40 м и луж-трассы. Пакет собираете сами.",
     ["Трансфер в парк", "Инструктаж и снаряжение", "Зиплайн по выбранному пакету", "Роллер, скайуок или луж — по пакету", "Возвращение в отель"], []],
    ["Hanuman World", "Phuket jungle", "2–4 hours", "Zipline, roller, skywalk, luge",
     "A jungle adventure park: a zipline with 10, 18 or 32 platforms, an 800 m roller zipline up to 40 km/h, a canopy skywalk ~40 m up and luge tracks. Build your own package.",
     ["Transfer to the park", "Briefing and gear", "Zipline as per package", "Roller, skywalk or luge — as per package", "Back to the hotel"], []], { unit: PERSON });
  tour("erawan-zipline", "ph-erawan", ["phuket"], ["drive", "jungle"],
    ["Erawan: зиплайн над Патонгом и ATV", "Патонг, Пхукет", "1–3 часа", "700 м над заливом",
     "Парк на горе над Патонгом: зиплайн 700 метров с видом на залив — самая длинная «морская» линия на Пхукете, подвесные мосты, спуски, а ещё квадроциклы 200 и 250 cc.",
     ["Групповой трансфер", "Приветственный напиток и инструктаж", "Зиплайн по выбранной программе", "ATV — по выбору", "Фрукты и полотенце", "Возвращение в отель"],
     ["Групповой трансфер туда-обратно", "Приветственный напиток", "Освежающее полотенце", "Сезонные фрукты", "Гид", "Страховка от несчастного случая", "Снаряжение: каска, система, карабины"]],
    ["Erawan: Patong Seaview Zipline & ATV", "Patong, Phuket", "1–3 hours", "700 m over the bay",
     "A park on the hill above Patong: a 700 m zipline over the bay — Phuket's longest “sea-view” line, rope bridges, abseils, plus 200 and 250 cc ATVs.",
     ["Group transfer", "Welcome drink and briefing", "Zipline as per programme", "ATV — optional", "Fruit and a cold towel", "Back to the hotel"],
     ["Return group transfer", "Welcome drink", "Cold towel", "Seasonal fruit", "Guide", "Accident insurance", "Gear: helmet, harness, carabiners"]], { unit: PERSON });
  tour("paraglide", "ph-paraglide", ["phuket"], ["drive"],
    ["Параплан и мотопараплан", "Най Харн, Пхукет", "15–20 минут", "Видео GoPro включено",
     "Полёт в тандеме с лицензированным пилотом над морем и пляжами Пхукета. Параплан — днём, до 100 кг; мотопараплан — утром или вечером, до 120 кг. Опыт не нужен.",
     ["Добираетесь сами — пришлём точку на карте", "Инструктаж", "Полёт в тандеме 15–20 минут", "Видео GoPro"],
     ["Полёт в тандеме с пилотом", "Видео GoPro", "Всё оборудование", "Трансфер не включён"]],
    ["Paragliding & Paramotor", "Nai Harn, Phuket", "15–20 minutes", "GoPro video included",
     "A tandem flight with a licensed pilot over Phuket's sea and beaches. Paragliding in the daytime, up to 100 kg; paramotor in the morning or evening, up to 120 kg. No experience needed.",
     ["Get there yourself — we'll send a map pin", "Briefing", "15–20 minute tandem flight", "GoPro video"],
     ["Tandem flight with a pilot", "GoPro video", "All equipment", "Transfer not included"]], { unit: PERSON });
  tour("plane-flight", "ph-plane", ["phuket", "phiphi", "phangnga"], ["drive"],
    ["Обзорный полёт на самолёте", "Аэродром Пхукета", "10–60 минут", "Пхи-Пхи и Джеймс Бонд с неба",
     "Полёт на лёгком самолёте с лицензированным пилотом: от 10 минут над тремя островами до часа над Пхи-Пхи и Майя Бэй или заливом Пханг-Нга. Цена за весь самолёт (2 или 4 места).",
     ["10 мин — Ранг Ной, Ранг Яй, Кокосовый остров", "15 мин — + марина Лагуна", "20 мин — + Пхукет-таун и мыс Панва", "30 мин — + Большой Будда", "45 мин — острова Яо и остров Хонг, Краби", "60 мин — Пхи-Пхи и Майя Бэй или залив Пханг-Нга"],
     ["Полёт с лицензированным пилотом", "Всё оборудование", "Трансфер не включён"]],
    ["Scenic Plane Flight", "Phuket airfield", "10–60 minutes", "Phi Phi & James Bond from the sky",
     "A light-aircraft flight with a licensed pilot: from 10 minutes over three islands to an hour over Phi Phi and Maya Bay or Phang Nga Bay. Price is per plane (2 or 4 seats).",
     ["10 min — Rang Noi, Rang Yai, Coconut Island", "15 min — + Laguna marina", "20 min — + Phuket Town and Cape Panwa", "30 min — + Big Buddha", "45 min — Yao islands and Hong island, Krabi", "60 min — Phi Phi and Maya Bay or Phang Nga Bay"],
     ["Flight with a licensed pilot", "All equipment", "Transfer not included"]], { unit: PLANE });

  /* ---------- АВИАТУРЫ ---------- */
  tour("bangkok-1day", "ph-bangkok", ["bangkok"], ["city"],
    ["Бангкок за 1 день", "Бангкок · перелёт включён", "1 день", "Аюттайя и 76-й этаж",
     "Однодневный авиатур: древняя столица Аюттайя, обед на 76-м этаже Baiyoke Sky с панорамой, круиз по реке Чаопрайя и храм Ват Арун. Перелёт Пхукет — Бангкок — Пхукет включён.",
     ["Ранний трансфер в аэропорт Пхукета, перелёт", "Встреча с русскоязычным гидом", "Исторический парк Аюттайя", "Обед на Baiyoke Sky, 76-й этаж", "Круиз по реке Чаопрайя, Ват Арун", "Вечерний перелёт и трансфер в отель"],
     ["Авиабилеты Пхукет — Бангкок — Пхукет", "Обед по программе", "Обзорная экскурсия", "Русскоязычный гид", "Страховка", "Групповые трансферы"]],
    ["Bangkok in 1 Day", "Bangkok · flights included", "1 day", "Ayutthaya & the 76th floor",
     "A one-day fly tour: the ancient capital Ayutthaya, lunch on the 76th floor of Baiyoke Sky, a Chao Phraya river cruise and Wat Arun. Phuket–Bangkok–Phuket flights included.",
     ["Early transfer to Phuket airport, flight", "Meet your Russian-speaking guide", "Ayutthaya Historical Park", "Lunch at Baiyoke Sky, 76th floor", "Chao Phraya cruise, Wat Arun", "Evening flight and hotel transfer"],
     ["Phuket–Bangkok–Phuket flights", "Lunch as per programme", "Sightseeing tour", "Russian-speaking guide", "Insurance", "Group transfers"]]);
  tour("kuala-lumpur", "ph-kuala-lumpur", ["kualalumpur"], ["city", "overnight"],
    ["Куала-Лумпур: 2 дня", "Малайзия · перелёт включён", "2 дня / 1 ночь", "Petronas и пещеры Бату",
     "Новая страна за 2 дня: башни Petronas, индуистский храм в пещерах Бату, колониальный центр и футуристичная Путраджая. Перелёт, отель и русскоязычный гид включены.",
     ["День 1: перелёт Пхукет — Куала-Лумпур", "Обзорная экскурсия по городу, обед", "Башни Petronas", "Ночь в отеле", "День 2: завтрак, Путраджая", "Пещеры Бату", "Перелёт на Пхукет"],
     ["Авиабилеты Пхукет — Куала-Лумпур — Пхукет", "Отель, 1 ночь", "Обед и завтрак", "Обзорная экскурсия и Путраджая", "Русскоязычный гид", "Групповые трансферы"]],
    ["Kuala Lumpur: 2 Days", "Malaysia · flights included", "2 days / 1 night", "Petronas & Batu Caves",
     "A new country in 2 days: the Petronas Towers, the Hindu temple in the Batu Caves, the colonial centre and futuristic Putrajaya. Flights, hotel and a Russian-speaking guide included.",
     ["Day 1: flight Phuket–Kuala Lumpur", "City tour and lunch", "Petronas Towers", "Night at the hotel", "Day 2: breakfast, Putrajaya", "Batu Caves", "Flight back to Phuket"],
     ["Phuket–Kuala Lumpur–Phuket flights", "Hotel, 1 night", "Lunch and breakfast", "City tour and Putrajaya", "Russian-speaking guide", "Group transfers"]]);
  tour("singapore", "ph-singapore", ["singapore"], ["city", "overnight"],
    ["Сингапур: 2 дня", "Сингапур · виза включена", "2 дня / 1 ночь", "Мерлион, Сады у залива, Jewel",
     "Город-государство за 2 дня: парк Мерлион, набережные, Чайна-таун, храм Зуба Будды, Сады у залива и водопад Jewel в аэропорту Чанги. Перелёт, отель 3–4* и оформление визы включены.",
     ["День 1: перелёт Пхукет — Сингапур", "Обзорная экскурсия, обед", "Парк Мерлион и набережные", "Чайна-таун и храм Зуба Будды", "Ночь в отеле 3–4*", "День 2: завтрак, Сады у залива", "Jewel Changi и перелёт на Пхукет"],
     ["Авиабилет Пхукет — Сингапур — Пхукет", "Отель 3–4*, 1 ночь", "Оформление визы в Сингапур", "Обед и завтрак", "Обзорная экскурсия", "Русскоязычный гид", "Групповые трансферы"]],
    ["Singapore: 2 Days", "Singapore · visa included", "2 days / 1 night", "Merlion, Gardens by the Bay, Jewel",
     "The city-state in 2 days: Merlion Park, the waterfront, Chinatown, the Buddha Tooth Relic Temple, Gardens by the Bay and the Jewel waterfall at Changi. Flights, a 3–4* hotel and the visa included.",
     ["Day 1: flight Phuket–Singapore", "City tour and lunch", "Merlion Park and waterfront", "Chinatown and Buddha Tooth Relic Temple", "Night at a 3–4* hotel", "Day 2: breakfast, Gardens by the Bay", "Jewel Changi and flight to Phuket"],
     ["Phuket–Singapore–Phuket flights", "3–4* hotel, 1 night", "Singapore visa processing", "Lunch and breakfast", "Sightseeing tour", "Russian-speaking guide", "Group transfers"]]);

  tour("angkor", "angkor", ["siemreap"], ["city", "overnight"],
    ["Ангкор: 2 дня", "Камбоджа · перелёт включён", "2 дня / 1 ночь", "Ангкор-Ват, Байон, Та Пром",
     "Затерянные храмы Камбоджи за 2 дня: Ангкор-Ват, Ангкор-Тхом с ликами Байона, Та Пром в корнях деревьев и Терраса слонов. Вечером — ужин и шоу апсар. Перелёт, виза, входные билеты, отель и русскоязычный гид включены.",
     ["День 1: вылет с Пхукета в 14:30, прилёт в Сиемреап в 16:05", "Виза по прилёте, встреча с русскоязычным гидом", "Заселение в отель", "Ужин и культурное шоу апсар", "День 2: завтрак в 06:00, выселение", "Ангкор-Ват, Ангкор-Тхом и Байон", "Та Кео, Та Пром, Терраса слонов и Терраса прокажённого короля", "Обед в местном ресторане", "Вылет в 16:50, прилёт на Пхукет в 18:35, трансфер в отель"],
     ["Авиабилеты Пхукет — Сиемреап — Пхукет", "Виза в Камбоджу", "Входные билеты в Ангкор", "Отель, 1 ночь", "Завтрак, обед, ужин с шоу", "Русскоязычный гид", "Все трансферы в Камбодже и на Пхукете"]],
    ["Angkor: 2 Days", "Cambodia · flights included", "2 days / 1 night", "Angkor Wat, Bayon, Ta Prohm",
     "The lost temples of Cambodia in 2 days: Angkor Wat, Angkor Thom with the faces of Bayon, Ta Prohm wrapped in tree roots and the Elephant Terrace. Dinner and an Apsara show in the evening. Flights, visa, entry tickets, hotel and a Russian-speaking guide included.",
     ["Day 1: depart Phuket 14:30, arrive Siem Reap 16:05", "Visa on arrival, meet your Russian-speaking guide", "Hotel check-in", "Dinner and Apsara cultural show", "Day 2: breakfast at 06:00, check-out", "Angkor Wat, Angkor Thom and Bayon", "Ta Keo, Ta Prohm, Elephant Terrace and Leper King Terrace", "Lunch at a local restaurant", "Depart 16:50, arrive Phuket 18:35, hotel transfer"],
     ["Phuket–Siem Reap–Phuket flights", "Cambodia visa", "Angkor entry tickets", "Hotel, 1 night", "Breakfast, lunch, dinner with show", "Russian-speaking guide", "All transfers in Cambodia and Phuket"]]);

  tour("kl-singapore", "kl-singapore", ["kualalumpur", "singapore"], ["city", "overnight"],
    ["Куала-Лумпур + Сингапур: 3 дня", "Малайзия и Сингапур · перелёты включены", "3 дня / 2 ночи", "Две страны за одну поездку",
     "Две страны за 3 дня: пещеры Бату, башни Petronas и Путраджая в Малайзии, затем Сингапур — Марина Бэй, парк Мерлион, Чайна-таун и вечер в Jewel Changi с самым высоким водопадом в здании в мире. Перелёты, 2 ночи в отелях и русскоязычные гиды включены.",
     ["День 1: перелёт Пхукет — Куала-Лумпур", "Индуистский храм в пещерах Бату", "Фотостоп у башен Petronas, обед, заселение в отель", "День 2: площадь Независимости и Путраджая — дворец премьер-министра, Розовая мечеть, Дворец правосудия", "Перелёт в Сингапур, обед", "Обзорная: фонтан Богатства, Марина Бэй, памятник Раффлзу, парк Мерлион, Чайна-таун, Орчард-роуд", "День 3: свободный день — Сентоза, Сады у залива или зоопарк", "Вечером Jewel Changi, перелёт на Пхукет"],
     ["Авиабилеты Пхукет — Куала-Лумпур — Сингапур — Пхукет", "Отели, 2 ночи", "2 завтрака и 2 обеда", "Экскурсии с русскоязычными гидами", "Групповые трансферы в Куала-Лумпуре, Сингапуре и на Пхукете"]],
    ["Kuala Lumpur + Singapore: 3 Days", "Malaysia & Singapore · flights included", "3 days / 2 nights", "Two countries in one trip",
     "Two countries in 3 days: the Batu Caves, the Petronas Towers and Putrajaya in Malaysia, then Singapore — Marina Bay, Merlion Park, Chinatown and an evening at Jewel Changi with the world's tallest indoor waterfall. Flights, 2 hotel nights and Russian-speaking guides included.",
     ["Day 1: flight Phuket–Kuala Lumpur", "Hindu temple in the Batu Caves", "Petronas Towers photo stop, lunch, hotel check-in", "Day 2: Independence Square and Putrajaya — PM's Palace, Pink Mosque, Palace of Justice", "Flight to Singapore, lunch", "City tour: Fountain of Wealth, Marina Bay, Raffles statue, Merlion Park, Chinatown, Orchard Road", "Day 3: free day — Sentosa, Gardens by the Bay or the zoo", "Evening at Jewel Changi, flight to Phuket"],
     ["Phuket–Kuala Lumpur–Singapore–Phuket flights", "Hotels, 2 nights", "2 breakfasts and 2 lunches", "Excursions with Russian-speaking guides", "Group transfers in Kuala Lumpur, Singapore and Phuket"]]);

  var BOAT2 = { ru: "за лодку на 2 человек", en: "per boat for 2 people", qty: { ru: "Лодки", en: "Boats" }, def: 1 };
  tour("longtail-private", "longtail-private", ["phuket", "phangnga", "krabi"], ["sea"],
    ["Приватный лонгтейл", "Пирсы Ао По и Чалонг", "Полдня или полный день", "Лодка только для вас",
     "Традиционная тайская лодка лонгтейл целиком под вашу компанию: свой маршрут без чужих туристов. С пирса Ао По — Джеймс Бонд и залив Пханг-Нга, острова Хонг в Краби, острова Яо. С пирса Чалонг — Коралловый остров, Рача Яй или закат у мыса Промтеп. Цена за лодку на 2 человек.",
     ["Ао По · Джеймс Бонд и залив Пханг-Нга — остров Джеймса Бонда, плавучая деревня Ко Паньи, пещеры, скалы и лагуны. Полный день", "Ао По · Острова Хонг, Краби — Куду, Пак Биа, остров обезьян, Hong Island, лагуна Lao Landing, купание и снорклинг. 09:00–17:00", "Ао По · Яо Ной и Яо Яй — бухты и пляжи, белоснежная коса Laem Haad. Полный день, цена под вашу дату", "Чалонг · Коралловый остров — пляж, купание, снорклинг. Полдня", "Чалонг · Рача Яй и Коралловый остров — снорклинг у Рача Яй, Siam Bay, на обратном пути Коралловый. Полный день", "Чалонг · Закатный тур — мыс Промтеп, Най Харн, закат у Black Rock. Старт около 17:00"],
     ["Лодка целиком под вашу группу", "Обед из тайских блюд (кроме закатного тура)", "Фрукты и вода"]],
    ["Private Longtail Boat", "Ao Po and Chalong piers", "Half day or full day", "A boat just for you",
     "A traditional Thai longtail boat for your group only: your own route, no other tourists. From Ao Po pier — James Bond Island and Phang Nga Bay, the Hong islands in Krabi, the Yao islands. From Chalong pier — Coral Island, Racha Yai or the sunset at Promthep Cape. Price is per boat for 2 people.",
     ["Ao Po · James Bond & Phang Nga Bay — James Bond Island, Koh Panyee floating village, caves, cliffs and lagoons. Full day", "Ao Po · Hong islands, Krabi — Koh Kudu, Pak Bia, Monkey Island, Hong Island, Lao Landing lagoon, swimming and snorkelling. 09:00–17:00", "Ao Po · Yao Noi & Yao Yai — bays and beaches, the white Laem Haad sandbar. Full day, priced for your date", "Chalong · Coral Island — beach, swimming, snorkelling. Half day", "Chalong · Racha Yai & Coral Island — snorkelling at Racha Yai, Siam Bay, Coral Island on the way back. Full day", "Chalong · Sunset tour — Promthep Cape, Nai Harn, sunset at Black Rock. Starts around 17:00"],
     ["The whole boat for your group", "Thai-style lunch (except the sunset tour)", "Fruit and water"]], { unit: BOAT2 });

  ["krabi-phi-phi", "krabi-hong", "krabi-4-islands", "yona-morning", "yona-evening"].forEach(function (id) { var t = window.TOURS.filter(function (z) { return z.id === id; })[0]; if (t) t.kidAge = ""; });
  /* ---------- ЦЕНЫ (CRM) ---------- */
  Object.assign(window.PRICES, {
    "eleven-islands": [P("Standard", "Standard", 4700, 4400), P("Comfort+", "Comfort+", 4900, 4600)],
    "four-pearls": [P("Standard · Enhanced Room", "Standard · Enhanced Room", 5550, 5050), P("Comfort+ · Superior Room", "Comfort+ · Superior Room", 6400, 5900)],
    "maiton-catamaran": [P("Comfort+", "Comfort+", 3300, 3000)],
    "phi-phi-bamboo-cat": [P("Стандарт", "Standard", 3000, 2800)],
    "phi-phi-rang-yai-fishing": [P("Standard", "Standard", 2800, 2500), P("Comfort+", "Comfort+", 3000, 2700)],
    "phi-phi-premium": [P("Стандарт", "Standard", 3000, 2700)],
    "phi-phi-paradise-early": [P("Стандарт", "Standard", 3300, 2800)],
    "phi-phi-rung": [P("Стандарт", "Standard", 3000, 2600)],
    "james-bond": [P("Premium", "Premium", 3200, 2800)],
    "la-phi-phi-bamboo": [P("С Пхукета", "From Phuket", 3500, 2800), P("Из Као Лака", "From Khao Lak", 3800, 3100)],
    "la-whale-shark": [P("С Пхукета", "From Phuket", 4200, 3300), P("Из Као Лака", "From Khao Lak", 4500, 3600)],
    "la-phangnga-hong": [P("С Пхукета", "From Phuket", 4000, 3200), P("Из Као Лака", "From Khao Lak", 4300, 3400)],
    "la-similan": [P("Из Као Лака", "From Khao Lak", 3900, 3100), P("С Пхукета", "From Phuket", 4200, 3300), P("Early Bird из Као Лака", "Early Bird from Khao Lak", 3900, 3100), P("Early Bird с Пхукета", "Early Bird from Phuket", 4200, 3300)],
    "la-surin": [P("Из Као Лака", "From Khao Lak", 4200, 3300), P("С Пхукета", "From Phuket", 4500, 3600)],
    "krabi-phi-phi": [P("Стандарт", "Standard", 3500, 2900)],
    "krabi-hong": [P("Стандарт", "Standard", 2700, 2100)],
    "krabi-4-islands": [P("Стандарт", "Standard", 2200, 1600)],
    "jetski-tsa": [P("Sea-Doo GTX PRO 130, 4 часа", "Sea-Doo GTX PRO 130, 4 hours", 7900)],
    "jetski-kb": [P("Yamaha, 1 человек", "Yamaha, 1 rider", 6000), P("Yamaha, 2 человека", "Yamaha, 2 riders", 6500), P("Sea-Doo", "Sea-Doo", 7500)],
    "jetski-pattaya": [P("2 часа", "2 hours", 6300), P("4 часа (юг или север)", "4 hours (south or north)", 8300)],
    "yona-morning": [Object.assign(P("Kids Pass", "Kids Pass", 1500), { x: 1 }), P("Morning Pass", "Morning Pass", 3000), P("Утро с депозитом 4000 (половина — на бар)", "Morning with 4,000 deposit (half for the bar)", 4000)],
    "yona-evening": [P("Regular Pass", "Regular Pass", 4000), P("Зоны (лежак, дейбед, VIP) — от 10 000 за зону", "Zones (lounger, daybed, VIP) — from 10,000 per zone", 10000)],
    "khaolak-safari": [P("Стандарт", "Standard", 2150, 1950)],
    "elephants-mantra": [P("Со смотровой Самет Нангше", "With Samet Nangshe viewpoint", 3650, 3250), P("Со стеклянным мостом", "With glass bridge", 4150, 3850)],
    "sunrise-adventure": [P("Смотровая Самет Нангше", "Samet Nangshe viewpoint", 2700, 2400), P("Стеклянный мост Skywalk", "Skywalk glass bridge", 3200, 2900)],
    "khaosok-2day": [P("Standard · стандартные бунгало", "Standard · standard bungalows", 5200, 4700), P("Standard · капсулы", "Standard · capsules", 5800, 5300), P("Deluxe · бунгало", "Deluxe · bungalows", 7100, 6600), P("Deluxe · новые бунгало", "Deluxe · new bungalows", 7300, 6800)],
    "carnival-magic": [P("Standard", "Standard", 2350, 2350), P("Standard + ужин", "Standard + dinner", 2550, 2450), P("Royal", "Royal", 2600, 2600), P("Royal + ужин", "Royal + dinner", 2800, 2700)],
    "fantasea": [P("Standard", "Standard", 2250, 2250), P("Standard + ужин", "Standard + dinner", 2450, 2300), P("Gold", "Gold", 2500, 2500), P("Gold + ужин", "Gold + dinner", 2700, 2550), P("Gold + ужин из морепродуктов", "Gold + seafood dinner", 4050, 3900)],
    "hanuman-world": [P("Зиплайн 10 платформ", "Zipline, 10 platforms", 1500), P("Зиплайн 18 платформ", "Zipline, 18 platforms", 2200), P("Зиплайн 32 платформы", "Zipline, 32 platforms", 2900), P("Combine World D+", "Combine World D+", 1990), P("Combine World C+", "Combine World C+", 2490), P("Combine World B+", "Combine World B+", 2990), P("Combine World A+", "Combine World A+", 3490), P("Луж + D+", "Luge + D+", 2690), P("Луж + C+", "Luge + C+", 3290), P("Луж + B+", "Luge + B+", 3790), P("Луж + A+", "Luge + A+", 4290)],
    "erawan-zipline": [P("Зиплайн EP3", "Zipline EP3", 1800), P("Зиплайн EPS", "Zipline EPS", 2400), P("Зиплайн EP2", "Zipline EP2", 2600), P("Зиплайн EP1 (42 платформы, с обедом)", "Zipline EP1 (42 platforms, with lunch)", 3300), Object.assign(P("ATV 200cc 30 мин — пассажир", "ATV 200cc 30 min — passenger", 900), { x: 1 }), P("ATV 200cc 30 мин — водитель", "ATV 200cc 30 min — driver", 1200), Object.assign(P("ATV 200cc 60 мин — пассажир", "ATV 200cc 60 min — passenger", 1200), { x: 1 }), P("ATV 200cc 60 мин — водитель", "ATV 200cc 60 min — driver", 1800), Object.assign(P("ATV 250cc 30 мин — пассажир", "ATV 250cc 30 min — passenger", 1100), { x: 1 }), P("ATV 250cc 30 мин — водитель", "ATV 250cc 30 min — driver", 1400), Object.assign(P("ATV 250cc 60 мин — пассажир", "ATV 250cc 60 min — passenger", 1400), { x: 1 }), P("ATV 250cc 60 мин — водитель", "ATV 250cc 60 min — driver", 2000)],
    "paraglide": [P("Параплан (днём, до 100 кг)", "Paragliding (daytime, up to 100 kg)", 5900), P("Мотопараплан (утро/вечер, до 120 кг)", "Paramotor (morning/evening, up to 120 kg)", 5900)],
    "plane-flight": [P("2 места · 10 мин", "2 seats · 10 min", 4500), P("2 места · 15 мин", "2 seats · 15 min", 5500), P("2 места · 20 мин", "2 seats · 20 min", 6500), P("2 места · 30 мин", "2 seats · 30 min", 7500), P("2 места · 45 мин", "2 seats · 45 min", 10000), P("2 места · 60 мин", "2 seats · 60 min", 13000), P("4 места · 10 мин", "4 seats · 10 min", 7500), P("4 места · 15 мин", "4 seats · 15 min", 8500), P("4 места · 20 мин", "4 seats · 20 min", 9500), P("4 места · 30 мин", "4 seats · 30 min", 11500), P("4 места · 45 мин", "4 seats · 45 min", 16000), P("4 места · 60 мин", "4 seats · 60 min", 18500)],
    "bangkok-1day": [P("Стандарт", "Standard", 11800, 11800)],
    "kuala-lumpur": [P("Стандарт (номер на двоих)", "Standard (twin share)", 16850), P("Одноместное размещение", "Single occupancy", 18700)],
    "singapore": [P("Стандарт (номер на двоих)", "Standard (twin share)", 23800), P("Одноместное размещение", "Single occupancy", 26450)],
    "angkor": [P("Стандарт (номер на двоих)", "Standard (twin share)", 21700), P("Одноместное размещение", "Single occupancy", 23300)],
    "longtail-private": [P("Коралловый остров (полдня)", "Coral Island (half day)", 8800), P("Закатный тур", "Sunset tour", 11500), P("Рача Яй и Коралловый остров", "Racha Yai & Coral Island", 15500), P("Джеймс Бонд и залив Пханг-Нга", "James Bond & Phang Nga Bay", 16900), P("Острова Хонг, Краби", "Hong islands, Krabi", 18200)],
    "kl-singapore": [P("Стандарт (номер на двоих)", "Standard (twin share)", 37950), P("Одноместное размещение", "Single occupancy", 42450)]
  });

  /* ---------- РЕГИОНЫ ---------- */
  window.REGIONS.push(
    { id: "pattaya", img: "jetski", ru: "Паттайя", en: "Pattaya" },
    { id: "bangkok", img: "ph-bangkok", ru: "Бангкок", en: "Bangkok" },
    { id: "kualalumpur", img: "ph-kuala-lumpur", ru: "Куала-Лумпур", en: "Kuala Lumpur", country: { ru: "Малайзия", en: "Malaysia" } },
    { id: "singapore", img: "ph-singapore", ru: "Сингапур", en: "Singapore", country: { ru: "Сингапур", en: "Singapore" } },
    { id: "siemreap", img: "angkor", ru: "Сиемреап", en: "Siem Reap", country: { ru: "Камбоджа", en: "Cambodia" } }
  );

  /* ---------- ОТМЕНА ---------- */
  Object.assign(window.CANCEL, {
    la: {
      ru: ["До 18:00 за день до тура — без штрафа", "Позже этого срока без медицинской справки — 100%", "С медицинской справкой — без штрафа", "Перенос даты: Пхи-Пхи и Майтон — 500 ฿ с человека, Симиланы и Сурин — 1 000 ฿ с человека"],
      en: ["Until 18:00 the day before — free", "Later, without a medical certificate — 100%", "With a medical certificate — free", "Date change: Phi Phi and Maiton — 500 ฿ per person, Similan and Surin — 1,000 ฿ per person"]
    },
    yona: {
      ru: ["Перенос даты не позднее чем за 72 часа — бесплатно", "Отмена более чем за 72 часа — 30%", "От 72 до 24 часов — 75%", "Менее чем за 24 часа — 100%"],
      en: ["Date change at least 72 hours before — free", "Cancellation more than 72 hours before — 30%", "72 to 24 hours before — 75%", "Less than 24 hours before — 100%"]
    },
    tsa: {
      ru: ["Отмена позже 18:00 накануне — 100%", "Перенос позже 18:00 накануне — 50% стоимости", "С оригиналом медицинской справки — без штрафа"],
      en: ["Cancellation after 18:00 the day before — 100%", "Date change after 18:00 the day before — 50% fee", "With an original medical certificate — free"]
    },
    plane: {
      ru: ["Отмена в день полёта — 50%", "С медицинской справкой — без штрафа", "Если полёт отменили из-за погоды — перенос или полный возврат"],
      en: ["Cancellation on the day of the flight — 50%", "With a medical certificate — free", "If the flight is cancelled due to weather — reschedule or full refund"]
    },
    nonref: {
      ru: ["Авиатуры невозвратные: после оплаты отмена и возврат невозможны", "Перед оплатой проверьте паспорт и визовые требования"],
      en: ["Fly tours are non-refundable once paid", "Check your passport and visa requirements before paying"]
    }
  });
  Object.assign(window.CANCEL_TYPE, {
    "eleven-islands": "day", "four-pearls": "twoday", "maiton-catamaran": "day",
    "phi-phi-bamboo-cat": null, "phi-phi-rang-yai-fishing": null, "phi-phi-premium": null,
    "phi-phi-paradise-early": null, "phi-phi-rung": null, "james-bond": null, "early-krabi": null,
    "la-phi-phi-bamboo": "la", "la-whale-shark": "la", "la-phangnga-hong": "la", "la-similan": "la", "la-surin": "la",
    "krabi-phi-phi": null, "krabi-hong": null, "krabi-4-islands": null,
    "jetski-tsa": "tsa", "jetski-kb": null, "jetski-pattaya": null,
    "yona-morning": "yona", "yona-evening": "yona",
    "khaolak-safari": "day", "elephants-mantra": "day", "sunrise-adventure": "day", "khaosok-2day": "twoday",
    "carnival-magic": "day", "fantasea": "day",
    "hanuman-world": null, "erawan-zipline": null, "paraglide": null, "plane-flight": "plane",
    "bangkok-1day": "nonref", "kuala-lumpur": "nonref", "singapore": "nonref", "angkor": "nonref", "kl-singapore": "nonref", "longtail-private": null
  });

  /* ---------- ОГРАНИЧЕНИЯ (дополнение) ---------- */
  window.LIMITS_EXTRA = {
    ru: {
      "yona-morning": ["С 4 лет", "Своя еда и напитки запрещены"],
      "yona-evening": ["Только с 20 лет", "Своя еда и напитки запрещены"],
      "la-phi-phi-bamboo": ["Дети до 4 лет — бесплатно, с 12 лет — по взрослому тарифу"],
      "la-whale-shark": ["Дети до 4 лет — бесплатно, с 12 лет — по взрослому тарифу"],
      "la-phangnga-hong": ["Дети до 4 лет — бесплатно, с 12 лет — по взрослому тарифу"],
      "la-similan": ["Дети до 4 лет — бесплатно, с 12 лет — по взрослому тарифу"],
      "la-surin": ["Дети до 4 лет — бесплатно, с 12 лет — по взрослому тарифу"],
      "paraglide": ["Параплан — до 100 кг, мотопараплан — до 120 кг", "Только закрытая обувь — в шлёпанцах к полёту не допустят"],
      "bangkok-1day": ["Младенец (до 2 лет) — 6 000 ฿"],
      "kuala-lumpur": ["Младенец (до 2 лет) — 4 600 ฿", "При визе Таиланда нужен re-entry permit — 2 000 ฿"],
      "singapore": ["Младенец (до 2 лет) — 5 100 ฿", "При визе Таиланда нужен re-entry permit — 2 000 ฿"],
      "longtail-private": ["Цена за лодку на 2 человек; для большей группы цену уточнит менеджер", "Яо Ной и Яо Яй — цену менеджер посчитает под вашу дату", "Трансфер до пирса не включён"],
      "kl-singapore": ["Младенец (до 2 лет) — 6 600 ฿", "Паспорт действителен не менее 6 месяцев", "При визе Таиланда нужен re-entry permit — 2 000 ฿"],
      "angkor": ["Младенец (до 2 лет) — 5 100 ฿", "Паспорт действителен не менее 6 месяцев", "При визе Таиланда нужен re-entry permit — до 2 000 ฿"],
      "khaosok-2day": ["Вторая слоновья программа — доплата 300 ฿"],
      "jetski-tsa": ["Страховка гидроцикла — 1 000 ฿ на пирсе, по желанию"]
    },
    en: {
      "yona-morning": ["Age 4+", "Outside food and drinks are not allowed"],
      "yona-evening": ["Age 20+ only", "Outside food and drinks are not allowed"],
      "la-phi-phi-bamboo": ["Children under 4 free; 12+ pay the adult rate"],
      "la-whale-shark": ["Children under 4 free; 12+ pay the adult rate"],
      "la-phangnga-hong": ["Children under 4 free; 12+ pay the adult rate"],
      "la-similan": ["Children under 4 free; 12+ pay the adult rate"],
      "la-surin": ["Children under 4 free; 12+ pay the adult rate"],
      "paraglide": ["Paragliding up to 100 kg, paramotor up to 120 kg", "Closed shoes only — no flip-flops"],
      "bangkok-1day": ["Infant (under 2) — 6,000 ฿"],
      "kuala-lumpur": ["Infant (under 2) — 4,600 ฿", "With a Thai visa you need a re-entry permit — 2,000 ฿"],
      "singapore": ["Infant (under 2) — 5,100 ฿", "With a Thai visa you need a re-entry permit — 2,000 ฿"],
      "longtail-private": ["Price is per boat for 2 people; for a larger group the manager will quote", "Yao Noi & Yao Yai — the manager quotes for your date", "Transfer to the pier not included"],
      "kl-singapore": ["Infant (under 2) — 6,600 ฿", "Passport valid for at least 6 months", "With a Thai visa you need a re-entry permit — 2,000 ฿"],
      "angkor": ["Infant (under 2) — 5,100 ฿", "Passport valid for at least 6 months", "With a Thai visa you need a re-entry permit — up to 2,000 ฿"],
      "khaosok-2day": ["A second elephant programme — 300 ฿ extra"],
      "jetski-tsa": ["Jet ski insurance — 1,000 ฿ at the pier, optional"]
    }
  };
})();

/* базовая цена «от» = самый дешёвый вариант из CRM */
window.TOURS.forEach(function (t) { var p = (window.PRICES[t.id] || []).filter(function (o) { return !o.x; }); if (p.length) t.price = Math.min.apply(null, p.map(function (o) { return o.a; })); });

/* счётчики отзывов из чата по экскурсиям (обновляются при выгрузке reviews.json) */
window.EVENTS = [
  { id: "lotus-grand-opening", date: "2026-12-27", time: "18:00", venue: "Lotus Arena Phuket", from: 800, img: "",
    url: "https://lotusarena.com/events/90-grand-opening--phuket?ref=sardor_u3b3b3sn",
    ru: { title: "Grand Opening Lotus Arena", sub: "Открытие арены. Хедлайнер — Инстасамка, остальных артистов объявят позже" },
    en: { title: "Grand Opening Lotus Arena", sub: "Arena opening. Headliner — Instasamka, more artists to be announced" } },
  { id: "poshlaya-molly", date: "2027-01-14", time: "18:00", venue: "Lotus Arena Phuket", from: 1200, img: "",
    url: "https://lotusarena.com/events/95----phuket?ref=sardor_bb5f2ncp",
    ru: { title: "Пошлая Молли", sub: "Тур к 10-летию группы: главные хиты и редкие треки" },
    en: { title: "Poshlaya Molly", sub: "10th anniversary tour: the big hits and rare tracks" } },
  { id: "kasta", date: "2027-01-28", time: "20:00", venue: "LAVA, Phuket", from: 800, img: "",
    url: "https://lotusarena.com/events/93---phuket?ref=sardor_jgd5ewt5",
    ru: { title: "Каста", sub: "Greatest Hits — лучшие треки за всю историю группы" },
    en: { title: "Kasta", sub: "Greatest Hits — the best tracks from the band's whole career" } }
];
window.REV_TOTAL = 565; window.REV_COUNT = {"jetski":104,"five-pearls":33,"four-pearls":8,"early-phi-phi":62,"phi-phi-2day":10,"krabi":50,"similan":64,"phangnga":16,"cheowlan":41,"fishing":6,"diving":3,"rafting":40,"eleven-islands":11,"khaolak-safari":13,"phuket":12,"avatar":45,"sunrise":18,"james-bond":3,"plankton":9,"fantasea":2,"elephants-mantra":12,"carnival-magic":1,"khaosok-2day":1}; window.REV_VER = 2;
/* похожие программы показывают отзывы «соседа» */
window.REV_ALIAS = { "rafting-atv": "rafting", "la-similan": "similan" };
(function () { var A = window.REV_ALIAS, C = window.REV_COUNT; Object.keys(A).forEach(function (k) { if (!C[k]) C[k] = C[A[k]] || 0; }); })();
