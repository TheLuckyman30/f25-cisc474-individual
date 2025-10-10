import { Link } from '@tanstack/react-router';
import { MoveRight } from 'lucide-react';
import type { Assignment } from '../../../../../interfaces/assignment';

interface AssignmentCardProps {
  assignment: Assignment;
}

function CourseAssignmentCard({ assignment }: AssignmentCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-md p-2 shadow-md bg-white border-b-blue-400 border-b-8 min-h-75 w-full md:w-75 ">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-between ">
          <div className="font-bold text-xl">{assignment.title}</div>
          <Link
            to={'/courses/$courseId/assignments/$assignmentId'}
            params={{
              courseId: assignment.courseId,
              assignmentId: assignment.id,
            }}
            className="flex h-fit w-fit bg-blue-400 rounded-md p-1 hover:scale-110 duration-100"
          >
            <MoveRight color="white" />
          </Link>
        </div>
        <div>{assignment.description}</div>
      </div>
    </div>
  );
}

export default CourseAssignmentCard;
