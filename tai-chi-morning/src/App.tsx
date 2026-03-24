import { Routes, Route } from 'react-router-dom';
import { TabNav } from './components/layout/TabNav';
import { TodayView } from './components/today/TodayView';
import { CourseView } from './components/course/CourseView';
import { LibraryView } from './components/library/LibraryView';
import { ProgressView } from './components/progress/ProgressView';
import { useProgress } from './hooks/useProgress';

export default function App() {
  const {
    progress,
    completeLesson,
    isCompleted,
    getJournal,
    totalPracticeMinutes,
    currentStreak,
    exportData,
    importData,
  } = useProgress();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <TodayView
              progress={progress}
              completeLesson={completeLesson}
              isCompleted={isCompleted}
            />
          }
        />
        <Route
          path="/course"
          element={
            <CourseView
              progress={progress}
              isCompleted={isCompleted}
            />
          }
        />
        <Route path="/library" element={<LibraryView />} />
        <Route
          path="/progress"
          element={
            <ProgressView
              progress={progress}
              totalPracticeMinutes={totalPracticeMinutes}
              currentStreak={currentStreak}
              getJournal={getJournal}
              exportData={exportData}
              importData={importData}
            />
          }
        />
      </Routes>
      <TabNav />
    </>
  );
}
