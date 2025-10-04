import { GetAssignmentDto } from '@repo/api/assignments/dto/get-assignment.dto';
import Link from 'next/link';

interface AssignmentCardProps {
  assignment: GetAssignmentDto;
}

function AssignmentCard({ assignment }: AssignmentCardProps) {
  return (
    <div className="border border-red-500 p-2 rounded-md">
      <Link
        href={`assignments/${assignment.id}`}
      >{`Assignment Name: ${assignment.title}`}</Link>
      <div>{`Content: ${assignment.description}`}</div>
    </div>
  );
}

export default AssignmentCard;
