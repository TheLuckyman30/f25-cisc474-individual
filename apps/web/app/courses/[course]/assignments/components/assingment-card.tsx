import { Assignment } from '../../../../temp-data/temp-interfaces';
import { assignments } from '../../../../temp-data/temp-data.json';
import Link from 'next/link';

interface AssignmentCardProps {
  assignmentId: string;
}

function AssignmentCard({ assignmentId }: AssignmentCardProps) {
  const assignment: Assignment | undefined = assignments.find(
    (a) => a.id === assignmentId,
  );
  if (assignment) {
    return (
      <div className="border border-red-500 p-2 rounded-md">
        <Link
          href={`assignments/${assignment.id}`}
        >{`Assignment Name: ${assignment.name}`}</Link>
        <div>{`Content: ${assignment.description}`}</div>
      </div>
    );
  }
}

export default AssignmentCard;
