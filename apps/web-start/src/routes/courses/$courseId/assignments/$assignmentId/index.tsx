import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { backendFetcher } from '../../../../../integrations/fetcher';
import type { Assignment } from '../../../../../interfaces/assignment';

export const Route = createFileRoute(
  '/courses/$courseId/assignments/$assignmentId/',
)({
  component: AssignmentPage,
});

function AssignmentPage() {
  const { assignmentId } = Route.useParams();
  const selectedAssignment = useQuery<Assignment>({
    queryKey: [`/assignments/${assignmentId}`],
    queryFn: backendFetcher(`/assignments/${assignmentId}`),
  });

  if (selectedAssignment.isFetching) {
    return <div>Loading....</div>;
  }

  if (selectedAssignment.data) {
    return (
      <div className="mt-30 ml-30">
        <div className="font-bold text-3xl">
          {selectedAssignment.data.title}
        </div>
        <div className="text-2xl flex gap-5">
          <div>{`Due Date: ${selectedAssignment.data.dueDate}`}</div>
          <div>Submission Type: PDF</div>
        </div>
        <div className="text-2xl">Content</div>
        <div>{selectedAssignment.data.description}</div>
      </div>
    );
  }
}
