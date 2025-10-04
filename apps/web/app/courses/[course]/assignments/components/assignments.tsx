import { GetAssignmentDto } from '@repo/api/assignments/dto/get-assignment.dto';
import { use } from 'react';
import AssignmentCard from './assingment-card';

interface AssignmentsProps {
  assignments: Promise<GetAssignmentDto[]>;
}

function Assignments({ assignments }: AssignmentsProps) {
  const courseAssignments = use(assignments);
  return (
    <div className="mt-30 ml-30">
      <div className="grid grid-cols-6 gap-20">
        {courseAssignments.map((assignment, index) => (
          <AssignmentCard key={index} assignment={assignment}></AssignmentCard>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
