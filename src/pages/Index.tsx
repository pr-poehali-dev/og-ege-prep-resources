import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

// ─── DATA ────────────────────────────────────────────────────────────────────

const subjects = [
  { id: "all", label: "Все предметы", emoji: "📚" },
  { id: "math", label: "Математика", emoji: "∑" },
  { id: "physics", label: "Физика", emoji: "⚛" },
  { id: "chemistry", label: "Химия", emoji: "⚗" },
  { id: "history", label: "История", emoji: "⏳" },
  { id: "literature", label: "Литература", emoji: "✒" },
  { id: "biology", label: "Биология", emoji: "🌿" },
  { id: "english", label: "Английский", emoji: "◈" },
];

const materials = [
  {
    id: 1,
    subject: "math",
    type: "Шпаргалка",
    title: "Производные и интегралы",
    desc: "Все формулы дифференцирования и интегрирования в одной таблице",
    pages: 2,
    level: "Средний",
    downloads: 4821,
  },
  {
    id: 2,
    subject: "physics",
    type: "Справочник",
    title: "Механика. Законы Ньютона",
    desc: "Полный разбор трёх законов с формулами и примерами задач",
    pages: 8,
    level: "Базовый",
    downloads: 3240,
  },
  {
    id: 3,
    subject: "chemistry",
    type: "Шпаргалка",
    title: "Таблица растворимости",
    desc: "Растворимость солей, кислот и оснований в воде при 25°C",
    pages: 1,
    level: "Базовый",
    downloads: 6103,
  },
  {
    id: 4,
    subject: "history",
    type: "Справочник",
    title: "Даты Второй мировой войны",
    desc: "Хронология ключевых событий 1939–1945 годов по месяцам",
    pages: 5,
    level: "Средний",
    downloads: 2914,
  },
  {
    id: 5,
    subject: "math",
    type: "Справочник",
    title: "Геометрия. Формулы площадей",
    desc: "Площади и объёмы всех плоских и объёмных фигур",
    pages: 3,
    level: "Базовый",
    downloads: 5512,
  },
  {
    id: 6,
    subject: "literature",
    type: "Шпаргалка",
    title: "Герои романа «Война и мир»",
    desc: "Краткие характеристики 40 персонажей с цитатами",
    pages: 4,
    level: "Средний",
    downloads: 1876,
  },
  {
    id: 7,
    subject: "biology",
    type: "Справочник",
    title: "Клетка. Строение и функции",
    desc: "Органоиды клетки, их функции и особенности строения",
    pages: 6,
    level: "Средний",
    downloads: 2388,
  },
  {
    id: 8,
    subject: "english",
    type: "Шпаргалка",
    title: "Все времена английского языка",
    desc: "12 времён с формулами образования и примерами использования",
    pages: 2,
    level: "Базовый",
    downloads: 7291,
  },
  {
    id: 9,
    subject: "physics",
    type: "Шпаргалка",
    title: "Электричество. Законы и формулы",
    desc: "Закон Ома, формулы мощности, последовательное и параллельное соединение",
    pages: 2,
    level: "Средний",
    downloads: 3105,
  },
];

const stats = [
  { value: "60+", label: "Бесплатных ресурсов" },
  { value: "8", label: "Предметов школьной программы" },
  { value: "100%", label: "Без регистрации и оплаты" },
];

const features = [
  {
    icon: "Search",
    title: "Цель исследования",
    desc: "Выяснить, какие бесплатные онлайн-ресурсы реально помогают школьникам готовиться к ОГЭ и ЕГЭ",
  },
  {
    icon: "FlaskConical",
    title: "Метод",
    desc: "Анализ 60+ платформ, опрос одноклассников, сравнение по критериям: удобство, охват предметов, качество заданий",
  },
  {
    icon: "BarChart2",
    title: "Результат",
    desc: "Составлен рейтинг ресурсов по категориям — от официальных государственных сайтов до Telegram-каналов",
  },
  {
    icon: "Lightbulb",
    title: "Вывод",
    desc: "Бесплатных ресурсов достаточно для полноценной подготовки. Главное — знать, где искать",
  },
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Главная" },
    { id: "materials", label: "Материалы" },
    { id: "resources", label: "Ресурсы" },
    { id: "about", label: "О платформе" },
    { id: "contacts", label: "Контакты" },
  ];

  const handleNav = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => handleNav("home")} className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-gold/60 rotate-45 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
            <div className="w-3 h-3 bg-gold group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-cormorant text-xl font-semibold tracking-wide text-foreground">
            Атлас <span className="text-gold">Знаний</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={`nav-link ${active === l.id ? "active" : ""}`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNav("materials")}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-gold text-background text-sm font-medium tracking-wide hover:bg-gold/90 transition-colors duration-200"
        >
          <Icon name="BookOpen" size={15} />
          Смотреть ресурсы
        </button>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={`nav-link text-left ${active === l.id ? "active" : ""}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/8" />
        <div className="absolute top-24 left-12 w-24 h-24 border-t border-l border-gold/20" />
        <div className="absolute bottom-24 right-12 w-24 h-24 border-b border-r border-gold/20" />
        <div className="geo-line absolute top-[38%] left-0 w-1/3 animate-line-grow" />
        <div className="geo-line absolute top-[38%] right-0 w-1/3 animate-line-grow" style={{ transformOrigin: "right" }} />
        <div className="absolute top-1/3 left-[15%] w-1.5 h-1.5 bg-gold/40 rounded-full animate-float" />
        <div className="absolute top-2/3 right-[20%] w-1 h-1 bg-gold/30 rounded-full animate-float delay-300" />
        <div className="absolute top-1/2 left-[8%] w-1 h-1 bg-gold/20 rounded-full animate-float delay-500" />
        <div className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="opacity-0-init animate-fade-in delay-100 inline-flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-gold/60" />
          <span className="text-gold/80 text-xs tracking-[0.25em] uppercase font-golos font-medium">
            Исследовательский проект · 10 класс
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </div>

        <h1 className="font-cormorant font-light leading-none tracking-tight mb-6">
          <span className="block text-[clamp(3rem,10vw,8rem)] opacity-0-init animate-fade-up delay-200 text-foreground">
            Бесплатная
          </span>
          <span className="block text-[clamp(3rem,10vw,8rem)] opacity-0-init animate-fade-up delay-300 text-gold-shimmer">
            подготовка
          </span>
          <span className="block text-[clamp(1.8rem,5vw,4rem)] opacity-0-init animate-fade-up delay-400 text-muted-foreground font-light italic mt-2">
            к ОГЭ и ЕГЭ — реально
          </span>
        </h1>

        <p className="opacity-0-init animate-fade-up delay-500 text-muted-foreground font-golos text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Исследовательский проект: обзор и систематизация бесплатных онлайн-ресурсов
          для подготовки к школьным экзаменам. Без рекламы, без продаж.
        </p>

        <div className="opacity-0-init animate-fade-up delay-600 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("materials")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 bg-gold text-background font-golos font-semibold tracking-wide hover:bg-gold/90 transition-all duration-300 flex items-center gap-3 justify-center"
          >
            <Icon name="Library" size={18} />
            Смотреть ресурсы
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-border text-muted-foreground font-golos tracking-wide hover:border-gold/40 hover:text-foreground transition-all duration-300 flex items-center gap-3 justify-center"
          >
            Узнать больше
          </button>
        </div>

        <div className="opacity-0-init animate-fade-up delay-700 mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-border pt-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-cormorant text-3xl md:text-4xl font-semibold text-gold mb-1">
                {s.value}
              </div>
              <div className="text-xs text-muted-foreground font-golos uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-muted-foreground font-golos tracking-widest uppercase">Прокрути</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}

// ─── MATERIALS ───────────────────────────────────────────────────────────────

function MaterialCard({ material: m }: { material: typeof materials[0] }) {
  const subjectColors: Record<string, string> = {
    math: "text-blue-400",
    physics: "text-purple-400",
    chemistry: "text-green-400",
    history: "text-amber-400",
    literature: "text-rose-400",
    biology: "text-emerald-400",
    english: "text-cyan-400",
  };

  return (
    <div className="card-hover bg-card p-6 flex flex-col gap-4 cursor-pointer group">
      <div className="flex items-center justify-between">
        <span className={`text-xs font-golos uppercase tracking-[0.15em] font-medium ${subjectColors[m.subject] ?? "text-gold"}`}>
          {subjects.find((s) => s.id === m.subject)?.emoji}{" "}
          {subjects.find((s) => s.id === m.subject)?.label}
        </span>
        <span className="text-xs font-golos text-muted-foreground bg-secondary px-2 py-0.5">
          {m.type}
        </span>
      </div>

      <h3 className="font-cormorant text-2xl font-semibold leading-tight text-foreground group-hover:text-gold transition-colors duration-300">
        {m.title}
      </h3>

      <p className="text-sm text-muted-foreground font-golos leading-relaxed flex-1">
        {m.desc}
      </p>

      <div className="h-px bg-border group-hover:bg-gold/20 transition-colors duration-300" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted-foreground font-golos">
          <span className="flex items-center gap-1">
            <Icon name="FileText" size={12} />
            {m.pages} стр.
          </span>
          <span className="flex items-center gap-1">
            <Icon name="BarChart2" size={12} />
            {m.level}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Download" size={12} />
            {m.downloads.toLocaleString("ru")}
          </span>
        </div>
        <button className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:border-gold/50 hover:text-gold transition-all duration-200">
          <Icon name="Download" size={14} />
        </button>
      </div>
    </div>
  );
}

function MaterialsSection() {
  const [activeSubject, setActiveSubject] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = materials.filter((m) => {
    const matchSubject = activeSubject === "all" || m.subject === activeSubject;
    const matchSearch =
      !searchQuery ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSubject && matchSearch;
  });

  return (
    <section id="materials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-gold/80 text-xs tracking-[0.2em] uppercase font-golos">Библиотека</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-cormorant text-5xl md:text-7xl font-light leading-none">
              Шпаргалки<br />
              <span className="italic text-gold">и справочники</span>
            </h2>
            <div className="relative max-w-xs w-full">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск по материалам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-card border border-border text-foreground font-golos text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSubject(s.id)}
              className={`subject-tag ${activeSubject === s.id ? "active" : "text-muted-foreground bg-card"}`}
            >
              <span>{s.emoji}</span>
              {s.label}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((m) => (
              <MaterialCard key={m.id} material={m} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-muted-foreground font-golos">
            <div className="font-cormorant text-5xl mb-4 text-gold/30">∅</div>
            <p>По запросу ничего не найдено</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm font-golos mb-4">
            Показано {filtered.length} из {materials.length} материалов
          </p>
          <button className="px-6 py-3 border border-gold/30 text-gold/80 text-sm font-golos tracking-wide hover:border-gold hover:text-gold transition-all duration-300">
            Загрузить ещё
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold/60" />
              <span className="text-gold/80 text-xs tracking-[0.2em] uppercase font-golos">Об исследовании</span>
            </div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-8">
              Зачем платить, если<br />
              <em className="text-gold not-italic">есть бесплатно?</em>
            </h2>
            <p className="text-muted-foreground font-golos leading-relaxed mb-6">
              Многие школьники и родители считают, что хорошо подготовиться к ОГЭ и ЕГЭ
              можно только с репетитором или на платных курсах. Это исследование проверяет
              этот миф на практике.
            </p>
            <p className="text-muted-foreground font-golos leading-relaxed mb-6">
              Я изучила более 60 онлайн-ресурсов, провела опрос среди одноклассников
              и систематизировала результаты. Вывод: бесплатных инструментов достаточно
              для уверенной подготовки — если знать, где искать.
            </p>
            <p className="text-muted-foreground font-golos leading-relaxed mb-10">
              Этот сайт — итог исследовательской работы. Здесь собраны только проверенные
              бесплатные ресурсы, сгруппированные по типу и предмету.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1.5 border border-gold/30 text-gold/70 text-xs font-golos tracking-wide">10 класс</span>
              <span className="px-3 py-1.5 border border-border text-muted-foreground text-xs font-golos tracking-wide">Исследовательский проект</span>
              <span className="px-3 py-1.5 border border-border text-muted-foreground text-xs font-golos tracking-wide">2025–2026 уч. год</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="card-hover bg-card p-6">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold mb-4">
                  <Icon name={f.icon} size={18} />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-2 text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground font-golos leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACTS ────────────────────────────────────────────────────────────────

function ContactsSection() {
  return (
    <section id="contacts" className="py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-8 bg-gold/60" />
          <span className="text-gold/80 text-xs tracking-[0.2em] uppercase font-golos">Контакты</span>
          <div className="h-px w-8 bg-gold/60" />
        </div>
        <h2 className="font-cormorant text-5xl md:text-7xl font-light leading-none mb-8">
          Связаться<br />
          <span className="italic text-gold">с автором</span>
        </h2>
        <p className="text-muted-foreground font-golos mb-12 leading-relaxed max-w-lg mx-auto">
          Если вы знаете полезный бесплатный ресурс, которого нет в списке,
          или хотите задать вопрос по исследованию — напишите.
        </p>

        <div className="bg-card border border-border p-8 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs text-muted-foreground font-golos uppercase tracking-widest mb-2">Имя</label>
              <input
                type="text"
                placeholder="Иван Иванов"
                className="w-full px-4 py-3 bg-background border border-border text-foreground font-golos text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground font-golos uppercase tracking-widest mb-2">Email</label>
              <input
                type="email"
                placeholder="ivan@example.com"
                className="w-full px-4 py-3 bg-background border border-border text-foreground font-golos text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xs text-muted-foreground font-golos uppercase tracking-widest mb-2">Сообщение</label>
            <textarea
              placeholder="Расскажите, чем мы можем помочь..."
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border text-foreground font-golos text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors resize-none"
            />
          </div>
          <button className="w-full py-4 bg-gold text-background font-golos font-semibold tracking-wide hover:bg-gold/90 transition-colors duration-200 flex items-center justify-center gap-2">
            <Icon name="Send" size={16} />
            Отправить сообщение
          </button>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground text-sm font-golos">
          <span className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
            <Icon name="Mail" size={15} />
            hello@atlasznaniy.ru
          </span>
          <div className="hidden sm:block w-1 h-1 bg-border rounded-full" />
          <span className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
            <Icon name="MessageCircle" size={15} />
            Telegram-канал
          </span>
          <div className="hidden sm:block w-1 h-1 bg-border rounded-full" />
          <span className="flex items-center gap-2">
            <Icon name="MapPin" size={15} />
            Москва, Россия
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── RESOURCES DATA ──────────────────────────────────────────────────────────

const officialResources = [
  { name: "ФИПИ", url: "https://fipi.ru/", desc: "Демоверсии, спецификации, кодификаторы, открытый банк заданий" },
  { name: "Открытый банк заданий ЕГЭ", url: "https://ege.fipi.ru/bank", desc: "Тестовые задания по всем дисциплинам ЕГЭ" },
  { name: "Навигатор ГИА (Рособрнадзор)", url: "https://clck.ru/aorb6", desc: "Официальные рекомендации и ссылки на полезные ресурсы" },
  { name: "Навигатор подготовки на ФИПИ", url: "https://clck.ru/33diby", desc: "Видеоконсультации разработчиков КИМ" },
  { name: "Навигатор ЕГЭ (Госуслуги)", url: "https://ege.gosuslugi.ru/lk/courses", desc: "Бесплатные материалы и варианты от ФИПИ. Математика и информатика" },
];

const freeTrainers = [
  { name: "Решу ОГЭ", url: "https://oge.sdamgia.ru/", what: "Полная имитация экзамена, автопроверка, статистика ошибок", reg: false, subjects: "Все предметы", note: "Самый популярный ресурс" },
  { name: "Решу ЕГЭ", url: "https://ege.sdamgia.ru/", what: "Варианты, тесты, автопроверка", reg: false, subjects: "Все предметы", note: "" },
  { name: "Решутест", url: "https://reshutest.ru/", what: "Тесты с моментальной проверкой, разный уровень сложности", reg: true, subjects: "10 предметов", note: "Простой интерфейс" },
  { name: "Российская электронная школа", url: "https://resh.edu.ru/", what: "Конспекты, видеолекции, тренировочные занятия", reg: false, subjects: "Все предметы 1–11 кл.", note: "Государственный ресурс" },
  { name: "ЯКласс", url: "https://www.yaklass.ru/", what: "1,6 трлн вариантов заданий, тренажёры ОГЭ/ЕГЭ/ВПР, видеоуроки", reg: true, subjects: "Все школьные предметы", note: "Есть приложение" },
  { name: "Фоксфорд (тренажёры)", url: "https://foxford.ru/", what: "Тесты с автопроверкой, разбор ошибок, видеообъяснения", reg: true, subjects: "Все предметы ЕГЭ и ОГЭ", note: "Бесплатно без курса" },
  { name: "Яндекс.Учебник", url: "https://education.yandex.ru/", what: ">35 000 заданий, адаптивные подборки", reg: true, subjects: "Математика, русский, информатика", note: "Адаптируется под уровень" },
  { name: "Московская электронная школа", url: "https://uchebnik.mos.ru/", what: "800 000+ аудио- и видеоматериалов, электронные пособия", reg: true, subjects: "Все предметы", note: "Ориентирована на Москву" },
  { name: "Незнайка", url: "https://neznaika.info/", what: "Тесты ОГЭ и ЕГЭ, теория, разбор заданий", reg: false, subjects: "Все предметы", note: "Раздел «Шпаргалки»" },
  { name: "4ЕГЭ", url: "https://4ege.ru/", what: "Тесты, пособия, видеоуроки, тренировочные варианты", reg: false, subjects: "Все предметы", note: "Скачивание PDF" },
  { name: "Exam8", url: "https://www.exam8.ru/", what: "Архив вариантов прошлых лет, пробники, онлайн-тесты", reg: false, subjects: "Все предметы", note: "Реальные варианты прошлых лет" },
  { name: "Время ЕГЭ", url: "https://vremyaege.ru/", what: "Онлайн-тесты, разбор заданий, видеоуроки", reg: false, subjects: "Все предметы", note: "Советы экспертов" },
];

const paidSchools = [
  { name: "Сотка", url: "https://sotka.ru/", spec: "ЕГЭ и ОГЭ (все предметы)", price: "от 1 650 ₽/мес", free: "Пробный урок", note: "370 000+ учеников" },
  { name: "Умскул", url: "https://umschool.net/", spec: "ЕГЭ и ОГЭ (все предметы)", price: "Платно", free: "Бесплатные стримы на YouTube", note: "Одна из самых популярных школ" },
  { name: "Твоя сотка", url: "https://tvoyasotka.ru/", spec: "ЕГЭ и ОГЭ (все предметы)", price: "Платно", free: "Короткие видео на YouTube", note: "Визуализация и мемы для запоминания" },
  { name: "Фоксфорд", url: "https://foxford.ru/", spec: "ЕГЭ, ОГЭ, олимпиады", price: "от 4 000 ₽/год", free: "Бесплатные тренажёры", note: "Выдают сертификаты" },
  { name: "Maximum Education", url: "https://maximumtest.ru/", spec: "ЕГЭ и ОГЭ", price: "от 15 000 ₽/курс", free: "Бесплатные вебинары", note: "Гарантия результата" },
  { name: "Тетрика", url: "https://tetrika-school.ru/", spec: "Индивидуальные занятия", price: "от 10 744 ₽/мес", free: "Пробный урок", note: "Гибкий график" },
  { name: "Вебиум", url: "https://webium.ru/", spec: "ЕГЭ и ОГЭ", price: "Платно", free: "Бесплатные вебинары", note: "Интенсивы и марафоны" },
  { name: "Годограф", url: "https://godograf.ru/", spec: "ЕГЭ и ОГЭ", price: "от 12 000 ₽/мес", free: "Бесплатные пробники", note: "Группы до 8 чел., личный куратор" },
  { name: "Skysmart", url: "https://skysmart.ru/", spec: "ЕГЭ и ОГЭ", price: "от 8 000 ₽/мес", free: "Вводный урок", note: "Индивидуальные занятия" },
  { name: "Школаково", url: "https://shkolkovo.net/", spec: "Математика, русский, физика", price: "Платно", free: "Бесплатный доступ к теории", note: "Кураторы — выпускники МГУ" },
  { name: "99ballov", url: "https://99ballov.ru/", spec: "ЕГЭ и ОГЭ", price: "Платно", free: "Вводные уроки", note: "Курсы для учителей" },
  { name: "Лектариум", url: "https://lectarium.ru/", spec: "ЕГЭ, ОГЭ, олимпиады", price: "Платно", free: "Бесплатный доступ по акции", note: "Резидент Сколково" },
];

const subjectSites = [
  { subject: "Английский язык", name: "Langart", url: "https://langart.ru/", what: "Тесты, аудиотренажёры, карточки для слов, устная часть" },
  { subject: "Английский язык", name: "ЕГЭ на 100", url: "https://ege-eng.ru/", what: "Теория, тесты, шаблоны эссе, аудирование" },
  { subject: "История", name: "ED-STAR", url: "https://ed-star.ru/", what: "Тренажёр ЕГЭ, даты, личности, карты" },
  { subject: "Обществознание", name: "Обществознание.ру", url: "https://obshchestvoznanie.ru/", what: "Теория, тесты, терминологический словарь, эссе" },
  { subject: "Математика", name: "Math-prosto", url: "http://math-prosto.ru", what: "Понятные объяснения, разбор задач, формулы" },
  { subject: "Математика", name: "Math100", url: "https://math100.ru/", what: "ЕГЭ и ОГЭ по математике, теория, видеоуроки" },
  { subject: "Математика", name: "Alexlarin", url: "http://alexlarin.net/", what: "Олимпиадные задачи, разбор сложных вариантов" },
  { subject: "Русский язык", name: "Грамма.ру", url: "http://gramma.ru/", what: "Справочник правил, словари, онлайн-тесты" },
  { subject: "Русский язык", name: "Грамота.ру", url: "http://gramota.ru/", what: "Правила, словари, онлайн-проверка слов" },
  { subject: "Литература", name: "Briefly", url: "http://www.briefly.ru/", what: "Краткое содержание 2000 произведений, характеристика героев" },
  { subject: "Литература", name: "Классика", url: "http://klassika.ru/", what: "Полные тексты, биографии писателей, критические статьи" },
  { subject: "Физика", name: "Физика для всех", url: "https://phys-oge-ege.ru/", what: "Теория, задачи с решениями, видеоуроки" },
  { subject: "Химия", name: "Orgchem", url: "https://orgchem.ru/", what: "Органическая химия, реакционные схемы, тренажёры" },
  { subject: "Биология", name: "Биоробот", url: "http://biorobot.ru/", what: "Тесты, теория в картинках, карточки для запоминания" },
  { subject: "География", name: "geo-oge-ege.ru", url: "https://geo-oge-ege.ru/", what: "Теория, карты, тесты, разбор сложных заданий" },
  { subject: "Информатика", name: "Поляков", url: "https://kpolyakov.spb.ru/", what: "Легендарный сайт: теория, задачи, программирование" },
  { subject: "Информатика", name: "Stepik", url: "https://stepik.org/", what: "Интерактивные курсы по программированию (бесплатные)" },
];

const socialChannels = [
  { cat: "Telegram-канал", name: "Данир на связи", url: "https://t.me/danirmath", what: "ОГЭ по математике, разбор заданий, вебинары (Умскул)", free: true },
  { cat: "Telegram-канал", name: "ЕГЭ Студия", url: "https://t.me/egestudiya", what: "ЕГЭ по математике: таблицы, правила, видеоразборы", free: true },
  { cat: "Мобильное приложение", name: "Умскул", url: "https://rustore.ru/", what: "Вебинары, тесты, домашние задания с преподавателями", free: false },
  { cat: "Мобильное приложение", name: "Точка Знаний", url: "https://rustore.ru/", what: "Онлайн-школа 1–11 кл., ОГЭ и ЕГЭ, общение с тьютором", free: false },
  { cat: "Мобильное приложение", name: "ЕГЭ Турбо", url: "https://egeturbo.ru/", what: "Интенсивы по всем предметам, онлайн-тренажёр, конспекты", free: true },
  { cat: "Вузовские курсы", name: "ЦДП ТГУ (Томский ГУ)", url: "https://abiturient.tsu.ru/", what: "Подготовка к ЕГЭ/ОГЭ, занятия ведут преподаватели вуза", free: false },
  { cat: "Вузовские курсы", name: "МИЭТ", url: "https://miet.ru/list_programs/dovuzovskaya-podgotovka/", what: "Акцент на математику, физику, информатику и дизайн. Пробные ЕГЭ", free: false },
  { cat: "Бесплатная платформа", name: "Лектариум (акция для школ)", url: "https://r.lectarium.ru/unlimited-items-2", what: "ОГЭ и ЕГЭ: вебинары в записи, конспекты, пробные варианты", free: true },
];

// ─── RESOURCES SECTION ───────────────────────────────────────────────────────

type ResourceCategory = "official" | "free" | "paid" | "subjects" | "social";

const resCategoryTabs: { id: ResourceCategory; label: string; icon: string; desc: string }[] = [
  { id: "official", label: "Официальные ресурсы", icon: "Shield", desc: "Государственные сайты — ФИПИ, Рособрнадзор, Госуслуги" },
  { id: "free", label: "Бесплатные тренажёры", icon: "Zap", desc: "Сайты для отработки заданий без вложений" },
  { id: "paid", label: "Онлайн-школы", icon: "GraduationCap", desc: "Онлайн-школы — для справки. Включены в исследование как платная альтернатива бесплатным ресурсам" },
  { id: "subjects", label: "По предметам", icon: "BookMarked", desc: "Лучшие сайты по каждому отдельному предмету" },
  { id: "social", label: "Каналы и приложения", icon: "Smartphone", desc: "Telegram-каналы, мобильные приложения, вузовские курсы" },
];

function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<ResourceCategory>("official");

  return (
    <section id="resources" className="py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-gold/80 text-xs tracking-[0.2em] uppercase font-golos">Полезное</span>
          </div>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light leading-none">
            Сайты и<br />
            <span className="italic text-gold">каналы</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-golos max-w-xl leading-relaxed">
            Проверенные ресурсы для подготовки к ОГЭ и ЕГЭ — от официальных государственных
            сайтов до Telegram-каналов и мобильных приложений.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {resCategoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-golos tracking-wide transition-all duration-200 border ${
                activeTab === tab.id
                  ? "bg-gold/10 border-gold/50 text-gold"
                  : "bg-card border-border text-muted-foreground hover:border-gold/30 hover:text-foreground"
              }`}
            >
              <Icon name={tab.icon} size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab description */}
        <p className="text-muted-foreground text-sm font-golos mb-8 flex items-center gap-2">
          <Icon name="Info" size={14} className="text-gold/60" />
          {resCategoryTabs.find((t) => t.id === activeTab)?.desc}
        </p>

        {/* Content */}
        {activeTab === "official" && <OfficialTable />}
        {activeTab === "free" && <FreeTrainersTable />}
        {activeTab === "paid" && <PaidSchoolsTable />}
        {activeTab === "subjects" && <SubjectSitesTable />}
        {activeTab === "social" && <SocialTable />}
      </div>
    </section>
  );
}

function OfficialTable() {
  return (
    <div className="overflow-x-auto">
      <div className="mb-4 px-4 py-3 bg-gold/8 border border-gold/20 flex items-start gap-3">
        <Icon name="ShieldCheck" size={16} className="text-gold mt-0.5 shrink-0" />
        <p className="text-sm text-foreground/80 font-golos">
          Самый надёжный источник — все демоверсии и кодификаторы здесь актуальны.
        </p>
      </div>
      <table className="w-full text-sm font-golos">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">Название</th>
            <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden md:table-cell">Что даёт</th>
            <th className="py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">Ссылка</th>
          </tr>
        </thead>
        <tbody>
          {officialResources.map((r) => (
            <tr key={r.url} className="border-b border-border/50 hover:bg-card transition-colors group">
              <td className="py-4 px-4 font-medium text-foreground">{r.name}</td>
              <td className="py-4 px-4 text-muted-foreground hidden md:table-cell leading-relaxed">{r.desc}</td>
              <td className="py-4 px-4 text-center">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold/30 text-gold/80 text-xs hover:border-gold hover:text-gold transition-all duration-200"
                >
                  <Icon name="ExternalLink" size={11} />
                  Открыть
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FreeTrainersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-golos">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">Название</th>
            <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden lg:table-cell">Что даёт</th>
            <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden md:table-cell">Предметы</th>
            <th className="text-center py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden md:table-cell">Регистрация</th>
            <th className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {freeTrainers.map((r) => (
            <tr key={r.url} className="border-b border-border/50 hover:bg-card transition-colors">
              <td className="py-4 px-4">
                <div className="font-medium text-foreground">{r.name}</div>
                {r.note && <div className="text-xs text-gold/70 mt-0.5">{r.note}</div>}
              </td>
              <td className="py-4 px-4 text-muted-foreground hidden lg:table-cell leading-relaxed max-w-xs">{r.what}</td>
              <td className="py-4 px-4 text-muted-foreground hidden md:table-cell">{r.subjects}</td>
              <td className="py-4 px-4 text-center hidden md:table-cell">
                <span className={`text-xs px-2 py-0.5 ${r.reg ? "text-amber-400/80" : "text-emerald-400/80"}`}>
                  {r.reg ? "Нужна" : "Не нужна"}
                </span>
              </td>
              <td className="py-4 px-4 text-center">
                <a href={r.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold/30 text-gold/80 text-xs hover:border-gold hover:text-gold transition-all duration-200">
                  <Icon name="ExternalLink" size={11} />
                  Открыть
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PaidSchoolsTable() {
  return (
    <div>
      <div className="mb-4 px-4 py-3 bg-secondary border border-border flex items-start gap-3">
        <Icon name="Info" size={16} className="text-muted-foreground mt-0.5 shrink-0" />
        <p className="text-sm text-muted-foreground font-golos">
          Эти ресурсы включены в исследование для сравнения. Основной вывод работы —
          бесплатных инструментов достаточно. Платные школы здесь не рекомендуются.
        </p>
      </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-golos">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">Школа</th>
            <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden md:table-cell">Специализация</th>
            <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden md:table-cell">Цена</th>
            <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden lg:table-cell">Бесплатный контент</th>
            <th className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {paidSchools.map((r) => (
            <tr key={r.url} className="border-b border-border/50 hover:bg-card transition-colors">
              <td className="py-4 px-4">
                <div className="font-medium text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.note}</div>
              </td>
              <td className="py-4 px-4 text-muted-foreground hidden md:table-cell">{r.spec}</td>
              <td className="py-4 px-4 hidden md:table-cell">
                <span className="text-amber-400/80 text-xs font-medium">{r.price}</span>
              </td>
              <td className="py-4 px-4 text-muted-foreground text-xs hidden lg:table-cell">{r.free}</td>
              <td className="py-4 px-4 text-center">
                <a href={r.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold/30 text-gold/80 text-xs hover:border-gold hover:text-gold transition-all duration-200">
                  <Icon name="ExternalLink" size={11} />
                  Открыть
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

function SubjectSitesTable() {
  const uniqueSubjects = Array.from(new Set(subjectSites.map((s) => s.subject)));
  const [activeSubj, setActiveSubj] = useState("Все");

  const filtered = activeSubj === "Все" ? subjectSites : subjectSites.filter((s) => s.subject === activeSubj);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {["Все", ...uniqueSubjects].map((s) => (
          <button key={s} onClick={() => setActiveSubj(s)}
            className={`subject-tag text-xs ${activeSubj === s ? "active" : "text-muted-foreground bg-card"}`}>
            {s}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm font-golos">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">Предмет</th>
              <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">Сайт</th>
              <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden md:table-cell">Что даёт</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.url + r.name} className="border-b border-border/50 hover:bg-card transition-colors">
                <td className="py-4 px-4">
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 whitespace-nowrap">{r.subject}</span>
                </td>
                <td className="py-4 px-4 font-medium text-foreground">{r.name}</td>
                <td className="py-4 px-4 text-muted-foreground hidden md:table-cell leading-relaxed">{r.what}</td>
                <td className="py-4 px-4 text-center">
                  <a href={r.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold/30 text-gold/80 text-xs hover:border-gold hover:text-gold transition-all duration-200">
                    <Icon name="ExternalLink" size={11} />
                    Открыть
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SocialTable() {
  const cats = Array.from(new Set(socialChannels.map((s) => s.cat)));
  return (
    <div className="space-y-10">
      {cats.map((cat) => (
        <div key={cat}>
          <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <div className="h-px w-6 bg-gold/50" />
            {cat}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-golos">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">Название</th>
                  <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden md:table-cell">Что даёт</th>
                  <th className="text-center py-3 px-4 text-xs text-muted-foreground uppercase tracking-widest font-medium hidden md:table-cell">Бесплатно</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {socialChannels
                  .filter((r) => r.cat === cat)
                  .map((r) => (
                    <tr key={r.name} className="border-b border-border/50 hover:bg-card transition-colors">
                      <td className="py-4 px-4 font-medium text-foreground">{r.name}</td>
                      <td className="py-4 px-4 text-muted-foreground hidden md:table-cell leading-relaxed">{r.what}</td>
                      <td className="py-4 px-4 text-center hidden md:table-cell">
                        <span className={`text-xs ${r.free ? "text-emerald-400/80" : "text-amber-400/80"}`}>
                          {r.free ? "✓ Да" : "Платно"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <a href={r.url} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold/30 text-gold/80 text-xs hover:border-gold hover:text-gold transition-all duration-200">
                          <Icon name="ExternalLink" size={11} />
                          Открыть
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-golos">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border border-gold/40 rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gold/60" />
          </div>
          <span className="font-cormorant text-sm text-foreground/60">Атлас Знаний</span>
          <span>© 2026</span>
        </div>
        <span>Исследовательский проект ученицы 10 класса · 2025–2026 уч. год · Все ресурсы бесплатны</span>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "materials", "resources", "about", "contacts"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar active={activeSection} setActive={setActiveSection} />
      <main>
        <HeroSection />
        <MaterialsSection />
        <ResourcesSection />
        <AboutSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}