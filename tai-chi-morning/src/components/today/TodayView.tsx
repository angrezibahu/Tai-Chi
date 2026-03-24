import { useState } from 'react';
import { PageWrapper } from '../layout/PageWrapper';
import { LessonPlayer } from './LessonPlayer';
import { WisdomQuote } from './WisdomQuote';
import { useCurrentLesson } from '../../hooks/useLesson';
import type { ProgressData } from '../../hooks/useProgress';

interface Props {
  progress: ProgressData;
  completeLesson: (id: number, minutes: number, journal?: string) => void;
  isCompleted: (id: number) => boolean;
}

export function TodayView({ progress, completeLesson, isCompleted }: Props) {
  const { lesson, dayNumber, totalDays } = useCurrentLesson(progress.currentLesson);
  const [showComplete, setShowComplete] = useState(false);
  const [journal, setJournal] = useState('');
  const completed = lesson ? isCompleted(lesson.id) : false;

  if (!lesson) {
    return (
      <PageWrapper title="Journey Complete">
        <div className="text-center py-12">
          <p className="text-ink font-light text-lg">You have completed all 20 lessons.</p>
          <p className="font-brush text-2xl text-sage mt-4">The journey continues in practice.</p>
        </div>
      </PageWrapper>
    );
  }

  const durationMinutes = parseInt(lesson.duration) || 5;

  const handleComplete = () => {
    completeLesson(lesson.id, durationMinutes, journal || undefined);
    setShowComplete(false);
    setJournal('');
  };

  return (
    <PageWrapper>
      {/* Day indicator */}
      <div className="flex items-center gap-3 mb-6 zen-slide-up">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 progress-circle" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="20" fill="none" stroke="#E8EDE5" strokeWidth="3" />
            <circle
              cx="24" cy="24" r="20" fill="none" stroke="#7A8B6F" strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${(dayNumber / totalDays) * 125.6} 125.6`}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-charcoal">
            {dayNumber}
          </span>
        </div>
        <div>
          <p className="text-xs text-ink font-light uppercase tracking-widest">Day {dayNumber} of {totalDays}</p>
          <h1 className="text-xl font-serif text-charcoal">{lesson.title}</h1>
        </div>
      </div>

      {/* Video */}
      <LessonPlayer videoId={lesson.youtubeVideoId} title={lesson.title} />

      {/* Description */}
      <div className="mt-6 zen-slide-up" style={{ animationDelay: '0.1s' }}>
        <p className="text-sm text-charcoal/80 leading-relaxed font-light">{lesson.description}</p>
      </div>

      {/* Lesson details */}
      <div className="mt-6 space-y-4 zen-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-2 text-sm text-ink">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-light">{lesson.duration}</span>
        </div>

        {lesson.movesIntroduced.length > 0 && (
          <div>
            <h3 className="text-xs uppercase tracking-widest text-ink mb-2">New Moves</h3>
            <div className="flex flex-wrap gap-2">
              {lesson.movesIntroduced.map(move => (
                <span key={move} className="px-3 py-1 bg-sage-light rounded-full text-xs text-sage font-medium">{move}</span>
              ))}
            </div>
          </div>
        )}

        {lesson.keyPrinciples.length > 0 && (
          <div>
            <h3 className="text-xs uppercase tracking-widest text-ink mb-2">Key Principles</h3>
            <ul className="space-y-1">
              {lesson.keyPrinciples.map(p => (
                <li key={p} className="text-sm text-charcoal/80 font-light flex items-start gap-2">
                  <span className="text-gold mt-0.5">·</span>{p}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="text-xs uppercase tracking-widest text-ink mb-2">Breathing</h3>
          <p className="text-sm text-charcoal/80 font-light">{lesson.breathingFocus}</p>
        </div>
      </div>

      {/* Mark complete */}
      {!completed && !showComplete && (
        <button
          onClick={() => setShowComplete(true)}
          className="ripple w-full mt-8 py-4 bg-sage text-parchment rounded-2xl text-sm font-medium tracking-wide transition-all duration-500 hover:bg-sage/90 active:scale-[0.98]"
        >
          Mark Complete
        </button>
      )}

      {!completed && showComplete && (
        <div className="mt-8 space-y-4 zen-slide-up">
          <textarea
            value={journal}
            onChange={e => setJournal(e.target.value)}
            placeholder="How did today's practice feel? (optional)"
            className="w-full p-4 bg-parchment/60 border border-ink/10 rounded-2xl text-sm font-light text-charcoal placeholder:text-ink/40 resize-none focus:outline-none focus:border-sage/30"
            rows={3}
            aria-label="Practice journal entry"
          />
          <div className="flex gap-3">
            <button
              onClick={() => setShowComplete(false)}
              className="flex-1 py-3 border border-ink/10 rounded-2xl text-sm text-ink font-light"
            >
              Cancel
            </button>
            <button
              onClick={handleComplete}
              className="ripple flex-1 py-3 bg-sage text-parchment rounded-2xl text-sm font-medium"
            >
              Complete Day {dayNumber}
            </button>
          </div>
        </div>
      )}

      {completed && (
        <div className="mt-8 text-center py-4 bg-sage-light/50 rounded-2xl">
          <svg className="w-8 h-8 mx-auto text-sage" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M8 16l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ strokeDasharray: 40, strokeDashoffset: 0, animation: 'brushStroke 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards' }} />
          </svg>
          <p className="text-sage text-sm font-light mt-1">Completed</p>
        </div>
      )}

      {/* Wisdom quote */}
      <WisdomQuote text={lesson.dayWisdom.text} source={lesson.dayWisdom.source} />
    </PageWrapper>
  );
}
