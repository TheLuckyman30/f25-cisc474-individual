import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { backendFetcher } from '../../../../integrations/fetcher';
import CourseAssignmentCard from './components/c-assignment-card';
import type { Assignment } from '../../../../interfaces/assignment';

export const Route = createFileRoute('/courses/$courseId/assignments/')({
  component: AssignmentsPage,
});

function AssignmentsPage() {
  const { courseId } = Route.useParams();
  const courseAssignments = useQuery<Array<Assignment>>({
    queryKey: [`/courses/${courseId}/assignments`],
    queryFn: backendFetcher(`/courses/${courseId}/assignments`),
    initialData: [],
  });

  if (courseAssignments.isFetching) {
    return (
      <div className="flex justify-center w-lvw min-h-lvh pt-[50vh]">
        Loading Course Assignments...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center pt-28 w-lvw">
      <div className="flex flex-wrap gap-5 w-[90%] md:w-[50%]">
        {courseAssignments.data.map((assignment, index) => (
          <CourseAssignmentCard
            key={index}
            assignment={assignment}
          ></CourseAssignmentCard>
        ))}
      </div>
    </div>
  );
}
