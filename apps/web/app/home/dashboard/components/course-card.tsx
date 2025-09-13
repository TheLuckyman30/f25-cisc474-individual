import Link from 'next/link';
import { Course } from '../../../temp-data/temp-interfaces';

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="min-h-100 border border-red-400 p-5 rounded-md shadow-2xl">
      <Link
        href={`/courses/${course.id}/course-home`}
        className="border border-black p-1 rounded-md"
      >
        {course.name}
      </Link>
    </div>
  );
}

export default CourseCard;
