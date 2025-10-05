import Assignment from './components/assignment';
export const dynamic = 'force-dynamic';

async function getAssignmentById(assignmentId: string) {
  return fetch(process.env.BACKEND_URL + `/assignments/${assignmentId}`).then(
    (response) => response.json(),
  );
}

async function AssignmentPage({
  params,
}: {
  params: Promise<{ assignment: string }>;
}) {
  const assignmentId = (await params).assignment;
  const assignment = getAssignmentById(assignmentId);

  return <Assignment assignment={assignment} />;
}

export default AssignmentPage;
