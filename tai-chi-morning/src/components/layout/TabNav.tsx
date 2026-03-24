import { useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  { path: '/', label: 'Today', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
  { path: '/course', label: 'Course', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { path: '/library', label: 'Library', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
  { path: '/progress', label: 'Progress', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
];

export function TabNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-parchment/95 backdrop-blur-sm border-t border-ink/10" role="tablist" aria-label="Main navigation">
      <div className="flex justify-around items-center max-w-lg mx-auto h-16 px-2 pb-[env(safe-area-inset-bottom)]">
        {tabs.map(tab => {
          const isActive = location.pathname === tab.path ||
            (tab.path !== '/' && location.pathname.startsWith(tab.path));
          return (
            <button
              key={tab.path}
              role="tab"
              aria-selected={isActive}
              aria-label={tab.label}
              onClick={() => navigate(tab.path)}
              className={`ripple flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all duration-500 ${
                isActive ? 'text-sage' : 'text-ink hover:text-charcoal'
              }`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={tab.icon} />
              </svg>
              <span className={`text-[10px] tracking-wide ${isActive ? 'font-medium' : 'font-light'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
