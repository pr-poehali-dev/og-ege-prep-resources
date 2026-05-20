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
  { value: "1 200+", label: "Учебных материалов" },
  { value: "24", label: "Предмета" },
  { value: "80 000+", label: "Скачиваний в месяц" },
];

const features = [
  {
    icon: "BookOpen",
    title: "Полная библиотека",
    desc: "Материалы охватывают программу 5–11 класса, ЕГЭ и ОГЭ по всем предметам",
  },
  {
    icon: "Zap",
    title: "Быстрый поиск",
    desc: "Фильтры по предмету, типу и уровню — найди нужный материал за 10 секунд",
  },
  {
    icon: "Download",
    title: "Скачай и используй",
    desc: "Все материалы доступны в PDF. Открываются на любом устройстве",
  },
  {
    icon: "Star",
    title: "Проверенное качество",
    desc: "Каждый материал составлен методистами и проверен учителями-практиками",
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
          Открыть библиотеку
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
            Платформа учебных материалов
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </div>

        <h1 className="font-cormorant font-light leading-none tracking-tight mb-6">
          <span className="block text-[clamp(4rem,12vw,10rem)] opacity-0-init animate-fade-up delay-200 text-foreground">
            Всё что нужно
          </span>
          <span className="block text-[clamp(4rem,12vw,10rem)] opacity-0-init animate-fade-up delay-300 text-gold-shimmer">
            для учёбы
          </span>
          <span className="block text-[clamp(2rem,6vw,5rem)] opacity-0-init animate-fade-up delay-400 text-muted-foreground font-light italic mt-2">
            — в одном месте
          </span>
        </h1>

        <p className="opacity-0-init animate-fade-up delay-500 text-muted-foreground font-golos text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Шпаргалки, справочники и учебные материалы по всем школьным предметам.
          Проверены методистами. Доступны бесплатно.
        </p>

        <div className="opacity-0-init animate-fade-up delay-600 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("materials")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 bg-gold text-background font-golos font-semibold tracking-wide hover:bg-gold/90 transition-all duration-300 flex items-center gap-3 justify-center"
          >
            <Icon name="Library" size={18} />
            Открыть библиотеку
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
              Учебные<br />
              <span className="italic text-gold">материалы</span>
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
              <span className="text-gold/80 text-xs tracking-[0.2em] uppercase font-golos">О платформе</span>
            </div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-8">
              Знания должны быть{" "}
              <em className="text-gold not-italic">доступны каждому</em>
            </h2>
            <p className="text-muted-foreground font-golos leading-relaxed mb-6">
              Атлас Знаний — открытая библиотека учебных материалов, созданная методистами
              и учителями-практиками. Мы верим, что качественная подготовка не должна
              зависеть от бюджета.
            </p>
            <p className="text-muted-foreground font-golos leading-relaxed mb-10">
              На платформе собраны шпаргалки, справочники, формульники и конспекты
              по всем школьным предметам — от математики до литературы.
              Все материалы бесплатны и доступны без регистрации.
            </p>
            <div className="flex items-center gap-6">
              <button className="px-6 py-3 bg-gold text-background font-golos font-medium text-sm tracking-wide hover:bg-gold/90 transition-colors">
                Начать бесплатно
              </button>
              <span className="text-xs text-muted-foreground font-golos">
                Без регистрации · Без рекламы
              </span>
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
          Есть вопросы?<br />
          <span className="italic text-gold">Напишите нам</span>
        </h2>
        <p className="text-muted-foreground font-golos mb-12 leading-relaxed max-w-lg mx-auto">
          Хотите предложить материал, сообщить об ошибке или стать партнёром платформы —
          будем рады услышать вас.
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
        <span>Все материалы предоставляются бесплатно для образовательных целей</span>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "materials", "about", "contacts"];
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
        <AboutSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
