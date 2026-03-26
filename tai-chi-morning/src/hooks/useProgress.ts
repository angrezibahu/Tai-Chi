import { useState, useEffect, useCallback } from 'react';

export interface LessonProgress {
  lessonId: number;
  completedAt: string;
  practiceMinutes: number;
  journal?: string;
}

export interface ProgressData {
  completedLessons: LessonProgress[];
  currentLesson: number;
}

const STORAGE_KEY = 'tai-chi-progress';

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { completedLessons: [], currentLesson: 1 };
}

function saveProgress(data: ProgressData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const completeLesson = useCallback((lessonId: number, practiceMinutes: number, journal?: string) => {
    setProgress(prev => {
      const already = prev.completedLessons.find(l => l.lessonId === lessonId);
      if (already) return prev;
      const entry: LessonProgress = {
        lessonId,
        completedAt: new Date().toISOString(),
        practiceMinutes,
        journal,
      };
      const completedLessons = [...prev.completedLessons, entry];
      const maxCompleted = Math.max(...completedLessons.map(l => l.lessonId));
      return {
        completedLessons,
        currentLesson: Math.min(maxCompleted + 1, 20),
      };
    });
  }, []);

  const updateJournal = useCallback((lessonId: number, journal: string) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.map(l =>
        l.lessonId === lessonId ? { ...l, journal } : l
      ),
    }));
  }, []);

  const isCompleted = useCallback((lessonId: number) => {
    return progress.completedLessons.some(l => l.lessonId === lessonId);
  }, [progress.completedLessons]);

  const getJournal = useCallback((lessonId: number) => {
    return progress.completedLessons.find(l => l.lessonId === lessonId)?.journal;
  }, [progress.completedLessons]);

  const totalPracticeMinutes = progress.completedLessons.reduce((sum, l) => sum + l.practiceMinutes, 0);

  const currentStreak = (() => {
    if (progress.completedLessons.length === 0) return 0;
    const sorted = [...progress.completedLessons].sort(
      (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    );
    const days = sorted.map(l => new Date(l.completedAt).toDateString());
    const unique = [...new Set(days)];
    let streak = 1;
    for (let i = 1; i < unique.length; i++) {
      const prev = new Date(unique[i - 1]);
      const curr = new Date(unique[i]);
      const diff = (prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24);
      if (diff <= 1.5) streak++;
      else break;
    }
    return streak;
  })();

  const exportData = useCallback(() => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tai-chi-progress.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [progress]);

  const importData = useCallback((json: string) => {
    try {
      const data = JSON.parse(json);
      if (
        !Array.isArray(data?.completedLessons) ||
        typeof data?.currentLesson !== 'number' ||
        data.currentLesson < 1 ||
        data.currentLesson > 20
      ) return false;

      const validLessons = data.completedLessons.every(
        (l: unknown): l is LessonProgress =>
          typeof l === 'object' && l !== null &&
          typeof (l as LessonProgress).lessonId === 'number' &&
          (l as LessonProgress).lessonId >= 1 &&
          (l as LessonProgress).lessonId <= 20 &&
          typeof (l as LessonProgress).completedAt === 'string' &&
          !isNaN(Date.parse((l as LessonProgress).completedAt)) &&
          typeof (l as LessonProgress).practiceMinutes === 'number' &&
          (l as LessonProgress).practiceMinutes >= 0 &&
          ((l as LessonProgress).journal === undefined ||
            typeof (l as LessonProgress).journal === 'string')
      );
      if (!validLessons) return false;

      const sanitized: ProgressData = {
        completedLessons: data.completedLessons.map((l: LessonProgress) => ({
          lessonId: l.lessonId,
          completedAt: l.completedAt,
          practiceMinutes: l.practiceMinutes,
          ...(l.journal !== undefined ? { journal: l.journal } : {}),
        })),
        currentLesson: data.currentLesson,
      };
      setProgress(sanitized);
      return true;
    } catch { /* ignore */ }
    return false;
  }, []);

  return {
    progress,
    completeLesson,
    updateJournal,
    isCompleted,
    getJournal,
    totalPracticeMinutes,
    currentStreak,
    exportData,
    importData,
  };
}
