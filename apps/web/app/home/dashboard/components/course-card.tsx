import Link from 'next/link';
import { assignments } from '../../../temp-data/temp-data.json';
import { Assignment, Course } from '../../../temp-data/temp-interfaces';
import { MoveRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  const nextAssignment: Assignment | undefined = assignments.find(
    (assignment) => assignment.courseId === course.id,
  );

  if (nextAssignment) {
    return (
      <div className="flex flex-col justify-between rounded-md p-2 shadow-md bg-gray-100 border-b-blue-400 border-b-8 min-h-75 w-full lg:w-75 ">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-between ">
            <div className="font-bold text-xl">{course.name}</div>
            <Link
              href={`/courses/${course.id}/course-home`}
              className="flex h-fit w-fit bg-blue-400 rounded-md p-1 hover:scale-110 duration-100"
            >
              <MoveRight color="white" />
            </Link>
          </div>
          <div>{course.description}</div>
        </div>
      </div>
    );
  }
}

export default CourseCard;
