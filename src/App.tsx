import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  HeartHandshake, 
  Hospital, 
  MapPin, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Stethoscope, 
  User, 
  Download,
  ArrowRight,
  ClipboardList,
  Clock,
  BriefcaseMedical,
  Plane,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <WhoWeHelp />
        <WhatYouGet />
        <HowItWorks />
        <Clinics />
        <Doctors />
        <SecondOpinion />
        <Organization />
        <Cost />
        <WhyUs />
        <FAQ />
        <LeadMagnet />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'О нас', href: '#who-we-help' },
    { name: 'Услуги', href: '#what-you-get' },
    { name: 'Клиники', href: '#clinics' },
    { name: 'Врачи', href: '#doctors' },
    { name: 'Стоимость', href: '#cost' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-700 font-bold text-xl">
          <HeartHandshake className="w-7 h-7" />
          <span>MedTour</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#contact" className="hidden lg:flex items-center gap-2 text-slate-600 hover:text-blue-700 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-bold">+7 (XXX) XXX-XX-XX</span>
          </a>
          <a href="#whatsapp" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2 shadow-sm">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="flex items-center gap-2 text-slate-700 hover:text-blue-700 py-2 font-bold">
            <Phone className="w-5 h-5" />
            <span>+7 (XXX) XXX-XX-XX</span>
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pb-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Организация лечения онкологии в ведущих клиниках России <br className="hidden sm:block" />
            <span className="text-blue-600">для пациентов из Узбекистана</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Проверим медицинские документы, согласуем план лечения с профильными специалистами и будем сопровождать вас на каждом этапе — от консультации до завершения лечения.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              'Предварительная оценка по документам',
              'Работаем напрямую с клиниками-партнёрами',
              'Полное сопровождение до и после лечения'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#whatsapp" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-center transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Написать в WhatsApp
            </a>
            <a href="#docs" className="bg-white border-2 border-blue-100 hover:border-blue-200 text-blue-700 px-8 py-4 rounded-xl font-semibold text-center transition-all flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              Отправить документы на оценку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  const cards = [
    {
      icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
      title: 'Диагноз подтверждён',
      desc: 'Необходимо пройти лечение, операцию, химиотерапию или лучевую терапию в профильной клинике.'
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: 'Есть сомнения в диагнозе или тактике лечения',
      desc: 'Хотите получить альтернативное мнение специалистов и убедиться в правильности выбранного подхода.'
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-blue-600" />,
      title: 'Лечение начато, но нет ожидаемого результата',
      desc: 'Рассматриваете возможность смены тактики или клиники.'
    }
  ];

  return (
    <section id="who-we-help" className="pt-10 pb-20 sm:pt-14 sm:pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">В каких случаях мы можем быть полезны</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const items = [
    'Понятный и структурированный план дальнейших действий',
    'Варианты лечения в профильных клиниках России',
    'Предварительную смету до приезда',
    'Организацию консультаций и госпитализации',
    'Сопровождение по организационным и логистическим вопросам'
  ];

  return (
    <section id="what-you-get" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Что вы получаете, обращаясь к нам</h2>
            <ul className="space-y-4 mb-8">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-blue-900 font-medium">
                Мы не назначаем лечение — мы организуем маршрут пациента и координируем процесс взаимодействия с клиниками.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/doctor/800/600" 
              alt="Консультация врача" 
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    'Вы связываетесь с нами через WhatsApp или форму на сайте',
    'Мы направляем список необходимых документов',
    'Анализируем медицинские данные',
    'Получаем варианты лечения от клиник-партнёров',
    'Обсуждаем с вами план, сроки и бюджет',
    'Согласовываем клинику и дату приезда',
    'Организуем приезд и сопровождение'
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Как проходит организация лечения</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-blue-500/20 font-bold text-6xl absolute -top-6 -left-4 z-0">
                0{i + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-medium text-slate-200">{step}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full font-medium border border-blue-500/20">
            <Clock className="w-5 h-5" />
            Средний срок подготовки предварительного плана — от 2 до 5 рабочих дней.
          </div>
        </div>
      </div>
    </section>
  );
}

function Clinics() {
  const clinics = [
    {
      name: 'Национальный медицинский исследовательский центр онкологии',
      city: 'Москва',
      focus: 'Хирургия, химиотерапия, лучевая терапия',
      equip: 'ПЭТ-КТ, Кибернож, робот Da Vinci',
      exp: 'Более 20 лет опыта сложных операций',
      intl: 'Собственный международный отдел',
      image: 'https://picsum.photos/seed/clinic1/800/500'
    },
    {
      name: 'Федеральный научно-клинический центр',
      city: 'Санкт-Петербург',
      focus: 'Таргетная терапия, иммунотерапия',
      equip: 'Современные линейные ускорители',
      exp: 'Передовые протоколы лечения',
      intl: 'Координационный центр для иностранных пациентов',
      image: 'https://picsum.photos/seed/clinic2/800/500'
    }
  ];

  return (
    <section id="clinics" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Клиники, с которыми мы сотрудничаем</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {clinics.map((clinic, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full overflow-hidden">
              <img 
                src={clinic.image} 
                alt={clinic.name} 
                className="w-full h-56 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{clinic.name}</h3>
                  <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shrink-0 self-start">
                    <MapPin className="w-4 h-4" />
                    {clinic.city}
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-2 text-slate-600">
                    <BriefcaseMedical className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">Профильные направления:</strong> {clinic.focus}</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <Hospital className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">Оборудование:</strong> {clinic.equip}</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">Опыт:</strong> {clinic.exp}</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <User className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">Поддержка:</strong> {clinic.intl}</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 py-3 rounded-xl font-medium transition-colors mt-auto">
                  Получить вариант лечения в этой клинике
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Doctors() {
  const doctors = [
    {
      name: 'Иванов Иван Иванович',
      role: 'Заведующий отделением онкохирургии',
      spec: 'Онколог-хирург, д.м.н.',
      exp: 'Более 25 лет опыта. Специализируется на малоинвазивных операциях при опухолях ЖКТ.'
    },
    {
      name: 'Петрова Анна Сергеевна',
      role: 'Ведущий химиотерапевт',
      spec: 'Онколог, химиотерапевт, к.м.н.',
      exp: '15 лет опыта. Эксперт в области таргетной и иммунотерапии.'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Профильные специалисты</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {doctors.map((doc, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-24 h-24 bg-slate-200 rounded-full shrink-0 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/doc${i}/200/200`} 
                  alt={doc.name}
                  className="w-full h-full object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{doc.role}</p>
                <p className="text-slate-700 font-medium mb-2">{doc.spec}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{doc.exp}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-slate-500 text-sm max-w-2xl mx-auto">
          Решение о тактике лечения принимается врачом после изучения документов и обследований.
        </div>
      </div>
    </section>
  );
}

function SecondOpinion() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Получение второго мнения специалиста</h2>
            <p className="text-blue-100 mb-8 text-lg">
              В рамках услуги второго мнения вы можете получить:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Анализ представленных медицинских документов',
                'Заключение по диагнозу',
                'Рекомендации по тактике лечения',
                'Перечень необходимых дообследований'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-blue-50">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-700/50 rounded-xl p-6 mb-8 border border-blue-500/30">
              <p className="mb-2"><strong className="text-white">Срок подготовки заключения:</strong> 3–7 рабочих дней</p>
              <p><strong className="text-white">Формат:</strong> письменное заключение или онлайн-консультация</p>
            </div>
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg">
              Запросить второе мнение
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/opinion/800/600" 
              alt="Второе мнение" 
              className="rounded-2xl shadow-2xl object-cover w-full h-[500px] opacity-90 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Organization() {
  const items = [
    'Помощь с подготовкой приглашения (при необходимости)',
    'Консультации по вопросам въезда и документов',
    'Помощь с выбором размещения',
    'Организация трансфера',
    'Перевод медицинских документов',
    'Поддержка во время пребывания в России'
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Plane className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Мы помогаем не только с лечением, но и с организацией процесса</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-slate-700 font-medium pt-2">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cost() {
  return (
    <section id="cost" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Из чего формируется стоимость лечения</h2>
        <p className="text-center text-slate-600 text-lg mb-12">
          Стоимость зависит от диагноза, стадии заболевания и объёма лечения.
        </p>
        
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">В смету могут входить:</h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              'Консультации и консилиумы',
              'Диагностика',
              'Операция или терапия',
              'Госпитализация',
              'Медикаментозное лечение'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center space-y-4 text-slate-600">
          <p>Предварительная смета согласовывается до приезда в клинику.</p>
          <p>Финальная стоимость уточняется после очного осмотра и дополнительной диагностики (при необходимости).</p>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    'Работаем напрямую с клиниками-партнёрами',
    'Прозрачная схема взаимодействия',
    'Конфиденциальность медицинских данных',
    'Поддержка на каждом этапе маршрута'
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-16">Почему пациенты выбирают нас</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-lg font-medium text-slate-200">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: 'Нужно ли приезжать в Россию для получения плана лечения?',
      a: 'Нет, предварительный план лечения мы можем составить дистанционно на основе ваших медицинских документов. Приезд потребуется только для прохождения самого лечения или очной консультации, если это необходимо.'
    },
    {
      q: 'Можно ли сначала получить дистанционную консультацию?',
      a: 'Да, мы организуем онлайн-консультации с профильными специалистами. Врач изучит ваши документы, ответит на вопросы и даст рекомендации по дальнейшим шагам до вашего приезда.'
    },
    {
      q: 'Как оплачивается лечение?',
      a: 'Оплата медицинских услуг производится напрямую в кассу клиники или по официальному договору. Мы не берем скрытых комиссий за медицинские услуги, всё максимально прозрачно.'
    },
    {
      q: 'Сколько времени занимает организация?',
      a: 'В среднем подготовка предварительного плана занимает от 2 до 5 рабочих дней. Сроки зависят от сложности случая и полноты предоставленных медицинских документов.'
    },
    {
      q: 'Можно ли выбрать клинику самостоятельно?',
      a: 'Да, вы можете выбрать клинику из числа наших партнёров. Мы предоставим объективную информацию о каждой из них, чтобы вы могли принять взвешенное решение.'
    },
    {
      q: 'Что делать, если нет полного пакета документов?',
      a: 'Свяжитесь с нами, и мы подскажем, какие именно обследования необходимо пройти. Вы сможете сделать их по месту жительства и затем отправить нам результаты.'
    },
    {
      q: 'Как быстро вы отвечаете на обращение?',
      a: 'Мы стараемся отвечать на все заявки в течение нескольких часов в рабочее время. Если вы написали нам вечером или в выходной день, мы свяжемся с вами утром следующего рабочего дня.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Частые вопросы</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all">
              <button 
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadMagnet() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Бесплатный чек-лист подготовки к лечению онкологии в России</h2>
            <p className="text-slate-600 mb-6 font-medium">Внутри PDF:</p>
            <ul className="space-y-3 mb-8">
              {[
                'Перечень необходимых медицинских документов',
                'Рекомендации по подготовке КТ/МРТ',
                'Вопросы, которые важно задать врачу',
                'Из чего складывается бюджет лечения',
                'Организационный чек-лист поездки'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Имя</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+998 XX XXX XX XX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-slate-400 font-normal">(опционально)</span></label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="example@mail.com" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4">
                <Download className="w-5 h-5" />
                Скачать чек-лист
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Получите предварительную оценку вашего случая</h2>
        <p className="text-lg text-slate-600 mb-10">
          Свяжитесь с нами, чтобы обсудить вашу ситуацию и возможные варианты лечения.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#whatsapp" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Написать в WhatsApp
          </a>
          <a href="#docs" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
            <FileText className="w-5 h-5" />
            Отправить документы
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <HeartHandshake className="w-6 h-6" />
          <span>MedTour</span>
        </div>
        <div className="text-sm">
          <p>Мы не лечим. Мы организуем маршрут пациента и координируем процесс.</p>
          <p className="mt-2 text-slate-500">© {new Date().getFullYear()} Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

