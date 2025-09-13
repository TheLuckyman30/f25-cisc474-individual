import { courses } from '../../../temp-data/temp-data.json';
import AssignmentCard from './components/assingment-card';

async function CourseAssignments({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const selectedCourse = courses.find((c) => c.id === course);
  if (selectedCourse) {
    return (
      <div className="mt-30 ml-30">
        <div className="grid grid-cols-6 gap-20">
          {selectedCourse.assignmentIds.map((id, index) => (
            <AssignmentCard key={index} assignmentId={id}></AssignmentCard>
          ))}
        </div>
      </div>
    );
  }
}

export default CourseAssignments;
