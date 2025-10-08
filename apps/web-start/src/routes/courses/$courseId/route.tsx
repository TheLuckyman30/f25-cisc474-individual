import { Outlet, createFileRoute } from '@tanstack/react-router';
import CourseNavBar from './course-navbar';

export const Route = createFileRoute('/courses/$courseId')({
  component: CoursePageLayout,
});

function CoursePageLayout() {
  return (
    <>
      <CourseNavBar />
      <Outlet />
    </>
  );
}
