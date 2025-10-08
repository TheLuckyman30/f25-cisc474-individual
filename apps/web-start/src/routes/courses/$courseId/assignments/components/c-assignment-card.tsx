import { Link } from '@tanstack/react-router';
import type { Assignment } from '../../../../../interfaces/assignment';

interface AssignmentCardProps {
  assignment: Assignment;
}

function CourseAssignmentCard({ assignment }: AssignmentCardProps) {
  return (
    <div className="border border-red-500 p-2 rounded-md">
      <Link
        to={'/courses/$courseId/assignments/$assignmentId'}
        params={{ courseId: assignment.courseId, assignmentId: assignment.id }}
      >{`Assignment Name: ${assignment.title}`}</Link>
      <div>{`Content: ${assignment.description}`}</div>
    </div>
  );
}

export default CourseAssignmentCard;
