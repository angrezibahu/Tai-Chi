import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../layout/PageWrapper';
import { lessons } from '../../data/lessons';
import type { ProgressData } from '../../hooks/useProgress';

interface Props {
  progress: ProgressData;
  isCompleted: (id: number) => boolean;
}

export function CourseView({ progress, isCompleted }: Props) {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Course" subtitle="20 days of tai chi fundamentals">
      <ol className="space-y-3">
        {lessons.map(lesson => {
          const completed = isCompleted(lesson.id);
          const isCurrent = lesson.id === progress.currentLesson;
          const isLocked = lesson.id > progress.currentLesson;

          return (
            <li key={lesson.id}>
              <button
                disabled={isLocked}
                onClick={() => !isLocked && navigate('/')}
                className={`ripple w-full text-left flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                  isCurrent
                    ? 'bg-sage-light border border-sage/20'
                    : completed
                    ? 'bg-parchment/60 border border-ink/5'
                    : 'bg-parchment/30 border border-ink/5 opacity-50'
                }`}
              >
                {/* Status indicator */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    completed
                      ? 'bg-sage text-parchment'
                      : isCurrent
                      ? 'bg-sage/20 text-sage border-2 border-sage'
                      : 'bg-ink/10 text-ink'
                  }`}
                >
                  {completed ? (
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M5 10l3.5 3.5L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    lesson.id
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${isCurrent ? 'text-charcoal' : 'text-charcoal/70'}`}>
                    {lesson.title}
                  </p>
                  <p className="text-xs text-ink font-light mt-0.5 truncate">
                    {lesson.duration} · {lesson.movesIntroduced.join(', ')}
                  </p>
                </div>

                {isCurrent && (
                  <span className="flex-shrink-0 text-xs text-sage font-medium px-2 py-1 bg-sage/10 rounded-full">
                    Today
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </PageWrapper>
  );
}
