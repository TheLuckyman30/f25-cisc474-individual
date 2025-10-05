import Assignments from './components/assignments';
export const dynamic = 'force-dynamic';

async function getAssignmentsForCourse(courseId: string) {
  return fetch(
    process.env.BACKEND_URL + `/courses/${courseId}/assignments`,
  ).then((response) => response.json());
}

async function AssignmentsPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const courseId = (await params).course;
  const assignments = getAssignmentsForCourse(courseId);

  return <Assignments assignments={assignments} />;
}

export default AssignmentsPage;
