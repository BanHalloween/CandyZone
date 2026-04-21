import React, { useState } from 'react';
import { Home, BookOpen, ToyBrick, ListChecks, Copy, Menu, X, Check, ChevronRight, ShieldCheck, MessageSquare, Gamepad2 } from 'lucide-react';

const SERVER_IP = '193.164.16.158:7777';
const DISCORD_LINK = 'https://discord.gg/QGthvv8VFv';

const discordLogo = 'https://i.ibb.co/r22RSQkj/Discord.png';
const logoImg = 'https://i.ibb.co/fYs0spL1/logo.png';
const welcomeImg = 'https://i.ibb.co/S4Txc9HV/image.png';
const pluginsImg = 'https://i.ibb.co/YFDGdCJf/image.png';
const rulesImg = 'https://i.ibb.co/kgp9QDH9/image.png';
const eventsImg = 'https://i.ibb.co/LhBJw3Jc/image.png';

const NavItem = ({ label, icon: Icon, active, onClick }) => (
  <button onClick={onClick} className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all font-days text-sm uppercase ${active ? 'bg-orange-500 text-white' : 'text-zinc-400 hover:text-orange-400'}`}>
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

const SubNavItem = ({ label, icon: Icon, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center space-x-3 px-5 py-4 rounded-xl border-l-4 transition-all font-days text-xs uppercase ${active ? 'border-orange-500 bg-orange-500/10 text-orange-400' : 'border-zinc-800 text-zinc-500 hover:border-orange-500/50 hover:text-zinc-200'}`}>
    <Icon size={16} />
    <span>{label}</span>
  </button>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentRulesSubPage, setCurrentRulesSubPage] = useState('classic');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const rulesData = {
    classic: {
      title: "Правила Classic",
      rules: [
        { text: "[С1] Запрещено использовать баги.", punishment: "Предупреждение → Блокировка на 30 дней." },
        { text: "[С2] Запрещено использовать постороннее ПО (читы, аимботы, ESP, ВХ, макросы и т.д.).", punishment: "Перманентная блокировка." },
        { text: "[С3] Запрещено оскорблять и провоцировать на нарушение правил.", punishment: "Предупреждение → Блокировка на 5 часов." },
        { text: "[С4] Запрещено издавать громкие звуки и включать неприятную музыку.", punishment: "Предупреждение → Блокировка на 5 часов." },
        { text: "[С5] Официальный язык сервера — русский. Допускается использование других языков, если вы владеете восточнославянским языком.", punishment: "Предупреждение → Блокировка на 100 дней." },
        { text: "[С6] Запрещено мешать игре союзных классов.", punishment: "Предупреждение → Блокировка на 5 часов." },
        { text: "[С7] Запрещено кемперить.", punishment: "Предупреждение → Блокировка на 3 часа." },
        { text: "[С8] Запрещено убивать безоружных игроков.", punishment: "Предупреждение → Блокировка на 3 часа." },
        { text: "[С9] Запрещено рекламировать что-либо в любом виде.", punishment: "Блокировка на 100 дней." },
        { text: "[С10] Запрещено покидать сервер во время разбора жалобы администрацией (от вас или на вас).", punishment: "Закрытие жалобы / Удвоение срока наказания." },
        { text: "[С11] Запрещено выдавать себя за сотрудника проекта, если вы им не являетесь.", punishment: "Блокировка на 1 день." },
        { text: "[С12] Запрещено мешать работе администрации.", punishment: "Предупреждение → Блокировка на 3 часа." }
      ],
      notes: ["➤ При подаче жалобы через Discord требуется подтверждение нарушения.", "➤ За многочисленные нарушения на сервере возможна перманентная блокировка."]
    },
    discord: {
      title: "Правила Discord",
      rules: [
        { text: "[D1] Запрещено оскорблять, провоцировать и угрожать.", punishment: "Предупреждение → Блокировка на 5 часов." },
        { text: "[D2] Запрещено флудить и спамить.", punishment: "Предупреждение → Блокировка на 5 часов." },
        { text: "[D3] Запрещено публиковать NSFW-контент (18+).", punishment: "Мут на 7 дней → Блокировка на 30 дней." },
        { text: "[D4] Запрещено рекламировать сторонние проекты.", punishment: "Мут на 3 дня → Блокировка на 30 дней." },
        { text: "[D5] Официальный язык текстовых каналов — русский.", punishment: "" },
        { text: "[D6] Запрещено включать музыку или звуки в голосовых каналах, если вас просят прекратить.", punishment: "Предупреждение → Мут на 12 часов." },
        { text: "[D7] Запрещено использовать никнеймы и аватары, нарушающие правила сервера.", punishment: "Предупреждение → Блокировка на 3 дня." },
        { text: "[D8] Запрещено обсуждать политические и религиозные темы.", punishment: "Предупреждение → Мут на 5 часов." },
        { text: "[D9] Запрещено использовать каналы не по назначению.", punishment: "Предупреждение → Мут на 12 часов." },
        { text: "[D10] Запрещено выдавать себя за администрацию проекта.", punishment: "Предупреждение → Мут на 12 часов." },
        { text: "[D11] Запрещено подавать шуточные жалобы или апелляции.", punishment: "Предупреждение → Мут на 12 часов." },
        { text: "[D12] Запрещено игнорировать указания модерации.", punishment: "Мут на 5 часов → Блокировка на 3 дня." }
      ],
      notes: ["➤ За многочисленные нарушения на сервере возможна перманентная блокировка."]
    },
    admin: {
      title: "Регламент Администрации",
      rules: [
        { text: "[A1] Запрещено иметь несовпадающие никнеймы в Steam и Discord." },
        { text: "[A2] Запрещено разглашать любую внутреннюю информацию сервера." },
        { text: "[A3] Запрещено блатовать по отношению к игрокам и сотрудникам." },
        { text: "[A4] Запрещено неуважительно общаться с игроками при выполнении обязанностей (сотрудники обязаны общаться уважительно)." },
        { text: "[A5] Запрещено не реагировать на жалобы и обращения игроков (администрация обязана реагировать)." },
        { text: "[A6] Запрещено использовать админ-панель для получения личного преимущества." },
        { text: "[A7] Запрещено выдавать баны и кики игрокам без причины." },
        { text: "[A8] Запрещено раскрывать информацию, полученную через админ-панель." },
        { text: "[A9] Запрещено не заходить на сервер регулярно (администрация обязана заходить регулярно)." },
        { text: "[A10] Запрещено передавать свой аккаунт третьим лицам." }
      ],
      notes: ["➤ Руководство самостоятельно решает, какое наказание получит сотрудник проекта."]
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
        .font-days { font-family: 'Days One', sans-serif; }
        .banner-gradient { background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%); }
      `}</style>

      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800 h-20 flex items-center justify-between px-6">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <img src={logoImg} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="font-days text-xl">Candy<span className="text-orange-500">Zone</span></span>
        </div>
        <nav className="hidden md:flex space-x-2">
          <NavItem label="Главная" icon={Home} active={currentPage === 'home'} onClick={() => setCurrentPage('home')} />
          <NavItem label="Правила" icon={BookOpen} active={currentPage === 'rules'} onClick={() => setCurrentPage('rules')} />
          <NavItem label="Плагины" icon={ToyBrick} active={currentPage === 'plugins'} onClick={() => setCurrentPage('plugins')} />
          <NavItem label="Ивенты" icon={ListChecks} active={currentPage === 'events'} onClick={() => setCurrentPage('events')} />
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-orange-500"><Menu /></button>
      </header>

      <main className="pt-20 flex-grow">
        {currentPage === 'home' ? (
          <div className="h-[80vh] relative">
            <img src={welcomeImg} className="w-full h-full object-cover" alt="Banner" />
            <div className="absolute inset-0 banner-gradient" />
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="relative rounded-3xl overflow-hidden h-48 md:h-64 mb-12 border border-zinc-800">
              <img src={currentPage === 'rules' ? rulesImg : currentPage === 'plugins' ? pluginsImg : eventsImg} className="w-full h-full object-cover" alt="Banner" />
              <div className="absolute inset-0 banner-gradient" />
            </div>
            <div className="grid md:grid-cols-[280px_1fr] gap-10">
              {currentPage === 'rules' && (
                <aside className="space-y-2">
                  <SubNavItem label="Classic" icon={Gamepad2} active={currentRulesSubPage === 'classic'} onClick={() => setCurrentRulesSubPage('classic')} />
                  <SubNavItem label="Discord" icon={MessageSquare} active={currentRulesSubPage === 'discord'} onClick={() => setCurrentRulesSubPage('discord')} />
                  <SubNavItem label="Администрация" icon={ShieldCheck} active={currentRulesSubPage === 'admin'} onClick={() => setCurrentRulesSubPage('admin')} />
                </aside>
              )}
              <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
                {currentPage === 'rules' && (
                  <div>
                    <h2 className="text-2xl font-days text-orange-500 mb-6 uppercase">{rulesData[currentRulesSubPage].title}</h2>
                    <div className="space-y-4">
                      {rulesData[currentRulesSubPage].rules.map((r, i) => (
                        <div key={i} className="border-b border-zinc-800/50 pb-4">
                          <p className="text-zinc-200 font-bold mb-1">{r.text}</p>
                          {r.punishment && <p className="text-orange-400 text-sm">Наказание: {r.punishment}</p>}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-4 bg-orange-500/5 rounded-xl border border-orange-500/10">
                      {rulesData[currentRulesSubPage].notes.map((n, i) => <p key={i} className="text-zinc-400 text-sm">{n}</p>)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-900 py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-zinc-500 font-days text-xs uppercase tracking-widest">© 2026 SCP: SL PROJECT</p>
            <p className="text-zinc-700 font-days text-[9px] uppercase mt-1 tracking-widest">Dev: Halloween (@banhalloween)</p>
          </div>
          <div className="flex gap-4">
            <button onClick={handleCopyIP} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl min-w-[200px] hover:border-orange-500 transition-all text-center">
              <span className="block text-[10px] text-zinc-500 font-days uppercase mb-1">Server IP</span>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-orange-500 font-days text-sm">{SERVER_IP}</span>
                {isCopied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-zinc-600" />}
              </div>
            </button>
            <a href={DISCORD_LINK} target="_blank" className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl min-w-[200px] hover:border-orange-500 transition-all text-center">
              <span className="block text-[10px] text-zinc-500 font-days uppercase mb-1">Communication</span>
              <div className="flex items-center justify-center space-x-2">
                <img src={discordLogo} className="w-4 h-4" alt="DS" />
                <span className="text-zinc-300 font-days text-sm uppercase">Discord Сервер</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}