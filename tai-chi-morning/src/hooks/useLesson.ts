import { useMemo } from 'react';
import { lessons } from '../data/lessons';
import type { Lesson } from '../data/lessons';

export function useLesson(lessonId: number): Lesson | undefined {
  return useMemo(() => lessons.find(l => l.id === lessonId), [lessonId]);
}

export function useCurrentLesson(currentLessonId: number): {
  lesson: Lesson | undefined;
  dayNumber: number;
  totalDays: number;
} {
  const lesson = useLesson(currentLessonId);
  return {
    lesson,
    dayNumber: currentLessonId,
    totalDays: lessons.length,
  };
}
