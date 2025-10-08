import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/courses/$courseId/grades/')({
  component: CourseGradesPage,
});

function CourseGradesPage() {
  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <div className="p-30 rounded-md shadow-2xl border border-red-500 font-bold">
        No grade data is being pulled here yet! (WIP)
      </div>
    </div>
  );
}
