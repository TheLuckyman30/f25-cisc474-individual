import Assignments from './components/assignments';

async function getAssignmentsForCourse(courseId: string) {
  return fetch(
    process.env.BACKEND_URL + `/courses/${courseId}/assignments`,
  ).then((response) => response.json());
}

async function AssignmentsPage({ params }: { params: { course: string } }) {
  const courseId = params.course;
  const assignments = getAssignmentsForCourse(courseId);

  return <Assignments assignments={assignments} />;
}

export default AssignmentsPage;
