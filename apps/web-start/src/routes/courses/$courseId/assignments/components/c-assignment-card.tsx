import { Link } from '@tanstack/react-router';
import type { Assignment } from '../../../../../interfaces/assignment';

interface AssignmentCardProps {
  assignment: Assignment;
}

function CourseAssignmentCard({ assignment }: AssignmentCardProps) {
  const dueDate: Date = new Date(assignment.dueDate);
  const time = dueDate.toLocaleTimeString();
  const date = dueDate.toLocaleDateString();
  return (
    <Link
      to={'/courses/$courseId/assignments/$assignmentId'}
      params={{ courseId: assignment.courseId, assignmentId: assignment.id }}
      className="flex flex-col justify-between rounded-md p-2 shadow-md bg-white border-b-blue-400 border-b-8 min-h-45 w-full hover:scale-102 duration-75"
    >
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">{assignment.title}</div>
        <div className="font-bold">
          Due:{' '}
          <span className="bg-blue-400 rounded-md p-0.5 text-white">
            {date} | {time}
          </span>
        </div>
        <div>{assignment.description}</div>
      </div>
    </Link>
  );
}

export default CourseAssignmentCard;
