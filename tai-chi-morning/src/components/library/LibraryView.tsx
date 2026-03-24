import { useState } from 'react';
import { PageWrapper } from '../layout/PageWrapper';
import { moves } from '../../data/moves';
import type { Move } from '../../data/moves';

const categories: { key: Move['category']; label: string }[] = [
  { key: 'stance', label: 'Stances' },
  { key: 'hand', label: 'Hand Forms' },
  { key: 'kick', label: 'Kicks' },
  { key: 'combined', label: 'Combined' },
];

export function LibraryView() {
  const [activeCategory, setActiveCategory] = useState<Move['category'] | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeCategory === 'all'
    ? moves
    : moves.filter(m => m.category === activeCategory);

  return (
    <PageWrapper title="Move Library" subtitle="Reference for all tai chi movements">
      {/* Category filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1 -mx-1 px-1">
        <button
          onClick={() => setActiveCategory('all')}
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-sage text-parchment'
              : 'bg-ink/5 text-ink hover:text-charcoal'
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === cat.key
                ? 'bg-sage text-parchment'
                : 'bg-ink/5 text-ink hover:text-charcoal'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Moves list */}
      <ul className="space-y-3">
        {filtered.map(move => {
          const isExpanded = expandedId === move.id;
          return (
            <li key={move.id}>
              <button
                onClick={() => setExpandedId(isExpanded ? null : move.id)}
                className="w-full text-left p-4 bg-parchment/60 border border-ink/5 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-charcoal">{move.name}</p>
                    <p className="text-xs text-ink font-light mt-0.5">{move.chineseName} · Day {move.introducedInLesson}</p>
                  </div>
                  <svg
                    className={`w-4 h-4 text-ink transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-ink/5 zen-slide-up">
                    <p className="text-sm text-charcoal/80 font-light leading-relaxed">{move.description}</p>
                    {move.tips.length > 0 && (
                      <div className="mt-3">
                        <h4 className="text-xs uppercase tracking-widest text-ink mb-1.5">Tips</h4>
                        <ul className="space-y-1">
                          {move.tips.map((tip, i) => (
                            <li key={i} className="text-xs text-charcoal/70 font-light flex items-start gap-2">
                              <span className="text-gold mt-0.5">·</span>{tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </PageWrapper>
  );
}
