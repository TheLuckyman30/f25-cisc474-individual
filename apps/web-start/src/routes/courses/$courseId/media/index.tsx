import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/courses/$courseId/media/')({
  component: CourseMediaPage,
});

function CourseMediaPage() {
  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <div className="p-30 rounded-md shadow-2xl border border-red-500 font-bold">
        No media data is being pulled here yet! (WIP)
      </div>
    </div>
  );
}
