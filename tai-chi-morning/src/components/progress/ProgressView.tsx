import { useRef } from 'react';
import { PageWrapper } from '../layout/PageWrapper';
import { lessons } from '../../data/lessons';
import type { ProgressData } from '../../hooks/useProgress';

interface Props {
  progress: ProgressData;
  totalPracticeMinutes: number;
  currentStreak: number;
  getJournal: (id: number) => string | undefined;
  exportData: () => void;
  importData: (json: string) => boolean;
}

export function ProgressView({
  progress,
  totalPracticeMinutes,
  currentStreak,
  getJournal,
  exportData,
  importData,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        importData(reader.result);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <PageWrapper title="Progress" subtitle="Your tai chi journey">
      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="text-center p-4 bg-sage-light/50 rounded-2xl">
          <p className="text-2xl font-serif text-sage">{completedCount}</p>
          <p className="text-[10px] text-ink uppercase tracking-widest font-light mt-1">Lessons</p>
        </div>
        <div className="text-center p-4 bg-gold-light/50 rounded-2xl">
          <p className="text-2xl font-serif text-gold">{currentStreak}</p>
          <p className="text-[10px] text-ink uppercase tracking-widest font-light mt-1">Day Streak</p>
        </div>
        <div className="text-center p-4 bg-parchment/60 border border-ink/5 rounded-2xl">
          <p className="text-2xl font-serif text-charcoal">{totalPracticeMinutes}</p>
          <p className="text-[10px] text-ink uppercase tracking-widest font-light mt-1">Minutes</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-xs uppercase tracking-widest text-ink">Overall Progress</h3>
          <span className="text-xs text-ink font-light">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-ink/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage rounded-full transition-all duration-1000"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-xs text-ink font-light mt-2">
          {completedCount} of {totalLessons} lessons completed
        </p>
      </div>

      {/* Journal entries */}
      {completedCount > 0 && (
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-ink mb-3">Journal Entries</h3>
          <ul className="space-y-3">
            {progress.completedLessons
              .slice()
              .reverse()
              .map(entry => {
                const lesson = lessons.find(l => l.id === entry.lessonId);
                const journalText = getJournal(entry.lessonId);
                return (
                  <li
                    key={entry.lessonId}
                    className="p-4 bg-parchment/60 border border-ink/5 rounded-2xl"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-charcoal">
                        Day {entry.lessonId}: {lesson?.title}
                      </p>
                      <p className="text-[10px] text-ink font-light">
                        {new Date(entry.completedAt).toLocaleDateString()}
                      </p>
                    </div>
                    {journalText ? (
                      <p className="text-sm text-charcoal/70 font-light italic mt-1">
                        "{journalText}"
                      </p>
                    ) : (
                      <p className="text-xs text-ink/50 font-light mt-1">No journal entry</p>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      )}

      {/* Data management */}
      <div className="space-y-3">
        <h3 className="text-xs uppercase tracking-widest text-ink">Data</h3>
        <div className="flex gap-3">
          <button
            onClick={exportData}
            className="ripple flex-1 py-3 border border-ink/10 rounded-2xl text-sm text-ink font-light hover:border-sage/30 transition-colors"
          >
            Export Progress
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="ripple flex-1 py-3 border border-ink/10 rounded-2xl text-sm text-ink font-light hover:border-sage/30 transition-colors"
          >
            Import Progress
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            className="hidden"
            aria-label="Import progress file"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
