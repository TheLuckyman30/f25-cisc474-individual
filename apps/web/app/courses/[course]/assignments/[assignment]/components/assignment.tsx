import { GetAssignmentDto } from '@repo/api/assignments/dto/get-assignment.dto';
import { use } from 'react';

interface AssignmentProps {
  assignment: Promise<GetAssignmentDto>;
}

function Assignment({ assignment }: AssignmentProps) {
  const selectedAssignment = use(assignment);
  return (
    <div className="mt-30 ml-30">
      <div className="font-bold text-3xl">{selectedAssignment.title}</div>
      <div className="text-2xl flex gap-5">
        <div>{`Due Date: ${selectedAssignment.dueDate}`}</div>
        <div>Submission Type: PDF</div>
      </div>
      <div className="text-2xl">Content</div>
      <div>{selectedAssignment.description}</div>
    </div>
  );
}

export default Assignment;
