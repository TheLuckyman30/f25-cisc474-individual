import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { backendFetcher } from '../../../../integrations/fetcher';
import type { CourseOut } from '@repo/api/courses';

export const Route = createFileRoute('/courses/$courseId/course-home/')({
  component: CourseHome,
});

function CourseHome() {
  const { courseId } = Route.useParams();
  const userCourse = useQuery<CourseOut>({
    queryKey: [`/courses/${courseId}`],
    queryFn: backendFetcher(`/courses/${courseId}`),
  });

  if (userCourse.isFetching) {
    return (
      <div className="flex justify-center w-lvw min-h-lvh pt-[50vh]">
        Loading Course Data...
      </div>
    );
  }
  if (userCourse.data) {
    return (
      <div className="mt-30 ml-30">
        <div className="font-bold text-3xl">{userCourse.data.name}</div>
        <div className="text-2xl">Description</div>
        <div>{userCourse.data.description}</div>
      </div>
    );
  }
}
